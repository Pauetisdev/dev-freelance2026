import { useState, useMemo } from 'react';
import { Calculator, AlertTriangle, Info, HelpCircle, Share2, Check } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Tramos de cotización 2026 según RD-Ley 13/2022
const TRAMOS_2026 = [
  { min: 0, max: 670, cuota: 225 },
  { min: 670, max: 1166, cuota: 255 },
  { min: 1166, max: 1500, cuota: 295 },
  { min: 1500, max: 2030, cuota: 360 },
  { min: 2030, max: 3190, cuota: 420 },
  { min: 3190, max: 6000, cuota: 480 },
  { min: 6000, max: Infinity, cuota: 530 },
];

const IRPF_PORCENTAJE = 0.15;
const GASTOS_DIFICIL_JUSTIFICACION = 0.07; // 7% de gastos de difícil justificación

function getTramoActivo(rendimientoMensualCotizacion: number): number {
  const index = TRAMOS_2026.findIndex(
    t => rendimientoMensualCotizacion >= t.min && rendimientoMensualCotizacion < t.max
  );
  return index >= 0 ? index : TRAMOS_2026.length - 1;
}

function getCuotaAutonomo(rendimientoMensualCotizacion: number): number {
  const tramo = TRAMOS_2026.find(
    t => rendimientoMensualCotizacion >= t.min && rendimientoMensualCotizacion < t.max
  );
  return tramo?.cuota ?? 530;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(value);
}

