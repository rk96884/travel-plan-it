import { env } from 'cloudflare:workers';

// Server modules only. Do not import this module from a client component.
export interface EnquiryWorkerEnv {
  RESEND_API_KEY?: string;
  ENQUIRIES_ENABLED?: string;
  TURNSTILE_SECRET_KEY?: string;
  TURNSTILE_SITE_KEY?: string;
}
export function getEnquiryEnv(): EnquiryWorkerEnv {
  return env as EnquiryWorkerEnv;
}
export const enquiryMail = {
  from: 'Travel Plan It <enquiries@mytravelplanit.co.uk>',
  internalRecipient: 'rishikhosla@mytravelplanit.co.uk',
};
