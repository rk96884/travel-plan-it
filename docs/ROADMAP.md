# Travel Plan It — delivery roadmap

No delivery dates or commercial commitments are implied. Each stage depends on the preceding outcome and the user's implementation scope.

Update, 8 September 2026: the user reported publishing the holding page and chose to bring the enquiry form forward, ahead of the full marketing site. Resend on its free tier is selected, with internal notifications to enquiries@mytravelplanit.co.uk and customer acknowledgements sent from the verified mytravelplanit.co.uk domain. Implementation is local; credentials, domain verification and real delivery testing remain pending. See ENQUIRY-SETUP.md.

| Stage | Deliverable | Completion gate |
| --- | --- | --- |
| 0 — documentation | Brief, brand direction, scope and supplier register. | Seven Markdown files created and checked; unknowns explicit. |
| 1 — holding page | Branded public presence for supplier checks. | Verified contact details, accurate launch copy, responsive/accessibility checks and deployment verification. |
| 2 — marketing site | Core routes, Asia positioning, content and SEO foundation. | Useful reviewed content, coherent navigation and preview validation. |
| 3 — enquiry engine | Multi-step brief, reliable lead delivery and consultant workflow. | Backend selected; end-to-end success/failure checks; privacy and operational ownership established. |
| 4 — operational integrations | CRM/back office, itinerary creation and approved supplier access. | Commercial access and technical documentation obtained; sandbox integration proven. |
| 5 — quoting and booking | Potential live inventory, quoting, booking and later packaging, with customer Booking Conditions published before live sales. | Business case, contractual permissions, protection/payment arrangements, reviewed Booking Conditions and operational servicing proven. |

## Booking conditions before live sales

Before Stage 5 goes live, publish a separate Booking Conditions page rather than expanding the website Terms of Use into a full booking contract. The final wording depends on the operating model and contractual organiser selected. It should address deposits and balances, amendments, customer cancellation and supplier non-refundable costs, transfers, organiser changes or cancellation, statutory package-travel rights where applicable, travel insurance, supplier terms, complaints, liability and approved financial-protection wording. Do not adopt a fixed cancellation percentage table until supplier contracts and the final organiser structure justify it.

## Future integration principles

Potential providers from the conversation include Aviate, Lime Management, Virgin Atlantic Flightstore, specialist Asia operators/DMCs, hotel/bed banks and the selected consortium's systems. Treat InfiniteAPI, InfiniteCache, XML and white-label options as discovery candidates until scope and access are confirmed.

Keep external systems behind server-side adapters with internal models for enquiry, traveller requirements and itinerary components. Later quote models must represent currency, inclusions, expiry and provider references. Do not infer that cached fares are live or bookable. Revalidation, failure recovery and customer servicing are later requirements, not Phase 1 features.

Prioritise improvements that remove manual re-entry for consultants. AI-assisted research or itinerary drafting is a later possibility, with human review of recommendations and factual claims. No automatic promises of availability, prices or bookings.

## Next implementation inputs

First resolve public contact details, domain/hosting, available brand imagery and accurate business footer details. Then implement the holding page. CRM choice, destination content and the operating model can continue to be resolved while the wider site is in preview.
