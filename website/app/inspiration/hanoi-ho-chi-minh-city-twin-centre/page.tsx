import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { vietnamTwinCentre } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Tailor-Made Vietnam Holiday | Hanoi & Ho Chi Minh City',
  description: 'Discover a 12-day tailor-made Vietnam holiday linking Hanoi and Ho Chi Minh City, with guided sightseeing and two hotel styles. Indicative from £1,949pp.',
  alternates: { canonical: '/inspiration/hanoi-ho-chi-minh-city-twin-centre' },
  openGraph: {
    title: 'Hanoi & Ho Chi Minh City: Vietnam Twin-Centre Holiday',
    description: 'A tailor-made Vietnam holiday with guided experiences and two accommodation options.',
    url: '/inspiration/hanoi-ho-chi-minh-city-twin-centre',
    type: 'article',
  },
};

export default function VietnamTwinCentrePage() {
  return <><SiteHeader /><TripIdeaPage trip={vietnamTwinCentre} /><SiteFooter /></>;
}
