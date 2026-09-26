import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import styles from './press.module.css';

export const metadata: Metadata = {
  title: 'Press & Media | Travel Plan It',
  description: 'Press and media information for Travel Plan It LTD, an independent UK travel business specialising in tailor-made long-haul and complex itineraries, with particular expertise in Asia.',
  alternates: { canonical: '/press/' },
};

const topics = [
  'Tailor-made long-haul travel and complex multi-centre itineraries',
  'Asia travel, including emerging and less-obvious destinations',
  'How travellers can combine destinations into one coherent journey',
  'Independent travel planning and the value of human expertise',
  'Travel inspiration, itinerary ideas and destination trends',
  'Building a modern independent travel business in the UK',
];

export default function PressPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className={styles.page}>
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.inner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>PRESS & MEDIA</p>
                <h1>Stories, expertise and<br /><em>extraordinary travel.</em></h1>
                <p className={styles.lede}>Travel Plan It is an independent UK travel business creating tailor-made long-haul and complex itineraries, with a particular passion for Asia. We welcome enquiries from journalists, editors, creators and industry media looking for travel insight, destination ideas or expert commentary.</p>
                <a className={styles.button} href="mailto:enquiries@mytravelplanit.co.uk?subject=Press%20%26%20media%20enquiry">Media enquiry ↗</a>
              </div>
              <div className={styles.heroImage}>
                <Image src="/images/agent.png" alt="Travel consultant planning a tailor-made journey" fill priority sizes="(max-width: 800px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.intro}`}><div className={`${styles.inner} ${styles.twoCol}`}>
          <p className={styles.eyebrow}>ABOUT TRAVEL PLAN IT</p><div><h2>Travel designed around the person, not the package.</h2><p>Travel Plan It LTD helps travellers turn an idea into a carefully considered journey. Rather than starting with an off-the-shelf package, we begin with how someone wants to travel — their interests, pace, budget and priorities — and bring the individual parts together into a coherent itinerary.</p><p>Our focus is on tailor-made long-haul travel, multi-centre journeys and trips where knowledgeable planning can make a real difference. Asia is a particular area of interest, alongside distinctive destinations and experiences that travellers may not discover through a conventional search.</p></div>
        </div></section>

        <section className={`${styles.section} ${styles.expertise}`}>
          <div className={styles.expertiseMark} aria-hidden="true"><Image src="/images/logo-circle.png" alt="" fill sizes="420px" /></div>
          <div className={`${styles.inner} ${styles.twoCol} ${styles.expertiseContent}`}>
            <p className={styles.eyebrow}>COMMENTARY & EXPERTISE</p><div><h2>How we can help journalists and creators.</h2><p>We can provide background information, itinerary ideas and commentary across areas including:</p><ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.inspiration}`}><div className={`${styles.inner} ${styles.twoCol}`}>
          <p className={styles.eyebrow}>TRAVEL INSPIRATION</p><div><h2>Ideas beyond the obvious.</h2><p>Our growing inspiration library explores places and experiences that reflect the way we approach travel — from quieter Thailand and island adventures in the Philippines to remote Indonesian landscapes.</p><Link href="/inspiration/">Explore Travel Plan It inspiration ↗</Link></div>
        </div></section>

        <section className={`${styles.section} ${styles.facts}`}><div className={styles.inner}>
          <p className={styles.eyebrow}>COMPANY INFORMATION</p><div className={styles.factGrid}><article><span>Company</span><strong>Travel Plan It LTD</strong></article><article><span>Based in</span><strong>United Kingdom</strong></article><article><span>Specialism</span><strong>Tailor-made long-haul & complex itineraries</strong></article><article><span>Destination focus</span><strong>Asia and distinctive worldwide travel</strong></article></div>
        </div></section>

        <section className={`${styles.section} ${styles.contact}`}><div className={`${styles.inner} ${styles.twoCol}`}>
          <p className={styles.eyebrow}>MEDIA ENQUIRIES</p><div><h2>Working on a travel story?</h2><p>For press enquiries, expert commentary, destination ideas, interviews or requests for Travel Plan It information and imagery, please get in touch. If you are working to a deadline, include it in your message.</p><a className={styles.buttonLight} href="mailto:enquiries@mytravelplanit.co.uk?subject=Press%20%26%20media%20enquiry">enquiries@mytravelplanit.co.uk ↗</a></div>
        </div></section>
      </main>
      <SiteFooter />
    </>
  );
}
