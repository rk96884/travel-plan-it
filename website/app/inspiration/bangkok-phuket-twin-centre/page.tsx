import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { bangkokPhuket } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Tailor-Made Thailand Holiday | Bangkok & Phuket | 12 Days',
  description: 'Plan a tailor-made Thailand holiday combining Bangkok and Phuket: private guided city tours, seven beach nights and two hotel styles. Indicative from £1,599pp.',
  alternates: { canonical: '/inspiration/bangkok-phuket-twin-centre' },
  openGraph: {
    title: 'Bangkok & Phuket: temples, markets and tropical shores',
    description: 'A tailor-made 12-day Thailand twin-centre holiday idea, with two accommodation budgets.',
    url: '/inspiration/bangkok-phuket-twin-centre',
    type: 'article',
  },
};

export default function BangkokPhuketPage() {
  return <><SiteHeader /><TripIdeaPage trip={bangkokPhuket} /><SiteFooter /></>;
}
