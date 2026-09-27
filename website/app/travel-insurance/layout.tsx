import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/travel-insurance/' },
};

export default function TravelInsuranceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
