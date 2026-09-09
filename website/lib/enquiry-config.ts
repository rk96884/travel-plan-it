import { getEnquiryEnv } from './worker-env';
export function enquiriesEnabled() {
  const env = getEnquiryEnv();
  return (
    env.ENQUIRIES_ENABLED === 'true' &&
    Boolean(
      env.RESEND_API_KEY &&
      env.TURNSTILE_SECRET_KEY &&
      env.TURNSTILE_SITE_KEY,
    )
  );
}
