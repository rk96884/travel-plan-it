import { validateEnquiry, emailText } from '../../../lib/enquiry';
import { site } from '../../../lib/site';
import { enquiriesEnabled } from '../../../lib/enquiry-config';
import { getEnquiryEnv, enquiryMail } from '../../../lib/worker-env';

const reply = (body: object, status = 200) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
export async function POST(request: Request) {
  // Restrict browser submissions to this origin. Credentials never reach the client.
  if (request.headers.get('origin') !== new URL(request.url).origin)
    return reply({ error: 'Please reload the page and try again.' }, 403);
  if (!request.headers.get('content-type')?.startsWith('application/json'))
    return reply({ error: 'Unsupported request.' }, 415);
  if (Number(request.headers.get('content-length') || 0) > 20000)
    return reply({ error: 'Your enquiry is too long.' }, 413);
  let raw: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: 'An enquiry is required.' }, 400);
    let size = 0;
    let body = '';
    const decoder = new TextDecoder();
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      size += part.value.byteLength;
      if (size > 20000) {
        await reader.cancel();
        return reply({ error: 'Your enquiry is too long.' }, 413);
      }
      body += decoder.decode(part.value, { stream: true });
    }
    const parsed: unknown = JSON.parse(body + decoder.decode());
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed))
      return reply({ error: 'Invalid enquiry.' }, 400);
    raw = parsed as Record<string, unknown>;
  } catch {
    return reply({ error: 'Please check your enquiry and try again.' }, 400);
  }
  if (raw.website)
    return reply({ error: 'We could not verify this submission.' }, 400);
  const result = validateEnquiry(raw.data);
  if (!result.valid)
    return reply(
      { error: 'Please check the highlighted fields.', fields: result.errors },
      400,
    );
  const id = raw.id;
  if (
    typeof id !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      id,
    )
  )
    return reply({ error: 'Please reload the form.' }, 400);
  const { RESEND_API_KEY, TURNSTILE_SECRET_KEY } = getEnquiryEnv();
  if (
    !enquiriesEnabled() ||
    !RESEND_API_KEY ||
    !TURNSTILE_SECRET_KEY
  )
    return reply(
      {
        error: `Online enquiries are not available yet. Please email ${site.contactEmail}. Your details have not been sent.`,
      },
      503,
    );
  if (typeof raw.token !== 'string' || raw.token.length > 2048 || !raw.token)
    return reply({ error: 'Please complete the security check.' }, 400);
  try {
    const verification = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET_KEY,
          response: raw.token,
        }),
        signal: AbortSignal.timeout(10000),
      },
    );
    const checked = (await verification.json()) as {
      success?: boolean;
      hostname?: string;
      action?: string;
    };
    if (
      !verification.ok ||
      !checked.success ||
      checked.hostname !== new URL(request.url).hostname ||
      checked.action !== 'enquiry'
    )
      return reply(
        { error: 'The security check expired. Please try again.' },
        400,
      );
    const reference = `TPI-${id}`;
    const sent = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `enquiry-${id}`,
      },
      body: JSON.stringify([
        {
          from: enquiryMail.from,
          to: [enquiryMail.internalRecipient],
          reply_to: result.data.email,
          subject: `Travel Plan It enquiry — ${reference}`,
          text: emailText(result.data, reference),
        },
        {
          from: enquiryMail.from,
          to: [result.data.email],
          reply_to: site.contactEmail,
          subject: `Your Travel Plan It enquiry — ${reference}`,
          text: `Thank you for getting in touch with Travel Plan It.\n\nWe have received your travel enquiry and will review your plans before contacting you.\n\nYour reference: ${reference}\n\nThis acknowledgement is not a booking confirmation or a quote. If you would like to add anything, reply to this email.\n\nIf you did not submit an enquiry, you can disregard this email or contact ${site.contactEmail}. You have not been subscribed to marketing.\n\nTravel Plan It\nTailor-made travel, built around you.`,
        },
      ]),
      signal: AbortSignal.timeout(15000),
    });
    const accepted = (await sent.json()) as { data?: { id?: string }[] };
    if (
      !sent.ok ||
      accepted.data?.length !== 2 ||
      !accepted.data.every(
        (message) => typeof message.id === 'string' && message.id.length > 0,
      )
    )
      return reply(
        {
          error:
            'We could not confirm your enquiry was sent. Please retry with the same details, or email us directly.',
        },
        502,
      );
    return reply({ reference });
  } catch {
    return reply(
      {
        error:
          'We could not confirm delivery. Your details are still here: please retry, or email us directly.',
      },
      502,
    );
  }
}
