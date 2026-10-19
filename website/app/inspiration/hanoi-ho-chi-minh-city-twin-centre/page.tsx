import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { vietnamTwinCentre } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Vietnam Twin-Centre Holiday | Hanoi & Ho Chi Minh City | 12 Days',
  description: 'Explore 12 days in Vietnam: Hanoi, Ninh Binh, Ha Long City, Ho Chi Minh City, Mekong Delta and Vung Tau. Two hotel options from £1,949pp indicative.',
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
