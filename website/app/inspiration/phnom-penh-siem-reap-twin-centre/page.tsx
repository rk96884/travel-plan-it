import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { cambodiaTwinCentre } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Cambodia Twin-Centre Holiday | Phnom Penh & Siem Reap | 12 Days',
  description: 'Explore a 12-day Cambodia twin-centre holiday: five nights in Phnom Penh, five in Siem Reap, private Angkor tours and two hotel options. From £1,699pp indicative.',
  alternates: { canonical: '/inspiration/phnom-penh-siem-reap-twin-centre/' },
  openGraph: {
    title: 'Phnom Penh & Siem Reap: Cambodia Twin-Centre Holiday',
    description: 'Tailor-made 12-day Cambodia itinerary with private guided tours and two accommodation styles.',
    url: '/inspiration/phnom-penh-siem-reap-twin-centre/',
    type: 'article',
  },
};

export default function CambodiaTwinCentrePage() {
  return <><SiteHeader /><TripIdeaPage trip={cambodiaTwinCentre} /><SiteFooter /></>;
}
