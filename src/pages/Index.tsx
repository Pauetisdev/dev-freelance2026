import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingUp, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { PostCard } from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { posts } from '@/data/posts';

const Index = () => {
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DevFreelance España",
            "url": "https://devfreelance.es",
            "description": "Guías prácticas de impuestos, cotización y gastos deducibles para desarrolladores freelance en España. Calculadora de neto, tramos 2026 y más.",
            "author": {
              "@type": "Organization",
              "name": "TechFiscal Solutions",
              "email": "info.devfreelance2026@gmail.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DevFreelance España",
              "logo": {
                "@type": "ImageObject",
                "url": "https://devfreelance.es/favicon.svg"
              }
            },
            "inLanguage": "es-ES"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Domina tu <span className="text-gradient">fiscalidad</span> como{' '}
              <span className="text-gradient">Developer Freelance</span> en 2026
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Guías prácticas sobre impuestos, cotización y gastos deducibles para programadores autónomos en España. Sin jerga, solo lo que necesitas saber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculadora">
                <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Calculator className="w-5 h-5" />
                  Calcular mi neto
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="gap-2">
                  Ver guías
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {/* Card 1 - Tramos 2026 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-card via-card to-cyan-950/5 dark:to-cyan-500/5 border-2 border-border group-hover:border-cyan-500/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="mb-4">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all group-hover:scale-110">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Tramos 2026
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nuevas cuotas de autónomo actualizadas y simulador de ingresos
                </p>
              </div>
            </div>

            {/* Card 2 - Calculadora */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-card via-card to-emerald-950/5 dark:to-emerald-500/5 border-2 border-border group-hover:border-emerald-500/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="mb-4">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/50 group-hover:shadow-emerald-500/80 transition-all group-hover:scale-110 group-hover:rotate-6">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Calculadora
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Calcula tu neto real en segundos con IRPF y Seguridad Social
                </p>
              </div>
            </div>

            {/* Card 3 - Fuentes oficiales */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-card via-card to-violet-950/5 dark:to-violet-500/5 border-2 border-border group-hover:border-violet-500/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="mb-4">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/50 group-hover:shadow-violet-500/80 transition-all group-hover:scale-110">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Fuentes oficiales
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Toda la info verificada con BOE, AEAT y Seguridad Social
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Artículos destacados</h2>
            <Link to="/blog">
              <Button variant="ghost" className="gap-1 text-accent">
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
