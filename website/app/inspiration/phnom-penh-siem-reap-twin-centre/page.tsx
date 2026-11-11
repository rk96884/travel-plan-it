import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { cambodiaTwinCentre } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Tailor-Made Cambodia Holiday | Phnom Penh & Siem Reap',
  description: 'Explore a tailor-made Cambodia holiday with Phnom Penh, Siem Reap and private Angkor tours. Two hotel choices on a 12-day itinerary; indicative from £1,699pp.',
  alternates: { canonical: '/inspiration/phnom-penh-siem-reap-twin-centre' },
  openGraph: {
    title: 'Phnom Penh & Siem Reap: Cambodia Twin-Centre Holiday',
    description: 'Tailor-made 12-day Cambodia itinerary with private guided tours and two accommodation styles.',
    url: '/inspiration/phnom-penh-siem-reap-twin-centre',
    type: 'article',
  },
};

export default function CambodiaTwinCentrePage() {
  return <><SiteHeader /><TripIdeaPage trip={cambodiaTwinCentre} /><SiteFooter /></>;
}
