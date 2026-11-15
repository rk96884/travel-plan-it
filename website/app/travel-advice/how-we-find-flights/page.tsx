import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import FlightComparison from './flight-comparison';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How We Find the Right Flights for Tailor-Made Holidays',
  description: 'Discover how Travel Plan It considers flight routes, connection times, baggage, total costs and multi-city tickets when researching your tailor-made holiday.',
  alternates: { canonical: '/travel-advice/how-we-find-flights' },
  openGraph: {
    title: 'Beyond the Cheapest Fare: How We Plan Better Flight Journeys',
    description: 'A practical guide to comparing the complete flight journey for a tailor-made or multi-centre holiday.',
    url: '/travel-advice/how-we-find-flights',
    type: 'article',
  },
};

const considerations = [
  { number: '01', title: 'Route and timing', text: 'We consider departure airports, total travel time, arrival hours and how the route fits the first day of your holiday. A late-night arrival can make a seemingly convenient flight less appealing.' },
  { number: '02', title: 'Connections that work', text: 'Connection time is only part of the picture. We also look at airport changes, terminal transfers, immigration, baggage collection and whether flights are booked together or on separate tickets.' },
  { number: '03', title: 'The full cost', text: 'A headline fare may not include checked baggage, seat selection or a transfer from an alternative airport. We compare what matters for your actual trip rather than just the price shown first.' },
  { number: '04', title: 'Your preferences', text: 'Cabin comfort, preferred airlines, accessibility requirements and the balance between price and convenience help shape the options we discuss with you.' },
];

const faqs = [
  { q: 'Is the cheapest flight always the best choice?', a: 'Not necessarily. A fare may look attractive before baggage, extra airport journeys, long connections or late arrivals are considered. The right choice depends on your priorities and the full journey.' },
  { q: 'What is an open-jaw flight?', a: 'An open-jaw itinerary typically means arriving in one city and departing from another, rather than returning to the original arrival airport. For a multi-centre holiday this can avoid backtracking, depending on routing and fares.' },
  { q: 'Can separate flight tickets save money?', a: 'Sometimes, but separate bookings can introduce additional risk if a delay causes a missed onward flight. We consider the trade-off and explain it before a route is chosen.' },
  { q: 'Do you guarantee the lowest fare?', a: 'No. Flight prices and availability can change, and our aim is to help you consider suitable routing and overall value. Any proposed flights and final quotation must be reconfirmed before booking.' },
];

