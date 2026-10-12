import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import { bangkokPhuket, cambodiaTwinCentre } from '../../lib/trip-ideas';
import styles from './holidays.module.css';

export const metadata: Metadata = {
  title: 'Tailor-Made Holidays | Twin-Centre & Multi-Centre Trips',
  description: 'Explore tailor-made twin-centre and multi-centre holiday ideas from Travel Plan It. Explore Thailand and Cambodia twin-centre holidays, then personalise your route, hotels and experiences.',
  alternates: { canonical: '/tailor-made-holidays/' },
};

const journeys = [bangkokPhuket, cambodiaTwinCentre];

export default function TailorMadeHolidays() {
  return <><SiteHeader/><main id="main" className={styles.page}>
    <section className={styles.intro}>
      <p className={styles.eyebrow}>TAILOR-MADE HOLIDAYS · ASIA & BEYOND</p>
      <h1>Journeys to make <em>your own.</em></h1>
      <p>Discover thoughtfully planned twin-centre and multi-centre holidays. Every itinerary is an inspiration, not a fixed departure: choose your hotels, refine the route and travel in your own way.</p>
      <Link className={styles.button} href="/plan-my-trip/">Plan a tailor-made journey ↗</Link>
    </section>
    <section className={styles.collection} aria-labelledby="journeys-heading">
      <div className={styles.heading}><p className={styles.eyebrow}>OUR HOLIDAY IDEAS</p><h2 id="journeys-heading">Where will you go?</h2></div>
      <div className={styles.grid}>{journeys.map(trip=><article className={styles.card} key={trip.slug}>
        <Link href={`/inspiration/${trip.slug}/`} className={styles.photoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={trip.secondImage.src} alt={trip.secondImage.alt} loading="lazy" referrerPolicy="no-referrer"/>
        </Link>
        <div className={styles.copy}><p className={styles.eyebrow}>{trip.eyebrow}</p><h3><Link href={`/inspiration/${trip.slug}/`}>{trip.title}</Link></h3>
          <p>{trip.summary}</p><div className={styles.meta}><span>{trip.duration} / {trip.nights}</span><span>From £{Math.min(...trip.tiers.map(t=>t.price)).toLocaleString('en-GB')}pp*</span></div>
          <Link className={styles.textLink} href={`/inspiration/${trip.slug}/`}>Explore this journey →</Link>
        </div>
        {trip.secondImage.credit && trip.secondImage.creditUrl && <p className={styles.credit}><a href={trip.secondImage.creditUrl} target="_blank" rel="license noreferrer">{trip.secondImage.credit}</a></p>}
      </article>)}</div>
      <p className={styles.disclaimer}>*Indicative example prices based on two adults sharing, subject to availability and a personalised quotation. These are trip ideas, not live bookable packages.</p>
    </section>
    <section className={styles.outro}><h2>Have somewhere else in mind?</h2><p>Tell us where you dream of going and we’ll build a journey around you.</p><Link className={styles.button} href="/plan-my-trip/">Start planning ↗</Link></section>
  </main><SiteFooter/></>;
}
