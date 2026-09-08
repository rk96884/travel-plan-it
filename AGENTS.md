# Travel Plan It — project instructions

## Purpose and priorities

Read README.md and docs/PROJECT-BRIEF.md, docs/PHASE-1.md and docs/BRAND.md before implementing. Consult docs/SUPPLIERS.md for integrations and docs/ROADMAP.md for sequencing.

Build a human-led tailor-made travel brand with an initial Asia specialism. The first deliverable is the supplier-facing public holding page. Phase 1 is enquiry-led; live booking and payments belong to later phases.

The current task establishes documentation only. Subsequent implementation should follow the user's requested scope. Do not treat a roadmap entry as an instruction to activate a paid service or publish a site.

## Architecture

- Proposed default: Astro + TypeScript, static pages and minimal client-side JavaScript. Use interactive islands for the trip form where needed.
- Keep page content, UI components, enquiry validation and external-service adapters separate. Route all credentials and supplier calls through server-side code.
- Suggested structure: src/pages/, src/layouts/, src/components/, src/content/, src/lib/validation/, src/lib/server/ and public/images/. Keep docs/ outside public/.
- Store business contact details, launch state and approved protection wording centrally. Missing values must not produce fake contact links or public placeholder claims.
- Use one consistent enquiry schema that can later feed a chosen CRM. Do not build speculative flight booking integrations in Phase 1.

## Brand and content

- Preserve the name Travel Plan It. The Plan It/Planet idea is subtle and primarily typographic; do not render IT like a technology-company acronym.
- Use British English and the working proposition: “Tailor-made travel, built around you.”
- Lead with tailored journeys, Asia knowledge, complex itineraries and human expertise. Technology supports the consultant; it is not an autonomous travel adviser.
- Do not invent destinations served, prices, availability, reviews, team biographies, years of company trading or supplier relationships.
- Treat the proposed palette and draft copy as a starting point, not a finished logo or approved identity.
- Do not display ABTA, ATOL, TTA, Hays, Advantage or supplier marks, membership numbers or protection claims until the actual relationship and permitted wording are documented. A partner's employer credentials do not belong to Travel Plan It.

## Quality and data handling

- Use semantic HTML, keyboard access, visible focus, labelled inputs, accessible errors, descriptive image alternatives and reduced-motion support. Target WCAG 2.2 AA.
- Design mobile first; avoid layout shift, unnecessary frameworks and oversized images. Use licensed imagery and record its source.
- Validate enquiries on the server as well as the client. Include spam controls, length limits and safe error handling; never place enquiry content or contact details in analytics events or routine logs.
- Show success only after the enquiry is durably accepted by the chosen backend. Provide recovery on failure without silently losing entered data.
- Keep marketing opt-in separate from the trip enquiry. No preselected marketing consent. Do not request passports, payment details or exact birth dates in the initial brief.
- Keep confidential supplier terms and internal business planning out of public bundles and generated routes.

## Verification and documentation

Run the actual project build and available type/lint checks once implemented. Verify holding-page links, mobile layout and keyboard navigation. For the enquiry engine test validation, success, backend failure, repeated submission and lead receipt. Test useful outcomes rather than mirroring implementation.

Update README with real setup/deployment instructions and update the relevant brief when an agreed decision changes. Report what changed, what was checked and what remains pending. Preserve existing user work.
