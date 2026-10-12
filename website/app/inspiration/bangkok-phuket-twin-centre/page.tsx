import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { bangkokPhuket } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Bangkok & Phuket Twin Centre Holiday | 12-Day Thailand Itinerary',
  description: 'Explore a 12-day Bangkok and Phuket twin centre holiday idea with private Bangkok tours, seven nights by the beach and two hotel options. Indicative prices from £1,599pp.',
  alternates: { canonical: '/inspiration/bangkok-phuket-twin-centre/' },
  openGraph: {
    title: 'Bangkok & Phuket: temples, markets and tropical shores',
    description: 'A tailor-made 12-day Thailand twin-centre holiday idea, with two accommodation budgets.',
    url: '/inspiration/bangkok-phuket-twin-centre/',
    type: 'article',
  },
};

export default function BangkokPhuketPage() {
  return <><SiteHeader /><TripIdeaPage trip={bangkokPhuket} /><SiteFooter /></>;
}
