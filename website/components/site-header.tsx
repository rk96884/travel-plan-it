import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader({ back = false }: { back?: boolean }) {
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
          <nav className="primary-nav" aria-label="Primary navigation">
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/inspiration/">Inspiration</Link>
            <Link className="nav-enquiry" href="/plan-my-trip/">Enquiries</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
