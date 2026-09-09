# Travel Plan It

Project documentation for a UK independent, human-led tailor-made travel website, with Asia as its initial specialism and worldwide travel available.

## Current status

Documentation baseline: 8 September 2026. The implementation lives in `website/`. The user reported publishing the holding page through ChatGPT. The enquiry form is live; the user has tested submission and approved both emails. The user has asked not to commit; leave Git unchanged.

The first implementation deliverable is a polished public holding page that gives prospective suppliers something tangible to review. The wider Phase 1 site follows behind it.

## Read in this order

1. [Project brief](docs/PROJECT-BRIEF.md): proposition, audience, business context and decisions.
2. [Phase 1](docs/PHASE-1.md): holding page, routes, enquiry flow and acceptance criteria.
3. [Brand](docs/BRAND.md): voice, typography, visual direction and draft copy.
4. [Roadmap](docs/ROADMAP.md): staged delivery and dependencies.
5. [Suppliers](docs/SUPPLIERS.md): internal relationship register and open commercial questions.
6. [Agent instructions](AGENTS.md): implementation conventions and project rules.

## Development and deployment

The original proposed stack was Astro + TypeScript. The implementation uses the Sites starter: Vinext + React + TypeScript, in `website/`. A server-side Resend enquiry endpoint now exists, with a four-step form, internal notification and customer acknowledgement. No CRM or supplier integration is present. See [Enquiry setup](docs/ENQUIRY-SETUP.md) for configuration and outstanding release checks.

From `website/`, use Node 22.13 or later and `npm ci`, then `npm run dev`. Build with `npm run build`; run `npx tsc --noEmit` and `npx oxlint app` for the authored page. The starter-wide `npm run lint` reports existing issues in unused generated UI components. `npm run start` serves the Worker build through Wrangler.

The user-supplied contact address is `enquiries@mytravelplanit.co.uk`, configured in `website/lib/site.ts`. `PUBLIC_CONTACT_EMAIL` optionally overrides it; see `website/.env.example`. The hero and footer open an email enquiry. The preview is noindex. Confirm business details, domain, final contact method and indexing before public release.

The Sites project ID is recorded in `website/.openai/hosting.json`. The enquiry feature requires server-backed deployment; static export is no longer configured. Preserve the published holding page until email credentials, privacy details and inbox delivery checks are complete. Keep credentials out of files and commits.

## Source and status conventions

These files consolidate the ChatGPT conversation [OTA ATOL Prerequisites](https://chatgpt.com/c/6a9dab1f-fdf4-83ed-a264-6b651393d2ac), especially its latest website and documentation instructions, plus Kelly's TTA email attachment. They are a project handover, not a new supplier or regulatory research report.

Confirmed context means reported by the user. Proposed means a working implementation or copy recommendation. Pending means a fact or decision still needing evidence. Supplier notes are private project material; do not publish docs/ as website content or include these files in public assets.

Enquiry email credentials are read only from Cloudflare Worker bindings (`cloudflare:workers`). Set `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY` as encrypted secrets, plus `TURNSTILE_SITE_KEY` and `ENQUIRIES_ENABLED` as Worker variables. Both messages use `Travel Plan It <enquiries@mytravelplanit.co.uk>`; internal notifications go to `rishikhosla@mytravelplanit.co.uk` with the customer as Reply-To. See the enquiry setup guide before enabling.
