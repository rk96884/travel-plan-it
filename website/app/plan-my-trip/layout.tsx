import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan My Trip',
  description: 'Tell Travel Plan It about your dates, budget and travel ideas and start planning a tailor-made long-haul or complex itinerary built around you.',
  alternates: { canonical: '/plan-my-trip/' },
};

export default function PlanMyTripLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
