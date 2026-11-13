/** Browser-only analytics exclusion. Kept separate from visitor consent. */
export const analyticsExclusionKey = 'travel-plan-it-analytics-excluded';

/**
 * Apply the private ?internal_analytics=off/on command on a full page load.
 * Remove the parameter immediately so it is not kept in copied URLs.
 */
export function applyAnalyticsExclusionCommand(): boolean {
  if (typeof window === 'undefined') return false;
  const url = new URL(window.location.href);
  const command = url.searchParams.get('internal_analytics');

  if (command === 'off' || command === 'on') {
    try {
      if (command === 'off') {
        window.localStorage.setItem(analyticsExclusionKey, 'true');
      } else {
        window.localStorage.removeItem(analyticsExclusionKey);
      }
    } catch {
      // If storage is unavailable, an exclusion cannot persist.
    }
    url.searchParams.delete('internal_analytics');
    window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
  }

  return isAnalyticsExcluded();
}

export function isAnalyticsExcluded(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(analyticsExclusionKey) === 'true';
  } catch {
    return false;
  }
}
