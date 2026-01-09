import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost, categories } from '@/data/posts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const category = categories[post.category];
  
  const formattedDate = new Date(post.publishDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="h-full transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 group overflow-hidden">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className={category.color}>
              {category.label}
            </Badge>
            {post.featured && (
              <Badge variant="outline" className="text-accent border-accent/50">
                Destacado
              </Badge>
            )}
          </div>
          <h3 className="font-semibold text-lg leading-tight group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
