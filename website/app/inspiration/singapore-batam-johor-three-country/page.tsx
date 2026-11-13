import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import TripIdeaPage from '../../../components/trip-idea-page';
import { singaporeBatamJohor } from '../../../lib/trip-ideas';

export const metadata: Metadata = {
  title: 'Singapore, Batam & Johor Bahru | 3-Country Tailor-Made Holiday',
  description: 'Explore three countries in 16 days: Singapore, Batam in Indonesia and Johor Bahru in Malaysia. 13 nights from £2,749pp based on two sharing; premium five-star option from £3,749pp indicative.',
  alternates: { canonical: '/inspiration/singapore-batam-johor-three-country' },
  openGraph: {
    title: 'Singapore, Indonesia & Malaysia: Three Countries, One Journey',
    description: 'A 16-day tailor-made journey with 13 nights in three countries, private transfers and ferry crossings.',
    url: '/inspiration/singapore-batam-johor-three-country',
    type: 'article',
  },
};

export default function SingaporeBatamJohorPage() {
  return <><SiteHeader /><TripIdeaPage trip={singaporeBatamJohor} /><SiteFooter /></>;
}
