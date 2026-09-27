import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Website terms of use | Travel Plan It', template: '%s' },
  alternates: { canonical: '/terms/' },
};

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
