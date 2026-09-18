import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import styles from './why-us.module.css';

const reasons = [
  { number: '01', title: 'Competitive rates, thoughtfully sourced.', text: 'We use our travel partners and supplier network to source competitive rates, while looking at the value of your whole journey — not simply the cheapest individual component.' },
  { number: '02', title: 'A real person when you need one.', text: 'Travel does not always go exactly to plan. If an issue arises with your holiday, you have someone to turn to for help rather than being left to navigate multiple suppliers on your own.' },
  { number: '03', title: 'Expertise on the ground.', text: 'From private guides to carefully selected tours and experiences, we can connect your journey with specialists who know the destination and can help you experience it more meaningfully.' },
  { number: '04', title: 'Your time is valuable.', text: 'Tell us your dates, budget and how you like to travel. We do the research, compare the possibilities and bring the itinerary together — so you do not have to spend hours doing it yourself.' },
  { number: '05', title: 'We go beyond the obvious.', text: 'We promise to show you a holiday you probably would not have thought of yourself — combining places and experiences that turn a good trip into something memorable.' },
  { number: '06', title: 'Designed around you.', text: 'No off-the-shelf itinerary dressed up as tailor-made. We start with you: what interests you, how quickly you like to travel, what matters most and what you would rather avoid.' },
];

export default function WhyUsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>WHY TRAVEL PLAN IT?</p>
          <h1>Your holiday.<br /><em>Our thinking.</em></h1>
          <p className={styles.lede}>Extraordinary travel takes more than a search box. We combine expertise, ideas and carefully chosen partners to create journeys around you — while taking care of the time-consuming planning along the way.</p>
          <Link className={styles.button} href="/plan-my-trip/">Tell us where you’re thinking ↗</Link>
        </section>

        <section className={styles.reasons} aria-label="Why choose Travel Plan It">
          {reasons.map((reason) => (
            <article key={reason.number}>
              <span>{reason.number} /</span>
              <h2>{reason.title}</h2>
              <p>{reason.text}</p>
            </article>
          ))}
        </section>

        <section className={styles.promise}>
          <p className={styles.eyebrow}>START WITH AN IDEA</p>
          <div>
            <h2>You don’t need to know exactly where you want to go.</h2>
            <p>Sometimes the best journeys start with an idea rather than a destination. Tell us what you love, how you want to feel and how much time you have. We’ll take it from there.</p>
            <Link className={styles.buttonLight} href="/plan-my-trip/">Let’s plan something extraordinary ↗</Link>
          </div>
        </section>

        <section className={styles.inspiration}>
          <p className={styles.eyebrow}>SEE WHAT WE MEAN</p>
          <div>
            <h2>Discover. Explore. Experience.</h2>
            <p>From the quieter shores of Khanom to island adventures in Palawan and the wild landscapes of Sumba, our inspiration is about finding the journey you might not have discovered on your own.</p>
            <Link href="/inspiration/">Explore our travel inspiration ↗</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
