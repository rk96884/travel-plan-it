import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nihi Sumba, Indonesia | Tailor-made luxury travel',
  description: 'Discover Nihi Sumba and a wilder side of luxury Indonesia, combining dramatic coastline, horses, nature and considered downtime in a tailor-made journey.',
  alternates: { canonical: '/inspiration/nihi-sumba/' },
};

export default function NihiSumbaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
