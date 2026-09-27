import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khanom, Thailand | Tailor-made travel inspiration',
  description: 'Discover quieter Khanom in southern Thailand, with palm-fringed beaches, fishing communities and pink dolphins, shaped into a tailor-made journey.',
  alternates: { canonical: '/inspiration/khanom/' },
};

export default function KhanomLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
