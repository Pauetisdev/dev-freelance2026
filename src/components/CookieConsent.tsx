import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Comprobar si ya se ha dado consentimiento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Mostrar banner después de 1 segundo
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Cookie className="w-8 h-8 text-accent" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold mb-1 text-foreground">
              🍪 Uso de cookies
            </h3>
            <p className="text-sm text-muted-foreground">
              Utilizamos cookies propias y de terceros (Google AdSense) para personalizar contenido y anuncios, 
              ofrecer funciones de redes sociales y analizar el tráfico. 
              Compartimos información sobre tu uso del sitio con nuestros partners de publicidad. {' '}
              <Link to="/cookies" className="text-accent hover:underline font-medium">
                Más información
              </Link>
              {' '} | {' '}
              <Link to="/politica-privacidad" className="text-accent hover:underline font-medium">
                Política de Privacidad
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Button 
              onClick={handleAccept} 
              className="flex-1 md:flex-none"
              size="sm"
            >
              Aceptar todas
            </Button>
            <Button 
              onClick={handleReject} 
              variant="outline"
              className="flex-1 md:flex-none"
              size="sm"
            >
              Solo esenciales
            </Button>
            <Button
              onClick={handleReject}
              variant="ghost"
              size="icon"
              className="md:ml-2"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
