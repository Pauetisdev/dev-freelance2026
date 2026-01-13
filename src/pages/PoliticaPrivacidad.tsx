import { Layout } from '@/components/Layout';
import { Helmet } from 'react-helmet-async';

const PoliticaPrivacidad = () => {
  return (
    <Layout>
      <Helmet>
        <title>Política de Privacidad - DevFreelance España</title>
        <meta 
          name="description" 
          content="Política de privacidad de DevFreelance España. Información sobre el tratamiento de datos personales y cookies." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Sección 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Responsable del Tratamiento</h2>
            <p className="text-muted-foreground leading-relaxed">
              El responsable del tratamiento de los datos recabados es <strong>TechFiscal Solutions</strong>, con email de contacto: <a href="mailto:info.devfreelance2026@gmail.com" className="text-accent hover:underline">info.devfreelance2026@gmail.com</a>.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Finalidad y Datos Recogidos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta web <strong>no recoge datos personales de identificación directa</strong> a través de formularios. Los únicos datos procesados son técnicos (IP, tipo de navegador) mediante cookies para el funcionamiento técnico y análisis anónimo de visitas.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Publicidad y Cookies de Terceros (Google AdSense)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este sitio web muestra anuncios gestionados por <strong>Google AdSense</strong>, un servicio de publicidad de Google LLC. 
              Google y otros proveedores terceros utilizan cookies para publicar anuncios basados en las visitas anteriores del usuario a este sitio web u otros sitios.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Uso de cookies publicitarias por Google</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Google utiliza cookies publicitarias para mostrar anuncios personalizados según los intereses del usuario. 
              Estas cookies permiten a Google y a sus socios ofrecer anuncios basados en las visitas del usuario a este sitio y/o a otros sitios de Internet.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-4">
              <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-300">Cómo inhabilitar la publicidad personalizada</h4>
              <p className="text-muted-foreground mb-3">
                Los usuarios pueden inhabilitar el uso de cookies para publicidad personalizada visitando los siguientes enlaces oficiales:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline font-medium"
                  >
                    Configuración de anuncios de Google
                  </a> - Gestiona la personalización de anuncios en servicios de Google
                </li>
                <li>
                  <a 
                    href="https://optout.aboutads.info/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline font-medium"
                  >
                    Digital Advertising Alliance (aboutads.info)
                  </a> - Herramienta de exclusión voluntaria para múltiples proveedores de publicidad
                </li>
                <li>
                  <a 
                    href="https://www.youronlinechoices.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline font-medium"
                  >
                    Your Online Choices (Europa)
                  </a> - Control de publicidad comportamental en Europa
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Tipos de cookies publicitarias utilizadas</h3>
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden mb-4">
              <thead className="bg-accent/10">
                <tr>
                  <th className="border border-border p-3 text-left">Cookie</th>
                  <th className="border border-border p-3 text-left">Proveedor</th>
                  <th className="border border-border p-3 text-left">Finalidad</th>
                  <th className="border border-border p-3 text-left">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-mono text-sm">__gads</td>
                  <td className="border border-border p-3">Google AdSense</td>
                  <td className="border border-border p-3">Mostrar anuncios relevantes</td>
                  <td className="border border-border p-3">13 meses</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-mono text-sm">__gpi</td>
                  <td className="border border-border p-3">Google AdSense</td>
                  <td className="border border-border p-3">Recopilar información de anuncios</td>
                  <td className="border border-border p-3">13 meses</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-mono text-sm">DSID</td>
                  <td className="border border-border p-3">Google DoubleClick</td>
                  <td className="border border-border p-3">Identificar navegador para anuncios</td>
                  <td className="border border-border p-3">2 semanas</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-mono text-sm">IDE</td>
                  <td className="border border-border p-3">Google DoubleClick</td>
                  <td className="border border-border p-3">Publicidad comportamental</td>
                  <td className="border border-border p-3">13 meses</td>
                </tr>
              </tbody>
            </table>

            <p className="text-muted-foreground leading-relaxed">
              Para más información sobre cómo Google gestiona la privacidad y las cookies, consulta:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2 mt-2">
              <li>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline"
                >
                  Política de Privacidad de Google
                </a>
              </li>
              <li>
                <a 
                  href="https://policies.google.com/technologies/ads" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline"
                >
                  Política de Publicidad de Google
                </a>
              </li>
              <li>
                <a 
                  href="https://policies.google.com/technologies/partner-sites" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline"
                >
                  Cómo usa Google las cookies en sitios de socios
                </a>
              </li>
            </ul>
          </section>

          {/* Sección 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Ejercicio de Derechos</h2>
            <p className="text-muted-foreground leading-relaxed">
              De acuerdo con la normativa vigente, los usuarios pueden ejercer derechos de acceso, rectificación o supresión escribiendo a <a href="mailto:info.devfreelance2026@gmail.com" className="text-accent hover:underline">info.devfreelance2026@gmail.com</a>.
            </p>
          </section>

          {/* Nota final */}
          <div className="mt-12 p-6 bg-accent/5 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Última actualización:</strong> 6 de enero de 2026
            </p>
            <p className="text-sm text-muted-foreground">
              Para más información sobre protección de datos, consulta la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Agencia Española de Protección de Datos</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PoliticaPrivacidad;
