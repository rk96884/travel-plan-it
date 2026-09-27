import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Travel Plan It',
  description: 'See how Travel Plan It creates tailor-made long-haul journeys around your interests, pace and budget, with personal advice and carefully chosen travel partners.',
  alternates: { canonical: '/why-us/' },
};

export default function WhyUsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
