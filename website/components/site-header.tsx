'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader({ back = false }: { back?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${back ? 'site-header-contained' : ''}`}>
        <div className="site-header-inner">
          <Link className="logo" href="/" aria-label="Travel Plan It home">
            <Image
              className="logo-graphic"
              src="/images/logo-circle.png"
              alt=""
              width={64}
              height={64}
              unoptimized
            />
            <span className="logo-text">
              travel{' '}
              <b>
                plan it<span>.</span>
              </b>
            </span>
          </Link>
          <div className="mobile-header-actions">
            <Link className="mobile-enquiry" href="/plan-my-trip/">Enquiries</Link>
            <button className={`mobile-menu-toggle ${menuOpen ? 'is-open' : ''}`} type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-primary-nav" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
          <nav id="mobile-primary-nav" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation" >
            <Link onClick={() => setMenuOpen(false)} href="/travel-planning/">Travel Planning</Link>
            <Link onClick={() => setMenuOpen(false)} href="/why-us/">Why Us</Link>
            <Link onClick={() => setMenuOpen(false)} href="/tailor-made-holidays/">Tailor-Made Holidays</Link>
            <Link onClick={() => setMenuOpen(false)} href="/inspiration/">Inspiration</Link>
            <Link className="nav-enquiry" href="/plan-my-trip/">Enquiries</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
