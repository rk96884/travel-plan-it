import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import styles from './travel-planning.module.css';

export const metadata: Metadata = {
  title: 'Travel Planning | Tailor-Made Holidays & Complex Itineraries | Travel Plan It',
  description: 'Personal travel planning for tailor-made long-haul holidays, complex itineraries and multi-centre journeys, with particular expertise in Asia.',
  alternates: { canonical: 'https://mytravelplanit.co.uk/travel-planning/' },
  robots: { index: true, follow: true },
};

const steps = [
  ['01', 'Start with you.', 'Tell us where you are thinking of going — or simply how you want the trip to feel. We will talk through your dates, budget, interests, pace and the things that matter most.'],
  ['02', 'We research the possibilities.', 'We look beyond a single search result: comparing routes, places to stay, experiences and practical connections to shape a journey that works as a whole.'],
  ['03', 'Your itinerary takes shape.', 'Once you are ready for us to begin designing, our £99 planning deposit covers a personalised itinerary and two rounds of refinements. The £99 is credited in full when you book.'],
  ['04', 'Refine, book and travel.', 'We fine-tune the details with you and, when you are happy, bring the arrangements together so you can look forward to the journey rather than the logistics.'],
];

const services = [
  ['Flights & routing', 'We can look at sensible flight options and routing so the journey works from the moment you leave home.'],
  ['Private transfers & transport', 'Airport transfers, drivers, rail and other ground transport can be planned into the itinerary rather than left as an afterthought.'],
  ['Hotels & stays', 'We research accommodation around your priorities, from location and character to facilities, room type and the overall value it adds to the trip.'],
  ['Airport lounges', 'Where useful, we can look at airport lounge options to make longer journeys, connections and departure days more comfortable.'],
  ['Excursions & experiences', 'Private guides, day trips, tours and memorable local experiences can be woven into the journey at the right pace.'],
  ['The details between', 'We think about connection times, arrival days, travel fatigue and the practical details that make a complex itinerary feel effortless.'],
];

const faqs = [
  ['What does a travel planner do?', 'A travel planner turns your ideas, dates, budget and preferences into a coherent journey. That can include researching destinations, comparing routes and accommodation, shaping the pace of an itinerary and bringing together the individual parts of a complex trip.'],
  ['Why use a travel planner instead of booking everything myself?', 'You can absolutely plan a holiday yourself. A travel planner is most useful when the trip is complex, your time is limited, you want specialist ideas or you would value having one person consider how the whole journey fits together.'],
  ['Can you arrange transfers, airport lounges and excursions?', 'Yes. Depending on your journey, we can look at airport and ground transfers, transport between destinations, airport lounge options and excursions or experiences as part of the overall itinerary.'],
  ['Do you specialise in Asia?', 'Asia is a particular area of expertise for Travel Plan It, including tailor-made and multi-centre journeys across Southeast Asia and beyond. We can also help with long-haul travel elsewhere.'],
  ['Can you plan multi-centre and complex itineraries?', 'Yes. Multi-centre and more involved long-haul journeys are central to what we do. We consider the order of destinations, realistic travel times and the balance between seeing more and actually enjoying each place.'],
  ['Do I need to know exactly where I want to go?', 'No. Some of the best briefs begin with a feeling, an occasion or a few things you love doing. We can use that starting point to suggest destinations and combinations you may not have considered.'],
  ['How does the £99 planning deposit work?', 'When you are ready for us to start designing your personalised journey, we ask for a £99 planning deposit. It includes the itinerary and two rounds of refinements, and is credited in full when you book. Additional rounds of refinements are £49.'],
];

