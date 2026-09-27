import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Palawan, Philippines | Tailor-made travel inspiration',
  description: 'Explore Palawan beyond the beach with turquoise lagoons, island-hopping, jungle landscapes and a tailor-made Philippines itinerary built around you.',
  alternates: { canonical: '/inspiration/palawan/' },
};

export default function PalawanLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
