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
        <div className="footer-social">
          <span>FOLLOW TRAVEL PLAN IT</span>
          <nav aria-label="Social media">
            <a href="https://www.instagram.com/travelplanit/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61594424911097" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@travelplanit" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M14.5 4v9.1a4.6 4.6 0 1 1-3.4-4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M14.5 4c.7 2.1 2.2 3.5 4.5 3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </a>
            <a href="https://www.youtube.com/@mytravelplanit" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.8"/><path d="M10 9.5 15 12l-5 2.5v-5Z" fill="currentColor"/></svg>
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Travel Plan It</span>
          <nav className="footer-links" aria-label="Helpful information">
            <Link href="/press/">Press & media</Link>
            <Link href="/travel-insurance/">Travel insurance</Link>
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
