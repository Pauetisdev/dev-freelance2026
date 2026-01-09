import { Layout } from '@/components/Layout';
import { Helmet } from 'react-helmet-async';

const Cookies = () => {
  return (
    <Layout>
      <Helmet>
        <title>Política de Cookies - DevFreelance España</title>
        <meta 
          name="description" 
          content="Información sobre el uso de cookies en DevFreelance España. Tipos de cookies y gestión." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Sección 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Definición y Función</h2>
            <p className="text-muted-foreground leading-relaxed">
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten, entre otras cosas, <strong>almacenar y recuperar información sobre los hábitos de navegación</strong> de un usuario o de su equipo.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Tipos de Cookies utilizadas en esta web</h2>
            
            <div className="space-y-6">
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Técnicas</h3>
                <p className="text-muted-foreground">
                  Esenciales para el correcto funcionamiento de la plataforma.
                </p>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Analíticas</h3>
                <p className="text-muted-foreground">
                  Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio.
                </p>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Publicitarias (Google AdSense)</h3>
                <p className="text-muted-foreground">
                  Permiten gestionar la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Gestión de Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Usted puede <strong>permitir, bloquear o eliminar</strong> las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
            
            <div className="mt-6 p-6 bg-accent/5 border border-border rounded-lg">
              <h4 className="font-semibold mb-3">Enlaces de gestión de cookies por navegador:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
                <li>• <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
                <li>• <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a></li>
                <li>• <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
              </ul>
            </div>
          </section>

          {/* Nota final */}
          <div className="mt-12 p-6 bg-accent/5 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Última actualización:</strong> 6 de enero de 2026
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
