import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mytravelplanit.co.uk'),
  title: {
    default: 'Travel Plan It | Tailor-made travel, built around you',
    template: '%s | Travel Plan It',
  },
  description:
    'Independent UK travel planning for tailor-made long-haul holidays, complex itineraries and journeys across Asia and beyond.',
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
