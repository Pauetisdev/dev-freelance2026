// Script para generar sitemap.xml dinámicamente a partir de los posts y páginas principales
const fs = require('fs');
const path = require('path');

// Importa los posts desde el archivo TypeScript
const postsFile = path.join(__dirname, '../src/data/posts.ts');
const publicDir = path.join(__dirname, '../public');
const sitemapFile = path.join(publicDir, 'sitemap.xml');

// Dominio principal (ajusta si es necesario)
const BASE_URL = 'https://devfreelance.es';

// Páginas principales (ajusta si añades más)
const staticPages = [
  '/',
  '/blog',
  '/calculadora',
  '/roadmap',
  '/sobre-mi',
  '/contacto',
  '/aviso-legal',
  '/politica-privacidad',
  '/cookies',
];

// Extrae los slugs de los posts desde el archivo TypeScript
function extractPosts(fileContent) {
  const regex = /slug:\s*'([^']+)'/g;
  const slugs = [];
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function buildSitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    urls
      .map(
        (url) => `  <url>\n    <loc>${BASE_URL}${url.path}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
      )
      .join('\n')
  }\n</urlset>`;
}

function main() {
  const postsContent = fs.readFileSync(postsFile, 'utf-8');
  const postSlugs = extractPosts(postsContent);

  const today = getToday();

  // URLs de páginas principales
  const urls = staticPages.map((page, i) => ({
    path: page,
    lastmod: today,
    changefreq: i < 2 ? 'daily' : 'monthly',
    priority: i === 0 ? '1.0' : i === 1 ? '0.9' : '0.7',
  }));

  // URLs de posts
  postSlugs.forEach((slug) => {
    urls.push({
      path: `/blog/${slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.6',
    });
  });

  const sitemap = buildSitemap(urls);
  fs.writeFileSync(sitemapFile, sitemap, 'utf-8');
  console.log('✅ Sitemap.xml generado correctamente con', urls.length, 'URLs.');
}

main();
