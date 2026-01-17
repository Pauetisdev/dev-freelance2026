import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PostCard } from '@/components/PostCard';
import { Badge } from '@/components/ui/badge';
import { getPostBySlug, getRelatedPosts, categories } from '@/data/posts';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const post = slug ? getPostBySlug(slug) : undefined;

  // Manejar scroll a secciones con anchor links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Pequeño delay para asegurar que el contenido está renderizado
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100; // Espacio para el header fijo
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-accent hover:underline">
            ← Volver al blog
          </Link>
        </div>
      </Layout>
    );
  }

  const category = categories[post.category];
  const relatedPosts = getRelatedPosts(post.slug, post.category);

  const formattedDate = new Date(post.publishDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | FreelanceDev Fiscalidad</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://freelancedev.es/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.metaDescription,
            "image": post.image,
            "datePublished": post.publishDate,
            "dateModified": post.updatedDate || post.publishDate,
            "author": {
              "@type": "Organization",
              "name": "FreelanceDev"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FreelanceDev",
              "logo": {
                "@type": "ImageObject",
                "url": "https://freelancedev.es/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <article className="py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Blog', path: '/blog' },
              { label: post.title }
            ]} 
          />

          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <div>
              {/* Header */}
              <header className="mb-8">
                <Badge variant="secondary" className={`${category.color} mb-4`}>
                  {category.label}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min de lectura
                  </span>
                </div>

                {/* Featured Image */}
                <div className="aspect-video rounded-xl overflow-hidden mb-8">
                  <img 
                    src={post.image} 
                    alt={post.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </header>

              {/* Content */}
              <div 
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sources */}
              {post.sources.length > 0 && (
                <section className="mt-12 p-6 bg-card rounded-xl border border-border">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    📚 Fuentes Oficiales
                  </h2>
                  <ul className="space-y-2">
                    {post.sources.map((source) => (
                      <li key={source.url}>
                        <a 
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline flex items-center gap-2"
                        >
                          {source.title}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>

          {/* Related Posts - Full Width */}
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <PostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
