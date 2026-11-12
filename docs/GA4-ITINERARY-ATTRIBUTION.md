# GA4 itinerary attribution

The shared `website/components/trip-idea-page.tsx` renders the enquiry links for each published twin-centre itinerary. It uses `TrackedEnquiryLink` to record `trip_cta_click` after analytics consent, with:

- `trip_slug`: a recognised published itinerary slug.
- `cta_position`: `hero`, `accommodation` or `footer`.
- `accommodation_tier`: `essential` or `premium`, when selected.

The links retain the original `/plan-my-trip/?trip=<slug>&tier=<tier>` query parameters. The enquiry form uses these to prefill the customer's trip details. When the server accepts a submission, `generate_lead` includes the recognised `trip_slug` and optional `accommodation_tier` so GA4 can attribute the lead without sending personal information.

## Adding future itineraries

1. Define a distinct slug and content in `website/lib/trip-ideas.ts`; create its page with the shared `TripIdeaPage`.
2. Add its slug to `knownItineraries` in `website/lib/analytics.ts` so no untrusted query-string value is sent to GA4.
3. Add matching form prefill data in `website/app/plan-my-trip/trip-form.tsx`.
4. Check that every itinerary CTA still links to the correct `trip` and `tier` values and that `trip_cta_click` fires once on click.
5. Confirm successful enquiries fire one `generate_lead` and failed submissions fire none. Do not send form values, email addresses or enquiry references to GA4.

In GA4 Admin → Custom definitions, register event-scoped dimensions for `trip_slug`, `cta_position`, and `accommodation_tier` if you want to use them in standard reports and Explorations. Custom definitions typically do not report historical event parameters from before their creation.

All events are opt-in, controlled by `AnalyticsConsent`. A visitor who declines analytics sends no custom events.
