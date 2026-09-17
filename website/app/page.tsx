import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero">
          <div className="copy">
            <p className="eyebrow">TAILOR-MADE TRAVEL · ASIA & BEYOND</p>
            <h1>Your planet.<br />Your <em>plan.</em></h1>
            <p className="tagline">Tailor-made travel, built around you.</p>
            <p className="intro">The places you’ve dreamed of. The discoveries you haven’t. Thoughtfully planned journeys, shaped around what matters to you.</p>
            <div className="contact">
              <Link className="button" href="/plan-my-trip/">Start planning your journey ↗</Link>
              <p className="note">Your initial consultation is complimentary and there’s no obligation.</p>
            </div>
          </div>
          <figure>
            <Image unoptimized src="/images/ha-long-bay.jpg" alt="Lush limestone cliffs above the teal waters of Hạ Long Bay, Vietnam" width="1400" height="1800" fetchPriority="high" />
            <figcaption><span>Room for a little wonder.</span><small>HẠ LONG BAY, VIETNAM</small></figcaption>
          </figure>
        </section>

        <section className="proposition">
          <div className="heading"><p className="eyebrow">A MORE PERSONAL WAY TO TRAVEL</p><h2>Extraordinary journeys.<br />A human touch.</h2></div>
          <div className="principles">
            <article><span>01 /</span><h3>Tailor-made, truly.</h3><p>From multi-centre adventures to family escapes, your requirements shape the itinerary. Every journey begins with you.</p></article>
            <article><span>02 /</span><h3>Asia. And beyond.</h3><p>Specialist knowledge of Asia and complex long-haul travel, with an eye for the lesser-known places that make a trip your own.</p></article>
            <article><span>03 /</span><h3>People who plan.</h3><p>Experienced travel planning supported by smarter digital tools. Personal advice, considered details and a real person behind your journey.</p></article>
          </div>
        </section>

        <section className="proposition inspiration-preview" aria-labelledby="inspiration-title">
          <div className="heading"><p className="eyebrow">TRAVEL INSPIRATION</p><h2 id="inspiration-title">Ideas to make your own.</h2></div>
          <div className="inspiration-preview-body">
            <p className="intro">Explore a few of the places and experiences that inspire us. They’re not fixed packages — they’re starting points for a journey designed around you.</p>
            <div className="contact"><Link className="button" href="/inspiration/">Explore travel inspiration ↗</Link></div>
          </div>
        </section>

        <section className="planning-journey" id="how-it-works" aria-labelledby="planning-title">
          <div className="planning-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <div><h2 id="planning-title">From first idea to a journey that feels like yours.</h2><p>Thoughtful travel takes thoughtful planning. We begin with a conversation, then shape the details around you.</p></div>
          </div>
          <div className="planning-steps">
            <article><span>01</span><h3>Tell us about your trip</h3><p>Start with a complimentary consultation. We’ll get to know where you want to go, how you like to travel and what matters most to you.</p></article>
            <article><span>02</span><h3>We design it around you</h3><p>When you’re ready to proceed, a <strong>£99 Tailor-Made Planning Deposit</strong> lets us begin creating your personalised itinerary, including two rounds of refinements.</p></article>
            <article><span>03</span><h3>Book with confidence</h3><p>When you book your holiday with Travel Plan It, your <strong>£99 planning deposit is credited in full against your booking.</strong></p></article>
          </div>
          <div className="planning-deposit">
            <div className="planning-deposit-title">
              <div className="planning-campaign-image">
                <Image unoptimized src="/images/inspiration/nihi-sumba-coast-sunset.png" alt="Remote tropical coastline glowing in the evening light" width="1200" height="1600" />
              </div>
              <p className="eyebrow">YOUR TAILOR-MADE PLANNING DEPOSIT</p>
              <h2>Expert planning. Invested back into your journey.</h2>
            </div>
            <div><p>Creating a truly personalised journey takes time, research and specialist knowledge. Once we understand your brief and you’re ready for us to start designing, we’ll ask for a £99 planning deposit.</p><ul><li>Personalised itinerary</li><li>Two rounds of refinements included</li><li>£99 credited in full when you book</li></ul><p className="planning-small">Need further refinements? Additional rounds are £49. If you decide to substantially redesign your journey, we’ll discuss any additional planning fee with you before carrying out the work.</p></div>
          </div>
          <div className="planning-cta"><p>Have a journey in mind?</p><Link className="button" href="/plan-my-trip/">Start planning your journey ↗</Link><small>Your initial consultation is complimentary and there’s no obligation.</small></div>
        </section>
      </main>
      <SiteFooter photoCredit />
    </>
  );
}
