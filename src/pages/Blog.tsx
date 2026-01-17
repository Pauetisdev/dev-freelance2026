import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { PostCard } from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { posts, categories } from '@/data/posts';

type CategoryFilter = 'all' | keyof typeof categories;

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  // Solo mostrar categorías que tengan al menos un post
  const usedCategoryKeys = Array.from(new Set(posts.map(post => post.category)));
  const filters: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'Todos' },
    ...usedCategoryKeys.map(key => ({
      key: key as CategoryFilter,
      label: categories[key]?.label || key
    }))
  ];

  return (
    <Layout>
      <article className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl">
              Guías prácticas sobre fiscalidad, impuestos y gestión para desarrolladores freelance en España.
            </p>
          </header>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map(filter => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.key)}
                className={activeFilter === filter.key ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No hay artículos en esta categoría.
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default Blog;
