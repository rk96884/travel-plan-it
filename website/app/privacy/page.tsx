import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import { site } from '../../lib/site';
export const metadata = { title: 'Privacy notice | Travel Plan It' };
export default function Privacy() {
  return (
    <>
      <SiteHeader back />
      <main id="main" className="enquiry-page legal-page">
        <p className="eyebrow">YOUR INFORMATION</p>
        <h1>Privacy notice</h1>
        <p className="legal-date">Last updated: 17 September 2026</p>
        <section>
          <h2>Who handles your information</h2>
          <p>
            Travel Plan It handles enquiries about tailor-made travel. For
            privacy questions, corrections or requests, email{' '}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>
          <p>Company name: {site.legalName}.</p>
          <p>Company number: {site.companyNumber}.</p>
          <p>Correspondence address:</p>
          <address style={{ fontStyle: 'normal' }}>
            {site.correspondenceAddress.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
        </section>
        <section>
          <h2>Information you provide</h2>
          <p>
            The enquiry form asks for your name, email and destination ideas.
            Optional details include your telephone number, dates, party size
            and children’s ages, departure airport, budget, accommodation
            preferences and other trip requirements. Do not submit passports,
            payment details or sensitive health information. Please only share
            other travellers’ details when you are entitled to do so.
          </p>
          <p>
            Providing a brief is voluntary, but we need a contact method and
            some trip information to respond meaningfully. You can email us
            instead of using the form.
          </p>
        </section>
        <section>
          <h2>How it is used</h2>
          <p>
            When sending is enabled, the information will be used to respond,
            discuss your travel requirements and prepare possible arrangements.
            The proposed lawful basis for steps you ask us to take towards a
            booking is taking steps before entering a contract. General
            correspondence and protecting the service against abuse are proposed
            legitimate-interest purposes; these assessments must be recorded
            before launch.
          </p>
          <p>
            There is no marketing subscription in this form and no automated
            decision-making with legal or similarly significant effects. Travel
            recommendations are handled by people.
          </p>
        </section>
        <section>
          <h2>Delivery and service providers</h2>
          <p>
            The planned delivery service is Resend: it sends your brief to our
            business mailbox and an acknowledgement to your email address.
            Cloudflare Turnstile checks for automated abuse and may process
            technical information such as network and device signals. Hosting
            and email providers also process information needed to operate their
            services.
          </p>
          <p>
            The form does not create a CRM record or save drafts in browser
            storage. Enquiries and replies are held in the business mailbox and
            provider systems under their configured retention settings. No
            supplier booking integration is active.
          </p>
          <p>
            The selected mailbox provider, processing locations and any
            safeguards needed for transfers outside the UK are still being
            confirmed. These details will be included before online sending is
            enabled.
          </p>
        </section>
        <section>
          <h2>How long information is kept</h2>
          <p>
            If an enquiry does not result in a booking, our policy is to retain
            it for up to {site.unsuccessfulEnquiryRetentionMonths} months after
            it is closed, to handle related follow-up questions and maintain the
            context of your enquiry. We review whether it is still needed and
            delete or anonymise it sooner when appropriate.
          </p>
          <p>
            At the end of that period, the enquiry and associated correspondence
            will be deleted or anonymised. A documented legal obligation or an
            unresolved complaint or dispute may require relevant records to be
            kept longer; any exception is limited to what is needed and reviewed
            separately. Enquiries that become bookings will follow a separate
            booking-record retention policy.
          </p>
        </section>
        <section>
          <h2>Cookies and browser storage</h2>
          <p>
            The current page implementation does not add marketing analytics or
            advertising cookies and does not persist your form entries in
            browser storage. Hosting and security services may use technical
            storage or process network information. The final cookie information
            will reflect the services actually enabled on the public domain.
          </p>
        </section>
        <section>
          <h2>Your rights and complaints</h2>
          <p>
            Depending on the circumstances and applicable legal basis, you may
            request access, correction, erasure, restriction or portability of
            your information, and object to certain processing. Where consent is
            used, it can be withdrawn. These rights have legal conditions and
            exceptions.
          </p>
          <p>
            Contact us at the address above to make a request. You can also{' '}
            <a href="https://ico.org.uk/make-a-complaint/">
              raise a concern with the Information Commissioner’s Office
            </a>
            .
          </p>
        </section>
        <section>
          <h2>Changes to this notice</h2>
          <p>
            We will update this notice as the business and enquiry service are
            finalised. The date above identifies this draft.
          </p>
        </section>
        <Link href="/plan-my-trip/">Back to your trip enquiry</Link>
      </main>
      <SiteFooter contained />
    </>
  );
}
