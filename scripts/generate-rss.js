// Script para generar RSS Feed para la newsletter automática
const fs = require('fs');
const path = require('path');

const postsFile = path.join(__dirname, '../src/data/posts.ts');
const publicDir = path.join(__dirname, '../public');
const rssFile = path.join(publicDir, 'rss.xml');

const BASE_URL = 'https://devfreelance.es';
const SITE_NAME = 'DevFreelance Spain 2026';
const SITE_DESCRIPTION = 'Guía fiscal y legal para desarrolladores autónomos en España';

// Extrae los posts del archivo TypeScript
function extractPosts(fileContent) {
  const postsArray = [];
  const regex = /{\s*id:\s*'(\d+)',\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)',\s*metaDescription:\s*'([^']+)',[\s\S]*?publishDate:\s*'([^']+)',[\s\S]*?excerpt:\s*'([^']+)',/g;
  
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    const [, id, slug, title, metaDescription, publishDate, excerpt] = match;
    postsArray.push({
      id,
      slug,
      title: escapeXml(title),
      description: escapeXml(excerpt || metaDescription),
      publishDate,
      link: `${BASE_URL}/blog/${slug}`
    });
  }
  
  return postsArray;
}

// Escapa caracteres especiales XML
function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Convierte fecha a RFC-822 (formato RSS)
function toRFC822(dateString) {
  const date = new Date(dateString);
  return date.toUTCString();
}

// Genera el XML del RSS Feed
function generateRSS(posts) {
  // Ordena posts por fecha (más recientes primero)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.publishDate) - new Date(a.publishDate)
  );
  
  // Limita a los últimos 20 posts
  const recentPosts = sortedPosts.slice(0, 20);
  
  const items = recentPosts.map(post => `
    <item>
      <title>${post.title}</title>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.link}</guid>
      <description>${post.description}</description>
      <pubDate>${toRFC822(post.publishDate)}</pubDate>
    </item>`).join('');

  const lastBuildDate = recentPosts.length > 0 
    ? toRFC822(recentPosts[0].publishDate) 
    : new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${BASE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>es</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

// Función principal
function main() {
  try {
    console.log('📰 Generando RSS Feed...');
    
    // Lee el archivo de posts
    const fileContent = fs.readFileSync(postsFile, 'utf-8');
    const posts = extractPosts(fileContent);
    
    console.log(`✅ ${posts.length} posts encontrados`);
    
    // Genera el RSS XML
    const rssXml = generateRSS(posts);
    
    // Asegura que existe el directorio public
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Escribe el archivo RSS
    fs.writeFileSync(rssFile, rssXml, 'utf-8');
    
    console.log(`✅ RSS Feed generado: ${rssFile}`);
    console.log(`📍 URL pública: ${BASE_URL}/rss.xml`);
  } catch (error) {
    console.error('❌ Error generando RSS:', error.message);
    process.exit(1);
  }
}

main();
