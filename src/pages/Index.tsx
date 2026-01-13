import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingUp, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { PostCard } from '@/components/PostCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Tramos 2026</h3>
                <p className="text-sm text-muted-foreground">
                  Nuevas cuotas de autónomo actualizadas
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Calculator className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Calculadora</h3>
                <p className="text-sm text-muted-foreground">
                  Estima tu neto real en segundos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Fuentes oficiales</h3>
                <p className="text-sm text-muted-foreground">
                  Info verificada con BOE y AEAT
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

      {/* AdSense Placeholder */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <AdPlaceholder size="728x90" />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
