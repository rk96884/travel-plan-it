import Link from 'next/link';
import { site } from '../lib/site';

export default function SiteFooter({
  contained = false,
  photoCredit = false,
}: {
  contained?: boolean;
  photoCredit?: boolean;
}) {
  const email = process.env.PUBLIC_CONTACT_EMAIL?.trim() || site.contactEmail;
  return (
    <footer
      className={`site-footer ${contained ? 'site-footer-contained' : ''}`}
    >
      <div className="footer-inner">
        <div className="footer-top">
          <p>
            A new way to plan
            <br />
            <em>extraordinary travel.</em>
          </p>
          <div>
            <span>PLANNING A TRIP?</span>
            <a href={`mailto:${email}`}>{email} ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Travel Plan It</span>
          <nav className="footer-links" aria-label="Legal information">
            <Link href="/terms/">Terms of use</Link>
            <Link href="/privacy/">Privacy notice</Link>
          </nav>
        </div>
        {photoCredit && (
          <p className="photo-credit">
            <a href="https://unsplash.com/photos/a-view-of-a-body-of-water-surrounded-by-mountains-Tm6Sm2cDwBc">
              Photography by Benjamin Chambon / Unsplash
            </a>
          </p>
        )}
      </div>
    </footer>
  );
}
