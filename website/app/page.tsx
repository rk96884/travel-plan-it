import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '../lib/site';
import { enquiriesEnabled } from '../lib/enquiry-config';
export const dynamic = 'force-dynamic';
const email = process.env.PUBLIC_CONTACT_EMAIL?.trim() || site.contactEmail;
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero">
          <div className="copy">
            <p className="eyebrow">TAILOR-MADE TRAVEL · ASIA & BEYOND</p>
            <h1>
              Your planet.
              <br />
              Your <em>plan.</em>
            </h1>
            <p className="tagline">Tailor-made travel, built around you.</p>
            <p className="intro">
              The places you’ve dreamed of. The discoveries you haven’t.
              Thoughtfully planned journeys, shaped around what matters to you.
            </p>
            <div className="contact">
              {enquiriesEnabled() ? (
                <Link className="button" href="/plan-my-trip/">
                  Plan my trip ↗
                </Link>
              ) : email ? (
                <a
                  className="button"
                  href={`mailto:${email}?subject=Travel%20Plan%20It%20enquiry`}
                >
                  Let’s plan something extraordinary ↗
                </a>
              ) : (
                <p className="soon">Our full website is coming soon.</p>
              )}
              <p className="note">
                Our full website is coming soon. An independent travel business
                preparing to launch.
              </p>
            </div>
          </div>
          <figure>
            <Image
              unoptimized
              src="/images/ha-long-bay.jpg"
              alt="Lush limestone cliffs above the teal waters of Hạ Long Bay, Vietnam"
              width="1400"
              height="1800"
              fetchPriority="high"
            />
            <figcaption>
              <span>Room for a little wonder.</span>
              <small>HẠ LONG BAY, VIETNAM</small>
            </figcaption>
          </figure>
        </section>
        <section className="proposition">
          <div className="heading">
            <p className="eyebrow">A MORE PERSONAL WAY TO TRAVEL</p>
            <h2>
              Extraordinary journeys.
              <br />A human touch.
            </h2>
          </div>
          <div className="principles">
            <article>
              <span>01 /</span>
              <h3>Tailor-made, truly.</h3>
              <p>
                From multi-centre adventures to family escapes, your
                requirements shape the itinerary. Every journey begins with you.
              </p>
            </article>
            <article>
              <span>02 /</span>
              <h3>Asia. And beyond.</h3>
              <p>
                Specialist knowledge of Asia and complex long-haul travel, with
                an eye for the lesser-known places that make a trip your own.
              </p>
            </article>
            <article>
              <span>03 /</span>
              <h3>People who plan.</h3>
              <p>
                Experienced travel planning supported by smarter digital tools.
                Personal advice, considered details and a real person behind
                your journey.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter photoCredit />
    </>
  );
}
