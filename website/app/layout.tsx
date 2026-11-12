import type { Metadata } from 'next';
import './globals.css';
import AnalyticsConsent from '../components/analytics-consent';

export const metadata: Metadata = {
  metadataBase: new URL('https://mytravelplanit.co.uk'),
  title: {
    default: 'Travel Plan It | Tailor-made travel, built around you',
    template: '%s | Travel Plan It',
  },
  description:
    'Independent UK travel planning for tailor-made long-haul holidays, complex itineraries and journeys across Asia and beyond.',
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/images/logo-circle.png', type: 'image/png' }],
    apple: [{ url: '/images/logo-circle.png', type: 'image/png' }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}<AnalyticsConsent /></body>
    </html>
  );
}
