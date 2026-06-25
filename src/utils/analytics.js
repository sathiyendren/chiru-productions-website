// Google Analytics utility functions
import { GA_CONFIG } from '../data'

export const GA_MEASUREMENT_ID = GA_CONFIG.MEASUREMENT_ID;

// Check if analytics is enabled
const isAnalyticsEnabled = () => {
  return GA_CONFIG.ENABLED && typeof window !== 'undefined' && window.gtag;
};

// Track page views
export const trackPageView = (path) => {
  if (isAnalyticsEnabled()) {
    const config = { page_path: path };
    if (GA_CONFIG.DEBUG_MODE) {
      config.debug_mode = true;
    }
    window.gtag('config', GA_MEASUREMENT_ID, config);
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (isAnalyticsEnabled()) {
    window.gtag('event', eventName, parameters);
  }
};

// Track film interactions
export const trackFilmClick = (filmTitle, filmGenre) => {
  trackEvent('film_click', {
    film_title: filmTitle,
    film_genre: filmGenre,
    content_type: 'film',
  });
};

// Track trailer plays
export const trackTrailerPlay = (filmTitle) => {
  trackEvent('trailer_play', {
    film_title: filmTitle,
    content_type: 'video',
  });
};

// Track coming soon modal views
export const trackComingSoonView = (filmTitle) => {
  trackEvent('coming_soon_view', {
    film_title: filmTitle,
    content_type: 'film',
  });
};

// Track navigation clicks
export const trackNavClick = (destination) => {
  trackEvent('navigation_click', {
    destination: destination,
    content_type: 'navigation',
  });
};

// Track mobile menu interactions
export const trackMobileMenuToggle = (isOpen) => {
  trackEvent('mobile_menu_toggle', {
    menu_state: isOpen ? 'open' : 'close',
    content_type: 'navigation',
  });
};

// Track external link clicks
export const trackExternalLink = (url, linkType) => {
  trackEvent('external_link_click', {
    url: url,
    link_type: linkType,
    content_type: 'external_link',
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    scroll_percentage: depth,
    content_type: 'engagement',
  });
};
