'use client';

import { useEffect, useState } from 'react';

const measurementId = 'G-W96BJ7JYMF';
const consentKey = 'travel-plan-it-analytics-consent';

type Consent = 'accepted' | 'declined';

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(consentKey);
      if (stored === 'accepted' || stored === 'declined') setChoice(stored);
    } catch {
      // Storage may be unavailable; allow visitors to decide for this session.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || choice !== 'accepted') return;
    if (document.getElementById('travel-plan-it-ga4')) return;

    window.dataLayer = window.dataLayer || [];
    // Match Google's official gtag snippet: commands are Arguments objects,
    // not ordinary arrays. The tag library consumes this queue.
    window.gtag = function (..._args: unknown[]) {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });

    const script = document.createElement('script');
    script.id = 'travel-plan-it-ga4';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }, [ready, choice]);

  const decide = (value: Consent) => {
    try {
      window.localStorage.setItem(consentKey, value);
    } catch {
      // Respect the decision for this page even without persistent storage.
    }
    setChoice(value);
  };

  if (!ready || choice !== null) return null;

  return (
    <aside
      aria-label="Analytics cookie preferences"
      style={{
        position: 'fixed', bottom: 16, left: 16, right: 16,
        zIndex: 1000, maxWidth: 620, margin: '0 auto',
        padding: 20, borderRadius: 12, background: '#fff',
        color: '#182b28', boxShadow: '0 4px 28px rgba(0,0,0,.22)',
        border: '1px solid #d5ddd8'
      }}
    >
      <p style={{ margin: '0 0 12px' }}>
        We’d like to use optional Google Analytics cookies to understand how people use
        Travel Plan It and improve the website. You can accept or decline.
        See our <a href="/privacy/">privacy notice</a>.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button type="button" onClick={() => decide('declined')}
          style={{ padding: '10px 16px', borderRadius: 6, border: '1px solid #4b665e', background: '#fff', color: '#182b28', cursor: 'pointer' }}>
          Decline analytics
        </button>
        <button type="button" onClick={() => decide('accepted')}
          style={{ padding: '10px 16px', borderRadius: 6, border: '1px solid #224f44', background: '#224f44', color: '#fff', cursor: 'pointer' }}>
          Accept analytics
        </button>
      </div>
    </aside>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
