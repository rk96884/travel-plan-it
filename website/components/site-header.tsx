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
          {back ? (
            <Link className="back-home" href="/">
              ← Back to home
            </Link>
          ) : (
            <span className="status">A new journey is coming</span>
          )}
        </div>
      </header>
    </>
  );
}
