import { Layout } from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, Rocket, Target, TrendingUp, Sparkles } from 'lucide-react';
import { posts } from '@/data/posts';

const Roadmap = () => {
  // Organizar posts por niveles
  const roadmapLevels = [
    {
      level: 1,
      title: 'Setup Inicial',
      description: 'Primeros pasos como freelance',
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
      icon: Rocket,
        posts: posts.filter(p => [
          '4', // Alta freelance
          '5', // Tramos 2026
          '7', // Modelo 130
          '18', // Nómada digital (setup fiscal internacional)
          '22', // Nuevo post relevante para setup inicial
        ].includes(p.id)),
    },
    {
      level: 2,
      title: 'Facturación y Compliance',
      description: 'Gestión de clientes y facturas',
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
      icon: Target,
        posts: posts.filter(p => [
          '1', // IVA internacional
          '8', // Factura legal
          '10', // VIES/ROI
          '13', // Factura Electrónica
          '21', // Contratar primer empleado
          '23', // Nuevo post relevante para facturación
        ].includes(p.id)),
    },
    {
      level: 3,
      title: 'Optimización Fiscal',
      description: 'Maximiza deducciones y ahorro',
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
      icon: TrendingUp,
        posts: posts.filter(p => [
          '2', // Gastos deducibles
          '3', // Amortización
          '9', // Teletrabajo
          '11', // Tramos ahorro SS
          '12', // IA en gestión fiscal
          '15', // Ley Startups
          '20', // Planes de pensiones
          '24', // Nuevo post relevante para optimización fiscal
        ].includes(p.id)),
    },
    {
      level: 4,
      title: 'Estrategia y Escalado',
      description: 'Crecer como profesional',
      color: 'from-violet-500 to-purple-500',
      borderColor: 'border-violet-500',
      bgColor: 'bg-violet-50 dark:bg-violet-950/20',
      icon: Sparkles,
        posts: posts.filter(p => [
          '6', // Autónomo vs SL
          '14', // Criptomonedas
          '16', // Pluriactividad
          '17', // Baja médica autónomos
          '19', // Cese de actividad (paro autónomos)
          '25', // Nuevo post relevante para estrategia y escalado
        ].includes(p.id)),
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Roadmap Fiscal - DevFreelance España</title>
        <meta 
          name="description" 
          content="Ruta de aprendizaje completa para dominar la fiscalidad como desarrollador autónomo en España. 4 niveles desde el alta hasta la optimización avanzada." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header con espacio para anuncio superior */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold mb-4">
              🗺️ Ruta de Aprendizaje
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Tu Roadmap Fiscal 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Una ruta de aprendizaje estructurada en <strong>4 niveles</strong> para dominar la fiscalidad 
              como desarrollador freelance en España. Desde el alta hasta la optimización avanzada.
            </p>
          </div>
        </div>

        {/* Timeline con espacios para anuncios */}
        <div className="space-y-12">
          {roadmapLevels.map((level, index) => {
            const Icon = level.icon;
            
            return (
              <div key={level.level}>
                {/* Level Card */}
                <div className={`rounded-2xl border-2 ${level.borderColor} ${level.bgColor} p-6 md:p-8 shadow-lg`}>
                  {/* Level Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    {/* Level Number Badge con icono */}
                    <div className="flex items-center gap-4">
                      <div className={`
                        flex-shrink-0 w-16 h-16 rounded-2xl 
                        bg-gradient-to-br ${level.color}
                        flex items-center justify-center
                        text-white font-bold text-2xl
                        shadow-xl
                        relative
                      `}>
                        {level.level}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-md">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>

                      {/* Level Title */}
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                          {level.title}
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg">
                          {level.description}
                        </p>
                      </div>
                    </div>

                    {/* Progreso badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border shadow-sm">
                      <span className="text-sm font-medium">{level.posts.length} artículos</span>
                    </div>
                  </div>

                  {/* Posts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {level.posts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <div className={`
                          h-full p-6 rounded-xl 
                          bg-background
                          border-2 border-border
                          hover:border-accent
                          transition-all duration-300
                          hover:scale-105 hover:shadow-xl
                        `}>
                          {/* Post Header */}
                          <div className="flex items-center gap-3 mb-4">
                            <CheckCircle2 className={`w-5 h-5 text-transparent bg-gradient-to-br ${level.color} bg-clip-text`} />
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              Artículo {post.id}
                            </span>
                          </div>

                          {/* Post Title */}
                          <h3 className="font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-3 text-lg">
                            {post.title.split(':')[0]}
                          </h3>

                          {/* Post Meta */}
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{post.readTime} min lectura</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-br ${level.color} text-white`}>
                              Nivel {level.level}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final con anuncio lateral */}
        <div className="mt-16 grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-200 dark:border-cyan-800 rounded-2xl p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              ¿Listo para empezar?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Sigue el roadmap paso a paso y dominarás la fiscalidad de autónomos en España. 
              Cada nivel se construye sobre el anterior para un aprendizaje progresivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
              >
                📚 Ver todos los artículos
              </Link>
              <Link
                to="/calculadora"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-xl font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/20 transition-all hover:scale-105"
              >
                🧮 Calculadora de cuota
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
