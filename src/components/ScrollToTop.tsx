import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Tracking para navegación cliente (SPA)
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Esperar a que el DOM y título se actualicen
      setTimeout(() => {
        // Enviar evento de historial a GTM
        window.dataLayer.push({
          event: 'virtualPageview',
          virtualPageURL: pathname,
          virtualPageTitle: document.title
        });
      }, 200);
    }
  }, [pathname]);

  return null;
}
