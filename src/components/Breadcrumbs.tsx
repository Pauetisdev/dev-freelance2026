import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Home className="w-3 h-3" />
            <span>Inicio</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="w-3 h-3" />
            {item.path ? (
              <Link 
                to={item.path} 
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
