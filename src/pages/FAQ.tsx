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
                  El proceso de alta implica dos trámites principales: el alta censal en Hacienda mediante el modelo 036 declarando tu actividad y epígrafe IAE, 
                  y el alta en el Régimen Especial de Trabajadores Autónomos RETA de la Seguridad Social mediante el modelo TA0521 donde eliges tu base de cotización.
                </p>
                <p className="mb-3">
                  Ambos trámites pueden realizarse telemáticamente con certificado digital o Cl@ve, y el alta es efectiva desde el día que tú indiques como 
                  inicio de actividad. Si solicitas la tarifa plana debes hacerlo en este mismo momento del alta, no es posible solicitarla posteriormente.
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
                  Puedes darte de alta en varios epígrafes sin coste adicional si ofreces servicios diversos. La elección del epígrafe se realiza en el 
                  modelo 036 o 037 en el momento del alta, y puedes modificarlo posteriormente si cambias o amplías tu actividad sin coste ni penalización.
                </p>
                <p className="mb-3">
                  Aunque los epígrafes 844 están exentos de pago del Impuesto de Actividades Económicas IAE para empresas con facturación inferior a un millón 
                  de euros, lo cual incluye a prácticamente todos los autónomos, es importante elegir correctamente porque algunas ayudas o subvenciones públicas 
                  filtran beneficiarios por epígrafes específicos.
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
                  No necesitas permiso de tu empresa actual, aunque es recomendable revisar tu contrato por si hay cláusulas de exclusividad o incompatibilidad. 
                  Las cláusulas de dedicación exclusiva solo son válidas en determinados casos y con compensación económica adicional.
                </p>
                <p className="mb-3">
                  Esto se conoce como <strong>pluriactividad</strong> y tiene implicaciones importantes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Pagarás cotización completa en ambos regímenes (empresa + autónomo)</li>
                  <li>Si superas 14.764,80€ anuales de cotización total (2026), puedes solicitar <strong>devolución del 50%</strong> del exceso</li>
                  <li>Presentas solicitud en enero del año siguiente mediante el modelo oficial de la TGSS</li>
                  <li>En tu declaración de la Renta sumarás rendimientos del trabajo por cuenta ajena más rendimientos de actividades económicas</li>
                </ul>
                <p className="mb-3">
                  La cotización en pluriactividad no aumenta tus derechos a pensión de forma proporcional, ya que existe un tope máximo de base de cotización 
                  que se aplica al conjunto de todas tus actividades. Sin embargo, sí mejora tu cobertura por incapacidad temporal y tu futura prestación por cese 
                  de actividad como autónomo.
                </p>
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
                  Los costes principales de ser autónomo en 2026 incluyen tres partidas fundamentales: la cuota de cotización a la Seguridad Social, 
                  los impuestos sobre beneficios mediante el IRPF, y opcionalmente los servicios de gestoría o asesoría. El coste total dependerá directamente 
                  de tus ingresos netos, ya que el sistema de tramos por rendimientos hace que a mayor facturación mayor sea tanto la cuota como los impuestos.
                </p>
                <div className="space-y-3 mb-3">
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Cuota de autónomo (obligatoria)</h4>
                    <p className="text-sm mb-2">
                      Desde <strong>225€/mes</strong> (tramo más bajo) hasta <strong>530€/mes</strong> (tramo más alto). 
                      Depende de tus ingresos netos anuales. Con la tarifa plana: <strong>80€/mes los primeros 12 meses</strong>.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Esta cuota te da derecho a prestaciones como asistencia sanitaria, baja por enfermedad, protección por cese de actividad y 
                      cómputo para la pensión de jubilación. Se paga mensualmente mediante domiciliación bancaria.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">2. IRPF (trimestral y anual)</h4>
                    <p className="text-sm mb-2">
                      <strong>15% del beneficio neto</strong> (ingresos - gastos) en los pagos fraccionados trimestrales (modelo 130). 
                      En la declaración anual puede variar del 19% al 47% según tramos.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Los pagos trimestrales son anticipos que luego se regularizan en la Renta. Si tus clientes te aplican retención del 15% en facturas, 
                      podrías estar exento de presentar el modelo 130, pero la mayoría de freelancers con clientes internacionales debe presentarlo.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Gestoría (opcional pero recomendada)</h4>
                    <p className="text-sm mb-2">
                      Entre <strong>40€ y 80€/mes</strong> según servicios (modelo 130, 303, facturación, nóminas...). 
                      Puedes gestionarlo tú mismo si tienes conocimientos.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Una gestoría se encarga de presentar tus modelos trimestrales, calcular tus obligaciones fiscales, llevar tus libros registro 
                      y asesorarte sobre deducciones. Muchos autónomos lo gestionan ellos mismos los primeros meses para ahorrar costes.
                    </p>
                  </div>
                </div>
                <p className="mb-3 text-sm">
                  Además de estos costes principales, debes considerar otros gastos iniciales como la apertura de cuenta bancaria profesional si la entidad 
                  te la cobra, un seguro de responsabilidad civil profesional recomendable pero no obligatorio que puede costar entre 100 y 300 euros anuales, 
                  y herramientas de facturación electrónica aunque existen opciones gratuitas como Facturadirecta o las proporcionadas por algunas gestorías.
                </p>
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
                  La <strong>tarifa plana</strong> es un descuento en la cuota de autónomos para nuevas altas que reduce significativamente los costes 
                  durante los primeros años de actividad, facilitando el emprendimiento en la fase inicial.
                </p>
                <p className="mb-3">
                  En 2026, el esquema de la tarifa plana es:
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
                  <li>No ser administrador de sociedad mercantil durante la aplicación de la bonificación</li>
                </ul>
                <p className="mb-3 text-sm">
                  La tarifa plana aplica sobre la cotización por contingencias comunes. Adicionalmente debes abonar aproximadamente 3 euros mensuales 
                  por contingencias profesionales, cese de actividad y formación profesional. Cotizas por una base mínima que determina tus prestaciones 
                  por incapacidad temporal y futura pensión.
                </p>
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
                  Para que un gasto sea fiscalmente deducible debe cumplir tres requisitos fundamentales según la Ley del IRPF: estar vinculado directamente 
                  a tu actividad económica, estar correctamente justificado mediante factura completa a tu nombre con NIF, y estar registrado contablemente 
                  en tus libros de gastos.
                </p>
                <p className="mb-3">
                  Los desarrolladores y profesionales IT pueden deducir un amplio espectro de gastos:
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li><strong>Hardware y software:</strong> Portátiles, monitores, licencias (GitHub, JetBrains, Adobe), servidores cloud (AWS, Azure, Vercel), dominios y hosting</li>
                  <li><strong>Formación:</strong> Cursos online (Udemy, Platzi), libros técnicos, conferencias y eventos del sector, certificaciones profesionales</li>
                  <li><strong>Oficina:</strong> Coworking (100%), vivienda habitual (máx 7m²), suministros proporcionales, mobiliario</li>
                  <li><strong>Comunicación:</strong> Móvil y línea telefónica, internet fibra, correo corporativo, herramientas de videoconferencia</li>
                  <li><strong>Servicios profesionales:</strong> Gestoría, asesoría fiscal, servicios jurídicos, seguros RC profesional, publicidad y marketing digital</li>
                </ul>
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
                  Los equipos informáticos como portátiles, ordenadores de sobremesa o tablets profesionales son cien por cien deducibles si constituyen 
                  tu herramienta principal de trabajo. Se amortizan aplicando las tablas oficiales del Real Decreto 1777/2004: los equipos informáticos 
                  tienen un coeficiente máximo del veinticinco por ciento anual, lo que equivale a amortizar en cuatro años. Por ejemplo, si compras 
                  un MacBook de dos mil euros, puedes deducir quinientos euros anuales durante cuatro ejercicios consecutivos. Existe una alternativa 
                  de amortización acelerada para elementos de escaso valor: si el coste unitario es inferior a trescientos euros puedes deducir el importe 
                  íntegro en el mismo año de adquisición.
                </p>
                <p className="mb-3">
                  Respecto al teléfono móvil, si es de uso exclusivamente profesional puedes deducir el cien por cien tanto del dispositivo como de la 
                  línea mensual. Si lo utilizas también para asuntos personales, Hacienda acepta un cincuenta por ciento de deducción sin necesidad 
                  de mayor justificación documental. Si puedes demostrar un uso profesional superior mediante registro de llamadas o datos de consumo, 
                  es posible aplicar un porcentaje mayor. La línea fija profesional es cien por cien deducible si está destinada exclusivamente a clientes.
                </p>
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
                  Trabajar desde tu vivienda habitual te permite deducir una proporción de suministros y gastos de la vivienda. La normativa del IRPF 
                  establece que puedes deducir el treinta por ciento de los gastos correspondientes a los metros cuadrados destinados a la actividad, 
                  con un límite máximo de siete metros cuadrados. Los gastos deducibles incluyen:
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Alquiler mensual o intereses de hipoteca (si es propiedad)</li>
                  <li>Impuesto sobre Bienes Inmuebles (IBI)</li>
                  <li>Gastos de comunidad de propietarios</li>
                  <li>Seguro del hogar</li>
                  <li>Suministros: electricidad, agua, gas e internet (este último puede ser 100% si uso profesional)</li>
                </ul>
                <p className="mb-3">
                  Por ejemplo, si tu piso tiene ochenta metros cuadrados y destinas diez metros a tu oficina, solo puedes aplicar la deducción sobre 
                  siete metros como máximo. Si pagas novecientos euros de alquiler mensual, la proporción sería de siete metros entre ochenta metros 
                  multiplicado por novecientos euros y de este resultado el treinta por ciento, resultando en veintitres euros con sesenta céntimos 
                  mensuales deducibles.
                </p>
                <p className="mb-3">
                  Los suministros como electricidad, agua, gas e internet se deducen aplicando el mismo criterio de proporción de metros más el 
                  treinta por ciento. La conexión a internet puede deducirse al cien por cien si se justifica que su uso es principalmente profesional, 
                  sin aplicar el límite de metros ni el treinta por ciento. Es recomendable tener las facturas de suministros a nombre del autónomo o 
                  poder vincularlas con la actividad mediante domiciliaciones desde la cuenta profesional.
                </p>
                <p className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-3 rounded text-sm">
                  <strong>Atención:</strong> Si deduces gastos de vivienda habitual en propiedad, 
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
                  Las comidas y gastos de representación con clientes son fiscalmente deducibles siempre que se cumplan requisitos formales y materiales. 
                  El primer requisito es disponer de factura completa con tu nombre o razón social, NIF completo y detalle de lo consumido, sin que valgan 
                  tickets simplificados. El segundo requisito es que exista una relación comercial demostrable con el cliente, acreditada mediante contratos, 
                  correos electrónicos comerciales o facturas emitidas a ese cliente en fechas cercanas. Es recomendable anotar en la factura o documento anexo 
                  el nombre del cliente, la empresa que representa y el motivo de la reunión. El importe debe ser razonable y proporcionado, ya que cantidades 
                  elevadas frecuentes pueden ser cuestionadas.
                </p>
                <p className="mb-3">
                  Las comidas con clientes fuera de tu localidad habitual de trabajo tienen mayor respaldo documental, especialmente si se producen en el 
                  contexto de un desplazamiento profesional con factura de transporte o alojamiento. En cambio, comidas habituales en tu misma ciudad requieren 
                  mayor detalle justificativo, con un límite orientativo de veintiséis euros con sesenta y siete céntimos diarios en manutención. Las comidas 
                  en solitario o con familiares sin vínculo comercial con tu actividad no son deducibles bajo ningún concepto.
                </p>
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
                  Los gastos de formación directamente relacionados con tu actividad profesional son totalmente deducibles en el Impuesto sobre la Renta 
                  sin limitación de importe, siempre que puedas acreditar esa vinculación. Esto incluye:
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Cursos online sobre tecnologías que utilizas: React, Node, Python, DevOps, cloud computing, ciberseguridad</li>
                  <li>Plataformas de suscripción: Udemy, Coursera, Platzi, Frontend Masters, Pluralsight</li>
                  <li>Certificaciones oficiales: AWS, Google Cloud, Microsoft Azure, Kubernetes (incluye examen y material)</li>
                  <li>Libros técnicos físicos y digitales</li>
                  <li>Conferencias, meetups y eventos profesionales (entrada, desplazamiento y alojamiento)</li>
                </ul>
                <p className="mb-3">
                  La formación debe tener relación directa con tu epígrafe de actividad. <strong>NO son deducibles:</strong> cursos de idiomas sin justificación, 
                  másteres no relacionados con IT o gestión empresarial, formación personal o hobby, gimnasio o coaching no específico del negocio. Todos los 
                  gastos deben estar respaldados por factura completa emitida a tu nombre con NIF, y es conveniente que la descripción del concepto sea clara 
                  respecto al contenido formativo.
                </p>
                <p className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 rounded text-sm">
                  <strong>Beneficio dual:</strong> La formación no solo reduce tu base imponible (IRPF), 
                  también mejora tu perfil profesional y te permite facturar más.
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
                  El modelo 130 es el pago fraccionado trimestral del IRPF que adelanta a Hacienda parte del impuesto correspondiente a la declaración anual, 
                  evitando concentrar todo el pago en un único momento. Se aplica sobre el beneficio neto obtenido durante el ejercicio y funciona como 
                  liquidación provisional que después se regulariza en la Renta del año siguiente.
                </p>
                <p className="mb-3">
                  Están obligados a presentarlo los autónomos en estimación directa que no hayan soportado retenciones de IRPF en al menos el setenta por ciento 
                  de sus ingresos. La mayoría de desarrolladores que trabajan con clientes internacionales, plataformas extranjeras o particulares deben presentarlo, 
                  porque en esos casos no se practica retención en las facturas.
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
                  En la práctica funciona así: si emites una factura de mil euros más IVA a una empresa española, aplicas retención del quince por ciento 
                  sobre la base, que el cliente deduce del total y abona a Hacienda en tu nombre. Posteriormente, en tu declaración de la Renta, esa retención 
                  se descuenta de la cuota a pagar, igual que las retenciones de una nómina.
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
                  Ambos regímenes permiten deducir los mismos gastos. Las diferencias son el cinco por ciento adicional en simplificada y la complejidad contable. 
                  La elección se comunica mediante modelo 036 o 037, y los cambios deben realizarse en diciembre o primeros días de enero.
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
                  El borrador no incluye automáticamente tus datos de autónomo. Debes incorporar manualmente ingresos, gastos, cuotas de autónomos, y comprobar 
                  que aparecen los pagos del modelo 130 y retenciones. La cuota se calcula aplicando la escala progresiva del IRPF del diecinueve al cuarenta y siete 
                  por ciento. De esa cuota se restan deducciones, pagos fraccionados y retenciones, resultando el importe a ingresar o devolver.
                </p>
                <p className="mb-3">
                  Es fundamental conservar durante cuatro años toda la documentación: facturas emitidas y de gastos, justificantes del 130, certificados de retenciones 
                  y extractos bancarios. La falta de justificación puede llevar a regularizaciones con intereses y sanciones.
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
                  Existen deducciones en la cuota del IRPF aplicables a circunstancias personales, disponibles tanto para autónomos como asalariados: vivienda habitual 
                  adquirida antes de 2013, maternidad, familia numerosa, personas con discapacidad a cargo, donativos o inversión en empresas de nueva creación. 
                  Estas deducciones se aplican sobre la cuota íntegra reduciendo el importe final, pero no afectan al rendimiento de tu actividad.
                </p>
                <p className="mb-3">
                  También existen reducciones en la base imponible como aportaciones a planes de pensiones con límite de mil quinientos euros anuales, aportaciones 
                  a patrimonios protegidos o pensiones compensatorias al cónyuge.
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
