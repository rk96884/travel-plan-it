import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Privacy notice | Travel Plan It', template: '%s' },
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