const Calculadora = () => {
  const [facturacion, setFacturacion] = useState<string>('');
  const [gastos, setGastos] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Validar y limitar a 8 cifras
  const handleFacturacionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir solo números positivos y limitar a 8 cifras (hasta 99.999.999€)
    if (value === '' || (/^\d+$/.test(value) && value.length <= 8 && Number(value) >= 0)) {
      setFacturacion(value);
    }
  };

  const handleGastosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir solo números positivos y limitar a 8 cifras (hasta 99.999.999€)
    if (value === '' || (/^\d+$/.test(value) && value.length <= 8 && Number(value) >= 0)) {
      setGastos(value);
    }
  };

  const handleShare = () => {
    if (!resultados) return;

    // Asegurar valores numéricos válidos
    const facturacionNum = Number(facturacion) || 0;

    const resumen = `📊 Cálculo de Sueldo Neto Autónomo 2026

💰 Bruto anual: ${formatCurrency(facturacionNum)}
✅ Neto estimado: ${formatCurrency(resultados.netoFinal)} (${formatCurrency(resultados.netoMensual)}/mes)

🔗 Haz tu propio cálculo aquí: ${globalThis.location.origin}/calculadora`;

    navigator.clipboard.writeText(resumen).then(() => {
      setCopied(true);
      toast({
        title: "✅ Cálculo copiado",
        description: "El resumen se ha copiado al portapapeles",
      });
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      toast({
        title: "❌ Error",
        description: "No se pudo copiar al portapapeles",
        variant: "destructive",
      });
    });
  };

  const resultados = useMemo(() => {
    const facturacionNum = Number.parseFloat(facturacion);
    const gastosNum = Number.parseFloat(gastos);

    // Validación robusta: solo calcular si hay valores válidos
    if (!facturacionNum || Number.isNaN(facturacionNum) || facturacionNum <= 0) return null;
    if (Number.isNaN(gastosNum)) return null;

    // Rendimiento neto = Facturación - Gastos
    const rendimientoNeto = facturacionNum - gastosNum;
    
    // Rendimiento neto para cotización = (Rendimiento Neto * 0.93) - aplicando 7% gastos difícil justificación
    const rendimientoNetoCotizacion = rendimientoNeto * (1 - GASTOS_DIFICIL_JUSTIFICACION);
    
    // Rendimiento mensual para determinar el tramo = Rendimiento Neto Cotización / 12
    const rendimientoMensualCotizacion = rendimientoNetoCotizacion / 12;
    
    // Obtener cuota según el tramo
    const cuotaMensual = getCuotaAutonomo(rendimientoMensualCotizacion);
    const cuotaAnual = cuotaMensual * 12;
    const tramoActivo = getTramoActivo(rendimientoMensualCotizacion);
    
    // Base para IRPF = Rendimiento Neto - Cuota Autónomos (la cuota es deducible)
    const baseIrpf = rendimientoNeto - cuotaAnual;
    const irpf = baseIrpf * IRPF_PORCENTAJE;
    
    // Neto final = Rendimiento Neto - Cuota - IRPF
    const netoFinal = rendimientoNeto - cuotaAnual - irpf;
    const netoMensual = netoFinal / 12;

    return {
      rendimientoNeto,
      rendimientoNetoCotizacion,
      rendimientoMensualCotizacion,
      cuotaMensual,
      cuotaAnual,
      baseIrpf,
      irpf,
      netoFinal,
      netoMensual,
      tramoActivo,
    };
  }, [facturacion, gastos]);

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <header className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 mb-4">
              <Calculator className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Calculadora de Neto Freelance 2026
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
              Estima tu ingreso neto después de cuota de autónomo e IRPF con los nuevos tramos de cotización por ingresos reales.
            </p>
          </header>

          {/* Grid principal: Inputs + Tabla */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 mb-6">
            {/* Columna izquierda: Inputs + Resultado combinados */}
            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg md:text-xl">Calculadora</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Introduce tus datos y obtén tu neto al instante</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between pb-6 space-y-6">
                {/* Inputs más grandes */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="facturacion" className="text-sm font-semibold flex items-center gap-2">
                      📊 Facturación anual
                    </Label>
                    <Input
                      id="facturacion"
                      type="text"
                      inputMode="numeric"
                      placeholder="50000"
                      value={facturacion}
                      onChange={handleFacturacionChange}
                      className="font-mono text-xl h-14 text-center"
                      maxLength={8}
                    />
                    <p className="text-xs text-muted-foreground text-center">Ingresos brutos €</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gastos" className="text-sm font-semibold flex items-center gap-2">
                      🧾 Gastos deducibles
                    </Label>
                    <Input
                      id="gastos"
                      type="text"
                      inputMode="numeric"
                      placeholder="1000"
                      value={gastos}
                      onChange={handleGastosChange}
                      className="font-mono text-xl h-14 text-center"
                      maxLength={8}
                    />
                    <p className="text-xs text-muted-foreground text-center">Reducción 7%</p>
                  </div>
                </div>

                {/* Separador */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-3 text-muted-foreground font-medium">Resultado</span>
                  </div>
                </div>

                {/* Resultado centrado y destacado */}
                {resultados ? (
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-accent/10 rounded-xl p-6 text-center border border-accent/30">
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-medium">💸 Tu neto estimado</p>
                    <p className="text-4xl md:text-5xl font-bold text-accent mb-2 tracking-tight">{formatCurrency(resultados.netoMensual)}</p>
                    <p className="text-base text-foreground font-semibold mb-4">al mes</p>
                    <div className="pt-3 border-t border-accent/20 mt-2">
                      <p className="text-xs text-muted-foreground mb-1">Total anual</p>
                      <p className="text-2xl md:text-2xl font-bold text-foreground">{formatCurrency(resultados.netoFinal)}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Calculator className="w-12 h-12 mb-3 text-muted-foreground/40" />
                    <p className="text-base font-medium text-muted-foreground">Esperando datos...</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Introduce tu facturación</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Columna derecha: Tabla de tramos */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 pb-3 md:pb-4">
                  <CardTitle className="text-sm md:text-lg flex items-center gap-2">
                    <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                    <span className="hidden md:inline">📊 Tramos de Cotización 2026</span>
                    <span className="md:hidden">📊 Tramos 2026</span>
                  </CardTitle>
                  <p className="text-[10px] md:text-sm text-muted-foreground mt-1 md:mt-2">
                    <span className="hidden md:inline">Según rendimiento neto mensual • RD-ley 13/2022</span>
                    <span className="md:hidden">Rendimiento neto mensual • RD-ley 13/2022</span>
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Tabla responsive con scroll horizontal en móvil */}
                  <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full min-w-[320px]">
                      <thead className="bg-muted/50 border-b-2 border-border">
                        <tr>
                          <th className="text-left py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-sm font-semibold text-muted-foreground whitespace-nowrap">
                            Rendimiento Mensual
                          </th>
                          <th className="text-right py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-sm font-semibold text-muted-foreground whitespace-nowrap">
                            Cuota/Mes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {TRAMOS_2026.map((tramo, i) => (
                          <tr 
                            key={`tramo-${tramo.min}-${tramo.cuota}`}
                            className={`border-b border-border transition-all ${
                              resultados?.tramoActivo === i
                                ? 'bg-accent/10 dark:bg-accent/20' 
                                : 'hover:bg-muted/30'
                            }`}
                          >
                            <td className={`py-2 px-2 md:py-3 md:px-4 ${
                              resultados?.tramoActivo === i 
                                ? 'font-bold text-accent' 
                                : 'text-foreground'
                            }`}>
                              <div className="flex items-center gap-1.5 md:gap-2">
                                {resultados?.tramoActivo === i && (
                                  <span className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse"></span>
                                )}
                                <span className="font-mono text-[10px] md:text-sm whitespace-nowrap">
                                  <span className="md:hidden">
                                    {tramo.max === Infinity 
                                      ? `+${tramo.min.toLocaleString('es-ES')}€` 
                                      : `${tramo.min.toLocaleString('es-ES')}€ - ${tramo.max.toLocaleString('es-ES')}€`}
                                  </span>
                                  <span className="hidden md:inline">
                                    {tramo.max === Infinity 
                                      ? `Más de ${tramo.min.toLocaleString('es-ES')}€` 
                                      : `${tramo.min.toLocaleString('es-ES')}€ - ${tramo.max.toLocaleString('es-ES')}€`}
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className={`py-2 px-2 md:py-3 md:px-4 text-right ${
                              resultados?.tramoActivo === i 
                                ? 'font-bold text-accent' 
                                : 'text-foreground'
                            }`}>
                              <span className="inline-flex items-center gap-1 md:gap-1.5 font-mono text-xs md:text-base whitespace-nowrap">
                                <span className={resultados?.tramoActivo === i ? 'text-sm md:text-lg' : ''}>
                                  {tramo.cuota}€
                                </span>
                                <span className="text-[9px] md:text-xs text-muted-foreground">/mes</span>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Leyenda del tramo activo */}
                  {resultados && (
                    <div className="mt-2 px-3 pb-3 md:mt-3 md:px-4 md:pb-4">
                      <div className="flex items-center gap-2 text-[11px] md:text-sm text-muted-foreground bg-accent/5 dark:bg-accent/10 rounded-lg p-2 md:p-3 border border-accent/20">
                        <span className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="leading-tight">Tu tramo: <strong className="text-accent">{formatCurrency(resultados.cuotaMensual)}/mes</strong></span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
          </div>

          {/* Sección de desglose y explicaciones con anuncio */}
          {resultados && (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mb-6">
              {/* Columna principal: Desglose + Explicaciones */}
              <div className="space-y-4">
                {/* Desglose detallado */}
                <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <CardTitle className="text-lg md:text-xl">📋 Desglose del cálculo</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                      className="gap-2 w-full sm:w-auto"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          Compartir resultado
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Facturación bruta</span>
                      <span className="font-mono text-sm md:text-base">{formatCurrency(Number.parseFloat(facturacion) || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Gastos deducibles</span>
                      <span className="font-mono text-red-500 dark:text-red-400 text-sm md:text-base">-{formatCurrency(Number.parseFloat(gastos) || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground font-medium">Rendimiento neto</span>
                      <span className="font-mono font-semibold text-sm md:text-base">{formatCurrency(resultados.rendimientoNeto)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border bg-muted/30 -mx-4 px-4">
                      <span className="text-muted-foreground text-xs md:text-sm">
                        Base cotización (-7%)
                      </span>
                      <span className="font-mono text-xs md:text-sm">{formatCurrency(resultados.rendimientoNetoCotizacion)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border bg-muted/30 -mx-4 px-4">
                      <span className="text-muted-foreground text-xs md:text-sm">
                        Mensual para tramo
                      </span>
                      <span className="font-mono text-xs md:text-sm">{formatCurrency(resultados.rendimientoMensualCotizacion)}/mes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">
                        Cuota autónomo <span className="text-xs">({formatCurrency(resultados.cuotaMensual)}/mes)</span>
                      </span>
                      <span className="font-mono text-red-500 dark:text-red-400 text-sm md:text-base">-{formatCurrency(resultados.cuotaAnual)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border bg-muted/30 -mx-4 px-4">
                      <span className="text-muted-foreground text-xs md:text-sm">
                        Base IRPF
                      </span>
                      <span className="font-mono text-xs md:text-sm">{formatCurrency(resultados.baseIrpf)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">IRPF (15%)</span>
                      <span className="font-mono text-red-500 dark:text-red-400 text-sm md:text-base">-{formatCurrency(resultados.irpf)}</span>
                    </div>
                    <div className="md:col-span-2 flex justify-between items-center py-4 font-medium text-lg md:text-xl bg-accent/10 -mx-4 px-4 rounded-lg mt-4">
                      <span>💰 Neto final</span>
                      <span className="font-mono text-accent font-bold">{formatCurrency(resultados.netoFinal)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            </div>
          )}

          {/* Sección inferior: Más explicaciones */}
          {resultados && (
            <div className="space-y-4">

              {/* Explanation Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base md:text-lg flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 md:w-4 md:h-4" />
                    ¿Cómo calculamos tus impuestos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="rendimiento">
                      <AccordionTrigger className="text-sm">
                        1. Rendimiento Neto y reducción del 7%
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>
                          El <strong>rendimiento neto</strong> es la diferencia entre tus ingresos brutos y los gastos deducibles que declaras (alquiler, suministros, material, etc.).
                        </p>
                        <p>
                          Para calcular la <strong>base de cotización</strong>, la Seguridad Social permite aplicar una reducción del <strong>7% por gastos de difícil justificación</strong>. Esta reducción es un beneficio fiscal que reconoce que los autónomos tienen gastos difíciles de documentar.
                        </p>
                        <div className="bg-muted/50 p-3 rounded-md font-mono text-xs mt-2">
                          Base cotización = Rendimiento neto × 0,93
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cotizacion">
                      <AccordionTrigger className="text-sm">
                        2. Elección del tramo de cotización
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>
                          Según el <strong>Real Decreto-ley 13/2022</strong>, los autónomos cotizan por sus ingresos reales. El tramo se determina por tu <strong>rendimiento neto mensual</strong> (base de cotización dividida entre 12 meses).
                        </p>
                        <p>
                          Los tramos para 2026 van desde 225€/mes (rentas bajas) hasta 530€/mes (rentas superiores a 6.000€ mensuales).
                        </p>
                        <div className="bg-muted/50 p-3 rounded-md font-mono text-xs mt-2">
                          Rendimiento mensual = Base cotización ÷ 12
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="irpf">
                      <AccordionTrigger className="text-sm">
                        3. Cálculo del IRPF
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>
                          El IRPF se calcula <strong>después de restar la cuota de autónomos</strong>, ya que las cotizaciones a la Seguridad Social son un gasto deducible en el impuesto sobre la renta.
                        </p>
                        <p>
                          Usamos el tipo reducido del <strong>15%</strong> aplicable a nuevos autónomos y profesionales. El tipo general puede variar según tus circunstancias.
                        </p>
                        <div className="bg-muted/50 p-3 rounded-md font-mono text-xs mt-2">
                          IRPF = (Rendimiento neto − Cuota anual) × 15%
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="neto">
                      <AccordionTrigger className="text-sm">
                        4. Neto final
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p>
                          Tu <strong>neto final</strong> es lo que realmente te queda después de pagar las cuotas de autónomo y el IRPF.
                        </p>
                        <div className="bg-muted/50 p-3 rounded-md font-mono text-xs mt-2">
                          Neto final = Rendimiento neto − Cuota autónomos − IRPF
                        </div>
                        <p className="mt-2">
                          Recuerda que este cálculo no incluye el IVA (que no es un ingreso tuyo, sino un impuesto que recaudas para Hacienda) ni las retenciones que te apliquen clientes.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-sm md:text-base text-amber-900 dark:text-amber-200">
                  Este cálculo es <strong>orientativo</strong>. No incluye IVA, retenciones de clientes, situaciones fiscales especiales, ni deducciones adicionales. Consulta siempre con un asesor fiscal profesional para tu caso concreto.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;
