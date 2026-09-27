import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Travel insurance | Travel Plan It', template: '%s' },
  alternates: { canonical: '/travel-insurance/' },
};

export default function TravelInsuranceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
