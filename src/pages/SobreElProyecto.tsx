import { Layout } from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Heart } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { BackButton } from '@/components/BackButton';

const SobreElProyecto = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sobre el Proyecto - DevFreelance España</title>
        <meta 
          name="description" 
          content="Proyecto divulgativo creado para ayudar a desarrolladores autónomos a entender la fiscalidad en España. Financiado por publicidad, contenido gratuito basado en fuentes oficiales." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <BackButton to="/" />
        <h1 className="text-4xl font-bold mb-8">Sobre el Proyecto</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Sección del Autor */}
          <section className="mb-8 border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 flex-shrink-0">
                <AvatarFallback className="text-white text-xl font-semibold bg-transparent">
                  DF
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-1">Senior Tech Strategist</h2>
                <p className="text-muted-foreground text-sm mb-2">
                  Plataforma dedicada a la divulgación técnica sobre fiscalidad y gestión eficiente para autónomos del sector IT. Nuestro enfoque combina la ingeniería de software con el análisis de la normativa fiscal vigente para ofrecer herramientas y recursos que faciliten la transición al mundo freelance.
                </p>
                <div className="flex flex-col gap-1.5">
                  <a 
                    href="mailto:info.devfreelance2026@gmail.com"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <span>✉️</span>
                    info.devfreelance2026@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">¿Qué es DevFreelance?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DevFreelance es un <strong>proyecto personal de divulgación técnica</strong> creado con el objetivo de 
              aportar claridad sobre la fiscalidad y gestión de autónomos en España, especialmente orientado 
              al sector tecnológico y de desarrollo de software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta web nace de mi experiencia personal navegando el complejo sistema fiscal español como freelance, 
              y tiene como misión ayudar a otros profesionales del sector tech a entender mejor sus obligaciones 
              tributarias, deducciones y trámites administrativos de forma <strong>completamente gratuita</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Para cubrir los costes de infraestructura y tiempo de desarrollo, el proyecto se financia mediante 
              <strong> publicidad contextual de Google AdSense</strong>. Esto me permite mantener todo el contenido 
              (blog, calculadora, roadmap) accesible sin muros de pago, suscripciones premium ni venta de servicios, 
              preservando la independencia editorial del proyecto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              Misión y Valores del Proyecto
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>100% Educativo y Divulgativo:</strong> Toda la información se presenta de forma clara y accesible, 
                  sin jerga innecesaria. El objetivo es empoderar a los desarrolladores con conocimiento fiscal práctico.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Financiación Transparente y Acceso Gratuito:</strong> Este proyecto se financia mediante publicidad 
                  contextual (Google AdSense), lo que permite ofrecer todo el contenido de forma gratuita sin cobrar suscripciones, 
                  sin vender servicios de asesoría fiscal ni actuar como intermediario con gestorías. Esta independencia económica 
                  garantiza objetividad editorial y alineación total con los intereses de la comunidad tech.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Basado en Fuentes Oficiales Verificables:</strong> Todos los artículos incluyen referencias directas a 
                  BOE, AEAT, Seguridad Social y normativa oficial. Puedes verificar cada dato por tu cuenta.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Actualizado a 2026:</strong> Información al día con la normativa más reciente, 
                  incluyendo tramos de cotización por ingresos reales, límites de deducción actualizados y cambios fiscales vigentes.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">¿Para quién es este proyecto?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Principalmente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Desarrolladores web, móvil y software que quieren trabajar como freelance</li>
              <li>Programadores que ya son autónomos y buscan optimizar su fiscalidad</li>
              <li>Profesionales tech considerando el salto de empleado a autónomo</li>
              <li>Cualquier persona interesada en entender el sistema fiscal español</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contenido Disponible</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">📚 Blog</h3>
                <p className="text-sm text-muted-foreground">
                  Más de 27 artículos extensos y actualizados sobre IVA internacional, gastos deducibles, 
                  amortizaciones, criptomonedas, factura electrónica, Ley de Startups, pluriactividad, 
                  nómada digital y más temas clave para freelancers.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">❓ FAQ</h3>
                <p className="text-sm text-muted-foreground">
                  Sección de preguntas frecuentes con 25 respuestas detalladas sobre alta de autónomo, 
                  tramos de cotización, gastos deducibles, IVA, facturación, IRPF y modelos fiscales.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">🧮 Calculadora</h3>
                <p className="text-sm text-muted-foreground">
                  Herramienta interactiva para calcular tu cuota de autónomo según el sistema de tramos 
                  por rendimientos reales de 2026 y estimar tu neto mensual.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">🗺️ Roadmap</h3>
                <p className="text-sm text-muted-foreground">
                  Ruta de aprendizaje organizada por niveles para acompañarte desde el alta 
                  hasta la optimización fiscal avanzada con recursos específicos.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">📞 Contacto</h3>
                <p className="text-sm text-muted-foreground">
                  Formulario para enviar feedback, reportar errores o solicitar nuevos temas. 
                  Toda sugerencia constructiva es bienvenida.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">⚖️ Páginas Legales</h3>
                <p className="text-sm text-muted-foreground">
                  Aviso Legal, Política de Privacidad y Cookies, cumpliendo con RGPD y normativa vigente 
                  sobre protección de datos y transparencia.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/50 border border-border rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>{' '}
              Importante: Disclaimer Profesional
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>DevFreelance es un proyecto divulgativo con fines exclusivamente educativos.</strong> 
              La información publicada se basa en normativa oficial (BOE, AEAT, Seguridad Social) y se actualiza 
              regularmente, pero <strong>NO SUSTITUYE el asesoramiento profesional </strong> 
              de un asesor fiscal colegiado, gestor administrativo o abogado tributarista.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada situación fiscal es única y depende de múltiples variables personales (ingresos, gastos, estructura familiar, 
              deducciones aplicables, etc.). <strong>Siempre recomendamos consultar con un profesional cualificado</strong> 
              antes de tomar decisiones fiscales importantes o realizar trámites ante Hacienda o la Seguridad Social.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default SobreElProyecto;
