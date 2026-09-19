import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import styles from './travel-insurance.module.css';

export const metadata: Metadata = {
  title: 'Travel insurance | Travel Plan It',
  description:
    'Why travel insurance matters, what to consider when arranging cover, and guidance for tailor-made and multi-destination journeys.',
};

const considerations = [
  'Emergency medical treatment and repatriation',
  'Cancellation or curtailment',
  'Delayed or missed departures',
  'Lost, stolen or damaged baggage and personal belongings',
  'Every destination included in your itinerary',
  'Activities and excursions you plan to take part in',
  'Pre-existing medical conditions, where applicable',
];

export default function TravelInsurancePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>TRAVEL INSURANCE</p>
            <h1>Travel with<br /><em>confidence.</em></h1>
            <p className={styles.lede}>
              Your holiday should be about the experience ahead, not worrying
              about the unexpected. We strongly recommend arranging
              comprehensive travel insurance as soon as your trip is confirmed.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/ha-long-bay.jpg"
              alt="A long-haul travel destination with dramatic limestone islands and open water"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>WHY IT MATTERS</p>
            <h2>Protection for the journey you have planned.</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>
              Even the best-planned journey can be affected by circumstances
              outside your control. Appropriate travel insurance can help
              protect you against unexpected costs before and during your trip.
            </p>
            <p>
              Before buying a policy, check that it is suitable for your own
              circumstances and for the full itinerary you intend to travel.
            </p>
          </div>
        </section>

        <section className={styles.coverSection}>
          <div>
            <p className={styles.eyebrow}>WHAT TO CONSIDER</p>
            <h2>Check the policy fits your whole trip.</h2>
          </div>
          <ul>
            {considerations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.callout}>
          <p className={styles.eyebrow}>COMPLEX OR MULTI-CENTRE TRAVEL</p>
          <div>
            <h2>Planning a more involved journey?</h2>
            <p>
              If we create a tailor-made itinerary involving several countries,
              flights or activities, make sure your insurer knows the full
              details of your trip and confirms that your policy provides
              appropriate cover throughout.
            </p>
          </div>
        </section>

        <section className={styles.splitSection}>
          <article>
            <p className={styles.eyebrow}>WHEN TO ARRANGE IT</p>
            <h2>As soon as your booking is confirmed.</h2>
            <p>
              We recommend arranging suitable travel insurance promptly. Some
              benefits, including cancellation cover, may only apply from the
              point at which your policy begins.
            </p>
          </article>
          <article>
            <p className={styles.eyebrow}>CHOOSING A POLICY</p>
            <h2>You remain free to choose your own provider.</h2>
            <p>
              Travel Plan It does not currently provide or advise on travel
              insurance. It is your responsibility to ensure that the policy
              you select is appropriate for your circumstances and the
              arrangements you have booked.
            </p>
            <p>
              If you are unsure whether a policy covers any part of your
              itinerary, speak directly with the insurer before purchasing it.
            </p>
          </article>
        </section>

        <section className={styles.cta}>
          <p>Still shaping the trip itself?</p>
          <Link className={styles.button} href="/plan-my-trip/">
            Start planning your journey ↗
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
