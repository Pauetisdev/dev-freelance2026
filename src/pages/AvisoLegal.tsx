import { Layout } from '@/components/Layout';
import { Helmet } from 'react-helmet-async';

const AvisoLegal = () => {
  return (
    <Layout>
      <Helmet>
        <title>Aviso Legal - DevFreelance España</title>
        <meta 
          name="description" 
          content="Aviso legal de DevFreelance España. Información sobre propiedad intelectual, responsabilidad y datos de contacto." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Sección 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Información Identificativa</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En cumplimiento con el deber de información recogido en artículo 10 de la <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE)</strong>, se facilitan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Titular de la web:</strong> TechFiscal Solutions</li>
              <li><strong>Ubicación:</strong> Barcelona, España</li>
              <li><strong>Contacto:</strong> info.devfreelance2026@gmail.com</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              El código fuente, los diseños gráficos, las imágenes, el software y los textos que se recogen en este sitio web están protegidos por la <strong>legislación española sobre los derechos de propiedad intelectual e industrial</strong> a favor del titular. No se permite la reproducción total o parcial de esta web sin permiso previo por escrito.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Exclusión de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Este sitio web tiene un carácter <strong>meramente divulgativo y educativo</strong>. El titular no se hace responsable de las decisiones tomadas por los usuarios basadas en la información aquí publicada. Se recomienda siempre <strong>consultar con un asesor fiscal colegiado</strong> antes de realizar cualquier trámite oficial.
            </p>
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

export default AvisoLegal;
