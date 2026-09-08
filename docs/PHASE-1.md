# Travel Plan It — Phase 1 specification

## Delivery order

1. Public supplier-facing holding page.
2. Full marketing site developed in preview while the holding page remains public.
3. Structured enquiry engine integrated into the marketing site.

The outcome is a polished pre-launch and lead-generation website. Live availability, pricing, ticketing, payments, customer accounts and dynamic packaging are excluded from this phase.

## First deliverable: holding page

Purpose: a supplier visiting the domain can understand the proposition, see a credible brand in development and contact the business.

Include the readable Travel Plan It wordmark, primary tagline, hero headline and launch-state copy from BRAND.md; prominent Asia/tailor-made positioning; three proposition blocks; one contact or register-interest action; secondary brand line; and a footer with verified contact/business details. Use one strong licensed destination image if available.

A verified email link is an acceptable initial contact method. A registration form must have a real backend and appropriate privacy information. Do not render placeholder email addresses, fake success messages, inactive buttons, booking search widgets or accreditation placeholders in public. Unsupported membership claims stay absent from both visible content and metadata.

### Holding-page acceptance

- Clearly says the business is preparing to launch and the full website is coming soon.
- A supplier can identify the offer and use a working contact method.
- Looks intentional at 360px mobile width, tablet and desktop; no horizontal overflow.
- Keyboard navigation, focus states, headings and contrast are checked.
- Image dimensions and loading behaviour avoid unnecessary layout shifts.
- Page title, description, social preview and canonical URL use real configured values.
- No invented testimonials, affiliations, prices or company credentials.
- Deployment is checked over HTTPS on the actual target; previews remain separate from public launch state.

## Marketing routes

| Route | Content and purpose |
| --- | --- |
| / | Proposition, Asia specialism, how it works, inspiration, enquiry CTA. |
| /destinations/ | Curated destination overview; worldwide capability without invented coverage. |
| /destinations/asia/ | Main specialism, types of journey, consultant-validated inspiration. |
| /tailor-made-travel/ | How the brief becomes a researched itinerary; complex and multi-centre travel. |
| /about/ | Founders' complementary travel and digital experience, accurately represented. |
| /plan-my-trip/ | Structured enquiry journey. |
| /contact/ | Verified contact channels and relevant business details. |
| /faqs/ | Planning process, enquiries and launch status; protection answers only when verified. |
| /privacy/ | Accurate handling of enquiries and any analytics actually used. |

Add cookie information and other terms when the deployed functionality and operating model require them. Never generate finished legal promises from speculative supplier arrangements. Destinations beyond Asia should be published only with useful, validated content, not empty SEO pages.

## Enquiry engine

Suggested steps: trip ideas → dates and travellers → preferences and budget → contact and review. Allow back navigation without losing values; show progress and use clear optional labels. Offer “not sure yet” for undecided travellers.

| Group | Fields |
| --- | --- |
| Trip ideas | Destination ideas, trip style, multi-centre requirements, desired experiences. |
| Timing | Preferred dates or month, flexibility, approximate duration. |
| Party | Adults, children and relevant child ages; no exact dates of birth. |
| Travel preferences | Departure airports, accommodation preference and pace. |
| Budget | Approximate amount in GBP; explicitly distinguish total-party from per-person budget. |
| Contact | Name and email; optional telephone and preferred contact method. |
| Notes | Optional free text, with a request to avoid sensitive documents or payment details. |
| Privacy | Visible privacy link and independent, optional marketing opt-in if offered. |

Recommended minimum required fields: name, email and enough trip information to begin a conversation. Other details should support uncertainty rather than force guesses. Define final validation rules in a shared schema before implementation.

### Delivery contract

Validate on the server, enforce size limits and spam protection, and persist or reliably deliver the lead to the chosen system. Return a reference only once accepted. Store receipt time, source and consent metadata separately from the itinerary brief. Never include personal data in URLs or analytics.

On success, state that the enquiry was received and will be reviewed; do not imply a booking or quote has been confirmed. On failure, retain entered values and offer a retry or verified alternative contact. Guard against accidental duplicate submission. Define a recovery process for downstream delivery failures before launch.

### Enquiry acceptance

Check valid and invalid submissions, keyboard/screen-reader errors, back navigation, double clicks, slow requests, backend failure and actual receipt in the destination workflow. No success state without backend acceptance. Verify that optional marketing consent remains optional and is recorded accurately.

## Technical foundation

Proposed Astro + TypeScript structure: shared site layout and navigation; reusable proposition, image and CTA components; typed destination content; a shared enquiry schema; a server-side lead adapter selected once the CRM is known. Default to static rendering for editorial pages. Keep holding/full-site selection explicit in deployment configuration so unfinished routes cannot leak into production.

Add sensible titles/descriptions, canonical URLs, sitemap and robots configuration. Keep development previews out of search indexing. Use structured data only for verified business facts. Analytics can measure CTA clicks and enquiry progression after the chosen privacy configuration is implemented; do not add tracking just to fill a placeholder.

Full-site release requires the build and relevant checks to pass, all public routes and contact actions to work, mobile/accessibility review, real lead receipt verification and accurate business/privacy content. Document deployment and rollback in README.
