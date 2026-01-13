import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Footer() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TechFiscal Solutions",
            "url": "https://devfreelance.es",
            "logo": "https://devfreelance.es/favicon.svg",
            "description": "Recursos fiscales y legales para programadores autónomos en España",
            "email": "info.devfreelance2026@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info.devfreelance2026@gmail.com",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Helmet>
      <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-3">
              <span className="text-accent">{'<'}</span>
              <span className="text-foreground">DevFreelance</span>
              <span className="text-accent">{'/>'}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-3">
              Recursos fiscales y legales para programadores autónomos en España.
            </p>
            <a 
              href="mailto:info.devfreelance2026@gmail.com" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <span>✉️</span>
              <span>info.devfreelance2026@gmail.com</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/calculadora" className="text-muted-foreground hover:text-accent transition-colors">
                  Calculadora
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-muted-foreground hover:text-accent transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre el proyecto
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aviso-legal" className="text-muted-foreground hover:text-accent transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="text-muted-foreground hover:text-accent transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-accent transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2026 DevFreelance España. Todos los derechos reservados.</p>
          <p className="mt-1 text-xs">
            Este sitio es informativo. Consulta siempre con un asesor fiscal profesional.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
