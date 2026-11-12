'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackItineraryCtaClick, type ItineraryCtaPosition } from '../lib/analytics';

type Props = {
  href: string;
  tripSlug: string;
  position: ItineraryCtaPosition;
  tier?: string;
  className?: string;
  children: ReactNode;
};

/** Keeps Next.js navigation and the existing enquiry prefill query intact. */
export default function TrackedEnquiryLink({ href, tripSlug, position, tier, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackItineraryCtaClick(tripSlug, position, tier)}
    >
      {children}
    </Link>
  );
}
