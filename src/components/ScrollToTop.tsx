import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Tracking para navegación cliente (SPA)
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Esperar a que el DOM y título se actualicen completamente
      const sendPageView = () => {
        const pageTitle = document.title || 'Sin título';
        const pageURL = pathname;
        
        // Enviar evento a GTM
        window.dataLayer.push({
          event: 'virtualPageview',
          virtualPageURL: pageURL,
          virtualPageTitle: pageTitle
        });
        
        // También enviar page_view directamente a GA4
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_path: pageURL,
            page_title: pageTitle,
            page_location: window.location.href
          });
        }
        
        console.log('📊 Pageview enviado:', pageURL, pageTitle);
      };
      
      // Esperar a que React actualice el título
      setTimeout(sendPageView, 300);
    }
  }, [pathname]);

  return null;
}
