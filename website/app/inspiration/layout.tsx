import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Inspiration',
  description: 'Discover tailor-made travel ideas across Asia and beyond, from quieter coastlines to island adventures and extraordinary escapes.',
  alternates: { canonical: '/inspiration/' },
};

export default function InspirationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
