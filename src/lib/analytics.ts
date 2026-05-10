import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const useGoogleAnalytics = (measurementId?: string) => {
  const location = useLocation();

  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    window.gtag('config', measurementId, {
      page_path: location.pathname + location.search,
    });
  }, [location, measurementId]);
};

// Usage: Add to main layout or App component if GA_ID exists
