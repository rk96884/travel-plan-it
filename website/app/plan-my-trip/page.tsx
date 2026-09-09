import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import EnquiryForm from './trip-form';
import { enquiriesEnabled } from '../../lib/enquiry-config';
import { getEnquiryEnv } from '../../lib/worker-env';
export const dynamic = 'force-dynamic';
export default function PlanMyTrip() {
  return (
    <>
      <SiteHeader back />
      <main id="main" className="enquiry-page">
        <p className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</p>
        <h1>
          Let’s make it
          <br />
          <em>your kind of trip.</em>
        </h1>
        <p className="enquiry-intro">
          A few ideas are all we need to begin. Tell us what you have in mind,
          and leave the finer details for a conversation.
        </p>
        <EnquiryForm
          siteKey={
            enquiriesEnabled() ? getEnquiryEnv().TURNSTILE_SITE_KEY || '' : ''
          }
        />
      </main>
      <SiteFooter contained />
    </>
  );
}
