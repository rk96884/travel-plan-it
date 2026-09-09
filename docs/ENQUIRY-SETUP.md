# Enquiry form â€” setup and release

## Implemented

The four-step form is at `/plan-my-trip/`. It validates a shared schema on the client and server and submits to `/api/enquiries`. The homepage switches from its email link to the form only when all settings are present and `ENQUIRIES_ENABLED=true`.

Resend is the selected service; start on the free tier. Each successful enquiry requests two transactional emails in a single batch:

1. Internal notification to **rishikhosla@mytravelplanit.co.uk**, with the customer's email as Reply-To and their complete trip brief as plain text.
2. Customer acknowledgement with a reference, no marketing subscription and no booking promise. Replies go to **enquiries@mytravelplanit.co.uk**. It does not echo unverified free-text content.

Both messages use the fixed sender `Travel Plan It <enquiries@mytravelplanit.co.uk>`. The user confirmed domain verification and an encrypted production Worker secret named `RESEND_API_KEY`.

## Required configuration

Create or use a Resend account on the free tier, add mytravelplanit.co.uk and complete the DNS verification records Resend supplies. Do not invent DNS values or replace the existing mailbox's MX records. Obtain a sending API key scoped as narrowly as supported.

Create a Cloudflare Turnstile widget for the actual website hostnames, including mytravelplanit.co.uk and the selected preview hostname when testing. Configure:

| Variable | Value | Secret? |
| --- | --- | --- |
| RESEND_API_KEY | Resend sending key | Yes |
| TURNSTILE_SITE_KEY | Widget site key | No |
| TURNSTILE_SECRET_KEY | Widget secret | Yes |
| ENQUIRIES_ENABLED | false until release checks pass; true to enable | No |

The server reads bindings directly from `cloudflare:workers`; it does not read the API key from process.env or client configuration. Set secrets on the deployed Cloudflare Worker and non-secret variables in its settings. For local testing, use ignored `website/.dev.vars` with test credentials only. Never place real keys in any .env file, source or hosting.json. Never paste secrets into chat, screenshots, logs or committed files. Only the Turnstile site key is passed to the browser.

## Runtime and delivery behaviour

This feature requires a server/Cloudflare Worker. Static export cannot run the email endpoint; output: export was removed for this reason. Deployment must include the server build, not only static files. Preserve the existing live holding page until this version is ready.

Server checks include request origin, JSON/body-size limits, field validation, honeypot and Turnstile server verification of hostname/action. Resend requests use a stable idempotency key and stable message payload for retries. Editing the brief creates a new submission identity. No enquiry content is logged or stored in browser persistence.

Success means Resend accepted both emails for delivery, not that both reached an inbox. Check Resend delivery/bounce logs and the team mailbox operationally. A failed or uncertain response retains the form values and permits retry. Resend's idempotency window is finite; avoid repeated manual resubmissions after long delays. No automated durable retry queue or CRM is included.

## Verification and launch checklist

- Run `node scripts/test-enquiry.mjs`, `npx tsc --noEmit`, `npx oxlint app lib/enquiry.ts lib/enquiry-config.ts`, and `npm run build` from website/.
- Mock tests cover both recipients, Reply-To, stable retries, validation, origin, oversized body, honeypot, Turnstile rejection, provider failure and timeout. They do not send real email.
- Complete keyboard, mobile and back-navigation checks in the browser.
- Confirm the legal business/controller identity, retention period and complete privacy wording; the current /privacy page is explicitly a working draft.
- Configure the verified sender and production secrets, then perform a real end-to-end enquiry with a consenting test recipient. Confirm internal receipt, customer confirmation and Reply-To in both inboxes.
- Confirm the free-tier quota in the Resend account; two emails are used per enquiry. Do not enable paid billing automatically.
- Enable the flag and publish only after the above pass. To stop new online submissions, set ENQUIRIES_ENABLED=false; the email link remains available.

## Sources

- https://resend.com/docs/api-reference/emails/send-batch-emails
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

Domain verification and the production RESEND_API_KEY secret are confirmed by the user. Turnstile configuration, the enable flag, real delivery verification and release of this code remain to be checked. No real customer email has been sent by the implementation tests.

## Website legal drafts

/terms/ and /privacy/ are review drafts linked through the shared footer. Business legal identity/address, retention, mailbox provider and international-transfer details remain outstanding. Drafts have not been published by this task. Reference guidance: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/ and https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/.

Update 9 September: business name Travel Plan It and correspondence address Unit 171614, PO Box 7169, Poole, BH15 9EL, United Kingdom recorded. Unsuccessful enquiries: up to 12 months after closure, with earlier deletion when no longer needed. See DATA-RETENTION.md for the required mailbox process. Legal form, company number if applicable, mailbox/provider details and transfer safeguards remain pending.

## Production update — 9 September 2026

Confirmed target: Cloudflare account `9353ba04afddad92bf97e7ac3139538e`, Worker `sites-project`, custom domain `mytravelplanit.co.uk`, connected repository `rk96884/travel-plan-it`. The existing `RESEND_API_KEY` secret was preserved. Created the managed Travel Plan It enquiries Turnstile widget for `mytravelplanit.co.uk` and `www.mytravelplanit.co.uk`, and stored its secret directly as `TURNSTILE_SECRET_KEY` on the Worker. No secret values were written locally.

The tested build has not deployed: Wrangler in the agent environment fails with an ancestor-directory access error before upload, even after filesystem permission grants. To deploy the existing validated build from `website/`:

```powershell
npx wrangler deploy --config dist/server/wrangler.json --name sites-project --keep-vars --var TURNSTILE_SITE_KEY:0x4AAAAAAEtpVkI3fBpHapA0 --var ENQUIRIES_ENABLED:true
```

This preserves dashboard variables and existing secrets. After deployment, verify the public form and actual delivery to both inboxes. Direct deployment does not update GitHub; synchronise this source before a later GitHub-triggered build so it does not replace the release with older code.

### Deployment verified — 9 September 2026

The user completed deployment to `sites-project`; Cloudflare reports version `aaa0a7ed-ce88-4f55-a68e-cff1292f826d` at 100%, deployed 12:09 UTC. Confirmed the existing RESEND_API_KEY and new TURNSTILE_SECRET_KEY remain encrypted secret bindings, the correct public Turnstile site key is present, and ENQUIRIES_ENABLED=true. The homepage and /plan-my-trip return HTTP 200, the homepage links to the form, and an empty API submission returns validation errors (HTTP 400). No secret binding names appeared in the returned page HTML. Actual customer acknowledgement and internal inbox receipt still require a legitimate form submission; no real email was sent by these verification checks. The earlier deployment failure notes above describe resolved historical attempts. GitHub source synchronisation remains outstanding.

User acceptance: the user confirmed successful submission and approved both emails. Public privacy checklist removed as requested; outstanding operational checks remain internal.
