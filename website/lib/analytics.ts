/**
 * Record a successful enquiry only when the visitor opted into analytics.
 * Do not send names, email addresses, enquiry references, destinations or form details.
 */
export function trackEnquiryGenerated() {
  if (typeof window === 'undefined') return;
  try {
    if (window.localStorage.getItem('travel-plan-it-analytics-consent') !== 'accepted') return;
  } catch {
    return;
  }
  // gtag is installed by AnalyticsConsent after permission is granted.
  try {
    window.gtag?.('event', 'generate_lead', {
      lead_source: 'plan_my_trip_form',
    });
  } catch {
    // Analytics must never interfere with the confirmed enquiry flow.
  }
}
