import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { laosTwinCentre } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Laos Twin-Centre Holiday | Luang Prabang & Vientiane | 12 Days',
  description: 'Discover Laos with five nights in Luang Prabang and five in Vientiane, guided city tours, private transfers and two hotel options from £1,999pp indicative.',
  alternates: { canonical: '/inspiration/luang-prabang-vientiane-twin-centre' },
  openGraph: {
    title: 'Luang Prabang & Vientiane: Laos Twin-Centre Holiday',
    description: 'A 12-day tailor-made Laos journey with two accommodation options and guided sightseeing.',
    url: '/inspiration/luang-prabang-vientiane-twin-centre',
    type: 'article',
  },
};

export default function LaosTwinCentrePage() {
  return <><SiteHeader /><TripIdeaPage trip={laosTwinCentre} /><SiteFooter /></>;
}
