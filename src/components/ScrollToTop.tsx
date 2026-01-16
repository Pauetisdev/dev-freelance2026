import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Forzar tracking de GTM en navegación cliente
    if (typeof window !== 'undefined') {
      // Esperar a que el DOM se actualice
      setTimeout(() => {
        // Método 1: Push a dataLayer con configuración completa
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'pageview',
            page: {
              path: pathname,
              title: document.title,
              url: window.location.href
            }
          });
        }
        
        // Método 2: Disparar evento de historial para GTM
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_path: pathname,
            page_title: document.title,
            page_location: window.location.href
          });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}