export default function HowWeFindFlightsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className={styles.page}>
        <article>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                <Link href="/travel-planning/">Travel planning</Link><span aria-hidden="true"> / </span><span>Flight advice</span>
              </nav>
              <p className={styles.eyebrow}>BEHIND THE JOURNEY · FLIGHT PLANNING</p>
              <h1>Beyond the <em>cheapest fare.</em></h1>
              <p className={styles.lede}>How we look at flights as part of your tailor-made holiday — balancing route, convenience and overall value, not simply the first price on a screen.</p>
              <a className={styles.jump} href="#how-we-compare">Explore how we compare flights ↓</a>
            </div>
            <figure className={styles.heroImage}>
              <Image src="/images/flight-planning-guide.webp" alt="Limestone islands in Ha Long Bay, a destination that can form part of a multi-centre itinerary" fill sizes="(max-width: 900px) 100vw, 43vw" priority />
            </figure>
          </header>

          <div className={styles.article}>
            <section className={styles.leadSection}>
              <p className={styles.eyebrow}>THE THINKING BEHIND THE TICKET</p>
              <h2>A flight is one part of the journey. It can shape the whole experience.</h2>
              <p>Finding flights for a long-haul holiday isn't just about spotting a low price. The choice of departure airport, connection point, arrival time and ticket conditions can influence your first day away, your energy levels and even the order in which you visit destinations.</p>
              <p>At Travel Plan It, our approach is to research sensible options around the journey you want to take. We consider the trade-offs and discuss them with you, so the flights fit the holiday — rather than forcing the holiday around the flights.</p>
            </section>

            <section className={styles.section} id="how-we-compare">
              <p className={styles.eyebrow}>HOW WE ASSESS A ROUTE</p>
              <h2>Four questions behind every useful comparison.</h2>
              <div className={styles.cards}>
                {considerations.map(item => <div key={item.number} className={styles.card}><span>{item.number} /</span><h3>{item.title}</h3><p>{item.text}</p></div>)}
              </div>
            </section>

            <section className={styles.section}>
              <p className={styles.eyebrow}>PRICE VERSUS VALUE</p>
              <h2>Look beyond the advertised fare.</h2>
              <p>A fare that looks cheaper at first can cost more once the services you need are included. Here is a deliberately simplified example showing how a price comparison can change.</p>
              <FlightComparison />
              <p className={styles.afterWidget}>Real searches are more nuanced: fare rules, airport choice, flight schedules and whether segments are on one ticket can matter just as much as extras. This example illustrates our approach, not a promise that a more convenient flight will always cost less.</p>
            </section>

            <section className={styles.band}>
              <p className={styles.eyebrow}>MULTI-CENTRE HOLIDAYS</p>
              <h2>Sometimes the best route isn't a return ticket.</h2>
              <p>On a journey covering more than one destination, flying into one city and home from another may reduce unnecessary backtracking. This is often called an <strong>open-jaw</strong> arrangement. A multi-city search can also help compare flights between stops, although the cheapest-looking combination is not always the best protected or easiest to manage.</p>
              <div className={styles.route} aria-label="Example multi-centre holiday route">
                <span>London</span><b aria-hidden="true">→</b><span>Bangkok</span><b aria-hidden="true">→</b><span>Phuket</span><b aria-hidden="true">→</b><span>London</span>
              </div>
              <p>This is an itinerary illustration, not a live flight offer. For example, see how a <Link href="/inspiration/bangkok-phuket-twin-centre/">Bangkok and Phuket twin-centre holiday</Link> can be shaped around city sightseeing and time on the coast. We also plan more complex combinations such as <Link href="/inspiration/singapore-batam-johor-three-country/">Singapore, Batam and Johor Bahru</Link>, where ferries, border crossings and ground transport matter alongside flights.</p>
            </section>

            <section className={styles.section}>
              <p className={styles.eyebrow}>AN IMPORTANT DETAIL</p>
              <h2>One booking or separate tickets?</h2>
              <p>Two flights on one booking are not necessarily equivalent to two separately purchased flights. If the first flight is delayed and you miss the second, your rights and the assistance available can differ. On separate bookings, you may need to buy another onward ticket yourself.</p>
              <p>The <a href="https://www.caa.co.uk/air-passengers/about-your-trip/planning-your-trip/" target="_blank" rel="noreferrer">UK Civil Aviation Authority explains the distinction between connecting flights and self-transfer journeys</a>. We consider this risk when assessing complex routes, alongside any relevant airline conditions and travel insurance.</p>
            </section>

            <section className={styles.section}>
              <p className={styles.eyebrow}>QUESTIONS WE OFTEN HEAR</p>
              <h2>Flight-planning questions, answered.</h2>
              <div className={styles.faqs}>
                {faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}
              </div>
            </section>

            <aside className={styles.next}>
              <p className={styles.eyebrow}>PUTTING IT ALL TOGETHER</p>
              <h2>Your holiday deserves more than a flight search.</h2>
              <p>Tell us where you'd like to go, when you're thinking of travelling and what matters most. We'll discuss how the flights, hotels, experiences and time between destinations can work together.</p>
              <div className={styles.actions}>
                <Link className={styles.button} href="/plan-my-trip/">Start planning your trip ↗</Link>
                <Link className={styles.secondary} href="/tailor-made-holidays/">Explore tailor-made holidays</Link>
              </div>
              <small>Complimentary initial consultation · No obligation · Enquiry only</small>
            </aside>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
