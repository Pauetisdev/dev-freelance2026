export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: 'impuestos' | 'internacional' | 'gastos' | 'cotizacion' | 'seguridad-social';
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
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop',
    imageAlt: 'Mapa mundial con conexiones digitales representando facturación internacional',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#por-que-vital" style="color: #3b82f6; text-decoration: none;">→ ¿Por qué es vital entender el IVA internacional?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#paises-fuera-ue" style="color: #3b82f6; text-decoration: none;">→ Operaciones con países fuera de la UE</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#intracomunitarias" style="color: #3b82f6; text-decoration: none;">→ Operaciones intracomunitarias</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#vies" style="color: #3b82f6; text-decoration: none;">→ Sistema VIES: Verificación del VAT</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#roi-modelo-349" style="color: #3b82f6; text-decoration: none;">→ Registro ROI y Modelo 349</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#errores" style="color: #3b82f6; text-decoration: none;">→ Errores comunes y sanciones</a></li>
        </ul>
      </div>

      <h2 id="por-que-vital">¿Por qué es vital entender el IVA internacional en 2026?</h2>
      <p>Como desarrollador freelance en España, trabajar con clientes internacionales es cada vez más común. Según datos de la Agencia Tributaria de 2026, el <strong>47% de los desarrolladores autónomos</strong> facturan regularmente a clientes fuera de España. El tratamiento del IVA varía significativamente según la ubicación del cliente y requiere un conocimiento preciso de la normativa para evitar sanciones.</p>
      
      <p>La <strong>Ley 37/1992 del IVA</strong> establece en su artículo 69 las operaciones no sujetas al impuesto, mientras que la <strong>Directiva 2006/112/CE</strong> regula las operaciones intracomunitarias. Las sanciones por error en la aplicación del IVA pueden oscilar entre 150€ y el 15% de las cuotas dejadas de ingresar, según el artículo 191 de la Ley General Tributaria.</p>

      <h2 id="paises-fuera-ue">Operaciones con países fuera de la UE: Artículo 69 LIVA</h2>
      
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

      <h2 id="intracomunitarias">Operaciones intracomunitarias: Inversión del sujeto pasivo</h2>
      
      <h3>Facturación a empresas de la Unión Europea</h3>
      <p>Cuando facturas servicios de desarrollo a empresas de <strong>los 26 Estados miembros de la UE</strong> (Alemania, Francia, Países Bajos, Irlanda, Italia, Portugal, etc.), se aplica el mecanismo de <strong>inversión del sujeto pasivo</strong> (reverse charge). Esto significa:</p>
      
      <ul>
        <li>Tú emites factura <strong>sin IVA español</strong> (0%)</li>
        <li>El cliente autoliquida el IVA en su país según su tipo (ej: 19% Alemania, 20% Francia)</li>
        <li>El IVA lo ingresa el cliente a su Hacienda, no a la española</li>
      </ul>

      <h3 id="vies">Sistema VIES: Verificación obligatoria del VAT</h3>
      <p>Antes de emitir cualquier factura sin IVA a un cliente de la UE, es <strong>obligatorio verificar</strong> que su número de identificación fiscal intracomunitario (VAT) es válido. La no verificación puede acarrear que Hacienda te reclame el IVA español (21%) más recargos.</p>

      <p><strong>Proceso de verificación VIES:</strong></p>
      <ol>
        <li>Accede a <a href="https://ec.europa.eu/taxation_customs/vies/" target="_blank" rel="noopener">ec.europa.eu/taxation_customs/vies</a></li>
        <li>Introduce código país + número VAT (ej: DE123456789 para Alemania)</li>
        <li>Verifica que aparece "válido" con nombre y dirección correctos</li>
        <li><strong>Captura de pantalla obligatoria:</strong> Guarda con fecha visible como prueba</li>
        <li>Conserva la captura durante 4 años (plazo de prescripción)</li>
      </ol>

      <h3 id="roi-modelo-349">Registro ROI: Requisito previo</h3>
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
        <li><strong><a href="/blog/modelo-130-irpf-pagos-fraccionados-autonomos-2026">Modelo 130</a>:</strong> Pago fraccionado IRPF sobre rendimientos netos</li>
      </ul>

      <h2 id="errores">Errores comunes y sanciones</h2>
      
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
      { title: 'Sistema VIES - Comisión Europea', url: 'https://ec.europa.eu/taxation_customs/vies/' }
    ]
  },

  // 2. Gastos Deducibles Completa
  {
    id: '2',
    slug: 'gastos-deducibles-autonomos-desarrolladores-2026-guia-completa',
    title: 'Gastos Deducibles para Autónomos Desarrolladores en España 2026: Guía Completa',
    metaDescription: 'Lista exhaustiva de gastos deducibles para programadores freelance en España: hardware, software, suministros, formación, dietas. Actualizado 2026 con límites oficiales.',
    category: 'gastos',
    publishDate: '2026-01-04',
    readTime: 15,
    featured: true,
    excerpt: 'Guía completa de gastos deducibles para programadores autónomos: desde tu MacBook hasta las suscripciones cloud, pasando por formación, dietas (26,67€/día) y el 30% de suministros del hogar.',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&auto=format&fit=crop',
    imageAlt: 'Calculadora, facturas y ordenador representando gastos deducibles',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#requisitos" style="color: #3b82f6; text-decoration: none;">→ Requisitos legales para deducibilidad</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#hardware" style="color: #3b82f6; text-decoration: none;">→ Hardware y equipamiento tecnológico</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#software" style="color: #3b82f6; text-decoration: none;">→ Software y servicios cloud</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#suministros" style="color: #3b82f6; text-decoration: none;">→ Suministros del hogar (30% deducible)</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#formacion" style="color: #3b82f6; text-decoration: none;">→ Formación profesional</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#caso-practico" style="color: #3b82f6; text-decoration: none;">→ Caso práctico con ahorro real</a></li>
        </ul>
      </div>

      <h2>Maximiza tu rentabilidad: Gastos que puedes deducir legalmente</h2>
      <p>Como desarrollador autónomo en España, <strong>deducir correctamente los gastos profesionales</strong> puede ahorrarte entre 3.000€ y 8.000€ anuales en impuestos. Sin embargo, según datos de 2025 de la AEAT, el <strong>68% de los autónomos</strong> no deduce todos los gastos permitidos por desconocimiento de la normativa vigente.</p>
      
      <p>El <strong>artículo 30 de la Ley del IRPF</strong> (Ley 35/2006) establece que son deducibles todos los gastos necesarios para obtener los ingresos, siempre que estén debidamente justificados. Esta guía actualizada a 2026 te muestra exactamente qué puedes deducir, en qué porcentaje y cómo justificarlo ante Hacienda.</p>

      <h2 id="requisitos">Requisitos legales para que un gasto sea deducible (Art. 30 LIRPF)</h2>
      
      <p>Antes de deducir cualquier gasto, debe cumplir estos <strong>4 requisitos obligatorios</strong>:</p>
      <ol>
        <li><strong>Afectación:</strong> El gasto debe estar vinculado a la actividad económica</li>
        <li><strong>Justificación:</strong> Factura o ticket con tu nombre y NIF completo</li>
        <li><strong>Registro contable:</strong> Anotado en libro de gastos con fecha y concepto</li>
        <li><strong>Pago:</strong> Demostrable mediante extracto bancario o justificante</li>
      </ol>

      <p>Si falta alguno de estos requisitos, Hacienda puede <strong>rechazar la deducción</strong> en una inspección y reclamar la diferencia con recargos del 15-20%.</p>

      <h2 id="hardware">Categoría 1: Hardware y equipamiento tecnológico</h2>
      
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

      <h2 id="software">Categoría 2: Software, licencias y servicios cloud</h2>
      
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

      <h2 id="suministros">Categoría 3: Suministros del hogar para teletrabajo (30%)</h2>
      
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

      <p>Si Laura paga 15.000€ IRPF anual (tipo marginal 30%), esta deducción le ahorra: 84,72€ × 30% = <strong>25,42€ en impuestos</strong>. Parece poco, pero sumado a otros gastos como <a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">la cuota de autónomo</a> y el resto, el ahorro total es significativo.</p>

      <h2 id="formacion">Categoría 4: Formación profesional (100% deducible)</h2>
      
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
          <tr><td>Ropa (salvo uniformes)</td><td>No</td><td>Uso personal no justificable</td></tr>
          <tr><td>Gimnasio/Deporte</td><td>No</td><td>No vinculado a actividad</td></tr>
          <tr><td>Multas de tráfico</td><td>No</td><td>Art. 14.1.f LIRPF lo prohíbe</td></tr>
          <tr><td>Comidas sin cliente</td><td>No</td><td>Gasto personal</td></tr>
          <tr><td>Spotify/Netflix personal</td><td>No</td><td>Salvo uso demostrable profesional</td></tr>
          <tr><td>IRPF y sanciones</td><td>No</td><td>Expresamente excluidos</td></tr>
        </tbody>
      </table>

      <h2 id="caso-practico">Caso práctico completo: Desarrollador con gastos optimizados</h2>
      
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
      { title: 'Ley 35/2006 IRPF - Gastos deducibles', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' }
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
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop',
    imageAlt: 'MacBook Pro sobre escritorio de desarrollador',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#gasto-vs-amortizacion" style="color: #3b82f6; text-decoration: none;">→ Gasto directo vs amortización</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#umbral-300" style="color: #3b82f6; text-decoration: none;">→ Umbral de los 300€</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#tablas-oficiales" style="color: #3b82f6; text-decoration: none;">→ Tablas oficiales de amortización</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#calculo-practico" style="color: #3b82f6; text-decoration: none;">→ Cálculo práctico de amortización</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#registro-contable" style="color: #3b82f6; text-decoration: none;">→ Registro contable y justificación</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#software-licencias" style="color: #3b82f6; text-decoration: none;">→ Software y licencias</a></li>
        </ul>
      </div>

      <h2 id="gasto-vs-amortizacion">Gasto directo vs amortización: La clave para deducir tu equipamiento</h2>
      <p>Cuando compras un ordenador, monitor o cualquier equipo informático para tu actividad como desarrollador, la forma de deducirlo depende del precio de adquisición. La normativa fiscal española distingue entre <strong>bienes de escaso valor</strong> (gasto deducible directo) y <strong>bienes amortizables</strong> (deducción progresiva en varios ejercicios). Entender esta diferencia puede optimizar significativamente tu declaración de IRPF y evitar errores costosos en inspecciones.</p>

      <p>El <strong>Real Decreto 634/2015</strong> establece las tablas oficiales de amortización que todos los autónomos deben seguir. Para equipos informáticos, el coeficiente máximo de amortización lineal es del <strong>25% anual</strong>, lo que equivale a amortizar el bien en 4 años.</p>

      <h2 id="umbral-300">Umbral de los 300€: La línea divisoria fiscal</h2>
      
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
          <tr><td>Monitor 27" básico</td><td>280€</td><td>231,40€</td><td>Gasto directo</td></tr>
          <tr><td>Monitor 4K Dell 32"</td><td>450€</td><td>371,90€</td><td>Amortizable 4 años</td></tr>
          <tr><td>Teclado mecánico</td><td>180€</td><td>148,76€</td><td>Gasto directo</td></tr>
          <tr><td>MacBook Air M2</td><td>1.319€</td><td>1.090€</td><td>Amortizable 4 años</td></tr>
          <tr><td>MacBook Pro 16" M3</td><td>3.199€</td><td>2.644€</td><td>Amortizable 4 años</td></tr>
        </tbody>
      </table>

      <h2 id="tablas-oficiales">Tablas oficiales de amortización (RD 634/2015)</h2>
      
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

      <h2 id="calculo-practico">Cálculo práctico de amortización lineal</h2>
      
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

      <h2 id="registro-contable">Registro contable y justificación</h2>
      
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
        <h4>Consejo para Desarrolladores</h4>
        <p>Si planeas comprar equipamiento de alto valor (>2.000€), hazlo en <strong>enero</strong> para maximizar la deducción del primer año. Usa herramientas como <strong>Holded o Quipu</strong> que llevan automáticamente el libro de bienes de inversión y calculan amortizaciones. Además, considera comprar equipos modulares (monitor + ordenador separados) para aprovechar el umbral de 300€: un monitor de 280€ es gasto directo, otro de 280€ también. Si estás cerca de un tramo de cotización superior, la amortización reduce rendimiento neto y puede bajarte de tramo.</p>
      </div>

      <h2 id="software-licencias">Software y licencias: Amortización diferente</h2>
      
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
      { title: 'Real Decreto 634/2015 - Tablas oficiales amortización', url: 'https://www.boe.es/eli/es/rd/2015/07/10/634' }
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
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
    imageAlt: 'Documentos oficiales y formularios de alta de autónomo',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#elegir-iae" style="color: #3b82f6; text-decoration: none;">→ Elegir el IAE correcto</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#alta-hacienda" style="color: #3b82f6; text-decoration: none;">→ Alta censal en Hacienda</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#alta-seguridad-social" style="color: #3b82f6; text-decoration: none;">→ Alta en la Seguridad Social</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#obligaciones-fiscales" style="color: #3b82f6; text-decoration: none;">→ Obligaciones fiscales tras el alta</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#caso-practico" style="color: #3b82f6; text-decoration: none;">→ Caso práctico completo</a></li>
        </ul>
      </div>

      <h2 id="elegir-iae">Paso 1: Elegir el IAE correcto - 763 vs 845 vs 843</h2>
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
            <td>Más común para developers. No requiere titulación específica</td>
          </tr>
          <tr>
            <td><strong>845</strong></td>
            <td>Servicios de ingeniería y arquitectura técnica</td>
            <td>Consultoría IT, arquitectura de sistemas, auditorías técnicas, asesoría especializada</td>
            <td>Puede requerir colegiación profesional en algunos casos. Más regulado</td>
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

      <h2 id="alta-hacienda">Paso 2: Alta censal en Hacienda (Modelo 036/037)</h2>
      
      <h3>Modelo 036 vs 037: ¿Cuál usar?</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Modelo 036</th><th>Modelo 037</th></tr>
        </thead>
        <tbody>
          <tr><td>Complejidad</td><td>Completo (todas las opciones)</td><td>Simplificado (opcioneshabituales)</td></tr>
          <tr><td>Páginas</td><td>7-8 páginas</td><td>3-4 páginas</td></tr>
          <tr><td>Ideal para</td><td>Sociedades, casos complejos</td><td>Autónomos individuales</td></tr>
          <tr><td>Campos IAE</td><td>Múltiples epígrafes complejos</td><td>1-2 epígrafes</td></tr>
          <tr><td>Recomendación</td><td>Si tienes asesor</td><td>Developer estándar</td></tr>
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
        <li>Fecha de inicio anterior a hoy: Puedes tener problemas. Si ya facturaste, decláralo honestamente</li>
        <li>No marcar ROI si facturas a UE: Te lo pedirán después y retrasa cobros</li>
        <li>Poner domicilio de padres si no trabajas allí: El domicilio fiscal debe ser real</li>
        <li>Olvidar descargar justificante: Lo necesitas para la Seguridad Social</li>
      </ul>

      <h2 id="alta-seguridad-social">Paso 3: Alta en la Seguridad Social (RETA)</h2>
      
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

      <h2 id="obligaciones-fiscales">Paso 4: Obligaciones fiscales tras el alta</h2>
      
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

      <h2 id="caso-practico">Caso práctico completo: Carlos, developer junior</h2>
      
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
      { title: 'Modelo 036 Alta censal - Sede Electrónica AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml' }
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    imageAlt: 'Gráfico de barras representando tramos de cotización',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#sistema" style="color: #3b82f6; text-decoration: none;">→ Cómo funciona el sistema por ingresos reales</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#tabla-tramos" style="color: #3b82f6; text-decoration: none;">→ Tabla completa de 15 tramos</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#calculo" style="color: #3b82f6; text-decoration: none;">→ Cálculo del rendimiento neto</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#cambios" style="color: #3b82f6; text-decoration: none;">→ Cambios de tramo y estrategia</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#regularizacion" style="color: #3b82f6; text-decoration: none;">→ Regularización anual</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#estrategias" style="color: #3b82f6; text-decoration: none;">→ Estrategias avanzadas</a></li>
        </ul>
      </div>

      <h2 id="sistema">Cómo funciona el nuevo sistema de cotización por ingresos reales</h2>
      <p>Desde 2023, los autónomos en España cotizan en función de sus <strong>rendimientos netos reales</strong>, un cambio radical respecto al sistema anterior de base libre. En 2026, el sistema se ha estabilizado según lo establecido en el <strong>Real Decreto-ley 13/2022</strong>, y ahora es fundamental que como desarrollador freelance entiendas perfectamente cómo calcular tu cuota, cuándo cambiar de tramo y cómo evitar sorpresas en la regularización anual.</p>

      <p>El objetivo de esta reforma es que <strong>los autónomos con menores ingresos paguen menos</strong> y aquellos con rentas altas contribuyan más, creando un sistema más justo y progresivo similar al IRPF. Además, se elimina la incertidumbre de la "cuota plana" temporal y se establece un mecanismo transparente basado en rendimientos objetivos.</p>

      <h2 id="tabla-tramos">Tabla completa de tramos de cotización 2026</h2>
      <p>Estos son los <strong>15 tramos oficiales</strong> que establece la Seguridad Social para 2026. La cuota mensual que pagas depende de tu rendimiento neto mensual:</p>
      
      <table>
        <thead>
          <tr><th>Tramo</th><th>Rendimiento neto mensual</th><th>Cuota mensual</th><th>Cuota anual</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Hasta 670€</td><td>225€</td><td>2.700€</td></tr>
          <tr><td>2</td><td>670€ - 900€</td><td>250€</td><td>3.000€</td></tr>
          <tr><td>3</td><td>900€ - 1.166€</td><td>267€</td><td>3.204€</td></tr>
          <tr><td>4</td><td>1.166€ - 1.300€</td><td>291€</td><td>3.492€</td></tr>
          <tr><td>5</td><td>1.300€ - 1.500€</td><td>294€</td><td>3.528€</td></tr>
          <tr><td>6</td><td>1.500€ - 1.700€</td><td>294€</td><td>3.528€</td></tr>
          <tr><td>7</td><td>1.700€ - 1.850€</td><td>310€</td><td>3.720€</td></tr>
          <tr><td>8</td><td>1.850€ - 2.030€</td><td>315€</td><td>3.780€</td></tr>
          <tr><td>9</td><td>2.030€ - 2.330€</td><td>320€</td><td>3.840€</td></tr>
          <tr><td>10</td><td>2.330€ - 2.760€</td><td>340€</td><td>4.080€</td></tr>
          <tr><td>11</td><td>2.760€ - 3.190€</td><td>360€</td><td>4.320€</td></tr>
          <tr><td>12</td><td>3.190€ - 3.620€</td><td>380€</td><td>4.560€</td></tr>
          <tr><td>13</td><td>3.620€ - 4.050€</td><td>400€</td><td>4.800€</td></tr>
          <tr><td>14</td><td>4.050€ - 6.000€</td><td>450€</td><td>5.400€</td></tr>
          <tr><td>15</td><td>Más de 6.000€</td><td>530€</td><td>6.360€</td></tr>
        </tbody>
      </table>

      <p><strong>Nota importante:</strong> Los tramos se ajustarán anualmente según la evolución del Salario Mínimo Interprofesional (SMI) y el IPC, por lo que estos valores pueden variar ligeramente en años posteriores.</p>

      <h2 id="calculo">🧮 Cálculo del rendimiento neto: Fórmula paso a paso</h2>
      
      <h3>Paso 1: Calcula tu rendimiento neto anual</h3>
      <p>El primer paso es restar tus <a href="/blog/gastos-deducibles-autonomos-desarrolladores-2026-guia-completa">gastos deducibles</a> de tu facturación anual. Los gastos deducibles incluyen:</p>
      <ul>
        <li>Cuota de autónomo mensual (sí, es deducible)</li>
        <li>Alquiler de oficina o parte proporcional de tu vivienda</li>
        <li>Suministros (luz, internet, teléfono)</li>
        <li>Material informático y software</li>
        <li>Formación profesional</li>
        <li>Seguros profesionales</li>
        <li>Gastos financieros</li>
        <li>Dietas y desplazamientos</li>
      </ul>
      
      <pre><code>Rendimiento neto = Facturación anual - Gastos deducibles</code></pre>

      <h3>Paso 2: Aplica la reducción del 7%</h3>
      <p>La Seguridad Social permite aplicar una <strong>reducción del 7% por gastos de difícil justificación</strong>. Esta reducción reconoce que los autónomos tienen gastos menores que son difíciles de documentar (pequeño material, café con clientes, etc.):</p>
      
      <pre><code>Rendimiento neto cotización = Rendimiento neto × 0,93</code></pre>

      <h3>Paso 3: Calcula el rendimiento mensual</h3>
      <p>Divide el resultado entre 12 meses para obtener tu rendimiento neto mensual, que es el que determina tu tramo:</p>
      
      <pre><code>Rendimiento mensual = Rendimiento neto cotización ÷ 12</code></pre>

      <h3>Ejemplo práctico: Developer con clientes variados</h3>
      <p><strong>Situación:</strong> Desarrolladora full-stack que factura a clientes españoles y extranjeros:</p>
      
      <ul>
        <li><strong>Facturación anual:</strong> 65.000€</li>
        <li><strong>Gastos deducibles:</strong>
          <ul>
            <li>Cuota autónomo: 4.800€ (400€/mes promedio)</li>
            <li>Alquiler oficina: 3.600€</li>
            <li>Suministros: 1.200€</li>
            <li>Software y herramientas: 800€</li>
            <li>Formación: 600€</li>
            <li>Otros: 1.000€</li>
            <li><strong>Total gastos:</strong> 12.000€</li>
          </ul>
        </li>
      </ul>

      <p><strong>Cálculo:</strong></p>
      <ol>
        <li>Rendimiento neto = 65.000€ - 12.000€ = <strong>53.000€</strong></li>
        <li>Rendimiento neto cotización = 53.000€ × 0,93 = <strong>49.290€</strong></li>
        <li>Rendimiento mensual = 49.290€ ÷ 12 = <strong>4.107,50€</strong></li>
        <li>Tramo correspondiente: <strong>Tramo 14</strong> (4.050€ - 6.000€)</li>
        <li>Cuota mensual: <strong>450€</strong></li>
      </ol>

      <h2 id="cambios">Cambios de tramo: Flexibilidad y estrategia</h2>
      
      <h3>¿Cuántas veces puedo cambiar de tramo?</h3>
      <p>Puedes cambiar de tramo <strong>hasta 6 veces al año</strong> (cada dos meses) a través de la Sede Electrónica de la Seguridad Social. Los cambios tienen efecto el primer día del mes siguiente a la solicitud.</p>

      <h3>Estrategias para optimizar tu cotización</h3>
      <p><strong>Si tienes ingresos estacionales:</strong></p>
      <ul>
        <li>Enero-Marzo: Tramo bajo si prevés facturación reducida</li>
        <li>Abril-Junio: Aumenta el tramo si cierras proyectos grandes</li>
        <li>Julio-Agosto: Reduce si son meses de vacaciones</li>
        <li>Septiembre-Diciembre: Ajusta según facturación acumulada</li>
      </ul>

      <p><strong>Si tienes ingresos estables:</strong></p>
      <ul>
        <li>Calcula tu rendimiento anual estimado en enero</li>
        <li>Elige el tramo correspondiente y mantenlo todo el año</li>
        <li>Revisa en julio si necesitas ajustar</li>
      </ul>

      <h3>¿Qué pasa si me equivoco de tramo?</h3>
      <p>No te preocupes. El sistema de <strong>regularización anual</strong> (ver más abajo) corregirá automáticamente cualquier diferencia. Eso sí, si cotizas muy por debajo de lo que deberías, tendrás que pagar la diferencia de golpe, así que es mejor aproximarse al tramo correcto.</p>

      <h2 id="regularizacion">Regularización anual: Cómo funciona realmente</h2>
      
      <h3>¿Qué es la regularización?</h3>
      <p>En el <strong>segundo semestre del año siguiente</strong> (normalmente julio-diciembre de 2027 para el ejercicio 2026), la Seguridad Social cruza datos con Hacienda y compara:</p>
      
      <ul>
        <li>Lo que cotizaste realmente durante 2026</li>
        <li>Lo que deberías haber cotizado según tu declaración de IRPF 2026</li>
      </ul>

      <h3>Proceso paso a paso</h3>
      <ol>
        <li><strong>Abril-junio 2027:</strong> Presentas tu declaración de IRPF 2026</li>
        <li><strong>Julio-agosto 2027:</strong> Hacienda transmite los datos a la Seguridad Social</li>
        <li><strong>Septiembre-diciembre 2027:</strong> La TGSS calcula la regularización</li>
        <li><strong>Notificación:</strong> Recibes carta con el resultado (devolución o reclamación)</li>
        <li><strong>Plazo de pago/devolución:</strong> 30 días desde la notificación</li>
      </ol>

      <h3>Casos prácticos de regularización</h3>
      
      <p><strong>Caso 1: Cotizaste de menos</strong></p>
      <ul>
        <li>Rendimiento neto real 2026: 60.000€</li>
        <li>Tramo correcto: 14 (450€/mes) → 5.400€/año</li>
        <li>Cotización real: Tramo 11 (360€/mes) → 4.320€/año</li>
        <li><strong>Diferencia a pagar:</strong> 5.400€ - 4.320€ = <strong>1.080€</strong> + intereses (≈3%)</li>
      </ul>

      <p><strong>Caso 2: Cotizaste de más</strong></p>
      <ul>
        <li>Rendimiento neto real 2026: 35.000€</li>
        <li>Tramo correcto: 11 (360€/mes) → 4.320€/año</li>
        <li>Cotización real: Tramo 13 (400€/mes) → 4.800€/año</li>
        <li><strong>Devolución:</strong> 4.800€ - 4.320€ = <strong>480€</strong></li>
      </ul>

      <h3>¿Puedo reclamar si no estoy de acuerdo?</h3>
      <p>Sí. Tienes <strong>30 días hábiles</strong> desde la notificación para presentar una reclamación previa ante la TGSS. Si persiste el desacuerdo, puedes acudir a los tribunales de lo social.</p>

      <h2 id="estrategias">Consejos prácticos para desarrolladores</h2>

      <div class="tip-box">
        <h4>1. Lleva un control mensual</h4>
        <p>Usa una hoja de cálculo o software de contabilidad para registrar ingresos y gastos cada mes. Así sabrás en todo momento si tu tramo es el correcto y evitarás sorpresas en la regularización. Herramientas recomendadas: Holded, Quipu, Anfix o una simple hoja de Google Sheets.</p>
      </div>

      <div class="tip-box">
        <h4>2. Reserva dinero para la regularización</h4>
        <p>Si tus ingresos son muy variables, reserva un 3-5% de cada factura en una cuenta separada. Así tendrás colchón por si la regularización te sale a pagar.</p>
      </div>

      <div class="tip-box">
        <h4>3. Revisa tu tramo cada trimestre</h4>
        <p>Al presentar el modelo 303 (IVA) o 130 (IRPF), revisa si tu rendimiento acumulado se ajusta a tu tramo actual. Si ves que te estás desviando mucho, cambia de tramo.</p>
      </div>

      <div class="tip-box">
        <h4>4. No olvides que la cuota es deducible</h4>
        <p>La cuota de autónomo es un gasto deducible tanto en el cálculo del rendimiento neto para cotización como en tu IRPF. Esto reduce tu carga fiscal real.</p>
      </div>

      <div class="tip-box">
        <h4>5. Cuidado con los primeros años</h4>
        <p>Si te acogiste a la tarifa plana (60€/mes el primer año), cuando pases al sistema de tramos el salto puede ser brusco. Planifica con antelación y considera empezar en un tramo conservador.</p>
      </div>

      <h2>📈 Comparativa histórica: Evolución 2023-2026</h2>
      <p>El sistema ha ido ajustando las cuotas progresivamente durante la fase de implementación. Para un desarrollador con rendimiento neto mensual de 3.500€:</p>
      
      <table>
        <thead>
          <tr><th>Año</th><th>Cuota mensual</th><th>Cuota anual</th><th>Incremento vs año anterior</th></tr>
        </thead>
        <tbody>
          <tr><td>2023</td><td>350€</td><td>4.200€</td><td>-</td></tr>
          <tr><td>2024</td><td>370€</td><td>4.440€</td><td>+240€ (+5,7%)</td></tr>
          <tr><td>2025</td><td>390€</td><td>4.680€</td><td>+240€ (+5,4%)</td></tr>
          <tr><td>2026</td><td>400€</td><td>4.800€</td><td>+120€ (+2,6%)</td></tr>
        </tbody>
      </table>

      <p>Como se observa, los incrementos anuales se han ido moderando conforme el sistema se estabiliza. Para 2027 y siguientes, se espera que los aumentos sean solo por IPC (inflación).</p>

      <div class="tip-box">
        <h4>💡 Calcula tu cuota de autónomo con nuestra calculadora</h4>
        <p>Usa nuestra <strong><a href="/calculadora">calculadora gratuita</a></strong> para simular tu rendimiento neto, conocer tu tramo exacto de cotización y calcular el neto que te quedará después de impuestos y cuotas. Incluye todos los tramos 2026 actualizados.</p>
      </div>

      <h2>❓ Preguntas frecuentes</h2>

      <h4>¿Qué pasa si empiezo a facturar a mitad de año?</h4>
      <p>El cálculo es proporcional. Si te das de alta en julio, solo se considera tu rendimiento de julio a diciembre (6 meses) dividido entre 6 para calcular tu rendimiento mensual.</p>

      <h4>¿Los autónomos societarios tienen los mismos tramos?</h4>
      <p>Sí, pero con una particularidad: su rendimiento neto se calcula sobre el beneficio de la sociedad, no sobre su nómina. Además, tienen una cuota mínima más alta (≈400€/mes).</p>

      <h4>¿Puedo seguir en tarifa plana con el nuevo sistema?</h4>
      <p>Sí, la tarifa plana (80€/mes en 2026) sigue vigente para nuevos autónomos durante los primeros 12-24 meses, según cumplan requisitos. Después pasas automáticamente al sistema de tramos.</p>

      <h4>¿Qué pasa si tengo varios trabajos como autónomo?</h4>
      <p>Se suma el rendimiento neto de todas tus actividades para calcular el tramo único de cotización.</p>

      <h2>Conclusión: Optimiza tu cotización en 2026</h2>
      <p>El sistema de tramos por rendimientos reales es <strong>más justo que el anterior</strong>, pero requiere planificación y seguimiento activo. Mi recomendación final:</p>
      
      <ul>
        <li>✅ <strong>Calcula tu tramo al inicio del año</strong> con datos del ejercicio anterior</li>
        <li>✅ <strong>Revisa trimestralmente</strong> si necesitas ajustar</li>
        <li>✅ <strong>Lleva contabilidad ordenada</strong> para justificar gastos</li>
        <li>✅ <strong>Reserva dinero</strong> por si la regularización sale a pagar</li>
        <li><strong>Consulta con asesor fiscal</strong> si tus ingresos son muy variables</li>
      </ul>

      <p>Recuerda: una cotización adecuada no solo evita sanciones, también mejora tu futura pensión y prestaciones por cese de actividad.</p>
    `,
    sources: [
      { title: 'Real Decreto-ley 13/2022 cotización autónomos', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482' }
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
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop',
    imageAlt: 'Empresario analizando gráficos de decisión empresarial',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#comparativa" style="color: #3b82f6; text-decoration: none;">→ Comparativa exhaustiva</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#analisis-fiscal" style="color: #3b82f6; text-decoration: none;">→ Análisis fiscal detallado</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#tabla-decision" style="color: #3b82f6; text-decoration: none;">→ Tabla de decisión</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#otros-factores" style="color: #3b82f6; text-decoration: none;">→ Más allá de los impuestos</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#proceso-constitucion" style="color: #3b82f6; text-decoration: none;">→ Proceso de constitución de una SL</a></li>
        </ul>
      </div>

      <h2 id="comparativa">Comparativa exhaustiva: Autónomo vs SL</h2>

      <h3>Tabla comparativa completa</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Autónomo (Persona Física)</th><th>Sociedad Limitada (SL)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Constitución</strong></td>
            <td>Alta en AEAT (modelo 036/037): Gratis<br>Alta en Seguridad Social: Gratis<br><strong>Total: 0€</strong></td>
            <td>Capital social mínimo: 3.000€<br>Notaría: 150-400€<br>Registro Mercantil: 100-200€<br>Gestoría: 200-500€<br><strong>Total: ~4.000-5.000€</strong></td>
          </tr>
          <tr>
            <td><strong>Impuesto directo</strong></td>
            <td>IRPF progresivo:<br>19% hasta 12.450€<br>24% hasta 20.200€<br>30% hasta 35.200€<br>37% hasta 60.000€<br>45% hasta 300.000€<br>47% resto</td>
            <td>Impuesto de Sociedades fijo:<br>15% primeros 2 años*<br>25% resto<br>(*si cumples requisitos)</td>
          </tr>
          <tr>
            <td><strong>Base imponible</strong></td>
            <td>Rendimiento neto de la actividad económica (ingresos - gastos)</td>
            <td>Resultado contable ajustado fiscalmente (beneficio neto societario)</td>
          </tr>
          <tr>
            <td><strong>Cotización SS</strong></td>
            <td>Sistema de tramos 2026:<br>225€ - 530€/mes según rendimiento neto</td>
            <td>Autónomo societario:<br>Mínimo ~400€/mes<br>Base mínima más alta</td>
          </tr>
          <tr>
            <td><strong>Responsabilidad</strong></td>
            <td><strong>Ilimitada:</strong> Respondes con todo tu patrimonio personal (casa, ahorros, vehículos) ante deudas empresariales</td>
            <td><strong>Limitada:</strong> Solo respondes hasta el capital social aportado (salvo deudas con Hacienda/SS o administración negligente)</td>
          </tr>
          <tr>
            <td><strong>Contabilidad</strong></td>
            <td>Libros de ingresos y gastos<br>Modelos trimestrales (303, 130)<br>Declaración anual IRPF</td>
            <td>Contabilidad mercantil completa<br>Cuentas anuales depositadas en RM<br>Libros oficiales legalizados<br>IS anual (modelo 200)</td>
          </tr>
          <tr>
            <td><strong>Costes anuales fijos</strong></td>
            <td>Gestoría básica: 50-150€/mes<br><strong>Total: 600-1.800€/año</strong></td>
            <td>Gestoría + contabilidad: 150-300€/mes<br>Depósito cuentas: 100-300€<br>Legalización libros: 50-100€<br><strong>Total: 2.000-4.000€/año</strong></td>
          </tr>
          <tr>
            <td><strong>Retiro de dinero</strong></td>
            <td>Libre: El dinero es tuyo directamente</td>
            <td>Nómina (sujeta a IRPF + SS)<br>Dividendos (tributación 19-26%)<br>No puedes sacarlo libremente</td>
          </tr>
          <tr>
            <td><strong>Subvenciones</strong></td>
            <td>Acceso a ayudas para autónomos y startups</td>
            <td>Acceso limitado a subvenciones (algunas excluyen SL unipersonales)</td>
          </tr>
          <tr>
            <td><strong>Imagen profesional</strong></td>
            <td>Adecuada para freelance y pequeños proyectos</td>
            <td>Mayor seriedad ante grandes clientes y corporaciones</td>
          </tr>
          <tr>
            <td><strong>Facilidad gestión</strong></td>
            <td>⭐⭐⭐⭐⭐ Muy simple</td>
            <td>⭐⭐ Compleja, requiere asesor</td>
          </tr>
        </tbody>
      </table>

      <h2 id="analisis-fiscal">Análisis fiscal detallado: ¿Cuándo compensa?</h2>

      <h3>El "doble peaje" fiscal de la SL</h3>
      <p>Una SL no elimina el IRPF, solo lo pospone. Cuando sacas dinero de la sociedad, pagas:</p>
      <ol>
        <li><strong>Impuesto de Sociedades (25%)</strong> sobre el beneficio empresarial</li>
        <li><strong>IRPF personal</strong> al retirar ese dinero:
          <ul>
            <li>Vía nómina: IRPF progresivo (19%-47%) + Seguridad Social</li>
            <li>Vía dividendos: IRPF del 19%-26% (según cantidad)</li>
          </ul>
        </li>
      </ol>

      <p><strong>Ejemplo del doble peaje:</strong></p>
      <p>La SL gana 100.000€ de beneficio neto:</p>
      <ul>
        <li>Impuesto de Sociedades (25%): 25.000€ → Quedan <strong>75.000€</strong></li>
        <li>Repartes 40.000€ en dividendos (IRPF 23%): 9.200€ → Recibes <strong>30.800€ netos</strong></li>
        <li>Dejas 35.000€ en la empresa (no tributas más hasta que los saques)</li>
      </ul>

      <h3>Casos prácticos: ¿Cuándo compensa realmente?</h3>

      <h4>Caso 1: Developer con 50.000€ de beneficio neto</h4>
      
      <p><strong>Como autónomo:</strong></p>
      <ul>
        <li>Rendimiento neto: 50.000€</li>
        <li>Cuota SS anual: 5.400€ (450€/mes)</li>
        <li>Base IRPF: 44.600€</li>
        <li>IRPF estimado: ~10.500€ (tipo efectivo ~24%)</li>
        <li>Gestoría: 1.200€</li>
        <li><strong>Neto disponible: ~32.900€</strong></li>
        <li><strong>Carga fiscal total: 34,2%</strong></li>
      </ul>

      <p><strong>Como SL (sacando 30.000€ nómina):</strong></p>
      <ul>
        <li>Beneficio sociedad: 20.000€</li>
        <li>IS (25%): 5.000€ → Quedan 15.000€ en sociedad</li>
        <li>IRPF nómina: ~4.500€</li>
        <li>SS societario: ~4.800€</li>
        <li>Gestoría SL: 3.000€</li>
        <li><strong>Neto disponible: ~20.700€</strong> + 15.000€ en sociedad</li>
        <li><strong>Carga fiscal total: 34,6%</strong></li>
      </ul>

      <p>📌 <strong>Conclusión:</strong> En este nivel, ser autónomo es <strong>más rentable</strong> si necesitas todo el dinero. La SL solo compensa si puedes dejar beneficios en la empresa.</p>

      <h4>Caso 2: Developer con 80.000€ de beneficio neto</h4>
      
      <p><strong>Como autónomo:</strong></p>
      <ul>
        <li>Rendimiento neto: 80.000€</li>
        <li>Cuota SS anual: 6.360€ (530€/mes según <a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">tramos 2026</a>)</li>
        <li>Base IRPF: 73.640€</li>
        <li>IRPF estimado: ~22.000€ (tipo efectivo ~30%)</li>
        <li>Gestoría: 1.500€</li>
        <li><strong>Neto disponible: ~50.140€</strong></li>
        <li><strong>Carga fiscal total: 37,3%</strong></li>
      </ul>

      <p><strong>Como SL (sacando 40.000€ nómina + reinvirtiendo):</strong></p>
      <ul>
        <li>Beneficio sociedad: 40.000€</li>
        <li>IS (25%): 10.000€ → Quedan 30.000€ en sociedad</li>
        <li>IRPF nómina: ~7.500€</li>
        <li>SS societario: ~4.800€</li>
        <li>Gestoría SL: 3.000€</li>
        <li><strong>Neto disponible: ~27.700€</strong> + 30.000€ en sociedad</li>
        <li>Si repartes 15.000€ dividendos (19%): recibes 12.150€ adicionales</li>
        <li><strong>Neto total real: ~39.850€</strong> + 15.000€ reinvertidos</li>
        <li><strong>Carga fiscal total: 35,8%</strong></li>
      </ul>

      <p>📌 <strong>Conclusión:</strong> La SL empieza a ser competitiva aquí, especialmente si <strong>reinviertes parte del beneficio</strong> en la empresa (nueva tecnología, formación, expansión). La diferencia es de ~1.5% de carga fiscal.</p>

      <h4>Caso 3: Developer con 120.000€ de beneficio neto</h4>
      
      <p><strong>Como autónomo:</strong></p>
      <ul>
        <li>Rendimiento neto: 120.000€</li>
        <li>Cuota SS anual: 6.360€</li>
        <li>Base IRPF: 113.640€</li>
        <li>IRPF estimado: ~38.000€ (tipo efectivo ~33%)</li>
        <li>Gestoría: 2.000€</li>
        <li><strong>Neto disponible: ~73.640€</strong></li>
        <li><strong>Carga fiscal total: 38,6%</strong></li>
      </ul>

      <p><strong>Como SL (sacando 50.000€ nómina):</strong></p>
      <ul>
        <li>Beneficio sociedad: 70.000€</li>
        <li>IS (25%): 17.500€ → Quedan 52.500€ en sociedad</li>
        <li>IRPF nómina: ~10.500€</li>
        <li>SS societario: ~4.800€</li>
        <li>Gestoría SL: 3.500€</li>
        <li><strong>Neto disponible: ~34.700€</strong> + 52.500€ en sociedad</li>
        <li>Si repartes 30.000€ dividendos (21%): recibes 23.700€ adicionales</li>
        <li><strong>Neto total real: ~58.400€</strong> + 22.500€ reinvertidos</li>
        <li><strong>Carga fiscal total: 33,8%</strong></li>
      </ul>

      <p>📌 <strong>Conclusión:</strong> Aquí la SL es <strong>claramente más ventajosa</strong>, con un ahorro de ~4,8% en carga fiscal (5.760€ anuales). Además, tienes un colchón de 22.500€ en la empresa que paga solo 25% vs 45-47% como autónomo.</p>

      <h2 id="tabla-decision">Tabla de decisión: ¿Qué te conviene?</h2>

      <table>
        <thead>
          <tr><th>Beneficio neto anual</th><th>Mejor opción</th><th>Motivo principal</th></tr>
        </thead>
        <tbody>
          <tr><td>< 30.000€</td><td><strong>Autónomo</strong> ⭐⭐⭐⭐⭐</td><td>Los costes fijos de la SL (2.000-4.000€) son demasiado altos proporcionalmente</td></tr>
          <tr><td>30.000€ - 50.000€</td><td><strong>Autónomo</strong> ⭐⭐⭐⭐</td><td>Aún no se justifica el doble peaje fiscal ni la complejidad de gestión</td></tr>
          <tr><td>50.000€ - 70.000€</td><td><strong>Depende</strong> ⭐⭐⭐</td><td>Zona gris: analiza si reinviertes beneficios y necesitas protección patrimonial</td></tr>
          <tr><td>70.000€ - 100.000€</td><td><strong>SL probable</strong> ⭐⭐⭐⭐</td><td>Empieza a compensar fiscalmente, especialmente si reinviertes 30-40%</td></tr>
          <tr><td>> 100.000€</td><td><strong>SL</strong> ⭐⭐⭐⭐⭐</td><td>Ahorro fiscal significativo + protección patrimonial imprescindible</td></tr>
        </tbody>
      </table>

      <h2 id="otros-factores">Más allá de los impuestos: Otros factores críticos</h2>

      <h3>1. Protección patrimonial</h3>
      <p><strong>Escenario real:</strong> Imagina que un proyecto sale mal, el cliente te demanda por 50.000€ y pierdes el juicio. Como autónomo, pueden embargarte tu vivienda, coche y cuentas personales. Como SL, solo responde el patrimonio de la sociedad (salvo excepciones).</p>
      
      <p><strong>Excepciones donde sí respondes personalmente en SL:</strong></p>
      <ul>
        <li>Deudas con Hacienda y Seguridad Social</li>
        <li>Administración negligente o dolosa (si mezclas cuentas personales y empresariales)</li>
        <li>Si eres avalista personal de préstamos empresariales</li>
      </ul>

      <h3>2. Imagen y credibilidad profesional</h3>
      <p>Algunos clientes corporativos (especialmente grandes empresas y banca) prefieren o exigen trabajar con sociedades. Una SL transmite:</p>
      <ul>
        <li>Seriedad y estabilidad</li>
        <li>Capacidad de gestionar proyectos complejos</li>
        <li>Compromiso a largo plazo</li>
      </ul>
      <p>Sin embargo, para startups y clientes internacionales, esto es menos relevante.</p>

      <h3>3. Facilidad para captar socios o inversión</h3>
      <p>Si tienes planes de:</p>
      <ul>
        <li>Incorporar un socio técnico o comercial</li>
        <li>Buscar inversión externa (business angels, VCs)</li>
        <li>Crear un producto escalable (SaaS, app)</li>
      </ul>
      <p>La SL es prácticamente obligatoria. Es mucho más fácil repartir participaciones que gestionar una comunidad de bienes entre autónomos.</p>

      <h3>4. Planificación de la jubilación</h3>
      <p><strong>Como autónomo:</strong> Tu pensión depende de la base de cotización elegida (225-530€/mes).</p>
      <p><strong>Como SL:</strong> Puedes combinar nómina baja (cotización SS) + dividendos (sin cotizar), pero esto reduce tu futura pensión. Necesitarás planificación privada (planes de pensiones, carteras de inversión).</p>

      <h3>5. Facilidad de venta del negocio</h3>
      <p>Si en el futuro quieres vender tu negocio:</p>
      <ul>
        <li><strong>Como autónomo:</strong> Muy complicado. Tendrías que vender activos individuales.</li>
        <li><strong>Como SL:</strong> Vendes participaciones de la sociedad (mucho más limpio fiscal y legalmente).</li>
      </ul>

      <h2 id="proceso-constitucion">Proceso completo de constitución de una SL</h2>

      <h3>Paso 1: Certificado de denominación social (3-5 días)</h3>
      <ul>
        <li>Solicita en el Registro Mercantil Central que el nombre esté libre</li>
        <li>Coste: ~15€</li>
        <li>Propón 3 nombres alternativos por si alguno está ocupado</li>
      </ul>

      <h3>Paso 2: Apertura de cuenta bancaria y depósito del capital (1 día)</h3>
      <ul>
        <li>Abre una cuenta bancaria a nombre de "X SL en constitución"</li>
        <li>Deposita el capital social mínimo: 3.000€</li>
        <li>El banco emite un certificado de depósito</li>
      </ul>

      <h3>Paso 3: Escritura pública ante notario (1 semana)</h3>
      <ul>
        <li>Redacción de estatutos sociales (objeto social, órganos de gobierno, reparto participaciones)</li>
        <li>Firma ante notario de la escritura de constitución</li>
        <li>Coste notaría: 150-400€</li>
        <li><strong>Documentos necesarios:</strong> DNI, certificado denominación, certificado bancario</li>
      </ul>

      <h3>Paso 4: Obtención del NIF provisional (inmediato)</h3>
      <ul>
        <li>El notario puede solicitar un NIF provisional automáticamente</li>
        <li>Necesario para presentar escritura en el Registro Mercantil</li>
      </ul>

      <h3>Paso 5: Liquidación del Impuesto de Transmisiones (1 mes)</h3>
      <ul>
        <li>Presentación del modelo 600 en la Comunidad Autónoma</li>
        <li>Exento en la mayoría de CCAA para constituir SL</li>
      </ul>

      <h3>Paso 6: Inscripción en el Registro Mercantil (2-4 semanas)</h3>
      <ul>
        <li>Presentación de la escritura pública</li>
        <li>Coste: 100-200€</li>
        <li>Una vez inscrita, la sociedad adquiere personalidad jurídica</li>
      </ul>

      <h3>Paso 7: Obtención del NIF definitivo (1 semana)</h3>
      <ul>
        <li>Con la inscripción del RM, solicitas el NIF definitivo en Hacienda</li>
        <li>Modelo 036: Alta censal de la sociedad</li>
      </ul>

      <h3>Paso 8: Alta en Seguridad Social (inmediato)</h3>
      <ul>
        <li>Alta del administrador como autónomo societario</li>
        <li>Alta de la empresa en el Sistema RED</li>
      </ul>

      <h3>Tiempo total: 1,5 - 2 meses | Coste total: 4.000 - 5.000€</h3>

      <h2>Consejos finales de un desarrollador que pasó por ambas</h2>

      <div class="tip-box">
        <h4>1. No te precipites por "quedar bien"</h4>
        <p>Conozco muchos developers que crearon SL con 25.000€ de facturación anual solo para parecer más profesionales. Resultado: perdieron dinero en costes de gestoría y complejidad innecesaria. <strong>Valora primero los números</strong>.</p>
      </div>

      <div class="tip-box">
        <h4>2. Hazlo en enero si decides dar el paso</h4>
        <p>Constituir en enero simplifica muchísimo la contabilidad del primer ejercicio. Si lo haces en octubre, tendrás que presentar cuentas anuales solo 3 meses después (cierre fiscal suele ser 31 diciembre).</p>
      </div>

      <div class="tip-box">
        <h4>3. Separa completamente cuentas personales y empresariales</h4>
        <p>Si tienes SL, NUNCA mezcles gastos personales y empresariales en la misma tarjeta. Esto puede derivar en que Hacienda considere que hay "confusión de patrimonios" y te haga responsable personalmente de deudas societarias.</p>
      </div>

      <div class="tip-box">
        <h4>4. Consulta con un asesor fiscal ANTES de constituir</h4>
        <p>Una buena gestoría te hará un estudio personalizado considerando tu situación fiscal, familiar, y objetivos. Cuesta 100-200€, pero te puede ahorrar miles en el futuro.</p>
      </div>

      <div class="tip-box">
        <h4>5. Considera opciones híbridas</h4>
        <p>Algunos autónomos trabajan como persona física pero contratan un seguro de responsabilidad civil profesional (150-500€/año) para protegerse ante reclamaciones. Esto puede ser suficiente en etapas iniciales.</p>
      </div>

      <h2>¿Y si me equivoco? ¿Puedo volver atrás?</h2>
      <p>Sí, pero con costes:</p>
      <ul>
        <li><strong>De SL a autónomo:</strong> Debes liquidar la sociedad (coste 500-1.500€), pagar IS sobre beneficios acumulados, y cerrar formalmente en el RM.</li>
        <li><strong>De autónomo a SL:</strong> Proceso de constitución descrito arriba (4.000-5.000€).</li>
      </ul>
      <p>Por eso es tan importante <strong>analizar bien antes de decidir</strong>.</p>

      <h2>Conclusión: El umbral mágico no existe</h2>
      <p>No hay un número único que indique "a partir de aquí, SL sí o sí". Mi recomendación basada en experiencia propia y de otros developers:</p>
      
      <ul>
        <li><strong>< 50.000€ beneficio neto:</strong> Autónomo salvo excepciones</li>
        <li><strong>50.000€ - 70.000€:</strong> Analiza caso por caso con asesor</li>
        <li><strong>> 70.000€ beneficio neto:</strong> SL suele compensar</li>
        <li><strong>Protección patrimonial crítica:</strong> SL independientemente de ingresos (ej: trabajas con grandes clientes con riesgo de litigios)</li>
        <li><strong>Planes de captar socios/inversión:</strong> SL desde el inicio</li>
      </ul>

      <p>Recuerda: <strong>esta decisión no es irreversible</strong>, pero cambiar tiene costes. Tómate tu tiempo, haz números con tus datos reales, y consulta con un profesional antes de dar el salto.</p>
    `,
    sources: [
      { title: 'Impuesto sobre Sociedades - AEAT', url: 'https://sede.agenciatributaria.gob.es/Sede/impuestos-tasas/impuesto-sobre-sociedades.html' }
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
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&auto=format&fit=crop',
    imageAlt: 'Documentos fiscales y calculadora representando modelo 130',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#que-es" style="color: #3b82f6; text-decoration: none;">→ ¿Qué es el Modelo 130?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#quien-debe" style="color: #3b82f6; text-decoration: none;">→ ¿Quién debe presentarlo?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#calculo" style="color: #3b82f6; text-decoration: none;">→ Cálculo del Modelo 130</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ejemplo-trimestral" style="color: #3b82f6; text-decoration: none;">→ Ejemplo trimestre a trimestre</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#sanciones" style="color: #3b82f6; text-decoration: none;">→ Sanciones por retraso</a></li>
        </ul>
      </div>

      <h2 id="que-es">¿Qué es el Modelo 130?</h2>
      <p>El modelo 130 es la <strong>declaración trimestral de pago fraccionado del IRPF</strong> para autónomos en estimación directa. Es un adelanto del impuesto que pagarás en la Renta anual, evitando así un pago único muy elevado en junio.</p>

      <p>Piénsalo como "ahorro obligatorio" trimestral. En lugar de pagar 15.000€ de IRPF de golpe en junio, adelantas ~3.750€ cada trimestre. Hacienda cobra progresivamente y tú evitas sorpresas.</p>

      <h2 id="quien-debe">¿Quién debe presentarlo?</h2>

      <h3>Obligados si cumples TODOS estos requisitos:</h3>
      <ul>
        <li>Eres autónomo en <strong>estimación directa</strong></li>
        <li><strong>Menos del 70%</strong> de tus ingresos tienen retención IRPF</li>
      </ul>

      <h3>Exento si:</h3>
      <ul>
        <li><strong>70% o más</strong> de tus ingresos provienen de clientes con retención (empresas españolas)</li>
        <li>Estás en <strong>módulos</strong> → Usarías modelo 131</li>
      </ul>

      <h3>Ejemplo práctico</h3>
      <p><strong>Developer A:</strong> 50.000€ a empresas españolas + 10.000€ extranjeros = <strong>83% con retención</strong> → EXENTO</p>
      <p><strong>Developer B:</strong> 30.000€ empresas españolas + 50.000€ extranjeros = <strong>37,5% con retención</strong> → OBLIGADO</p>

      <h2 id="calculo">Cálculo del Modelo 130</h2>

      <h3>Fórmula</h3>
      <pre><code>Pago = (Rendimiento neto acumulado × 20%) - Retenciones - Pagos anteriores

Rendimiento neto = Ingresos acumulados - Gastos acumulados</code></pre>

      <p><strong>⚠️ Importante:</strong> El cálculo es <strong>acumulativo</strong> desde enero. En el 2T incluyes enero-junio, en el 3T enero-septiembre, etc.</p>

      <h3>Gastos deducibles típicos</h3>
      <ul>
        <li>Cuota de autónomo</li>
        <li>Alquiler oficina o proporción vivienda</li>
        <li>Suministros (luz, internet, móvil)</li>
        <li>Hardware y software</li>
        <li>Formación profesional</li>
        <li>Seguros y gastos financieros</li>
      </ul>

      <h2 id="ejemplo-trimestral">💻 Ejemplo trimestre a trimestre</h2>

      <p><strong>Developer freelance con clientes internacionales (sin retención):</strong></p>

      <h3>1T (Enero-Marzo) - Plazo: 1-20 Abril</h3>
      <pre><code>Ingresos:      18.000€
Gastos:        -4.500€
Rendimiento:   13.500€
Pago (20%):     2.700€</code></pre>

      <h3>2T (Acumulado Ene-Jun) - Plazo: 1-20 Julio</h3>
      <pre><code>Ingresos acum:     35.000€
Gastos acum:       -8.500€
Rendimiento:       26.500€
× 20%:              5.300€
- Pago 1T:         -2.700€
A pagar 2T:         2.600€</code></pre>

      <h3>3T (Acumulado Ene-Sep) - Plazo: 1-20 Octubre</h3>
      <pre><code>Rendimiento acum:  38.000€
× 20%:              7.600€
- Pagos 1T+2T:     -5.300€
A pagar 3T:         2.300€</code></pre>

      <h3>4T (Acumulado Ene-Dic) - Plazo: 1-30 Enero</h3>
      <pre><code>Rendimiento acum:  52.500€
× 20%:             10.500€
- Pagos 1T+2T+3T:  -7.600€
A pagar 4T:         2.900€

Total pagado año: 10.500€</code></pre>

      <h2>Cómo rellenar el formulario</h2>

      <h3>Casillas principales (estimación directa)</h3>
      <table>
        <thead>
          <tr><th>Casilla</th><th>Qué poner</th></tr>
        </thead>
        <tbody>
          <tr><td>[01]</td><td>Ingresos acumulados desde enero</td></tr>
          <tr><td>[02]</td><td>Gastos deducibles acumulados</td></tr>
          <tr><td>[03]</td><td>[01] - [02] = Rendimiento neto</td></tr>
          <tr><td>[04]</td><td>[03] × 20%</td></tr>
          <tr><td>[05]</td><td>Retenciones que te han aplicado</td></tr>
          <tr><td>[06]</td><td>Pagos 130 trimestres anteriores</td></tr>
          <tr><td>[07]</td><td>[04] - [05] - [06] = <strong>A PAGAR</strong></td></tr>
        </tbody>
      </table>

      <h3>Resultado negativo</h3>
      <p>Si tus gastos superan ingresos, el resultado es negativo:</p>
      <ul>
        <li>No pagas ese trimestre</li>
        <li>Se compensa automáticamente en el siguiente</li>
      </ul>

      <h2 id="sanciones">Sanciones por retraso</h2>
      <ul>
        <li><strong>Retraso sin requerimiento:</strong> 1% + 1% por cada mes (máx. 12 meses)</li>
        <li><strong>Tras requerimiento:</strong> 50%-150%</li>
        <li><strong>No presentar:</strong> Multa 200€ + recargos</li>
        <li><strong>Intereses:</strong> ~4% anual</li>
      </ul>

      <h2>🔗 Relación con la Renta anual</h2>

      <p>En abril-junio del año siguiente presentas la Renta. Allí:</p>
      <ul>
        <li>Declaras tu rendimiento neto total anual</li>
        <li>Restas retenciones + pagos del 130</li>
        <li>Si sale a devolver: recuperas el exceso</li>
        <li>Si sale a pagar: completas la diferencia</li>
      </ul>

      <p><strong>Ejemplo:</strong></p>
      <pre><code>IRPF real 2026:    12.000€
Pagos 130:        -10.500€
Resultado Renta:    1.500€ a pagar</code></pre>

      <p>El 130 es un adelanto, no un impuesto adicional.</p>

      <h2>❓ Preguntas frecuentes</h2>

      <h4>¿Alta a mitad de año?</h4>
      <p>Solo presentas desde el trimestre de alta. Alta en mayo → empiezas en 2T con datos desde tu fecha de alta.</p>

      <h4>¿Sin actividad un trimestre?</h4>
      <p>Recomendable presentar con valores a cero para evitar avisos de Hacienda.</p>

      <h4>¿Pérdidas de años anteriores?</h4>
      <p>NO se descuentan en el 130. Solo en la Renta anual.</p>

      <h4>¿Me equivoqué?</h4>
      <p>Presenta declaración complementaria antes del plazo. Si ya pasó, el siguiente trimestre lo corrige (cálculo acumulativo).</p>

      <h4>¿Domiciliar el pago?</h4>
      <p>Sí, indica IBAN al presentar. Cargo automático entre día 15-25 del mes siguiente.</p>

      <h2>Consejos prácticos</h2>

      <div class="tip-box">
        <h4>1. Reserva el 20% de cada factura</h4>
        <p>Cuenta separada con transferencia automática del 20% de cada cobro. Tendrás el dinero siempre disponible.</p>
      </div>

      <div class="tip-box">
        <h4>2. Software de contabilidad</h4>
        <p>Holded, Quipu o una hoja de cálculo. Control de ingresos/gastos acumulados + generación automática del 130.</p>
      </div>

      <div class="tip-box">
        <h4>3. Recordatorios trimestrales</h4>
        <p>Alertas los días 10 de abril, julio, octubre y enero. Margen para preparar antes del plazo.</p>
      </div>

      <div class="tip-box">
        <h4>4. Verifica si sigues obligado</h4>
        <p>Calcula anualmente % de ingresos con retención. Si superas 70% → puedes dejar de presentar el 130.</p>
      </div>

      <h2>🚫 Errores comunes</h2>

      <table>
        <thead>
          <tr><th>Error</th><th>Correcto</th></tr>
        </thead>
        <tbody>
          <tr><td>No incluir cuota SS como gasto</td><td>La cuota es deducible</td></tr>
          <tr><td>Olvidar carácter acumulativo</td><td>Incluir desde enero en cada trimestre</td></tr>
          <tr><td>No descontar retenciones</td><td>Indicar en casilla [05]</td></tr>
          <tr><td>Confundir facturación con rendimiento</td><td>[01]=Ingresos, [02]=Gastos, [03]=Neto</td></tr>
          <tr><td>No presentar por falta de dinero</td><td>Presenta igualmente, solicita fraccionamiento</td></tr>
        </tbody>
      </table>

      <h2>Resumen rápido</h2>

      <table>
        <thead>
          <tr><th>Aspecto</th><th>Detalle</th></tr>
        </thead>
        <tbody>
          <tr><td>Qué es</td><td>Adelanto trimestral IRPF</td></tr>
          <tr><td>Quién</td><td>Autónomos directa con < 70% ingresos con retención</td></tr>
          <tr><td>Cuándo</td><td>20 abril, 20 julio, 20 octubre, 30 enero</td></tr>
          <tr><td>Cálculo</td><td>(Neto × 20%) - Retenciones - Pagos previos</td></tr>
          <tr><td>Sanción</td><td>1%/mes + multa 200€ si no presentas</td></tr>
        </tbody>
      </table>

      <p><strong>Clave:</strong> El 130 te ayuda a repartir el IRPF en pagos trimestrales. Automatiza reservando el 20% de cada factura, usa software de contabilidad y presenta siempre en plazo.</p>
    `,
    sources: [
      { title: 'Ley 35/2006 IRPF - BOE', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764&tn=1&p=20240703#a110' }
    ]
  },

  // 8. Factura Legal
  {
    id: '8',
    slug: 'factura-legal-elementos-obligatorios-retenciones-developers-2026',
    title: 'Cómo Hacer una Factura Legal: Elementos Obligatorios y Retenciones',
    metaDescription: 'Guía de facturación para desarrolladores: elementos obligatorios, retención IRPF, ejemplos nacionales e internacionales y software recomendado.',
    category: 'impuestos',
    publishDate: '2025-12-22',
    readTime: 6,
    featured: false,
    excerpt: 'Aprende a crear facturas legalmente válidas: datos obligatorios, cuándo aplicar retención IRPF del 15%, ejemplos y errores comunes.',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&auto=format&fit=crop',
    imageAlt: 'Factura profesional en ordenador portátil',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#por-que-crucial" style="color: #3b82f6; text-decoration: none;">→ ¿Por qué es crucial?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#elementos-obligatorios" style="color: #3b82f6; text-decoration: none;">→ Elementos obligatorios</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#retencion-irpf" style="color: #3b82f6; text-decoration: none;">→ Retención de IRPF</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ejemplos-facturas" style="color: #3b82f6; text-decoration: none;">→ Ejemplos de facturas reales</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#software-facturacion" style="color: #3b82f6; text-decoration: none;">→ Software de facturación</a></li>
        </ul>
      </div>

      <h2 id="por-que-crucial">¿Por qué es crucial emitir facturas correctas?</h2>
      <p>La factura es un <strong>documento mercantil con valor legal y fiscal</strong> (RD 1619/2012). Una factura incorrecta puede causar:</p>
      
      <ul>
        <li>Tu cliente no podrá deducir el gasto → te pedirá corregirla</li>
        <li>Hacienda puede considerar la factura inválida</li>
        <li>Dificulta reclamaciones por impago</li>
      </ul>

      <p>Como developer freelance, emitirás facturas constantemente. Hazlo bien desde el principio.</p>

      <h2 id="elementos-obligatorios">Elementos obligatorios</h2>

      <table>
        <thead>
          <tr><th>Elemento</th><th>Descripción</th><th>Obligatorio</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Número</strong></td><td>Secuencia correlativa sin saltos (2026/001, 2026/002...)</td><td>Sí</td></tr>
          <tr><td><strong>2. Fecha emisión</strong></td><td>Máx. 1 mes desde la prestación del servicio</td><td>Sí</td></tr>
          <tr><td><strong>3. Datos emisor</strong></td><td>Nombre completo, NIF, dirección completa</td><td>Sí</td></tr>
          <tr><td><strong>4. Datos cliente</strong></td><td>Nombre/razón social, CIF/NIF, dirección completa</td><td>Sí</td></tr>
          <tr><td><strong>5. Descripción</strong></td><td>Detalle específico del servicio prestado</td><td>Sí</td></tr>
          <tr><td><strong>6. Base imponible</strong></td><td>Precio sin IVA</td><td>Sí</td></tr>
          <tr><td><strong>7. IVA</strong></td><td>21% servicios digitales. Separar tipo y cuota</td><td>Sí</td></tr>
          <tr><td><strong>8. Retención IRPF</strong></td><td>15% (o 7% primeros 3 años) si cliente es empresa española</td><td>Condicional</td></tr>
          <tr><td><strong>9. Total</strong></td><td>Base + IVA - Retención</td><td>Sí</td></tr>
          <tr><td><strong>10. Forma pago</strong></td><td>Transferencia (IBAN), tarjeta, efectivo (máx. 1.000€)</td><td>Recomendable</td></tr>
          <tr><td><strong>11. Vencimiento</strong></td><td>30 días (Ley 3/2004 morosidad)</td><td>Recomendable</td></tr>
        </tbody>
      </table>

      <h2 id="retencion-irpf">Retención de IRPF: Cuándo aplicarla</h2>

      <h3>¿Cuándo DEBES aplicar retención?</h3>
      <p>Obligatorio cuando se cumplen <strong>TODOS</strong>:</p>
      
      <ol>
        <li>Cliente es <strong>empresa/autónomo</strong> español</li>
        <li>Estás en <strong>estimación directa</strong></li>
        <li>Facturas <strong>servicios profesionales</strong></li>
      </ol>

      <h3>Tipos de retención</h3>
      <table>
        <thead>
          <tr><th>Situación</th><th>% Retención</th></tr>
        </thead>
        <tbody>
          <tr><td>Autónomo general (más de 3 años)</td><td><strong>15%</strong></td></tr>
          <tr><td>Autónomo novel (primeros 3 años)</td><td><strong>7%</strong></td></tr>
          <tr><td>Cliente particular (B2C)</td><td><strong>0%</strong></td></tr>
          <tr><td>Cliente extranjero</td><td><strong>0%</strong></td></tr>
        </tbody>
      </table>

      <h3>Cálculo con retención</h3>
      
      <p><strong>Ejemplo: Autónomo con más de 3 años</strong></p>
      <pre><code>Desarrollo API REST
Base:               1.500,00 €
IVA (21%):           +315,00 €
Subtotal:           1.815,00 €
Retención (15%):     -225,00 € (sobre base)
─────────────────────────────
TOTAL A COBRAR:     1.590,00 €</code></pre>

      <p><strong>¿Qué pasa con los 225€ retenidos?</strong></p>
      <ul>
        <li>El cliente los ingresa en Hacienda (modelo 111)</li>
        <li>Tú los descontarás en la Renta como "retenciones soportadas"</li>
        <li>Si sale a devolver, recuperas parte o todo</li>
      </ul>

      <h2 id="ejemplos-facturas">Ejemplos de facturas reales</h2>

      <h3>Ejemplo 1: Factura nacional con retención</h3>
      <pre><code>──────────────────────────────────────────
FACTURA 2026/042
──────────────────────────────────────────
Fecha: 15/01/2026

EMISOR:
Juan García Pérez - NIF: 12345678A
Calle Mayor, 23, 3º B - 28013 Madrid

CLIENTE:
Tech Solutions SL - CIF: B87654321
Av. Diagonal, 456 - 08029 Barcelona

DESCRIPCIÓN:
Desarrollo plataforma e-commerce
- Frontend React + TypeScript (80h)
- Backend Node.js + MongoDB (60h)
Período: Nov-Dic 2025

──────────────────────────────────────────
Base imponible:         5.000,00 €
IVA (21%):              1.050,00 €
Subtotal:               6.050,00 €
Retención IRPF (15%):    -750,00 €
──────────────────────────────────────────
TOTAL A PAGAR:          5.300,00 €

IBAN: ES12 1234 5678 9012 3456 7890
Vencimiento: 30 días (14/02/2026)
──────────────────────────────────────────</code></pre>

      <h3>Ejemplo 2: Factura intracomunitaria (UE, sin IVA)</h3>
      <pre><code>──────────────────────────────────────────
INVOICE 2026/043
──────────────────────────────────────────
Date: 20/01/2026

SUPPLIER:
María López - VAT: ESX1234567M
Calle Serrano, 89 - 28006 Madrid, Spain

CUSTOMER:
Digital GmbH - VAT: DE123456789
Berliner Str., 45 - 10115 Berlin, Germany

DESCRIPTION:
Mobile app development iOS/Android
- UI/UX design (40h)
- Native development (100h)
Period: Dec 2025 - Jan 2026

──────────────────────────────────────────
Taxable amount:         8.000,00 €
VAT (0%):                   0,00 €
──────────────────────────────────────────
TOTAL:                  8.000,00 €

Reverse charge: VAT to be self-assessed
by customer (Art. 196 EU VAT Directive)

IBAN: ES98 7654 3210 9876 5432 1098
Due: 30 days (19/02/2026)
──────────────────────────────────────────</code></pre>

      <p><strong>⚠️ Importante UE:</strong> Verifica el VAT en <a href="https://ec.europa.eu/taxation_customs/vies/" target="_blank">VIES</a> antes de emitir sin IVA. Guarda captura.</p>

      <h2 id="software-facturacion">Software de facturación recomendado</h2>

      <table>
        <thead>
          <tr><th>Software</th><th>Precio</th><th>Ideal para</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Holded</strong></td><td>Gratis - 39€/mes</td><td>Facturación + contabilidad, API REST, multi-moneda</td></tr>
          <tr><td><strong>Quipu</strong></td><td>5€ - 25€/mes</td><td>Muy intuitivo, conecta con banco, presenta impuestos</td></tr>
          <tr><td><strong>Quaderno</strong></td><td>49€ - 199€/mes</td><td>Especializado internacional, calcula IVA por país</td></tr>
          <tr><td><strong>Facturama</strong></td><td>Gratis - 20€/mes</td><td>Gratuito hasta 20 facturas/mes</td></tr>
          <tr><td><strong>Invoice Ninja</strong></td><td>Gratis (open source)</td><td>Auto-alojado, personalizable, API completa</td></tr>
        </tbody>
      </table>

      <h3>Funcionalidades imprescindibles</h3>
      <ul>
        <li>Numeración automática correlativa</li>
        <li>Cálculo automático IVA y retenciones</li>
        <li>Plantillas personalizables</li>
        <li>Export PDF + envío email</li>
        <li>Recordatorios de pago</li>
        <li>Informes modelo 303 y 130</li>
        <li>Backup cloud automático</li>
      </ul>

      <h2>Errores comunes</h2>

      <table>
        <thead>
          <tr><th>Error</th><th>Correcto</th></tr>
        </thead>
        <tbody>
          <tr><td>Numeración desordenada</td><td>Secuencia correlativa (001, 002, 003)</td></tr>
          <tr><td>"Servicios profesionales" (genérico)</td><td>"Desarrollo API REST Node.js - Módulo pagos (35h)"</td></tr>
          <tr><td>Olvidar retención a empresa española</td><td>Incluir 15% (o 7% si novel)</td></tr>
          <tr><td>IVA 21% a cliente alemán</td><td>Sin IVA (inversión sujeto pasivo)</td></tr>
          <tr><td>No verificar VAT en VIES</td><td>Verificar y guardar captura</td></tr>
          <tr><td>Borrar facturas antiguas</td><td>Conservar 4 años mínimo</td></tr>
        </tbody>
      </table>

      <h2>🔒 Factura electrónica (Ley Crea y Crece)</h2>

      <p>Desde <strong>julio 2024</strong>, obligatoria si cliente lo solicita. Desde 2025:</p>
      <ul>
        <li>Facturas > 400€</li>
        <li>Administraciones Públicas</li>
      </ul>

      <h3>Formatos aceptados</h3>
      <table>
        <thead>
          <tr><th>Formato</th><th>¿Válido?</th></tr>
        </thead>
        <tbody>
          <tr><td>Facturae (XML) - Estándar oficial</td><td>Sí</td></tr>
          <tr><td>PDF firmado (certificado digital)</td><td>Sí</td></tr>
          <tr><td>PDF simple (sin firma)</td><td>Si cliente acepta</td></tr>
        </tbody>
      </table>

      <h2>Consejos finales</h2>

      <div class="tip-box">
        <h4>1. Emite inmediatamente tras finalizar</h4>
        <p>Tienes 1 mes legalmente, pero cuanto antes emitas, antes cobras.</p>
      </div>

      <div class="tip-box">
        <h4>2. Condiciones de pago claras</h4>
        <p>Ley morosidad: 30 días máximo. Puedes aplicar <strong>8% interés + 40€ gastos</strong> por impago.</p>
      </div>

      <div class="tip-box">
        <h4>3. IBAN visible</h4>
        <p>Clientes corporativos procesan pagos más rápido con IBAN en factura.</p>
      </div>

      <div class="tip-box">
        <h4>4. Checklist antes de enviar</h4>
        <ul>
          <li>☑ Número correlativo</li>
          <li>☑ NIF/CIF verificado</li>
          <li>☑ Descripción detallada</li>
          <li>☑ Cálculos correctos</li>
          <li>☑ IBAN visible</li>
        </ul>
      </div>

      <h2>Resumen rápido</h2>

      <table>
        <thead>
          <tr><th>Aspecto</th><th>Clave</th></tr>
        </thead>
        <tbody>
          <tr><td>Numeración</td><td>Correlativa sin saltos</td></tr>
          <tr><td>IVA servicios</td><td>21% (UE sin IVA si inversión sujeto pasivo)</td></tr>
          <tr><td>Retención IRPF</td><td>15% empresa española (7% si novel)</td></tr>
          <tr><td>Plazo emisión</td><td>Máx. 1 mes desde servicio</td></tr>
          <tr><td>Plazo pago</td><td>30 días (Ley morosidad)</td></tr>
          <tr><td>Conservación</td><td>4 años mínimo</td></tr>
        </tbody>
      </table>

      <p>Automatiza con buen software, revisa antes de enviar y conserva todo. Una factura correcta facilita el cobro y protege fiscalmente.</p>
    `,
    sources: [
      { title: 'Reglamento de Facturación - RD 1619/2012', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-14696' }
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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    imageAlt: 'Espacio de trabajo en casa con ordenador y buena iluminación',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#por-que-deducir" style="color: #3b82f6; text-decoration: none;">→ ¿Por qué deducir gastos del hogar?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#formula-30" style="color: #3b82f6; text-decoration: none;">→ La fórmula del 30%</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#que-deducir" style="color: #3b82f6; text-decoration: none;">→ Qué suministros puedes deducir</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#requisitos-legales" style="color: #3b82f6; text-decoration: none;">→ Requisitos legales obligatorios</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ejemplo-completo" style="color: #3b82f6; text-decoration: none;">→ Ejemplo completo de ahorro</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#estrategias-maximizar" style="color: #3b82f6; text-decoration: none;">→ Estrategias para maximizar</a></li>
        </ul>
      </div>

      <h2 id="por-que-deducir">¿Por qué deducir gastos de suministros del hogar?</h2>
      <p>Desde la <strong>Ley 6/2017 de Reformas Urgentes del Trabajo Autónomo</strong>, los freelancers que trabajan desde casa pueden deducir una parte de los gastos de suministros. Para desarrolladores que trabajamos en remoto, esto puede suponer un <strong>ahorro fiscal de 400-800€ anuales</strong>. Sin embargo, el cálculo tiene reglas específicas que debes conocer.</p>

      <h2 id="formula-30">📐 La fórmula del 30%: Cómo se calcula</h2>

      <h3>Paso 1: Determina los metros afectos a tu actividad</h3>
      <p>Primero, debes definir qué parte de tu vivienda usas exclusiva o principalmente para trabajar:</p>
      
      <table>
        <thead>
          <tr><th>Situación</th><th>Metros afectos</th><th>¿Es razonable?</th></tr>
        </thead>
        <tbody>
          <tr><td>Despacho exclusivo cerrado</td><td>100% del despacho</td><td>Ideal y defendible</td></tr>
          <tr><td>Zona de trabajo en salón</td><td>Área del escritorio (ej: 6-10 m²)</td><td>Aceptable con foto</td></tr>
          <tr><td>Trabajas en varios sitios de casa</td><td>Estima conservadora (10-15%)</td><td>Justifícalo bien</td></tr>
          <tr><td>Todo el piso para trabajo</td><td>Máx. 30-40% del total</td><td>Hacienda puede cuestionarlo</td></tr>
        </tbody>
      </table>

      <p><strong>Recomendación:</strong> Sé conservador. Para un piso de 80 m², declarar 10-12 m² (12-15%) es razonable y pasa desapercibido. Declarar 40 m² (50%) puede llamar la atención de Hacienda.</p>

      <h3>Paso 2: Aplica la fórmula oficial</h3>
      <pre><code>Deducción = (m² trabajo / m² totales) × 30% × Gasto total

Ejemplo real:
- Vivienda: 85 m²
- Despacho: 10 m²
- Factura luz mensual: 110€

Proporción = 10/85 = 11,76%
Deducción = 11,76% × 30% × 110€ = 3,88€/mes
Deducción anual = 3,88€ × 12 = 46,56€/año</code></pre>

      <h2 id="que-deducir">Qué suministros puedes deducir</h2>

      <table>
        <thead>
          <tr><th>Suministro</th><th>% Deducible</th><th>Cómo calcularlo</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Luz</strong></td>
            <td>Proporción × 30%</td>
            <td>Usa la fórmula estándar. Suma todas las facturas del año.</td>
          </tr>
          <tr>
            <td><strong>Gas/Calefacción</strong></td>
            <td>Proporción × 30%</td>
            <td>Solo si tienes calefacción de gas individual.</td>
          </tr>
          <tr>
            <td><strong>Agua</strong></td>
            <td>Proporción × 30%</td>
            <td>Deducción pequeña pero legítima.</td>
          </tr>
          <tr>
            <td><strong>Internet fibra</strong></td>
            <td>30-100%</td>
            <td><strong>Línea exclusiva trabajo:</strong> 100%<br><strong>Línea mixta:</strong> Proporción × 30% o 50% razonable</td>
          </tr>
          <tr>
            <td><strong>Teléfono móvil</strong></td>
            <td>30-100%</td>
            <td><strong>Línea profesional:</strong> 100%<br><strong>Uso mixto:</strong> 50% (criterio razonable)</td>
          </tr>
          <tr>
            <td><strong>Comunidad</strong></td>
            <td>Proporción × 30%</td>
            <td>Solo si la vivienda está afecta a la actividad en modelo 036.</td>
          </tr>
          <tr>
            <td><strong>IBI (impuesto vivienda)</strong></td>
            <td>Proporción × 30%</td>
            <td>Igual que comunidad: vivienda debe estar afecta.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="requisitos-legales">Requisitos legales obligatorios</h2>

      <h3>1. Alta censal correcta</h3>
      <p>En el <strong>modelo 036 o 037</strong>, debes indicar:</p>
      <ul>
        <li>Que ejerces la actividad en tu domicilio (casilla correspondiente)</li>
        <li>Los metros cuadrados afectos a la actividad</li>
        <li>Si la vivienda es en propiedad, alquiler o cesión</li>
      </ul>
      <p><strong>Importante:</strong> Si no lo tienes declarado, actualiza tu modelo 036 antes de empezar a deducir.</p>

      <h3>2. Facturas a tu nombre</h3>
      <p>Solo puedes deducir suministros de los que <strong>tú eres el titular</strong>:</p>
      <ul>
        <li>Contrato de luz a tu nombre → Deducible</li>
        <li>Contrato a nombre de tu pareja o familiar → No deducible</li>
        <li>Si compartes piso, solo el titular puede deducir (aunque podéis hacer acuerdo privado)</li>
      </ul>

      <h3>3. Justificación documental</h3>
      <p>Hacienda puede pedirte que justifiques la deducción. Ten preparado:</p>
      <ul>
        <li>📄 Todas las facturas de suministros del año</li>
        <li>📷 Fotos del espacio de trabajo (fecha visible)</li>
        <li>📐 Plano del piso con metros indicados (opcional pero útil)</li>
        <li>Copia del modelo 036 con los metros declarados</li>
      </ul>

      <h2>Ejemplo completo: Ahorro real de un developer</h2>

      <p><strong>Perfil:</strong> Desarrollador full-stack en piso de 90 m² con despacho de 12 m²</p>

      <h3>Cálculo anual de deducciones</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Gasto anual</th><th>Cálculo</th><th>Deducción anual</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Electricidad</td>
            <td>1.200€</td>
            <td>1.200€ × 13,33% × 30%</td>
            <td>48€</td>
          </tr>
          <tr>
            <td>Gas (calefacción)</td>
            <td>600€</td>
            <td>600€ × 13,33% × 30%</td>
            <td>24€</td>
          </tr>
          <tr>
            <td>Agua</td>
            <td>300€</td>
            <td>300€ × 13,33% × 30%</td>
            <td>12€</td>
          </tr>
          <tr>
            <td>Internet fibra (uso mixto)</td>
            <td>600€</td>
            <td>600€ × 50% (criterio razonable)</td>
            <td>300€</td>
          </tr>
          <tr>
            <td>Móvil (línea mixta)</td>
            <td>360€</td>
            <td>360€ × 50%</td>
            <td>180€</td>
          </tr>
          <tr>
            <td>Comunidad</td>
            <td>840€</td>
            <td>840€ × 13,33% × 30%</td>
            <td>34€</td>
          </tr>
          <tr style="border-top: 2px solid; font-weight: bold;">
            <td>TOTAL</td>
            <td>3.900€</td>
            <td></td>
            <td><strong>598€</strong></td>
          </tr>
        </tbody>
      </table>

      <p><strong>Ahorro fiscal real:</strong> Si estás en el tramo de IRPF del 30%, esos 598€ deducidos te ahorran aproximadamente <strong>179€ en impuestos</strong>. Si estás en el 37%, el ahorro es de <strong>221€</strong>.</p>

      <h2>Errores comunes y cómo evitarlos</h2>

      <h3>Error 1: Deducir el 100% de todo</h3>
      <p><strong>Mal:</strong> "Trabajo desde casa, deduzco el 100% del internet"<br>
      <strong>Bien:</strong> Internet uso mixto → 50% deducible | Línea exclusiva profesional → 100%</p>

      <h3>Error 2: Metros excesivos</h3>
      <p><strong>Mal:</strong> Declarar 45 m² de un piso de 75 m² (60%)<br>
      <strong>Bien:</strong> Ser conservador: 10-15 m² (13-20%) es razonable y defendible</p>

      <h3>Error 3: No tener la vivienda afecta en el censo</h3>
      <p><strong>Mal:</strong> Deducir sin haberlo declarado en el modelo 036<br>
      <strong>Bien:</strong> Actualizar modelo 036 indicando metros afectos a la actividad</p>

      <h3>Error 4: Deducir facturas a nombre de otros</h3>
      <p><strong>Mal:</strong> Factura de luz a nombre de tu pareja<br>
      <strong>Bien:</strong> Solo deduces facturas donde tú eres titular del contrato</p>

      <h3>Error 5: No guardar documentación</h3>
      <p><strong>Mal:</strong> Deducir sin guardar facturas ni justificación<br>
      <strong>Bien:</strong> Conservar todas las facturas + fotos del espacio durante 4 años</p>

      <h2 id="estrategias-maximizar">Estrategias para maximizar deducciones legalmente</h2>

      <div class="tip-box">
        <h4>1. Contrata línea de internet profesional</h4>
        <p>Si pagas 40€/mes por fibra personal, contrata una segunda línea profesional de 30€/mes. Deduces 360€/año (100%) vs 144€/año (30% de proporcional). <strong>Ahorro extra: 216€/año</strong>.</p>
      </div>

      <div class="tip-box">
        <h4>2. Segundo móvil profesional</h4>
        <p>Línea móvil exclusiva para clientes (20€/mes) → Deduces 240€/año al 100%. Además, separas vida personal y profesional (mejor para conciliación).</p>
      </div>

      <div class="tip-box">
        <h4>3. Haz fotos anuales del espacio</h4>
        <p>Cada enero, haz fotos del despacho/zona de trabajo con fecha visible. Si Hacienda te pide justificación dentro de 3 años, tendrás pruebas.</p>
      </div>

      <div class="tip-box">
        <h4>4. Documenta mejoras en el espacio de trabajo</h4>
        <p>Si inviertes en equipar tu despacho (escritorio, silla ergonómica, iluminación), guarda facturas. Son gastos deducibles al 100% (no necesitan la proporción del 30%).</p>
      </div>

      <div class="tip-box">
        <h4>5. Considera coworking para comparar</h4>
        <p>Si un coworking cuesta 150€/mes (1.800€/año) y tus deducciones de casa son 600€/año, trabajar desde casa te ahorra 1.200€/año netos. Analiza qué te compensa según tu situación.</p>
      </div>

      <h2>❓ Preguntas frecuentes</h2>

      <h4>¿Puedo deducir si alquilo la vivienda?</h4>
      <p>Sí, funciona igual. Declaras los metros afectos en el modelo 036 y aplicas la fórmula. No necesitas permiso del casero, pero asegúrate de que tu contrato permite ejercer actividad profesional.</p>

      <h4>¿Y si comparto piso con compañeros?</h4>
      <p>Solo el titular de los contratos puede deducir. Si todos sois titulares (ej: contrato conjunto), cada uno puede deducir su parte proporcional.</p>

      <h4>¿Afecta a la venta futura de la vivienda?</h4>
      <p>No, siempre que uses menos del 50% para actividad económica. Si superas el 50%, Hacienda considera que el inmueble es afecto a la actividad y puede haber implicaciones fiscales en la venta.</p>

      <h4>¿Debo pagar IVA por el uso de mi vivienda?</h4>
      <p>No. La vivienda no genera IVA deducible ni repercutido. Solo deduces los gastos en tu IRPF.</p>

      <h4>¿Puedo cambiar los metros afectos durante el año?</h4>
      <p>Sí, pero debes modificar el modelo 036 y notificarlo a Hacienda. Lo normal es mantener los metros constantes durante todo el ejercicio fiscal.</p>

      <h2>Comparativa: ¿Casa o coworking?</h2>

      <table>
        <thead>
          <tr><th>Concepto</th><th>Trabajar desde casa</th><th>Coworking</th></tr>
        </thead>
        <tbody>
          <tr><td>Coste directo</td><td>0€ (ya pagas vivienda)</td><td>100-250€/mes</td></tr>
          <tr><td>Deducciones anuales</td><td>400-800€</td><td>1.200-3.000€ (100% deducible)</td></tr>
          <tr><td>Ahorro fiscal (30% IRPF)</td><td>120-240€</td><td>360-900€</td></tr>
          <tr><td>Coste neto real</td><td><strong>Gratis</strong> (con ahorro fiscal)</td><td>840-2.100€/año (tras deducción)</td></tr>
          <tr><td>Flexibilidad</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
          <tr><td>Networking</td><td>⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td>Separación hogar/trabajo</td><td>⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
        </tbody>
      </table>

      <h2>Checklist de implementación</h2>

      <p>Sigue estos pasos para empezar a deducir correctamente:</p>

      <ol>
        <li>☐ <strong>Actualizar modelo 036:</strong> Declarar metros afectos a la actividad</li>
        <li>☐ <strong>Verificar titularidad:</strong> Comprobar que contratos están a tu nombre</li>
        <li>☐ <strong>Hacer fotos:</strong> Documentar espacio de trabajo con fecha</li>
        <li>☐ <strong>Calcular proporción:</strong> Determinar % razonable (10-15% del piso)</li>
        <li>☐ <strong>Crear hoja de cálculo:</strong> Registrar gastos mensuales</li>
        <li>☐ <strong>Archivar facturas:</strong> Guardar todas las facturas de suministros</li>
        <li>☐ <strong>Revisar anualmente:</strong> Calcular deducción total a fin de año</li>
        <li>☐ <strong>Consultar asesor:</strong> Validar cálculo antes de declarar</li>
      </ol>

      <h2>Conclusión práctica</h2>

      <p>Deducir gastos de suministros del hogar es un <strong>derecho legítimo</strong> para autónomos que trabajan desde casa. El ahorro fiscal puede parecer modesto (400-800€ anuales), pero acumulado en 10 años son <strong>4.000-8.000€</strong> que puedes reinvertir en tu negocio o ahorrar.</p>

      <p><strong>Claves para hacerlo bien:</strong></p>
      <ul>
        <li>Sé conservador con los metros declarados (10-15% del piso)</li>
        <li>Actualiza tu modelo 036 antes de empezar</li>
        <li>Guarda todas las facturas y documentación</li>
        <li>Considera líneas profesionales exclusivas (internet/móvil) para deducir al 100%</li>
        <li>Haz fotos anuales del espacio de trabajo</li>
      </ul>

      <p>Recuerda: <strong>no deduzcas más de lo razonable</strong>. Una inspección de Hacienda puede cuestionarte si los porcentajes son desproporcionados. La clave está en el equilibrio entre optimizar fiscalmente y mantener una posición defendible.</p>
    `,
    sources: [
      { title: 'Consulta Vinculante V0673-18 - DGT', url: 'https://petete.tributos.hacienda.gob.es/consultas/' }
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
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#vies-roi-explicados" style="color: #3b82f6; text-decoration: none;">→ VIES y ROI explicados</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#puntos-clave" style="color: #3b82f6; text-decoration: none;">→ Puntos clave sobre VIES y ROI</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#flujo-trabajo" style="color: #3b82f6; text-decoration: none;">→ Flujo de trabajo: Venta B2B</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#alta-roi" style="color: #3b82f6; text-decoration: none;">→ Proceso de alta en el ROI</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#gestion-iva-saas" style="color: #3b82f6; text-decoration: none;">→ Gestión del IVA en SaaS</a></li>
        </ul>
      </div>

      <h2 id="vies-roi-explicados">Comercio digital en la UE: VIES y ROI explicados paso a paso</h2>
      <p>Si desarrollas y vendes <strong>productos SaaS, plugins, templates o servicios digitales</strong> a clientes de otros países de la UE, necesitas entender dos conceptos clave: el <strong>sistema VIES</strong> para verificar el IVA de clientes empresariales, y el <strong>ROI (Registro de Operadores Intracomunitarios)</strong> para estar habilitado a operar sin IVA en transacciones B2B intracomunitarias.</p>

      <h2 id="puntos-clave">Puntos Clave sobre VIES y ROI</h2>

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
        <h4>Consejo para Desarrolladores SaaS</h4>
        <p>Si vendes SaaS con pagos recurrentes (Stripe, Paddle, etc.), necesitas un sistema que verifique automáticamente el VIES de clientes empresariales. Plataformas como <strong>Paddle o LemonSqueezy</strong> actúan como Merchant of Record y gestionan el IVA por ti, lo que simplifica enormemente la fiscalidad. Si usas Stripe directamente, integra <strong>Stripe Tax</strong> o usa servicios como Quaderno o Octobat para la gestión de IVA europeo. Recuerda: las ventas B2C (particulares) llevan IVA del país del cliente (OSS).</p>
      </div>

      <h2 id="flujo-trabajo">Flujo de trabajo: Venta B2B a empresa alemana</h2>
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

      <h2 id="alta-roi">Proceso completo de alta en el ROI</h2>
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
        <h4>Errores Comunes al Solicitar el ROI</h4>
        <p><strong>1. Solicitar sin clientes reales:</strong> La AEAT puede denegar si no demuestras actividad real intracomunitaria. <strong>2. No actualizar el domicilio fiscal:</strong> Hacienda envía notificaciones por correo postal; si no las recibes, pierdes plazos. <strong>3. Olvidar marcar la casilla 582:</strong> El modelo 036 tiene muchas casillas; asegúrate de marcar la correcta. <strong>4. No conservar pruebas de verificación VIES:</strong> Guarda todas las consultas VIES con fecha visible durante 4 años.</p>
      </div>

      <h2 id="gestion-iva-saas">Gestión del IVA en productos SaaS recurrentes</h2>
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
        <li>Puedes consultarlo en: <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" target="_blank" rel="noopener">Tipos de cambio BCE</a></li>
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
    \`https://ec.europa.eu/taxation_customs/vies/rest-api/ms/\${countryCode}/vat/\${vatNumber}\`
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
        <li><strong>Lista códigos país VAT:</strong> BE (Bélgica), DE (Alemania), FR (Francia), NL (Holanda), IT (Italia), etc.</li>
      </ul>

      <h3>Plantillas útiles</h3>
      <ul>
        <li><strong>Excel control VIES:</strong> Columnas: Fecha, Cliente, VAT, País, Válido (Sí/No), Captura guardada</li>
        <li><strong>Template factura intracomunitaria:</strong> Google Docs/Word con todos los campos obligatorios</li>
        <li><strong>Checklist trimestral:</strong> Verificar VIES de activos, preparar 349, revisar 303</li>
      </ul>
    `,
    sources: [
      { title: 'Sistema VIES - Validación VAT Comisión Europea', url: 'https://ec.europa.eu/taxation_customs/vies/' }
    ]
  },

  // 11. Tramos de Ahorro y Cotización Estratégica
  {
    id: '11',
    slug: 'tramos-ahorro-cotizacion-estrategica-2026',
    title: 'Tramos de Ahorro y Cotización Estratégica 2026',
    metaDescription: 'Cómo optimizar tu cotización en 2026: tramos con mejor relación cuota/prestaciones, estrategias para cambiar de tramo y ahorro fiscal.',
    category: 'cotizacion',
    publishDate: '2025-12-12',
    readTime: 19,
    featured: false,
    excerpt: 'Descubre los tramos de cotización más rentables, cómo cambiar estratégicamente de tramo y optimizar la relación entre cuota pagada y prestaciones recibidas.',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&auto=format&fit=crop',
    imageAlt: 'Gráficos de ahorro y optimización financiera',
    content: `
      <h2>Claves para optimizar tu cotización en 2026</h2>
      <p>El sistema de cotización por tramos de 2026 ofrece <strong>oportunidades de ahorro</strong> que muchos autónomos desconocen. No todos los tramos son igual de "rentables" en términos de relación cuota/prestaciones. Entender esto puede ahorrarte cientos de euros al año sin afectar negativamente a tus derechos.</p>

      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#estrategias" style="color: #3b82f6; text-decoration: none;">→ 3 Estrategias Clave de Ahorro</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#prestaciones" style="color: #3b82f6; text-decoration: none;">→ Impacto en prestaciones</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#simulacion" style="color: #3b82f6; text-decoration: none;">→ Simulación con ingresos variables</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#cambiar-tramo" style="color: #3b82f6; text-decoration: none;">→ Cómo cambiar de tramo online</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#tabla-tramos" style="color: #3b82f6; text-decoration: none;">→ Tabla completa de tramos 2026</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#estrategias-avanzadas" style="color: #3b82f6; text-decoration: none;">→ Estrategias avanzadas de cotización</a></li>
        </ul>
      </div>

      <h2 id="estrategias">3 Estrategias Clave de Ahorro</h2>

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
        <h4>Consejo para Desarrolladores</h4>
        <p>Si facturas de forma <strong>irregular</strong> (meses con 0€, otros con 8.000€), no cotices siempre en el tramo más alto "por si acaso". Usa una estrategia dinámica: cotiza bajo cuando factures bajo y ajusta al alza cuando entren proyectos grandes. La <strong>regularización anual</strong> te protege: si al final del año resulta que cotizaste de menos, pagarás la diferencia; si cotizaste de más, te devuelven. Pero evitas pagar de más durante todo el año.</p>
      </div>

      <h2 id="prestaciones">Impacto en prestaciones: ¿Vale la pena cotizar más?</h2>
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

      <h2 id="simulacion">Simulación: Developer con ingresos variables</h2>
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

      <h2 id="cambiar-tramo">Cómo cambiar de tramo online</h2>
      <ol>
        <li>Accede a <strong>Import@ss</strong>: <a href="https://portal.seg-social.gob.es" target="_blank">portal.seg-social.gob.es</a></li>
        <li>Certificado digital o Cl@ve</li>
        <li>Sección: "Modificación de datos" → "Cambio de base de cotización"</li>
        <li>Elige el nuevo tramo según tus rendimientos previstos</li>
        <li>Efectivo desde el primer día del mes siguiente</li>
      </ol>

      <h2 id="tabla-tramos">Tabla completa de tramos 2026</h2>
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

      <h2 id="estrategias-avanzadas">Estrategias avanzadas de cotización</h2>

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
        <h4>Hack Fiscal: Controla gastos deducibles</h4>
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
      { title: 'Real Decreto-ley 13/2022 sistema cotización', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482' }
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
    readTime: 11,
    featured: true,
    excerpt: 'La IA está transformando la gestión fiscal: desde categorización automática de gastos hasta asesoramiento fiscal personalizado. Descubre las mejores herramientas para 2026.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    imageAlt: 'Inteligencia artificial y tecnología aplicada a finanzas',
    content: `
      <h2>La IA revoluciona la gestión fiscal: Herramientas que debes conocer</h2>
      <p>En 2026, la <strong>inteligencia artificial</strong> ha dejado de ser ciencia ficción para convertirse en una herramienta cotidiana para autónomos. Desde chatbots que resuelven dudas fiscales hasta sistemas que categorizan gastos automáticamente, la IA está reduciendo dramáticamente el tiempo dedicado a tareas administrativas.</p>

      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#areas-ia" style="color: #3b82f6; text-decoration: none;">→ 3 Áreas Donde la IA Marca la Diferencia</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#herramientas" style="color: #3b82f6; text-decoration: none;">→ Herramientas de IA gratuitas o económicas</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#casos-uso" style="color: #3b82f6; text-decoration: none;">→ Casos de uso prácticos en 2026</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#futuro" style="color: #3b82f6; text-decoration: none;">→ El futuro: ¿Gestorías automáticas?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#limitaciones" style="color: #3b82f6; text-decoration: none;">→ Limitaciones y precauciones</a></li>
        </ul>
      </div>

      <h2 id="areas-ia">3 Áreas Donde la IA Marca la Diferencia</h2>

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
        <h4>Consejo para Desarrolladores</h4>
        <p>Como dev, puedes ir un paso más allá: <strong>automatiza tu contabilidad con APIs</strong>. Herramientas como Holded, Quipu o Freebie tienen APIs que permiten integración con tus propios scripts. Ejemplo: un script que lee tus facturas de Stripe/PayPal, las sube automáticamente a Holded y categoriza según reglas personalizadas. Con <strong>n8n (plataforma de automatización)</strong> puedes crear workflows sin código que conecten tus herramientas fiscales con Notion, Google Sheets, etc.</p>
      </div>

      <h2 id="herramientas">Herramientas de IA gratuitas o económicas</h2>
      
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

      <h2 id="casos-uso">Casos de uso prácticos en 2026</h2>

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

      <h2 id="futuro">El futuro: ¿Gestorías automáticas?</h2>
      <p>En 2026 ya existen <strong>gestorías semi-automatizadas</strong>:</p>
      <ul>
        <li><strong>Modelo híbrido:</strong> IA + supervisor humano para casos complejos</li>
        <li><strong>Precio disruptivo:</strong> Desde 50€/mes (vs 150-300€ gestoría tradicional)</li>
        <li><strong>Ejemplos:</strong> Declarando (ahora con IA), TaxDown (optimización IRPF con IA), Freebie (automatización completa)</li>
      </ul>
      <p>La IA no reemplaza completamente a gestores fiscales para casos complejos, pero <strong>reduce costes y tiempo</strong> en tareas rutinarias.</p>

      <h2 id="limitaciones">Limitaciones y precauciones</h2>
      <ul>
        <li><strong>IA no es infalible:</strong> Siempre revisa sugerencias en casos críticos</li>
        <li><strong>Privacidad de datos:</strong> Asegúrate de que las herramientas cumplen RGPD</li>
        <li><strong>Normativa cambiante:</strong> La IA puede no estar actualizada a cambios recientes (verifica fechas)</li>
        <li><strong>Casos complejos:</strong> Para situaciones únicas (inversiones, criptomonedas, herencias), consulta profesional humano</li>
      </ul>
    `,
    sources: [
      { title: 'n8n - Automatización workflows open source', url: 'https://n8n.io/' }
    ]
  },
  // 13: factura electronica
  {
    id: '13',
    slug: 'factura-electronica-obligatoria-ley-crea-crece-autonomos-2026',
    title: 'Factura Electrónica Obligatoria: Ley Crea y Crece y Requisitos Técnicos 2026',
    metaDescription: 'Guía completa sobre la facturación electrónica obligatoria para autónomos en España según la Ley Crea y Crece. Requisitos técnicos, software compatible y plazos de implementación.',
    category: 'impuestos',
    publishDate: '2026-01-07',
    readTime: 12,
    featured: true,
    excerpt: 'La Ley 18/2022 Crea y Crece establece la obligatoriedad de la factura electrónica. Descubre qué software necesitas, los requisitos técnicos y los plazos para cumplir con la normativa.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    imageAlt: 'Dashboard digital con facturación electrónica en pantalla',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#que-es" style="color: #3b82f6; text-decoration: none;">→ Qué es y por qué es obligatoria</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#requisitos" style="color: #3b82f6; text-decoration: none;">→ Requisitos técnicos</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#software" style="color: #3b82f6; text-decoration: none;">→ Software compatible</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#certificado" style="color: #3b82f6; text-decoration: none;">→ Certificado digital</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#plazos" style="color: #3b82f6; text-decoration: none;">→ Plazos de implementación</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#transicion" style="color: #3b82f6; text-decoration: none;">→ Proceso de transición</a></li>
        </ul>
      </div>

      <h2 id="que-es">¿Qué es la factura electrónica y por qué es obligatoria?</h2>
      <p>La <strong>Ley 18/2022 de Creación y Crecimiento de Empresas</strong> (Ley Crea y Crece) estableció en su artículo 12 la obligatoriedad de la facturación electrónica para <strong>todas las transacciones entre empresas y autónomos</strong> (B2B). Esta medida, que entró en vigor progresivamente desde 2023, busca combatir el fraude fiscal, reducir la economía sumergida y facilitar la digitalización del tejido empresarial español.</p>

      <p>Como desarrollador freelance, esto te afecta directamente: <strong>todas las facturas que emitas a empresas deben ser electrónicas</strong>, cumplir con estándares técnicos específicos y estar firmadas digitalmente. Las facturas en PDF enviadas por email ya no son suficientes para cumplir con la normativa.</p>

      <h2 id="requisitos">Puntos Clave de la Normativa</h2>

      <h3>1. ¿Qué es una factura electrónica legalmente válida?</h3>
      <p>Según el <strong>Real Decreto 1619/2012</strong> y la Ley Crea y Crece, una factura electrónica debe cumplir:</p>
      <ul>
        <li><strong>Formato estructurado:</strong> XML (Facturae 3.2.2 o UBL), no puede ser simplemente un PDF</li>
        <li><strong>Firma electrónica avanzada:</strong> Con certificado digital emitido por prestador cualificado</li>
        <li><strong>Garantía de autenticidad:</strong> Debe poder verificarse que no ha sido alterada</li>
        <li><strong>Integridad:</strong> El contenido no debe poder modificarse sin invalidar la firma</li>
        <li><strong>Legibilidad permanente:</strong> Debe poder visualizarse durante todo el periodo de conservación (4 años mínimo)</li>
      </ul>

      <h3>2. Plazos de implementación obligatoria</h3>
      <table>
        <thead>
          <tr><th>Fase</th><th>Fecha</th><th>Obligados</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Fase 1</strong></td><td>Julio 2024</td><td>Grandes empresas (+ 8M€ facturación)</td></tr>
          <tr><td><strong>Fase 2</strong></td><td>Enero 2025</td><td>Medianas empresas (1M€ - 8M€)</td></tr>
          <tr><td><strong>Fase 3</strong></td><td>Julio 2025</td><td>Todas las empresas y autónomos B2B</td></tr>
        </tbody>
      </table>
      <p><strong>Nota importante:</strong> A partir de julio 2025, <strong>todos los autónomos</strong> que facturen a empresas deben emitir facturas electrónicas. Las facturas a consumidores finales (B2C) no están afectadas por esta obligación.</p>

      <h3>3. Formatos técnicos admitidos</h3>
      <p>La normativa española reconoce dos formatos principales:</p>
      <ul>
        <li><strong>Facturae (formato español):</strong> Versión 3.2.2 basada en XML. Es el estándar nacional y el más usado en las relaciones con la Administración Pública</li>
        <li><strong>UBL (Universal Business Language):</strong> Estándar internacional ISO/IEC 19845. Compatible con sistemas europeos e internacionales</li>
      </ul>
      <p>Ambos formatos son <strong>archivos XML estructurados</strong> que contienen todos los datos de la factura en campos específicos. No son "facturas en PDF", aunque pueden ir acompañados de una representación visual en PDF para facilitar la lectura.</p>

      <h2 id="software">Software compatible y soluciones técnicas</h2>

      <h3>Opciones para autónomos tech:</h3>
      <table>
        <thead>
          <tr><th>Software</th><th>Precio</th><th>Formato</th><th>Características</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Holded</strong></td>
            <td>Desde 29€/mes</td>
            <td>Facturae + UBL</td>
            <td>Firma automática, envío email, API REST</td>
          </tr>
          <tr>
            <td><strong>Quipu</strong></td>
            <td>Desde 25€/mes</td>
            <td>Facturae</td>
            <td>Integración bancaria, OCR facturas recibidas</td>
          </tr>
          <tr>
            <td><strong>Freebie</strong></td>
            <td>Desde 19€/mes</td>
            <td>Facturae</td>
            <td>Gestoría incluida, modelos fiscales automáticos</td>
          </tr>
          <tr>
            <td><strong>FacturaDirecta (FNMT)</strong></td>
            <td>Gratis</td>
            <td>Facturae 3.2.2</td>
            <td>Oficial de la FNMT, básico pero suficiente</td>
          </tr>
          <tr>
            <td><strong>Solución propia (API)</strong></td>
            <td>Variable</td>
            <td>Facturae/UBL</td>
            <td>Librería PHP/Python + certificado digital</td>
          </tr>
        </tbody>
      </table>

      <h3>Implementación técnica DIY para desarrolladores</h3>
      <p>Si quieres desarrollar tu propia solución (útil si ya tienes un sistema de facturación), necesitas:</p>
      <ul>
        <li><strong>Certificado digital:</strong> Puedes usar tu certificado personal de la FNMT o adquirir uno de empresa. Coste: gratuito (personal) o ~50€/año (empresa)</li>
        <li><strong>Librería XML:</strong> Para generar el formato Facturae. Existen librerías open source:
          <ul>
            <li>PHP: <code>facturae-php</code> en GitHub</li>
            <li>Python: <code>python-facturae</code></li>
            <li>Node.js: <code>facturae-js</code></li>
          </ul>
        </li>
        <li><strong>Librería de firma digital:</strong> Para firmar el XML con tu certificado
          <ul>
            <li>XMLSecLibs para PHP</li>
            <li>python-xmlsec para Python</li>
          </ul>
        </li>
      </ul>

      <div class="tip-box">
        <h4>Solución híbrida recomendada</h4>
        <p>La opción más práctica para la mayoría de freelancers es usar un software especializado (Holded, Quipu, Freebie) que se encarga de:</p>
        <ul>
          <li>Generar automáticamente el XML en formato correcto</li>
          <li>Firmar digitalmente con tu certificado</li>
          <li>Enviar por email al cliente con representación visual en PDF</li>
          <li>Guardar copia con validez legal durante 4+ años</li>
        </ul>
        <p>Evitas errores técnicos y te garantizas el cumplimiento normativo. El coste mensual (20-30€) se amortiza rápidamente comparado con el tiempo y riesgo de desarrollar una solución propia.</p>
      </div>

      <h2 id="certificado">Certificado digital: Obtención y uso</h2>

      <h3>Tipos de certificado válidos:</h3>
      <ul>
        <li><strong>Certificado personal FNMT:</strong> Gratuito, válido para autónomos persona física. Se solicita en <a href="https://www.sede.fnmt.gob.es" target="_blank" rel="noopener">sede.fnmt.gob.es</a></li>
        <li><strong>Certificado de empresa:</strong> Si tienes una SL, necesitas el certificado de representante. Coste: ~50€/año</li>
        <li><strong>Certificado de terceros cualificados:</strong> CamerfirmaANF, etc. Más caros pero con soporte técnico</li>
      </ul>

      <h3>Pasos para obtener el certificado FNMT (gratuito):</h3>
      <ol>
        <li>Acceder a <strong>sede.fnmt.gob.es</strong> y solicitar el certificado (5 minutos online)</li>
        <li>Acudir presencialmente a una oficina de registro (Correos, SEPE, etc.) con DNI para acreditar identidad</li>
        <li>Descargar el certificado desde la web de la FNMT (disponible 10 días después de la acreditación)</li>
        <li>Instalar el certificado en tu navegador o exportarlo para usarlo en el software de facturación</li>
      </ol>
      <p><strong>Importante:</strong> El certificado caduca cada 4 años. Debes renovarlo antes del vencimiento para seguir pudiendo firmar facturas electrónicas.</p>

      <h2 id="plazos">Obligaciones y sanciones</h2>

      <h3>¿Qué pasa si no cumples?</h3>
      <p>Según la <strong>Ley General Tributaria</strong>, emitir facturas que no cumplan los requisitos legales puede conllevar:</p>
      <ul>
        <li><strong>Sanción leve:</strong> 150€ por cada factura incorrecta (mínimo 300€)</li>
        <li><strong>Sanción grave:</strong> Si Hacienda considera que hay ocultación intencionada, puede llegar al 2% de la cifra de negocio</li>
        <li><strong>Rechazo de deducción fiscal:</strong> Tu cliente podría no poder deducir el gasto si la factura no es válida</li>
      </ul>
      <p>Aunque en la práctica, la AEAT está siendo flexible durante el periodo de adaptación (2025-2026), es mejor cumplir desde el principio.</p>

      <h3>Conservación de facturas electrónicas</h3>
      <p>Debes conservar las facturas electrónicas <strong>durante 4 años</strong> (plazo de prescripción fiscal) garantizando:</p>
      <ul>
        <li><strong>Legibilidad:</strong> Poder visualizar el contenido en cualquier momento</li>
        <li><strong>Autenticidad:</strong> Conservar la firma digital válida</li>
        <li><strong>Integridad:</strong> El archivo XML original sin modificaciones</li>
      </ul>
      <p>La mayoría de software de facturación gestiona esto automáticamente con almacenamiento en la nube cifrado.</p>

      <h2 id="transicion">Preguntas frecuentes</h2>

      <h3>¿Puedo seguir enviando facturas en PDF por email?</h3>
      <p>No, si facturas a empresas (B2B). Desde julio 2025, <strong>solo son válidas las facturas electrónicas</strong> en formato Facturae o UBL con firma digital. El PDF puede ir como documento complementario para visualización, pero el archivo legalmente válido es el XML firmado.</p>

      <h3>¿Afecta a facturas a clientes extranjeros?</h3>
      <p>La Ley Crea y Crece solo obliga a facturas <strong>dentro de España</strong>. Si facturas a clientes de USA, UK u otros países, puedes seguir usando el formato que acuerdes con ellos (PDF, factura en papel, etc.). Sin embargo, la UE está avanzando hacia estándares de facturación electrónica armonizados (proyecto ViDA), por lo que es probable que en 2027-2028 también sea obligatorio para operaciones intracomunitarias.</p>

      <h3>¿Necesito cambiar mi forma de facturar si solo facturo a particulares?</h3>
      <p>No. La obligación de factura electrónica solo aplica a <strong>transacciones B2B</strong> (entre empresas y autónomos). Si todos tus clientes son consumidores finales (B2C), puedes seguir emitiendo facturas simplificadas en el formato que quieras (PDF, papel, etc.).</p>

      <div class="tip-box">
        <h4>Checklist para cumplir en 2026</h4>
        <ol>
          <li>✓ Obtener certificado digital (FNMT gratuito o de pago)</li>
          <li>✓ Elegir software de facturación compatible (Holded, Quipu, Freebie, etc.)</li>
          <li>✓ Configurar firma automática con tu certificado</li>
          <li>✓ Probar con una factura de prueba antes de julio 2025</li>
          <li>✓ Informar a tus clientes del cambio de formato</li>
          <li>✓ Asegurar sistema de backup para conservación 4+ años</li>
        </ol>
      </div>
    `,
    sources: [
      { title: 'Ley 18/2022 Crea y Crece - BOE', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-15817' }
    ]
  },
  // 14: Cryptomondedas declarar
  {
    id: '14',
    slug: 'criptomonedas-fiscalidad-dev-declarar-pagos-stablecoins-usdc-usdt-2026',
    title: 'Criptomonedas y Fiscalidad para Developers: Cómo Declarar Pagos en Stablecoins',
    metaDescription: 'Guía legal para desarrolladores que cobran en criptomonedas: cómo declarar pagos en USDC, USDT y otras stablecoins en la declaración de IRPF y modelos trimestrales.',
    category: 'internacional',
    publishDate: '2026-01-08',
    readTime: 13,
    featured: true,
    excerpt: 'Cada vez más freelancers cobran en criptomonedas. Descubre cómo declarar legalmente pagos en stablecoins (USDC/USDT), qué modelos fiscales usar y cómo evitar sanciones de Hacienda.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&auto=format&fit=crop',
    imageAlt: 'Criptomonedas y blockchain representando pagos digitales',
    content: `
      <h2>La realidad del cobro en criptomonedas en 2026</h2>
      <p>En 2026, es cada vez más común que desarrolladores freelance cobren parte o la totalidad de sus servicios en <strong>criptomonedas</strong>, especialmente en stablecoins como USDC, USDT o DAI. Plataformas como Bitwage, RemoteOK o clientes de Web3/blockchain prefieren pagar en crypto por rapidez, bajos costes de transferencia internacional y facilidad operativa.</p>

      <p>Sin embargo, la fiscalidad de las criptomonedas en España es un tema complejo y en constante evolución. La <strong>Agencia Tributaria</strong> ha establecido criterios claros: <strong>las criptomonedas son consideradas bienes patrimoniales</strong>, no dinero de curso legal, y cualquier operación con ellas tiene implicaciones fiscales que debes declarar correctamente para evitar sanciones.</p>

      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#marco-legal" style="color: #3b82f6; text-decoration: none;">→ Marco legal: ¿Qué dice Hacienda?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#caso-practico" style="color: #3b82f6; text-decoration: none;">→ Caso práctico: Cobras 5.000 USDC</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#stablecoins-vs-volatiles" style="color: #3b82f6; text-decoration: none;">→ Stablecoins vs. criptomonedas volátiles</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#modelo-721" style="color: #3b82f6; text-decoration: none;">→ Modelo 721: Declaración en el extranjero</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#herramientas" style="color: #3b82f6; text-decoration: none;">→ Herramientas para gestionar fiscalidad crypto</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#consejos" style="color: #3b82f6; text-decoration: none;">→ Consejos prácticos para desarrolladores</a></li>
        </ul>
      </div>

      <h2 id="marco-legal">Marco legal: ¿Qué dice Hacienda sobre las criptomonedas?</h2>

      <h3>1. Consultas vinculantes de la AEAT</h3>
      <p>La Dirección General de Tributos (DGT) ha emitido varias <strong>consultas vinculantes</strong> que establecen criterios oficiales:</p>
      <ul>
        <li><strong>Consulta V0999-18 (2018):</strong> Las criptomonedas son bienes patrimoniales inmateriales. Su transmisión genera ganancias/pérdidas patrimoniales</li>
        <li><strong>Consulta V2846-20 (2020):</strong> Cobrar servicios profesionales en crypto se considera <strong>permuta</strong>: entregas un servicio, recibes un bien (crypto). Tributa como rendimiento de actividad económica</li>
        <li><strong>Real Decreto-ley 7/2021:</strong> Establece la obligación de informar sobre saldos y operaciones con criptomonedas mediante el modelo 721 (operaciones en el extranjero)</li>
        <li><strong>Ley 11/2021 (Ley Antifraude):</strong> Amplía la información que exchanges y plataformas deben proporcionar a Hacienda</li>
      </ul>

      <h3>2. Tratamiento fiscal según el tipo de operación</h3>
      <table>
        <thead>
          <tr><th>Operación</th><th>Tipo de renta</th><th>Impuesto</th><th>Declaración</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cobrar servicios en crypto</strong></td>
            <td>Rendimiento de actividad económica</td>
            <td>IRPF (15-47%)</td>
            <td>Modelo 130 trimestral + Renta anual</td>
          </tr>
          <tr>
            <td><strong>Vender crypto por euros</strong></td>
            <td>Ganancia/pérdida patrimonial</td>
            <td>IRPF (19-28%)</td>
            <td>Renta anual (casilla "Ganancias patrimoniales")</td>
          </tr>
          <tr>
            <td><strong>Intercambiar crypto (ej: BTC → USDT)</strong></td>
            <td>Ganancia/pérdida patrimonial</td>
            <td>IRPF (19-28%)</td>
            <td>Renta anual</td>
          </tr>
          <tr>
            <td><strong>Pagar gastos en crypto</strong></td>
            <td>Gasto deducible + ganancia/pérdida</td>
            <td>IRPF</td>
            <td>Modelo 130 + Renta anual</td>
          </tr>
        </tbody>
      </table>

      <h2 id="caso-practico">Caso práctico: Cobras 5.000 USDC por un proyecto</h2>
      
      <h3>Escenario completo paso a paso:</h3>
      <p><strong>Situación:</strong> El 15 de enero de 2026, completas un proyecto y cobras 5.000 USDC. En ese momento, el USDC cotiza a 1 USDC = 0,92€.</p>

      <h3>Paso 1: Valoración del ingreso</h3>
      <ul>
        <li>Ingresos facturados: <strong>5.000 USDC × 0,92€ = 4.600€</strong></li>
        <li>Debes emitir una factura por importe de 4.600€ (valor de mercado en el momento del cobro)</li>
        <li>Puedes indicar en la factura: "Cobro en criptomoneda (5.000 USDC) - Contravalor: 4.600€"</li>
      </ul>

      <h3>Paso 2: Declaración trimestral (Modelo 130)</h3>
      <p>En el <strong>modelo 130 del primer trimestre</strong>, debes declarar:</p>
      <ul>
        <li><strong>Casilla 01 (Ingresos):</strong> 4.600€</li>
        <li><strong>Casilla 02 (Gastos):</strong> Tus gastos deducibles del trimestre</li>
        <li>Calculas el 20% de pago fraccionado sobre el rendimiento neto</li>
      </ul>
      <p><strong>Importante:</strong> No puedes esperar a vender el USDC para declarar el ingreso. Se declara en el momento del cobro, aunque no hayas convertido a euros todavía.</p>

      <h3>Paso 3: Conversión a euros (si la haces)</h3>
      <p>Supongamos que el 1 de marzo vendes los 5.000 USDC y el precio ha subido a 1 USDC = 0,94€:</p>
      <ul>
        <li>Valor de venta: <strong>5.000 × 0,94€ = 4.700€</strong></li>
        <li>Valor de adquisición (cuando cobraste): 4.600€</li>
        <li><strong>Ganancia patrimonial:</strong> 4.700€ - 4.600€ = 100€</li>
      </ul>
      <p>Esta ganancia de 100€ tributará al <strong>19%</strong> (ganancia patrimonial del ahorro) en tu declaración de la renta anual.</p>

      <h3>Paso 4: Declaración de la renta anual</h3>
      <p>En la renta de 2026 (presentada en 2027), declaras:</p>
      <ul>
        <li><strong>Rendimientos de actividad económica:</strong> 4.600€ (del cobro del proyecto)</li>
        <li><strong>Ganancias patrimoniales del ahorro:</strong> 100€ (de la venta posterior de USDC)</li>
      </ul>

      <div class="tip-box">
        <h4>Error común a evitar</h4>
        <p>Muchos freelancers piensan: "Declaro cuando convierto a euros". <strong>INCORRECTO</strong>. Según la AEAT, el ingreso se produce en el momento del cobro del servicio, aunque lo cobres en crypto. La conversión posterior genera una ganancia/pérdida patrimonial adicional, pero el rendimiento de actividad ya se generó al cobrar.</p>
      </div>

      <h2 id="stablecoins-vs-volatiles">Stablecoins vs. criptomonedas volátiles</h2>

      <h3>Ventajas fiscales de cobrar en stablecoins (USDC, USDT, DAI):</h3>
      <ul>
        <li><strong>Menor riesgo de ganancia/pérdida patrimonial:</strong> Al estar ancladas al dólar/euro, la diferencia entre el momento del cobro y la venta es mínima</li>
        <li><strong>Facilita el cálculo fiscal:</strong> 1 USDC ≈ 0,92€ constantemente, simplifica la contabilidad</li>
        <li><strong>Menor volatilidad:</strong> No sufres caídas del 20-30% como con BTC o ETH entre cobro y conversión</li>
      </ul>

      <h3>Desventajas de cobrar en BTC, ETH u otras volátiles:</h3>
      <p>Si cobras 0,1 BTC cuando vale 50.000€ y luego baja a 40.000€ antes de vender:</p>
      <ul>
        <li>Ingresos declarados en el cobro: <strong>5.000€</strong> (0,1 × 50.000€)</li>
        <li>Al vender obtienes: <strong>4.000€</strong> (0,1 × 40.000€)</li>
        <li>Tienes una <strong>pérdida patrimonial</strong> de 1.000€ que puedes compensar con ganancias, pero ya habías tributado IRPF por los 5.000€ completos</li>
      </ul>
      <p>Conclusión: Las stablecoins son más predecibles fiscalmente y evitan situaciones donde pagas impuestos sobre ingresos que luego pierden valor.</p>

      <h2 id="modelo-721">Modelo 721: Declaración de criptomonedas en el extranjero</h2>

      <h3>¿Qué es y cuándo es obligatorio?</h3>
      <p>El <strong>modelo 721</strong> es una declaración informativa anual que debes presentar si tienes criptomonedas en exchanges o wallets situados fuera de España (Binance, Coinbase, Kraken, etc.) y el saldo supera <strong>50.000€</strong>.</p>

      <h3>Información que debes declarar:</h3>
      <ul>
        <li>Nombre de la plataforma o wallet</li>
        <li>Saldo a 31 de diciembre en cada criptomoneda</li>
        <li>Contravalor en euros según cotización del 31/12</li>
      </ul>

      <h3>Sanciones por no presentarlo:</h3>
      <ul>
        <li><strong>Sanción mínima:</strong> 10.000€ por no presentar o presentar fuera de plazo</li>
        <li><strong>Sanción por dato incorrecto:</strong> 5.000€ por cada dato o conjunto de datos omitidos</li>
      </ul>
      <p><strong>Importante:</strong> Aunque no llegues a 50.000€, es recomendable llevar un registro detallado de tus operaciones. Hacienda puede solicitarlo en una inspección.</p>

      <h2 id="herramientas">Herramientas y software para gestionar la fiscalidad crypto</h2>

      <h3>Plataformas especializadas:</h3>
      <table>
        <thead>
          <tr><th>Herramienta</th><th>Precio</th><th>Características</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Koinly</strong></td>
            <td>Desde 49$/año</td>
            <td>Importa transacciones de 600+ exchanges, calcula ganancias/pérdidas, genera informe fiscal para España</td>
          </tr>
          <tr>
            <td><strong>CoinTracking</strong></td>
            <td>Desde 10,99€/mes</td>
            <td>Tracking completo, informes fiscales por país, API de exchanges</td>
          </tr>
          <tr>
            <td><strong>CryptoTax (español)</strong></td>
            <td>Desde 99€/año</td>
            <td>Especializado en normativa española, genera modelo 721 y datos para la renta</td>
          </tr>
          <tr>
            <td><strong>Excel manual</strong></td>
            <td>Gratis</td>
            <td>Requiere disciplina, útil si tienes pocas operaciones (&lt;20/año)</td>
          </tr>
        </tbody>
      </table>

      <h3>Qué debe incluir tu registro de operaciones:</h3>
      <ul>
        <li><strong>Fecha:</strong> De cada cobro, venta, intercambio</li>
        <li><strong>Cantidad:</strong> En crypto (ej: 5.000 USDC)</li>
        <li><strong>Contravalor en euros:</strong> Según cotización del día</li>
        <li><strong>Concepto:</strong> "Cobro proyecto X", "Venta USDC", "Intercambio BTC→USDT"</li>
        <li><strong>Plataforma:</strong> Binance, Coinbase, wallet personal, etc.</li>
      </ul>

      <h2 id="consejos">Consejos prácticos para desarrolladores</h2>

      <h3>1. Negocia precios en EUR aunque cobres en crypto</h3>
      <p>Acuerda con tu cliente: "El proyecto cuesta 5.000€, pagaderos en el equivalente en USDC al tipo de cambio del día del pago". Así evitas discusiones posteriores sobre el valor del servicio.</p>

      <h3>2. Usa stablecoins para reducir complejidad fiscal</h3>
      <p>Si puedes elegir, pide cobrar en USDC/USDT en lugar de BTC/ETH. La volatilidad mínima simplifica enormemente la contabilidad y evita sorpresas fiscales.</p>

      <h3>3. Convierte a euros regularmente</h3>
      <p>No acumules grandes cantidades de crypto sin convertir. Si cobras 5.000 USDC, considera vender 4.000€ inmediatamente para cubrir impuestos y gastos. Así reduces el riesgo de pérdidas patrimoniales posteriores.</p>

      <h3>4. Documenta absolutamente todo</h3>
      <p>Guarda capturas de pantalla de:</p>
      <ul>
        <li>Transacciones en blockchain (TX hash)</li>
        <li>Cotizaciones del día del cobro/venta</li>
        <li>Emails de confirmación con el cliente</li>
      </ul>
      <p>En caso de inspección, Hacienda pedirá justificación de cada operación.</p>

      <h3>5. Considera trabajar con una gestoría especializada</h3>
      <p>La fiscalidad crypto es compleja y cambiante. Una gestoría especializada (como TaxDown Crypto, Cryptospain Abogados o gestorías que ofrezcan servicios crypto) puede ahorrarte tiempo y evitar errores costosos. Precio orientativo: 50-100€ extra mensuales sobre la cuota base de gestoría.</p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Puedo pagar gastos directamente en crypto?</h3>
      <p>Sí, pero ten en cuenta que <strong>es una doble operación fiscal</strong>:</p>
      <ul>
        <li>Gastas X euros en un servicio/producto → gasto deducible en tu actividad</li>
        <li>Usas crypto para pagar → generas una ganancia/pérdida patrimonial (diferencia entre valor de adquisición de esa crypto y el momento del pago)</li>
      </ul>
      <p>Es más sencillo convertir crypto a euros y luego pagar en euros.</p>

      <h3>¿Qué pasa si no declaro mis criptomonedas?</h3>
      <p>La AEAT tiene acuerdos con los principales exchanges (Binance, Coinbase, Kraken) para intercambio automático de información. Desde 2024, estas plataformas reportan a Hacienda:</p>
      <ul>
        <li>Saldos de usuarios españoles</li>
        <li>Volumen de operaciones</li>
        <li>Depósitos y retiradas</li>
      </ul>
      <p>No declarar se considera <strong>ocultación de ingresos</strong>. Sanciones: 50-150% del importe defraudado + intereses de demora.</p>

      <h3>¿Y si cobro en una wallet personal (no exchange)?</h3>
      <p>Siguen siendo ingresos declarables. El hecho de que no haya un intermediario (exchange) no exime de la obligación fiscal. Debes llevar tu propio registro y declarar en los modelos correspondientes.</p>

      <div class="tip-box">
        <h4>Checklist para declarar crypto correctamente</h4>
        <ol>
          <li>✓ Registra cada cobro en crypto con fecha y contravalor en €</li>
          <li>✓ Emite factura por el valor en euros del momento del cobro</li>
          <li>✓ Declara como ingreso en el modelo 130 trimestral</li>
          <li>✓ Si vendes crypto posteriormente, calcula ganancia/pérdida patrimonial</li>
          <li>✓ Usa herramientas como Koinly o CoinTracking para automatizar cálculos</li>
          <li>✓ Si superas 50.000€ en exchanges extranjeros, presenta modelo 721</li>
          <li>✓ Considera contratar gestoría especializada en crypto</li>
        </ol>
      </div>
    `,
    sources: [
      { title: 'Real Decreto-ley 7/2021 - Modelo 721', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-5495' }
    ]
  },
  // 15: Ley startups
  {
    id: '15',
    slug: 'ley-startups-freelancers-tipo-reducido-15-irpf-requisitos-2026',
    title: 'Ley de Startups para Freelancers: Tipo Reducido del 15% en IRPF',
    metaDescription: 'Guía completa sobre la Ley de Startups (Ley 28/2022): requisitos para acogerte al tipo impositivo reducido del 15% en IRPF, trámites y beneficios fiscales para freelancers tech.',
    category: 'impuestos',
    publishDate: '2026-01-09',
    readTime: 11,
    featured: true,
    excerpt: 'La Ley de Startups permite a nuevos autónomos tributar al 15% en IRPF durante 4 años. Descubre si cumples los requisitos, cómo solicitarlo y cuánto puedes ahorrar fiscalmente.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop',
    imageAlt: 'Startup y emprendimiento digital representando innovación',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#que-es" style="color: #3b82f6; text-decoration: none;">→ Qué es la Ley de Startups</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#requisitos" style="color: #3b82f6; text-decoration: none;">→ Requisitos para el 15%</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#comparativa" style="color: #3b82f6; text-decoration: none;">→ Comparativa fiscal</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#solicitar" style="color: #3b82f6; text-decoration: none;">→ Cómo solicitarlo</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#incompatibilidades" style="color: #3b82f6; text-decoration: none;">→ Incompatibilidades</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#casos" style="color: #3b82f6; text-decoration: none;">→ Casos prácticos</a></li>
        </ul>
      </div>

      <h2 id="que-es">¿Qué es la Ley de Startups y cómo beneficia a freelancers?</h2>
          <li>Requisitos para el tipo reducido del 15%</li>
          <li>Comparativa fiscal: Tipo general vs Ley Startups</li>
          <li>Cómo solicitar la aplicación del 15%</li>
          <li>Incompatibilidades y limitaciones</li>
          <li>Casos prácticos con ahorro real</li>
        </ul>
      </div>

      <h2>¿Qué es la Ley de Startups y cómo beneficia a freelancers?</h2>
      <p>La <strong>Ley 28/2022 de Fomento del Ecosistema de las Empresas Emergentes</strong> (Ley de Startups), aprobada en diciembre de 2022 y plenamente vigente en 2026, introdujo medidas fiscales muy favorables para emprendedores y autónomos que cumplan ciertos requisitos de innovación y nuevao creación de actividad.</p>

      <p>El incentivo más relevante para desarrolladores freelance es el <strong>tipo impositivo reducido del 15% en IRPF</strong> durante los primeros 4 años de actividad (en lugar del 15% solo el primer año que aplicaba la tarifa plana anterior). Este beneficio puede suponer un ahorro de <strong>hasta 10.000€ anuales</strong> para un freelancer con ingresos medios-altos.</p>

      <h2 id="requisitos">Requisitos para acogerse al tipo reducido del 15%</h2>

      <h3>Requisitos básicos obligatorios:</h3>
      <ul>
        <li><strong>Inicio de actividad:</strong> Ser un autónomo de nueva creación (alta inicial) o haber estado inactivo fiscalmente durante los últimos 5 años en la misma actividad</li>
        <li><strong>Actividad económica:</strong> Realizar una actividad económica innovadora, tecnológica o digital (desarrollo software, consultoría tech, IA, blockchain, etc.)</li>
        <li><strong>Estimación directa:</strong> Estar en régimen de estimación directa (simplificada o normal), no en módulos</li>
        <li><strong>Forma jurídica:</strong> Puede ser autónomo persona física o sociedad (SL)</li>
        <li><strong>No superar límites de facturación:</strong> Depende de la interpretación, pero generalmente se aplica al tramo de bases entre 12.000€ y 60.000€ de rendimiento neto</li>
      </ul>

      <h3>¿Qué se considera "actividad innovadora"?</h3>
      <p>Según la normativa, son actividades elegibles:</p>
      <ul>
        <li><strong>Desarrollo de software:</strong> Programación de aplicaciones, SaaS, plataformas web</li>
        <li><strong>Inteligencia artificial y machine learning:</strong> Modelos predictivos, chatbots, análisis de datos</li>
        <li><strong>Blockchain y Web3:</strong> Smart contracts, DeFi, NFT</li>
        <li><strong>Ciberseguridad:</strong> Pentesting, auditorías de seguridad, desarrollo de herramientas</li>
        <li><strong>Consultoría tecnológica:</strong> Transformación digital, arquitectura cloud, DevOps</li>
        <li><strong>Diseño UX/UI con enfoque tech:</strong> Especialmente si está vinculado a productos digitales innovadores</li>
      </ul>
      <p><strong>No aplica a:</strong> Actividades tradicionales no innovadoras (comercio, hostelería, servicios básicos sin componente tecnológico).</p>

      <h2 id="comparativa">Comparativa fiscal: Tipo general vs. Ley de Startups</h2>

      <h3>Ejemplo con 40.000€ de rendimiento neto anual:</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Tipo general (progresivo)</th><th>Ley Startups (15%)</th><th>Ahorro</th></tr>
        </thead>
        <tbody>
          <tr><td>Rendimiento neto</td><td>40.000€</td><td>40.000€</td><td>-</td></tr>
          <tr><td>Base imponible IRPF</td><td>40.000€</td><td>40.000€</td><td>-</td></tr>
          <tr><td>IRPF (tipo efectivo aprox.)</td><td>~8.500€ (21% medio)</td><td>6.000€ (15%)</td><td><strong>2.500€</strong></td></tr>
          <tr><td>Duración beneficio</td><td>-</td><td>4 años</td><td>-</td></tr>
          <tr><td><strong>Ahorro acumulado 4 años</strong></td><td>-</td><td>-</td><td><strong>~10.000€</strong></td></tr>
        </tbody>
      </table>

      <h3>¿Cómo funciona el tipo reducido del 15%?</h3>
      <p>El 15% <strong>no se aplica sobre toda tu base imponible del IRPF</strong>, sino específicamente sobre los <strong>rendimientos netos de actividad económica</strong>. Veamos cómo funciona:</p>

      <h4>Estructura de la base imponible del IRPF:</h4>
      <ul>
        <li><strong>Rendimientos del trabajo:</strong> Si tienes empleo por cuenta ajena además de autónomo</li>
        <li><strong>Rendimientos de actividad económica:</strong> Tu facturación como autónomo menos gastos → aquí aplica el 15%</li>
        <li><strong>Rendimientos del capital:</strong> Intereses, dividendos, alquileres</li>
        <li><strong>Ganancias patrimoniales:</strong> Venta de acciones, crypto, inmuebles</li>
      </ul>
      <p>El tipo del 15% <strong>sustituye el tipo progresivo general</strong> (que va del 19% al 47%) solo para la parte de rendimientos de actividad económica.</p>

      <h3>Caso práctico completo:</h3>
      <p><strong>Situación:</strong> Eres desarrollador freelance, te das de alta en 2026 y facturas 50.000€ anuales con 8.000€ de gastos.</p>

      <h4>Cálculo de IRPF con Ley de Startups:</h4>
      <ol>
        <li><strong>Rendimiento neto de actividad económica:</strong> 50.000€ - 8.000€ = 42.000€</li>
        <li><strong>Cuota de autónomos anual:</strong> ~5.000€ (media ponderada según tramos 2026)</li>
        <li><strong>Base imponible ajustada:</strong> 42.000€ - 5.000€ (la cuota es deducible) = 37.000€</li>
        <li><strong>IRPF al 15%:</strong> 37.000€ × 15% = 5.550€</li>
        <li><strong>Neto final:</strong> 50.000€ - 8.000€ (gastos) - 5.000€ (SS) - 5.550€ (IRPF) = <strong>31.450€ netos</strong></li>
      </ol>

      <h4>Comparación con tipo general (sin Ley de Startups):</h4>
      <ul>
        <li>IRPF tipo general sobre 37.000€: ~7.800€ (21% medio aproximado)</li>
        <li>Neto final con tipo general: 29.200€</li>
        <li><strong>Ahorro anual con Ley de Startups:</strong> 31.450€ - 29.200€ = <strong>2.250€</strong></li>
        <li><strong>Ahorro acumulado 4 años:</strong> 2.250€ × 4 = <strong>9.000€</strong></li>
      </ul>

      <p>Además, este ahorro fiscal te permite optimizar otros aspectos como los <a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">tramos de cotización</a> o decidir si en el futuro te conviene <a href="/blog/autonomo-vs-sociedad-limitada-cuando-crear-empresa-2026">crear una sociedad limitada</a>.</p>

      <div class="tip-box">
        <h4>¿Y después de los 4 años?</h4>
        <p>Transcurrido el periodo de 4 años con el tipo del 15%, vuelves al régimen general progresivo del IRPF. Sin embargo, para entonces ya habrás ahorrado una cantidad significativa que puedes haber reinvertido en tu actividad, formación o ahorro personal.</p>
      </div>

      <h2 id="solicitar">Trámites y procedimiento para acogerse</h2>

      <h3>1. Alta en Hacienda con mención específica</h3>
      <p>Al darte de alta como autónomo mediante el <strong>modelo 036/037</strong>, debes:</p>
      <ul>
        <li>Marcar la casilla correspondiente a "Acogimiento a incentivos fiscales de la Ley 28/2022"</li>
        <li>Declarar que tu actividad es de carácter innovador/tecnológico (epígrafe IAE 763 para programadores, 845 para consultoría informática)</li>
        <li><strong>No hay que solicitar autorización previa:</strong> Es un régimen de aplicación automática si cumples requisitos</li>
      </ul>

      <h3>2. Declaraciones trimestrales (Modelo 130)</h3>
      <p>En los pagos fraccionados trimestrales, <strong>aplicas directamente el 15%</strong> sobre el rendimiento neto en lugar del 20% estándar:</p>
      <ul>
        <li><strong>Sin Ley de Startups:</strong> Pagas el 20% trimestral de (Ingresos - Gastos)</li>
        <li><strong>Con Ley de Startups:</strong> Pagas el 15% trimestral de (Ingresos - Gastos)</li>
      </ul>

      <h3>3. Declaración de la renta anual</h3>
      <p>En la <strong>declaración de IRPF</strong>, el tipo del 15% se aplica automáticamente a los rendimientos de actividad económica si has marcado correctamente tu acogimiento en el modelo 036.</p>

      <h3>4. Requisitos de mantenimiento</h3>
      <p>Para conservar el beneficio durante los 4 años, debes:</p>
      <ul>
        <li><strong>Mantener la actividad económica activa:</strong> No puedes cesar y reactivar</li>
        <li><strong>Seguir en estimación directa:</strong> No cambiar a módulos</li>
        <li><strong>Cumplir obligaciones fiscales:</strong> Presentar modelos trimestrales y renta anual a tiempo</li>
        <li><strong>No superar umbrales:</strong> Aunque la ley no especifica límite claro de facturación, se interpreta que es razonable para "startup" (generalmente &lt; 1M€)</li>
      </ul>

      <h2 id="incompatibilidades">Otros beneficios de la Ley de Startups</h2>

      <h3>1. Diferimiento del pago de IRPF en stock options</h3>
      <p>Si recibes stock options (opciones sobre acciones) de una startup como parte de tu remuneración, puedes diferir el pago del IRPF hasta el momento de la venta de las acciones (en lugar de pagar al ejercer la opción). Límite: 50.000€/año.</p>

      <h3>2. Exención fiscal para inversores ángeles</h3>
      <p>Si en algún momento decides invertir en startups, puedes deducir el 50% de la inversión en la cuota del IRPF (hasta 100.000€/año). Aunque como freelancer esto es menos común, puede ser interesante si te conviertes en inversor.</p>

      <h3>3. Facilidades para constituir una SL</h3>
      <p>La ley también incluye medidas para facilitar la creación de sociedades limitadas (capital mínimo 1€, menos trámites). Si en algún momento decides crear una empresa, estas medidas siguen vigentes.</p>

      <h2 id="casos">Preguntas frecuentes</h2>

      <h3>¿Puedo acogerme si ya soy autónomo pero cambio de actividad?</h3>
      <p>Depende. Si inicias una <strong>actividad completamente nueva</strong> (distinto epígrafe IAE) y no la has desarrollado en los últimos 5 años, podrías argumentar que es un "inicio de actividad". Sin embargo, Hacienda puede interpretarlo de forma restrictiva. Recomendación: consultar con gestoría antes de hacer el cambio.</p>

      <h3>¿Es compatible con la tarifa plana de autónomos?</h3>
      <p>Sí, son beneficios independientes:</p>
      <ul>
        <li><strong>Tarifa plana de SS:</strong> Cuota reducida de Seguridad Social (80€/mes el primer año, 155€ el segundo, etc.)</li>
        <li><strong>Ley de Startups (15% IRPF):</strong> Tipo impositivo reducido en IRPF durante 4 años</li>
      </ul>
      <p>Puedes disfrutar de ambos simultáneamente, maximizando el ahorro fiscal y de cotización.</p>

      <h3>¿Qué pasa si Hacienda considera que mi actividad no es innovadora?</h3>
      <p>Si en una inspección Hacienda determina que tu actividad no cumple los requisitos, podría:</p>
      <ul>
        <li>Exigir el pago de la diferencia de IRPF (del 15% real al tipo que debiste pagar)</li>
        <li>Aplicar intereses de demora</li>
        <li>Potencialmente, sanciones si considera que hubo ocultación intencionada</li>
      </ul>
      <p><strong>Recomendación:</strong> Asegúrate de documentar que tu actividad tiene componente innovador/tecnológico. Si desarrollas software, ofreces servicios cloud, trabajas con IA, blockchain, etc., estás claramente dentro del ámbito de aplicación.</p>

      <h3>¿Puedo acogerme si tengo otra fuente de ingresos (empleo por cuenta ajena)?</h3>
      <p>Sí, el tipo del 15% aplica <strong>solo a los rendimientos de actividad económica</strong>. Si tienes empleo por cuenta ajena además de autónomo, ese salario tributará al tipo progresivo general, pero tus ingresos como freelance al 15%.</p>

      <h2>Simulador: ¿Cuánto ahorras con la Ley de Startups?</h2>

      <h3>Escenarios de ahorro según facturación:</h3>
      <table>
        <thead>
          <tr><th>Facturación anual</th><th>Rendimiento neto estimado</th><th>IRPF tipo general</th><th>IRPF Ley Startups (15%)</th><th>Ahorro anual</th><th>Ahorro 4 años</th></tr>
        </thead>
        <tbody>
          <tr><td>30.000€</td><td>24.000€</td><td>~3.600€</td><td>3.600€</td><td>0€*</td><td>0€</td></tr>
          <tr><td>40.000€</td><td>32.000€</td><td>~5.600€</td><td>4.800€</td><td>800€</td><td>3.200€</td></tr>
          <tr><td>50.000€</td><td>42.000€</td><td>~7.800€</td><td>6.300€</td><td>1.500€</td><td>6.000€</td></tr>
          <tr><td>60.000€</td><td>50.000€</td><td>~10.200€</td><td>7.500€</td><td>2.700€</td><td>10.800€</td></tr>
          <tr><td>80.000€</td><td>68.000€</td><td>~15.500€</td><td>10.200€</td><td>5.300€</td><td>21.200€</td></tr>
        </tbody>
      </table>
      <p><em>* A bajos ingresos, el tipo efectivo general puede ser cercano al 15%, reduciendo el beneficio.</em></p>

      <div class="tip-box">
        <h4>Checklist para aprovechar la Ley de Startups</h4>
        <ol>
          <li>✓ Confirma que tu actividad es tecnológica/innovadora (desarrollo, IA, blockchain, consultoría tech)</li>
          <li>✓ Date de alta en Hacienda marcando acogimiento a Ley 28/2022 en modelo 036</li>
          <li>✓ Elige régimen de estimación directa (no módulos)</li>
          <li>✓ Aplica el 15% en los pagos fraccionados trimestrales (modelo 130)</li>
          <li>✓ Documenta el carácter innovador de tu actividad por si hay inspección</li>
          <li>✓ Combina con tarifa plana de SS para maximizar ahorro</li>
          <li>✓ Disfruta del beneficio durante 4 años completos</li>
        </ol>
      </div>
    `,
    sources: [
      { title: 'Ley 28/2022 de fomento del ecosistema de startups', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-21739' }
    ]
  },
  
  // Blog 16: Pluriactividad
  {
    id: '16',
    slug: 'pluriactividad-autonomo-empleado-compatibilizar-2026',
    title: 'Pluriactividad: Cómo Ser Autónomo y Empleado al Mismo Tiempo en 2026',
    excerpt: 'Compatibiliza tu trabajo por cuenta ajena con proyectos freelance: cuotas, devoluciones Seguridad Social y estrategias para maximizar tus ingresos.',
    metaDescription: 'Guía completa de pluriactividad 2026: cómo ser autónomo y empleado simultáneamente, devolución de cuotas, bonificaciones y estrategia fiscal óptima.',
    category: 'seguridad-social',
    publishDate: '2026-01-18',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop',
    imageAlt: 'Persona trabajando con portátil y documentos, representando pluriactividad',
    readTime: 9,
    featured: false,
    sources: [
      { title: 'Nuevo sistema de cotización para autónomos – Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/FAQ?view=FAQs_detalle_tema&temaPregunta=Nuevo%20sistema%20de%20cotizaci%C3%B3n%20para%20aut%C3%B3nomos%202023' }
    ],
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#que-es" style="color: #3b82f6; text-decoration: none;">→ ¿Qué es la pluriactividad?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#como-funciona" style="color: #3b82f6; text-decoration: none;">→ Cómo funciona la cotización dual</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#devolucion" style="color: #3b82f6; text-decoration: none;">→ Devolución de cuotas exceso</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ventajas" style="color: #3b82f6; text-decoration: none;">→ Ventajas y desventajas</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#estrategia" style="color: #3b82f6; text-decoration: none;">→ Estrategia fiscal óptima</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#caso-practico" style="color: #3b82f6; text-decoration: none;">→ Caso práctico completo</a></li>
        </ul>
      </div>

      <h2 id="que-es">¿Qué es la pluriactividad? Definición legal 2026</h2>
      <p>La <strong>pluriactividad</strong> es la situación en la que una persona cotiza simultáneamente en <strong>dos regímenes diferentes de la Seguridad Social</strong>: Régimen General (como empleado por cuenta ajena) y Régimen Especial de Trabajadores Autónomos (RETA).</p>

      <p>En 2026, el <strong>38% de los desarrolladores freelance en España</strong> están en pluriactividad según datos de la Seguridad Social, ya que muchos combinan un empleo estable con proyectos personales o consultorías externas.</p>

      <p>Según el <strong>artículo 305 de la Ley General de la Seguridad Social</strong>, la pluriactividad implica:</p>
      <ul>
        <li><strong>Doble cotización:</strong> Pagas cuotas en ambos regímenes</li>
        <li><strong>Bases separadas:</strong> Cada régimen tiene su propia base de cotización</li>
        <li><strong>Derecho a devolución:</strong> Si superas límites anuales, puedes solicitar reembolso parcial</li>
        <li><strong>Protección completa:</strong> Acceso a prestaciones en ambos regímenes</li>
      </ul>

      <h2 id="como-funciona">Cómo funciona la cotización en pluriactividad</h2>

      <h3>Régimen General (empleo por cuenta ajena)</h3>
      <p>Tu empleador descuenta automáticamente de tu nómina la cotización a la Seguridad Social. Tú pagas aproximadamente el <strong>6,35%</strong> de tu salario bruto, y la empresa paga alrededor del <strong>30%</strong> adicional.</p>

      <p><strong>Ejemplo:</strong> Con salario mensual de 2.500€:</p>
      <ul>
        <li>Cotización trabajador: ~158€/mes → 1.896€/año</li>
        <li>Cotización empresa: ~750€/mes (no te afecta directamente)</li>
      </ul>

      <h3>RETA (autónomo freelance)</h3>
      <p>Desde 2023, los autónomos cotizan según sus <strong><a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">rendimientos netos reales</a></strong>. Si tus proyectos freelance generan 15.000€ netos anuales (~1.250€/mes), cotizarás aproximadamente <strong>310€/mes</strong> (tramo 4).</p>

      <table>
        <thead>
          <tr><th>Concepto</th><th>Régimen General</th><th>RETA</th><th>Total anual</th></tr>
        </thead>
        <tbody>
          <tr><td>Cotización mensual</td><td>158€ (automático)</td><td>310€ (manual)</td><td>5.616€</td></tr>
          <tr><td>Base cotización</td><td>2.500€</td><td>1.294€ (tramo 4)</td><td>-</td></tr>
        </tbody>
      </table>

      <h2 id="devolucion">Devolución de cuotas por exceso de cotización</h2>

      <p>Aquí viene la parte <strong>importante y poco conocida</strong>: si tus bases de cotización suman más de <strong>14.058,28€/mes en 2026</strong> (límite máximo), tienes derecho a solicitar la <strong>devolución del 50% del exceso cotizado</strong>.</p>

      <h3>¿Cuándo puedo solicitar devolución?</h3>
      <p>Solo si:</p>
      <ol>
        <li><strong>Base RG + Base RETA &gt; 14.058,28€/mes:</strong> Superas el tope máximo conjunto</li>
        <li><strong>Cotizaste al menos 210 días en cada régimen:</strong> Mínimo 7 meses en ambos</li>
        <li><strong>No superaste individualmente el máximo:</strong> Ninguna de las dos bases supera por sí sola el límite</li>
      </ol>

      <h3>Procedimiento de solicitud</h3>
      <p><strong>Plazo:</strong> Del 1 de enero al 30 de abril del año siguiente (ej: para 2026, solicitas entre enero-abril 2027).</p>

      <p><strong>Dónde:</strong> Sede electrónica de la Seguridad Social con certificado digital:</p>
      <ol>
        <li>Accede a <a href="https://sede.seg-social.gob.es/" target="_blank" rel="noopener">sede.seg-social.gob.es</a></li>
        <li>Busca "Devolución de ingresos indebidos por cotización en pluriactividad"</li>
        <li>Adjunta vida laboral de ambos regímenes</li>
        <li>Calcula el exceso con la herramienta oficial</li>
      </ol>

      <p><strong>Cantidad devuelta:</strong> 50% del exceso sobre el límite máximo. Ejemplo: Si cotizaste 1.000€ de exceso anual, te devuelven 500€.</p>

      <h2 id="ventajas">Ventajas y desventajas de la pluriactividad</h2>

      <h3>✅ Ventajas</h3>
      <ul>
        <li><strong>Seguridad financiera:</strong> Ingresos estables del empleo + ingresos extra de freelance</li>
        <li><strong>Protección social completa:</strong> Acceso a desempleo (por el empleo), pensión mejor (suma bases), IT en ambos regímenes</li>
        <li><strong>Diversificación profesional:</strong> Experiencia en empresa + proyectos propios</li>
        <li><strong>Red de seguridad:</strong> Si pierdes el empleo, ya tienes clientes freelance activos</li>
        <li><strong>Prueba sin riesgo:</strong> Puedes testar tu negocio freelance sin dejar el empleo</li>
      </ul>

      <h3>❌ Desventajas</h3>
      <ul>
        <li><strong>Doble cuota SS:</strong> Pagas en ambos regímenes (aunque hay devolución parcial)</li>
        <li><strong>Carga administrativa:</strong> Modelos trimestrales (130, 303), libros contables, facturas</li>
        <li><strong>Menos tiempo libre:</strong> Jornada completa + proyectos freelance por las tardes/fines de semana</li>
        <li><strong>Posible conflicto contractual:</strong> Revisa tu contrato laboral (cláusulas de exclusividad, no competencia)</li>
        <li><strong>Tramos IRPF más altos:</strong> Al sumar ambos ingresos, puedes entrar en tramos superiores (~30-37%)</li>
      </ul>

      <h2 id="estrategia">Estrategia fiscal óptima para pluriactividad</h2>

      <h3>1. Minimiza la base de autónomo al inicio</h3>
      <p>Si tus proyectos freelance generan ingresos modestos (ej: 500-1.000€/mes), cotiza en el <strong>tramo mínimo</strong> correspondiente a tus rendimientos reales. Desde 2026, con el sistema por ingresos reales, ya no puedes elegir base libremente, pero asegúrate de declarar correctamente tus <strong><a href="/blog/gastos-deducibles-autonomos-desarrolladores-2026-guia-completa">gastos deducibles</a></strong> para reducir el rendimiento neto.</p>

      <h3>2. Optimiza gastos deducibles</h3>
      <p>Como autónomo, puedes deducir:</p>
      <ul>
        <li>30% de suministros (luz, internet) si teletrabajas</li>
        <li>100% de hardware, software, formación</li>
        <li>Comidas con clientes (hasta 26,67€/día)</li>
        <li>Asesoría fiscal, gestoría</li>
      </ul>
      <p>Esto reduce tu rendimiento neto → cuota de autónomo más baja → cotización menor en RETA.</p>

      <h3>3. Planifica la declaración de renta</h3>
      <p>En la renta, tus ingresos de empleo y freelance se suman, aplicándose los tramos progresivos del IRPF. Estrategias:</p>
      <ul>
        <li><strong>Planes de pensiones:</strong> Reduce la base imponible (max 1.500€/año)</li>
        <li><strong>Deducciones autonómicas:</strong> Vivienda habitual, alquiler, maternidad según CCAA</li>
        <li><strong>Compensación bases negativas:</strong> Si un año freelance da pérdidas, compensa con empleo</li>
      </ul>

      <h3>4. Solicita siempre la devolución de cuotas</h3>
      <p>Aunque no superes el límite máximo, revisa cada año. Si cotizaste cerca del tope, puedes recuperar cientos de euros. No es automático, <strong>debes solicitarlo</strong>.</p>

      <h2 id="caso-practico">Caso práctico: Developer en pluriactividad 2026</h2>

      <h3>Perfil: María, Full Stack Developer</h3>
      <ul>
        <li><strong>Empleo:</strong> Empresa tecnológica, salario 35.000€ brutos anuales (~2.917€/mes)</li>
        <li><strong>Freelance:</strong> Proyectos web en fines de semana, facturación 20.000€/año</li>
        <li><strong>Gastos deducibles freelance:</strong> 5.000€ (software, hardware, suministros)</li>
        <li><strong>Rendimiento neto freelance:</strong> 15.000€/año (~1.250€/mes)</li>
      </ul>

      <h3>Cotizaciones 2026</h3>
      <p><strong>Régimen General:</strong></p>
      <ul>
        <li>Base: 2.917€/mes</li>
        <li>Cotización trabajador: ~185€/mes → 2.220€/año</li>
      </ul>

      <p><strong>RETA (Tramo 4: 1.166,70 - 1.300€/mes):</strong></p>
      <ul>
        <li>Base: 1.294€/mes</li>
        <li>Cuota: 310€/mes → 3.720€/año</li>
      </ul>

      <p><strong>Total cotización SS: 5.940€/año</strong></p>

      <h3>Análisis devolución pluriactividad</h3>
      <p>Base RG + Base RETA = 2.917€ + 1.294€ = <strong>4.211€/mes</strong></p>
      <p>Límite máximo: 14.058,28€/mes</p>
      <p><strong>Conclusión:</strong> María NO supera el límite, por lo que NO tiene derecho a devolución. Solo aplica en rentas muy altas.</p>

      <h3>IRPF 2026</h3>
      <p>Rendimientos totales: 35.000€ (empleo) + 15.000€ (freelance) = <strong>50.000€</strong></p>
      <p>Tramo IRPF aplicable: ~24-30% (escala estatal + autonómica)</p>
      <p>IRPF total estimado: ~9.500€ (tras deducciones estándar)</p>

      <h3>Resultado neto María</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Cantidad</th></tr>
        </thead>
        <tbody>
          <tr><td>Ingresos brutos totales</td><td>55.000€</td></tr>
          <tr><td>Gastos deducibles freelance</td><td>-5.000€</td></tr>
          <tr><td>Rendimientos declarados</td><td>50.000€</td></tr>
          <tr><td>Cotización SS total</td><td>-5.940€</td></tr>
          <tr><td>IRPF estimado</td><td>-9.500€</td></tr>
          <tr><td><strong>Neto anual</strong></td><td><strong>34.560€</strong></td></tr>
        </tbody>
      </table>

      <p><strong>María gana 34.560€ netos/año</strong>, conservando la seguridad de su empleo y desarrollando su marca personal freelance. En 2-3 años, si sus proyectos crecen, podrá plantearse <strong><a href="/blog/autonomo-vs-sociedad-limitada-cuando-crear-empresa-2026">crear una sociedad limitada</a></strong>.</p>

      <h2>¿Cuándo NO merece la pena la pluriactividad?</h2>
      <p>La pluriactividad tiene sentido si:</p>
      <ul>
        <li>Tus proyectos freelance generan al menos 500-800€/mes netos (sino la cuota de autónomo no compensa)</li>
        <li>Tu contrato laboral permite actividades externas (revisa cláusulas)</li>
        <li>Tienes tiempo y energía para ambas actividades sin burnout</li>
        <li>Tu objetivo es largo plazo: construir cartera de clientes, independencia futura</li>
      </ul>

      <p><strong>No merece la pena si:</strong></p>
      <ul>
        <li>Solo facturas esporádicamente (&lt; 3.000€/año) → Mejor no darte de alta</li>
        <li>Tu empleo tiene cláusula de exclusividad estricta → Riesgo de despido</li>
        <li>No tienes capacidad de gestión administrativa → Se acumulan modelos, libros, facturas</li>
      </ul>

      <h2>Errores comunes en pluriactividad</h2>
      <table>
        <thead>
          <tr><th>Error</th><th>Consecuencia</th><th>Solución</th></tr>
        </thead>
        <tbody>
          <tr><td>No solicitar devolución cuotas</td><td>Pérdida de 200-500€/año</td><td>Revisar cada abril si superas límites</td></tr>
          <tr><td>No optimizar gastos deducibles</td><td>Cuota RETA más alta</td><td>Deduce todo lo permitido legalmente</td></tr>
          <tr><td>Ignorar cláusula no competencia</td><td>Despido procedente</td><td>Revisa contrato antes de darte de alta</td></tr>
          <tr><td>No comunicar pluriactividad a SS</td><td>Problemas con prestaciones</td><td>Alta RETA automáticamente notifica</td></tr>
        </tbody>
      </table>
    `
  },

  // Blog 17: Bajas médicas autónomos
  {
    id: '17',
    slug: 'baja-medica-autonomos-incapacidad-temporal-cuanto-cobras-2026',
    title: 'Baja Médica para Autónomos: Cuánto Cobras y Cómo Solicitarla en 2026',
    excerpt: '¿Enfermo y autónomo? Descubre cuándo empieza la prestación, cuánto cobras según tu base de cotización y cómo solicitarla correctamente.',
    metaDescription: 'Guía completa IT autónomos 2026: prestación por incapacidad temporal, días de carencia, cálculo de la base reguladora y procedimiento paso a paso.',
    category: 'seguridad-social',
    publishDate: '2026-01-18',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=630&fit=crop',
    imageAlt: 'Autónomo enfermo trabajando desde casa con portátil y manta',
    readTime: 8,
    featured: false,
    sources: [
      {
        title: 'Prestación pago directo incapacidad temporal – Seguridad Social',
        url: 'https://prestaciones.seg-social.es/servicio/prestacion-pago-directo-incapacidad-temporal.html'
      }
    ],
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#que-es" style="color: #3b82f6; text-decoration: none;">→ ¿Qué es la IT para autónomos?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#requisitos" style="color: #3b82f6; text-decoration: none;">→ Requisitos y días de carencia</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#cuanto-cobras" style="color: #3b82f6; text-decoration: none;">→ Cuánto cobras según tu base</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#como-solicitarla" style="color: #3b82f6; text-decoration: none;">→ Cómo solicitarla paso a paso</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#cuota-durante" style="color: #3b82f6; text-decoration: none;">→ ¿Sigues pagando la cuota?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#caso-practico" style="color: #3b82f6; text-decoration: none;">→ Caso práctico completo</a></li>
        </ul>
      </div>

      <h2 id="que-es">¿Qué es la incapacidad temporal (IT) para autónomos?</h2>
      <p>La <strong>incapacidad temporal</strong> es la prestación económica que recibes si, estando dado de alta como autónomo, sufres una enfermedad o accidente que te impide trabajar temporalmente. Es el equivalente a la "baja médica" de los trabajadores por cuenta ajena.</p>

      <p>En 2026, según datos de la Seguridad Social, solo el <strong>24% de los autónomos</strong> solicita la IT cuando la necesita, principalmente por desconocimiento de los requisitos y temor a perder ingresos. Sin embargo, es un <strong>derecho que has pagado con tus cuotas</strong> y debe utilizarse cuando sea necesario.</p>

      <p><strong>Coberturas de la IT para autónomos:</strong></p>
      <ul>
        <li><strong>Contingencias comunes:</strong> Enfermedad no laboral (gripe, cirugía, depresión, etc.)</li>
        <li><strong>Contingencias profesionales:</strong> Accidente o enfermedad derivada del trabajo (opcional, requiere cobertura adicional)</li>
      </ul>

      <h2 id="requisitos">Requisitos y período de carencia</h2>

      <h3>Requisitos generales</h3>
      <ol>
        <li><strong>Estar dado de alta</strong> en el RETA en el momento de la baja</li>
        <li><strong>Estar al corriente de pago</strong> de las cuotas de autónomo</li>
        <li><strong>Cumplir el período de carencia:</strong> Tiempo cotizado antes de poder cobrar IT</li>
      </ol>

      <h3>Días de carencia según tipo de contingencia</h3>
      <table>
        <thead>
          <tr><th>Tipo de baja</th><th>Días de carencia</th><th>Cuándo empiezas a cobrar</th></tr>
        </thead>
        <tbody>
          <tr><td>Enfermedad común</td><td>180 días cotizados últimos 5 años</td><td>Día 4 de baja</td></tr>
          <tr><td>Accidente no laboral</td><td>Sin carencia</td><td>Día 4 de baja</td></tr>
          <tr><td>Accidente laboral*</td><td>Sin carencia</td><td>Día 2 de baja</td></tr>
          <tr><td>Enfermedad profesional*</td><td>Sin carencia</td><td>Día 2 de baja</td></tr>
          <tr><td>Hospitalización</td><td>Sin carencia</td><td>Día 1 de baja</td></tr>
        </tbody>
      </table>

      <p><em>*Contingencias profesionales solo si has contratado cobertura adicional (no obligatoria para autónomos).</em></p>

      <p><strong>Importante:</strong> Los primeros 3 días de baja por enfermedad común o accidente no laboral <strong>no se cobran</strong>. A partir del día 4, recibes la prestación.</p>

      <h2 id="cuanto-cobras">Cuánto cobras en la baja médica según tu base de cotización</h2>

      <p>La cantidad que recibes depende de tu <strong>base de cotización en el RETA</strong> y del tipo de contingencia. En 2026, las bases están determinadas por los <strong><a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">tramos de rendimientos netos</a></strong>.</p>

      <h3>Fórmula de cálculo</h3>
      <p><strong>Base reguladora diaria (BRD) = Base mensual / 30</strong></p>

      <p><strong>Prestación IT:</strong></p>
      <ul>
        <li><strong>Días 4-20:</strong> 60% de la BRD</li>
        <li><strong>Día 21 en adelante:</strong> 75% de la BRD</li>
      </ul>

      <h3>Ejemplos según tramos 2026</h3>
      <table>
        <thead>
          <tr><th>Tramo</th><th>Base mensual</th><th>BRD</th><th>IT días 4-20 (60%)</th><th>IT día 21+ (75%)</th></tr>
        </thead>
        <tbody>
          <tr><td>Tramo 1 (mín)</td><td>735,29€</td><td>24,51€</td><td>14,71€/día</td><td>18,38€/día</td></tr>
          <tr><td>Tramo 4</td><td>1.294€</td><td>43,13€</td><td>25,88€/día</td><td>32,35€/día</td></tr>
          <tr><td>Tramo 8</td><td>2.277€</td><td>75,90€</td><td>45,54€/día</td><td>56,93€/día</td></tr>
          <tr><td>Tramo 15 (máx)</td><td>4.720,50€</td><td>157,35€</td><td>94,41€/día</td><td>118,01€/día</td></tr>
        </tbody>
      </table>

      <h3>Ejemplo práctico: Developer en tramo 4</h3>
      <p>Base de cotización: 1.294€/mes (tramo 4, rendimiento neto ~1.250€/mes)</p>
      <ul>
        <li><strong>Días 1-3:</strong> 0€ (no se cobra)</li>
        <li><strong>Días 4-20:</strong> 25,88€/día × 17 días = 439,96€</li>
        <li><strong>Días 21-30:</strong> 32,35€/día × 10 días = 323,50€</li>
        <li><strong>Total 30 días de baja:</strong> 763,46€</li>
      </ul>

      <p><strong>Comparativa con tu cuota mensual:</strong> Si pagas 310€/mes de cuota en tramo 4, recibes 763,46€ por una baja de 30 días. Es decir, recuperas 2,5 veces tu cuota mensual.</p>

      <h2 id="como-solicitarla">Cómo solicitar la baja médica paso a paso</h2>

      <h3>Paso 1: Acude al médico</h3>
      <ul>
        <li>Visita tu médico de cabecera en la Seguridad Social</li>
        <li>Explica tus síntomas y situación laboral</li>
        <li>El médico evalúa si procede la baja médica</li>
      </ul>

      <h3>Paso 2: Obtén el parte de baja</h3>
      <p>El médico emite el <strong>parte médico de baja</strong> en el sistema informático. Este documento se envía automáticamente a:</p>
      <ul>
        <li>Seguridad Social (para tramitar la prestación)</li>
        <li>Tu mutua colaboradora (si tienes)</li>
        <li><strong>A ti no te dan papel físico</strong> (todo es digital desde 2022)</li>
      </ul>

      <h3>Paso 3: Consulta tu parte en ImportaSS</h3>
      <ol>
        <li>Accede a <a href="https://portal.seg-social.gob.es/wps/portal/importass/" target="_blank" rel="noopener">ImportaSS</a> con certificado digital o Cl@ve</li>
        <li>Sección "Incapacidad Temporal" → "Consultar partes"</li>
        <li>Verifica que aparece tu parte de baja</li>
      </ol>

      <h3>Paso 4: Confirmaciones médicas periódicas</h3>
      <p>Cada 7-15 días (según duración prevista), debes acudir al médico para el <strong>parte de confirmación</strong>. Si no acudes, pueden suspender la prestación.</p>

      <h3>Paso 5: Parte de alta médica</h3>
      <p>Cuando el médico considere que estás recuperado, emite el <strong>parte de alta</strong>. Desde ese día, dejas de cobrar la IT y vuelves a trabajar.</p>

      <h2 id="cuota-durante">¿Sigues pagando la cuota de autónomo durante la baja?</h2>
      <p><strong>SÍ, debes seguir pagando tu cuota mensual de autónomo</strong> durante toda la baja médica. La IT no te exime de cotizar. Sin embargo:</p>

      <ul>
        <li>La cuota se deduce en tu declaración de IRPF como gasto deducible</li>
        <li>Si la baja es muy larga (&gt;12 meses), puedes pedir baja temporal en el RETA, pero pierdes protección</li>
        <li>La prestación IT que recibes suele ser superior a la cuota mensual (compensación)</li>
      </ul>

      <p><strong>Cálculo de coste neto:</strong></p>
      <p>Ejemplo tramo 4:</p>
      <ul>
        <li>Cuota mensual: 310€</li>
        <li>IT recibida (30 días): 763,46€</li>
        <li><strong>Diferencia positiva: +453,46€</strong></li>
      </ul>

      <h2 id="caso-practico">Caso práctico: Developer con gripe severa</h2>

      <h3>Perfil: Carlos, Freelance Full Stack</h3>
      <ul>
        <li><strong>Base cotización:</strong> Tramo 8 (2.277€/mes, rendimiento neto ~2.700€/mes)</li>
        <li><strong>Cuota mensual:</strong> 590€</li>
        <li><strong>Situación:</strong> Gripe con complicaciones, 15 días de baja</li>
      </ul>

      <h3>Cronología</h3>
      <p><strong>Día 1 (lunes):</strong> Visita médico cabecera, parte de baja emitido</p>
      <p><strong>Días 1-3:</strong> No cobra prestación (carencia)</p>
      <p><strong>Días 4-15:</strong> Cobra IT</p>
      <ul>
        <li>BRD: 2.277€ / 30 = 75,90€/día</li>
        <li>IT (60%): 45,54€/día</li>
        <li>Total 12 días: 45,54€ × 12 = <strong>546,48€</strong></li>
      </ul>

      <p><strong>Día 7:</strong> Confirmación médica (parte online)</p>
      <p><strong>Día 15:</strong> Alta médica, vuelve a trabajar</p>

      <h3>Balance económico</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Cantidad</th></tr>
        </thead>
        <tbody>
          <tr><td>Cuota RETA pagada (mes completo)</td><td>-590€</td></tr>
          <tr><td>IT recibida (12 días cotizables)</td><td>+546,48€</td></tr>
          <tr><td>Ingresos perdidos (15 días sin trabajar)</td><td>~-1.350€ (estimado)</td></tr>
          <tr><td><strong>Coste neto baja</strong></td><td><strong>-1.393,52€</strong></td></tr>
        </tbody>
      </table>

      <p><strong>Conclusión:</strong> Carlos recupera casi todo el coste de la cuota mensual gracias a la IT, pero pierde los ingresos de esos 15 días de trabajo. Aun así, la prestación amortigua el golpe económico.</p>

      <h2>Errores comunes con la IT</h2>
      <table>
        <thead>
          <tr><th>Error</th><th>Consecuencia</th><th>Solución</th></tr>
        </thead>
        <tbody>
          <tr><td>No acudir a confirmaciones</td><td>Suspensión prestación</td><td>Agenda todas las citas médicas</td></tr>
          <tr><td>Trabajar durante la baja</td><td>Pérdida prestación + sanción</td><td>Respeta la baja estrictamente</td></tr>
          <tr><td>No tener 180 días cotizados</td><td>No cobras IT común</td><td>Verifica tu vida laboral antes</td></tr>
          <tr><td>Estar al descubierto en cuotas</td><td>Deniegan prestación</td><td>Paga cuotas atrasadas antes de baja</td></tr>
        </tbody>
      </table>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Puedo facturar durante la baja?</h3>
      <p><strong>NO.</strong> Si estás de baja por IT, no puedes realizar ninguna actividad profesional. Si Seguridad Social detecta que facturaste durante la baja, puede reclamarte la prestación íntegra más sanciones.</p>

      <h3>¿Qué pasa si la baja es muy larga (&gt;365 días)?</h3>
      <p>Si la IT supera 12 meses, el INSS puede iniciar un expediente de <strong>incapacidad permanente</strong>. Si te la conceden, pasarás a cobrar una pensión mensual en lugar de la IT temporal.</p>

      <h3>¿Cómo afecta la IT a mi declaración de renta?</h3>
      <p>La prestación por IT tributa como <strong>rendimiento del trabajo</strong> en el IRPF. En tu renta anual aparecerá:</p>
      <ul>
        <li>Rendimientos actividad económica: Tus ingresos freelance facturados</li>
        <li>Rendimientos trabajo: Prestación IT recibida</li>
      </ul>

      <h2>Cobertura opcional: Contingencias profesionales</h2>
      <p>Por defecto, los autónomos solo tienen cobertura obligatoria para contingencias comunes. Sin embargo, puedes contratar voluntariamente la cobertura de <strong>contingencias profesionales</strong> (accidentes y enfermedades laborales).</p>

      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Sin período de carencia</li>
        <li>Cobras desde el día 2 de baja</li>
        <li>Mejor protección en caso de accidente trabajando</li>
      </ul>

      <p><strong>Coste adicional:</strong> ~20-30€/mes extra según tu base de cotización</p>

      <p><strong>¿Merece la pena?</strong> Depende de tu actividad. Como desarrollador, el riesgo de accidente laboral es bajo (no trabajas en altura, maquinaria, etc.). Sin embargo, si trabajas muchas horas al día o tienes historial de lesiones (túnel carpiano, problemas posturales), puede ser útil.</p>
    `
  },
  // 18. Nomada digital
  {
    id: '18',
    slug: 'nomada-digital-autonomo-espana-fiscalidad-residencia-fiscal-2026',
    title: 'Nómada Digital como Autónomo en España: Fiscalidad y Residencia Fiscal 2026',
    metaDescription: 'Guía completa sobre fiscalidad para nómadas digitales autónomos españoles: residencia fiscal, regla 183 días, obligaciones tributarias y cómo tributar viviendo en el extranjero.',
    category: 'internacional',
    publishDate: '2026-01-17',
    readTime: 9,
    featured: false,
    excerpt: 'Si eres autónomo y trabajas desde el extranjero como nómada digital, tu residencia fiscal determina dónde pagas impuestos. Descubre cómo funciona la regla de los 183 días y qué obligaciones tienes con Hacienda.',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&auto=format&fit=crop',
    imageAlt: 'Mapa del mundo con iconos de ubicación y conexiones globales',
    sources: [],
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#residencia-fiscal" style="color: #3b82f6; text-decoration: none;">→ Qué es la residencia fiscal y por qué importa</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#regla-183-dias" style="color: #3b82f6; text-decoration: none;">→ Regla de los 183 días: Cómo se calcula</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#obligaciones-hacienda" style="color: #3b82f6; text-decoration: none;">→ Obligaciones con Hacienda española</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#convenios-doble-imposicion" style="color: #3b82f6; text-decoration: none;">→ Convenios de doble imposición</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#escenarios-practicos" style="color: #3b82f6; text-decoration: none;">→ Escenarios prácticos según destinos</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#errores-comunes" style="color: #3b82f6; text-decoration: none;">→ Errores comunes y sanciones</a></li>
        </ul>
      </div>

      <h2 id="residencia-fiscal">¿Qué es la residencia fiscal y por qué importa?</h2>
      
      <p>Como autónomo español que trabaja desde el extranjero, tu <strong>residencia fiscal</strong> determina en qué país debes pagar impuestos (IRPF, IVA, cotizaciones). Muchos nómadas digitales creen erróneamente que pueden dejar de tributar en España simplemente viajando, pero Hacienda tiene reglas muy claras al respecto.</p>

      <p><strong>Eres residente fiscal en España si cumples al menos uno de estos criterios:</strong></p>
      <ul>
        <li><strong>Permanencia:</strong> Pasas más de 183 días al año en territorio español (la famosa "regla de los 183 días")</li>
        <li><strong>Centro de intereses económicos:</strong> La mayor parte de tus ingresos (directos o indirectos) provienen de España</li>
        <li><strong>Residencia familiar:</strong> Tu cónyuge e hijos menores residen habitualmente en España</li>
      </ul>

      <p><strong>¿Qué implica ser residente fiscal español?</strong></p>
      <ul>
        <li>Debes tributar por tu <strong>renta mundial</strong> en España (todos tus ingresos, vengan de donde vengan)</li>
        <li>Obligación de presentar declaración de IRPF, modelos trimestrales (130, 303), y seguir cotizando al RETA</li>
        <li>Puedes deducir impuestos pagados en otros países (gracias a convenios de doble imposición)</li>
      </ul>

      <h2 id="regla-183-dias">Regla de los 183 días: Cómo se calcula correctamente</h2>

      <h3>¿Cómo cuenta Hacienda los días?</h3>
      <p>La AEAT usa un criterio estricto para calcular los 183 días:</p>

      <table>
        <thead>
          <tr><th>Situación</th><th>¿Cuenta como día en España?</th></tr>
        </thead>
        <tbody>
          <tr><td>Día completo en España (00:00 - 23:59)</td><td><strong>SÍ</strong></td></tr>
          <tr><td>Vuelo internacional (sales de España por la mañana)</td><td><strong>SÍ</strong> (día completo)</td></tr>
          <tr><td>Vuelo internacional (llegas a España por la noche)</td><td><strong>SÍ</strong> (día completo)</td></tr>
          <tr><td>Ausencias esporádicas (conferencias, vacaciones cortas)</td><td><strong>SÍ</strong> (presunción de residencia)</td></tr>
          <tr><td>Días en Canarias, Baleares, Ceuta, Melilla</td><td><strong>SÍ</strong> (territorio español)</td></tr>
        </tbody>
      </table>

      <p><strong>Importante:</strong> Hacienda presume que resides en España salvo que demuestres lo contrario. La <strong>carga de la prueba</strong> recae sobre ti. Necesitas evidencias sólidas:</p>
      <ul>
        <li>Sellos de pasaporte / registros de entrada-salida (sistema VES de inmigración)</li>
        <li>Facturas de alojamiento en otros países (Airbnb, hoteles)</li>
        <li>Extractos bancarios con transacciones en el extranjero</li>
        <li>Certificados de residencia fiscal de otros países</li>
        <li>Contratos de alquiler fuera de España</li>
      </ul>

      <h3>Caso práctico: Laura, desarrolladora nómada</h3>
      <p><strong>Situación:</strong> Laura es freelance y viaja constantemente. En 2026 estuvo:</p>
      <ul>
        <li>Enero-Febrero: 60 días en Barcelona</li>
        <li>Marzo-Junio: 120 días en Bali (Indonesia)</li>
        <li>Julio-Agosto: 62 días en Barcelona</li>
        <li>Septiembre-Diciembre: 123 días en Lisboa (Portugal)</li>
      </ul>

      <p><strong>Total días en España:</strong> 60 + 62 = <strong>122 días</strong></p>
      <p><strong>Resultado:</strong> Laura NO es residente fiscal en España por permanencia. Sin embargo, debe revisar:</p>
      <ul>
        <li>¿Sus principales clientes son españoles? (centro de intereses económicos)</li>
        <li>¿Tiene pareja/hijos en España? (residencia familiar)</li>
      </ul>
      <p>Si cualquiera de estos criterios se cumple, <strong>seguiría siendo residente fiscal española</strong> aunque pase menos de 183 días.</p>

      <h2 id="obligaciones-hacienda">Obligaciones con Hacienda española según tu situación</h2>

      <h3>Escenario 1: Sigues siendo residente fiscal español (más de 183 días o centro de intereses)</h3>
      <p><strong>Obligaciones completas:</strong></p>
      <ul>
        <li>Alta en RETA y <a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">cotización mensual</a> (cuota mínima ~230-300€/mes según tramo)</li>
        <li>Modelo 130 (pago fraccionado IRPF) cada trimestre</li>
        <li>Modelo 303 (IVA) cada trimestre si facturas a clientes españoles</li>
        <li>Declaración de la Renta anual (modelo 100)</li>
        <li>Modelo 720 si tienes bienes en el extranjero >50.000€ (cuentas bancarias, criptos, etc.)</li>
      </ul>

      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Acceso al sistema sanitario español</li>
        <li>Cotizas para tu futura pensión</li>
        <li>Puedes deducir gastos relacionados con tu actividad (equipamiento, viajes de trabajo, formación)</li>
      </ul>

      <h3>Escenario 2: Dejas de ser residente fiscal español</h3>
      <p><strong>Pasos obligatorios:</strong></p>
      <ol>
        <li><strong>Baja en el RETA:</strong> Presentar baja censal (modelo 036/037) y comunicar cese de actividad</li>
        <li><strong>Certificado de no residencia:</strong> Comunicar cambio de residencia fiscal a Hacienda</li>
        <li><strong>Última declaración de IRPF:</strong> Declarar como no residente desde la fecha de salida</li>
        <li><strong>Obtener residencia fiscal en otro país:</strong> Algunos países exigen esto para evitar la "residencia fiscal en ningún sitio"</li>
      </ol>

      <p><strong>Consecuencias:</strong></p>
      <ul>
        <li>Ya no cotizas al sistema español (no acumulas pensión)</li>
        <li>Pierdes acceso a sanidad pública española (necesitarás seguro privado internacional)</li>
        <li>Si facturas a clientes españoles, podrías tener que pagar retenciones del 24% (no residentes)</li>
        <li>Debes cumplir con las obligaciones fiscales del país donde residas fiscalmente</li>
      </ul>

      <h2 id="convenios-doble-imposicion">Convenios de doble imposición: Cómo evitar pagar dos veces</h2>

      <p>España tiene <strong>convenios para evitar la doble imposición (CDI)</strong> con más de 90 países. Estos tratados determinan:</p>
      <ul>
        <li>Qué país tiene derecho a gravar tus rentas</li>
        <li>Cómo deducir impuestos pagados en un país de los debidos en otro</li>
      </ul>

      <h3>Países populares para nómadas y su tratamiento fiscal:</h3>

      <table>
        <thead>
          <tr><th>País</th><th>¿CDI con España?</th><th>Observaciones</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Portugal</strong></td>
            <td>SÍ</td>
            <td>Régimen NHR (Non-Habitual Resident) permite 0% IRPF durante 10 años para freelancers extranjeros</td>
          </tr>
          <tr>
            <td><strong>Países Bajos</strong></td>
            <td>SÍ</td>
            <td>Régimen 30% ruling para extranjeros cualificados (30% ingresos exentos)</td>
          </tr>
          <tr>
            <td><strong>Tailandia</strong></td>
            <td>SÍ</td>
            <td>No grava rentas de servicios prestados desde el extranjero si no se transfieren a Tailandia el mismo año fiscal</td>
          </tr>
          <tr>
            <td><strong>Indonesia (Bali)</strong></td>
            <td>SÍ</td>
            <td>Residencia fiscal desde 183 días. Gravamen ~30% pero muchos nómadas no se registran (zona gris)</td>
          </tr>
          <tr>
            <td><strong>México</strong></td>
            <td>SÍ</td>
            <td>Residencia fiscal desde 183 días. Régimen simplificado para freelancers (RIF) con tipos reducidos</td>
          </tr>
          <tr>
            <td><strong>Georgia</strong></td>
            <td>SÍ</td>
            <td>Régimen "virtual zone person" con solo 1% impuesto para IT freelancers</td>
          </tr>
          <tr>
            <td><strong>Emiratos Árabes</strong></td>
            <td>SÍ</td>
            <td>0% IRPF pero coste de vida alto. Visas de nómada digital disponibles</td>
          </tr>
        </tbody>
      </table>

      <h2 id="escenarios-practicos">Escenarios prácticos: ¿Dónde tributo?</h2>

      <h3>Caso A: Nómada "perpetuo" (menos de 183 días en todos los países)</h3>
      <p><strong>Perfil:</strong> Viajas constantemente, nunca pasas más de 3 meses en ningún sitio.</p>
      <p><strong>Riesgo fiscal:</strong> Si España sigue siendo tu centro de intereses económicos (mayoría de clientes españoles, cuenta bancaria española principal), Hacienda puede considerarte residente fiscal aunque no estés físicamente.</p>
      <p><strong>Solución recomendada:</strong> Establecer residencia fiscal clara en algún país (Portugal NHR, Georgia, Estonia e-Residency) para evitar conflictos.</p>

      <h3>Caso B: Bases en varios países (3-4 meses en cada sitio)</h3>
      <p><strong>Perfil:</strong> 4 meses en Barcelona, 4 en Lisboa, 4 en México DF.</p>
      <p><strong>¿Dónde tributo?</strong> Depende de dónde estableces "vínculos principales":</p>
      <ul>
        <li>Si tu vivienda habitual está en Portugal → Probablemente residente fiscal portugués</li>
        <li>Si tu familia vive en España → Presunción de residencia española</li>
        <li>Si la mayor parte de tus clientes son mexicanos → Centro de intereses en México</li>
      </ul>

      <h3>Caso C: Trabajas para empresa extranjera desde España</h3>
      <p><strong>Perfil:</strong> Eres desarrollador remoto para empresa USA, vives en Madrid 365 días/año.</p>
      <p><strong>Resultado:</strong> Residente fiscal español. Debes:</p>
      <ul>
        <li>Declarar esos ingresos en tu IRPF español (tributación por renta mundial)</li>
        <li>Posiblemente darte de alta como autónomo o constituir SL para facturar legalmente a la empresa USA</li>
        <li>La empresa USA NO retendrá impuestos si no eres residente USA (gracias al CDI)</li>
      </ul>

      <h2 id="errores-comunes">Errores comunes que pueden costarte caro</h2>

      <table>
        <thead>
          <tr><th>Error</th><th>Consecuencia</th><th>Sanción aprox.</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>No presentar modelo 720 (bienes >50k€ en extranjero)</td>
            <td>Multa mínima 10.000€ por cada dato omitido</td>
            <td><strong>10.000-100.000€</strong></td>
          </tr>
          <tr>
            <td>Darte de baja en RETA pero seguir siendo residente fiscal</td>
            <td>Cotizaciones impagadas + recargos + pérdida de cobertura sanitaria</td>
            <td><strong>20% recargo + intereses</strong></td>
          </tr>
          <tr>
            <td>No declarar ingresos obtenidos en el extranjero</td>
            <td>Delito contra Hacienda si supera 120.000€ (pena de prisión)</td>
            <td><strong>50-150% de la cuota defraudada</strong></td>
          </tr>
          <tr>
            <td>Facturar sin IVA a clientes españoles estando en el extranjero</td>
            <td>IVA impagado + sanciones por facturación incorrecta</td>
            <td><strong>21% IVA + 50-150% sanción</strong></td>
          </tr>
          <tr>
            <td>No comunicar cambio de residencia fiscal</td>
            <td>Hacienda presume residencia española y reclama impuestos</td>
            <td><strong>Todo el IRPF + recargos</strong></td>
          </tr>
        </tbody>
      </table>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1.5rem 0; border-radius: 0.5rem;">
        <p style="margin: 0; font-weight: 600; color: #92400e;">⚠️ Advertencia importante</p>
        <p style="margin: 0.5rem 0 0 0; color: #92400e;">La fiscalidad internacional es compleja y cada caso es único. Si vas a pasar largos periodos fuera de España, consulta con un asesor fiscal especializado en movilidad internacional ANTES de moverte. Los errores pueden costar decenas de miles de euros en sanciones.</p>
      </div>

      <h3>Checklist antes de convertirte en nómada digital:</h3>
      <ul>
        <li>✓ Calcula cuántos días exactos pasarás en España este año</li>
        <li>✓ Identifica dónde está tu "centro de intereses económicos" (¿de dónde vienen tus ingresos?)</li>
        <li>✓ Investiga convenios de doble imposición con los países donde vivirás</li>
        <li>✓ Si dejas de ser residente fiscal español: comunícalo oficialmente y obtén certificado en tu nuevo país</li>
        <li>✓ Guarda pruebas de dónde estás (sellos pasaporte, facturas, fotos con metadatos de ubicación)</li>
        <li>✓ Contrata seguro médico internacional si pierdes acceso a sanidad española</li>
        <li>✓ Consulta asesor fiscal especializado en nomadismo digital</li>
      </ul>
    `
  },
  // 19: paro autonomos
  {
    id: '19',
    slug: 'cese-actividad-paro-autonomos-prestacion-requisitos-2026',
    title: 'Cese de Actividad: El Paro para Autónomos - Requisitos y Cuantías 2026',
    metaDescription: 'Guía completa sobre la prestación por cese de actividad para autónomos en 2026: requisitos, cuánto cobras, cómo solicitarla y errores comunes a evitar.',
    category: 'cotizacion',
    publishDate: '2026-01-17',
    readTime: 8,
    featured: false,
    excerpt: 'Los autónomos también tienen derecho a una prestación similar al paro. Descubre si cumples los requisitos, cuánto cobrarías y cómo solicitar la prestación por cese de actividad.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Cierre de oficina representado por una persiana metálica bajada',
    sources: [
      {
        title: 'Guía sobre la prestación por cese de actividad - Seguridad Social',
        url: 'https://www.seg-social.es/wps/portal/wss/internet/Autonomos/Prestaciones/41108'
      }
    ],
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#que-es" style="color: #3b82f6; text-decoration: none;">→ Qué es y quién tiene derecho</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#requisitos" style="color: #3b82f6; text-decoration: none;">→ Requisitos para cobrar la prestación</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#cuanto-cobras" style="color: #3b82f6; text-decoration: none;">→ Cuánto cobras y durante cuánto tiempo</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#como-solicitarla" style="color: #3b82f6; text-decoration: none;">→ Cómo solicitar el cese de actividad</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#compatibilidades" style="color: #3b82f6; text-decoration: none;">→ Compatibilidades y obligaciones</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#errores-comunes" style="color: #3b82f6; text-decoration: none;">→ Errores comunes a evitar</a></li>
        </ul>
      </div>

      <h2 id="que-es">¿Qué es la prestación por cese de actividad?</h2>
      
      <p>La <strong>prestación por cese de actividad</strong> es el equivalente al paro para autónomos. Desde 2010, los trabajadores por cuenta propia que cotizan al RETA tienen derecho a una protección económica cuando cesan involuntariamente su actividad por motivos económicos, técnicos, productivos o de fuerza mayor.</p>

      <p><strong>Importante:</strong> No es un "paro voluntario". No puedes simplemente decidir dejar de trabajar y cobrar la prestación. Debe existir una causa justificada que demuestre que el cese es involuntario y te impide continuar con tu actividad.</p>

      <h3>¿Quién tiene derecho?</h3>
      <p>Todos los autónomos dados de alta en el RETA que coticen por <strong>cese de actividad</strong>. Esta cotización es:</p>
      <ul>
        <li><strong>Obligatoria</strong> desde noviembre 2010 para nuevas altas</li>
        <li><strong>Voluntaria</strong> para quienes ya eran autónomos antes de esa fecha</li>
        <li><strong>Coste adicional:</strong> 0,7% sobre la base de cotización (~2-5€/mes según tu base)</li>
      </ul>

      <p>Si no tienes contratada esta cobertura, <strong>no tendrás derecho a la prestación</strong> aunque cumplas todos los demás requisitos.</p>

      <h2 id="requisitos">Requisitos para cobrar la prestación por cese de actividad</h2>

      <p>Para acceder a la prestación debes cumplir <strong>todos</strong> estos requisitos simultáneamente:</p>

      <table>
        <thead>
          <tr><th>Requisito</th><th>Detalles</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Cotización mínima</strong></td>
            <td>Haber cotizado al menos <strong>12 meses</strong> por cese de actividad en los 24 meses anteriores al cese</td>
          </tr>
          <tr>
            <td><strong>2. Cese involuntario</strong></td>
            <td>El cese debe ser por <strong>motivos económicos, técnicos, productivos o fuerza mayor</strong>. Debes demostrarlo</td>
          </tr>
          <tr>
            <td><strong>3. Pérdidas económicas</strong></td>
            <td>Rendimientos netos inferiores al <strong>SMI</strong> (1.134€/mes en 2026) durante al menos 1 trimestre completo</td>
          </tr>
          <tr>
            <td><strong>4. Alta y al corriente</strong></td>
            <td>Estar dado de alta en el RETA y al corriente de pago de cotizaciones</td>
          </tr>
          <tr>
            <td><strong>5. Solicitud en plazo</strong></td>
            <td>Solicitar la prestación en el <strong>mes siguiente</strong> al cese de actividad (baja en RETA)</td>
          </tr>
          <tr>
            <td><strong>6. No haber rechazado trabajos</strong></td>
            <td>No haber rechazado oferta de trabajo adecuada ni haberte negado a participar en acciones de formación</td>
          </tr>
          <tr>
            <td><strong>7. Inscripción como demandante</strong></td>
            <td>Suscribir compromiso de actividad e inscribirte como demandante de empleo</td>
          </tr>
        </tbody>
      </table>

      <h3>Causas válidas de cese involuntario</h3>
      <p>La Seguridad Social reconoce estas situaciones como cese involuntario:</p>

      <ul>
        <li><strong>Pérdida de clientes principales:</strong> Pérdida de al menos el 75% de ingresos por cese de relaciones con clientes principales (debes demostrarlo con facturas)</li>
        <li><strong>Fuerza mayor:</strong> Incendio, inundación, catástrofe natural que destruya tu negocio o local</li>
        <li><strong>Pérdidas económicas sostenidas:</strong> Rendimientos netos por debajo del SMI durante un trimestre completo</li>
        <li><strong>Violencia de género:</strong> Si eres víctima de violencia de género y el cese te protege</li>
        <li><strong>Divorcio/separación:</strong> Si trabajabas en negocio familiar y te ves obligado a cesar por divorcio</li>
      </ul>

      <p><strong>No son causas válidas:</strong></p>
      <ul>
        <li>Decidir cambiar de actividad o profesión</li>
        <li>Querer emprender otro negocio</li>
        <li>Cansancio o falta de motivación</li>
        <li>Emigrar a otro país voluntariamente</li>
      </ul>

      <h2 id="cuanto-cobras">¿Cuánto cobras y durante cuánto tiempo?</h2>

      <h3>Cuantía de la prestación</h3>
      <p>La cantidad mensual que recibes es el <strong>70% de tu base reguladora</strong>, con límites máximos y mínimos:</p>

      <table>
        <thead>
          <tr><th>Situación</th><th>Cuantía</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sin hijos a cargo</strong></td>
            <td>70% base reguladora (mín: 794€/mes, máx: 1.587€/mes en 2026)</td>
          </tr>
          <tr>
            <td><strong>Con 1 hijo a cargo</strong></td>
            <td>80% base reguladora (mín: 794€/mes, máx: 1.587€/mes)</td>
          </tr>
          <tr>
            <td><strong>Con 2+ hijos a cargo</strong></td>
            <td>80% base reguladora (mín: 794€/mes, máx: 1.587€/mes)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Base reguladora:</strong> Promedio de tus bases de cotización durante los 12 meses anteriores al cese.</p>

      <h3>Duración de la prestación</h3>
      <p>El tiempo que cobras depende de cuánto hayas cotizado por cese de actividad:</p>

      <table>
        <thead>
          <tr><th>Meses cotizados</th><th>Duración prestación</th></tr>
        </thead>
        <tbody>
          <tr><td>12-17 meses</td><td><strong>4 meses</strong></td></tr>
          <tr><td>18-23 meses</td><td><strong>6 meses</strong></td></tr>
          <tr><td>24-29 meses</td><td><strong>8 meses</strong></td></tr>
          <tr><td>30-35 meses</td><td><strong>10 meses</strong></td></tr>
          <tr><td>36-41 meses</td><td><strong>12 meses</strong></td></tr>
          <tr><td>42-47 meses</td><td><strong>16 meses</strong></td></tr>
          <tr><td>48+ meses</td><td><strong>24 meses (máximo)</strong></td></tr>
        </tbody>
      </table>

      <h3>Caso práctico: Carlos, desarrollador freelance</h3>
      <p><strong>Situación:</strong></p>
      <ul>
        <li>Carlos lleva 5 años como autónomo cotizando por cese de actividad</li>
        <li>Base de cotización: 1.700€/mes (tramo 8)</li>
        <li>Pierde su cliente principal que representaba el 80% de sus ingresos</li>
        <li>Sin hijos a cargo</li>
      </ul>

      <p><strong>Cálculo:</strong></p>
      <ul>
        <li>Base reguladora: 1.700€ (promedio últimos 12 meses)</li>
        <li>Cuantía: 70% × 1.700€ = <strong>1.190€/mes</strong></li>
        <li>Duración: 48+ meses cotizados = <strong>24 meses</strong></li>
        <li><strong>Total a percibir:</strong> 1.190€/mes durante 24 meses = 28.560€</li>
      </ul>

      <p>Durante estos 24 meses, Carlos puede buscar nuevos clientes, reorientar su actividad o incluso formarse en nuevas tecnologías mientras mantiene un ingreso.</p>

      <h2 id="como-solicitarla">Cómo solicitar la prestación por cese de actividad</h2>

      <h3>Paso 1: Darte de baja en el RETA</h3>
      <p>Presenta el <strong>modelo 036/037</strong> en Hacienda para cesar la actividad. Esto genera la baja automática en el RETA.</p>

      <h3>Paso 2: Reunir documentación</h3>
      <p>Necesitarás:</p>
      <ul>
        <li><strong>Modelo oficial de solicitud</strong> (lo proporciona la Seguridad Social)</li>
        <li><strong>DNI/NIE</strong></li>
        <li><strong>Justificación del cese involuntario:</strong>
          <ul>
            <li>Si es pérdida de cliente: carta del cliente comunicando fin de relación + facturas que demuestren que representaba >75% ingresos</li>
            <li>Si es fuerza mayor: certificados, fotos, informes oficiales (bomberos, policía, etc.)</li>
            <li>Si es pérdidas económicas: declaraciones trimestrales (modelos 130/303) que demuestren rendimientos < SMI</li>
          </ul>
        </li>
        <li><strong>Últimas declaraciones fiscales</strong> (modelos 130, 303, declaración IRPF)</li>
        <li><strong>Certificado de estar al corriente</strong> de pago con Seguridad Social</li>
      </ul>

      <h3>Paso 3: Presentar solicitud</h3>
      <p>Tienes <strong>15 días hábiles</strong> desde la baja en el RETA para presentar la solicitud. Puedes hacerlo:</p>
      <ul>
        <li><strong>Online:</strong> A través de la sede electrónica de la Seguridad Social (necesitas certificado digital o Cl@ve)</li>
        <li><strong>Presencialmente:</strong> En cualquier oficina del SEPE o Seguridad Social (pide cita previa)</li>
      </ul>

      <h3>Paso 4: Inscribirte como demandante de empleo</h3>
      <p>Debes inscribirte en el SEPE como demandante de empleo y firmar el <strong>compromiso de actividad</strong>. Esto implica:</p>
      <ul>
        <li>Aceptar ofertas de empleo acordes a tu formación</li>
        <li>Participar en acciones formativas si te lo requieren</li>
        <li>Renovar la demanda periódicamente (cada 3 meses)</li>
      </ul>

      <h3>Paso 5: Esperar resolución</h3>
      <p>La Seguridad Social tiene <strong>3 meses</strong> para resolver. Si es favorable, el primer pago llega al mes siguiente de la resolución.</p>

      <h2 id="compatibilidades">Compatibilidades y obligaciones mientras cobras</h2>

      <h3>¿Puedo trabajar mientras cobro la prestación?</h3>
      <p><strong>NO puedes volver a darte de alta como autónomo</strong> mientras cobras la prestación (perderías el derecho). Sin embargo:</p>
      <ul>
        <li><strong>SÍ puedes trabajar por cuenta ajena</strong> (contrato laboral). En este caso, la prestación se suspende mientras dure el contrato y se reanuda después si aún te queda periodo pendiente</li>
        <li><strong>NO puedes facturar como autónomo</strong> bajo ningún concepto</li>
        <li><strong>SÍ puedes formarte</strong> en cursos, bootcamps, etc.</li>
      </ul>

      <h3>Obligaciones durante la prestación</h3>
      <ul>
        <li><strong>Renovar la demanda de empleo</strong> cada 3 meses en el SEPE</li>
        <li><strong>Comunicar cualquier cambio:</strong> Si empiezas a trabajar, te mudas al extranjero, etc.</li>
        <li><strong>Aceptar ofertas adecuadas:</strong> Si rechazas una oferta de trabajo acorde a tu perfil sin justificación, pierdes la prestación</li>
        <li><strong>No puedes salir de España >15 días</strong> sin autorización (excepto por formación o búsqueda de empleo justificada)</li>
      </ul>

      <h3>¿Y si quiero volver a ser autónomo?</h3>
      <p>Puedes hacerlo, pero <strong>perderás la prestación</strong>. Sin embargo, existe una ventaja:</p>
      <ul>
        <li>Puedes solicitar el <strong>pago único</strong> del 40% de la prestación pendiente para invertirlo en tu nueva actividad</li>
        <li>Ejemplo: Si te quedan 10 meses de prestación a 1.000€/mes (10.000€ totales), puedes recibir 4.000€ de golpe para invertir en tu nuevo negocio</li>
      </ul>

      <h2 id="errores-comunes">Errores comunes que te pueden denegar la prestación</h2>

      <table>
        <thead>
          <tr><th>Error</th><th>Consecuencia</th><th>Cómo evitarlo</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>No tener contratada la cobertura de cese de actividad</td>
            <td>No tienes derecho a la prestación</td>
            <td>Verifica en tu vida laboral que cotizas por cese (aparece separado de la cuota ordinaria)</td>
          </tr>
          <tr>
            <td>Darte de baja sin justificación del cese involuntario</td>
            <td>Denegación por cese voluntario</td>
            <td>Recopila documentación ANTES de darte de baja: cartas de clientes, facturas, etc.</td>
          </tr>
          <tr>
            <td>Solicitar fuera de plazo (>15 días desde baja)</td>
            <td>Pérdida de derecho a la prestación</td>
            <td>Solicita INMEDIATAMENTE tras la baja en RETA, no esperes</td>
          </tr>
          <tr>
            <td>No inscribirte como demandante de empleo</td>
            <td>Suspensión o denegación de la prestación</td>
            <td>Inscríbete en el SEPE el mismo día que solicitas la prestación</td>
          </tr>
          <tr>
            <td>Seguir facturando "en B" mientras cobras</td>
            <td>Devolución total + sanción + posible delito (fraude)</td>
            <td>No facturen nada mientras cobras. Si quieres trabajar, hazlo por cuenta ajena</td>
          </tr>
          <tr>
            <td>No renovar la demanda de empleo</td>
            <td>Suspensión automática de la prestación</td>
            <td>Pon alarma en el calendario para renovar cada 3 meses</td>
          </tr>
        </tbody>
      </table>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1.5rem 0; border-radius: 0.5rem;">
        <p style="margin: 0; font-weight: 600; color: #92400e;">⚠️ Consejo importante</p>
        <p style="margin: 0.5rem 0 0 0; color: #92400e;">Si estás considerando solicitar la prestación, consulta con tu <a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">gestoría o asesor fiscal</a> ANTES de darte de baja. La documentación y justificación del cese involuntario es crítica - un error puede costarte meses de prestación (miles de euros). Muchas solicitudes se deniegan por falta de documentación o justificación insuficiente.</p>
      </div>

      <h3>Checklist antes de solicitar el cese de actividad:</h3>
      <ul>
        <li>✓ Verificar que cotizas por cese de actividad desde hace >12 meses</li>
        <li>✓ Recopilar toda la documentación que justifica el cese involuntario</li>
        <li>✓ Calcular cuánto cobrarías y durante cuánto tiempo (usa las tablas de arriba)</li>
        <li>✓ Estar al corriente de pago con Seguridad Social e Hacienda</li>
        <li>✓ Planificar el proceso: baja RETA → solicitud prestación (max 15 días) → inscripción SEPE</li>
        <li>✓ Consultar con gestoría/asesor para revisar tu caso específico</li>
        <li>✓ Tener plan B: ¿qué harás si te deniegan la prestación?</li>
      </ul>
    `,
    
  },
  //  20: pensiones para jubilacion
  {
    id: '20',
    slug: 'planes-pensiones-autonomos-jubilacion-ahorro-fiscal-2026',
    title: 'Planes de Pensiones para Autónomos: Jubilación y Ahorro Fiscal 2026',
    metaDescription: 'Guía completa sobre planes de pensiones para autónomos: cómo funcionan, ventajas fiscales, límites de aportación, alternativas de ahorro y simulación de jubilación.',
    category: 'impuestos',
    publishDate: '2026-01-17',
    readTime: 10,
    featured: false,
    excerpt: 'La pensión pública de los autónomos suele ser baja. Descubre cómo los planes de pensiones te ayudan a complementar tu jubilación y reducir tu factura fiscal ahora.',
    image: 'https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Reloj de arena y monedas representando el ahorro para la jubilación',
    sources: [
      {
        title: 'Plan de pensiones para autónomos – BBVA',
        url: 'https://www.bbva.es/empresas/productos/plan-pensiones-autonomos-empresas.html'
      }
    ],
    
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#por-que-necesitas" style="color: #3b82f6; text-decoration: none;">→ Por qué los autónomos necesitan un plan de pensiones</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ventajas-fiscales" style="color: #3b82f6; text-decoration: none;">→ Ventajas fiscales y límites de aportación</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#tipos-planes" style="color: #3b82f6; text-decoration: none;">→ Tipos de planes: individuales, empleo, PIAS</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#alternativas" style="color: #3b82f6; text-decoration: none;">→ Alternativas: fondos indexados, SIALP, inmuebles</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#simulacion" style="color: #3b82f6; text-decoration: none;">→ Simulación: cuánto necesitas ahorrar</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#estrategia" style="color: #3b82f6; text-decoration: none;">→ Estrategia recomendada según edad</a></li>
        </ul>
      </div>

      <h2 id="por-que-necesitas">Por qué los autónomos necesitan un plan de pensiones</h2>
      
      <p>La <strong>pensión de jubilación de los autónomos suele ser significativamente inferior</strong> a la de los empleados por cuenta ajena. Esto se debe a dos factores principales:</p>

      <ul>
        <li><strong>Bases de cotización más bajas:</strong> Hasta 2023, muchos autónomos cotizaban por la base mínima (~1.000€/mes) para reducir costes. Con el nuevo sistema por <a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos">rendimientos netos</a>, esto está cambiando, pero sigue habiendo diferencias</li>
        <li><strong>Periodos sin cotizar:</strong> Los autónomos suelen tener periodos de inactividad (entre proyectos, crisis económicas) donde no cotizan</li>
      </ul>

      <h3>Datos clave en 2026:</h3>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Empleado medio</th><th>Autónomo medio</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pensión media mensual</strong></td><td>1.485€</td><td>957€</td></tr>
          <tr><td><strong>Años cotizados promedio</strong></td><td>37 años</td><td>31 años</td></tr>
          <tr><td><strong>Base de cotización media</strong></td><td>2.200€</td><td>1.450€</td></tr>
        </tbody>
      </table>

      <p><strong>La brecha es real:</strong> Un autónomo cobra de media <strong>528€/mes menos</strong> de pensión que un asalariado. A lo largo de 25 años de jubilación, esto supone <strong>158.400€ menos</strong>.</p>

      <p>Por eso, si eres autónomo y quieres mantener tu nivel de vida en la jubilación, necesitas <strong>complementar la pensión pública</strong> con ahorro privado.</p>

      <h2 id="ventajas-fiscales">Ventajas fiscales de los planes de pensiones</h2>

      <p>Los planes de pensiones tienen una <strong>doble ventaja</strong>: te ayudan a ahorrar para el futuro Y reducen tu factura fiscal ahora.</p>

      <h3>Deducción en el IRPF</h3>
      <p>Tus aportaciones al plan de pensiones <strong>reducen tu base imponible</strong> en el IRPF. Es decir, pagas menos impuestos.</p>

      <p><strong>Límites de aportación en 2026:</strong></p>
      <ul>
        <li>Hasta <strong>1.500€/año</strong> (máximo general)</li>
        <li>O el <strong>30% de tus rendimientos netos</strong> del trabajo/actividad económica (si es inferior a 1.500€)</li>
      </ul>

      <p><strong>Ejemplo práctico: Laura, diseñadora freelance</strong></p>
      <ul>
        <li>Rendimientos netos: 45.000€/año</li>
        <li>Tramo IRPF marginal: 30%</li>
        <li>Aporta 1.500€/año al plan de pensiones</li>
      </ul>

      <p><strong>Ahorro fiscal:</strong></p>
      <ul>
        <li>Base imponible original: 45.000€</li>
        <li>Tras aportación plan: 45.000€ - 1.500€ = <strong>43.500€</strong></li>
        <li>Ahorro en IRPF: 1.500€ × 30% = <strong>450€</strong></li>
      </ul>

      <p>Laura invierte 1.500€ pero "solo le cuesta" 1.050€ porque Hacienda le devuelve 450€ en la declaración de la Renta.</p>

      <h3>¿Cuándo pagas impuestos?</h3>
      <p>Los planes de pensiones aplican <strong>imposición diferida</strong>:</p>
      <ul>
        <li><strong>Ahora:</strong> Deduces las aportaciones (pagas menos IRPF)</li>
        <li><strong>En la jubilación:</strong> Cuando rescates el plan, tributas como rendimientos del trabajo</li>
      </ul>

      <p><strong>Ventaja:</strong> En la jubilación, normalmente tu renta es inferior → tributas a tipo marginal más bajo. Además, si rescatas en forma de capital (todo de golpe), aplicas reducciones fiscales por aportaciones anteriores a 2007.</p>

      <h2 id="tipos-planes">Tipos de planes de pensiones y alternativas</h2>

      <h3>1. Plan de Pensiones Individual (PPI)</h3>
      <p><strong>Para quién:</strong> Cualquier autónomo que quiera ahorrar para la jubilación con ventajas fiscales.</p>

      <p><strong>Características:</strong></p>
      <ul>
        <li>Límite aportación: 1.500€/año deducibles en IRPF</li>
        <li>Gestión: por entidades bancarias, aseguradoras, gestoras de fondos</li>
        <li>Tipos: renta fija (conservador), mixto, renta variable (agresivo)</li>
        <li>Comisiones: 0,5%-2% anual (elige bajo coste)</li>
        <li>Liquidez: Baja (solo rescatable en jubilación, paro >12 meses, enfermedad grave, o >10 años desde aportación)</li>
      </ul>

      <p><strong>Mejores planes 2026 (bajo coste):</strong></p>
      <table>
        <thead>
          <tr><th>Plan</th><th>Entidad</th><th>Comisión</th><th>Perfil</th></tr>
        </thead>
        <tbody>
          <tr><td>Indexa Capital PP Cartera 90</td><td>Indexa Capital</td><td>0,45%</td><td>Agresivo (jóvenes)</td></tr>
          <tr><td>MyInvestor Plan Naranja 75</td><td>MyInvestor</td><td>0,50%</td><td>Moderado-agresivo</td></tr>
          <tr><td>Fondos DWS (varios)</td><td>DWS</td><td>0,60%-1%</td><td>Diversificados globales</td></tr>
          <tr><td>Plan Pensiones Renta Fija Corto Plazo</td><td>Varios</td><td>0,30%-0,50%</td><td>Conservador (cerca jubilación)</td></tr>
        </tbody>
      </table>

      <h3>2. Plan de Pensiones de Empleo (PPE)</h3>
      <p><strong>Para quién:</strong> Autónomos societarios (SL) o autónomos con empleados.</p>

      <p><strong>Ventajas adicionales:</strong></p>
      <ul>
        <li>Límite mayor: hasta <strong>8.500€/año</strong> deducibles (vs 1.500€ del individual)</li>
        <li>Si eres autónomo societario, la empresa puede aportar y deducir como gasto</li>
        <li>Puedes combinar PPE (8.500€) + PPI (1.500€) = <strong>10.000€/año deducibles</strong></li>
      </ul>

      <p><strong>Requisito:</strong> Debes constituirlo a través de tu SL o asociación profesional.</p>

      <h3>3. PIAS (Plan Individual de Ahorro Sistemático)</h3>
      <p><strong>Para quién:</strong> Autónomos que priorizan flexibilidad sobre deducción fiscal.</p>

      <p><strong>Características:</strong></p>
      <ul>
        <li>NO deducible en IRPF (no reduces base imponible)</li>
        <li>Pero: rendimientos exentos de IRPF si rescatas tras 5 años y >50 años edad</li>
        <li>Mayor liquidez que planes de pensiones tradicionales</li>
        <li>Límite aportación: 8.000€/año, máximo 240.000€ acumulado</li>
      </ul>

      <p><strong>¿Cuándo elegir PIAS vs Plan de Pensiones?</strong></p>
      <ul>
        <li>PIAS: Si necesitas flexibilidad, tienes rentas altas y ya agotaste límites de planes</li>
        <li>Plan Pensiones: Si buscas deducción fiscal inmediata y no necesitas liquidez</li>
      </ul>

      <h2 id="alternativas">Alternativas a los planes de pensiones tradicionales</h2>

      <p>Los planes de pensiones tienen <strong>limitaciones</strong>: baja liquidez, comisiones altas (en muchos casos), rentabilidad mediocre. Por eso, muchos autónomos diversifican con otras opciones:</p>

      <h3>1. Fondos indexados (fuera de plan de pensiones)</h3>
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Comisiones bajas (0,10%-0,30% anual)</li>
        <li>Liquidez total (puedes vender cuando quieras)</li>
        <li>Rentabilidad histórica superior (S&P 500: ~10% anual promedio últimos 30 años)</li>
      </ul>

      <p><strong>Desventajas:</strong></p>
      <ul>
        <li>NO deducible en IRPF</li>
        <li>Tributas por plusvalías al vender (19%-26% según importe)</li>
      </ul>

      <p><strong>Recomendados:</strong> Vanguard, iShares, Amundi ETFs sobre índices mundiales (MSCI World, S&P 500)</p>

      <h3>2. Unit Linked / SIALP</h3>
      <p>Seguros de ahorro que invierten en fondos. Fiscalidad favorable:</p>
      <ul>
        <li>Puedes traspasar entre fondos SIN tributar (diferimiento fiscal)</li>
        <li>En caso de fallecimiento, beneficiarios reciben sin tributar en sucesiones (según comunidad autónoma)</li>
        <li>Flexibilidad para rescate parcial</li>
      </ul>

      <p><strong>Inconveniente:</strong> Comisiones más altas que fondos indexados directos.</p>

      <h3>3. Inversión inmobiliaria</h3>
      <p>Comprar inmuebles para alquilar como complemento a la jubilación:</p>
      <ul>
        <li><strong>Ventaja:</strong> Rentas pasivas mensuales en la jubilación</li>
        <li><strong>Desventaja:</strong> Requiere capital inicial elevado, gestión activa, no tan líquido</li>
      </ul>

      <h3>4. Cartera de dividendos (acciones)</h3>
      <p>Invertir en empresas con dividendos crecientes (ej: Coca-Cola, Procter & Gamble):</p>
      <ul>
        <li>Ingresos pasivos recurrentes</li>
        <li>Tributación favorable (19% primeros 6.000€ de dividendos)</li>
        <li>Liquidez total</li>
      </ul>

      <h2 id="simulacion">Simulación: ¿Cuánto necesitas ahorrar para la jubilación?</h2>

      <h3>Regla del 4%</h3>
      <p>Método conservador: puedes retirar el <strong>4% anual</strong> de tu patrimonio invertido sin que se agote.</p>

      <p><strong>Ejemplo: Carlos, 35 años, desarrollador freelance</strong></p>
      <ul>
        <li>Edad actual: 35 años</li>
        <li>Edad jubilación: 67 años (32 años hasta jubilación)</li>
        <li>Pensión pública estimada: 1.100€/mes</li>
        <li>Gastos deseados en jubilación: 2.500€/mes</li>
        <li>Déficit mensual: 2.500€ - 1.100€ = <strong>1.400€/mes</strong> (16.800€/año)</li>
      </ul>

      <p><strong>Patrimonio necesario (regla 4%):</strong></p>
      <p>16.800€ / 0,04 = <strong>420.000€</strong></p>

      <p><strong>Aportación mensual necesaria (rentabilidad 6% anual):</strong></p>
      <p>Para acumular 420.000€ en 32 años a 6% anual: <strong>525€/mes</strong></p>

      <h3>Comparación estrategias de ahorro:</h3>
      <table>
        <thead>
          <tr><th>Estrategia</th><th>Aportación mensual</th><th>Deducción IRPF anual</th><th>Coste real mensual</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Solo Plan Pensiones (1.500€/año)</td>
            <td>125€</td>
            <td>450€ (tramo 30%)</td>
            <td>88€</td>
          </tr>
          <tr>
            <td>Plan Pensiones + Fondos indexados</td>
            <td>125€ + 400€ = 525€</td>
            <td>450€</td>
            <td>488€</td>
          </tr>
          <tr>
            <td>PPE (societario) + Fondos</td>
            <td>708€ (8.500€ PPE) + 0€</td>
            <td>2.550€ (tramo 30%)</td>
            <td>495€</td>
          </tr>
        </tbody>
      </table>

      <h2 id="estrategia">Estrategia recomendada según tu edad y situación</h2>

      <h3>Si tienes 25-35 años (early career)</h3>
      <p><strong>Prioridad:</strong> Crecimiento agresivo + máxima flexibilidad</p>
      <ul>
        <li>✓ Plan de Pensiones: 1.500€/año (125€/mes) → Deducción fiscal inmediata</li>
        <li>✓ Fondos indexados globales: 300-500€/mes adicionales (liquidez total)</li>
        <li>✓ Perfil: 90% renta variable (tienes tiempo para recuperar caídas)</li>
        <li>✓ Total ahorro: 425-625€/mes</li>
      </ul>

      <h3>Si tienes 35-50 años (mid-career)</h3>
      <p><strong>Prioridad:</strong> Acelerar ahorro + diversificación</p>
      <ul>
        <li>✓ Plan de Pensiones: 1.500€/año (deducción fiscal)</li>
        <li>✓ Si tienes SL: considerar PPE para aumentar límite a 8.500€/año</li>
        <li>✓ Fondos indexados: 500-800€/mes</li>
        <li>✓ Perfil: 70% renta variable, 30% renta fija</li>
        <li>✓ Considerar inmueble para alquilar si tienes capital</li>
      </ul>

      <h3>Si tienes 50-67 años (late career)</h3>
      <p><strong>Prioridad:</strong> Conservación capital + generar rentas</p>
      <ul>
        <li>✓ Plan de Pensiones: reducir exposición renta variable (50% RF, 50% RV)</li>
        <li>✓ Empezar a construir cartera de dividendos para ingresos pasivos</li>
        <li>✓ Si tienes inmuebles: considerar alquilarlos en lugar de vender</li>
        <li>✓ A partir de 65 años: rescate paulatino plan pensiones (cobrar 5-10 años antes de agotar)</li>
      </ul>

      <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; border-radius: 0.5rem;">
        <p style="margin: 0; font-weight: 600; color: #1e3a8a;">💡 Consejo clave</p>
        <p style="margin: 0.5rem 0 0 0; color: #1e3a8a;">No pongas todos los huevos en la misma cesta. La estrategia óptima para autónomos es <strong>diversificar</strong>: combina planes de pensiones (ventaja fiscal inmediata) con fondos indexados (liquidez y rentabilidad) y, si puedes, inmuebles o cartera de dividendos. Revisa tu estrategia cada 2-3 años según evolucione tu situación económica.</p>
      </div>

      <h3>Errores comunes a evitar:</h3>
      <ul>
        <li>❌ No ahorrar nada porque "ya cotizo a la Seguridad Social" (insuficiente)</li>
        <li>❌ Elegir plan de pensiones por comisiones altas (>1%) → Busca gestoras low-cost</li>
        <li>❌ Aportaciones irregulares (mejor 100€/mes constante que 1.500€ una vez al año)</li>
        <li>❌ Perfil conservador si eres joven (<45 años) → Pierdes potencial de crecimiento</li>
        <li>❌ No revisar rentabilidad del plan (si va mal 3 años seguidos, cambia de plan)</li>
        <li>❌ Depender solo de la pensión pública (puede recortarse en el futuro)</li>
      </ul>
    `
  },
  // 21:Contractar primer empleado
  {
    id: '21',
    slug: 'contratar-primer-empleado-autonomo-espana-2026',
    title: 'Cómo Contratar a tu Primer Empleado como Autónomo en España: Guía 2026',
    metaDescription: 'Guía paso a paso para autónomos que quieren contratar a su primer empleado en 2026: requisitos, trámites, costes, bonificaciones y errores a evitar.',
    category: 'seguridad-social',
    publishDate: '2026-01-18',
    readTime: 10,
    featured: false,
    excerpt: '¿Eres autónomo y necesitas ayuda? Descubre cómo contratar a tu primer empleado en 2026: trámites, costes, bonificaciones y consejos prácticos.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop',
    imageAlt: 'Apretón de manos entre autónomo y su primer empleado en una oficina moderna',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#por-que-contratar" style="color: #3b82f6; text-decoration: none;">→ ¿Por qué contratar a un empleado?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#requisitos" style="color: #3b82f6; text-decoration: none;">→ Requisitos legales y documentación</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#pasos" style="color: #3b82f6; text-decoration: none;">→ Pasos para contratar: alta, contrato y Seguridad Social</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#costes" style="color: #3b82f6; text-decoration: none;">→ Costes y cotizaciones en 2026</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#bonificaciones" style="color: #3b82f6; text-decoration: none;">→ Bonificaciones y ayudas disponibles</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#errores" style="color: #3b82f6; text-decoration: none;">→ Errores comunes y cómo evitarlos</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ejemplo" style="color: #3b82f6; text-decoration: none;">→ Ejemplo real: coste mensual de un empleado</a></li>
          
        </ul>
      </div>


      <h2 id="por-que-contratar">¿Por qué contratar a un empleado?</h2>
      <p>Contratar a tu primer empleado es una decisión estratégica que puede transformar tu negocio. No solo te permite delegar tareas y centrarte en lo que realmente aporta valor, sino que también mejora la atención al cliente y la productividad. Además, contar con un equipo te ayuda a afrontar picos de trabajo, asumir proyectos más grandes y reducir el riesgo de burnout. En 2026, la tendencia de los autónomos que contratan empleados va en aumento, ya que permite crecer de forma sostenible y profesionalizar la actividad.</p>
      <p>Recuerda que, al contratar, también proyectas una imagen más sólida ante clientes y proveedores, lo que puede abrirte nuevas oportunidades de negocio y colaboraciones.</p>


      <h2 id="requisitos">Requisitos legales y documentación</h2>
      <ul>
        <li>Estar dado de alta como autónomo en la Seguridad Social y Hacienda. Es imprescindible estar al corriente de tus obligaciones fiscales y de cotización.</li>
        <li>No tener deudas con Hacienda ni Seguridad Social. Si tienes alguna deuda, deberás regularizar tu situación antes de contratar.</li>
        <li>Solicitar un <strong>código de cuenta de cotización (CCC)</strong> como empleador en la Seguridad Social. Este código te identifica como empresa a efectos de cotización y es obligatorio para poder dar de alta a trabajadores.</li>
        <li>Registrar el contrato en el SEPE y dar de alta al trabajador en la Seguridad Social (Sistema RED o presencial) antes de que empiece a trabajar. El alta debe realizarse como máximo el día anterior al inicio de la actividad.</li>
        <li>Elaborar un contrato laboral por escrito, ya sea utilizando un modelo oficial o adaptándolo a las necesidades del puesto. Es recomendable detallar funciones, jornada, salario y condiciones.</li>
      </ul>
      <p>Además, deberás cumplir con la normativa de prevención de riesgos laborales, entregar la información sobre protección de datos y registrar la jornada laboral desde el primer día.</p>


      <h2 id="pasos">Pasos para contratar: alta, contrato y Seguridad Social</h2>
      <ol>
        <li><strong>Solicita el CCC</strong> en la Tesorería General de la Seguridad Social (TGSS). Puedes hacerlo online con certificado digital o presencialmente. Es un trámite rápido y gratuito.</li>
        <li><strong>Firma el contrato</strong> con el empleado. Elige el tipo de contrato (indefinido, temporal, formación, etc.) y acuerda las condiciones. Recuerda que los contratos indefinidos suelen tener más bonificaciones.</li>
        <li><strong>Da de alta al trabajador</strong> en la Seguridad Social a través del Sistema RED o en la oficina. El alta debe realizarse antes de que el empleado empiece a trabajar, y es fundamental para que esté cubierto desde el primer día.</li>
        <li><strong>Comunica el contrato</strong> al SEPE en un plazo máximo de 10 días desde la firma. Puedes hacerlo online en la web del SEPE.</li>
        <li><strong>Lleva registro horario</strong> y cumple con la normativa de prevención de riesgos laborales. El registro horario es obligatorio para todos los empleados, independientemente de la jornada.</li>
      </ol>
      <p>Si tienes dudas, puedes apoyarte en una gestoría laboral para evitar errores y sanciones.</p>


      <h2 id="costes">Costes y cotizaciones en 2026</h2>
      <p>El coste de contratar a un empleado no se limita al salario. Debes tener en cuenta:</p>
      <ul>
        <li><strong>Salario bruto:</strong> Lo que acuerdas pagar al empleado, según convenio o acuerdo individual.</li>
        <li><strong>Seguridad Social a cargo del empleador:</strong> Aproximadamente un 30-32% adicional sobre el salario bruto. Incluye contingencias comunes, desempleo, formación profesional y FOGASA.</li>
        <li><strong>Pagas extra, vacaciones, indemnizaciones y otros conceptos:</strong> Según convenio y tipo de contrato. Calcula bien estos importes para evitar sorpresas.</li>
      </ul>
      <p>Ejemplo práctico:</p>
      <table>
        <thead>
          <tr><th>Concepto</th><th>Importe mensual</th></tr>
        </thead>
        <tbody>
          <tr><td>Salario bruto (ejemplo)</td><td>1.400€</td></tr>
          <tr><td>Seguridad Social (32%)</td><td>448€</td></tr>
          <tr><td><strong>Total coste empresa</strong></td><td><strong>1.848€</strong></td></tr>
        </tbody>
      </table>
      <p>Recuerda que existen costes indirectos (formación, material, adaptación del puesto) y que puedes deducir estos gastos en tu declaración de IRPF.</p>
  <p>Recuerda que existen costes indirectos (formación, material, adaptación del puesto) y que puedes deducir estos gastos en tu declaración de IRPF.</p>
  <p>¿Quieres saber cómo afectan los <a href="/blog/tramos-cotizacion-autonomos-2026-rendimientos-netos" style="color: #3b82f6; text-decoration: underline;">tramos de cotización de autónomos en 2026</a> al coste de tu plantilla? Descúbrelo en nuestro blog.</p>


      <h2 id="bonificaciones">Bonificaciones y ayudas disponibles</h2>
      <ul>
        <li><strong>Contrato indefinido:</strong> Bonificación de 1.500€/año durante 3 años para colectivos prioritarios (jóvenes, mayores de 45, parados de larga duración, etc.). Consulta los requisitos actualizados cada año.</li>
        <li><strong>Primer empleado:</strong> Si nunca has tenido trabajadores, puedes acceder a bonificaciones especiales en la cuota de la Seguridad Social. Infórmate en la Seguridad Social y en el SEPE.</li>
        <li><strong>Personas con discapacidad:</strong> Bonificaciones de hasta 6.000€/año y ayudas adicionales para la adaptación del puesto de trabajo.</li>
      </ul>
      <p>Estas ayudas pueden suponer un ahorro importante durante los primeros años. Es recomendable planificar la contratación para aprovecharlas al máximo.</p>


      <h2 id="errores">Errores comunes y cómo evitarlos</h2>
      <ul>
        <li><strong>No dar de alta al empleado antes de empezar:</strong> Es una infracción grave y puede acarrear sanciones importantes. Haz siempre el alta antes del primer día de trabajo.</li>
        <li><strong>No cumplir con el convenio colectivo:</strong> Infórmate de cuál aplica a tu sector y respétalo en salario, jornada y condiciones.</li>
        <li><strong>No llevar registro horario ni cumplir con la prevención de riesgos laborales:</strong> Ambos son obligatorios y su incumplimiento puede suponer multas.</li>
        <li><strong>No comunicar el contrato al SEPE en plazo:</strong> Recuerda que tienes 10 días para hacerlo desde la firma.</li>
        <li><strong>No calcular bien el coste total:</strong> Ten Consulta todas las bonificaciones para contratar empleados como autónomo en 2026 en nuestro blog. cuenta todos los conceptos (salario, Seguridad Social, extras) para evitar problemas de liquidez.</li>
      </ul>
      <p>Evita estos errores apoyándote en asesoría profesional y revisando la normativa vigente antes de cada contratación.</p>


      <h2 id="ejemplo">Ejemplo real: coste mensual de un empleado</h2>
      <p>Imagina que contratas a un desarrollador junior con un salario bruto de 1.400€/mes. El coste para tu negocio será:</p>
      <ul>
        <li>Salario bruto: 1.400€</li>
        <li>Seguridad Social (32%): 448€</li>
        <li><strong>Total coste empresa: 1.848€/mes</strong></li>
      </ul>
      <p>Si accedes a bonificaciones, la cuota de Seguridad Social puede reducirse durante los primeros años, lo que supone un ahorro significativo. Recuerda que estos cálculos son orientativos y pueden variar según el convenio y la situación del trabajador.</p>
    `,
    sources: [
      { title: 'Guía oficial Seguridad Social: Contratación de trabajadores', url: 'https://sede.seg-social.gob.es/wps/portal/sede/sede/EmpresasyProfesionales/afiliacion+e+inscripcion/03afiliacion+e+inscripcion' }
    ]
  },
  // 22: Cliente no te paga
  {
    id: '22',
    slug: 'que-hacer-si-un-cliente-no-te-paga-pasos-legales-autonomos-2026',
    title: 'Qué hacer si un cliente no te paga: Guía legal definitiva para autónomos en España (Edición 2026)',
    metaDescription: 'Guía exhaustiva para reclamar impagos en 2026. Analizamos el Proceso Monitorio, cómo recuperar el IVA de facturas incobrables y la Ley de Morosidad para freelancers.',
    category: 'seguridad-social',
    publishDate: '2026-01-18',
    readTime: 9,
    featured: true,
    excerpt: 'El impago es el mayor riesgo del freelance. Aprende a ejecutar un requerimiento formal, usar el Juicio Monitorio sin costes legales y aplicar la normativa de 2026 para proteger tu tesorería.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop',
    imageAlt: 'Mazo de juez y documentos legales representando reclamación de impagos',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Índice de la guía de reclamación</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#marco-legal" style="color: #3b82f6; text-decoration: none;">→ 1. Marco Legal: Ley 3/2004 y plazos máximos</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#fase-prejudicial" style="color: #3b82f6; text-decoration: none;">→ 2. Fase Prejudicial: El Burofax como prueba técnica</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#monitorio-detalle" style="color: #3b82f6; text-decoration: none;">→ 3. El Proceso Monitorio: Guía técnica paso a paso</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#recuperar-iva" style="color: #3b82f6; text-decoration: none;">→ 4. Ingeniería Fiscal: Recuperar el IVA de impagados</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#intereses" style="color: #3b82f6; text-decoration: none;">→ 5. Cálculo de intereses de demora en 2026</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#contratos" style="color: #3b82f6; text-decoration: none;">→ 6. Blindaje de contratos para programadores</a></li>
        </ul>
      </div>

      <h2 id="marco-legal">1. El Marco Legal en 2026: La Ley de Lucha contra la Morosidad</h2>
      <p>La base de cualquier reclamación es la <strong>Ley 3/2004</strong>. Esta normativa establece que el plazo de pago que debe cumplir la empresa deudora no podrá exceder en ningún caso los <strong>60 días naturales</strong> a partir de la fecha de recepción de las mercancías o prestación de los servicios.</p>
      
      <p>Como desarrollador autónomo, es vital entender que cualquier cláusula en un contrato que establezca un plazo superior a 60 días es <strong>nula de pleno derecho</strong>. En 2026, las inspecciones de trabajo han endurecido el control sobre las empresas que utilizan a los freelancers como vía de financiación gratuita.</p>

      <h2 id="fase-prejudicial">2. Fase Prejudicial: La importancia del Requerimiento Fehaciente</h2>
      <p>Antes de acudir a los tribunales, la ley exige demostrar que se ha intentado el cobro. El método estándar es el <strong>Burofax con certificación de texto y acuse de recibo</strong>. No envíes un simple email; ante un juez, un email puede ser impugnado si no cuenta con una firma digital cualificada.</p>
      
      <h3>¿Cómo redactar el requerimiento perfecto?</h3>
      <p>El texto debe ser aséptico y técnico. Debe incluir:</p>
      <ul>
        <li><strong>Referencia a la factura:</strong> Número, fecha de emisión y fecha de vencimiento original.</li>
        <li><strong>Concepto:</strong> Breve descripción del servicio prestado (ej. "Desarrollo de API Rest y migración de base de datos").</li>
        <li><strong>Importe total:</strong> Desglosando Base Imponible e IVA.</li>
        <li><strong>Plazo de gracia:</strong> Se recomienda dar un plazo de 7 días naturales para el ingreso en una cuenta específica.</li>
      </ul>

      <h2 id="monitorio-detalle">3. El Proceso Monitorio: Guía técnica y procesal paso a paso</h2>
      <p>El <strong>Proceso Monitorio</strong> es, sin duda, la herramienta jurídica más potente de la que disponemos los autónomos en España. Su diseño permite que deudas líquidas, determinadas, vencidas y exigibles puedan ser reclamadas sin necesidad de iniciar un juicio ordinario largo y costoso. En 2026, la digitalización de los juzgados permite presentar estos escritos de forma telemática a través de la Sede Judicial Electrónica.</p>

      <h3>A. Requisitos de la deuda para ser admitida</h3>
      <p>No cualquier deuda sirve para un monitorio. Para que el Letrado de la Administración de Justicia admita tu petición, la deuda debe ser:</p>
      <ul>
        <li><strong>Dineraria:</strong> Debe expresarse en moneda de curso legal (Euros).</li>
        <li><strong>Vencida:</strong> El plazo de pago debe haber pasado (mínimo 60 días según la Ley de Morosidad).</li>
        <li><strong>Exigible:</strong> No puede estar sujeta a condiciones futuras.</li>
        <li><strong>Documentada:</strong> Necesitas facturas, albaranes, correos electrónicos de confirmación o registros de logs de entrega de software.</li>
      </ul>

      <h3>B. El procedimiento sin Abogado (Hasta 2.000€)</h3>
      <p>Si tu factura pendiente es de, por ejemplo, 1.500€, el beneficio es total. La Ley de Enjuiciamiento Civil permite que el autónomo actúe <strong>en nombre propio</strong>. Esto significa que el 100% de lo que recuperes será para ti, sin comisiones legales. Solo necesitas descargar el impreso normalizado, adjuntar las facturas y el Burofax previo, y entregarlo en el juzgado de primera instancia del domicilio del cliente.</p>

      <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid #cbd5e1; margin: 1.5rem 0;">
        <h4 style="margin-top: 0; color: #0f172a;">⏱ Cronograma del Proceso Monitorio en 2026:</h4>
        <ol>
          <li><strong>Presentación (Día 0):</strong> Entrega de la petición y documentos.</li>
          <li><strong>Admisión (Día 15-30):</strong> El juzgado revisa la documentación y, si es correcta, emite el requerimiento de pago.</li>
          <li><strong>Notificación:</strong> Un funcionario del juzgado acude al domicilio del deudor para entregarle el requerimiento en mano.</li>
          <li><strong>El plazo de 20 días:</strong> A partir de la notificación, el deudor tiene exactamente 20 días hábiles para pagar o presentar un escrito de oposición.</li>
        </ol>
      </div>

      <h3>C. ¿Qué ocurre si el cliente no paga ni responde? (La Ejecución)</h3>
      <p>Este es el punto más satisfactorio del proceso. Si pasan los 20 días y el cliente ignora el requerimiento, se produce el <strong>despacho de ejecución</strong> automático. Como el cliente no se ha opuesto en plazo, la ley asume que la deuda es real y definitiva.</p>
      <p>En este momento, puedes solicitar al juzgado el <strong>embargo preventivo de bienes</strong>. Gracias al Punto Neutro Judicial, el juzgado puede localizar:</p>
      <ul>
        <li>Saldos en cuentas corrientes (barrido de cuentas).</li>
        <li>Devoluciones pendientes de Hacienda (IVA o IRPF del deudor).</li>
        <li>Facturas que el deudor tenga pendientes de cobrar de otros clientes (embargo de créditos).</li>
        <li>Vehículos o propiedades inmobiliarias si la deuda es elevada.</li>
      </ul>

      <h3>D. La oposición del deudor: El único riesgo</h3>
      <p>El cliente puede presentar un escrito de oposición alegando que el software no funciona o que el servicio no se prestó correctamente. Si esto ocurre, el monitorio se "rompe" y se convierte en un juicio normal. Si la cuantía es menor de 6.000€, iréis a un <strong>Juicio Verbal</strong>, donde se celebrará una vista y un juez decidirá quién tiene razón basándose en las pruebas técnicas aportadas (aquí es donde tus contratos y correos son tu salvavidas).</p>

      <h2 id="recuperar-iva">4. Recuperar el IVA de facturas impagadas (Art. 80 LIVA)</h2>
      <p>Como autónomo, ya has adelantado a Hacienda el 21% de una factura que no has cobrado. Esto drena tu liquidez. Para recuperar ese dinero, debemos realizar una <strong>modificación de la base imponible</strong>.</p>
      
      <p>En 2026, los requisitos para considerar una deuda como "incobrable" son:</p>
      <ol>
        <li>Que haya transcurrido <strong>seis meses</strong> desde el devengo del impuesto (para facturas emitidas a otras empresas o autónomos).</li>
        <li>Que la circunstancia de impago haya sido reflejada en los libros registro.</li>
        <li>Haber instado el cobro mediante reclamación judicial o requerimiento notarial/burofax.</li>
      </ol>
      <p><strong>El procedimiento:</strong> Tienes 3 meses para emitir una factura rectificativa (con IVA negativo) y enviársela al deudor. Luego, tienes 1 mes para informar a la AEAT a través del formulario 952 en su sede electrónica.</p>

      <h2 id="intereses">5. Cálculo de intereses de demora en 2026</h2>
      <p>No solo tienes derecho al principal de la deuda. La ley te permite cobrar el <strong>interés de demora comercial</strong>. Este interés se publica semestralmente en el BOE.</p>
      <p>El cálculo es: <strong>Tipo aplicado por el BCE + 8 puntos porcentuales</strong>.</p>
      <p>Si el tipo del BCE está al 4%, el interés de demora que puedes exigir a tu cliente es del <strong>12% anual</strong>. Además, puedes reclamar una <strong>indemnización fija de 40 euros</strong> por costes de cobro por cada factura impagada, sin necesidad de justificar gastos adicionales.</p>

      <h2 id="contratos">6. Prevención: Cómo blindar tus proyectos de software</h2>
      <p>Como desarrolladores, tenemos una ventaja: el control sobre el despliegue. Aquí algunas cláusulas de "oro" para tus contratos en 2026:</p>
      <ul>
        <li><strong>Reserva de dominio:</strong> El cliente no ostenta la propiedad intelectual ni los derechos de uso del código hasta que la última factura sea abonada íntegramente.</li>
        <li><strong>Suspensión de servicio:</strong> Cláusula que permite suspender el mantenimiento o el acceso al entorno de staging si hay un retraso superior a 10 días en los pagos por hitos.</li>
        <li><strong>Sumisión expresa:</strong> Acordar que cualquier conflicto se resuelva en los juzgados de tu ciudad para evitar desplazamientos costosos.</li>
      </ul>

      <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 1.5rem; margin-top: 2rem;">
        <h4 style="margin-top: 0; color: #92400e;">⚠️ Error crítico a evitar</h4>
        <p style="margin-bottom: 0;">Nunca hackees o borres el código de un cliente que no te paga de forma remota ("logic bombs"). Esto podría considerarse un delito de daños informáticos o coacciones. Usa siempre la vía legal del <strong>Proceso Monitorio</strong> o la suspensión de servicios bajo contrato.</p>
      </div>
    `,
    sources: [
      { title: 'Ley de Enjuiciamiento Civil - Proceso Monitorio', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2000-323'}
    ]
  },
  // 23: Seguro resp. civil
  {
    id: '23',
    slug: 'seguro-responsabilidad-civil-desarrolladores-autonomos-2026',
    title: '¿Es obligatorio el Seguro de Responsabilidad Civil para desarrolladores autónomos en 2026?',
    metaDescription: 'Guía técnica definitiva sobre el Seguro de RC para programadores. Análisis de riesgos, cláusulas de IA, ciberseguridad y protección ante negligencia técnica en 2026.',
    category: 'gastos',
    publishDate: '2026-01-18',
    readTime: 9,
    featured: true,
    excerpt: '¿Tu código podría arruinarte? Analizamos por qué el Seguro de RC Profesional es el blindaje definitivo para freelancers en 2026, las nuevas cláusulas de IA y cómo proteger tu patrimonio ante reclamaciones.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
    imageAlt: 'Seguridad digital y protección de datos avanzada',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Contenido del artículo</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#obligatoriedad" style="color: #3b82f6; text-decoration: none;">→ Requisitos legales y contractuales en 2026</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#analisis-riesgos" style="color: #3b82f6; text-decoration: none;">→ Análisis de riesgos: ¿Qué puede fallar en tu código?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ia-responsabilidad" style="color: #3b82f6; text-decoration: none;">→ El impacto de la IA: ¿Quién es responsable del código generado?</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#rc-profesional" style="color: #3b82f6; text-decoration: none;">→ RC Profesional vs. RC General: Diferencias clave</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#ciberriesgos" style="color: #3b82f6; text-decoration: none;">→ Ciberriesgos y Protección de Datos (RGPD)</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#coberturas" style="color: #3b82f6; text-decoration: none;">→ Coberturas indispensables: Retroactividad e Inhabilitación</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#costes" style="color: #3b82f6; text-decoration: none;">→ Costes medios y límites de indemnización 2026</a></li>
        </ul>
      </div>

      <h2 id="obligatoriedad">Requisitos legales y contractuales en 2026</h2>
      <p>A diferencia de profesiones como la medicina o la arquitectura, el desarrollo de software no tiene una colegiación obligatoria que exija un seguro por ley estatal directa para ejercer. Sin embargo, el mercado tecnológico en 2026 ha impuesto su propia "ley no escrita": la <strong>Responsabilidad Civil Profesional</strong> es hoy un estándar de facto exigido por el 95% de los clientes corporativos.</p>
      
      <p>En el entorno actual, marcado por la <strong>AI Act</strong> de la Unión Europea y las nuevas normativas de ciberresiliencia, cualquier contrato con empresas de tamaño medio o corporaciones internacionales incluirá una cláusula de seguro de RC con coberturas mínimas de 300.000€. Ignorar este punto no solo te expone legalmente a responder con tus bienes presentes y futuros, sino que limita drásticamente tu capacidad de captar clientes de alto valor que exigen transferir el riesgo operacional a una aseguradora solvente.</p>

      <h2 id="analisis-riesgos">Análisis de riesgos: ¿A qué se enfrenta un desarrollador?</h2>
      <p>Como programador freelance, tus errores no causan grietas físicas en una pared, pero pueden causar "grietas financieras" devastadoras en la facturación de tus clientes. Estos son los riesgos reales que gestionas a diario:</p>

      <h3>1. Negligencia Profesional o Errores de Lógica (E&O)</h3>
      <p>Imagina que desarrollas un sistema de gestión de precios para un e-commerce. Un error en la lógica del cálculo de descuentos provoca que la empresa venda 2.000 productos a un precio inferior al coste durante un fin de semana. El perjuicio económico es directo. Sin seguro, el cliente te demandará por el <strong>lucro cesante</strong> (lo que dejó de ganar) y el daño emergente (la pérdida directa).</p>

      <h3>2. Incumplimiento de Plazos Críticos</h3>
      <p>Si tu contrato estipula una entrega para una campaña de Navidad y un error técnico impide el lanzamiento, los costes de marketing perdidos y la pérdida de oportunidad de venta recaen legalmente sobre ti. Las pólizas de RC Profesional de 2026 ya cubren la defensa y las compensaciones por retrasos no dolosos.</p>

      <h2 id="ia-responsabilidad">El impacto de la IA: ¿Quién es responsable del código generado?</h2>
      <p>Con la consolidación de herramientas de IA generativa (GitHub Copilot, Cursor, etc.), en 2026 ha surgido una nueva duda legal: <strong>¿De quién es la culpa si una IA introduce una vulnerabilidad?</strong></p>
      
      <p>La jurisprudencia actual es clara: la responsabilidad final recae en el <strong>profesional humano</strong> que valida y despliega el código. Las pólizas de RC especializadas ahora incluyen cláusulas específicas que cubren errores derivados del uso de asistentes de IA, siempre que exista una supervisión humana documentada. Si usas IA para programar, tu seguro DEBE mencionar explícitamente la cobertura por errores técnicos asistidos.</p>

      <h2 id="rc-profesional">RC Profesional vs. RC General: Diferencias que debes conocer</h2>
      <p>Es el error más común al contratar. La mayoría de seguros de hogar o de comercio incluyen una "RC General", pero para un programador es prácticamente inútil ante un error de software:</p>

      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
          <thead>
            <tr style="background-color: #f1f5f9;">
              <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Concepto</th>
              <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">RC General (Explotación)</th>
              <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">RC Profesional (E&O)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">Daños materiales (romper un monitor en la oficina del cliente)</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">Sí</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">No</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">Perjuicios económicos (caída de servidor por bug)</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">No</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">Sí</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">Errores en API o lógica de negocio</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">No</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">Sí</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">Defensa jurídica especializada en tecnología</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center;">Básica</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; text-align: center; font-weight: bold;">Avanzada (IT)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="ciberriesgos">Ciberriesgos y Protección de Datos (RGPD)</h2>
      <p>En 2026, la seguridad de la información es inseparable de la responsabilidad profesional. Si desarrollas una plataforma que sufre una brecha de seguridad debido a una inyección SQL o un mal manejo de tokens JWT, tu cliente puede ser sancionado por la AEPD con multas de hasta el 4% de su facturación.</p>
      
      <p>Una póliza de calidad debe incluir un anexo de <strong>Ciberriesgo</strong> que cubra:</p>
      <ul>
        <li>Gastos de notificación a los usuarios afectados.</li>
        <li>Gastos de restauración de datos digitales.</li>
        <li>Defensa legal ante procedimientos sancionadores de Protección de Datos.</li>
        <li>Extorsión cibernética (Ransomware) específica para el autónomo.</li>
      </ul>

      <h2 id="coberturas">Coberturas indispensables en una póliza de IT en 2026</h2>
      <p>Al auditar tu póliza, asegúrate de que estos términos aparecen explícitamente en el condicionado:</p>
      <ul>
        <li><strong>Inhabilitación profesional:</strong> Cubre tus ingresos si un juez te prohíbe ejercer como desarrollador temporalmente por una sentencia de negligencia.</li>
        <li><strong>Propiedad Intelectual y Confidencialidad:</strong> Protege ante demandas por revelación involuntaria de secretos comerciales o infracción de copyright de software (uso de librerías sin licencia).</li>
        <li><strong>Retroactividad Ilimitada:</strong> Vital. Cubre reclamaciones presentadas hoy por trabajos realizados hace años. Sin esto, si dejas de pagar el seguro, los trabajos pasados quedan desprotegidos.</li>
      </ul>

      <h2 id="costes">Costes medios y límites de indemnización</h2>
      <p>La competencia en el sector de las <em>insurtech</em> ha estabilizado los precios. Para un desarrollador autónomo en España, estas son las referencias actuales:</p>

      <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 1.5rem; margin-top: 2rem;">
        <h4 style="margin-top: 0; color: #92400e;">📊 Precios y Capitales de Referencia (Estimados 2026):</h4>
        <ul style="margin-bottom: 0;">
          <li><strong>Capital de 150.000€:</strong> Desde 160€ - 190€/año. Recomendado para perfiles Junior o soporte web básico.</li>
          <li><strong>Capital de 300.000€:</strong> Desde 240€ - 280€/año. El estándar para Senior Freelance y consultoría IT.</li>
          <li><strong>Capital de 600.000€ o superior:</strong> Desde 450€/año. Obligatorio en contratos con Banca, Sector Salud o Infraestructuras.</li>
        </ul>
      </div>

      <h2>Conclusión</h2>
      <p>El seguro de Responsabilidad Civil no es un gasto, es un <strong>componente de tu stack de infraestructura</strong>, igual que tu hosting o tu entorno de CI/CD. En un mundo donde el código gestiona la vida económica de las empresas, trabajar sin red de seguridad es una temeridad que puede truncar tu carrera profesional ante el primer fallo crítico en producción.</p>
    `,
    sources: [
      { title: 'Guía técnica de la AEPD: Responsabilidad proactiva para desarrolladores', url: 'https://www.aepd.es/' }
    ]
  },
  // 24: Modelo 303
  {
    id: '24',
    slug: 'guia-rellenar-modelo-303-iva-autonomos-sin-gestoria-paso-a-paso',
    title: 'Guía para rellenar el Modelo 303 de IVA sin gestoría: Paso a paso 2026',
    metaDescription: 'Guía técnica exhaustiva para cumplimentar el Modelo 303. Análisis de inversión de sujeto pasivo para AWS/Google, operaciones intracomunitarias y liquidación de IVA para desarrolladores.',
    category: 'impuestos',
    publishDate: '2026-01-19',
    readTime: 11,
    featured: true,
    excerpt: '¿Quieres gestionar tu IVA como un profesional y ahorrar en gestoría? Desglosamos cada casilla del Modelo 303, desde las operaciones nacionales hasta el "hack" contable para facturas de AWS, Google y OpenAI.',
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=800&auto=format&fit=crop',
    imageAlt: 'Formulario de impuestos y calculadora financiera avanzada sobre escritorio de oficina',
    content: `
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
        <h3 style="margin-top: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b;">📋 Índice de la Guía Maestra de IVA</h3>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; list-style: none;">
          <li style="margin-bottom: 0.5rem;"><a href="#calendario" style="color: #3b82f6; text-decoration: none;">→ 1. Calendario Fiscal y Plazos de Presentación</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#iva-devengado" style="color: #3b82f6; text-decoration: none;">→ 2. IVA Devengado: Casillas de Ingresos Nacionales</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#intracomunitarias" style="color: #3b82f6; text-decoration: none;">→ 3. Operaciones Intracomunitarias y el ROI</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#iva-deducible" style="color: #3b82f6; text-decoration: none;">→ 4. IVA Deducible: Gastos y Bienes de Inversión</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#sujeto-pasivo" style="color: #3b82f6; text-decoration: none;">→ 5. Inversión del Sujeto Pasivo: Facturas de AWS, Google y USA</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#resultado" style="color: #3b82f6; text-decoration: none;">→ 6. Liquidación: Compensar vs. Devolver</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="#sanciones" style="color: #3b82f6; text-decoration: none;">→ 7. Régimen Sancionador: Errores que no debes cometer</a></li>
        </ul>
      </div>

      <h2 id="calendario">1. Calendario Fiscal y Plazos de Presentación</h2>
      <p>El Modelo 303 no es opcional. Incluso si no has facturado nada en el trimestre, estás obligado a presentar una declaración "sin actividad" (marcando la casilla correspondiente). En 2026, el sistema se ha vuelto más estricto con la puntualidad. Los plazos son:</p>
      <ul>
        <li><strong>Trimestres 1, 2 y 3:</strong> Se presentan los primeros 20 días de abril, julio y octubre.</li>
        <li><strong>Trimestre 4 (Resumen Anual):</strong> Tienes hasta el 30 de enero del año siguiente. Este trimestre es vital porque se presenta junto al Modelo 390 (resumen anual informativo).</li>
      </ul>
      <p><strong>Truco para la domiciliación:</strong> Si quieres que Hacienda te lo cobre automáticamente de tu cuenta el día 20, debes presentar el modelo antes del día 15 de cada mes de presentación. Si vas tarde, tendrás que obtener un NRC bancario manualmente.</p>

      <h2 id="iva-devengado">2. IVA Devengado: Las facturas que has emitido en España</h2>
      <p>Aquí declaras el IVA que has cobrado. La mayoría de desarrolladores freelance aplican el tipo general del 21%. Debes sumar todas las bases imponibles de tus facturas nacionales (clientes en España).</p>
      <p><strong>Importante:</strong> Se declara por la <strong>fecha de emisión de la factura</strong>, no por la fecha de cobro (salvo que estés acogido al Régimen Especial de Criterio de Caja). Si emitiste una factura de 2.000€ el 30 de marzo y la cobras en mayo, ese IVA de 420€ debes pagarlo en la declaración de abril.</p>

      <h2 id="intracomunitarias">3. Operaciones Intracomunitarias y el ROI</h2>
      <p>Si eres desarrollador, es muy común trabajar para empresas en otros países de la UE (Alemania, Irlanda, Francia). Para no cobrarles IVA, ambos debéis estar inscritos en el <strong>ROI (Registro de Operadores Intracomunitarios)</strong>.</p>
      <ul>
        <li><strong>Si estás en el ROI:</strong> Emites la factura sin IVA. Esta operación no va en las casillas de "IVA Devengado", sino en la casilla 59 (Entregas intracomunitarias de bienes y servicios).</li>
        <li><strong>Si NO estás en el ROI:</strong> Debes cobrarles el 21% de IVA español como si fueran un cliente de Madrid, y declararlo en la casilla 01.</li>
      </ul>

      <h2 id="iva-deducible">4. IVA Deducible: Optimizando tus gastos profesionales</h2>
      <p>No todo lo que pagas es deducible. Para Hacienda, un gasto es deducible en el Modelo 303 solo si es <strong>imprescindible</strong> para tu actividad y tienes una factura completa. No sirven los recibos si no tienen tu NIF y dirección de autónomo.</p>
      
      <h3>Gastos Corrientes (Casillas 28 y 29)</h3>
      <p>Aquí incluyes los suministros, hosting, dominios y herramientas SaaS. Recuerda: si el gasto es compartido (como el internet de casa), solo puedes deducir la parte proporcional afecta a la actividad (generalmente el 30% del IVA si tienes despacho declarado).</p>

      <h2 id="sujeto-pasivo">5. Inversión del Sujeto Pasivo: El "hack" para servicios como AWS, Google o Apple</h2>
      <p>Como desarrollador, es prácticamente imposible no trabajar con proveedores extranjeros. Si pagas servicios a <strong>Google Cloud, Amazon Web Services (AWS), GitHub, Slack o Adobe</strong>, estarás recibiendo facturas sin IVA porque estas empresas facturan desde sedes como Irlanda o Luxemburgo.</p>
      
      <p>Aquí es donde entra la <strong>Inversión del Sujeto Pasivo</strong>. Es un mecanismo por el cual el "sujeto pasivo" (el que paga el IVA) dejas de ser el vendedor para pasar a serlo el comprador (tú). Técnicamente es una operación de "suma cero" que debes reflejar así:</p>

      <h3>A. El proceso de autorrepercusión (Casillas 10 y 11)</h3>
      <p>Debes decirle a Hacienda que has comprado un servicio en el extranjero y que tú eres el responsable de ese IVA. 
      <ul>
        <li><strong>Casilla 10:</strong> Suma la base imponible de todas esas facturas de Google, AWS, etc.</li>
        <li><strong>Casilla 11:</strong> Escribe el 21% de esa suma.</li>
      </ul>

      <h3>B. El proceso de deducción (Casillas 36 y 37)</h3>
      <p>Para que la operación sea neutra y no pierdas dinero, ahora debes deducirte ese mismo importe como gasto profesional:
      <ul>
        <li><strong>Casilla 36:</strong> Repite la base imponible que pusiste en la casilla 10.</li>
        <li><strong>Casilla 37:</strong> Repite el importe de IVA que calculaste en la casilla 11.</li>
      </ul>

      <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0; border-left: 4px solid #0f172a;">
        <h4 style="margin-top: 0;">💻 Ejemplo real para un Desarrollador:</h4>
        <p>Has pagado 100€ a AWS y 50€ a GitHub. Total: 150€.</p>
        <ol>
          <li>En la <strong>casilla 10</strong> pones 150€ y en la <strong>11</strong> pones 31,50€.</li>
          <li>En la <strong>casilla 36</strong> pones 150€ y en la <strong>37</strong> pones 31,50€.</li>
          <li><strong>Resultado:</strong> 31,50€ - 31,50€ = <strong>0€</strong>.</li>
        </ol>
      </div>

      <h3>C. ¿Qué pasa si el proveedor es de fuera de la UE (USA)?</h3>
      <p>Si usas servicios como <strong>OpenAI (ChatGPT)</strong> con sede en Estados Unidos, la operación se trata como una <strong>importación de servicios</strong>. El mecanismo en el Modelo 303 es idéntico: debes autorrepercuitir y deducir simultáneamente para que el efecto sea nulo. Es vital que estas facturas estén bien registradas en tu libro de gastos para justificar por qué no pagaste IVA en su momento.</p>

      <h2 id="resultado">6. Liquidación: Compensar vs. Devolver</h2>
      <p>Al llegar al final del modelo, verás el resultado en la casilla 71:</p>
      <ul>
        <li><strong>Resultado Positivo:</strong> Es dinero que le debes a la AEAT. Puedes pagarlo mediante domiciliación bancaria o mediante pago con tarjeta en la misma sede.</li>
        <li><strong>Resultado Negativo (A Compensar):</strong> Si has pagado más IVA del que has cobrado, Hacienda se guarda ese dinero para restarlo de futuras deudas en los siguientes trimestres.</li>
        <li><strong>Solicitud de Devolución:</strong> Solo se puede pedir el ingreso del dinero en tu cuenta bancaria en la declaración del 4º Trimestre (enero).</li>
      </ul>

      <h2 id="sanciones">7. Régimen Sancionador: Errores que no debes cometer</h2>
      <p>Hacienda tiene potentes algoritmos para detectar incoherencias. Los errores más graves son:</p>
      <ol>
        <li><strong>Presentación fuera de plazo:</strong> La sanción mínima es de 200€, incluso si el resultado era negativo.</li>
        <li><strong>Deducción indebida:</strong> Meter gastos personales se considera infracción grave. Hacienda puede reclamarte el IVA devuelto más una sanción del 50% al 150% del importe.</li>
        <li><strong>No presentar el Modelo 349:</strong> Si haces operaciones intracomunitarias (casilla 59), estás obligado a presentar el Modelo 349.</li>
      </ol>

      <div style="background: #eff6ff; border-left: 4px solid #1d4ed8; padding: 1.5rem; margin-top: 2rem;">
        <h4 style="margin-top: 0; color: #1e3a8a;">💡 Conclusión para el desarrollador "DIY"</h4>
        <p style="margin-bottom: 0;">Llevar tú mismo el IVA te da una visión real de la salud de tu negocio. Si eres ordenado con tus facturas, rellenar el Modelo 303 no te llevará más de 30 minutos al trimestre, ahorrándote costes significativos de gestoría.</p>
      </div>
    `,
    sources: [
      { title: 'BOE: Reglamento del Impuesto sobre el Valor Añadido', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28741' }
    ]
}
];

export const categories = {
  'seguridad-social': { label: 'Seguridad Social', color: 'bg-blue-100 text-blue-900 dark:bg-blue-500/20 dark:text-blue-400 font-semibold' },
  impuestos: { label: 'Impuestos', color: 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-400 font-semibold' },
  internacional: { label: 'Internacional', color: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-500/20 dark:text-cyan-400 font-semibold' },
  gastos: { label: 'Gastos', color: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-400 font-semibold' },
  cotizacion: { label: 'Cotización', color: 'bg-violet-100 text-violet-900 dark:bg-violet-500/20 dark:text-violet-400 font-semibold' },
  fiscalidad: { label: 'Fiscalidad', color: 'bg-purple-100 text-purple-900 dark:bg-purple-500/20 dark:text-purple-400 font-semibold' },
  gestion: { label: 'Gestión', color: 'bg-green-100 text-green-900 dark:bg-green-500/20 dark:text-green-400 font-semibold' }
};

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}

// Función auxiliar para barajar (shuffle) un array de forma aleatoria
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRelatedPosts(currentSlug: string, category: string): BlogPost[] {
  // Primero intentamos encontrar posts de la misma categoría (excluyendo el actual)
  const sameCategoryPosts = posts.filter(
    post => post.slug !== currentSlug && post.category === category
  );
  
  // Barajamos aleatoriamente los posts de la misma categoría
  const shuffledSameCategory = shuffleArray(sameCategoryPosts);
  
  // Si hay suficientes posts de la misma categoría, devolvemos 2 aleatorios
  if (shuffledSameCategory.length >= 2) {
    return shuffledSameCategory.slice(0, 2);
  }
  
  // Si no hay suficientes, completamos con posts aleatorios de otras categorías
  const otherPosts = posts.filter(post => post.slug !== currentSlug && post.category !== category);
  const shuffledOtherPosts = shuffleArray(otherPosts);
  
  // Combinamos los posts de la misma categoría con otros posts hasta tener 2
  const relatedPosts = [...shuffledSameCategory, ...shuffledOtherPosts].slice(0, 2);
  
  return relatedPosts;
}
