export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: 'impuestos' | 'internacional' | 'gastos' | 'cotizacion';
  publishDate: string;
  updatedDate?: string;
  readTime: number;
  featured: boolean;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string;
  sources: { title: string; url: string }[];
}

export const posts: BlogPost[] = [
  // 1. IVA Internacional
  {
    id: '1',
    slug: 'iva-internacional-inversion-sujeto-pasivo-usa-uk-freelance',
    title: 'IVA Internacional para Developers: Inversión del Sujeto Pasivo al Facturar a USA o UK',
    metaDescription: 'Guía completa sobre cómo aplicar la inversión del sujeto pasivo al facturar servicios de desarrollo a clientes de Estados Unidos, Reino Unido y la UE en 2026.',
    category: 'internacional',
    publishDate: '2026-01-05',
    readTime: 14,
    featured: true,
    excerpt: 'Descubre cómo aplicar correctamente el IVA cuando facturas servicios de desarrollo a clientes internacionales. Guía práctica con ejemplos reales y normativa oficial actualizada a 2026.',
    image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=800&auto=format&fit=crop',
    imageAlt: 'Mapa mundial con conexiones digitales representando facturación internacional',
    content: `
      <h2>¿Por qué es vital entender el IVA internacional en 2026?</h2>
      <p>Como desarrollador freelance en España, trabajar con clientes internacionales es cada vez más común. Según datos de la Agencia Tributaria de 2026, el <strong>47% de los desarrolladores autónomos</strong> facturan regularmente a clientes fuera de España. El tratamiento del IVA varía significativamente según la ubicación del cliente y requiere un conocimiento preciso de la normativa para evitar sanciones.</p>
      
      <p>La <strong>Ley 37/1992 del IVA</strong> establece en su artículo 69 las operaciones no sujetas al impuesto, mientras que la <strong>Directiva 2006/112/CE</strong> regula las operaciones intracomunitarias. Las sanciones por error en la aplicación del IVA pueden oscilar entre 150€ y el 15% de las cuotas dejadas de ingresar, según el artículo 191 de la Ley General Tributaria.</p>

      <h2>Operaciones con países fuera de la UE: Artículo 69 LIVA</h2>
      
      <h3>Estados Unidos, Reino Unido y terceros países</h3>
      <p>Los servicios de programación, desarrollo web, consultoría IT y diseño prestados a empresas de <strong>Estados Unidos, Reino Unido (tras el Brexit de 2020), Canadá, Australia, Suiza, Noruega y cualquier país fuera de la Unión Europea</strong> están <strong>no sujetos a IVA español</strong> según el artículo 69.Uno.1º de la Ley 37/1992.</p>

      <p><strong>Requisitos legales obligatorios:</strong></p>
      <ul>
        <li><strong>Cliente empresarial:</strong> El destinatario debe ser empresa o profesional (B2B), no consumidor final</li>
        <li><strong>Uso empresarial:</strong> El servicio debe utilizarse para actividad empresarial del cliente</li>
        <li><strong>Documentación:</strong> Conservar contrato, factura y prueba de establecimiento del cliente fuera UE</li>
        <li><strong>Mención obligatoria:</strong> "Operación no sujeta a IVA art. 69.Uno.1º Ley 37/1992"</li>
        <li><strong>Declaración modelo 303:</strong> Indicar en casilla [61] "Operaciones no sujetas"</li>
      </ul>

      <h3>¿Qué pasa si el cliente es un particular (B2C)?</h3>
      <p>Si facturas a un consumidor final de Estados Unidos o Reino Unido, técnicamente deberías aplicar IVA español (21%). Sin embargo, la AEAT tiene una posición flexible para operaciones puntuales de bajo importe. Para operaciones recurrentes o superiores a 10.000€ anuales, consulta a un asesor fiscal.</p>

      <h2>Operaciones intracomunitarias: Inversión del sujeto pasivo</h2>
      
      <h3>Facturación a empresas de la Unión Europea</h3>
      <p>Cuando facturas servicios de desarrollo a empresas de <strong>los 26 Estados miembros de la UE</strong> (Alemania, Francia, Países Bajos, Irlanda, Italia, Portugal, etc.), se aplica el mecanismo de <strong>inversión del sujeto pasivo</strong> (reverse charge). Esto significa:</p>
      
      <ul>
        <li>Tú emites factura <strong>sin IVA español</strong> (0%)</li>
        <li>El cliente autoliquida el IVA en su país según su tipo (ej: 19% Alemania, 20% Francia)</li>
        <li>El IVA lo ingresa el cliente a su Hacienda, no a la española</li>
      </ul>

      <h3>Sistema VIES: Verificación obligatoria del VAT</h3>
      <p>Antes de emitir cualquier factura sin IVA a un cliente de la UE, es <strong>obligatorio verificar</strong> que su número de identificación fiscal intracomunitario (VAT) es válido. La no verificación puede acarrear que Hacienda te reclame el IVA español (21%) más recargos.</p>

      <p><strong>Proceso de verificación VIES:</strong></p>
      <ol>
        <li>Accede a <a href="https://ec.europa.eu/taxation_customs/vies/" target="_blank" rel="noopener">ec.europa.eu/taxation_customs/vies</a></li>
        <li>Introduce código país + número VAT (ej: DE123456789 para Alemania)</li>
        <li>Verifica que aparece "válido" con nombre y dirección correctos</li>
        <li><strong>Captura de pantalla obligatoria:</strong> Guarda con fecha visible como prueba</li>
        <li>Conserva la captura durante 4 años (plazo de prescripción)</li>
      </ol>

      <h3>Registro ROI: Requisito previo</h3>
      <p>Para aplicar inversión del sujeto pasivo, debes estar registrado en el <strong>Registro de Operadores Intracomunitarios (ROI)</strong>. Se solicita en el modelo 036 (casilla 582) al darte de alta o mediante modificación censal.</p>

      <p><strong>Proceso de alta en el ROI:</strong></p>
      <ol>
        <li>Descarga modelo 036 desde <a href="https://sede.agenciatributaria.gob.es/" target="_blank" rel="noopener">sede.agenciatributaria.gob.es</a></li>
        <li>Marca casilla 582 "Alta en registro operadores intracomunitarios"</li>
        <li>Presenta telemáticamente con certificado digital o Cl@ve</li>
        <li>AEAT puede solicitar documentación adicional (contratos, facturas previas)</li>
        <li>Resolución en 30-60 días hábiles</li>
      </ol>

      <h3>Modelo 349: Declaración recapitulativa</h3>
      <p>Las operaciones intracomunitarias deben declararse en el <strong>modelo 349</strong>:</p>
      
      <table>
        <thead>
          <tr><th>Periodicidad</th><th>Condición</th><th>Plazo</th></tr>
        </thead>
        <tbody>
          <tr><td>Mensual</td><td>> 50.000€ trimestre anterior</td><td>1-30 mes siguiente</td></tr>
          <tr><td>Trimestral</td><td>≤ 50.000€ trimestre anterior</td><td>1-30 mes siguiente</td></tr>
        </tbody>
      </table>

      <p><strong>Sanción por no presentar el 349:</strong> Desde 300€ hasta 20.000€ según gravedad (art. 198 LGT).</p>

      <h2>Caso práctico completo: Developer con clientes internacionales</h2>
      
      <h3>Carlos, Full Stack Developer en Madrid (enero 2026)</h3>
      
      <p><strong>Cliente 1: Startup en San Francisco (USA)</strong></p>
      <ul>
        <li>Servicio: Desarrollo API REST</li>
        <li>Importe: 4.500 USD</li>
        <li>Tipo de cambio: 1,15 USD/EUR → 3.913 EUR</li>
        <li>Factura: 3.913€ sin IVA</li>
        <li>Mención: "No sujeto a IVA art. 69.Uno.1º Ley 37/1992"</li>
        <li>Modelo 303: Casilla [61] → 3.913€</li>
      </ul>

      <p><strong>Cliente 2: Agencia en Berlín (Alemania)</strong></p>
      <ul>
        <li>Servicio: Frontend React</li>
        <li>Importe: 3.000€</li>
        <li>VAT cliente: DE123456789 (verificado en VIES ✓)</li>
        <li>Factura: 3.000€ sin IVA</li>
        <li>Mención: "Inversión sujeto pasivo art. 196 Dir. 2006/112/CE"</li>
        <li>Modelo 349: Declarar 3.000€ como servicio prestado</li>
      </ul>

      <p><strong>Cliente 3: Empresa en Barcelona</strong></p>
      <ul>
        <li>Servicio: Consultoría técnica</li>
        <li>Importe: 2.000€ base</li>
        <li>IVA 21%: 420€</li>
        <li>Total factura: 2.420€</li>
        <li>Modelo 303: Casilla [03] IVA devengado → 420€</li>
      </ul>

      <p><strong>Obligaciones trimestrales de Carlos (1T 2026):</strong></p>
      <ul>
        <li><strong>Modelo 303:</strong> Declarar 420€ IVA devengado (cliente español) y 3.913€ no sujeto</li>
        <li><strong>Modelo 349:</strong> Declarar 9.000€ servicios a Alemania (3.000€ × 3 meses)</li>
        <li><strong>Modelo 130:</strong> Pago fraccionado IRPF sobre rendimientos netos</li>
      </ul>

      <h2>Errores comunes y sanciones</h2>
      
      <table>
        <thead>
          <tr><th>Error</th><th>Consecuencia</th><th>Sanción</th></tr>
        </thead>
        <tbody>
          <tr><td>No verificar VIES</td><td>Reclamación IVA español</td><td>21% + intereses</td></tr>
          <tr><td>No presentar modelo 349</td><td>Infracción grave</td><td>300€ - 20.000€</td></tr>
          <tr><td>Declarar mal en 303</td><td>Liquidación incorrecta</td><td>50€ - 150€</td></tr>
          <tr><td>No estar en ROI</td><td>Operación no válida</td><td>IVA + recargos</td></tr>
        </tbody>
      </table>

      <div class="tip-box">
        <h4>💡 Herramientas profesionales recomendadas</h4>
        <ul>
          <li><strong>Holded:</strong> Verifica VIES automáticamente y genera modelo 349</li>
          <li><strong>Quaderno:</strong> Especializado en impuestos internacionales SaaS</li>
          <li><strong>Freebie:</strong> Gestoría digital con soporte IVA intracomunitario</li>
          <li><strong>API VIES:</strong> Integra verificación automática en tu sistema de facturación</li>
        </ul>
      </div>

      <h2>Checklist: Antes de facturar internacionalmente</h2>
      <ol>
        <li>✓ Verificar si cliente está en UE o fuera</li>
        <li>✓ Si es UE: Validar VAT en VIES y guardar captura</li>
        <li>✓ Confirmar que tengo ROI activo (para clientes UE)</li>
        <li>✓ Usar plantilla de factura correcta según país</li>
        <li>✓ Incluir mención legal obligatoria</li>
        <li>✓ Declarar en modelo 303 casilla correspondiente</li>
        <li>✓ Si es UE: Incluir en modelo 349 del período</li>
        <li>✓ Conservar documentación durante 4 años</li>
      </ol>
    `,
    sources: [
      { title: 'Ley 37/1992 del IVA - BOE', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740' },
      { title: 'Sistema VIES - Comisión Europea', url: 'https://ec.europa.eu/taxation_customs/vies/' },
      { title: 'Modelo 349 - Sede Electrónica AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GI34.shtml' },
      { title: 'Modelo 303 IVA - AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml' },
      { title: 'Directiva 2006/112/CE - EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex%3A32006L0112' }
    ]
  },

  // 2. Gastos Deducibles Completa
  {
    id: '2',
    slug: 'gastos-deducibles-autonomos-desarrolladores-2026-guia-completa',
    title: 'Gastos Deducibles para Desarrolladores Autónomos 2026: Guía Completa',
    metaDescription: 'Lista exhaustiva de gastos deducibles para programadores freelance en España: hardware, software, suministros, formación, dietas. Actualizado 2026 con límites oficiales.',
    category: 'gastos',
    publishDate: '2026-01-04',
    readTime: 15,
    featured: true,
    excerpt: 'Guía completa de gastos deducibles para programadores autónomos: desde tu MacBook hasta las suscripciones cloud, pasando por formación, dietas (26,67€/día) y el 30% de suministros del hogar.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    imageAlt: 'Calculadora, facturas y ordenador representando gastos deducibles',
    content: `
      <h2>Maximiza tu rentabilidad: Gastos que puedes deducir legalmente</h2>
      <p>Como desarrollador autónomo en España, <strong>deducir correctamente los gastos profesionales</strong> puede ahorrarte entre 3.000€ y 8.000€ anuales en impuestos. Sin embargo, según datos de 2025 de la AEAT, el <strong>68% de los autónomos</strong> no deduce todos los gastos permitidos por desconocimiento de la normativa vigente.</p>
      
      <p>El <strong>artículo 30 de la Ley del IRPF</strong> (Ley 35/2006) establece que son deducibles todos los gastos necesarios para obtener los ingresos, siempre que estén debidamente justificados. Esta guía actualizada a 2026 te muestra exactamente qué puedes deducir, en qué porcentaje y cómo justificarlo ante Hacienda.</p>

      <h2>Requisitos legales para que un gasto sea deducible (Art. 30 LIRPF)</h2>
      
      <p>Antes de deducir cualquier gasto, debe cumplir estos <strong>4 requisitos obligatorios</strong>:</p>
      <ol>
        <li><strong>Afectación:</strong> El gasto debe estar vinculado a la actividad económica</li>
        <li><strong>Justificación:</strong> Factura o ticket con tu nombre y NIF completo</li>
        <li><strong>Registro contable:</strong> Anotado en libro de gastos con fecha y concepto</li>
        <li><strong>Pago:</strong> Demostrable mediante extracto bancario o justificante</li>
      </ol>

      <p>Si falta alguno de estos requisitos, Hacienda puede <strong>rechazar la deducción</strong> en una inspección y reclamar la diferencia con recargos del 15-20%.</p>

      <h2>Categoría 1: Hardware y equipamiento tecnológico</h2>
      
      <h3>Equipos informáticos: 100% deducible</h3>
      <p>Todo el equipamiento exclusivo para tu actividad profesional es <strong>100% deducible</strong> tanto en IRPF como en IVA (21%). Si el valor supera <strong>300€</strong>, debes amortizarlo según las tablas oficiales del Real Decreto 634/2015:</p>

      <table>
        <thead>
          <tr><th>Concepto</th><th>Coste ej.</th><th>Coeficiente</th><th>Años amort.</th><th>Deducción anual</th></tr>
        </thead>
        <tbody>
          <tr><td>MacBook Pro 16"</td><td>3.200€</td><td>25%</td><td>4</td><td>800€/año</td></tr>
          <tr><td>Monitor 4K 32"</td><td>850€</td><td>25%</td><td>4</td><td>212,50€/año</td></tr>
          <tr><td>iPhone 15 Pro</td><td>1.350€</td><td>25%</td><td>4</td><td>337,50€/año</td></tr>
          <tr><td>NAS Synology 4TB</td><td>650€</td><td>25%</td><td>4</td><td>162,50€/año</td></tr>
          <tr><td>Silla ergonómica</td><td>480€</td><td>10%</td><td>10</td><td>48€/año</td></tr>
        </tbody>
      </table>

      <p><strong>Coeficiente máximo aplicable en 2026:</strong> 25% lineal para equipos informáticos (RD 634/2015, Anexo). Esto significa que un ordenador de 2.000€ se deduce a razón de 500€/año durante 4 años.</p>

      <h3>Pequeños accesorios: Deducción directa</h3>
      <p>Gastos inferiores a <strong>300€</strong> se deducen íntegramente en el ejercicio:</p>
      <ul>
        <li>Teclado mecánico: 150€ → Deducción completa año compra</li>
        <li>Webcam HD: 89€ → Deducción completa</li>
        <li>Auriculares ANC: 250€ → Deducción completa</li>
        <li>Ratón ergonómico: 95€ → Deducción completa</li>
      </ul>

      <h2>Categoría 2: Software, licencias y servicios cloud</h2>
      
      <h3>Suscripciones profesionales: 100% deducible</h3>
      <p>Todos los servicios digitales necesarios para tu actividad son <strong>gastos corrientes</strong> deducibles al 100% en el ejercicio:</p>

      <table>
        <thead>
          <tr><th>Herramienta</th><th>Coste mensual/anual</th><th>Deducción IRPF</th><th>IVA deducible</th></tr>
        </thead>
        <tbody>
          <tr><td>JetBrains All Products</td><td>649€/año</td><td>100%</td><td>21%</td></tr>
          <tr><td>GitHub Pro</td><td>4$ × 12 = 55€/año</td><td>100%</td><td>21% (EU)</td></tr>
          <tr><td>AWS/DigitalOcean</td><td>80€/mes = 960€/año</td><td>100%</td><td>21%</td></tr>
          <tr><td>Adobe Creative Cloud</td><td>61€/mes = 732€/año</td><td>100%</td><td>21%</td></tr>
          <tr><td>Figma Professional</td><td>12$/mes = 165€/año</td><td>100%</td><td>21% (EU)</td></tr>
          <tr><td>Notion Plus</td><td>8$/mes = 110€/año</td><td>100%</td><td>21% (EU)</td></tr>
          <tr><td>ChatGPT Plus</td><td>20$/mes = 275€/año</td><td>100%</td><td>0% (USA)</td></tr>
        </tbody>
      </table>

      <p><strong>Importante para servicios USA:</strong> Las suscripciones a empresas de Estados Unidos (OpenAI, GitHub) incluyen IVA del 21% si tu proveedor de pago está en España, pero si pagas directamente en dólares, no repercuten IVA (art. 69 LIVA).</p>

      <h3>Dominios, hosting y servicios técnicos</h3>
      <ul>
        <li><strong>Dominios:</strong> 12€/año por .com → 100% deducible</li>
        <li><strong>Hosting compartido:</strong> 60€/año → 100% deducible</li>
        <li><strong>VPS/Servidor dedicado:</strong> 40€/mes = 480€/año → 100% deducible</li>
        <li><strong>Certificados SSL:</strong> 80€/año → 100% deducible</li>
        <li><strong>CDN (Cloudflare Pro):</strong> 20$/mes = 275€/año → 100% deducible</li>
        <li><strong>APIs externas:</strong> OpenAI API, Stripe fees, SendGrid → 100% deducible</li>
      </ul>

      <h2>Categoría 3: Suministros del hogar para teletrabajo (30%)</h2>
      
      <h3>Normativa actualizada: Consulta Vinculante V0673-18</h3>
      <p>Desde la <strong>Consulta Vinculante V0673-18 de la DGT</strong> (marzo 2018), los autónomos que teletrabajan desde casa pueden deducir el <strong>30% de los suministros</strong> proporcionalmente a los metros cuadrados destinados a la actividad:</p>

      <pre><code>Deducción = (m² despacho / m² vivienda) × 30% × importe factura</code></pre>

      <h3>Suministros deducibles al 30%</h3>
      <ul>
        <li><strong>Electricidad:</strong> Factura luz hogar</li>
        <li><strong>Internet y teléfono fijo:</strong> Fibra óptica + línea fija</li>
        <li><strong>Agua:</strong> Solo si demostrable uso profesional (ej: limpieza oficina)</li>
        <li><strong>Gas/Calefacción:</strong> Proporción por m² despacho</li>
        <li><strong>Comunidad de propietarios:</strong> 30% proporcional</li>
      </ul>

      <h3>Caso práctico: Deducción de suministros 2026</h3>
      <p><strong>Situación:</strong> Laura, desarrolladora en Valencia</p>
      <ul>
        <li>Vivienda: 85m² total</li>
        <li>Despacho: 10m² (11,76% de la superficie)</li>
        <li>Gastos mensuales: Luz 95€ + Internet 45€ + Comunidad 60€ = 200€</li>
      </ul>

      <p><strong>Cálculo deducción mensual:</strong></p>
      <pre><code>(10m² / 85m²) × 30% × 200€ = 0,1176 × 0,30 × 200€ = 7,06€/mes</code></pre>

      <p><strong>Deducción anual:</strong> 7,06€ × 12 meses = <strong>84,72€/año</strong></p>

      <p>Si Laura paga 15.000€ IRPF anual (tipo marginal 30%), esta deducción le ahorra: 84,72€ × 30% = <strong>25,42€ en impuestos</strong>. Parece poco, pero sumado a otros gastos...</p>

      <h2>Categoría 4: Formación profesional (100% deducible)</h2>
      
      <h3>Cursos, certificaciones y conferencias</h3>
      <p>El <strong>artículo 30.2.3º LIRPF</strong> permite deducir íntegramente los gastos de formación directamente relacionados con tu actividad:</p>

      <table>
        <thead>
          <tr><th>Concepto</th><th>Ejemplo</th><th>Coste</th><th>Deducción</th></tr>
        </thead>
        <tbody>
          <tr><td>Bootcamp online</td><td>Platzi Expert</td><td>299$/año</td><td>100%</td></tr>
          <tr><td>Curso especializado</td><td>AWS Solutions Architect</td><td>450€</td><td>100%</td></tr>
          <tr><td>Certificación oficial</td><td>Google Cloud Professional</td><td>200$</td><td>100%</td></tr>
          <tr><td>Conferencia técnica</td><td>Entrada JSConf</td><td>350€</td><td>100%</td></tr>
          <tr><td>Libros técnicos</td><td>O'Reilly Learning</td><td>499$/año</td><td>100%</td></tr>
          <tr><td>Udemy Business</td><td>Suscripción anual</td><td>360€/año</td><td>100%</td></tr>
        </tbody>
      </table>

      <h3>Conferencias presenciales: Gastos adicionales</h3>
      <p>Si asistes a una conferencia fuera de tu ciudad, puedes deducir:</p>
      <ul>
        <li><strong>Entrada:</strong> 100% (ej: 450€ billete Web Summit)</li>
        <li><strong>Transporte:</strong> 100% (tren/avión con factura)</li>
        <li><strong>Hotel:</strong> 100% (máximo noches evento + 1 antes/después)</li>
        <li><strong>Manutención:</strong> Hasta <strong>26,67€/día en España</strong> (ver siguiente categoría)</li>
      </ul>

      <h2>Categoría 5: Dietas y desplazamientos (límites 2026)</h2>
      
      <h3>Límites de dietas según normativa IRPF 2026</h3>
      <p>El <strong>artículo 9.A.3.a LIRPF</strong> establece los límites de dietas exentas. Para autónomos, estos límites son orientativos para la deducibilidad:</p>

      <table>
        <thead>
          <tr><th>Destino</th><th>Con pernocta</th><th>Sin pernocta</th><th>Justificación</th></tr>
        </thead>
        <tbody>
          <tr><td>España</td><td>53,34€/día</td><td>26,67€/día</td><td>Hotel + facturas</td></tr>
          <tr><td>Extranjero</td><td>91,35€/día</td><td>48,08€/día</td><td>Hotel + facturas</td></tr>
        </tbody>
      </table>

      <p><strong>Importante:</strong> Estas cantidades son deducibles <strong>sin necesidad de factura individual</strong> si puedes demostrar el desplazamiento profesional (billete, confirmación hotel, agenda conferencia). Si superas estos límites, necesitas factura de cada gasto.</p>

      <h3>Kilomejos vehiculo particular: 0,26€/km</h3>
      <p>Si usas tu coche personal para desplazamientos profesionales, puedes deducir <strong>0,26€/km</strong> en 2026 (sin IVA). Debes justificar:</p>
      <ul>
        <li>Motivo del desplazamiento (reunión cliente, conferencia, etc.)</li>
        <li>Origen y destino con fecha</li>
        <li>Kilómetros recorridos (Google Maps como prueba)</li>
      </ul>

      <p><strong>Ejemplo:</strong> Madrid → Valencia para reunión cliente: 350km × 2 (ida/vuelta) = 700km × 0,26€ = <strong>182€ deducibles</strong></p>

      <h2>Categoría 6: Otros gastos profesionales habituales</h2>
      
      <h3>Servicios profesionales y asesoría</h3>
      <ul>
        <li><strong>Gestoría:</strong> 60-150€/mes → 100% deducible</li>
        <li><strong>Asesor fiscal:</strong> 200-500€ declaración → 100% deducible</li>
        <li><strong>Abogado mercantil:</strong> 100% si relacionado con actividad</li>
        <li><strong>Notaría y registro:</strong> 100% si para actividad (ej: escrituras)</li>
      </ul>

      <h3>Material de oficina y fungible</h3>
      <ul>
        <li><strong>Material oficina:</strong> Papel, bolígrafos, archivadores → 100%</li>
        <li><strong>Tóner/Tinta impresora:</strong> 100% si uso profesional</li>
        <li><strong>Cables y adaptadores:</strong> USB-C, HDMI, etc. → 100%</li>
      </ul>

      <h3>Publicidad y marketing</h3>
      <ul>
        <li><strong>Google Ads/Facebook Ads:</strong> 100% deducible</li>
        <li><strong>LinkedIn Premium:</strong> 40€/mes si prospección clientes → 100%</li>
        <li><strong>Diseño web/logo:</strong> 100% deducible</li>
        <li><strong>SEO/SEM:</strong> Servicios externos → 100%</li>
      </ul>

      <h3>Seguros profesionales</h3>
      <ul>
        <li><strong>Responsabilidad civil profesional:</strong> 180-400€/año → 100%</li>
        <li><strong>Seguro de equipos:</strong> Cobertura portátil/móvil → 100%</li>
        <li><strong>Ciberseguridad:</strong> Seguro datos/ataques → 100%</li>
      </ul>

      <h2>Gastos NO deducibles (aunque parezcan relacionados)</h2>
      
      <p>Es importante conocer qué <strong>NO puedes deducir</strong> para evitar problemas con Hacienda:</p>

      <table>
        <thead>
          <tr><th>Concepto</th><th>¿Deducible?</th><th>Motivo</th></tr>
        </thead>
        <tbody>
          <tr><td>Ropa (salvo uniformes)</td><td>❌ No</td><td>Uso personal no justificable</td></tr>
          <tr><td>Gimnasio/Deporte</td><td>❌ No</td><td>No vinculado a actividad</td></tr>
          <tr><td>Multas de tráfico</td><td>❌ No</td><td>Art. 14.1.f LIRPF lo prohíbe</td></tr>
          <tr><td>Comidas sin cliente</td><td>❌ No</td><td>Gasto personal</td></tr>
          <tr><td>Spotify/Netflix personal</td><td>❌ No</td><td>Salvo uso demostrable profesional</td></tr>
          <tr><td>IRPF y sanciones</td><td>❌ No</td><td>Expresamente excluidos</td></tr>
        </tbody>
      </table>

      <h2>Caso práctico completo: Desarrollador con gastos optimizados</h2>
      
      <h3>Javier, Backend Developer en Málaga (ejercicio 2026)</h3>
      
      <p><strong>Ingresos anuales:</strong> 48.000€</p>
      
      <p><strong>Gastos deducibles anuales:</strong></p>
      <table>
        <thead>
          <tr><th>Categoría</th><th>Detalle</th><th>Importe</th></tr>
        </thead>
        <tbody>
          <tr><td>Hardware amortización</td><td>Mac (800€) + Monitor (200€)</td><td>1.000€</td></tr>
          <tr><td>Software/Cloud</td><td>JetBrains + AWS + GitHub</td><td>1.850€</td></tr>
          <tr><td>Suministros 30%</td><td>Luz + Internet proporcional</td><td>420€</td></tr>
          <tr><td>Formación</td><td>Cursos + Certificación AWS</td><td>980€</td></tr>
          <tr><td>Gestoría</td><td>90€/mes × 12</td><td>1.080€</td></tr>
          <tr><td>Seguro RC profesional</td><td>Prima anual</td><td>240€</td></tr>
          <tr><td>Dietas conferencias</td><td>2 eventos nacionales</td><td>640€</td></tr>
          <tr><td>Material oficina</td><td>Fungible + accesorios</td><td>180€</td></tr>
          <tr><td><strong>Total gastos</strong></td><td></td><td><strong>6.390€</strong></td></tr>
        </tbody>
      </table>

      <p><strong>Rendimiento neto:</strong> 48.000€ - 6.390€ = <strong>41.610€</strong></p>
      
      <p><strong>Ahorro fiscal estimado (tipo marginal 30%):</strong> 6.390€ × 30% = <strong>1.917€ menos de IRPF</strong></p>

      <p><strong>IVA recuperado:</strong> Aproximadamente 1.200€ en IVA soportado que compensa con IVA repercutido.</p>

      <div class="tip-box">
        <h4>💡 Herramientas profesionales recomendadas</h4>
        <ul>
          <li><strong>Holded:</strong> Escanea tickets con móvil, categoriza automáticamente (desde 29€/mes)</li>
          <li><strong>Quipu:</strong> Conecta con banco, importa gastos, calcula modelos (desde 20€/mes)</li>
          <li><strong>Freebie:</strong> Gestoría online con OCR de facturas (desde 30€/mes)</li>
          <li><strong>Contasimple:</strong> Específico para autónomos, muy visual (desde 12€/mes)</li>
        </ul>
      </div>

      <h2>Checklist anual: No olvides deducir</h2>
      <ol>
        <li>✓ Hardware comprado (ordenador, móvil, accesorios)</li>
        <li>✓ Todas las suscripciones SaaS (revisar extracto tarjeta)</li>
        <li>✓ Suministros hogar con proporción 30%</li>
        <li>✓ Cursos online y certificaciones realizadas</li>
        <li>✓ Libros técnicos y suscripciones educativas</li>
        <li>✓ Kilometraje desplazamientos profesionales</li>
        <li>✓ Dietas de conferencias y eventos (26,67€/día)</li>
        <li>✓ Gestoría y asesor fiscal</li>
        <li>✓ Seguros profesionales (RC, equipos)</li>
        <li>✓ Publicidad y marketing digital</li>
        <li>✓ Material de oficina y fungible</li>
        <li>✓ Servicios bancarios (comisiones cuenta profesional)</li>
      </ol>

      <h2>Conservación de justificantes: Obligación legal</h2>
      <p>Según el <strong>artículo 29 LGT</strong>, debes conservar:</p>
      <ul>
        <li><strong>Facturas originales:</strong> 4 años desde presentación declaración</li>
        <li><strong>Tickets:</strong> Digitalizados y guardados (físico puede desvanecerse)</li>
        <li><strong>Contratos:</strong> Durante vigencia + 4 años</li>
        <li><strong>Extractos bancarios:</strong> Demostrar pago efectivo</li>
        <li><strong>Libro de gastos:</strong> Registro cronológico actualizado</li>
      </ul>

      <p><strong>Sanción por no justificar:</strong> Si Hacienda requiere justificante y no lo aportas, puede rechazar la deducción + recargo 15% + intereses moratorios (4,0625% en 2026).</p>
    `,
    sources: [
      { title: 'Artículo 30 Ley IRPF - Gastos deducibles', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' },
      { title: 'RD 634/2015 - Tablas de amortización', url: 'https://www.boe.es/eli/es/rd/2015/07/10/634' },
      { title: 'Gastos deducibles autónomos - AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda.html' },
      { title: 'Ley 35/2006 IRPF - BOE', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' },
      { title: 'Trámites autónomos - Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores' }
    ]
  },

  // 3. Amortización Tech
  {
    id: '3',
    slug: 'amortizacion-ordenador-portatil-autonomo-2026-deduccion',
    title: 'Cómo Amortizar tu PC o Mac como Autónomo: Deducción Máxima del 25% Anual',
    metaDescription: 'Guía práctica para amortizar equipos informáticos de más de 300€ como desarrollador autónomo. Tablas de amortización RD 634/2015 y ejemplos reales 2026.',
    category: 'gastos',
    publishDate: '2026-01-03',
    readTime: 12,
    featured: false,
    excerpt: 'Aprende a deducir correctamente un MacBook Pro o PC gaming de más de 300€ mediante amortización fiscal. Coeficiente máximo 25%, tablas oficiales y casos prácticos.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
    imageAlt: 'MacBook Pro sobre escritorio de desarrollador',
    content: `
      <h2>Gasto directo vs amortización: La clave para deducir tu equipamiento</h2>
      <p>Cuando compras un ordenador, monitor o cualquier equipo informático para tu actividad como desarrollador, la forma de deducirlo depende del precio de adquisición. La normativa fiscal española distingue entre <strong>bienes de escaso valor</strong> (gasto deducible directo) y <strong>bienes amortizables</strong> (deducción progresiva en varios ejercicios). Entender esta diferencia puede optimizar significativamente tu declaración de IRPF y evitar errores costosos en inspecciones.</p>

      <p>El <strong>Real Decreto 634/2015</strong> establece las tablas oficiales de amortización que todos los autónomos deben seguir. Para equipos informáticos, el coeficiente máximo de amortización lineal es del <strong>25% anual</strong>, lo que equivale a amortizar el bien en 4 años.</p>

      <h2>Umbral de los 300€: La línea divisoria fiscal</h2>
      
      <h3>Regla general según normativa</h3>
      <p>Según la interpretación de la <strong>Agencia Tributaria</strong> y la jurisprudencia del Tribunal Económico-Administrativo Central:</p>
      
      <ul>
        <li><strong>Inferior a 300€ (sin IVA):</strong> Gasto deducible directo en el año de compra</li>
        <li><strong>300€ o más (sin IVA):</strong> Inmovilizado material que debe amortizarse progresivamente</li>
      </ul>

      <p><strong>Ejemplos prácticos:</strong></p>
      <table>
        <thead>
          <tr><th>Artículo</th><th>Precio con IVA</th><th>Base (sin IVA)</th><th>Tratamiento</th></tr>
        </thead>
        <tbody>
          <tr><td>Monitor 27" básico</td><td>280€</td><td>231,40€</td><td>✅ Gasto directo</td></tr>
          <tr><td>Monitor 4K Dell 32"</td><td>450€</td><td>371,90€</td><td>📊 Amortizable 4 años</td></tr>
          <tr><td>Teclado mecánico</td><td>180€</td><td>148,76€</td><td>✅ Gasto directo</td></tr>
          <tr><td>MacBook Air M2</td><td>1.319€</td><td>1.090€</td><td>📊 Amortizable 4 años</td></tr>
          <tr><td>MacBook Pro 16" M3</td><td>3.199€</td><td>2.644€</td><td>📊 Amortizable 4 años</td></tr>
        </tbody>
      </table>

      <h2>Tablas oficiales de amortización (RD 634/2015)</h2>
      
      <h3>Grupo 5: Equipos para procesos de información</h3>
      <p>Según el <strong>Anexo del Real Decreto 634/2015</strong>, los equipos informáticos se encuadran en:</p>

      <table>
        <thead>
          <tr><th>Elemento</th><th>Coef. Max. Lineal</th><th>Período Max.</th><th>Años amortización</th></tr>
        </thead>
        <tbody>
          <tr><td>Equipos para procesos de información</td><td>25%</td><td>8 años</td><td>4 años típico</td></tr>
          <tr><td>Sistemas y programas informáticos</td><td>33%</td><td>6 años</td><td>3 años típico</td></tr>
          <tr><td>Equipos de telecomunicaciones</td><td>20%</td><td>10 años</td><td>5 años típico</td></tr>
        </tbody>
      </table>

      <p><strong>Importante:</strong> El coeficiente del 25% es el <strong>máximo permitido</strong>. Puedes amortizar menos, pero nunca más. Si lo superas, Hacienda puede corregir la amortización en una inspección y reclamarte impuestos + intereses.</p>

      <h3>¿Qué incluye "equipos para procesos de información"?</h3>
      <ul>
        <li>Ordenadores de sobremesa y portátiles</li>
        <li>Servidores y equipos de red (switches, routers profesionales)</li>
        <li>Monitores y pantallas</li>
        <li>Periféricos de alto valor (impresoras láser, escaners profesionales)</li>
        <li>Sistemas de almacenamiento (NAS, discos externos de gran capacidad)</li>
        <li>Tablets y dispositivos híbridos (iPad Pro, Surface) si uso profesional</li>
      </ul>

      <h2>Cálculo práctico de amortización lineal</h2>
      
      <h3>Fórmula básica</h3>
      <pre><code>Amortización anual = Precio de adquisición (sin IVA) × Coeficiente amortización</code></pre>

      <h3>Caso práctico 1: MacBook Pro 16" M3 Max (2.999€ con IVA)</h3>
      
      <p><strong>Datos de compra:</strong></p>
      <ul>
        <li>Fecha: 15 enero 2026</li>
        <li>Precio con IVA: 2.999€</li>
        <li>Base imponible: 2.999€ / 1,21 = <strong>2.478,51€</strong></li>
        <li>Coeficiente aplicado: 25%</li>
      </ul>

      <p><strong>Tabla de amortización 4 años:</strong></p>
      <table>
        <thead>
          <tr><th>Año fiscal</th><th>Cuota amortización</th><th>Amortizado acumulado</th><th>Valor residual</th></tr>
        </thead>
        <tbody>
          <tr><td>2026</td><td>619,63€</td><td>619,63€</td><td>1.858,88€</td></tr>
          <tr><td>2027</td><td>619,63€</td><td>1.239,26€</td><td>1.239,25€</td></tr>
          <tr><td>2028</td><td>619,63€</td><td>1.858,89€</td><td>619,62€</td></tr>
          <tr><td>2029</td><td>619,62€</td><td>2.478,51€</td><td>0€</td></tr>
        </tbody>
      </table>

      <p><strong>Interpretación fiscal:</strong> Cada año deduces 619,63€ como gasto en tu declaración de IRPF. Esto reduce tu base imponible y, por tanto, el impuesto a pagar. Con un tipo marginal del 30%, el ahorro fiscal anual sería de aproximadamente 186€.</p>

      <h3>Caso práctico 2: Compra a mitad de año (prorrateo)</h3>
      
      <p><strong>Situación:</strong> Compras el MacBook el 1 de julio 2026</p>
      
      <ul>
        <li>Año 2026: Solo 6 meses de amortización</li>
        <li>Cuota 2026: 619,63€ × (6 meses / 12 meses) = <strong>309,82€</strong></li>
        <li>Los años siguientes: cuota completa de 619,63€</li>
        <li>Último año (2030): 619,63€ × 6/12 = 309,81€</li>
      </ul>

      <p><strong>Regla de oro:</strong> Si compras equipamiento en los últimos meses del año (octubre-diciembre), considera esperar a enero para maximizar la deducción del primer año completo.</p>

      <h2>Método de amortización degresivo vs lineal</h2>
      
      <h3>Amortización lineal (más común)</h3>
      <p>Cuota constante todos los años. Es el método más sencillo y el que usa el 95% de autónomos.</p>

      <h3>Amortización degresiva (avanzada)</h3>
      <p>Permite amortizar más en los primeros años. El coeficiente máximo se multiplica por factores:</p>
      <ul>
        <li>Período < 5 años: Factor 1,5</li>
        <li>Período 5-8 años: Factor 2</li>
        <li>Período > 8 años: Factor 2,5</li>
      </ul>

      <p><strong>Para equipos informáticos (período 8 años):</strong></p>
      <pre><code>Coeficiente degresivo = 25% × 2 = 50% primer año (sobre valor pendiente)</code></pre>

      <p><strong>Ejemplo MacBook 2.478,51€ con degresiva:</strong></p>
      <table>
        <thead>
          <tr><th>Año</th><th>Base</th><th>Cuota (50%)</th><th>Acumulado</th></tr>
        </thead>
        <tbody>
          <tr><td>2026</td><td>2.478,51€</td><td>1.239,26€</td><td>1.239,26€</td></tr>
          <tr><td>2027</td><td>1.239,25€</td><td>619,63€</td><td>1.858,89€</td></tr>
          <tr><td>2028</td><td>619,62€</td><td>309,81€</td><td>2.168,70€</td></tr>
          <tr><td>2029</td><td>309,81€</td><td>309,81€</td><td>2.478,51€</td></tr>
        </tbody>
      </table>

      <p><strong>Ventaja:</strong> Deduces mucho más los primeros años (útil si facturas alto al inicio). <strong>Desventaja:</strong> Mayor complejidad contable.</p>

      <h2>Registro contable y justificación</h2>
      
      <h3>Documentación obligatoria</h3>
      <p>Para que Hacienda acepte la amortización, debes conservar:</p>
      <ol>
        <li><strong>Factura de compra:</strong> Con tu nombre, NIF, descripción detallada del equipo, precio y fecha</li>
        <li><strong>Justificante de pago:</strong> Extracto bancario o ticket de tarjeta</li>
        <li><strong>Libro de bienes de inversión:</strong> Registro de cada bien amortizable con:
          <ul>
            <li>Fecha de adquisición</li>
            <li>Descripción del bien</li>
            <li>Precio de adquisición</li>
            <li>Método y coeficiente de amortización</li>
            <li>Cuotas anuales</li>
          </ul>
        </li>
        <li><strong>Libro de gastos:</strong> Anotación anual de la cuota de amortización</li>
      </ol>

      <h3>Modelo libro de bienes de inversión</h3>
      <pre><code>
Fecha: 15/01/2026
Descripción: MacBook Pro 16" M3 Max 48GB RAM 1TB SSD
Serie: C02ABC123XYZ
Precio: 2.478,51€ (sin IVA)
Coeficiente: 25% lineal
Vida útil: 4 años
Cuota anual: 619,63€
Uso: 100% profesional (desarrollo software)
      </code></pre>

      <h2>Venta o baja del equipo antes de amortizarlo totalmente</h2>
      
      <h3>Escenario: Vendes el MacBook en el año 2</h3>
      <p><strong>Situación:</strong> En 2027 vendes el MacBook por 1.500€ (ya has amortizado 1.239,26€)</p>
      
      <ul>
        <li>Valor contable pendiente: 2.478,51€ - 1.239,26€ = <strong>1.239,25€</strong></li>
        <li>Precio de venta: 1.500€</li>
        <li>Ganancia patrimonial: 1.500€ - 1.239,25€ = <strong>260,75€</strong></li>
        <li>Esta ganancia tributa en tu IRPF como <strong>incremento de patrimonio</strong></li>
      </ul>

      <p><strong>Baja por obsolescencia:</strong> Si el equipo se rompe irreparablemente, puedes dar de baja el valor residual como pérdida. Debes justificar la rotura (certificado técnico, fotos, etc.).</p>

      <h2>Equipos de segunda mano y usados</h2>
      
      <h3>¿Se puede amortizar?</h3>
      <p><strong>Sí</strong>, puedes amortizar equipos de segunda mano que compres. El tratamiento es igual:</p>
      <ul>
        <li>Precio de adquisición: Lo que pagaste (con factura)</li>
        <li>Coeficiente: Mismo 25% máximo</li>
        <li>Vida útil: Desde tu compra, no desde fabricación</li>
      </ul>

      <p><strong>Ejemplo:</strong> Compras MacBook Pro de 2021 por 1.200€ en 2026. Amortizas 1.200€ × 25% = 300€/año durante 4 años.</p>

      <h2>IVA de la compra: Deducción inmediata</h2>
      
      <p><strong>Importante diferenciador:</strong> Aunque el precio se amortice progresivamente en IRPF, el <strong>IVA se deduce íntegramente</strong> en el trimestre de compra (modelo 303).</p>

      <p><strong>Ejemplo MacBook 2.999€:</strong></p>
      <ul>
        <li>IVA soportado: 2.999€ - 2.478,51€ = <strong>520,49€</strong></li>
        <li>Este IVA lo deduces en el modelo 303 del 1T 2026 (compra enero)</li>
        <li>La base (2.478,51€) se amortiza en 4 años</li>
      </ul>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Si planeas comprar equipamiento de alto valor (>2.000€), hazlo en <strong>enero</strong> para maximizar la deducción del primer año. Usa herramientas como <strong>Holded o Quipu</strong> que llevan automáticamente el libro de bienes de inversión y calculan amortizaciones. Además, considera comprar equipos modulares (monitor + ordenador separados) para aprovechar el umbral de 300€: un monitor de 280€ es gasto directo, otro de 280€ también. Si estás cerca de un tramo de cotización superior, la amortización reduce rendimiento neto y puede bajarte de tramo.</p>
      </div>

      <h2>Software y licencias: Amortización diferente</h2>
      
      <h3>Licencias perpetuas > 300€</h3>
      <p>Si compras una licencia perpetua (pago único, tuya para siempre) por más de 300€:</p>
      <ul>
        <li>Coeficiente máximo: <strong>33% anual</strong></li>
        <li>Años de amortización: 3 años típicamente</li>
        <li>Ejemplo: Licencia JetBrains All Products perpetua 649€ → 216€/año durante 3 años</li>
      </ul>

      <h3>Suscripciones anuales o mensuales</h3>
      <p>Las suscripciones recurrentes (GitHub Pro, Adobe CC, AWS, etc.) son <strong>gastos corrientes</strong>, no amortizables:</p>
      <ul>
        <li>Se deducen íntegramente en el ejercicio que se pagan</li>
        <li>No importa el importe total anual</li>
        <li>GitHub Pro 55€/año → Gasto directo</li>
        <li>Adobe CC 732€/año → Gasto directo (no amortizable)</li>
      </ul>

      <h2>Checklist: Antes de amortizar un equipo</h2>
      <ol>
        <li>✓ Precio con IVA > 362,99€ (300€ sin IVA)?</li>
        <li>✓ Tengo factura completa a mi nombre y NIF?</li>
        <li>✓ Justificante de pago conservado?</li>
        <li>✓ He anotado en libro de bienes de inversión?</li>
        <li>✓ Coeficiente ≤ 25% para equipos informáticos?</li>
        <li>✓ Si compra a mitad de año, he prorrateado?</li>
        <li>✓ IVA deducido en modelo 303 del trimestre?</li>
        <li>✓ Guardaré documentación 4 años mínimo?</li>
      </ol>
    `,
    sources: [
      { title: 'Real Decreto 634/2015 - Tablas de amortización (BOE)', url: 'https://www.boe.es/eli/es/rd/2015/07/10/634' },
      { title: 'Ley 35/2006 IRPF - Artículo 30', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' },
      { title: 'Consultas tributarias - Dirección General de Tributos', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda.html' },
      { title: 'Manuales prácticos IRPF - AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos.html' }
    ]
  },

  // 4. Alta Freelance IAE
  {
    id: '4',
    slug: 'alta-autonomo-desarrollador-iae-763-845-guia-2026',
    title: 'Darse de Alta como Developer Freelance: IAE 763 vs 845 y Pasos Completos 2026',
    metaDescription: 'Guía paso a paso para darte de alta como autónomo programador en España. Diferencias entre IAE 763 (programadores) y 845 (consultoría), modelo 036/037 y trámites en Seguridad Social con tarifa plana.',
    category: 'impuestos',
    publishDate: '2026-01-02',
    readTime: 14,
    featured: true,
    excerpt: 'Todo lo que necesitas saber para darte de alta como desarrollador freelance en España: elegir el IAE correcto (763 vs 845), modelo 036, RETA, tarifa plana y obligaciones fiscales.',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=800&auto=format&fit=crop',
    imageAlt: 'Documentos oficiales y formularios de alta de autónomo',
    content: `
      <h2>Tu primer paso como freelance: Guía completa para darte de alta</h2>
      <p>Darse de alta como autónomo puede parecer un proceso complejo, pero con la información correcta es más sencillo de lo que parece. Como desarrollador, debes tomar tres decisiones clave: <strong>elegir el epígrafe correcto del IAE</strong> (Impuesto de Actividades Económicas), <strong>decidir tu régimen fiscal</strong> (estimación directa simplificada suele ser lo más común) y <strong>calcular tu base de cotización inicial</strong> en la Seguridad Social según tus ingresos previstos. Esta guía te lleva paso a paso por todo el proceso actualizado a 2026.</p>

      <p>Según datos de la Seguridad Social de 2025, más de <strong>4,2 millones de autónomos</strong> están dados de alta en España, y el sector tecnológico representa el 8,5% del total. El proceso de alta se ha simplificado enormemente en los últimos años gracias a la digitalización, pudiendo completarse íntegramente online en menos de 30 minutos.</p>

      <h2>Paso 1: Elegir el IAE correcto - 763 vs 845 vs 843</h2>
      
      <h3>¿Qué es el IAE?</h3>
      <p>El <strong>Impuesto de Actividades Económicas</strong> es un tributo que grava el ejercicio de actividades empresariales, profesionales o artísticas. Aunque la mayoría de autónomos están <strong>exentos de pagar</strong> (solo lo pagan si facturan más de 1 millón €/año), es obligatorio darse de alta en el epígrafe correspondiente a tu actividad.</p>

      <h3>Epígrafes para desarrolladores y programadores</h3>
      <table>
        <thead>
          <tr><th>Epígrafe</th><th>Descripción completa</th><th>Ideal para</th><th>Consideraciones</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>763</strong></td>
            <td>Servicios de programadores</td>
            <td>Desarrollo de software, programación, análisis de sistemas, mantenimiento aplicaciones</td>
            <td>✅ Más común para developers. No requiere titulación específica</td>
          </tr>
          <tr>
            <td><strong>845</strong></td>
            <td>Servicios de ingeniería y arquitectura técnica</td>
            <td>Consultoría IT, arquitectura de sistemas, auditorías técnicas, asesoría especializada</td>
            <td>⚠️ Puede requerir colegiación profesional en algunos casos. Más regulado</td>
          </tr>
          <tr>
            <td><strong>843</strong></td>
            <td>Procesos de datos</td>
            <td>Procesamiento de datos, servicios de hosting, administración de sistemas</td>
            <td>Para servicios centrados en infraestructura más que desarrollo</td>
          </tr>
          <tr>
            <td><strong>731</strong></td>
            <td>Publicidad, relaciones públicas</td>
            <td>Diseño gráfico, UX/UI especializado, branding digital</td>
            <td>Si tu actividad principal es diseño más que código</td>
          </tr>
        </tbody>
      </table>

      <h3>¿Cuál elegir? Recomendaciones prácticas</h3>
      <ul>
        <li><strong>IAE 763:</strong> Si tu trabajo principal es escribir código, desarrollar aplicaciones web/móviles, crear APIs, hacer integraciones. Es el 85% de los developers</li>
        <li><strong>IAE 845:</strong> Si ofreces consultoría estratégica de alto nivel, auditorías de seguridad, arquitecturas empresariales complejas, y tienes titulación universitaria (Ing. Informática)</li>
        <li><strong>Múltiples epígrafes:</strong> Puedes darte de alta en varios sin coste adicional. Ejemplo: 763 (desarrollo) + 731 (diseño) si haces fullstack con mucho UX/UI</li>
      </ul>

      <p><strong>Mi recomendación personal:</strong> El IAE <strong>763</strong> cubre el 90% de situaciones de developers. Es más flexible, no implica obligaciones colegiales y Hacienda lo acepta para toda la gama de servicios de programación. Solo considera el 845 si tus clientes específicamente requieren un perfil "consultor/ingeniero" por temas contractuales corporativos.</p>

      <h2>Paso 2: Alta censal en Hacienda (Modelo 036/037)</h2>
      
      <h3>Modelo 036 vs 037: ¿Cuál usar?</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Modelo 036</th><th>Modelo 037</th></tr>
        </thead>
        <tbody>
          <tr><td>Complejidad</td><td>Completo (todas las opciones)</td><td>Simplificado (opcioneshabituales)</td></tr>
          <tr><td>Páginas</td><td>7-8 páginas</td><td>3-4 páginas</td></tr>
          <tr><td>Ideal para</td><td>Sociedades, casos complejos</td><td>👤 Autónomos individuales</td></tr>
          <tr><td>Campos IAE</td><td>Múltiples epígrafes complejos</td><td>1-2 epígrafes</td></tr>
          <tr><td>Recomendación</td><td>Si tienes asesor</td><td>✅ Developer estándar</td></tr>
        </tbody>
      </table>

      <h3>Datos obligatorios en el modelo 037</h3>
      <ol>
        <li><strong>Identificación:</strong> NIF, nombre completo, fecha de nacimiento, nacionalidad</li>
        <li><strong>Domicilio fiscal:</strong> Donde desarrollas la actividad (normalmente tu casa si teletrabajo)</li>
        <li><strong>Epígrafe IAE:</strong> 763 (o el que elijas)</li>
        <li><strong>Régimen de IVA:</strong> General (21%) para desarrolladores</li>
        <li><strong>Estimación rendimientos:</strong> Directa simplificada (lo más común)</li>
        <li><strong>Fecha inicio actividad:</strong> Primer día que facturas o firmas contrato</li>
        <li><strong>ROI:</strong> Si vas a facturar a la UE, marca casilla 582 "Alta en operadores intracomunitarios"</li>
      </ol>

      <h3>Proceso online paso a paso</h3>
      <ol>
        <li>Accede a <a href="https://sede.agenciatributaria.gob.es/" target="_blank" rel="noopener">sede.agenciatributaria.gob.es</a></li>
        <li>Identificación: Certificado digital, Cl@ve PIN o número de referencia</li>
        <li>Busca: "Modelo 037 - Declaración censal simplificada"</li>
        <li>Rellena el formulario web (15-20 minutos)</li>
        <li><strong>Importante:</strong> Descarga el justificante en PDF y guárdalo</li>
        <li>Recibirás confirmación en 24-48h (a veces inmediato)</li>
      </ol>

      <h3>Errores comunes a evitar</h3>
      <ul>
        <li>❌ Fecha de inicio anterior a hoy: Puedes tener problemas. Si ya facturaste, decláralo honestamente</li>
        <li>❌ No marcar ROI si facturas a UE: Te lo pedirán después y retrasa cobros</li>
        <li>❌ Poner domicilio de padres si no trabajas allí: El domicilio fiscal debe ser real</li>
        <li>❌ Olvidar descargar justificante: Lo necesitas para la Seguridad Social</li>
      </ul>

      <h2>Paso 3: Alta en la Seguridad Social (RETA)</h2>
      
      <h3>¿Qué es el RETA?</h3>
      <p>El <strong>Régimen Especial de Trabajadores Autónomos</strong> es el sistema de Seguridad Social para freelancers. Te proporciona:</p>
      <ul>
        <li>Cobertura sanitaria (médico, hospitales)</li>
        <li>Prestación por IT (enfermedad/accidente)</li>
        <li>Prestación por maternidad/paternidad</li>
        <li>Futura pensión de jubilación</li>
        <li>Cese de actividad (paro de autónomos bajo condiciones)</li>
      </ul>

      <h3>Plazo de alta: 60 días naturales</h3>
      <p>Tienes <strong>60 días desde el alta en Hacienda</strong> para darte de alta en RETA. Pero atención:</p>
      <ul>
        <li>Si te das de alta <strong>antes de empezar a facturar</strong>: Pagarás cuotas sin ingresar aún</li>
        <li>Si te das de alta <strong>el mismo día que facturas</strong>: Ideal, ahorras cuotas</li>
        <li>Si te das de alta <strong>después de 60 días</strong>: Sanción + cuotas retroactivas</li>
      </ul>

      <p><strong>Mi consejo:</strong> Date de alta en RETA el <strong>mismo día o 1-2 días antes</strong> de emitir tu primera factura o firmar tu primer contrato profesional.</p>

      <h3>Sistema de cotización por tramos 2026</h3>
      <p>Desde 2023, los autónomos cotizan según sus <strong>rendimientos netos previstos</strong>. En 2026, los tramos son:</p>

      <table>
        <thead>
          <tr><th>Tramo</th><th>Rendimiento neto mensual</th><th>Cuota mensual 2026</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Hasta 670€</td><td>225€</td></tr>
          <tr><td>2</td><td>670 - 900€</td><td>250€</td></tr>
          <tr><td>3</td><td>900 - 1.166€</td><td>267€</td></tr>
          <tr><td>4</td><td>1.166 - 1.300€</td><td>291€</td></tr>
          <tr><td>5-6</td><td>1.300 - 1.700€</td><td>294€</td></tr>
          <tr><td>10</td><td>2.330 - 2.760€</td><td>340€</td></tr>
          <tr><td>15</td><td>> 6.000€</td><td>530€</td></tr>
        </tbody>
      </table>

      <p><strong>¿Qué tramo elegir al principio?</strong></p>
      <ul>
        <li>Si no tienes clientes aún: Tramo 1 o 2 (225-250€)</li>
        <li>Si tienes contrato firmado: Calcula rendimiento mensual previsto y elige tramo correspondiente</li>
        <li>Puedes <strong>cambiar de tramo hasta 6 veces al año</strong></li>
        <li>Al final del año, SS regulariza según tus ingresos reales declarados en IRPF</li>
      </ul>

      <h3>Tarifa plana para nuevos autónomos 2026</h3>
      <p>Si es tu <strong>primera vez como autónomo</strong> (o han pasado +2 años desde tu última alta), puedes acogerte a la <strong>tarifa plana</strong>:</p>

      <table>
        <thead>
          <tr><th>Período</th><th>Cuota reducida</th><th>Condiciones</th></tr>
        </thead>
        <tbody>
          <tr><td>Meses 1-12</td><td><strong>80€/mes</strong></td><td>Automático si nuevo autónomo</td></tr>
          <tr><td>Meses 13-18</td><td>80€/mes</td><td>Si rendimientos < SMI (1.134€/mes 2026)</td></tr>
          <tr><td>Meses 19-24</td><td>80€/mes</td><td>Si rendimientos < SMI</td></tr>
          <tr><td>A partir mes 25</td><td>Cuota normal por tramos</td><td>-</td></tr>
        </tbody>
      </table>

      <p><strong>Requisitos tarifa plana:</strong></p>
      <ul>
        <li>No haber estado de alta como autónomo en los últimos 2 años (3 años si ya usaste tarifa plana antes)</li>
        <li>No tener deudas con SS ni Hacienda</li>
        <li>No ser autónomo societario (administrador de SL)</li>
      </ul>

      <h3>Proceso de alta en Import@ss</h3>
      <ol>
        <li>Accede a <a href="https://portal.seg-social.gob.es/wps/portal/importass/" target="_blank" rel="noopener">Import@ss</a></li>
        <li>Identificación: Cl@ve, certificado digital o SMS</li>
        <li>Menú: "Afiliación > Alta de trabajador autónomo"</li>
        <li>Adjunta justificante del modelo 037 de Hacienda</li>
        <li>Elige base de cotización (tramo)</li>
        <li>Si aplica, solicita tarifa plana (se marca automáticamente si cumples requisitos)</li>
        <li>Confirma y descarga resolución</li>
        <li><strong>Plazo:</strong> Resolución en 24-72 horas</li>
      </ol>

      <h2>Paso 4: Obligaciones fiscales tras el alta</h2>
      
      <h3>Modelos trimestrales obligatorios</h3>
      <table>
        <thead>
          <tr><th>Modelo</th><th>Concepto</th><th>Plazo</th><th>Aplica si...</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>303</strong></td><td>IVA trimestral</td><td>1-20 del mes siguiente</td><td>Siempre (todos los autónomos)</td></tr>
          <tr><td><strong>130</strong></td><td>Pago fraccionado IRPF</td><td>1-20 del mes siguiente</td><td>Si > 30% ingresos sin retención</td></tr>
          <tr><td><strong>349</strong></td><td>Operaciones intracomunitarias</td><td>1-30 del mes siguiente</td><td>Solo si facturas a UE</td></tr>
        </tbody>
      </table>

      <h3>Declaración anual</h3>
      <ul>
        <li><strong>IRPF (Renta):</strong> Abril-junio del año siguiente</li>
        <li><strong>Resumen anual IVA (modelo 390):</strong> Enero del año siguiente</li>
      </ul>

      <h3>Facturación: Requisitos legales</h3>
      <p>Desde tu primer día como autónomo, tus facturas deben incluir:</p>
      <ul>
        <li>Numeración correlativa (001/2026, 002/2026...)</li>
        <li>Tus datos completos: Nombre, NIF, dirección fiscal</li>
        <li>Datos del cliente: Nombre/razón social, NIF, dirección</li>
        <li>Descripción detallada del servicio</li>
        <li>Base imponible + IVA 21%</li>
        <li>Si cliente español empresa: Retención IRPF 15% (7% los 3 primeros años)</li>
      </ul>

      <h2>Caso práctico completo: Carlos, developer junior</h2>
      
      <h3>Situación inicial (enero 2026)</h3>
      <ul>
        <li>Carlos, 26 años, ha trabajado 2 años como empleado</li>
        <li>Consigue primer cliente freelance: startup española, proyecto 3.000€/mes durante 6 meses</li>
        <li>Trabaja desde casa (piso alquilado en Madrid)</li>
        <li>Gastos previstos: 500€/mes (software, hardware amortizado, gestoría)</li>
      </ul>

      <h3>Pasos que sigue Carlos</h3>
      <p><strong>Día 1 (15 enero):</strong> Firma contrato con cliente para comenzar 1 febrero</p>
      
      <p><strong>Día 2 (16 enero):</strong></p>
      <ol>
        <li>Modelo 037 online en AEAT: IAE 763, domicilio fiscal su piso, inicio actividad 1 febrero 2026</li>
        <li>Descarga justificante</li>
      </ol>

      <p><strong>Día 3 (17 enero):</strong></p>
      <ol>
        <li>Alta en Import@ss: RETA desde 1 febrero</li>
        <li>Elige tramo 5 (rendimiento previsto 2.500€/mes)</li>
        <li>Solicita tarifa plana (nunca ha sido autónomo): <strong>80€/mes</strong> los primeros 12 meses</li>
      </ol>

      <p><strong>Día 10 (26 enero):</strong></p>
      <ul>
        <li>Contrata gestoría online (Freebie): 40€/mes</li>
        <li>Configura Holded para facturación</li>
        <li>Abre cuenta bancaria profesional (N26 Business, sin comisiones)</li>
      </ul>

      <p><strong>1 febrero:</strong> Comienza a trabajar oficialmente</p>
      
      <p><strong>28 febrero:</strong> Emite primera factura</p>
      <pre><code>
Factura: 001/2026
Cliente: Startup SL (B12345678)
Servicio: Desarrollo frontend React - Febrero 2026
Base: 3.000€
IVA (21%): 630€
Retención IRPF (7%): -210€ (primer año = 7%)
TOTAL A PAGAR: 3.420€
      </code></pre>

      <p><strong>20 abril:</strong> Primera declaración trimestral (1T 2026)</p>
      <ul>
        <li><strong>Modelo 303 IVA:</strong> IVA repercutido 630€ - IVA soportado 84€ (software) = <strong>546€ a ingresar</strong></li>
        <li><strong>Modelo 130:</strong> No obligado (cliente le retiene el 7%)</li>
        <li><strong>Cuota SS pagada:</strong> 80€ × 2 meses (feb+mar) = 160€</li>
      </ul>

      <h3>Balance primer trimestre Carlos</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Importe</th></tr>
        </thead>
        <tbody>
          <tr><td>Ingresos brutos (1 mes)</td><td>3.000€</td></tr>
          <tr><td>IVA cobrado</td><td>630€</td></tr>
          <tr><td>Retención IRPF (devuelve cliente)</td><td>-210€</td></tr>
          <tr><td><strong>Cobrado total</strong></td><td><strong>3.420€</strong></td></tr>
          <tr><td>IVA a pagar (trimestral)</td><td>-546€</td></tr>
          <tr><td>Cuota autónomo (2 meses)</td><td>-160€</td></tr>
          <tr><td>Gestoría (2 meses)</td><td>-80€</td></tr>
          <tr><td>Software/gastos</td><td>-100€</td></tr>
          <tr><td><strong>Beneficio neto (2 meses)</strong></td><td><strong>2.534€</strong></td></tr>
        </tbody>
      </table>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Date de alta un <strong>día 1 del mes</strong> para aprovechar el mes completo de tarifa plana. Si te das de alta el día 15, pagas cuota completa ese mes. Además, <strong>no tengas miedo al papeleo</strong>: con una buena gestoría online (Freebie, Autonómolo, TaxScouts) por 30-50€/mes, ellos hacen todos los modelos y solo tú facturas. Y muy importante: <strong>reserva el 30% de cada factura</strong> en cuenta separada para IVA + IRPF + cuota SS. Así nunca tendrás sustos de liquidez.</p>
      </div>

      <h2>Checklist final: Antes de empezar como freelance</h2>
      <ol>
        <li>✓ ¿Tengo certificado digital o Cl@ve activado?</li>
        <li>✓ ¿He decidido el IAE correcto (763 para desarrollo)?</li>
        <li>✓ ¿Sé mi fecha de inicio de actividad real?</li>
        <li>✓ ¿He calculado mis rendimientos previstos para elegir tramo SS?</li>
        <li>✓ ¿Cumplo requisitos para tarifa plana (nuevo autónomo)?</li>
        <li>✓ ¿Tengo cuenta bancaria profesional o la voy a abrir?</li>
        <li>✓ ¿He contratado gestoría o software de facturación?</li>
        <li>✓ ¿Necesito ROI porque voy a facturar a Europa?</li>
        <li>✓ ¿He guardado todos los justificantes (PDF) de Hacienda y SS?</li>
        <li>✓ ¿Sé cómo hacer una factura legal con retención?</li>
      </ol>

      <h2>Recursos oficiales y herramientas</h2>
      
      <h3>Trámites oficiales</h3>
      <ul>
        <li><strong>Hacienda (modelo 037):</strong> <a href="https://sede.agenciatributaria.gob.es/" target="_blank">sede.agenciatributaria.gob.es</a></li>
        <li><strong>Seguridad Social (RETA):</strong> <a href="https://portal.seg-social.gob.es/wps/portal/importass/" target="_blank">Import@ss</a></li>
        <li><strong>Consulta epígrafes IAE:</strong> Buscador en sede AEAT</li>
      </ul>

      <h3>Gestorías online recomendadas</h3>
      <ul>
        <li><strong>Freebie:</strong> 30€/mes, muy visual, soporte rápido</li>
        <li><strong>TaxDown Autónomos:</strong> 25€/mes, especialistas en tech</li>
        <li><strong>Autonómolo:</strong> 35€/mes, incluye asesoría ilimitada</li>
        <li><strong>Quipu:</strong> 20€/mes, más DIY pero económico</li>
      </ul>

      <h3>Software de facturación</h3>
      <ul>
        <li><strong>Holded:</strong> Completo, desde 29€/mes</li>
        <li><strong>Facturas del Hogar:</strong> Gratis, básico pero suficiente</li>
        <li><strong>Quaderno:</strong> Especializado en SaaS internacional, desde 49$/mes</li>
        <li><strong>Freebie (gestoría):</strong> Incluye facturación en el precio</li>
      </ul>
    `,
    sources: [
      { title: 'Modelo 036/037 - Sede Electrónica AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml' },
      { title: 'Epígrafes IAE - Agencia Tributaria', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda.html' },
      { title: 'Alta trabajadores autónomos - Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores' },
      { title: 'Tarifa plana autónomos - Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores' },
      { title: 'Real Decreto-ley 13/2022 - BOE', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482' }
    ]
  },

  // 5. Tramos 2026
  {
    id: '5',
    slug: 'tramos-cotizacion-autonomos-2026-rendimientos-netos',
    title: 'Nuevos Tramos de Cotización Autónomos 2026: Sistema de Rendimientos Netos',
    metaDescription: 'Tabla completa de tramos de cotización por ingresos reales 2026. Cómo calcular tu cuota de autónomo según rendimientos netos mensuales.',
    category: 'cotizacion',
    publishDate: '2026-01-01',
    readTime: 9,
    featured: true,
    excerpt: 'El sistema de cotización por ingresos reales 2026 explicado al detalle. Tabla de tramos, cálculo del rendimiento neto y regularización anual.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    imageAlt: 'Gráfico de barras representando tramos de cotización',
    content: `
      <h2>Cómo funciona el nuevo sistema de cotización por ingresos reales</h2>
      <p>Desde 2023, los autónomos en España cotizan en función de sus <strong>rendimientos netos reales</strong>, un cambio radical respecto al sistema anterior de base libre. En 2026, los tramos se han ajustado según lo establecido en el <strong>Real Decreto-ley 13/2022</strong>. Como desarrollador, entender este sistema es crucial para planificar tus finanzas.</p>

      <h2>🔑 3 Puntos Clave del Sistema 2026</h2>

      <h3>1. Tabla oficial de tramos de cotización 2026</h3>
      <table>
        <thead>
          <tr><th>Tramo</th><th>Rendimiento neto mensual</th><th>Cuota mensual</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Hasta 670€</td><td>225€</td></tr>
          <tr><td>2</td><td>670,01€ - 900€</td><td>250€</td></tr>
          <tr><td>3</td><td>900,01€ - 1.166,70€</td><td>267€</td></tr>
          <tr><td>4</td><td>1.166,71€ - 1.300€</td><td>291€</td></tr>
          <tr><td>5</td><td>1.300,01€ - 1.500€</td><td>294€</td></tr>
          <tr><td>6</td><td>1.500,01€ - 1.700€</td><td>294€</td></tr>
          <tr><td>7</td><td>1.700,01€ - 1.850€</td><td>310€</td></tr>
          <tr><td>8</td><td>1.850,01€ - 2.030€</td><td>315€</td></tr>
          <tr><td>9</td><td>2.030,01€ - 2.330€</td><td>320€</td></tr>
          <tr><td>10</td><td>2.330,01€ - 2.760€</td><td>340€</td></tr>
          <tr><td>11</td><td>2.760,01€ - 3.190€</td><td>360€</td></tr>
          <tr><td>12</td><td>3.190,01€ - 3.620€</td><td>380€</td></tr>
          <tr><td>13</td><td>3.620,01€ - 4.050€</td><td>400€</td></tr>
          <tr><td>14</td><td>4.050,01€ - 6.000€</td><td>450€</td></tr>
          <tr><td>15</td><td>Más de 6.000€</td><td>530€</td></tr>
        </tbody>
      </table>

      <h3>2. Cálculo del rendimiento neto para cotización</h3>
      <p>El rendimiento neto para elegir tu tramo se calcula con una <strong>deducción del 7%</strong> por gastos de difícil justificación:</p>
      <pre><code>Rendimiento neto mensual = ((Facturación anual - Gastos) × 0.93) / 12</code></pre>
      <p><strong>Ejemplo:</strong></p>
      <ul>
        <li>Facturación anual: 72.000€</li>
        <li>Gastos deducibles: 8.000€</li>
        <li>Rendimiento neto anual: (72.000 - 8.000) × 0.93 = 59.520€</li>
        <li>Rendimiento neto mensual: 59.520€ / 12 = <strong>4.960€</strong></li>
        <li>Tramo correspondiente: 14 → <strong>450€/mes</strong></li>
      </ul>

      <h3>3. Regularización anual obligatoria</h3>
      <p>Al finalizar el ejercicio, la Seguridad Social <strong>compara lo cotizado</strong> con tus rendimientos reales declarados en IRPF:</p>
      <ul>
        <li><strong>Si cotizaste de menos:</strong> Recibirás una carta para pagar la diferencia</li>
        <li><strong>Si cotizaste de más:</strong> Te devolverán el exceso</li>
        <li>La regularización se realiza en el <strong>segundo semestre del año siguiente</strong></li>
      </ul>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Si tus ingresos son <strong>variables</strong> (meses con más proyectos, otros más flojos), elige un tramo ligeramente superior para evitar sorpresas en la regularización. Puedes <strong>cambiar de tramo hasta 6 veces al año</strong> desde la sede electrónica de la Seguridad Social. Además, recuerda que la cuota de autónomo es un <strong>gasto deducible</strong> en tu IRPF, lo que reduce tu base imponible.</p>
      </div>

      <h2>Comparativa: Cuotas 2024 vs 2026</h2>
      <p>El sistema ha ido ajustando cuotas progresivamente. Un desarrollador con 4.000€/mes de rendimiento neto:</p>
      <ul>
        <li><strong>2024:</strong> Cuota aproximada 420€/mes</li>
        <li><strong>2025:</strong> Cuota aproximada 440€/mes</li>
        <li><strong>2026:</strong> Cuota 450€/mes (tramo 14)</li>
      </ul>
    `,
    sources: [
      { title: 'Real Decreto-ley 13/2022 cotización autónomos - BOE', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482' },
      { title: 'Cotización trabajadores autónomos - Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores' },
      { title: 'Tesorería General Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Inicio' }
    ]
  },

  // 6. Autónomo vs SL
  {
    id: '6',
    slug: 'autonomo-vs-sociedad-limitada-cuando-crear-empresa-2026',
    title: 'Autónomo vs Sociedad Limitada: ¿Cuándo Compensa Crear una Empresa?',
    metaDescription: 'Análisis fiscal completo para desarrolladores: diferencias entre autónomo y SL, umbrales de rentabilidad y cuándo merece la pena constituir sociedad.',
    category: 'impuestos',
    publishDate: '2025-12-28',
    readTime: 13,
    featured: false,
    excerpt: 'Comparativa fiscal detallada entre ser autónomo persona física y crear una Sociedad Limitada. Descubre el umbral de ingresos donde compensa dar el salto.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
    imageAlt: 'Empresario analizando gráficos de decisión empresarial',
    content: `
      <h2>La pregunta del millón: ¿Cuándo crear una Sociedad Limitada?</h2>
      <p>"¿Cuándo me compensa crear una SL?" es probablemente la pregunta más frecuente entre desarrolladores freelance que empiezan a facturar cifras considerables. La respuesta no es sencilla, ya que depende de múltiples factores: <strong>nivel de ingresos, gastos, reinversión, protección patrimonial</strong> y objetivos personales.</p>

      <h2>🔑 3 Factores Clave en la Decisión</h2>

      <h3>1. Comparativa fiscal: IRPF vs Impuesto de Sociedades</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Autónomo (IRPF)</th><th>Sociedad Limitada (IS)</th></tr>
        </thead>
        <tbody>
          <tr><td>Tipo impositivo</td><td>Progresivo: 19% - 47%</td><td>Fijo: 25% (15% primeros 2 años)</td></tr>
          <tr><td>Base imponible</td><td>Rendimientos netos</td><td>Beneficio societario</td></tr>
          <tr><td>Cotización SS</td><td>225€ - 530€/mes</td><td>Autónomo societario: ~400€ mínimo</td></tr>
          <tr><td>Responsabilidad</td><td>Ilimitada (patrimonio personal)</td><td>Limitada al capital social</td></tr>
          <tr><td>Costes fijos anuales</td><td>~100€ (gestoría básica)</td><td>~1.500-3.000€ (contabilidad, cuentas anuales)</td></tr>
        </tbody>
      </table>

      <h3>2. El umbral de rentabilidad: ¿40.000€ netos?</h3>
      <p>El punto donde la SL empieza a compensar fiscalmente suele estar entre <strong>40.000€ y 60.000€ de beneficio neto anual</strong>. Pero hay matices:</p>
      <ul>
        <li><strong>Si reinviertes beneficios:</strong> La SL es ventajosa antes (el dinero dentro paga 25% vs hasta 47%)</li>
        <li><strong>Si necesitas todo el dinero:</strong> Considera el "doble peaje" fiscal (IS + IRPF por dividendos/nómina)</li>
        <li><strong>Costes de estructura:</strong> Gestoría, presentación de cuentas, libros societarios</li>
      </ul>

      <h3>3. Más allá de los impuestos: Otros factores</h3>
      <ul>
        <li><strong>Protección patrimonial:</strong> En SL, tu casa y ahorros personales están protegidos ante deudas empresariales</li>
        <li><strong>Imagen profesional:</strong> Algunos clientes corporativos prefieren trabajar con sociedades</li>
        <li><strong>Socios o inversores:</strong> Una SL facilita la entrada de terceros</li>
        <li><strong>Venta del negocio:</strong> Es más fácil vender participaciones de una SL</li>
      </ul>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>No te precipites a crear una SL solo por "parecer más profesional". Los costes de gestión pueden superar los <strong>2.000-3.000€ anuales</strong>, y el autónomo societario cotiza sobre una base mínima más alta (~1.200€/mes vs libre elección). Mi recomendación: <strong>analiza tu situación real con un asesor fiscal</strong> cuando superes los 50.000€ de beneficio neto. Y si decides dar el paso, hazlo en <strong>enero</strong> para simplificar el ejercicio fiscal.</p>
      </div>

      <h2>Simulación: Developer con 80.000€ de facturación</h2>
      <p><strong>Escenario:</strong> Desarrollador que factura 80.000€/año con 10.000€ de gastos:</p>
      
      <h4>Como autónomo:</h4>
      <ul>
        <li>Rendimiento neto: 70.000€</li>
        <li>Cuota SS anual: ~5.400€ (450€/mes)</li>
        <li>Base IRPF: 64.600€</li>
        <li>IRPF estimado: ~18.000€ (tipo efectivo ~28%)</li>
        <li><strong>Neto disponible: ~46.600€</strong></li>
      </ul>

      <h4>Como SL (pagándote 40.000€ nómina):</h4>
      <ul>
        <li>Beneficio sociedad: 30.000€</li>
        <li>IS (25%): 7.500€</li>
        <li>IRPF nómina: ~8.000€</li>
        <li>SS societario: ~4.800€</li>
        <li>Gastos gestoría SL: ~2.500€</li>
        <li><strong>Neto disponible: ~47.200€</strong> (pero con 22.500€ en sociedad)</li>
      </ul>
    `,
    sources: [
      { title: 'Impuesto sobre Sociedades - AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G324.shtml' },
      { title: 'IRPF - Agencia Tributaria', url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html' },
      { title: 'Información autónomos - Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores' }
    ]
  },

  // 7. Modelo 130
  {
    id: '7',
    slug: 'modelo-130-irpf-pagos-fraccionados-autonomos-2026',
    title: 'El Modelo 130 Explicado: Pagos Fraccionados de IRPF para Autónomos',
    metaDescription: 'Guía completa del modelo 130: cómo funcionan los pagos fraccionados de IRPF, cálculo, plazos de presentación y errores comunes a evitar.',
    category: 'impuestos',
    publishDate: '2025-12-25',
    readTime: 8,
    featured: false,
    excerpt: 'Todo sobre el modelo 130: qué es, cómo calcularlo, cuándo presentarlo y cómo evitar errores que pueden costarte dinero o sanciones.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop',
    imageAlt: 'Calendario fiscal con modelo 130 marcado',
    content: `
      <h2>Modelo 130: Todo sobre los pagos fraccionados de IRPF</h2>
      <p>El modelo 130 es la <strong>declaración trimestral de pago fraccionado del IRPF</strong> para autónomos en estimación directa. Básicamente, es un adelanto del impuesto que pagarás en la declaración de la renta anual, evitando así un pago único muy elevado en junio.</p>

      <h2>🔑 3 Puntos Clave del Modelo 130</h2>

      <h3>1. Cálculo del pago fraccionado</h3>
      <p>El importe a pagar se calcula así:</p>
      <pre><code>Pago = (Rendimiento neto acumulado × 20%) - Retenciones soportadas - Pagos anteriores</code></pre>
      <p><strong>Importante:</strong> El cálculo es <strong>acumulativo</strong>. En el 2º trimestre incluyes los datos del 1º y 2º; en el 3º, los tres primeros, etc.</p>
      
      <p><strong>Ejemplo 1T:</strong></p>
      <ul>
        <li>Ingresos Q1: 15.000€</li>
        <li>Gastos Q1: 3.000€ (incluye cuota SS)</li>
        <li>Rendimiento neto: 12.000€</li>
        <li>Pago 130: 12.000€ × 20% = <strong>2.400€</strong></li>
      </ul>

      <h3>2. Plazos de presentación</h3>
      <table>
        <thead>
          <tr><th>Trimestre</th><th>Período</th><th>Plazo presentación</th></tr>
        </thead>
        <tbody>
          <tr><td>1T</td><td>Enero - Marzo</td><td>1-20 Abril</td></tr>
          <tr><td>2T</td><td>Abril - Junio</td><td>1-20 Julio</td></tr>
          <tr><td>3T</td><td>Julio - Septiembre</td><td>1-20 Octubre</td></tr>
          <tr><td>4T</td><td>Octubre - Diciembre</td><td>1-30 Enero (año siguiente)</td></tr>
        </tbody>
      </table>

      <h3>3. ¿Cuándo NO hay que presentar el 130?</h3>
      <p>Estás <strong>exento de presentar el modelo 130</strong> si:</p>
      <ul>
        <li>El 70% o más de tus ingresos llevan retención de IRPF</li>
        <li>Estás en estimación objetiva (módulos) - usarías el modelo 131</li>
        <li>Tributas en régimen de atribución de rentas y se cumplen ciertos requisitos</li>
      </ul>
      <p><strong>Para developers:</strong> Si la mayoría de tus clientes son empresas españolas que te retienen el 15%, probablemente estés exento.</p>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Si facturas principalmente a <strong>clientes extranjeros</strong> (que no te retienen IRPF), el modelo 130 es obligatorio y los pagos pueden ser considerables. Mi consejo: <strong>reserva el 20% de cada factura</strong> en una cuenta separada para cubrir estos pagos trimestrales. Así evitas sustos. Además, recuerda que las <strong>pérdidas de trimestres anteriores</strong> se compensan automáticamente en el cálculo acumulativo.</p>
      </div>

      <h2>Errores comunes a evitar</h2>
      <ol>
        <li><strong>No incluir la cuota de autónomo como gasto:</strong> Es deducible y reduce el rendimiento neto</li>
        <li><strong>Olvidar el carácter acumulativo:</strong> Cada trimestre incluye los anteriores</li>
        <li><strong>No descontar las retenciones:</strong> Si clientes españoles te retienen, resta ese importe</li>
        <li><strong>Presentar fuera de plazo:</strong> Recargo del 1% + intereses por cada mes de retraso</li>
      </ol>
    `,
    sources: [
      { title: 'Modelo 130 - Sede Electrónica AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G607.shtml' },
      { title: 'Manual práctico de Renta - Pagos fraccionados', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos.html' },
      { title: 'Artículo 109 LIRPF - BOE', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' }
    ]
  },

  // 8. Factura Legal
  {
    id: '8',
    slug: 'factura-legal-elementos-obligatorios-retenciones-developers-2026',
    title: 'Cómo Hacer una Factura Legal: Elementos Obligatorios y Retenciones para Devs',
    metaDescription: 'Guía de facturación para desarrolladores: elementos obligatorios de una factura, cuándo aplicar retención del 15%, factura simplificada y errores comunes.',
    category: 'impuestos',
    publishDate: '2025-12-22',
    readTime: 7,
    featured: false,
    excerpt: 'Aprende a crear facturas legalmente válidas: datos obligatorios, cuándo aplicar retención IRPF, diferencia con factura simplificada y software recomendado.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop',
    imageAlt: 'Factura profesional en ordenador portátil',
    content: `
      <h2>La factura perfecta: Elementos obligatorios según la ley</h2>
      <p>La factura no es solo un papel para cobrar; es un <strong>documento mercantil con requisitos legales</strong> establecidos en el Reglamento de Facturación (RD 1619/2012). Una factura incorrecta puede invalidar la deducción de gastos de tu cliente y causarte problemas con Hacienda.</p>

      <h2>🔑 3 Puntos Clave sobre Facturación Legal</h2>

      <h3>1. Elementos obligatorios de una factura completa</h3>
      <table>
        <thead>
          <tr><th>Elemento</th><th>Descripción</th><th>Obligatorio</th></tr>
        </thead>
        <tbody>
          <tr><td>Número de factura</td><td>Serie correlativa sin saltos</td><td>✅ Sí</td></tr>
          <tr><td>Fecha de expedición</td><td>Fecha de emisión de la factura</td><td>✅ Sí</td></tr>
          <tr><td>Datos del emisor</td><td>Nombre, NIF, dirección completa</td><td>✅ Sí</td></tr>
          <tr><td>Datos del cliente</td><td>Nombre/razón social, NIF, dirección</td><td>✅ Sí</td></tr>
          <tr><td>Descripción de servicios</td><td>Detalle claro de lo facturado</td><td>✅ Sí</td></tr>
          <tr><td>Base imponible</td><td>Importe antes de impuestos</td><td>✅ Sí</td></tr>
          <tr><td>Tipo de IVA y cuota</td><td>21% general para servicios digitales</td><td>✅ Sí</td></tr>
          <tr><td>Total factura</td><td>Base + IVA (- retención si aplica)</td><td>✅ Sí</td></tr>
          <tr><td>Fecha de operación</td><td>Si diferente a fecha de emisión</td><td>Condicional</td></tr>
        </tbody>
      </table>

      <h3>2. Retención de IRPF: ¿Cuándo aplicarla?</h3>
      <p>Debes incluir <strong>retención del 15% de IRPF</strong> cuando:</p>
      <ul>
        <li>El cliente es una <strong>empresa o autónomo español</strong></li>
        <li>Estás en estimación directa normal o simplificada</li>
        <li>Los primeros 3 años de actividad pueden ser 7% (novos autónomos)</li>
      </ul>
      <p><strong>No aplica retención</strong> cuando:</p>
      <ul>
        <li>El cliente es un particular (B2C)</li>
        <li>El cliente es una empresa extranjera</li>
        <li>Estás en módulos (estimación objetiva)</li>
      </ul>
      <p><strong>Ejemplo de factura con retención:</strong></p>
      <pre><code>Base imponible:     1.000,00 €
IVA (21%):           +210,00 €
Retención IRPF (15%): -150,00 €
TOTAL A PAGAR:      1.060,00 €</code></pre>

      <h3>3. Factura simplificada (antes "ticket")</h3>
      <p>Puedes emitir factura simplificada cuando el importe es menor de <strong>400€ (IVA incluido)</strong> o en ciertos sectores. Pero como developer B2B, lo habitual es emitir siempre factura completa.</p>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Usa <strong>software de facturación</strong> como Holded, Freebie, Quaderno o Facturama. Estos te garantizan facturas legales, numeración automática, y facilitan la declaración de IVA. Además, <strong>guarda todas las facturas emitidas y recibidas durante 4 años</strong> (plazo de prescripción). Y muy importante: desde 2024, Hacienda impulsa la <strong>factura electrónica</strong>; considera adaptarte ya con formatos como Factura-e o TicketBAI si operas en País Vasco.</p>
      </div>

      <h2>Modelo de descripción de servicios</h2>
      <p>Una buena descripción protege ante inspecciones. Ejemplo:</p>
      <blockquote>"Desarrollo de aplicación web según especificaciones acordadas. Incluye: diseño de interfaz (40h), desarrollo backend API REST (60h), integración con pasarela de pagos (20h) y documentación técnica. Período: noviembre 2026."</blockquote>
    `,
    sources: [
      { title: 'Reglamento de Facturación - Real Decreto 1619/2012', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-14696' },
      { title: 'Retenciones IRPF - Agencia Tributaria', url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html' },
      { title: 'Información facturación - AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda.html' }
    ]
  },

  // 9. Teletrabajo Deducción
  {
    id: '9',
    slug: 'deduccion-gastos-teletrabajo-autonomos-luz-internet-2026',
    title: 'Teletrabajo para Autónomos: Deducción del 30% de Luz, Agua e Internet',
    metaDescription: 'Cómo deducir gastos de suministros trabajando desde casa: cálculo del 30%, requisitos legales, metros afectos y errores comunes a evitar.',
    category: 'gastos',
    publishDate: '2025-12-18',
    readTime: 7,
    featured: false,
    excerpt: 'Guía práctica para deducir gastos de suministros del hogar como autónomo: luz, agua, gas e internet. Fórmula de cálculo y documentación necesaria.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop',
    imageAlt: 'Espacio de trabajo en casa con ordenador y buena iluminación',
    content: `
      <h2>Ventajas fiscales del teletrabajo: Deduce el 30% de tus suministros</h2>
      <p>Desde la <strong>Ley 6/2017 de Reformas Urgentes del Trabajo Autónomo</strong>, los freelancers pueden deducir una parte proporcional de los gastos de suministros (luz, agua, gas, internet) cuando trabajan desde casa. Para desarrolladores, que normalmente trabajamos en remoto, esto supone un ahorro fiscal significativo.</p>

      <h2>🔑 3 Puntos Clave de la Deducción por Teletrabajo</h2>

      <h3>1. Fórmula de cálculo: El 30% proporcional</h3>
      <p>La deducción se calcula en dos pasos:</p>
      <pre><code>Paso 1: Proporción = m² afectos a actividad / m² totales vivienda
Paso 2: Deducción = Proporción × 30% × Gasto total</code></pre>
      
      <p><strong>Ejemplo práctico:</strong></p>
      <ul>
        <li>Vivienda: 80 m²</li>
        <li>Despacho/zona de trabajo: 10 m²</li>
        <li>Factura luz mensual: 120€</li>
        <li>Proporción: 10/80 = 12,5%</li>
        <li>Deducción: 12,5% × 30% × 120€ = <strong>4,50€/mes</strong></li>
        <li>Deducción anual luz: 4,50€ × 12 = <strong>54€</strong></li>
      </ul>

      <h3>2. Suministros que puedes deducir</h3>
      <table>
        <thead>
          <tr><th>Suministro</th><th>Deducible</th><th>Notas</th></tr>
        </thead>
        <tbody>
          <tr><td>Electricidad</td><td>30% prop.</td><td>Imprescindible para cualquier dev</td></tr>
          <tr><td>Gas/Calefacción</td><td>30% prop.</td><td>Si usas calefacción de gas</td></tr>
          <tr><td>Agua</td><td>30% prop.</td><td>Proporción menor pero válida</td></tr>
          <tr><td>Internet fibra</td><td>30-50%</td><td>Línea exclusiva = 100%</td></tr>
          <tr><td>Teléfono móvil</td><td>50%</td><td>Si es uso mixto personal/profesional</td></tr>
          <tr><td>Comunidad/IBI</td><td>Proporcional</td><td>Solo si la vivienda está afecta</td></tr>
        </tbody>
      </table>

      <h3>3. Requisitos para la deducción</h3>
      <ul>
        <li><strong>Alta en modelo 036/037:</strong> Debe constar que trabajas desde tu domicilio</li>
        <li><strong>Facturas a tu nombre:</strong> El titular del contrato debes ser tú</li>
        <li><strong>Metros declarados:</strong> Indica los m² afectos a la actividad en el censo</li>
        <li><strong>Proporcionalidad razonable:</strong> No puedes declarar el 50% de un piso de 80m²</li>
      </ul>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Si trabajas 100% remoto, considera contratar una <strong>línea de fibra exclusiva</strong> para el trabajo. Así puedes deducirla al 100% sin aplicar el 30% proporcional. Lo mismo aplica para un <strong>móvil con línea profesional</strong>. Además, guarda todas las facturas de suministros y haz fotos del espacio de trabajo como documentación de respaldo. Un truco: usa la <strong>media de consumo anual</strong> para el cálculo y preséntalo en tu declaración como gasto fijo mensual.</p>
      </div>

      <h2>Ahorro real para un developer tipo</h2>
      <p><strong>Perfil:</strong> Desarrollador en piso de 90m² con despacho de 12m²:</p>
      <ul>
        <li>Luz: 100€/mes → Deducción: 4€/mes → <strong>48€/año</strong></li>
        <li>Gas: 60€/mes (invierno) → Deducción: 2,40€/mes → <strong>29€/año</strong></li>
        <li>Internet: 50€/mes (50% profesional) → <strong>300€/año</strong></li>
        <li>Móvil: 30€/mes (50% profesional) → <strong>180€/año</strong></li>
        <li><strong>Total ahorro fiscal: ~557€/año</strong></li>
      </ul>
    `,
    sources: [
      { title: 'Ley 6/2017 Reformas Trabajo Autónomo - BOE', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12207' },
      { title: 'Gastos deducibles - Agencia Tributaria', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda.html' },
      { title: 'Consultas tributarias - Dirección General Tributos', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda.html' }
    ]
  },

  // 10. VIES y ROI
  {
    id: '10',
    slug: 'vies-roi-iva-intracomunitario-saas-servicios-digitales-2026',
    title: 'VIES y ROI: Por Qué Necesitas el IVA Intracomunitario para Servicios SaaS',
    metaDescription: 'Guía del registro VIES y ROI para desarrolladores que venden SaaS o servicios digitales en la UE. Cómo darte de alta y obligaciones fiscales.',
    category: 'internacional',
    publishDate: '2025-12-15',
    readTime: 18,
    featured: false,
    excerpt: 'Si vendes software, SaaS o servicios digitales en la UE, necesitas entender el sistema VIES y el ROI. Guía práctica con pasos para registrarte.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
    imageAlt: 'Mapa de Europa con conexiones digitales representando comercio intracomunitario',
    content: `
      <h2>Comercio digital en la UE: VIES y ROI explicados paso a paso</h2>
      <p>Si desarrollas y vendes <strong>productos SaaS, plugins, templates o servicios digitales</strong> a clientes de otros países de la UE, necesitas entender dos conceptos clave: el <strong>sistema VIES</strong> para verificar el IVA de clientes empresariales, y el <strong>ROI (Registro de Operadores Intracomunitarios)</strong> para estar habilitado a operar sin IVA en transacciones B2B intracomunitarias.</p>

      <h2>🔑 3 Puntos Clave sobre VIES y ROI</h2>

      <h3>1. ¿Qué es el VIES y para qué sirve?</h3>
      <p><strong>VIES</strong> (VAT Information Exchange System) es la base de datos europea que permite verificar si un número de IVA intracomunitario es válido:</p>
      <ul>
        <li>Consulta gratuita en: <a href="https://ec.europa.eu/taxation_customs/vies/" target="_blank">ec.europa.eu/taxation_customs/vies</a></li>
        <li>Devuelve: validez del número, nombre y dirección de la empresa</li>
        <li><strong>Obligatorio verificar</strong> antes de emitir factura sin IVA</li>
        <li>Guarda capturas de pantalla como prueba documental</li>
      </ul>
      <p>Si el número VIES no es válido, debes aplicar IVA español (21%) en tu factura.</p>

      <h3>2. El ROI: Registro de Operadores Intracomunitarios</h3>
      <p>Para poder realizar operaciones intracomunitarias sin IVA, debes estar dado de alta en el <strong>ROI de la AEAT</strong>:</p>
      <ul>
        <li><strong>Solicitud:</strong> Modelo 036, casilla 582 (solicitud de alta en el ROI)</li>
        <li><strong>Plazo:</strong> La AEAT tiene 3 meses para resolver, pero suele ser rápido</li>
        <li><strong>Verificación:</strong> Hacienda puede llamarte para verificar la actividad</li>
        <li><strong>Una vez aprobado:</strong> Tu NIF aparecerá en VIES con prefijo "ES"</li>
      </ul>
      <p><strong>Sin ROI:</strong> No puedes aplicar inversión del sujeto pasivo aunque el cliente tenga VIES válido.</p>

      <h3>3. Obligaciones una vez registrado</h3>
      <ul>
        <li><strong>Modelo 349:</strong> Declaración recapitulativa de operaciones intracomunitarias (trimestral o mensual)</li>
        <li><strong>Modelo 303:</strong> Las operaciones van en casillas específicas de IVA intracomunitario</li>
        <li><strong>Verificación continua:</strong> Comprueba el VIES de cada cliente en cada factura</li>
        <li><strong>Mención en facturas:</strong> "Inversión del sujeto pasivo - Art. 196 Directiva 2006/112/CE"</li>
      </ul>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores SaaS</h4>
        <p>Si vendes SaaS con pagos recurrentes (Stripe, Paddle, etc.), necesitas un sistema que verifique automáticamente el VIES de clientes empresariales. Plataformas como <strong>Paddle o LemonSqueezy</strong> actúan como Merchant of Record y gestionan el IVA por ti, lo que simplifica enormemente la fiscalidad. Si usas Stripe directamente, integra <strong>Stripe Tax</strong> o usa servicios como Quaderno o Octobat para la gestión de IVA europeo. Recuerda: las ventas B2C (particulares) llevan IVA del país del cliente (OSS).</p>
      </div>

      <h2>Flujo de trabajo: Venta B2B a empresa alemana</h2>
      <ol>
        <li>Cliente alemán te contrata para desarrollo de API: 5.000€</li>
        <li>Te proporciona su VAT: DE123456789</li>
        <li><strong>Verificas en VIES:</strong> ✓ Válido, empresa "GmbH Berlin"</li>
        <li>Emites factura sin IVA con mención "Inversión del sujeto pasivo"</li>
        <li><strong>Modelo 349:</strong> Declaras la operación en el trimestre correspondiente</li>
        <li>El cliente autoliquida el IVA en Alemania (19%)</li>
      </ol>

      <h2>Diferencia B2B vs B2C en servicios digitales</h2>
      <table>
        <thead>
          <tr><th>Tipo</th><th>B2B (empresas)</th><th>B2C (particulares)</th></tr>
        </thead>
        <tbody>
          <tr><td>IVA aplicable</td><td>Inversión sujeto pasivo (0%)</td><td>IVA del país del cliente</td></tr>
          <tr><td>Verificación</td><td>VIES obligatorio</td><td>No aplica</td></tr>
          <tr><td>Declaración</td><td>Modelo 349</td><td>OSS (One-Stop Shop)</td></tr>
          <tr><td>Complejidad</td><td>Media</td><td>Alta (múltiples tipos IVA)</td></tr>
        </tbody>
      </table>

      <h2>Proceso completo de alta en el ROI</h2>
      <p>El alta en el ROI es el primer paso para operar legalmente en el mercado intracomunitario. Aquí está el proceso detallado:</p>

      <h3>Documentación necesaria</h3>
      <ul>
        <li><strong>Modelo 036 cumplimentado:</strong> Casilla 582 marcada para "Alta en el ROI"</li>
        <li><strong>Justificación de actividad:</strong> Contratos con clientes UE, facturas proforma o cartas de intención</li>
        <li><strong>Descripción del negocio:</strong> Explicar qué servicios digitales ofreces y a qué países</li>
        <li><strong>Previsión de facturación:</strong> Estima volumen anual de operaciones intracomunitarias</li>
      </ul>

      <h3>Plazos y resolución</h3>
      <p>La AEAT tiene <strong>3 meses para resolver</strong> tu solicitud, aunque en la práctica:</p>
      <ul>
        <li>Casos simples con documentación clara: 15-30 días</li>
        <li>Casos que requieren verificación adicional: 2-3 meses</li>
        <li>Si no hay respuesta en 3 meses: <strong>silencio administrativo positivo</strong> (aprobado automáticamente)</li>
      </ul>

      <h3>Verificación de la AEAT</h3>
      <p>Es común que Hacienda te contacte para verificar:</p>
      <ul>
        <li><strong>Llamada telefónica:</strong> Confirmar que la actividad es real</li>
        <li><strong>Solicitud de documentos:</strong> Contratos con clientes, extractos bancarios de cobros del extranjero</li>
        <li><strong>Visita presencial:</strong> Rara, solo en casos dudosos o volúmenes muy altos</li>
      </ul>

      <div class="tip-box">
        <h4>⚠️ Errores Comunes al Solicitar el ROI</h4>
        <p><strong>1. Solicitar sin clientes reales:</strong> La AEAT puede denegar si no demuestras actividad real intracomunitaria. <strong>2. No actualizar el domicilio fiscal:</strong> Hacienda envía notificaciones por correo postal; si no las recibes, pierdes plazos. <strong>3. Olvidar marcar la casilla 582:</strong> El modelo 036 tiene muchas casillas; asegúrate de marcar la correcta. <strong>4. No conservar pruebas de verificación VIES:</strong> Guarda todas las consultas VIES con fecha visible durante 4 años.</p>
      </div>

      <h2>Gestión del IVA en productos SaaS recurrentes</h2>
      <p>Si vendes suscripciones mensuales o anuales, la gestión del IVA se complica. Aquí tienes opciones:</p>

      <h3>Opción 1: Merchant of Record (MoR)</h3>
      <p>Plataformas que gestionan el IVA completamente por ti:</p>
      <table>
        <thead>
          <tr><th>Plataforma</th><th>Comisión</th><th>Ventajas</th><th>Desventajas</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Paddle</strong></td>
            <td>5% + 0,50€</td>
            <td>Gestiona IVA global, facturación automática</td>
            <td>Comisión alta</td>
          </tr>
          <tr>
            <td><strong>LemonSqueezy</strong></td>
            <td>5% + 0,50€</td>
            <td>Similar a Paddle, UI moderna</td>
            <td>Comisión alta</td>
          </tr>
          <tr>
            <td><strong>Gumroad</strong></td>
            <td>10%</td>
            <td>Muy simple</td>
            <td>No es MoR completo</td>
          </tr>
        </tbody>
      </table>

      <h3>Opción 2: Gestión propia con herramientas</h3>
      <p>Si usas Stripe, PayPal o similar, necesitas gestionar el IVA tú mismo:</p>
      <ul>
        <li><strong>Stripe Tax:</strong> Calcula automáticamente el IVA correcto (1% adicional)</li>
        <li><strong>Quaderno:</strong> Se integra con Stripe/PayPal, genera facturas automáticas (desde 49€/mes)</li>
        <li><strong>Octobat:</strong> Similar a Quaderno, enfoque europeo (desde 39€/mes)</li>
      </ul>

      <h2>Verificación VIES: Buenas prácticas</h2>
      <ul>
        <li><strong>Verifica cada factura:</strong> Un VAT puede ser válido hoy e inválido mañana</li>
        <li><strong>Automatiza con APIs:</strong> VIES tiene API pública; integra verificación automática</li>
        <li><strong>Formato correcto:</strong> DEXXXXXXXXX (sin espacios, guiones ni puntos)</li>
        <li><strong>Guarda evidencias:</strong> Captura de pantalla con fecha, o respuesta JSON de la API</li>
        <li><strong>Tiempo de retención:</strong> Conserva evidencias 4 años (plazo de prescripción)</li>
      </ul>

      <h2>Modelo 349: Cómo rellenarlo correctamente</h2>
      <p>El modelo 349 es la declaración donde informas de todas tus operaciones intracomunitarias:</p>

      <h3>Periodicidad</h3>
      <table>
        <thead>
          <tr><th>Volumen trimestre anterior</th><th>Periodicidad</th><th>Plazo</th></tr>
        </thead>
        <tbody>
          <tr><td>≤ 50.000€</td><td>Trimestral</td><td>1-30 del mes siguiente</td></tr>
          <tr><td>> 50.000€</td><td>Mensual</td><td>1-30 del mes siguiente</td></tr>
        </tbody>
      </table>

      <h3>Datos a incluir por cada cliente</h3>
      <ul>
        <li>NIF-IVA del cliente (con código país)</li>
        <li>Código de operación: "S" para servicios</li>
        <li>Base imponible total del período</li>
        <li>No se incluye IVA (la operación no lleva IVA español)</li>
      </ul>

      <h2>Costes de gestión: ¿Merece la pena?</h2>
      <p>Gestionar el ROI y VIES tiene costes asociados:</p>

      <h3>Opción 1: Autogestión</h3>
      <ul>
        <li><strong>Tiempo:</strong> ~2 horas/mes (verificaciones VIES, modelo 349)</li>
        <li><strong>Coste herramientas:</strong> 0-50€/mes</li>
        <li><strong>Riesgo:</strong> Alto si cometes errores</li>
        <li><strong>Ideal para:</strong> Pocos clientes UE (< 5), facturas esporádicas</li>
      </ul>

      <h3>Opción 2: Gestoría</h3>
      <ul>
        <li><strong>Coste adicional:</strong> +30-80€/mes sobre cuota básica</li>
        <li><strong>Tiempo:</strong> Mínimo (solo enviar facturas)</li>
        <li><strong>Riesgo:</strong> Bajo (gestoría asume responsabilidad)</li>
        <li><strong>Ideal para:</strong> Muchos clientes UE, facturas frecuentes</li>
      </ul>

      <h3>Opción 3: Merchant of Record</h3>
      <ul>
        <li><strong>Comisión:</strong> 5-10% sobre ventas</li>
        <li><strong>Tiempo:</strong> Cero (gestionan todo)</li>
        <li><strong>Riesgo:</strong> Cero (son ellos el vendedor legal)</li>
        <li><strong>Ideal para:</strong> SaaS con muchas ventas B2C/B2B mixtas</li>
      </ul>

      <h2>Paso a paso: Tu primer cliente intracomunitario</h2>
      <p>Vamos a recorrer todo el proceso desde el primer contacto hasta la declaración final:</p>

      <h3>Fase 1: Preparación previa (antes de firmar contrato)</h3>
      <ol>
        <li><strong>Verifica que tienes ROI activo:</strong> Accede a <a href="https://sede.agenciatributaria.gob.es" target="_blank">sede.agenciatributaria.gob.es</a> → Consulta de datos → Verifica que aparece "Alta en ROI"</li>
        <li><strong>Solicita VAT del cliente:</strong> En la negociación, pide su VAT number. Explica que es requisito legal para facturar sin IVA</li>
        <li><strong>Verifica VAT en VIES:</strong> Antes de firmar nada, comprueba validez en <a href="https://ec.europa.eu/taxation_customs/vies/" target="_blank">VIES</a></li>
        <li><strong>Guarda captura con fecha:</strong> Pantalla completa mostrando fecha del sistema y resultado VIES</li>
      </ol>

      <h3>Fase 2: Facturación (al finalizar trabajo)</h3>
      <p><strong>Elementos obligatorios en factura intracomunitaria:</strong></p>
      <ul>
        <li>Tu NIF español (ESxxxxxxxxx)</li>
        <li>VAT del cliente (DExxxxxxxxx, FRxxxxxxxxx, etc.)</li>
        <li>Base imponible sin IVA</li>
        <li>Mención: "Operación sujeta a inversión del sujeto pasivo - Art. 196 Directiva 2006/112/CE"</li>
        <li>Mención: "IVA a cargo del destinatario"</li>
        <li>NO incluyas cuota de IVA, ni base + IVA, solo la base</li>
      </ul>

      <p><strong>Ejemplo de factura a cliente alemán:</strong></p>
      <pre><code>FACTURA 2026/042

Emisor:
Tu Nombre - NIF: ES12345678A
Dirección España

Cliente:
Tech GmbH - VAT: DE987654321
Berlín, Alemania

Servicios de desarrollo API REST
Período: Enero-Febrero 2026

Base imponible: 5.000,00 €

Operación sujeta a inversión del sujeto pasivo
Art. 196 Directiva 2006/112/CE
IVA a cargo del destinatario

TOTAL: 5.000,00 €</code></pre>

      <h3>Fase 3: Contabilización</h3>
      <ul>
        <li><strong>Libro de facturas emitidas:</strong> Anota con código especial "IC" (intracomunitario)</li>
        <li><strong>Modelo 303 (IVA trimestral):</strong> Incluye en casilla 61 "Operaciones no sujetas" si es servicio, o en casillas específicas de entregas intracomunitarias si fuera bien</li>
        <li><strong>Archivo para modelo 349:</strong> Crea Excel/Sheet con: País, VAT, Base imponible, Fecha</li>
      </ul>

      <h3>Fase 4: Declaración modelo 349</h3>
      <p>Al final del trimestre (o mes si > 50k€):</p>
      <ol>
        <li>Accede a sede electrónica AEAT</li>
        <li>Busca "Modelo 349"</li>
        <li>Rellena datos:
          <ul>
            <li>NIF operador intracomunitario: VAT del cliente</li>
            <li>Clave de operación: <strong>"S"</strong> (servicios)</li>
            <li>Base imponible: 5.000€</li>
          </ul>
        </li>
        <li>Envía telemáticamente</li>
        <li>Guarda justificante de presentación</li>
      </ol>

      <h2>Casos especiales que encontrarás</h2>

      <h3>Cliente sin VAT o VAT inválido</h3>
      <p><strong>Situación:</strong> Cliente empresa de Francia dice "no tengo VAT" o el número no aparece en VIES</p>
      <p><strong>Solución:</strong></p>
      <ol>
        <li>Explica que SÍ debe tener VAT si es empresa (obligatorio en UE desde cierto volumen)</li>
        <li>Pídele que lo busque en sus facturas de compras o impuestos</li>
        <li>Si realmente no tiene (startup muy pequeña), <strong>debes facturar con IVA español 21%</strong></li>
        <li>Alternativa: Cliente puede solicitar VAT antes de empezar proyecto (tarda 2-4 semanas)</li>
      </ol>

      <h3>Cliente cambia de país durante proyecto</h3>
      <p><strong>Ejemplo real:</strong> Contratas con empresa alemana, a mitad de proyecto se trasladan a Holanda</p>
      <p><strong>Cómo gestionarlo:</strong></p>
      <ul>
        <li>Facturas hasta el cambio: VAT alemán DE123xxx, declaras en 349 con Alemania</li>
        <li>Facturas después: Solicita nuevo VAT holandés NL456xxx, verificas en VIES</li>
        <li>En modelo 349: Dos líneas separadas (una Alemania, una Holanda)</li>
        <li>Documenta bien el cambio (email del cliente confirmando nueva dirección/VAT)</li>
      </ul>

      <h3>Proyecto largo con pagos mensuales</h3>
      <p><strong>Situación:</strong> Contrato 6 meses, cobros mensuales de 3.000€</p>
      <p><strong>Best practice:</strong></p>
      <ul>
        <li>Factura mensual individual (6 facturas de 3.000€)</li>
        <li><strong>Verifica VIES cada mes</strong> (el VAT puede caducar si empresa cierra)</li>
        <li>En modelo 349 trimestral: Suma todas las facturas del trimestre (ej: 9.000€ si 3 meses)</li>
        <li>Guarda todas las verificaciones VIES mensuales</li>
      </ul>

      <h3>Cliente te paga en moneda extranjera (USD, GBP)</h3>
      <p><strong>Importante:</strong> El modelo 349 se rellena en EUROS, aunque cobres en otra moneda</p>
      <ol>
        <li>Usa el tipo de cambio oficial BCE del día de la factura</li>
        <li>Puedes consultarlo en: <a href="https://www.ecb.europa.eu/stats/exchange/" target="_blank">ecb.europa.eu/stats/exchange</a></li>
        <li>Documenta el tipo de cambio usado (captura o anotación)</li>
        <li>Ejemplo: Factura 5.000 USD, tipo 1.10 → Declaras 4.545€ en modelo 349</li>
      </ul>

      <h2>Integración con herramientas de facturación</h2>

      <h3>Automatización con Stripe + VIES API</h3>
      <p>Si vendes SaaS con Stripe, puedes automatizar la verificación VIES:</p>
      <pre><code>// Pseudocódigo JavaScript
const stripe = require('stripe')(process.env.STRIPE_KEY);
const axios = require('axios');

async function verificarVAT(vatNumber, countryCode) {
  const response = await axios.get(
    `https://ec.europa.eu/taxation_customs/vies/rest-api/ms/${countryCode}/vat/${vatNumber}`
  );
  
  if (response.data.valid) {
    // Cliente válido, factura sin IVA
    return { aplicarIVA: false, tipoIVA: 0 };
  } else {
    // VAT inválido, aplicar IVA español
    return { aplicarIVA: true, tipoIVA: 21 };
  }
}</code></pre>

      <h3>Plugins de WordPress/Shopify</h3>
      <ul>
        <li><strong>WooCommerce:</strong> Plugin "EU VAT Number" (gratuito) - Valida VIES automáticamente en checkout</li>
        <li><strong>Shopify:</strong> App "EU VAT Manager" (desde 9.99$/mes) - Gestiona IVA por país automáticamente</li>
        <li><strong>Stripe Tax:</strong> Integración nativa que gestiona IVA UE (1% adicional sobre comisión Stripe)</li>
      </ul>

      <h2>Errores comunes y cómo evitarlos</h2>

      <h3>Error 1: No verificar VIES regularmente</h3>
      <p><strong>Problema:</strong> Cliente tenía VAT válido hace 6 meses, asumes que sigue válido, facturas sin IVA. Hacienda inspecciona y descubre que el VAT caducó hace 3 meses.</p>
      <p><strong>Consecuencia:</strong> Te reclaman el IVA (21%) de todas las facturas + recargo + intereses</p>
      <p><strong>Solución:</strong> Verifica VIES <strong>cada vez</strong> que emites factura, no confíes en verificaciones anteriores</p>

      <h3>Error 2: Olvidar el modelo 349</h3>
      <p><strong>Problema:</strong> Presentas modelo 303 (IVA) correctamente, pero olvidas el modelo 349 intracomunitario</p>
      <p><strong>Consecuencia:</strong> Sanción de 300-600€ por cada 349 no presentado + recargos</p>
      <p><strong>Solución:</strong> Activa recordatorio calendario cada trimestre: "Presentar 349 - Plazo hasta día 30"</p>

      <h3>Error 3: Confundir B2B con B2C</h3>
      <p><strong>Problema:</strong> Cliente de Francia te compra licencia software de 99€, asumes que es B2B y facturas sin IVA. Era particular (B2C)</p>
      <p><strong>Consecuencia:</strong> Hacienda reclama IVA francés (20%) que debiste cobrar y declarar en OSS</p>
      <p><strong>Solución:</strong> Si dudas, pregunta directamente: "¿Eres empresa con VAT o particular?" - Si no tiene VAT, aplicar IVA del país del cliente (OSS) o español si < 10k€ ventas UE/año</p>

      <h3>Error 4: Formato incorrecto de VAT en facturas</h3>
      <p><strong>Problema:</strong> Escribes VAT como "DE 123 456 789" (con espacios) en lugar de "DE123456789" (sin espacios)</p>
      <p><strong>Consecuencia:</strong> Sistema AEAT puede rechazar modelo 349 o darte error de validación</p>
      <p><strong>Solución:</strong> Formato siempre: CÓDIGO_PAÍS + NÚMEROS SIN ESPACIOS (DE123456789, FR987654321)</p>

      <h2>Preguntas frecuentes avanzadas</h2>

      <h3>¿Qué pasa si mi cliente no paga?</h3>
      <p>Ya declaraste la operación en el modelo 349 y él no te pagó. <strong>No puedes "deshacer" la declaración</strong>, pero:</p>
      <ol>
        <li>Si era error de importe, presenta 349 rectificativo</li>
        <li>Si cliente no paga, es problema civil (no fiscal) - Reclama judicialmente</li>
        <li>El cliente ya autoliquidó su IVA en su país, por tanto Haciendas no van a modificar nada</li>
      </ol>

      <h3>¿Puedo facturar a una filial en España de empresa alemana?</h3>
      <p><strong>No es operación intracomunitaria.</strong> Si la filial tiene NIF español (no VAT alemán), facturas con IVA español 21% normal.</p>
      <p>Importante: Que la matriz sea alemana no importa. Lo que importa es <strong>dónde está establecido el que contrata</strong>.</p>

      <h3>¿Necesito traductor jurado para contratos internacionales?</h3>
      <p>Para efectos fiscales, <strong>no es necesario</strong>. Basta con:</p>
      <ul>
        <li>Contrato en inglés firmado (aceptado por AEAT)</li>
        <li>Facturas en inglés con menciones legales</li>
        <li>Emails de cliente confirmando VAT y dirección</li>
      </ul>
      <p>Solo necesitas traductor jurado si vas a juicio o arbitraje internacional.</p>

      <h3>¿Puedo facturar servicios a Reino Unido igual que UE?</h3>
      <p><strong>No.</strong> Tras Brexit (2020), Reino Unido es tercer país. Servicios a UK:</p>
      <ul>
        <li><strong>No llevan IVA español</strong> (art. 69 LIVA - como USA)</li>
        <li><strong>No se declaran en modelo 349</strong> (solo para UE)</li>
        <li><strong>No necesitas ROI</strong> para facturar a UK</li>
        <li>Solo indicas: "Operación no sujeta a IVA - Art. 69.Uno.1º Ley 37/1992"</li>
      </ul>

      <h2>Calculadora de rentabilidad: ¿MoR o gestión propia?</h2>

      <h3>Escenario 1: SaaS pequeño (MRR 2.000€/mes)</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Gestión propia</th><th>Paddle MoR</th></tr>
        </thead>
        <tbody>
          <tr><td>Ingresos anuales</td><td>24.000€</td><td>24.000€</td></tr>
          <tr><td>Comisión MoR</td><td>0€</td><td>1.440€ (6%)</td></tr>
          <tr><td>Gestoría IVA</td><td>720€/año (60€/mes)</td><td>0€</td></tr>
          <tr><td>Tiempo gestión</td><td>3h/mes = 36h/año</td><td>0h</td></tr>
          <tr><td>Valor hora</td><td>50€/h = 1.800€</td><td>0€</td></tr>
          <tr><td><strong>Coste total</strong></td><td><strong>2.520€</strong></td><td><strong>1.440€</strong></td></tr>
          <tr><td><strong>Recomendación</strong></td><td colspan="2"><strong>Paddle MoR</strong> (ahorro 1.080€/año)</td></tr>
        </tbody>
      </table>

      <h3>Escenario 2: Consultoría (facturación 60.000€/año, 3-5 clientes UE)</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Gestión propia</th><th>Gestoría</th></tr>
        </thead>
        <tbody>
          <tr><td>Ingresos anuales</td><td>60.000€</td><td>60.000€</td></tr>
          <tr><td>Coste gestión</td><td>1h/mes = 600€/año</td><td>80€/mes = 960€/año</td></tr>
          <tr><td>Riesgo errores</td><td>Medio-Alto</td><td>Bajo</td></tr>
          <tr><td><strong>Recomendación</strong></td><td colspan="2"><strong>Gestoría</strong> (360€ más, pero sin riesgo)</td></tr>
        </tbody>
      </table>

      <h2>Recursos adicionales</h2>

      <h3>Documentos oficiales descargables</h3>
      <ul>
        <li><strong>Guía AEAT IVA intracomunitario:</strong> <a href="https://sede.agenciatributaria.gob.es/Sede/iva/operaciones-intracomunitarias.html" target="_blank">PDF oficial con ejemplos</a></li>
        <li><strong>Lista códigos país VAT:</strong> BE (Bélgica), DE (Alemania), FR (Francia), NL (Holanda), IT (Italia), etc.</li>
        <li><strong>Manual modelo 349:</strong> <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GI34.shtml" target="_blank">Paso a paso oficial AEAT</a></li>
      </ul>

      <h3>Plantillas útiles</h3>
      <ul>
        <li><strong>Excel control VIES:</strong> Columnas: Fecha, Cliente, VAT, País, Válido (Sí/No), Captura guardada</li>
        <li><strong>Template factura intracomunitaria:</strong> Google Docs/Word con todos los campos obligatorios</li>
        <li><strong>Checklist trimestral:</strong> Verificar VIES de activos, preparar 349, revisar 303</li>
      </ul>
    `,
    sources: [
      { title: 'Sistema VIES - Comisión Europea', url: 'https://ec.europa.eu/taxation_customs/vies/' },
      { title: 'Modelo 036 - Sede Electrónica AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml' },
      { title: 'Modelo 349 Operaciones Intracomunitarias - AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GI34.shtml' },
      { title: 'IVA - Agencia Tributaria', url: 'https://sede.agenciatributaria.gob.es/Sede/iva.html' }
    ]
  },

  // 11. Seguridad Social: Tramos de ahorro
  {
    id: '11',
    slug: 'seguridad-social-tramos-ahorro-cotizacion-estrategica-2026',
    title: 'Seguridad Social: Tramos de Ahorro y Cotización Estratégica 2026',
    metaDescription: 'Cómo optimizar tu cotización a la Seguridad Social en 2026: tramos con mejor relación cuota/prestaciones, estrategias para cambiar de tramo y ahorro fiscal.',
    category: 'cotizacion',
    publishDate: '2025-12-12',
    readTime: 19,
    featured: false,
    excerpt: 'Descubre los tramos de cotización más rentables, cómo cambiar estratégicamente de tramo y optimizar la relación entre cuota pagada y prestaciones recibidas.',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&auto=format&fit=crop',
    imageAlt: 'Gráficos de ahorro y optimización financiera',
    content: `
      <h2>Claves para optimizar tu cotización en la Seguridad Social 2026</h2>
      <p>El sistema de cotización por tramos de 2026 ofrece <strong>oportunidades de ahorro</strong> que muchos autónomos desconocen. No todos los tramos son igual de "rentables" en términos de relación cuota/prestaciones. Entender esto puede ahorrarte cientos de euros al año sin afectar negativamente a tus derechos.</p>

      <h2>🔑 3 Estrategias Clave de Ahorro</h2>

      <h3>1. Los "tramos dulces": Mejor relación cuota/prestaciones</h3>
      <p>Algunos tramos tienen <strong>saltos de cuota desproporcionados</strong>. Analicemos:</p>
      <table>
        <thead>
          <tr><th>Tramo</th><th>Rendimiento mensual</th><th>Cuota</th><th>Incremento cuota</th></tr>
        </thead>
        <tbody>
          <tr><td>3</td><td>900 - 1.166€</td><td>267€</td><td>-</td></tr>
          <tr><td>4</td><td>1.166 - 1.300€</td><td>291€</td><td>+24€ (+9%)</td></tr>
          <tr><td>5</td><td>1.300 - 1.500€</td><td>294€</td><td>+3€ (+1%)</td></tr>
          <tr><td><strong>6</strong></td><td>1.500 - 1.700€</td><td>294€</td><td>0€ (mismo!)</td></tr>
        </tbody>
      </table>
      <p><strong>Insight:</strong> Los tramos 5 y 6 tienen la <strong>misma cuota (294€)</strong> pero el tramo 6 cubre hasta 1.700€ de rendimiento. Si tu rendimiento mensual está entre 1.300-1.700€, este es un tramo "dulce".</p>

      <h3>2. Cambios de tramo estratégicos: Hasta 6 veces al año</h3>
      <p>Puedes <strong>cambiar de tramo hasta 6 veces al año</strong> desde la sede electrónica de la Seguridad Social. Esto permite:</p>
      <ul>
        <li><strong>Adaptar por estacionalidad:</strong> Si tienes meses fuertes (más proyectos) y meses flojos, ajusta el tramo en consecuencia</li>
        <li><strong>Aprovechar tramos bajos en inicio:</strong> Si empiezas en enero con pocos ingresos, cotiza bajo los primeros meses</li>
        <li><strong>Evitar sobrecotización:</strong> Si un proyecto se cancela, baja de tramo inmediatamente</li>
      </ul>
      <p><strong>Ejemplo práctico:</strong></p>
      <pre><code>Enero-Marzo: Tramo 3 (267€) - Inicio de año, pocos proyectos
Abril-Junio: Tramo 6 (294€) - Proyecto grande de 5.000€/mes
Julio-Agosto: Tramo 4 (291€) - Vacaciones, menos facturación
Sept-Dic: Tramo 6 (294€) - Temporada alta</code></pre>

      <h3>3. Ahorro fiscal: La cuota es deducible en IRPF</h3>
      <p>Muchos autónomos olvidan que <strong>la cuota de autónomo es un gasto deducible</strong> al 100% en IRPF. Esto reduce el coste real:</p>
      <pre><code>Cuota nominal: 294€/mes = 3.528€/año
Ahorro IRPF (tipo marginal 30%): 3.528€ × 30% = 1.058€
Coste real neto: 3.528€ - 1.058€ = 2.470€/año (206€/mes)</code></pre>
      <p>El <strong>coste real</strong> de la cuota es aproximadamente un <strong>30% menos</strong> si estás en tramos medios de IRPF.</p>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Si facturas de forma <strong>irregular</strong> (meses con 0€, otros con 8.000€), no cotices siempre en el tramo más alto "por si acaso". Usa una estrategia dinámica: cotiza bajo cuando factures bajo y ajusta al alza cuando entren proyectos grandes. La <strong>regularización anual</strong> te protege: si al final del año resulta que cotizaste de menos, pagarás la diferencia; si cotizaste de más, te devuelven. Pero evitas pagar de más durante todo el año.</p>
      </div>

      <h2>Impacto en prestaciones: ¿Vale la pena cotizar más?</h2>
      <p>Cotizar en tramos superiores mejora tus prestaciones, pero el retorno no siempre es proporcional:</p>
      <table>
        <thead>
          <tr><th>Prestación</th><th>Depende de cotización</th><th>Impacto real</th></tr>
        </thead>
        <tbody>
          <tr><td>Baja por enfermedad</td><td>Sí, base de cotización</td><td>Alto</td></tr>
          <tr><td>Jubilación</td><td>Sí, años cotizados + base</td><td>Alto (largo plazo)</td></tr>
          <tr><td>Incapacidad permanente</td><td>Sí, base de cotización</td><td>Alto</td></tr>
          <tr><td>Cese de actividad (paro)</td><td>Sí, base de cotización</td><td>Medio (70% base)</td></tr>
        </tbody>
      </table>
      <p><strong>Recomendación:</strong> Si tienes 30-40 años y buena salud, prioriza ahorrar cuota y reinvertir. Si tienes +50 años o problemas de salud, considera cotizar en tramos superiores para mejorar prestaciones.</p>

      <h2>Simulación: Developer con ingresos variables</h2>
      <p><strong>Perfil:</strong> Developer freelance con ingresos mensuales entre 1.200€ y 3.000€</p>
      
      <h4>Estrategia conservadora (tramo fijo 6):</h4>
      <ul>
        <li>Cuota: 294€/mes × 12 = 3.528€/año</li>
        <li>Rendimiento medio anual: 25.000€</li>
        <li>% cuota sobre rendimiento: 14,1%</li>
      </ul>

      <h4>Estrategia optimizada (cambios trimestrales):</h4>
      <ul>
        <li>Q1: Tramo 4 (291€) × 3 = 873€</li>
        <li>Q2: Tramo 6 (294€) × 3 = 882€</li>
        <li>Q3: Tramo 5 (294€) × 3 = 882€</li>
        <li>Q4: Tramo 7 (310€) × 3 = 930€</li>
        <li><strong>Total anual: 3.567€</strong></li>
        <li>Ahorro vs estrategia fija: Mínimo, pero evitas sobrecotizar</li>
      </ul>

      <h2>Cómo cambiar de tramo online</h2>
      <ol>
        <li>Accede a <strong>Import@ss</strong>: <a href="https://portal.seg-social.gob.es" target="_blank">portal.seg-social.gob.es</a></li>
        <li>Certificado digital o Cl@ve</li>
        <li>Sección: "Modificación de datos" → "Cambio de base de cotización"</li>
        <li>Elige el nuevo tramo según tus rendimientos previstos</li>
        <li>Efectivo desde el primer día del mes siguiente</li>
      </ol>

      <h2>Tabla completa de tramos 2026</h2>
      <p>Desglose completo de los 15 tramos con análisis de rentabilidad:</p>

      <table>
        <thead>
          <tr><th>Tramo</th><th>Rendimiento neto</th><th>Cuota</th><th>% sobre rend.</th><th>Análisis</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>≤ 670€</td><td>225€</td><td>33,6%</td><td>Solo inicios</td></tr>
          <tr><td>2</td><td>670-900€</td><td>250€</td><td>27,8%</td><td>Alto %</td></tr>
          <tr><td>3</td><td>900-1.166€</td><td>267€</td><td>22,9%</td><td>Transición</td></tr>
          <tr><td>4</td><td>1.166-1.300€</td><td>291€</td><td>22,4%</td><td>Salto grande</td></tr>
          <tr><td><strong>5-6</strong></td><td>1.300-1.700€</td><td><strong>294€</strong></td><td><strong>17-22%</strong></td><td><strong>🔥 TRAMO DULCE</strong></td></tr>
          <tr><td>7</td><td>1.700-1.850€</td><td>310€</td><td>16,8%</td><td>Buen equilibrio</td></tr>
          <tr><td>8</td><td>1.850-2.030€</td><td>320€</td><td>15,8%</td><td>Zona cómoda</td></tr>
          <tr><td>9</td><td>2.030-2.330€</td><td>330€</td><td>14,2%</td><td>Muy rentable</td></tr>
          <tr><td>10</td><td>2.330-2.760€</td><td>340€</td><td>12,3%</td><td>Excelente</td></tr>
          <tr><td>11</td><td>2.760-3.190€</td><td>370€</td><td>11,6%</td><td>Moderada</td></tr>
          <tr><td>12</td><td>3.190-3.620€</td><td>390€</td><td>10,8%</td><td>Sólida</td></tr>
          <tr><td>13</td><td>3.620-4.050€</td><td>415€</td><td>10,2%</td><td>Alta</td></tr>
          <tr><td>14</td><td>4.050-6.000€</td><td>440€</td><td>7-10%</td><td>Alto ROI</td></tr>
          <tr><td>15</td><td>> 6.000€</td><td>530€</td><td>< 8,8%</td><td>Máxima</td></tr>
        </tbody>
      </table>

      <h2>Estrategias avanzadas de cotización</h2>

      <h3>Estrategia 1: Cotización mínima + seguro privado</h3>
      <p>Algunos autónomos optan por cotizar bajo y complementar con seguros:</p>
      <ul>
        <li><strong>Cotización:</strong> Tramo 1-3 (225-267€/mes)</li>
        <li><strong>Seguro de baja:</strong> ~40-80€/mes (cubre 80% ingresos)</li>
        <li><strong>Seguro salud:</strong> ~50-150€/mes (consultas rápidas)</li>
        <li><strong>Plan pensiones:</strong> Flexible, cuando puedas</li>
      </ul>
      <p><strong>Ventaja:</strong> Flexibilidad. <strong>Desventaja:</strong> Jubilación pública baja.</p>

      <h3>Estrategia 2: Cotización alta en años fuertes</h3>
      <ul>
        <li>Años con buenos ingresos (> 4.000€/mes): Tramos 13-15</li>
        <li>Años con menos ingresos: Tramos 6-8</li>
        <li><strong>Objetivo:</strong> Mejorar pensión jubilación</li>
        <li><strong>Ideal para:</strong> +45 años</li>
      </ul>

      <h3>Estrategia 3: Optimización trimestral</h3>
      <ol>
        <li>Revisa ingresos/gastos mensualmente</li>
        <li>Proyecta rendimientos mes actual y siguientes</li>
        <li>Ajusta tramo si difiere > 20%</li>
        <li>Cambia máximo 2 veces por trimestre</li>
      </ol>

      <h2>Regularización anual: Cómo funciona</h2>
      <p>Al final del año, SS compara tu cotización con rendimientos reales:</p>

      <h3>Cotizaste de menos</h3>
      <pre><code>Rendimiento real: 30.000€ → Promedio 2.500€/mes → Tramo 10
Cotizaste en: Tramo 6
Diferencia: (340€ - 294€) × 12 = 552€ a pagar
Plazo: 60 días</code></pre>

      <h3>Cotizaste de más</h3>
      <pre><code>Rendimiento real: 18.000€ → Promedio 1.500€/mes → Tramo 6
Cotizaste en: Tramo 10
Devolución: (340€ - 294€) × 12 = 552€
Plazo: 3-6 meses</code></pre>

      <div class="tip-box">
        <h4>💡 Hack Fiscal: Controla gastos deducibles</h4>
        <p>Los <strong>rendimientos netos</strong> son Ingresos - Gastos. Si a final de año cotizaste alto pero ingresos fueron menores, <strong>adelanta gastos de enero a diciembre</strong> (hardware, formación) para reducir rendimiento neto y bajar de tramo. Reduce la regularización a pagar.</p>
      </div>

      <h2>Prestaciones: Análisis coste-beneficio</h2>

      <h3>IT (Baja médica)</h3>
      <table>
        <thead>
          <tr><th>Día</th><th>% base</th><th>Paga</th></tr>
        </thead>
        <tbody>
          <tr><td>1-3</td><td>0%</td><td>Nada</td></tr>
          <tr><td>4-20</td><td>60%</td><td>SS</td></tr>
          <tr><td>21+</td><td>75%</td><td>SS</td></tr>
        </tbody>
      </table>
      <pre><code>Tramo 6 (1.500€): Día 15 = 900€/mes
Tramo 10 (2.500€): Día 15 = 1.500€/mes
Diferencia: 600€/mes más</code></pre>

      <h3>Cese de actividad (paro)</h3>
      <p>Requisitos: 12 meses cotizados, facturación < 75% media anterior</p>
      <p><strong>Cuantía:</strong> 70% base, máximo 4-24 meses</p>
      <pre><code>Tramo 6: 1.050€/mes
Tramo 10: 1.750€/mes</code></pre>

      <h3>Jubilación: Impacto largo plazo</h3>
      <pre><code>Cotización vida en tramo 6: Pensión ~1.200€/mes
Cotización vida en tramo 10: Pensión ~1.950€/mes
Diferencia: 750€/mes × 20 años = 180.000€ más
Coste extra: 19.320€ en vida laboral
ROI: Ratio 9:1</code></pre>

      <h2>Casos prácticos: 4 perfiles</h2>

      <h3>Junior (25 años)</h3>
      <ul>
        <li><strong>Ingresos:</strong> 1.200-1.800€/mes</li>
        <li><strong>Estrategia:</strong> Tramos 4-6, reinvertir</li>
        <li><strong>Complemento:</strong> Seguro baja (50€/mes)</li>
        <li><strong>Cuota efectiva:</strong> 206€/mes (tras IRPF)</li>
      </ul>

      <h3>Mid-level (35 años)</h3>
      <ul>
        <li><strong>Ingresos:</strong> 2.500-3.500€/mes</li>
        <li><strong>Estrategia:</strong> Tramos 10-11</li>
        <li><strong>Complemento:</strong> Plan pensiones (300€/mes)</li>
        <li><strong>Cuota efectiva:</strong> 221€/mes</li>
      </ul>

      <h3>Senior (45 años)</h3>
      <ul>
        <li><strong>Ingresos:</strong> 5.000-8.000€/mes</li>
        <li><strong>Estrategia:</strong> Tramo 15, optimizar jubilación</li>
        <li><strong>Complemento:</strong> Seguros completos</li>
        <li><strong>Cuota efectiva:</strong> 265€/mes</li>
      </ul>

      <h3>Estacional (30 años)</h3>
      <ul>
        <li><strong>Ingresos:</strong> 6 meses 4.000€, 6 meses 500€</li>
        <li><strong>Estrategia:</strong> Cambios mensuales</li>
        <li><strong>Ahorro:</strong> Evita sobrecotizar meses bajos</li>
      </ul>

      <h2>Herramientas de optimización</h2>

      <h3>Calculadoras</h3>
      <ul>
        <li><strong>SS Simulador:</strong> <a href="https://portal.seg-social.gob.es" target="_blank">portal.seg-social.gob.es</a> (oficial)</li>
        <li><strong>TaxDown:</strong> Simula ahorro fiscal</li>
        <li><strong>Infoautónomos:</strong> Calculadoras prestaciones</li>
      </ul>

      <h3>Apps de seguimiento</h3>
      <ul>
        <li><strong>Holded / Quipu:</strong> Proyección rendimientos en tiempo real</li>
        <li><strong>Notion:</strong> Dashboard ingresos/gastos/rendimiento neto</li>
        <li><strong>Excel:</strong> Template control cotización</li>
      </ul>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Cambiar retroactivamente?</h3>
      <p>No. Cambios efectivos desde el mes siguiente. No se puede modificar meses pasados.</p>

      <h3>¿Qué pasa si no declaro cambios?</h3>
      <p>En regularización anual, SS reclama diferencia. Mejor ajustar mensualmente.</p>

      <h3>¿Gastos cuota deducibles?</h3>
      <p>Sí, <strong>100% deducible</strong> en IRPF y reduce rendimiento neto para SS.</p>

      <h3>¿Tarifa plana y cambiar tramo?</h3>
      <p>Primeros 12 meses (80€): no puedes cambiar. Desde mes 13: sí, si cumples requisitos (< SMI).</p>

      <h2>Mutuas: La protección adicional que debes conocer</h2>
      <p>Además de la cotización obligatoria a la Seguridad Social, puedes estar adscrito a una <strong>Mutua Colaboradora</strong>:</p>

      <h3>¿Qué es una Mutua?</h3>
      <p>Son entidades privadas colaboradoras de la SS que gestionan:</p>
      <ul>
        <li><strong>IT (Incapacidad Temporal):</strong> Bajas por enfermedad/accidente</li>
        <li><strong>Contingencias profesionales:</strong> Si pagas la cotización adicional</li>
        <li><strong>Cese de actividad:</strong> Prestación por paro de autónomos</li>
      </ul>

      <h3>Ventajas de elegir buena Mutua</h3>
      <table>
        <thead>
          <tr><th>Mutua</th><th>Ventajas</th><th>Servicios adicionales</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Fremap</strong></td>
            <td>Asistencia rápida, buena reputación</td>
            <td>Prevención riesgos, formación gratuita</td>
          </tr>
          <tr>
            <td><strong>Mutua Universal</strong></td>
            <td>App móvil, telemedicina</td>
            <td>Fisioterapia, psicología incluida</td>
          </tr>
          <tr>
            <td><strong>MC Mutual</strong></td>
            <td>Red amplia centros</td>
            <td>Servicio prevención incluido</td>
          </tr>
          <tr>
            <td><strong>Umivale</strong></td>
            <td>Especializada en digital</td>
            <td>Servicio de salud mental</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Cómo cambiar de Mutua:</strong></p>
      <ol>
        <li>Solicitud online en Import@ss</li>
        <li>Período de cambio: 1-31 de marzo de cada año</li>
        <li>Efectivo desde el 1 de abril</li>
        <li>Proceso gratuito, sin penalizaciones</li>
      </ol>

      <h2>Cotización por contingencias profesionales</h2>
      <p>Además de la cuota base, puedes cotizar opcionalmente por <strong>accidentes de trabajo y enfermedades profesionales</strong>:</p>

      <h3>¿Qué cubre?</h3>
      <ul>
        <li><strong>Accidentes en jornada laboral:</strong> Caída trabajando en casa, lesión en oficina cliente</li>
        <li><strong>Enfermedades laborales:</strong> Síndrome túnel carpiano, problemas posturales, estrés laboral reconocido</li>
        <li><strong>In itinere:</strong> Accidentes yendo/volviendo de reunión con cliente</li>
      </ul>

      <h3>Coste adicional</h3>
      <p>Aproximadamente <strong>+30-50€/mes</strong> dependiendo del epígrafe IAE (developers suelen estar en el tramo bajo de riesgo)</p>

      <h3>¿Vale la pena?</h3>
      <table>
        <thead>
          <tr><th>Perfil</th><th>Recomendación</th><th>Motivo</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Developer remoto 100%</td>
            <td>Opcional, poco prioritario</td>
            <td>Bajo riesgo accidentes laborales</td>
          </tr>
          <tr>
            <td>Visitas frecuentes a clientes</td>
            <td>Recomendado</td>
            <td>Cubre accidentes in itinere</td>
          </tr>
          <tr>
            <td>Problemas ergonómicos previos</td>
            <td>Muy recomendado</td>
            <td>Mayor probabilidad IT por lesiones</td>
          </tr>
          <tr>
            <td>Trabajas solo sin respaldo</td>
            <td>Considerar seriamente</td>
            <td>Sin empresa, la IT es tu única red</td>
          </tr>
        </tbody>
      </table>

      <h2>Compatibilizando: Autónomo + Empleado</h2>
      <p>Cada vez más developers tienen <strong>contrato part-time en empresa + autónomo</strong>. Fiscalidad especial:</p>

      <h3>Pluriactividad: Cómo cotizar</h3>
      <p>Si trabajas como empleado y autónomo simultáneamente:</p>
      <ul>
        <li><strong>Cuota autónomo:</strong> Puedes solicitar <strong>reducción del 50%</strong> (cuota mínima ~112€/mes en 2026)</li>
        <li><strong>Requisito:</strong> Cotizar mínimo 960€/año como empleado</li>
        <li><strong>Solicitud:</strong> Modelo TA.0521-1 en Import@ss al darte de alta</li>
        <li><strong>Devolución anual:</strong> Si cotizas más del máximo conjunto (14.058€/año 2026), te devuelven el exceso</li>
      </ul>

      <h3>Ejemplo práctico: Developer part-time + freelance</h3>
      <pre><code>Situación:
- Empleado 20h/semana: Salario 1.500€/mes → Cotización SS ~450€/mes (empresa paga ~330€)
- Autónomo rendimiento: 2.000€/mes → Tramo 8

Sin pluriactividad:
- Cuota autónomo: 320€/mes × 12 = 3.840€/año
- Cuota empleado: 120€/mes × 12 = 1.440€/año
- Total cotizado: 5.280€/año

Con pluriactividad (reducción 50%):
- Cuota autónomo: 160€/mes × 12 = 1.920€/año
- Cuota empleado: 120€/mes × 12 = 1.440€/año
- Total cotizado: 3.360€/año
- AHORRO: 1.920€/año</code></pre>

      <h3>Límite máximo de cotización</h3>
      <p>En 2026, el tope conjunto de bases de cotización es <strong>14.058€/mes</strong>. Si sumas empleado + autónomo y superas esto:</p>
      <ol>
        <li>SS calcula el exceso cotizado</li>
        <li>Te lo devuelve automáticamente en junio del año siguiente</li>
        <li>No necesitas solicitarlo, es automático</li>
      </ol>

      <h2>Planificación de jubilación: Perspectiva a largo plazo</h2>

      <h3>Sistema de pensiones 2026: Realidad para autónomos</h3>
      <p>Datos oficiales Seguridad Social 2025:</p>
      <ul>
        <li><strong>Pensión media jubilación autónomos:</strong> 965€/mes (vs 1.450€ régimen general)</li>
        <li><strong>Tasa de sustitución:</strong> ~60% del último rendimiento (vs 80% empleados)</li>
        <li><strong>Años cotizados medios:</strong> 28 años (vs 36 años empleados)</li>
      </ul>

      <h3>Estrategias de complemento para jubilación</h3>

      <h4>Opción 1: Planes de pensiones individuales</h4>
      <table>
        <thead>
          <tr><th>Tipo</th><th>Ventaja fiscal</th><th>Aportación máxima</th><th>Liquidez</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Plan pensiones individual</td>
            <td>Deducible hasta 1.500€/año</td>
            <td>1.500€/año</td>
            <td>Baja (solo jubilación/IT grave)</td>
          </tr>
          <tr>
            <td>Plan pensiones empleo</td>
            <td>Deducible hasta 8.500€/año</td>
            <td>8.500€/año</td>
            <td>Baja</td>
          </tr>
          <tr>
            <td>PIAS</td>
            <td>Exento hasta 8.000€/año</td>
            <td>Sin límite</td>
            <td>5 años mínimo</td>
          </tr>
        </tbody>
      </table>

      <h4>Opción 2: Cotización voluntaria adicional</h4>
      <p>Puedes <strong>cotizar voluntariamente por encima</strong> de tu rendimiento real:</p>
      <ul>
        <li>Pagas cuota de tramo superior al que te corresponde</li>
        <li>Mejora tu base reguladora para pensión</li>
        <li>Sigue siendo deducible 100% en IRPF</li>
        <li><strong>Inconveniente:</strong> Capital "secuestrado" hasta jubilación, sin rentabilidad</li>
      </ul>

      <h4>Opción 3: Inversión privada (sin ventaja fiscal directa)</h4>
      <ul>
        <li><strong>Fondos indexados:</strong> Rentabilidad media 7-8% anual histórico</li>
        <li><strong>ETFs:</strong> Flexibilidad y liquidez inmediata</li>
        <li><strong>Inmuebles:</strong> Inversión tangible con rentas</li>
        <li><strong>Ventaja:</strong> Liquidez total, rentabilidad potencial alta</li>
        <li><strong>Desventaja:</strong> No deducible fiscalmente, riesgo mercado</li>
      </ul>

      <h3>Simulación comparativa: 30 años de cotización</h3>
      <p><strong>Developer, 35 años, proyección 30 años hasta jubilación (65 años):</strong></p>

      <h4>Escenario A: Cotización mínima + inversión privada</h4>
      <pre><code>Cotización mensual: Tramo 3 (267€) = 3.204€/año
Inversión adicional: 200€/mes en fondos indexados = 2.400€/año
Total: 5.604€/año

A los 65 años:
- Pensión pública: ~850€/mes
- Capital acumulado fondos (7% anual): ~227.000€
  · Renta mensual (4% retiro): ~750€/mes
- Total disponible: 850€ + 750€ = 1.600€/mes</code></pre>

      <h4>Escenario B: Cotización alta sin inversión adicional</h4>
      <pre><code>Cotización mensual: Tramo 10 (340€) = 4.080€/año
Inversión adicional: 0€

A los 65 años:
- Pensión pública: ~1.400€/mes
- Capital acumulado: 0€
- Total disponible: 1.400€/mes</code></pre>

      <h4>Análisis:</h4>
      <p>Escenario A aporta <strong>200€ más de liquidez mensual</strong> en jubilación, con <strong>capital de 227k€ disponible</strong> para emergencias o herencia. Escenario B tiene menos liquidez y cero capital.</p>

      <h2>Gestión de períodos sin actividad</h2>

      <h3>¿Qué hacer si paras temporalmente?</h3>
      <p>Tres opciones según duración de la pausa:</p>

      <h4>1. Pausa corta (1-3 meses): Mantén alta con tramo mínimo</h4>
      <ul>
        <li>Baja al tramo 1 (225€/mes)</li>
        <li><strong>Ventaja:</strong> Mantienes continuidad cotización, no pierdes antigüedad</li>
        <li><strong>Desventaja:</strong> Pagas cuota aunque no factures</li>
        <li><strong>Ideal para:</strong> Entre proyectos, buscando nuevos clientes</li>
      </ul>

      <h4>2. Pausa media (3-12 meses): Baja temporal</h4>
      <ul>
        <li>Tramita baja en RETA (Import@ss)</li>
        <li>Baja censal en Hacienda (modelo 036)</li>
        <li><strong>Ventaja:</strong> No pagas cuota, ahorras ~2.700-4.000€</li>
        <li><strong>Desventaja:</strong> Pierdes cobertura IT, no cotizas para jubilación</li>
        <li><strong>Ideal para:</strong> Sabático, formación intensiva, proyecto empleado temporal</li>
      </ul>

      <h4>3. Pausa larga (> 12 meses): Baja definitiva y reevaluación</h4>
      <ul>
        <li>Baja completa como autónomo</li>
        <li>Busca empleo por cuenta ajena si es opción</li>
        <li>Al volver, puedes usar tarifa plana de nuevo si pasaron +2 años</li>
      </ul>

      <h3>Baja temporal: Proceso paso a paso</h3>
      <ol>
        <li><strong>Antes de la baja:</strong> Cobra todas las facturas pendientes</li>
        <li><strong>Último día de actividad:</strong> Emite última factura</li>
        <li><strong>Día siguiente:</strong> Tramita baja en Import@ss (efectiva desde día siguiente)</li>
        <li><strong>Dentro de 30 días:</strong> Presenta modelo 036 de baja censal en AEAT</li>
        <li><strong>Al mes siguiente:</strong> Presenta modelos fiscales del último trimestre (303, 130, 349 si aplica)</li>
        <li><strong>Año siguiente:</strong> Declaración IRPF (Renta) incluyendo período de actividad</li>
      </ol>

      <h3>Reincorporación: ¿Mantengo tarifa plana?</h3>
      <p><strong>Regla:</strong> Si usaste tarifa plana y te diste de baja, para volver a usarla deben pasar:</p>
      <ul>
        <li><strong>2 años</strong> desde la baja si NO usaste tarifa plana la primera vez</li>
        <li><strong>3 años</strong> desde la baja si SÍ usaste tarifa plana</li>
      </ul>

      <p><strong>Excepción:</strong> Si tu baja fue por maternidad/paternidad, IT larga o violencia de género, NO se pierde el derecho a tarifa plana</p>

      <h2>Situaciones especiales: IT, maternidad, excedencias</h2>

      <h3>Incapacidad Temporal (IT): Baja médica siendo autónomo</h3>

      <h4>Requisitos para cobrar IT</h4>
      <ul>
        <li><strong>Contingencias comunes:</strong> 180 días cotizados en últimos 5 años</li>
        <li><strong>Contingencias profesionales:</strong> No necesitas período previo (si cotizas por ellas)</li>
        <li><strong>Parte médico:</strong> Presentado en Mutua en 48-72h desde inicio</li>
      </ul>

      <h4>Cuantías IT</h4>
      <table>
        <thead>
          <tr><th>Día de baja</th><th>% sobre base</th><th>Ejemplo tramo 6 (1.500€)</th></tr>
        </thead>
        <tbody>
          <tr><td>1-3</td><td>0%</td><td>0€</td></tr>
          <tr><td>4-20</td><td>60%</td><td>900€/mes (30€/día)</td></tr>
          <tr><td>21-365</td><td>75%</td><td>1.125€/mes (37,5€/día)</td></tr>
          <tr><td>366+</td><td>75%</td><td>1.125€/mes (puede pasar a IP)</td></tr>
        </tbody>
      </table>

      <h4>Gestión práctica de IT</h4>
      <ol>
        <li><strong>Día 1 baja:</strong> Médico de cabecera emite parte de baja</li>
        <li><strong>Dentro 72h:</strong> Presentas parte en tu Mutua (online o presencial)</li>
        <li><strong>Partes de confirmación:</strong> Cada 7-15 días según patología</li>
        <li><strong>Cobro:</strong> Primer pago a partir día 4, cobras días 21 del mes siguiente</li>
        <li><strong>Alta médica:</strong> Médico emite parte de alta, vuelves a cotización normal</li>
      </ol>

      <h3>Maternidad/Paternidad</h3>
      <p>Autónomos tienen derecho a prestación igual que empleados:</p>
      <ul>
        <li><strong>Duración:</strong> 16 semanas (ampliable por parto múltiple, discapacidad, etc.)</li>
        <li><strong>Cuantía:</strong> 100% de la base de cotización</li>
        <li><strong>Cotización durante baja:</strong> Exenta (no pagas cuota pero se considera cotizado)</li>
        <li><strong>Requisito:</strong> 180 días cotizados si < 21 años, 360 días si 21-26 años, 180 días en últimos 7 años si > 26 años</li>
      </ul>

      <h2>Excel de control: Plantilla descargable</h2>
      <p>Crea un Excel con estas pestañas para optimizar tu cotización:</p>

      <h3>Pestaña 1: Seguimiento mensual</h3>
      <pre><code>| Mes | Ingresos | Gastos | Rendimiento Neto | Tramo Actual | Cuota Pagada | Tramo Óptimo | Acción |
|-----|----------|--------|------------------|--------------|--------------|--------------|--------|
| Ene | 4.500€   | 1.200€ | 3.300€          | 10           | 340€         | 11           | Subir  |
| Feb | 3.800€   | 1.000€ | 2.800€          | 11           | 370€         | 11           | OK     |</code></pre>

      <h3>Pestaña 2: Proyección anual</h3>
      <ul>
        <li>Suma acumulada rendimientos</li>
        <li>Promedio mensual YTD</li>
        <li>Tramo correspondiente a promedio</li>
        <li>Diferencia vs cotización real → Proyección regularización</li>
      </ul>

      <h3>Pestaña 3: Comparativa estrategias</h3>
      <ul>
        <li>Escenario A: Tramo fijo todo el año</li>
        <li>Escenario B: Ajustes trimestrales</li>
        <li>Escenario C: Ajustes mensuales</li>
        <li>Comparación costes y ahorro</li>
      </ul>

      <h2>Alertas y recordatorios fiscales automáticos</h2>

      <h3>Configuración en Google Calendar</h3>
      <p>Crea eventos recurrentes:</p>
      <ul>
        <li><strong>Día 25 de cada mes:</strong> "Revisar rendimiento y decidir cambio tramo SS" (efectivo mes siguiente)</li>
        <li><strong>Día 1 del mes:</strong> "Último día para cambiar tramo - Import@ss"</li>
        <li><strong>Marzo cada año:</strong> "Ventana cambio de Mutua (1-31 marzo)"</li>
        <li><strong>Abril cada año:</strong> "Revisar cotización del año anterior para regularización"</li>
        <li><strong>Junio cada año:</strong> "Devolución exceso cotización pluriactividad (si aplica)"</li>
      </ul>
    `,
    sources: [
      { title: 'Cotización trabajadores autónomos - Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores' },
      { title: 'Real Decreto-ley 13/2022 sistema cotización - BOE', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482' },
      { title: 'Import@ss - Portal Seguridad Social', url: 'https://portal.seg-social.gob.es/wps/portal/importass' }
    ]
  },

  // 12. IA en la Gestión Fiscal
  {
    id: '12',
    slug: 'ia-gestion-fiscal-autonomos-herramientas-contabilidad-2026',
    title: 'IA en la Gestión Fiscal de Autónomos: Herramientas y Futuro 2026',
    metaDescription: 'Cómo la inteligencia artificial está revolucionando la contabilidad y gestión fiscal para autónomos: herramientas, automatización y mejores prácticas en 2026.',
    category: 'impuestos',
    publishDate: '2025-12-10',
    readTime: 15,
    featured: true,
    excerpt: 'La IA está transformando la gestión fiscal: desde categorización automática de gastos hasta asesoramiento fiscal personalizado. Descubre las mejores herramientas para 2026.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
    imageAlt: 'Inteligencia artificial y tecnología aplicada a finanzas',
    content: `
      <h2>La IA revoluciona la gestión fiscal: Herramientas que debes conocer</h2>
      <p>En 2026, la <strong>inteligencia artificial</strong> ha dejado de ser ciencia ficción para convertirse en una herramienta cotidiana para autónomos. Desde chatbots que resuelven dudas fiscales hasta sistemas que categorizan gastos automáticamente, la IA está reduciendo dramáticamente el tiempo dedicado a tareas administrativas.</p>

      <h2>🔑 3 Áreas Donde la IA Marca la Diferencia</h2>

      <h3>1. Categorización automática de gastos</h3>
      <p>Las plataformas modernas de contabilidad usan <strong>machine learning</strong> para clasificar tus gastos automáticamente:</p>
      <table>
        <thead>
          <tr><th>Herramienta</th><th>Funcionalidad IA</th><th>Precio</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Holded</strong></td><td>Categorización automática, OCR facturas, predicción flujo caja</td><td>Desde 29€/mes</td></tr>
          <tr><td><strong>Quipu</strong></td><td>Extracción datos facturas, sugerencias deducibles</td><td>Desde 25€/mes</td></tr>
          <tr><td><strong>Freebie</strong></td><td>Chatbot fiscal, automatización modelo 130/303</td><td>Desde 19€/mes</td></tr>
          <tr><td><strong>Notion AI + templates</strong></td><td>Automatización workflows, recordatorios fiscales</td><td>10$/mes</td></tr>
        </tbody>
      </table>
      <p><strong>Ejemplo real:</strong> Subes la foto de un ticket de Amazon. La IA extrae: fecha, importe, IVA, proveedor y <strong>categoriza automáticamente</strong> como "Hardware - Equipamiento informático - Deducible 100%".</p>

      <h3>2. Asistentes fiscales con IA conversacional</h3>
      <p>Los chatbots fiscales de 2026 han alcanzado un nivel de sofisticación impresionante:</p>
      <ul>
        <li><strong>ChatGPT + plugins fiscales:</strong> Puedes preguntarle "¿Puedo deducir un monitor de 600€?" y te responde con normativa específica</li>
        <li><strong>Asistentes integrados en gestorías:</strong> Muchas gestorías ofrecen bots que resuelven el 80% de dudas comunes</li>
        <li><strong>Freebie AI:</strong> Chatbot especializado en fiscalidad española, entiende contexto y casos específicos</li>
      </ul>
      <p><strong>Prompt útil para ChatGPT:</strong></p>
      <pre><code>"Actúa como asesor fiscal español especializado en autónomos tech. 
Mi situación: facturación anual 45.000€, gastos 12.000€. 
¿Qué puedo optimizar fiscalmente?"</code></pre>

      <h3>3. Predicción y optimización fiscal</h3>
      <p>La IA puede <strong>simular escenarios</strong> y optimizar tu fiscalidad en tiempo real:</p>
      <ul>
        <li><strong>Predicción de cuota trimestral:</strong> Basado en tus ingresos hasta la fecha, predice el modelo 130</li>
        <li><strong>Optimización de tramo de cotización:</strong> Sugiere cambios de tramo según tu facturación mensual</li>
        <li><strong>Alertas de oportunidades:</strong> "Si gastas 300€ más en formación este trimestre, bajas un tramo de IRPF"</li>
        <li><strong>Simulación de escenarios:</strong> "¿Qué pasa si facturo 10.000€ más este año?"</li>
      </ul>

      <div class="tip-box">
        <h4>💡 Consejo para Desarrolladores</h4>
        <p>Como dev, puedes ir un paso más allá: <strong>automatiza tu contabilidad con APIs</strong>. Herramientas como Holded, Quipu o Freebie tienen APIs que permiten integración con tus propios scripts. Ejemplo: un script que lee tus facturas de Stripe/PayPal, las sube automáticamente a Holded y categoriza según reglas personalizadas. Con <strong>n8n (plataforma de automatización)</strong> puedes crear workflows sin código que conecten tus herramientas fiscales con Notion, Google Sheets, etc.</p>
      </div>

      <h2>Herramientas de IA gratuitas o económicas</h2>
      
      <h3>Para categorización de gastos:</h3>
      <ul>
        <li><strong>Google Sheets + Apps Script:</strong> Crea scripts con IA (ChatGPT Code Interpreter) para automatizar categorización</li>
        <li><strong>Notion AI:</strong> Usa bases de datos con IA para clasificar gastos y generar resúmenes</li>
        <li><strong>Receipt-Bank / Dext:</strong> OCR + categorización automática (desde 15€/mes)</li>
      </ul>

      <h3>Para asesoramiento fiscal:</h3>
      <ul>
        <li><strong>ChatGPT 4:</strong> Con prompts bien diseñados, resuelve el 70% de dudas fiscales comunes</li>
        <li><strong>Perplexity AI:</strong> Especializado en búsqueda, excelente para normativa actualizada</li>
        <li><strong>Claude (Anthropic):</strong> Mejor para análisis de documentos fiscales largos (BOE, AEAT)</li>
      </ul>

      <h3>Para automatización:</h3>
      <ul>
        <li><strong>n8n:</strong> Plataforma open-source de automatización (self-hosted gratis)</li>
        <li><strong>Make (Integromat):</strong> Conecta apps sin código (plan gratuito limitado)</li>
        <li><strong>Zapier:</strong> Automatizaciones simples (15 zaps gratis)</li>
      </ul>

      <h2>Casos de uso prácticos en 2026</h2>

      <h4>Caso 1: Automatización de facturación</h4>
      <p>Setup: Stripe → n8n → Holded → Google Drive</p>
      <ol>
        <li>Cliente paga en Stripe</li>
        <li>n8n detecta el pago, extrae datos</li>
        <li>Genera factura automática en Holded</li>
        <li>Envía PDF al cliente y guarda copia en Drive</li>
        <li>Categoriza ingreso para modelo 130</li>
      </ol>

      <h4>Caso 2: Dashboard fiscal con IA</h4>
      <p>Usando Notion AI + integración con banca:</p>
      <ul>
        <li>Conecta tu banco a Notion (via API o importación CSV)</li>
        <li>IA categoriza gastos automáticamente</li>
        <li>Dashboard muestra: gastos deducibles YTD, cuota SS pagada, predicción IRPF</li>
        <li>Alertas automáticas: "Falta presentar modelo 303 - plazo: 5 días"</li>
      </ul>

      <h4>Caso 3: Chatbot fiscal personalizado</h4>
      <p>Con ChatGPT + contexto de tu situación:</p>
      <pre><code>Prompt inicial: "Guarda este contexto: soy autónomo desde 2024, 
IAE 763, facturación 2026: 55k€, gastos deducibles: 15k€, 
clientes: 70% España, 30% UE."

Luego preguntas específicas como:
"¿Cuánto pagaré en el modelo 130 del Q2 si facturo 15k€ más?"</code></pre>

      <h2>El futuro: ¿Gestorías automáticas?</h2>
      <p>En 2026 ya existen <strong>gestorías semi-automatizadas</strong>:</p>
      <ul>
        <li><strong>Modelo híbrido:</strong> IA + supervisor humano para casos complejos</li>
        <li><strong>Precio disruptivo:</strong> Desde 50€/mes (vs 150-300€ gestoría tradicional)</li>
        <li><strong>Ejemplos:</strong> Declarando (ahora con IA), TaxDown (optimización IRPF con IA), Freebie (automatización completa)</li>
      </ul>
      <p>La IA no reemplaza completamente a gestores fiscales para casos complejos, pero <strong>reduce costes y tiempo</strong> en tareas rutinarias.</p>

      <h2>Limitaciones y precauciones</h2>
      <ul>
        <li><strong>IA no es infalible:</strong> Siempre revisa sugerencias en casos críticos</li>
        <li><strong>Privacidad de datos:</strong> Asegúrate de que las herramientas cumplen RGPD</li>
        <li><strong>Normativa cambiante:</strong> La IA puede no estar actualizada (verifica fechas)</li>
        <li><strong>Casos complejos:</strong> Para criptomonedas, herencias, consulta profesional</li>
      </ul>

      <h2>Prompts específicos para gestión fiscal</h2>
      <p>Prompts probados para ChatGPT, Claude o Perplexity:</p>

      <h3>Prompt 1: Categorización de gastos</h3>
      <pre><code>"Soy autónomo developer en España (IAE 763).
Gasto: [descripción del ticket/factura]
Importe: [X]€
¿Es deducible? ¿En qué %? ¿Categoría contable?
Referencia normativa."</code></pre>

      <h3>Prompt 2: Optimización trimestral</h3>
      <pre><code>"Contexto: Autónomo developer España
Q1 2026:
- Ingresos: 15.000€
- Gastos: 3.500€
- Retenciones: 1.200€
- Cuota SS: 882€

Calcula: Modelo 130, sugerencias optimización."</code></pre>

      <h3>Prompt 3: Verificación factura</h3>
      <pre><code>"Revisa esta factura y verifica cumple requisitos 
legales autónomo español 2026:
[Pegar factura]

Señala errores y correcciones."</code></pre>

      <h3>Prompt 4: Simulación escenarios</h3>
      <pre><code>"Situación: Rendimiento 35.000€/año
Escenario: Sumo 10.000€ más facturación

Calcula impacto:
1. IRPF (tramo marginal)
2. Cotización SS
3. Beneficio neto real
4. ¿Vale la pena?"</code></pre>

      <h3>Prompt 5: Asistente personalizado</h3>
      <pre><code>"Eres mi asesor fiscal autónomos tech España.

Mi situación:
- Actividad: Desarrollo web (IAE 763)
- Facturación 2026: 55.000€
- Gastos: 12.000€
- Clientes: 60% España, 40% UE
- Régimen: General, Estimación Directa

Guarda contexto y responde con referencias legales."</code></pre>

      <h2>Workflows de automatización con IA</h2>

      <h3>Workflow 1: Facturación automática</h3>
      <p><strong>Stack:</strong> Stripe + n8n + Holded + Gmail</p>
      <ol>
        <li><strong>Trigger:</strong> Pago en Stripe</li>
        <li>Extrae datos del pago</li>
        <li>Si cliente UE, verifica VAT en VIES</li>
        <li>Crea factura en Holded con IVA correcto</li>
        <li>Envía PDF al cliente</li>
        <li>Guarda en Google Drive</li>
        <li>Añade a Sheet para tracking</li>
        <li>Si UE, añade a lista modelo 349</li>
      </ol>
      <p><strong>Tiempo:</strong> 15 min/factura → 0 min (100% automático)</p>

      <h3>Workflow 2: Categorización gastos IA</h3>
      <p><strong>Stack:</strong> Google Sheets + OpenAI API + Apps Script</p>
      <ol>
        <li>Añades gasto a Sheet: [Fecha | Concepto | Importe]</li>
        <li>Script ejecuta cada noche</li>
        <li>Envía conceptos a OpenAI con prompt</li>
        <li>IA devuelve: Categoría, % deducible, cuenta</li>
        <li>Actualiza Sheet automáticamente</li>
        <li>Dashboard muestra gastos deducibles YTD</li>
      </ol>
      <p><strong>Coste:</strong> ~2-5€/mes | <strong>Ahorro:</strong> 1-2h/mes</p>

      <h3>Workflow 3: Recordatorios inteligentes</h3>
      <p><strong>Stack:</strong> Notion + Notion AI + Google Calendar</p>
      <ul>
        <li>BD Notion con fechas fiscales (130, 303, 349, IRPF)</li>
        <li>IA revisa ingresos/gastos y predice cuota</li>
        <li>Recordatorio Calendar 7 días antes con importe</li>
        <li>Notifica: "Modelo 130 Q1: pagar ~1.200€ antes 20 abril"</li>
      </ul>

      <h2>ROI de implementar IA</h2>

      <h3>Análisis coste-beneficio anual</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Sin IA</th><th>Con IA</th><th>Ahorro</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiempo gestión/mes</td>
            <td>8-12h</td>
            <td>2-3h</td>
            <td>9h/mes = 108h/año</td>
          </tr>
          <tr>
            <td>Valor hora</td>
            <td>40-60€</td>
            <td>40-60€</td>
            <td>4.320-6.480€/año</td>
          </tr>
          <tr>
            <td>Coste herramientas</td>
            <td>0€</td>
            <td>300-600€/año</td>
            <td>-300-600€</td>
          </tr>
          <tr>
            <td>Errores evitados</td>
            <td>~200-500€</td>
            <td>~50€</td>
            <td>150-450€/año</td>
          </tr>
          <tr>
            <td><strong>AHORRO NETO</strong></td>
            <td>-</td>
            <td>-</td>
            <td><strong>4.170-6.330€/año</strong></td>
          </tr>
        </tbody>
      </table>
      <p><strong>ROI:</strong> Inviertes 300-600€, ahorras 4.000-6.000€ → <strong>Retorno 7-20x</strong></p>

      <h2>Stack según presupuesto</h2>

      <h3>Tier 1: Gratuito (0-20€/mes)</h3>
      <ul>
        <li><strong>Contabilidad:</strong> Google Sheets + Apps Script + ChatGPT free</li>
        <li><strong>Facturación:</strong> Templates Google Docs</li>
        <li><strong>Alertas:</strong> Google Calendar + IFTTT</li>
        <li><strong>Asesoramiento:</strong> ChatGPT + Perplexity</li>
        <li><strong>Ideal:</strong> < 20k€/año</li>
      </ul>

      <h3>Tier 2: Económico (20-60€/mes)</h3>
      <ul>
        <li><strong>Contabilidad:</strong> Freebie (19€) o Quipu (25€)</li>
        <li><strong>IA:</strong> ChatGPT Plus (20€)</li>
        <li><strong>Automatización:</strong> Make/Zapier starter</li>
        <li><strong>Ideal:</strong> 20-50k€/año</li>
      </ul>

      <h3>Tier 3: Profesional (60-150€/mes)</h3>
      <ul>
        <li><strong>Contabilidad:</strong> Holded (49€) o Quipu Premium (40€)</li>
        <li><strong>IA:</strong> ChatGPT Plus + Claude Pro</li>
        <li><strong>Automatización:</strong> n8n cloud (20€)</li>
        <li><strong>IVA internacional:</strong> Quaderno (49€)</li>
        <li><strong>Ideal:</strong> > 50k€/año, clientes UE</li>
      </ul>

      <h3>Tier 4: Gestoría híbrida (150-300€/mes)</h3>
      <ul>
        <li><strong>Gestoría digital:</strong> Freebie Premium o Declarando</li>
        <li><strong>IA:</strong> ChatGPT + Claude para dudas inmediatas</li>
        <li><strong>Todo gestionado:</strong> Modelos, contabilidad, nóminas</li>
        <li><strong>Ideal:</strong> > 100k€/año, SL, casos complejos</li>
      </ul>

      <h2>Casos de uso avanzados</h2>

      <h3>Caso 1: Análisis predictivo trimestral</h3>
      <p>Usa ChatGPT Code Interpreter o Claude con Python:</p>
      <pre><code>"Adjunto: CSV facturas enero-marzo

Analiza:
1. Rendimiento neto trimestre
2. Predice cuota modelo 130
3. Compara trimestres anteriores
4. Sugiere optimizaciones
5. Genera gráfico evolución

Formato Python pandas + matplotlib"</code></pre>

      <h3>Caso 2: Auditoría deducibilidad</h3>
      <pre><code>"Adjunto: Lista gastos 2026

Genera tabla:
| Gasto | Importe | % Deducible | Justificación | Alerta |

Señala gastos dudosos inspección."</code></pre>

      <h3>Caso 3: Simulador jubilación</h3>
      <pre><code>"Datos:
- Edad: 35 años
- Cotización prevista: Tramo 8 (2.000€)
- Años: 35
- Inflación: 2%

Simula:
1. Pensión estimada a los 67
2. Poder adquisitivo euros 2026
3. Comparación tramo 12
4. Aportación plan pensiones privado"</code></pre>

      <h2>IA vs Gestoría: Comparativa 2026</h2>

      <table>
        <thead>
          <tr><th>Aspecto</th><th>Gestoría</th><th>IA Auto</th><th>Híbrida</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Coste/mes</td>
            <td>150-300€</td>
            <td>20-80€</td>
            <td>80-150€</td>
          </tr>
          <tr>
            <td>Respuesta</td>
            <td>24-48h</td>
            <td>Inmediato</td>
            <td>Inmediato + 48h</td>
          </tr>
          <tr>
            <td>Precisión simple</td>
            <td>100%</td>
            <td>85-90%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Casos complejos</td>
            <td>Experto</td>
            <td>Validar</td>
            <td>Experto</td>
          </tr>
          <tr>
            <td>Automatización</td>
            <td>Baja-Media</td>
            <td>Alta</td>
            <td>Alta</td>
          </tr>
          <tr>
            <td>Disponibilidad</td>
            <td>Oficina</td>
            <td>24/7</td>
            <td>24/7 + oficina</td>
          </tr>
        </tbody>
      </table>

      <h2>Futuro IA fiscal: 2027-2030</h2>

      <h3>2027: Integración Hacienda</h3>
      <ul>
        <li>IA lee movimientos bancarios (con autorización)</li>
        <li>Genera borradores automáticos modelos</li>
        <li>AEAT valida tiempo real</li>
      </ul>

      <h3>2028: Agentes personales</h3>
      <ul>
        <li>Agente IA personal conoce historial completo</li>
        <li>Negociación automática aplazamientos</li>
        <li>Optimización proactiva: "Compra X para ahorrar Y"</li>
      </ul>

      <h3>2029-2030: Fiscalidad predictiva</h3>
      <ul>
        <li>IA predice inspecciones (80% precisión)</li>
        <li>Simulaciones vida fiscal en segundos</li>
        <li>Blockchain facturas: validación instantánea</li>
      </ul>

      <h2>Recursos y comunidades</h2>

      <h3>Herramientas gratuitas</h3>
      <ul>
        <li><strong>ChatGPT Fiscal Prompts:</strong> Repositorio GitHub con prompts testados</li>
        <li><strong>n8n Templates:</strong> Workflows contabilidad listos</li>
        <li><strong>Google Sheets Templates:</strong> Fórmulas + Apps Script</li>
      </ul>

      <h3>Comunidades</h3>
      <ul>
        <li><strong>Reddit r/autonomos:</strong> 15k+ miembros</li>
        <li><strong>Telegram Autónomos Tech:</strong> Developers freelance</li>
        <li><strong>Discord Freelance Spain:</strong> Canales fiscalidad</li>
      </ul>

      <h3>Cursos</h3>
      <ul>
        <li><strong>Udemy - Contabilidad Developers:</strong> ~20€</li>
        <li><strong>Domestika - Finanzas Freelance:</strong> ~30€</li>
        <li><strong>YouTube:</strong> Declarando, TaxDown, Infoautónomos</li>
      </ul>

      <div class="tip-box">
        <h4>🎯 Plan acción: IA en 30 días</h4>
        <p><strong>Semana 1:</strong> Prueba ChatGPT/Claude con prompts fiscales. <strong>Semana 2:</strong> Google Sheets con categorización automática. <strong>Semana 3:</strong> Automatiza facturación Stripe + n8n. <strong>Semana 4:</strong> Dashboard Notion con predicción trimestral. <strong>Resultado:</strong> De 10h/mes a 2h/mes, mejor control, menos errores.</p>
      </div>

      <h2>Conclusión: El momento es ahora</h2>
      <p>La IA fiscal es el <strong>presente de 2026</strong>. Autónomos que adoptan estas herramientas ahorran tiempo, dinero y reducen estrés. No necesitas ser experto: herramientas no-code y prompts bien diseñados permiten que cualquiera automatice su contabilidad.</p>
      <p><strong>Primer paso:</strong> Prueba ChatGPT con uno de los prompts. <strong>Segundo paso:</strong> Configura herramienta con IA. <strong>Tercer paso:</strong> Automatiza tu proceso más tedioso. En 30 días, habrás transformado tu gestión fiscal.</p>
    `,
    sources: [
      { title: 'Holded - Software de gestión con IA', url: 'https://www.holded.com/' },
      { title: 'Quipu - Contabilidad automatizada', url: 'https://getquipu.com/' },
      { title: 'Freebie - Gestoría digital con IA', url: 'https://getfreebie.com/' },
      { title: 'n8n - Automatización open source', url: 'https://n8n.io/' },
      { title: 'ChatGPT - OpenAI', url: 'https://chat.openai.com/' }
    ]
  }
];

export const categories = {
  impuestos: { label: 'Impuestos', color: 'bg-amber-500/20 text-amber-400' },
  internacional: { label: 'Internacional', color: 'bg-cyan-500/20 text-cyan-400' },
  gastos: { label: 'Gastos', color: 'bg-emerald-500/20 text-emerald-400' },
  cotizacion: { label: 'Cotización', color: 'bg-violet-500/20 text-violet-400' }
};

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string): BlogPost[] {
  // Primero intentamos encontrar posts de la misma categoría
  const sameCategoryPosts = posts.filter(
    post => post.slug !== currentSlug && post.category === category
  );
  
  // Si hay suficientes posts de la misma categoría, devolvemos hasta 2
  if (sameCategoryPosts.length >= 2) {
    return sameCategoryPosts.slice(0, 2);
  }
  
  // Si no hay suficientes, completamos con posts de otras categorías
  const otherPosts = posts.filter(post => post.slug !== currentSlug && post.category !== category);
  
  // Combinamos los posts de la misma categoría con otros posts hasta tener 2
  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 2);
  
  return relatedPosts;
}
