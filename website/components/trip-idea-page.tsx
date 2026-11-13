import Link from 'next/link';
import type { TripIdea } from '../lib/trip-ideas';
import styles from './trip-idea.module.css';
import HolidayDetails from './holiday-details';
import ThreeCountryOptions from './three-country-options';
import TrackedEnquiryLink from './tracked-enquiry-link';

function TripPhoto({ image, className = '' }: { image: TripIdea['hero']; className?: string }) {
  return <figure className={`${styles.photo} ${className}`}>

    {/* eslint-disable-next-line @next/next/no-img-element */}
    {image.src ? <img src={image.src} alt={image.alt} loading="lazy" referrerPolicy="no-referrer" /> : <div className={styles.photoPlaceholder} role="img" aria-label="Destination photography to follow">Singapore · Batam · Johor Bahru</div>}
    {image.credit && image.creditUrl && <figcaption><a href={image.creditUrl} target="_blank" rel="license noreferrer">{image.credit}</a></figcaption>}
  </figure>;
}

const destinationGuidance: Record<string, { heading: string; detail: string; relatedHref: string; relatedLabel: string }> = {
  'Singapore, Indonesia & Malaysia': { heading: 'Three countries, one tailor-made holiday', detail: 'Combine Singapore city sights, a Batam island retreat and a Johor Bahru stop with private road transfers and ferries. Every part of the trip can be adjusted to your plans.', relatedHref: '/inspiration/bangkok-phuket-twin-centre/', relatedLabel: 'Thailand twin-centre holiday' },
  Thailand: {
    heading: 'A tailor-made Thailand holiday, from Bangkok to Phuket',
    detail: 'Combine Bangkok’s riverside temples and markets with a slower-paced stay in Phuket. The suggested route includes private sightseeing in the capital and time to explore the coast at your own pace. Accommodation, activities and the length of your stay can be adjusted in your personalised quotation.',
    relatedHref: '/inspiration/phnom-penh-siem-reap-twin-centre/',
    relatedLabel: 'Cambodia twin-centre holiday',
  },
  Cambodia: {
    heading: 'A tailor-made Cambodia holiday, from capital to temples',
    detail: 'Pair time in Phnom Penh with a stay in Siem Reap for the Angkor temples. This example combines private guided experiences with room to explore independently; the choice of hotels, sightseeing and pace can be refined to suit you.',
    relatedHref: '/inspiration/hanoi-ho-chi-minh-city-twin-centre/',
    relatedLabel: 'Vietnam twin-centre holiday',
  },
  Vietnam: {
    heading: 'A tailor-made Vietnam holiday, north and south',
    detail: 'Travel between Hanoi and Ho Chi Minh City, with a route that introduces two contrasting cities and optional experiences beyond them. Use this twin-centre itinerary as a starting point, then adapt the accommodation, excursions and time in each place.',
    relatedHref: '/inspiration/luang-prabang-vientiane-twin-centre/',
    relatedLabel: 'Laos twin-centre holiday',
  },
  Laos: {
    heading: 'A tailor-made Laos holiday, heritage and riverside life',
    detail: 'Discover Luang Prabang and Vientiane on a two-centre journey that balances historic sights with time to unwind. The suggested hotels and guided experiences are examples; your final route and travel arrangements can be tailored to your interests and dates.',
    relatedHref: '/inspiration/bangkok-phuket-twin-centre/',
    relatedLabel: 'Thailand twin-centre holiday',
  },
};

