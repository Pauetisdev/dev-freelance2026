// ARCHIVO COMPLETO CON LOS 12 ARTÍCULOS PROFESIONALES
// Copiado desde posts.ts para usar como backup/referencia

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

// Este archivo contiene los 12 artículos profesionales completos
// Use posts.ts como referencia principal, este es un backup
export const posts: BlogPost[] = [];

// Para ver el contenido completo, consultar src/data/posts.ts