export default function TravelPlanningPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  };

  return (
    <>
      <SiteHeader />
      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>TAILOR-MADE TRAVEL PLANNING</p>
            <h1>Your journey,<br /><em>properly planned.</em></h1>
            <p className={styles.lede}>Thoughtful travel planning for long-haul holidays, complex itineraries and journeys across Asia — designed around how you actually want to travel.</p>
            <div className={styles.actions}>
              <Link className={styles.button} href="/plan-my-trip/">Start planning your trip ↗</Link>
              <Link className={styles.textLink} href="/inspiration/">Explore travel inspiration</Link>
            </div>
          </div>
          <div className={styles.heroImage}><Image src="/images/inspiration/palawan-lagoon.png" alt="Turquoise lagoon surrounded by limestone cliffs in Palawan, Philippines" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
        </section>

        <section className={styles.intro}>
          <p className={styles.eyebrow}>TRAVEL PLANNING, MADE PERSONAL</p>
          <div>
            <h2>A holiday should not start with a package. It should start with you.</h2>
            <p>There is no shortage of travel information online. The difficult part is turning thousands of possibilities into one journey that feels right. That is where personal travel planning earns its place.</p>
            <p>At Travel Plan It, we begin with the person travelling rather than a pre-built itinerary. We consider where you want to go, how quickly you like to travel, what you value, what you would rather avoid and how the individual pieces fit together.</p>
            <p>It is particularly valuable for <strong>tailor-made long-haul holidays, multi-centre trips and complex itineraries</strong>, where good sequencing and realistic travel time can make as much difference as the destinations themselves.</p>
          </div>
        </section>

        <section className={styles.how}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>HOW OUR TRAVEL PLANNING WORKS</p><h2>From a first idea to a journey that fits.</h2></div>
          <div className={styles.steps}>{steps.map(([number, title, text]) => <article key={number}><span>{number} /</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className={styles.complex}>
          <div className={styles.complexImage}><Image src="/images/inspiration/khanom-coastline.png" alt="Quiet palm-fringed coastline in Khanom, southern Thailand" fill sizes="(max-width: 1100px) 100vw, 44vw" /></div>
          <div>
            <p className={styles.eyebrow}>COMPLEX TRAVEL, SIMPLIFIED</p>
            <h2>More places should not mean more stress.</h2>
            <p>A multi-centre journey can be extraordinary, but every extra stop introduces another decision: the best order, sensible connections, how long to stay and whether the itinerary leaves enough room to actually experience the destination.</p>
            <p>We design the trip as one journey rather than a collection of separate bookings. That means thinking about pace and geography as carefully as hotels and experiences.</p>
            <Link href="/why-us/">Why plan with Travel Plan It ↗</Link>
          </div>
        </section>

        <section className={styles.services}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>THE WHOLE JOURNEY</p><h2>We can take care of more than where you stay.</h2></div>
          <p className={styles.servicesIntro}>A well-planned holiday is often defined by the details between the headline destinations. Where appropriate, we can bring the practical and experiential parts together into one considered itinerary.</p>
          <div className={styles.serviceGrid}>{services.map(([title, text], index) => <article key={title}><span>0{index + 1} /</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className={styles.asia}>
          <p className={styles.eyebrow}>ASIA TRAVEL SPECIALISTS</p>
          <div><h2>Go further than the obvious.</h2><p>Asia rewards thoughtful planning. A familiar destination can feel completely different when you choose a quieter coastline, combine it with somewhere unexpected or simply give it enough time.</p><p>Our growing inspiration collection explores places such as Khanom in Thailand, Palawan in the Philippines and Sumba in Indonesia — not as fixed packages, but as starting points for a journey made around you.</p><Link className={styles.buttonLight} href="/inspiration/">Discover Asia inspiration ↗</Link></div>
        </section>

        <section className={styles.faq}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>TRAVEL PLANNING QUESTIONS</p><h2>Good planning starts with good questions.</h2></div>
          <div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.cta}>
          <p className={styles.eyebrow}>YOUR JOURNEY, MADE PERSONAL</p>
          <h2>Where are you thinking of going?</h2>
          <p>You do not need a finished itinerary. Give us the beginnings of an idea and we will help you work out what comes next.</p>
          <Link className={styles.button} href="/plan-my-trip/">Tell us about your trip ↗</Link>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
