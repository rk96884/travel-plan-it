'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import {
  fields,
  emptyEnquiry,
  validateEnquiry,
  type Field,
} from '../../lib/enquiry';
import { site } from '../../lib/site';
import { trackEnquiryGenerated } from '../../lib/analytics';

type Turnstile = {
  render: (node: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}
const steps = [
  'Your ideas',
  'Dates & travellers',
  'The details',
  'Review & send',
];
const groups: Field[][] = [
  ['destination', 'style'],
  ['dates', 'duration', 'adults', 'children'],
  ['airport', 'budget', 'accommodation', 'notes'],
  ['name', 'email', 'phone'],
];
const hints: Partial<Record<Field, string>> = {
  destination: 'For example, Vietnam and Cambodia — or “Not sure yet”.',
  style:
    'Beaches, food, wildlife, a family adventure… what would make it special?',
  dates: 'A date, a month, or “Flexible” is fine.',
  children: 'For example, 2 children aged 6 and 10. No dates of birth needed.',
  budget:
    'Approximate budget for everyone travelling, in GBP. “Not sure yet” is fine.',
  accommodation:
    'Tell us the types of places you enjoy staying, and whether you prefer plenty of time to relax, lots of activities, or a mix of both.',
  notes:
    'Please do not include passport details, payment information or sensitive health information.',
};
const longFields: Field[] = ['destination', 'style', 'accommodation', 'notes'];
type TripPrefill = {
  destination: string;
  style: string;
  duration: string;
  notes: string;
  options: Record<string, string>;
};

const tripPrefills: Record<string, TripPrefill> = {
  'singapore-batam-johor-three-country': {
    destination: 'Singapore, Indonesia & Malaysia — Singapore, Batam and Johor Bahru',
    style: 'Private Singapore city and Sentosa tour, Big Bus sightseeing, Batam resort stay and Johor Bahru exploration with ferries and private transfers',
    duration: '16 days / 13 nights',
    notes: 'Interested in the three-country Singapore, Batam & Johor Bahru holiday. Essential from £2,749pp based on two sharing; premium price on request. Please provide a personalised quotation; availability and schedules are unconfirmed.',
    options: {
      essential: 'Essential escape (Holiday Inn Singapore Orchard City Centre + Holiday Inn Resort Batam + Holiday Inn Johor Bahru City Centre)',
      premium: 'Premium escape (Hilton Singapore Orchard + Montigo Resorts Nongsa + Amari Johor Bahru; price on request)',
    },
  },
  'bangkok-phuket-twin-centre': {
    destination: 'Thailand — Bangkok & Phuket twin-centre holiday',
    style: 'Private Bangkok temple and market tours, followed by a Phuket beach stay',
    duration: '12 days / 10 nights',
    notes: 'Interested in the Bangkok & Phuket trip idea. Please provide a personalised quotation; example prices are indicative.',
    options: {
      essential: 'Essential escape (ibis Bangkok Sathorn + ibis Phuket Patong)',
      premium: 'Premium escape (Amari Bangkok + Amari Phuket)',
    },
  },
  'phnom-penh-siem-reap-twin-centre': {
    destination: 'Cambodia — Phnom Penh & Siem Reap twin-centre holiday',
    style: 'Private guided sightseeing in Phnom Penh and the Angkor temples near Siem Reap',
    duration: '12 days / 10 nights',
    notes: 'Interested in the Phnom Penh & Siem Reap trip idea. Please provide a personalised quotation; example prices are indicative.',
    options: {
      essential: 'Essential escape (ibis budget Phnom Penh Riverside + ibis Styles Siem Reap)',
      premium: 'Luxury escape (Sofitel Phnom Penh Phokeethra + Sofitel Angkor Phokeethra Golf & Spa Resort)',
    },
  },
  'hanoi-ho-chi-minh-city-twin-centre': {
    destination: 'Vietnam — Hanoi & Ho Chi Minh City twin-centre holiday',
    style: 'Guided sightseeing in Hanoi and Ho Chi Minh City, with regional excursions',
    duration: '12 days / 10 nights',
    notes: 'Interested in the Hanoi & Ho Chi Minh City trip idea. Please provide a personalised quotation; example prices are indicative.',
    options: {
      essential: 'Essential escape (Pullman Hanoi + Pullman Saigon Centre)',
      premium: 'Premium escape (Grand Mercure Hanoi + La Siesta Premium Saigon Central)',
    },
  },
  'luang-prabang-vientiane-twin-centre': {
    destination: 'Laos — Luang Prabang & Vientiane twin-centre holiday',
    style: 'Guided cultural sightseeing in Luang Prabang and Vientiane, with time at leisure',
    duration: '12 days / 10 nights',
    notes: 'Interested in the Luang Prabang & Vientiane trip idea. Please provide a personalised quotation; example prices are indicative.',
    options: {
      essential: 'Essential escape (MyBanLao + Crowne Plaza Vientiane)',
      premium: 'Premium escape (Avani+ Luang Prabang + Avani+ Lanexang Vientiane)',
    },
  },
};

export default function EnquiryForm({ siteKey }: { siteKey: string }) {
  const [data, setData] = useState({ ...emptyEnquiry });
  // Prefill only recognised published itineraries; keep every field editable.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('trip') || '';
    if (!Object.prototype.hasOwnProperty.call(tripPrefills, slug)) return;
    const trip = tripPrefills[slug];
    const tier = params.get('tier') || '';
    const accommodation = Object.prototype.hasOwnProperty.call(trip.options, tier)
      ? trip.options[tier]
      : '';
    setData(previous => ({
      ...previous,
      destination: trip.destination,
      style: trip.style,
      duration: trip.duration,
      ...(accommodation ? { accommodation } : {}),
      notes: trip.notes,
    }));
  }, []);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState('');
  const [token, setToken] = useState('');
  const [website, setWebsite] = useState('');
  const [requestId, setRequestId] = useState(() => crypto.randomUUID());
  const locked = useRef(false);
  const widget = useRef('');
  const widgetNode = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (step !== 3 || !siteKey || reference) return;
    let stopped = false;
    const mount = () => {
      if (!stopped && window.turnstile && widgetNode.current) {
        widget.current = window.turnstile.render(widgetNode.current, {
          sitekey: siteKey,
          action: 'enquiry',
          callback: (value: string) => setToken(value),
          'expired-callback': () => setToken(''),
          'error-callback': () => {
            setToken('');
            setError(
              'Security check unavailable. Please retry or email us directly.',
            );
          },
        });
      }
    };
    if (window.turnstile) mount();
    else {
      let script = document.getElementById(
        'turnstile-script',
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'turnstile-script';
        script.src =
          'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        document.head.appendChild(script);
      }
      script.addEventListener('load', mount, { once: true });
    }
    return () => {
      stopped = true;
      if (widget.current) window.turnstile?.remove(widget.current);
      widget.current = '';
      setToken('');
    };
  }, [step, siteKey, reference]);
  function updateField(key: Field, value: string) {
    setRequestId(crypto.randomUUID());
    setData((previous) => ({ ...previous, [key]: value }));
  }
  function go(next: number) {
    setStep(next);
    setError('');
    setTimeout(() => heading.current?.focus(), 0);
  }
  function next() {
    const checked = validateEnquiry(data);
    const active = Object.fromEntries(
      Object.entries(checked.errors).filter(([key]) =>
        groups[step].includes(key as Field),
      ),
    );
    setErrors(active);
    if (Object.keys(active).length) {
      document.getElementById(Object.keys(active)[0])?.focus();
      return;
    }
    go(step + 1);
  }
  async function submit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) {
      next();
      return;
    }
    if (locked.current) return;
    const checked = validateEnquiry(data);
    setErrors(checked.errors);
    if (!checked.valid) {
      const first = Object.keys(checked.errors)[0] as Field;
      go(groups.findIndex((group) => group.includes(first)));
      setTimeout(() => document.getElementById(first)?.focus(), 0);
      return;
    }
    if (!token) {
      setError('Please complete the security check before sending.');
      return;
    }
    locked.current = true;
    setSending(true);
    setError('');
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: checked.data,
          id: requestId,
          token,
          website,
        }),
        signal: AbortSignal.timeout(30000),
      });
      const body = (await response.json()) as {
        reference?: string;
        error?: string;
      };
      if (response.ok && body.reference) {
        trackEnquiryGenerated();
        setReference(body.reference);
        setTimeout(() => heading.current?.focus(), 0);
      } else
        setError(
          body.error || 'Your enquiry could not be sent. Please try again.',
        );
    } catch {
      setError(
        'We could not confirm your enquiry was sent. Please retry or email us directly.',
      );
    } finally {
      locked.current = false;
      setSending(false);
      setToken('');
      if (widget.current) window.turnstile?.reset(widget.current);
    }
  }
  if (reference)
    return (
      <section className="trip-card trip-confirmation">
        <h2 ref={heading} tabIndex={-1}>
          Thank you for sharing your plans.
        </h2>
        <p>
          Your enquiry has been accepted for delivery to our team. We’ll review
          your ideas and get in touch using the contact details you provided.
        </p>
        <p className="reference">Reference: {reference}</p>
        <p>This is an enquiry, not a confirmed booking.</p>
        <Link href="/">Back to Travel Plan It</Link>
      </section>
    );
  return (
    <form className="trip-card" onSubmit={submit} noValidate>
      <ol className="trip-steps" aria-label="Enquiry progress">
        {steps.map((label, index) => (
          <li key={label} aria-current={step === index ? 'step' : undefined}>
            <span>{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>
      <h2 ref={heading} tabIndex={-1}>
        {steps[step]}
      </h2>
      <p className="optional-note">
        Only destination ideas, your name and email are required. Everything
        else is optional.
      </p>
      <fieldset disabled={sending} className="trip-fields">
        <legend className="sr-only">{steps[step]}</legend>
        {groups[step].map((key) => {
          const definition = fields.find((field) => field[0] === key)!;
          const props = {
            id: key,
            name: key,
            value: data[key],
            maxLength: definition[2],
            required: ['destination', 'name', 'email'].includes(key),
            'aria-invalid': !!errors[key],
            'aria-describedby': `${key}-hint ${errors[key] ? `${key}-error` : ''}`,
            onChange: (
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              updateField(key, event.target.value);
            },
          };
          return (
            <div className="trip-field" key={key}>
              <label htmlFor={key}>
                {definition[1]}
                {props.required ? ' *' : ''}
              </label>
              {longFields.includes(key) ? (
                <Textarea {...props} />
              ) : (
                <Input
                  {...props}
                  type={
                    key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'
                  }
                  autoComplete={
                    key === 'email'
                      ? 'email'
                      : key === 'name'
                        ? 'name'
                        : key === 'phone'
                          ? 'tel'
                          : 'off'
                  }
                  inputMode={key === 'adults' ? 'numeric' : undefined}
                />
              )}
              <small id={`${key}-hint`}>{hints[key]}</small>
              {errors[key] && (
                <p className="field-error" id={`${key}-error`}>
                  {errors[key]}
                </p>
              )}
            </div>
          );
        })}
      </fieldset>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>
      {step === 3 && (
        <>
          <section className="trip-review" aria-label="Your trip summary">
            <h3>Your trip so far</h3>
            <dl>
              {fields
                .filter(([key]) => !groups[3].includes(key) && data[key])
                .map(([key, label]) => (
                  <div key={key}>
                    <dt>{label}</dt>
                    <dd>{data[key]}</dd>
                  </div>
                ))}
            </dl>
            <Button
              type="button"
              variant="outline"
              disabled={sending}
              onClick={() => go(0)}
            >
              Edit trip details
            </Button>
          </section>
          <p>
            We’ll use these details to respond to your enquiry. You won’t be
            subscribed to marketing.{' '}
            <Link href="/privacy/">How we handle your information</Link>.
          </p>
          {siteKey ? (
            <div ref={widgetNode} />
          ) : (
            <p className="form-notice">
              Online sending is being set up. You can prepare your brief here,
              or <a href={`mailto:${site.contactEmail}`}>email us directly</a>.
            </p>
          )}
        </>
      )}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="trip-actions">
        {step > 0 && (
          <Button
            variant="outline"
            type="button"
            disabled={sending}
            onClick={() => go(step - 1)}
          >
            Back
          </Button>
        )}
        <Button
          type="submit"
          disabled={sending || (step === 3 && (!siteKey || !token))}
        >
          {sending
            ? 'Sending your enquiry…'
            : step === 3
              ? 'Send my enquiry'
              : 'Continue →'}
        </Button>
      </div>
      <p className="direct-contact">
        Prefer a conversation by email?{' '}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </p>
    </form>
  );
}
