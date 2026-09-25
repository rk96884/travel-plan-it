import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Travel Plan It | Tailor-made travel, built around you',
  description:
    'An independent travel business preparing to launch. Tailor-made holidays, complex itineraries and long-haul travel across Asia and beyond.',
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
