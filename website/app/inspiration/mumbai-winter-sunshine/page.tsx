import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { mumbaiWinterSunshine } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Mumbai Winter Sunshine | Juhu Beach Tailor-Made Holiday',
  description: 'Escape to Mumbai for winter sunshine with six nights on Juhu Beach, an Amsterdam stopover in both directions and flexible optional city experiences. From £1,499pp.',
  alternates: { canonical: '/inspiration/mumbai-winter-sunshine' },
  openGraph: {
    title: 'Mumbai: winter sunshine in India’s Maximum City',
    description: 'A flexible Mumbai city and beach escape, with a Juhu beachfront stay and Amsterdam stopovers.',
    url: '/inspiration/mumbai-winter-sunshine',
    type: 'article',
  },
};

export default function MumbaiWinterSunshinePage() {
  return <><SiteHeader /><TripIdeaPage trip={mumbaiWinterSunshine} /><SiteFooter /></>;
}
