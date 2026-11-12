/** Consent-aware GA4 events. Never send enquiry form content or identifiers. */
const consentKey = 'travel-plan-it-analytics-consent';

const knownItineraries = new Set([
  'bangkok-phuket-twin-centre',
  'phnom-penh-siem-reap-twin-centre',
  'hanoi-ho-chi-minh-city-twin-centre',
  'luang-prabang-vientiane-twin-centre',
]);

export type ItineraryCtaPosition = 'hero' | 'accommodation' | 'footer';

function sendAnalyticsEvent(name: string, parameters: Record<string, string>) {
  if (typeof window === 'undefined') return;
  try {
    if (window.localStorage.getItem(consentKey) !== 'accepted') return;
    // Installed by AnalyticsConsent only after opt-in.
    window.gtag?.('event', name, parameters);
  } catch {
    // Tracking errors must not interrupt site navigation or the enquiry flow.
  }
}

function recognisedTrip(slug: string | null): string | undefined {
  return slug && knownItineraries.has(slug) ? slug : undefined;
}

function recognisedTier(tier: string | null): string | undefined {
  return tier === 'essential' || tier === 'premium' ? tier : undefined;
}

/** A visitor clicked a specific itinerary's link to the enquiry form. */
export function trackItineraryCtaClick(
  tripSlug: string,
  ctaPosition: ItineraryCtaPosition,
  tier?: string,
) {
  const recognised = recognisedTrip(tripSlug);
  if (!recognised) return;
  sendAnalyticsEvent('trip_cta_click', {
    trip_slug: recognised,
    cta_position: ctaPosition,
    ...(recognisedTier(tier ?? null) ? { accommodation_tier: tier! } : {}),
  });
}

/** Only call after a successful response with a confirmed enquiry reference. */
export function trackEnquiryGenerated() {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const trip = recognisedTrip(params.get('trip'));
  const tier = trip ? recognisedTier(params.get('tier')) : undefined;
  sendAnalyticsEvent('generate_lead', {
    lead_source: 'plan_my_trip_form',
    ...(trip ? { trip_slug: trip } : {}),
    ...(tier ? { accommodation_tier: tier } : {}),
  });
}