export default function TripIdeaPage({ trip }: { trip: TripIdea }) {
  const enquiry = (tier?: string) => `/plan-my-trip/?trip=${encodeURIComponent(trip.slug)}${tier ? `&tier=${encodeURIComponent(tier)}` : ''}`;
  return <main id="main" className={`${styles.page} ${trip.country === "Cambodia" || trip.country === "Vietnam" || trip.country === "Laos" ? styles.cambodia : styles.thailand}`}>
    <div className={styles.breadcrumb}><Link href="/tailor-made-holidays/">← All tailor-made holidays</Link><span> / {trip.country || "Thailand"} / {trip.country === "Singapore, Indonesia & Malaysia" ? "Singapore, Batam & Johor Bahru" : trip.country === "Laos" ? "Luang Prabang & Vientiane" : trip.country === "Vietnam" ? "Hanoi & Ho Chi Minh City" : trip.country ? "Phnom Penh & Siem Reap" : "Bangkok & Phuket"}</span></div>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{trip.eyebrow}</p>
        <h1>{trip.title}</h1>
        <p className={styles.lead}>{trip.summary}</p>
        <div className={styles.stats}><span>{trip.duration} / {trip.nights}</span><span>{trip.country === "Singapore, Indonesia & Malaysia" ? "Three countries" : "Private guided tours"}</span><span>Two accommodation options</span></div>
        <p className={styles.from}>From <strong>£{Math.min(...trip.tiers.map(t => t.price).filter((p): p is number => p !== null)).toLocaleString('en-GB')}</strong> <span>per person* · indicative, dates flexible</span></p>
        <TrackedEnquiryLink className={styles.button} href={enquiry()} tripSlug={trip.slug} position="hero">Enquire about this journey ↗</TrackedEnquiryLink>
        <p className={styles.fine}>*Indicative price based on two adults sharing. Indicative only; not a live or guaranteed offer. Flights, accommodation and availability require reconfirmation.</p>
      </div>
      <TripPhoto image={trip.hero} className={styles.heroPhoto}/>
    </section>
    <section className={styles.intro}><p className={styles.eyebrow}>{trip.introEyebrow || "ONE JOURNEY, TWO SIDES OF THAILAND"}</p><h2>{trip.introTitle || "City energy. Island ease."}</h2><p>{trip.introText || "Start among Bangkok’s riverside temples, gilded palaces and colourful markets. Then fly south to Phuket for unhurried days by the coast. The guided experiences and transfers stay the same whichever accommodation style you choose."}</p></section>
    <section className={styles.intro}>
      <p className={styles.eyebrow}>MAKE THIS JOURNEY YOUR OWN</p>
      <h2>{destinationGuidance[trip.country || 'Thailand'].heading}</h2>
      <p>{destinationGuidance[trip.country || 'Thailand'].detail}</p>
      <p>Considering another destination? See our <Link href={destinationGuidance[trip.country || 'Thailand'].relatedHref}>{destinationGuidance[trip.country || 'Thailand'].relatedLabel}</Link>, or <Link href="/tailor-made-holidays/">compare all our tailor-made holiday ideas</Link>.</p>
    </section>
    <section className={styles.tiers} aria-labelledby="tiers-heading">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>YOUR STAY, YOUR STYLE</p><h2 id="tiers-heading">Choose your accommodation.</h2></div>
      <div className={styles.tierGrid}>{trip.tiers.map(tier => <article className={styles.tier} key={tier.id}>
        <p className={styles.tierLabel}>{tier.label}</p><p className={styles.price}>{tier.price === null ? "Price on request" : <>£{tier.price.toLocaleString("en-GB")} <span>pp*</span></>}</p>
        <p>{tier.note}</p>
        <ul>{tier.hotels.map(hotel => <li key={hotel.name}><strong>{hotel.place} · {hotel.nights} nights</strong><span>{hotel.name}</span><small>{hotel.room}</small></li>)}</ul>
        <TrackedEnquiryLink className={styles.button} href={enquiry(tier.id)} tripSlug={trip.slug} position="accommodation" tier={tier.id}>Enquire about {tier.label.toLowerCase()} ↗</TrackedEnquiryLink>
      </article>)}</div>
      <p className={styles.fine}>*Example prices are per person based on two sharing a twin/double room, and include the proposed itinerary. Dates, availability and final prices will be confirmed in a personalised quotation.</p>
    </section>
    {trip.country === "Singapore, Indonesia & Malaysia" ? <ThreeCountryOptions trip={trip} /> : <HolidayDetails trip={trip} />}
    <section className={styles.journey} aria-labelledby="journey-heading">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>YOUR JOURNEY, DAY BY DAY</p><h2 id="journey-heading">{trip.journeyTitle || "From Bangkok to the Andaman Sea."}</h2></div>
      <div className={styles.journeyGrid}><div className={styles.days}>{trip.days.map(day => <article key={day.heading} className={styles.day}><p>{day.heading}</p><div><h3>{day.title}</h3><span>{day.description}</span></div></article>)}</div><div className={styles.journeyAside}><TripPhoto image={trip.secondImage}/><p>{trip.journeyAside || "Seven nights in Phuket, with the freedom to do as much — or as little — as you like."}</p></div></div>
    </section>
    <section className={styles.inclusions} aria-labelledby="included-heading"><div><p className={styles.eyebrow}>THE DETAILS</p><h2 id="included-heading">What's included</h2><ul>{trip.included.map(item=><li key={item}>{item}</li>)}</ul></div><div><p className={styles.eyebrow}>PLAN AHEAD</p><h2>What's not included</h2><ul>{trip.excluded.map(item=><li key={item}>{item}</li>)}</ul><p className={styles.fine}>Check <a href={trip.entryAdviceUrl || "https://www.gov.uk/foreign-travel-advice/thailand/entry-requirements"} target="_blank" rel="noreferrer">UK government entry guidance</a>{!trip.country && <> and the <a href="https://tdac.immigration.go.th/arrival-card/#/home" target="_blank" rel="noreferrer">official TDAC website</a></>} before departure{trip.country === "Singapore, Indonesia & Malaysia" && <> plus <a href="https://www.gov.uk/foreign-travel-advice/indonesia/entry-requirements" target="_blank" rel="noreferrer">Indonesia</a> and <a href="https://www.gov.uk/foreign-travel-advice/malaysia/entry-requirements" target="_blank" rel="noreferrer">Malaysia</a> entry requirements</>}. Financial protection arrangements and applicable terms will be explained with your final quotation; no membership or licence is claimed on this page.</p></div></section>
    <section className={styles.faq} aria-labelledby="faq-heading"><p className={styles.eyebrow}>GOOD TO KNOW</p><h2 id="faq-heading">Frequently asked questions.</h2>{trip.faqs.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
    <section className={styles.cta}><p className={styles.eyebrow}>TAILOR-MADE, TRULY</p><h2>Make this journey yours.</h2><p>Tell us which accommodation style appeals to you — or ask us to create something completely different.</p><TrackedEnquiryLink className={styles.button} href={enquiry()} tripSlug={trip.slug} position="footer">Start planning your {trip.country === "Singapore, Indonesia & Malaysia" ? "three-country" : trip.country || "Thailand"} trip ↗</TrackedEnquiryLink><small>Complimentary initial consultation · No obligation · Enquiry only, not a booking</small></section>
  </main>;
}
