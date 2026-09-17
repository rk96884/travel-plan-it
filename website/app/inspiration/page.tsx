import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import styles from './inspiration.module.css';

const stories = [
  { href: '/inspiration/khanom/', image: '/images/inspiration/khanom-pink-dolphin.png', label: 'THAILAND · BEYOND THE OBVIOUS', title: 'Khanom: Thailand at a gentler pace', text: 'Quiet beaches, local fishing communities and the chance to see Khanom’s distinctive pink dolphins.' },
  { href: '/inspiration/palawan/', image: '/images/inspiration/palawan-lagoon.png', label: 'PHILIPPINES · ISLAND ADVENTURE', title: 'Palawan: beyond the beach', text: 'Limestone lagoons, island-hopping and jungle landscapes shaped into a journey at your own pace.' },
  { href: '/inspiration/nihi-sumba/', image: '/images/inspiration/nihi-sumba-horse-beach.png', label: 'INDONESIA · EXTRAORDINARY ESCAPE', title: 'Nihi Sumba: wild luxury', text: 'A remote Indonesian escape where dramatic coastline, horses and considered luxury come together.' },
];

export default function InspirationPage() {
  return <><SiteHeader /><main id="main" className={styles.page}>
    <section className={styles.intro}><div><p className={styles.eyebrow}>TRAVEL INSPIRATION</p><h1>Ideas to make your own.</h1></div><p>These aren’t off-the-shelf packages. They’re starting points — places, experiences and combinations that show what a tailor-made journey could become when it’s built around you.</p></section>
    <section className={styles.grid} aria-label="Travel inspiration">
      {stories.map((story) => <Link className={styles.card} href={story.href} key={story.href}><div className={styles.cardImage}><Image src={story.image} alt="" fill sizes="(max-width: 800px) 90vw, 30vw" /></div><div className={styles.cardCopy}><span>{story.label}</span><h2>{story.title}</h2><p>{story.text}</p></div></Link>)}
    </section>
  </main><SiteFooter /></>;
}
