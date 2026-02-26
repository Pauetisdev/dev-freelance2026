import { Layout } from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { BackButton } from '@/components/BackButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Rocket, Calculator, FileText, Wallet, TrendingUp } from 'lucide-react';

const FAQ = () => {
  return (
    <Layout>
      <Helmet>
        <title>Preguntas Frecuentes - DevFreelance España</title>
        <meta 
          name="description" 
          content="Resuelve todas tus dudas sobre fiscalidad, autónomos, tramos 2026, gastos deducibles, IVA, IRPF y más. Guía completa de preguntas frecuentes para freelancers en España." 
        />
        <link rel="canonical" href="https://devfreelance.es/faq" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackButton to="/" />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas rápidas a las dudas más comunes sobre fiscalidad y gestión de autónomos en España. 
            Información actualizada para 2026.
          </p>
        </div>

        {/* Categoría 1: Alta y Primeros Pasos */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Rocket className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold">Alta y Primeros Pasos</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cuándo debo darme de alta como autónomo?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Debes darte de alta <strong>antes de iniciar tu actividad económica</strong>. Según el artículo 16 del Real Decreto 84/1996, 
                  el plazo es de <strong>60 días naturales</strong> desde el inicio de la actividad para presentar el modelo 036/037 ante la Agencia Tributaria.
                </p>
                <p className="mb-3">
                  Sin embargo, <strong>la cotización a la Seguridad Social debe ser desde el primer día</strong> de actividad. La Inspección de Trabajo 
                  puede sancionar con multas de 3.000€ a 10.000€ por alta tardía según la Ley sobre Infracciones y Sanciones en el Orden Social (LISOS).
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded">
                  <strong>Consejo práctico:</strong> Date de alta antes de emitir tu primera factura o recibir tu primer pago, 
                  aunque sea un proyecto pequeño. Es mejor prevenir que pagar sanciones.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Qué epígrafe IAE debo elegir como desarrollador?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Los epígrafes más utilizados por desarrolladores y profesionales IT en España son:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>844.1 - Servicios de programación</strong> (el más común)</li>
                  <li><strong>844.2 - Análisis, diseño y programación de sistemas</strong></li>
                  <li><strong>844.4 - Gestión de bases de datos</strong></li>
                  <li><strong>951 - Servicios técnicos profesionales</strong> (consultoría general)</li>
                </ul>
                <p className="mb-3">
                  Para desarrollo web, apps móviles, backend, frontend o fullstack, el epígrafe <strong>844.1</strong> es el más adecuado. 
                  Puedes darte de alta en varios epígrafes sin coste adicional si ofreces servicios diversos.
                </p>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded">
                  <strong>Importante:</strong> El epígrafe IAE no determina qué puedes facturar, es solo clasificativo. 
                  La AEAT lo usa para estadísticas, no para limitarte.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Puedo facturar mientras tengo un trabajo por cuenta ajena?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  <strong>Sí, es completamente legal</strong> compatibilizar un trabajo por cuenta ajena con la actividad de autónomo. 
                  No necesitas permiso de tu empresa actual, aunque es recomendable revisar tu contrato por si hay cláusulas de exclusividad.
                </p>
                <p className="mb-3">
                  Esto se conoce como <strong>pluriactividad</strong> y tiene implicaciones importantes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Pagarás cotización completa en ambos regímenes (empresa + autónomo)</li>
                  <li>Si superas 14.764,80€ anuales de cotización total (2026), puedes solicitar <strong>devolución del 50%</strong> del exceso</li>
                  <li>Presentas solicitud en enero del año siguiente mediante el modelo oficial de la TGSS</li>
                </ul>
                <p className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-500 p-3 rounded">
                  <strong>Ventaja:</strong> Puedes probar tu negocio freelance sin renunciar a la estabilidad de tu empleo actual.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cuánto cuesta hacerse autónomo en 2026?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Los costes principales de ser autónomo en 2026 incluyen:
                </p>
                <div className="space-y-3 mb-3">
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Cuota de autónomo (obligatoria)</h4>
                    <p className="text-sm">
                      Desde <strong>225€/mes</strong> (tramo más bajo) hasta <strong>530€/mes</strong> (tramo más alto). 
                      Depende de tus ingresos netos anuales. Con la tarifa plana: <strong>80€/mes los primeros 12 meses</strong>.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">2. IRPF (trimestral)</h4>
                    <p className="text-sm">
                      <strong>15% del beneficio neto</strong> (ingresos - gastos) en los pagos fraccionados trimestrales (modelo 130). 
                      En la declaración anual puede variar del 19% al 47% según tramos.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Gestoría (opcional pero recomendada)</h4>
                    <p className="text-sm">
                      Entre <strong>40€ y 80€/mes</strong> según servicios (modelo 130, 303, facturación, nóminas...). 
                      Puedes gestionarlo tú mismo si tienes conocimientos.
                    </p>
                  </div>
                </div>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Ejemplo:</strong> Si facturas 30.000€/año con 5.000€ de gastos, pagarás aproximadamente 
                  4.800€ de cuota anual + 3.750€ de IRPF = <strong>8.550€ en impuestos/cotizaciones</strong> (28,5% de tu facturación).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Qué es la tarifa plana de autónomos y quién puede pedirla?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  La <strong>tarifa plana</strong> es un descuento en la cuota de autónomos para nuevas altas. En 2026, el esquema es:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Meses 1-12:</strong> 80€/mes (reducción del 65%)</li>
                  <li><strong>Meses 13-24:</strong> 80€/mes si ingresos &lt; SMI (1.134€/mes en 2026)</li>
                  <li>A partir de mes 13 con ingresos &gt; SMI: pasa al tramo que te corresponda según ingresos</li>
                </ul>
                <p className="mb-3">
                  <strong>Requisitos para solicitarla:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>No haber estado de alta como autónomo en los últimos 2 años (24 meses)</li>
                  <li>No haber aplicado tarifa plana previamente en los últimos 3 años</li>
                  <li>Solicitar en el momento del alta (modelo TA0521)</li>
                </ul>
                <p className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-3 rounded">
                  <strong>Ahorro primer año:</strong> Aproximadamente 1.740€ frente a la cuota mínima estándar (225€/mes).
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Categoría 2: Tramos y Cotización 2026 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">Tramos y Cotización 2026</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-6" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cómo funcionan los nuevos tramos de cotización por ingresos reales?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Desde 2023 el sistema de cotización cambió completamente con el RD-ley 13/2022. Ya no eliges libremente tu base de cotización, 
                  sino que pagas según tus ingresos netos reales. El sistema establece 15 tramos que van desde los 225 euros mensuales para rendimientos 
                  inferiores a 670 euros al mes, hasta 530 euros mensuales para quienes superen los 6.000 euros mensuales de rendimiento neto.
                </p>
                <p className="mb-3">
                  El funcionamiento es sencillo: al inicio del año o al darte de alta, comunicas tu previsión de ingresos netos y cotizas según el tramo 
                  correspondiente. Puedes modificar esta base hasta 6 veces al año si tus ingresos varían significativamente. Al finalizar el ejercicio, 
                  cuando presentes la declaración de la renta en 2027, la Seguridad Social regularizará tu cotización según tus ingresos reales de 2026.
                </p>
                <div className="overflow-x-auto mb-3">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead className="bg-slate-100 dark:bg-slate-800">
                      <tr>
                        <th className="p-3 text-left">Rendimiento neto mensual</th>
                        <th className="p-3 text-right">Cuota mensual 2026</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="p-3">Hasta 670€</td><td className="p-3 text-right font-semibold">225€</td></tr>
                      <tr className="bg-slate-50 dark:bg-slate-900/20"><td className="p-3">670€ - 1.166€</td><td className="p-3 text-right font-semibold">255€</td></tr>
                      <tr><td className="p-3">1.166€ - 1.500€</td><td className="p-3 text-right font-semibold">295€</td></tr>
                      <tr className="bg-slate-50 dark:bg-slate-900/20"><td className="p-3">1.500€ - 2.030€</td><td className="p-3 text-right font-semibold">360€</td></tr>
                      <tr><td className="p-3">2.030€ - 3.190€</td><td className="p-3 text-right font-semibold">420€</td></tr>
                      <tr className="bg-slate-50 dark:bg-slate-900/20"><td className="p-3">3.190€ - 6.000€</td><td className="p-3 text-right font-semibold">480€</td></tr>
                      <tr><td className="p-3">Más de 6.000€</td><td className="p-3 text-right font-semibold">530€</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Ejemplo práctico:</strong> Un desarrollador con facturación anual de 40.000 euros y 15.000 euros de gastos deducibles 
                  tendrá un rendimiento neto de 25.000 euros anuales, equivalente a 2.083 euros mensuales, lo que implica una cuota de 360 euros al mes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Qué pasa si mis ingresos varían mucho cada mes?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  El sistema está diseñado pensando en rendimientos anuales, no mensuales. Esto significa que aunque factures 5.000 euros un mes 
                  y 500 el siguiente, lo que cuenta es tu promedio anual. Al inicio comunicas una previsión y eliges tu tramo, pero tienes flexibilidad 
                  para ajustarlo hasta seis veces durante el año si detectas que tus ingresos van a diferir significativamente de lo previsto.
                </p>
                <p className="mb-3">
                  La regularización llega en 2027 cuando Hacienda y la Seguridad Social cruzan datos de tu declaración de la renta 2026. Si cotizaste 
                  por un tramo inferior al que te correspondía, te reclamarán la diferencia más un interés del 3 por ciento anual. Si cotizaste de más, 
                  te devolverán el exceso pero sin compensar intereses. Por eso es importante hacer un seguimiento trimestral de tus ingresos reales.
                </p>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded text-sm">
                  <strong>Estrategia recomendada:</strong> Revisa tu situación cada trimestre al presentar el modelo 130 de IRPF. Si detectas 
                  desviaciones superiores al 20 por ciento respecto a tu previsión inicial, solicita el cambio de tramo para evitar recargos posteriores.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cómo se calcula exactamente el rendimiento neto para los tramos?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  El rendimiento neto que determina tu tramo se obtiene restando a tus ingresos anuales todos los gastos deducibles: cuota de autónomo, 
                  alquiler del local u oficina, suministros proporcionados al uso profesional, equipos informáticos, software, formación relacionada con 
                  tu actividad, servicios de gestoría y asesoría, entre otros. A este resultado se le aplica automáticamente una reducción del 7 por ciento 
                  en concepto de gastos de difícil justificación.
                </p>
                <p className="mb-3">
                  Una vez obtenida la cifra anual tras aplicar esa reducción, se divide entre doce para obtener el rendimiento mensualcotización. 
                  Ese valor mensual es el que encuadras en la tabla de tramos. Por ejemplo, si tras restar gastos y aplicar el 7 por ciento llegas a 
                  24.000 euros anuales, divides entre 12 y obtienes 2.000 euros mensuales, lo que te situaría en el tramo de 360 euros de cuota.
                </p>
                <p className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg mb-3">
                  <p className="font-mono text-sm mb-2">
                    <strong>Fórmula:</strong><br/>
                    Rendimiento Neto Anual = (Ingresos - Gastos) × 0.93<br/>
                    Rendimiento Mensual = Rendimiento Neto Anual / 12
                  </p>
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Optimización fiscal:</strong> Maximizar tus gastos deducibles legítimos no solo reduce tu IRPF, también baja tu tramo 
                  de cotización y por tanto pagas menos cuota mensual a la Seguridad Social.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Conviene cotizar voluntariamente por una base superior?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Sí tienes la posibilidad de elegir voluntariamente cotizar por un tramo superior al que te corresponde según tus ingresos. 
                  Esta decisión puede tener sentido si estás cerca de la edad de jubilación y quieres mejorar tu pensión futura, o si prevés necesitar 
                  prestaciones por baja médica y deseas cobrar más durante esos periodos. También mejora la cuantía del paro de autónomos si algún día 
                  cesas tu actividad.
                </p>
                <p className="mb-3">
                  Sin embargo, para freelancers jóvenes o en fase de crecimiento suele ser más rentable cotizar por el tramo que realmente te corresponde 
                  y destinar la diferencia económica a inversiones o al desarrollo de tu negocio. No olbides que si cotizas voluntariamente por encima 
                  no habrá regularización ni devolución posterior, ese dinero no se recupera. La decisión debe basarse en tu situación personal, 
                  edad y objetivos a largo plazo.
                </p>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded text-sm">
                  <strong>Análisis coste-beneficio:</strong> Si tienes menos de 40 años y cotizas 100 euros más al mes de lo necesario, 
                  son 1.200 euros anuales que podrías invertir o reinvertir en tu negocio. A un 5 por ciento de rentabilidad anual durante 25 años, 
                  eso supone una diferencia de más de 60.000 euros.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cómo y cuándo puedo cambiar mi base de cotización?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  El cambio de base se realiza de forma telemática a través de Import@SS, la sede electrónica de la Seguridad Social, utilizando 
                  certificado digital o sistema Cl@ve. El proceso es inmediato: accedes al apartado de modificación de datos, seleccionas el nuevo tramo 
                  según tu previsión de ingresos actualizada, confirmas y el cambio surte efecto desde el día primero del mes siguiente a la solicitud.
                </p>
                <p className="mb-3">
                  Puedes realizar este cambio hasta seis veces al año sin penalización ni necesidad de justificación previa. Lo importante es que cuando 
                  lo solicites lo hagas con datos realistas, porque la regularización final se hará de todas formas contra tus ingresos reales declarados 
                  en la renta. La recomendación profesional es hacerlo coincidir con la presentación del modelo 130 trimestral de IRPF, momento en el que 
                  tienes claros tus ingresos y gastos acumulados del año.
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Planificación óptima:</strong> Revisa tu facturación cada trimestre. Si en marzo llevas facturados 15.000 euros con tendencia 
                  a cerrar el año en 60.000, pero cotizas en el tramo bajo, cambia ya tu base para evitar recargos del 3 por ciento en la regularización.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Categoría 3: Gastos Deducibles */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Wallet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold">Gastos Deducibles</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-11" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Qué gastos puedo deducir como desarrollador freelance?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Para que un gasto sea deducible debe cumplir <strong>3 requisitos</strong> según la Ley del IRPF:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Estar vinculado a tu actividad económica</li>
                  <li>Estar correctamente justificado (factura a tu nombre con NIF)</li>
                  <li>Estar registrado contablemente</li>
                </ul>
                <p className="mb-3 font-semibold">Gastos 100% deducibles para developers:</p>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-3 rounded text-sm">
                    <h4 className="font-semibold mb-2">💻 Hardware y Software</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Portátiles, monitores, teclados</li>
                      <li>• Licencias GitHub, JetBrains, Adobe</li>
                      <li>• Servidores cloud (AWS, Azure, Vercel)</li>
                      <li>• Dominios y hosting</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-3 rounded text-sm">
                    <h4 className="font-semibold mb-2">📚 Formación</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Cursos online (Udemy, Platzi, etc)</li>
                      <li>• Libros técnicos</li>
                      <li>• Conferencias y eventos</li>
                      <li>• Certificaciones profesionales</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-3 rounded text-sm">
                    <h4 className="font-semibold mb-2">🏢 Oficina</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Alquiler coworking (100%)</li>
                      <li>• % Vivienda habitual (30% de 7m²)</li>
                      <li>• Luz, agua, internet (% uso)</li>
                      <li>• Mobiliario de oficina</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-3 rounded text-sm">
                    <h4 className="font-semibold mb-2">📱 Comunicación</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Móvil y línea telefónica</li>
                      <li>• Internet fibra</li>
                      <li>• Correo corporativo</li>
                      <li>• Videoconferencia (Zoom, etc)</li>
                    </ul>
                  </div>
                </div>
                <p className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-500 p-3 rounded text-sm">
                  <strong>Regla de oro:</strong> Si lo usas para trabajar y tienes factura → es deducible.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-12" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Puedo deducir mi móvil y mi ordenador personal?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  <strong>Sí, pero con matices importantes:</strong>
                </p>
                <div className="space-y-3 mb-3">
                  <div className="border border-border p-3 rounded">
                    <h4 className="font-semibold text-sm mb-2">Ordenador</h4>
                    <p className="text-sm mb-2">
                      Puedes deducir el <strong>100% del coste</strong> si es tu herramienta principal de trabajo. 
                      Se amortiza según tablas oficiales:
                    </p>
                    <ul className="text-xs space-y-1 pl-4">
                      <li>• <strong>Equipos informáticos:</strong> 25% anual (4 años)</li>
                      <li>• Ejemplo: MacBook de 2.000€ → deduces 500€/año durante 4 años</li>
                      <li>• O amortización acelerada: deducir todo el primer año si es &lt; 300€</li>
                    </ul>
                  </div>

                  <div className="border border-border p-3 rounded">
                    <h4 className="font-semibold text-sm mb-2">Móvil y Línea</h4>
                    <p className="text-sm mb-2">
                      <strong>Deducible 100%</strong> si es exclusivo para trabajo. Si también lo usas personalmente:
                    </p>
                    <ul className="text-xs space-y-1 pl-4">
                      <li>• Hacienda <strong>acepta un 50%</strong> de deducción sin más justificación</li>
                      <li>• Si justificas mayor uso profesional (registro llamadas), puedes deducir más</li>
                      <li>• Línea fija 100% si es solo para clientes</li>
                    </ul>
                  </div>
                </div>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded text-sm">
                  <strong>Importante:</strong> Guarda las facturas a tu nombre con NIF. Si la tiznea el móvil a nombre personal, 
                  Hacienda puede cuestionar la deducción.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-13" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cómo deduzco gastos de mi vivienda si trabajo desde casa?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Trabajar desde casa te permite deducir <strong>suministros y parte de la vivienda</strong>. 
                  Las normas 2026 son claras:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold mb-2">Vivienda en propiedad o alquiler</h4>
                  <p className="text-sm mb-2">
                    Puedes deducir el <strong>30% de los gastos</strong> correspondientes a los <strong>metros cuadrados 
                    destinados a la actividad</strong>, con un máximo de 7m²:
                  </p>
                  <ul className="text-sm space-y-1 pl-4 mb-2">
                    <li>• Alquiler, intereses hipoteca, IBI, comunidad</li>
                    <li>• Seguro de hogar (proporción)</li>
                  </ul>
                  <p className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
                    <strong>Ejemplo:</strong> Piso de 80m², usas 10m² para oficina. Alquiler 900€/mes.<br/>
                    Deducible: (7m² / 80m²) × 900€ × 30% = <strong>23,63€/mes</strong>
                  </p>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold mb-2">Suministros (luz, agua, gas, internet)</h4>
                  <p className="text-sm mb-2">
                    Deducible según <strong>proporción de metros</strong> o <strong>% uso profesional</strong>:
                  </p>
                  <ul className="text-sm space-y-1 pl-4">
                    <li>• <strong>Internet:</strong> 100% si lo usas principalmente para trabajar</li>
                    <li>• <strong>Luz:</strong> (m² oficina / m² total) × 30% × factura</li>
                    <li>• <strong>Agua, gas:</strong> igual que luz</li>
                  </ul>
                </div>

                <p className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-3 rounded text-sm">
                  <strong>⚠️ Atención:</strong> Si deduces gastos de vivienda habitual en propiedad, 
                  cuando la vendas puede haber implicaciones fiscales en plusvalía. Consulta con asesor.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-14" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Puedo deducir comidas con clientes?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Las <strong>comidas con clientes son deducibles</strong>, pero Hacienda es estricta con los requisitos:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Factura completa:</strong> Con tu nombre, NIF y detalle (no ticket simplificado)</li>
                  <li><strong>Relación cliente:</strong> Debe haber relación comercial demostrable (contrato, emails)</li>
                  <li><strong>Anotación:</strong> Apunta en la factura: "Comida reunión con [Cliente] - [Motivo]"</li>
                  <li><strong>Razonabilidad:</strong> Montos coherentes (no cenas de 200€ frecuentes)</li>
                </ul>
                <p className="mb-3">
                  <strong>Deducibilidad según tipo:</strong>
                </p>
                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-600 font-bold">✓</span>
                    <p><strong>100% deducible:</strong> Comidas con clientes fuera de tu localidad habitual</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-amber-600 font-bold">⚠</span>
                    <p><strong>Cuestionable:</strong> Comidas habituales en tu ciudad (max 26,67€/día general)</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 font-bold">✗</span>
                    <p><strong>NO deducible:</strong> Comidas solo tuyo o con familiares sin relación comercial</p>
                  </div>
                </div>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Consejo:</strong> Si tienes dudas, mejor deduce solo las más evidentes. 
                  Hacienda cruza datos con TPV del restaurante y puede pedirte justificaciones.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-15" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Los gastos de formación son deducibles al 100%?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  <strong>Sí, los gastos de formación son 100% deducibles</strong> si están relacionados con tu actividad profesional. 
                  Esto incluye:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="border border-border p-3 rounded">
                    <h4 className="font-semibold text-sm mb-2">Totalmente deducible</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Cursos online (Udemy, Coursera, Platzi)</li>
                      <li>• Certificaciones (AWS, Google Cloud)</li>
                      <li>• Libros técnicos</li>
                      <li>• Bootcamps de programación</li>
                      <li>• Conferencias (entrada + viaje + hotel)</li>
                      <li>• Suscripciones educativas (Frontend Masters)</li>
                    </ul>
                  </div>
                  <div className="border border-border p-3 rounded">
                    <h4 className="font-semibold text-sm mb-2">NO deducible</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Cursos de idiomas (salvo justificación)</li>
                      <li>• Másters no relacionados con IT</li>
                      <li>• Formación personal/hobby</li>
                      <li>• Gym o deporte (aunque "mejore productividad")</li>
                    </ul>
                  </div>
                </div>
                <p className="mb-3 text-sm">
                  <strong>Requisitos formales:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
                  <li>Factura a nombre del autónomo (NIF completo)</li>
                  <li>Descripción clara del curso/certificación</li>
                  <li>Relación evidente con tu actividad económica (web dev, cloud, etc.)</li>
                </ul>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Bonus:</strong> La formación no solo reduce tu base imponible (IRPF), 
                  también mejora tu perfil profesional y te permit facturar más. Win-win.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Categoría 4: IVA y Facturación */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30">
              <FileText className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold">IVA y Facturación</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-16" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Debo aplicar IVA cuando facturo a clientes de USA o UK?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  No debes aplicar IVA cuando facturas servicios digitales a empresas ubicadas fuera de la Unión Europea. Esto incluye Estados Unidos, 
                  Reino Unido tras el Brexit, Canadá, Australia, Suiza y cualquier otro país tercero. El fundamento legal se encuentra en el artículo 69.Uno.1º 
                  de la Ley 37/1992 del IVA, que establece la no sujeción de servicios prestados a destinatarios establecidos fuera de la comunidad.
                </p>
                <p className="mb-3">
                  Para aplicar correctamente esta exención necesitas cumplir varios requisitos: el destinatario debe ser un empresario o profesional, 
                  no un particular consumidor final, y debe utilizar el servicio para su actividad empresarial. Debes conservar pruebas documentales que 
                  acrediten la localización del cliente fuera de la UE, como el contrato, correos electrónicos comerciales o la propia factura con su dirección. 
                  En la factura incluye la mención "Operación no sujeta a IVA art. 69.Uno.1º Ley 37/1992" y declara estas operaciones en la casilla 61 del modelo 303.
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Ventaja competitiva:</strong> Tus servicios resultan un 21 por ciento más económicos que los de competidores europeos que deben aplicar 
                  IVA, lo que te posiciona mejor en mercados internacionales.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-17" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cómo facturo a empresas de la Unión Europea?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Las operaciones con empresas de otros países de la UE se rigen por el mecanismo de inversión del sujeto pasivo. Emites tu factura sin aplicar 
                  IVA español, es el cliente quien autoliquida el IVA en su país según el tipo vigente allí, que puede ser del 19 por ciento en Alemania, 
                  20 por ciento en Francia o Italia, o 21 por ciento en Países Bajos. Este sistema evita dobles imposiciones y simplifica el comercio intracomunitario.
                </p>
                <p className="mb-3">
                  Antes de emitir la factura debes estar inscrito en el Registro de Operadores Intracomunitarios, lo que se solicita marcando la casilla 582 
                  del modelo 036. Es obligatorio verificar que el número de identificación fiscal IVA del cliente, el VAT number, es válido en el sistema VIES 
                  europeo. Accedes a ec.europa.eu/taxation_customs/vies, introduces el código del país más el número, y si aparece como válido guardas una captura 
                  de pantalla con fecha visible. Esta captura es tu seguro frente a inspecciones futuras.
                </p>
                <p className="mb-3">
                  Posteriormente declaras estas operaciones en el modelo 349, que se presenta trimestralmente si facturas menos de 50.000 euros anuales a la UE, 
                  o mensualmente si superas esa cifra. La falta de presentación o errores en el VAT pueden derivar en que Hacienda te reclame el IVA español 
                  más recargos e intereses.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-18" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Qué debe incluir obligatoriamente una factura legal en España?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  El Real Decreto 1619/2012 establece los requisitos mínimos de facturación. Toda factura debe contener un número correlativo único por serie 
                  y ejercicio, la fecha de emisión y si difiere la fecha de operación, tus datos completos como emisor incluyendo nombre o razón social, 
                  NIF y dirección completa, y los mismos datos del destinatario. Debe incluir descripción detallada de los bienes entregados o servicios prestados, 
                  la base imponible, el tipo de IVA aplicado, la cuota resultante y el total de la factura.
                </p>
                <p className="mb-3">
                  La factura puede emitirse en papel o en formato electrónico, siendo este último cada vez más habitual. Si optas por la factura electrónica 
                  debe garantizarse su autenticidad, integridad y legibilidad mediante firma electrónica avanzada, intercambio electrónico de datos EDI o mediante 
                  el formato estructurado Factura-E. Las facturas deben conservarse durante cuatro años desde la fecha de emisión, que es el plazo de prescripción 
                  tributaria habitual. Durante ese periodo tanto Hacienda como otros organismos pueden solicitarlas en caso de inspección.
                </p>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded text-sm">
                  <strong>Sanciones por incumplimiento:</strong> La emisión de facturas sin numeración correlativa o con datos incompletos puede conllevar 
                  multa de 150 euros por cada factura. No emitir factura cuando es preceptivo supone multas del 1 al 2 por ciento de la cuota defraudada.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-19" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cuándo y cómo presento el modelo 303 de IVA?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  El modelo 303 es la autoliquidación trimestral del Impuesto sobre el Valor Añadido que deben presentar todos los autónomos que realizan 
                  actividades sujetas a IVA en territorio español. Se presenta dentro de los primeros veinte días naturales del mes siguiente al trimestre: 
                  hasta el 20 de abril para el primer trimestre, hasta el 20 de julio para el segundo, hasta el 20 de octubre para el tercero, y hasta el 30 de enero 
                  del año siguiente para el cuarto trimestre.
                </p>
                <p className="mb-3">
                  En este modelo declaras el IVA repercutido, es decir el que has cobrado a tus clientes españoles aplicando el 21 por ciento generalmente, 
                  y restas el IVA soportado, el que tú has pagado en tus gastos profesionales deducibles. Si el resultado es positivo ingresas la diferencia 
                  a Hacienda, si es negativo Hacienda te debe devolver ese importe, aunque en la práctica las devoluciones superiores a 1.000 euros suelen 
                  revisarse con más detalle y pueden tardar varios meses.
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Caso particular internacional:</strong> Si facturas exclusivamente a clientes extranjeros y no cobras IVA español, igualmente debes 
                  presentar el 303 declarando cero en IVA repercutido pero reclamando el IVA soportado de tus gastos en España, lo que resulta en devolución.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-20" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Puedo deducir el IVA de todos mis gastos profesionales?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Puedes deducir el IVA soportado en tus gastos siempre que cumplan dos requisitos esenciales: que el gasto esté vinculado directamente con tu 
                  actividad económica y que dispongas de factura completa con los requisitos legales. Esto incluye equipos informáticos, software, servicios cloud, 
                  mobiliario de oficina, suministros, formación profesional, asesoría y gestoría, entre otros. El IVA deducible se declara en el modelo 303 trimestral 
                  y reduce el importe a pagar o aumenta la devolución que solicitas.
                </p>
                <p className="mb-3">
                  No es deducible el IVA de gastos que Hacienda considera de difícil justificación o mixtos, como comidas y restauración salvo que sean con клиientes 
                  y estén justificadas, ni tampoco el de vehículos turismo excepto en casos muy específicos donde el coche sea el medio habitual de trabajo. 
                  Tampoco puedes deducir IVA si aplicas regímenes especiales como el recargo de equivalencia que es obligatorio para comerciantes minoristas, 
                  aunque como desarrollador esto no te afecta normalmente.
                </p>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded text-sm">
                  <strong>Documentación imprescindible:</strong> Conserva todas las facturas originales con tu NIF durante cuatro años. En caso de inspección, 
                  si no puedes justificar un IVA deducido tendrás que devolverlo con intereses del 3.75 por ciento anual más posibles sanciones.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Categoría 5: IRPF y Modelos */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Calculator className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold">IRPF y Modelos Fiscales</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-21" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Qué es el modelo 130 y cuándo debo presentarlo?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  El modelo 130 es el pago fraccionado trimestral del Impuesto sobre la Renta de las Personas Físicas. Su función principal es adelantar 
                  a Hacienda parte del impuesto que corresponderá abonar en la declaración anual, evitando así concentrar todo el pago en un único momento. 
                  Este mecanismo se aplica sobre el beneficio neto obtenido durante el ejercicio y funciona como un sistema de liquidación provisional que 
                  después se regulariza en la declaración de la Renta del año siguiente.
                </p>
                <p className="mb-3">
                  Están obligados a presentar el modelo 130 los autónomos que tributan en estimación directa, ya sea normal o simplificada, siempre que no hayan 
                  soportado retenciones de IRPF en al menos el setenta por ciento de sus ingresos. Esto significa que si la mayor parte de tu facturación proviene 
                  de empresas españolas que te aplican retención, podrías estar exento de presentar el 130. Sin embargo, la mayoría de desarrolladores web y 
                  freelancers digitales que trabajan con clientes internacionales, plataformas extranjeras o particulares deben presentarlo, porque en esos casos 
                  no se practica retención alguna en las facturas.
                </p>
                <p className="mb-3">
                  El cálculo del modelo 130 se realiza aplicando un quince por ciento sobre el beneficio neto acumulado del año hasta el trimestre que se declara, 
                  es decir sobre la diferencia entre ingresos y gastos deducibles. Se resta lo ya ingresado en trimestres anteriores para determinar el pago 
                  del periodo actual. Los plazos de presentación coinciden con los del modelo 303 de IVA: del uno al veinte de abril, julio y octubre, y del 
                  uno al treinta de enero del año siguiente para el cuarto trimestre.
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Aclaración importante:</strong> El modelo 130 no es un impuesto adicional sino un anticipo. Todo lo pagado mediante este modelo durante 
                  el año se descuenta automáticamente de la cuota resultante en tu declaración de la Renta del ejercicio siguiente.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-22" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Debo aplicar retención de IRPF cuando facturo a empresas españolas?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Sí, debes aplicar retención de IRPF cuando facturas a empresas, organismos públicos o profesionales que actúan como pagadores en territorio español. 
                  La retención general es del quince por ciento sobre la base imponible de tu factura, aunque existe una reducción temporal al siete por ciento durante 
                  los tres primeros años de actividad si cumples determinados requisitos de inicio de actividad. Esta retención no la pagas tú sino que la aplica el 
                  cliente deduciéndola del importe total que te abona, ingresándola posteriormente a Hacienda en tu nombre mediante sus propios modelos trimestrales.
                </p>
                <p className="mb-3">
                  En la práctica funciona así: si emites una factura de mil euros más IVA a una empresa española, en la factura debes indicar la base imponible de 
                  mil euros, el IVA de doscientos diez euros veintiún por ciento, la retención de IRPF de ciento cincuenta euros quince por ciento, y el total a 
                  cobrar resulta en mil sesenta euros. El cliente ingresa los ciento cincuenta euros retenidos a Hacienda. Posteriormente, cuando presentes tu 
                  declaración de la Renta, esa retención que ya se ingresó a tu nombre se descuenta de la cuota a pagar, funcionando exactamente igual que las 
                  retenciones que aparecen en una nómina de trabajador por cuenta ajena.
                </p>
                <p className="mb-3">
                  No debes aplicar retención cuando facturas a particulares consumidores finales, a empresas extranjeras fuera de España, o en operaciones no sujetas 
                  como la venta de bienes. La obligación de retener recae siempre sobre el pagador que es empresa o profesional, nunca sobre consumidores privados.
                </p>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded text-sm">
                  <strong>Errores frecuentes:</strong> Olvidar aplicar la retención cuando es obligatoria puede generar problemas tanto para ti como para el cliente. 
                  Si el cliente es empresa y no le aplicas retención debiendo hacerlo, pueden reclamarte después una factura rectificativa.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-23" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Qué diferencia hay entre estimación directa simplificada y normal?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Las modalidades de estimación directa determinan cómo calculas el beneficio sobre el que tributas en IRPF. La estimación directa simplificada 
                  permite calcular el rendimiento neto restando de los ingresos los gastos efectivamente realizados más un cinco por ciento adicional en concepto 
                  de gastos de difícil justificación, con un límite de dos mil euros anuales. Pueden acogerse a ella autónomos cuyo volumen de facturación no supere 
                  los seiscientos mil euros anuales en actividades económicas ni los ciento cincuenta mil en actividades agrícolas ganaderas o forestales.
                </p>
                <p className="mb-3">
                  La estimación directa normal es obligatoria cuando se superan esos límites de facturación o cuando se renuncia expresamente a la simplificada. 
                  En esta modalidad no se aplica el cinco por ciento de gastos adicionales y las obligaciones contables son algo más exigentes, requiriéndose llevar 
                  libros registro de ventas e ingresos, de compras y gastos, y de bienes de inversión. La simplificada solo exige libro registro de ingresos, de gastos, 
                  de bienes de inversión y de provisiones de fondos y suplidos. En la práctica, la mayoría de freelancers y consultores digitales con facturación 
                  inferior a seiscientos mil euros se mantienen en simplificada por su mayor sencillez administrativa.
                </p>
                <p className="mb-3">
                  Ambos regímenes permiten deducir exactamente los mismos gastos, las diferencias radican solo en el porcentaje adicional del cinco por ciento en 
                  simplificada y en la complejidad de las obligaciones contables. La elección o renuncia se comunica a Hacienda mediante declaración censal en el 
                  modelo 036 o 037, y los cambios deben realizarse durante el mes de diciembre del año anterior o en los primeros días de enero según el calendario 
                  tributario vigente.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-24" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cómo funciona la declaración de la Renta siendo autónomo?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  La declaración de la Renta o modelo 100 es el documento anual donde consolidas todos tus ingresos y gastos del ejercicio anterior para determinar 
                  la cuota definitiva del IRPF que debes pagar o que te deben devolver. Se presenta entre los meses de abril y junio del año siguiente al ejercicio 
                  fiscal. Si eres autónomo, declaras tus rendimientos de actividades económicas en el apartado correspondiente, donde incluyes los ingresos totales 
                  facturados durante el año, restas los gastos deducibles, y obtienes el rendimiento neto que se suma al resto de rentas que puedas tener como 
                  rendimientos del capital, ganancias patrimoniales u otras.
                </p>
                <p className="mb-3">
                  El borrador de la declaración que facilita Hacienda no incluye automáticamente tus datos de autónomo. Debes incorporar manualmente tus ingresos 
                  y gastos profesionales, las cuotas de autónomos pagadas que son deducibles, y comprobar que aparecen correctamente reflejados los pagos fraccionados 
                  del modelo 130 realizados durante el año y las retenciones practicadas por clientes españoles si las hubo. La cuota íntegra se calcula aplicando 
                  la escala progresiva del IRPF que va desde el diecinueve hasta el cuarenta y siete por ciento sobre la base liquidable general. De esa cuota se restan 
                  las deducciones aplicables, los pagos fraccionados del 130, las retenciones soportadas, y el resultado final puede ser a ingresar o a devolver.
                </p>
                <p className="mb-3">
                  Es fundamental conservar durante cuatro años toda la documentación justificativa: facturas emitidas, facturas de gastos, justificantes de pagos del 
                  modelo 130, certificados de retenciones, y extractos bancarios. Hacienda puede iniciar procedimientos de comprobación limitada o inspección donde 
                  solicite esta documentación, y la falta de justificación de gastos declarados puede llevar a regularizaciones con liquidaciones complementarias, 
                  intereses  de demora y posibles sanciones.
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Recomendación profesional:</strong> Si es tu primera declaración como autónomo o tus ingresos superan los treinta mil euros anuales, 
                  considera contratar a un asesor fiscal. El coste de la gestoría suele oscilar entre cien y trescientos euros por la declaración, y puede ahorrarte 
                  errores costosos en deducciones o en la imputación de gastos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-25" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Puedo deducir gastos personales en la declaración de la Renta?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                <p className="mb-3">
                  Los gastos deducibles en la actividad económica son aquellos directamente relacionados con la obtención de ingresos profesionales: equipamiento 
                  informático, software, servicios cloud, alquiler de oficina, suministros, formación, asesoría fiscal y contable, entre otros. Estos gastos reducen 
                  el rendimiento neto de tu actividad y por tanto la base imponible sobre la que tributas. Sin embargo, gastos de naturaleza personal o familiar 
                  no vinculados a la actividad no son deducibles como gasto profesional en el apartado de actividades económicas.
                </p>
                <p className="mb-3">
                  Existen determinadas deducciones en la cuota del IRPF que sí se aplican sobre circunstancias personales o familiares, y están disponibles tanto 
                  para autónomos como para asalariados. Entre ellas destacan las deducciones por vivienda habitual adquirida antes de 2013, por maternidad, por 
                  familia numerosa, por personas con discapacidad a cargo, por donativos a ONGs o por inversión en empresas de nueva creación. Estas deducciones 
                  se aplican directamente sobre la cuota íntegra una vez calculada, reduciendo el importe final a pagar, pero no afectan al rendimiento neto de 
                  tu actividad económica.
                </p>
                <p className="mb-3">
                  Además, al margen de gastos deducibles de la actividad, la normativa del IRPF contempla reducciones en la base imponible general aplicables 
                  a todos los contribuyentes como las aportaciones a planes de pensiones privados con un límite anual de mil quinientos euros, las aportaciones 
                  a patrimonios protegidos de personas con discapacidad, o las pensiones compensatorias al cónyuge. Estas reducciones disminuyen la base sobre la 
                  que se aplican los tipos impositivos del IRPF.
                </p>
                <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded text-sm">
                  <strong>Importante diferenciar:</strong> Gastos deducibles de la actividad reducen el beneficio empresarial. Deducciones y reducciones personales 
                  operan sobre la base imponible o cuota final pero no están vinculadas a tu facturación como autónomo. No confundas ambos conceptos al preparar 
                  tu declaración.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Final */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">¿No encuentras tu respuesta?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explora nuestros artículos detallados en el blog o usa la calculadora para estimar tu neto como freelance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/blog" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              Ver todos los artículos
            </a>
            <a href="/calculadora" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
              Calcular mi neto
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
