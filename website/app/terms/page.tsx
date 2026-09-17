import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import { site } from '../../lib/site';
export const metadata = { title: 'Website terms of use | Travel Plan It' };
export default function Terms() {
  return (
    <>
      <SiteHeader back />
      <main id="main" className="enquiry-page legal-page">
        <p className="eyebrow">WEBSITE INFORMATION</p>
        <h1>Terms of use</h1>
        <p className="legal-date">Draft for review · 17 September 2026</p>
        <aside className="form-notice">
          These website terms remain a draft for review.
        </aside>
        <section>
          <h2>About this website</h2>
          <p>Travel Plan It presents travel inspiration and lets you contact us about a possible trip. We are preparing to launch. These terms cover use of this website and our tailor-made planning service; separate booking terms will apply when you book travel arrangements.</p>
          <p>For questions, contact <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
          <p>Company name: {site.legalName}.</p>
          <p>Company number: {site.companyNumber}.</p>
          <p>Correspondence address:</p>
          <address style={{ fontStyle: 'normal' }}>
            {site.correspondenceAddress.map((line) => (<div key={line}>{line}</div>))}
          </address>
        </section>
        <section>
          <h2>Enquiries and bookings</h2>
          <p>Submitting an enquiry or receiving an acknowledgement does not create a booking, reserve travel services or guarantee availability. Any future quote, payment and booking will be subject to the terms supplied for that particular arrangement before you commit.</p>
          <p>Destination photographs and itinerary ideas are illustrative. They do not represent a confirmed offer, available inventory or a promise that a particular hotel, experience or itinerary can be booked.</p>
        </section>
        <section>
          <h2>Tailor-Made Planning Deposit</h2>
          <p>Your initial consultation is complimentary. If, after that consultation, you ask us to begin designing a personalised itinerary, we will ask you to pay a £99 Tailor-Made Planning Deposit before detailed itinerary work begins.</p>
          <p>The planning deposit covers our time, research and itinerary design and includes your initial personalised itinerary plus up to two rounds of refinements. A refinement round means one consolidated set of requested adjustments to the itinerary.</p>
          <p>If you subsequently book the holiday with Travel Plan It, the £99 planning deposit will be credited in full against the amount payable for that booking. The planning deposit does not itself reserve flights, accommodation or other travel services and is not a deposit for a holiday booking.</p>
        </section>
        <section>
          <h2>Additional planning and amendment fees</h2>
          <p>If you request further refinement rounds after the two included rounds, each additional round is charged at £49. We will tell you before carrying out work that would incur this fee.</p>
          <p>A substantial redesign — for example, changing destination, travel dates or the main structure of an itinerary after design work has begun — may require an additional planning fee of £99 or more depending on the work involved. We will explain and agree any such fee with you before starting the redesign.</p>
          <p>After a holiday has been booked, requests to amend confirmed travel arrangements may incur a Travel Plan It administration fee of £35 in addition to any supplier charges and any increase in the price of the travel arrangements. Where practical, we may make minor administrative corrections without charging our administration fee. Any applicable charges will be explained before an amendment is made.</p>
        </section>
        <section>
          <h2>Using the site</h2>
          <p>Please provide accurate contact details and only submit information you are entitled to share. Do not impersonate another person, send unsolicited advertising, introduce harmful software, attempt unauthorised access or disrupt the site. Please do not include payment details, passport information or sensitive health information in the enquiry form.</p>
        </section>
        <section>
          <h2>Content and links</h2>
          <p>Our branding and original website content, and photographs used under licence, are protected by applicable intellectual property rights. You may view the site and keep a copy for personal trip planning. Commercial reuse requires permission from the relevant rights holder, unless otherwise allowed by law or an applicable licence.</p>
          <p>Links to other websites are provided for convenience. Their content, availability and privacy practices are controlled by their operators.</p>
        </section>
        <section>
          <h2>Availability and accuracy</h2>
          <p>We aim to keep the website useful and accurate, but content may change and access may be interrupted. Please confirm details relevant to your trip directly with us. Nothing in these terms excludes or limits liability where doing so would be unlawful, including liability for fraud or death or personal injury caused by negligence. Your statutory rights are unaffected.</p>
        </section>
        <section>
          <h2>Privacy and updates</h2>
          <p>Our privacy notice explains how enquiry information is handled. We may update these website terms as the service develops; the date above identifies the current draft. Any future booking will have its own applicable terms.</p>
        </section>
      </main>
      <SiteFooter contained />
    </>
  );
}
