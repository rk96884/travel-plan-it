import Link from 'next/link';
import type { TripIdea } from '../lib/trip-ideas';
import styles from './trip-idea.module.css';
import HolidayDetails from './holiday-details';

function TripPhoto({ image, className = '' }: { image: TripIdea['hero']; className?: string }) {
  return <figure className={`${styles.photo} ${className}`}>

    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={image.src} alt={image.alt} loading="lazy" referrerPolicy="no-referrer" />
    {image.credit && image.creditUrl && <figcaption><a href={image.creditUrl} target="_blank" rel="license noreferrer">{image.credit}</a></figcaption>}
  </figure>;
}

export default function TripIdeaPage({ trip }: { trip: TripIdea }) {
  const enquiry = (tier?: string) => `/plan-my-trip/?trip=${encodeURIComponent(trip.slug)}${tier ? `&tier=${encodeURIComponent(tier)}` : ''}`;
  return <main id="main" className={`${styles.page} ${trip.country === "Cambodia" ? styles.cambodia : styles.thailand}`}>
    <div className={styles.breadcrumb}><Link href="/tailor-made-holidays/">← All tailor-made holidays</Link><span> / {trip.country || "Thailand"} / {trip.country ? "Phnom Penh & Siem Reap" : "Bangkok & Phuket"}</span></div>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{trip.eyebrow}</p>
        <h1>{trip.title}</h1>
        <p className={styles.lead}>{trip.summary}</p>
        <div className={styles.stats}><span>{trip.duration} / {trip.nights}</span><span>Private guided tours</span><span>Two accommodation options</span></div>
        <p className={styles.from}>From <strong>£{Math.min(...trip.tiers.map(t => t.price)).toLocaleString('en-GB')}</strong> <span>per person* · estimated for March travel</span></p>
        <Link className={styles.button} href={enquiry()}>Enquire about this journey ↗</Link>
        <p className={styles.fine}>*Indicative price based on two adults sharing. Estimated for travel in March; not a live or guaranteed offer. Flights, accommodation and availability require reconfirmation.</p>
      </div>
      <TripPhoto image={trip.hero} className={styles.heroPhoto}/>
    </section>
    <section className={styles.intro}><p className={styles.eyebrow}>{trip.introEyebrow || "ONE JOURNEY, TWO SIDES OF THAILAND"}</p><h2>{trip.introTitle || "City energy. Island ease."}</h2><p>{trip.introText || "Start among Bangkok’s riverside temples, gilded palaces and colourful markets. Then fly south to Phuket for unhurried days by the coast. The guided experiences and transfers stay the same whichever accommodation style you choose."}</p></section>
    <section className={styles.tiers} aria-labelledby="tiers-heading">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>YOUR STAY, YOUR STYLE</p><h2 id="tiers-heading">Choose your accommodation.</h2></div>
      <div className={styles.tierGrid}>{trip.tiers.map(tier => <article className={styles.tier} key={tier.id}>
        <p className={styles.tierLabel}>{tier.label}</p><p className={styles.price}>£{tier.price.toLocaleString('en-GB')} <span>pp*</span></p>
        <p>{tier.note}</p>
        <ul>{tier.hotels.map(hotel => <li key={hotel.name}><strong>{hotel.place} · {hotel.nights} nights</strong><span>{hotel.name}</span><small>{hotel.room}</small></li>)}</ul>
        <Link className={styles.button} href={enquiry(tier.id)}>Enquire about {tier.label.toLowerCase()} ↗</Link>
      </article>)}</div>
      <p className={styles.fine}>*Example prices are per person based on two sharing a twin/double room, and include the proposed itinerary. Prices are estimates for March travel and are subject to availability and a final personalised quotation.</p>
    </section>
    <HolidayDetails trip={trip} />
    <section className={styles.journey} aria-labelledby="journey-heading">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>YOUR JOURNEY, DAY BY DAY</p><h2 id="journey-heading">{trip.journeyTitle || "From Bangkok to the Andaman Sea."}</h2></div>
      <div className={styles.journeyGrid}><div className={styles.days}>{trip.days.map(day => <article key={day.heading} className={styles.day}><p>{day.heading}</p><div><h3>{day.title}</h3><span>{day.description}</span></div></article>)}</div><div className={styles.journeyAside}><TripPhoto image={trip.secondImage}/><p>{trip.journeyAside || "Seven nights in Phuket, with the freedom to do as much — or as little — as you like."}</p></div></div>
    </section>
    <section className={styles.inclusions} aria-labelledby="included-heading"><div><p className={styles.eyebrow}>THE DETAILS</p><h2 id="included-heading">What's included</h2><ul>{trip.included.map(item=><li key={item}>{item}</li>)}</ul></div><div><p className={styles.eyebrow}>PLAN AHEAD</p><h2>What's not included</h2><ul>{trip.excluded.map(item=><li key={item}>{item}</li>)}</ul><p className={styles.fine}>Check <a href={trip.entryAdviceUrl || "https://www.gov.uk/foreign-travel-advice/thailand/entry-requirements"} target="_blank" rel="noreferrer">UK government entry guidance</a>{!trip.country && <> and the <a href="https://tdac.immigration.go.th/arrival-card/#/home" target="_blank" rel="noreferrer">official TDAC website</a></>} before departure. Financial protection arrangements and applicable terms will be explained with your final quotation; no membership or licence is claimed on this page.</p></div></section>
    <section className={styles.faq} aria-labelledby="faq-heading"><p className={styles.eyebrow}>GOOD TO KNOW</p><h2 id="faq-heading">Frequently asked questions.</h2>{trip.faqs.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
    <section className={styles.cta}><p className={styles.eyebrow}>TAILOR-MADE, TRULY</p><h2>Make this journey yours.</h2><p>Tell us which accommodation style appeals to you — or ask us to create something completely different.</p><Link className={styles.button} href={enquiry()}>Start planning your {trip.country || "Thailand"} trip ↗</Link><small>Complimentary initial consultation · No obligation · Enquiry only, not a booking</small></section>
  </main>;
}
