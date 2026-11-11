import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { laosTwinCentre } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Tailor-Made Laos Holiday | Luang Prabang & Vientiane',
  description: 'Plan a tailor-made Laos holiday combining Luang Prabang and Vientiane, with guided tours, private transfers and two hotel options. Indicative from £1,999pp.',
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
