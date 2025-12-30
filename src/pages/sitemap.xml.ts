import type { APIRoute } from 'astro';

const siteUrl = 'https://szegedikeringo.vercel.app';

// Define all pages with their priorities and change frequencies
const pages = [
  // Hungarian pages
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/a-tenyesztorol', priority: 0.8, changefreq: 'monthly' },
  { url: '/a-fajtarol', priority: 0.8, changefreq: 'monthly' },
  { url: '/galeria', priority: 0.7, changefreq: 'weekly' },
  { url: '/kapcsolat', priority: 0.6, changefreq: 'monthly' },

  // English pages
  { url: '/en/', priority: 0.9, changefreq: 'weekly' },
  { url: '/en/about-the-breeder', priority: 0.8, changefreq: 'monthly' },
  { url: '/en/about-the-breed', priority: 0.8, changefreq: 'monthly' },
  { url: '/en/gallery', priority: 0.7, changefreq: 'weekly' },
  { url: '/en/contact', priority: 0.6, changefreq: 'monthly' },

  // German pages
  { url: '/de/', priority: 0.9, changefreq: 'weekly' },
  { url: '/de/uber-den-zuchter', priority: 0.8, changefreq: 'monthly' },
  { url: '/de/uber-die-rasse', priority: 0.8, changefreq: 'monthly' },
  { url: '/de/galerie', priority: 0.7, changefreq: 'weekly' },
  { url: '/de/kontakt', priority: 0.6, changefreq: 'monthly' },

  // Serbian pages
  { url: '/sr/', priority: 0.9, changefreq: 'weekly' },
  { url: '/sr/o-uzgajivaciju', priority: 0.8, changefreq: 'monthly' },
  { url: '/sr/o-rasi', priority: 0.8, changefreq: 'monthly' },
  { url: '/sr/galerija', priority: 0.7, changefreq: 'weekly' },
  { url: '/sr/kontakt', priority: 0.6, changefreq: 'monthly' },

  // Romanian pages
  { url: '/ro/', priority: 0.9, changefreq: 'weekly' },
  { url: '/ro/despre-crescator', priority: 0.8, changefreq: 'monthly' },
  { url: '/ro/despre-rasa', priority: 0.8, changefreq: 'monthly' },
  { url: '/ro/galerie', priority: 0.7, changefreq: 'weekly' },
  { url: '/ro/contact', priority: 0.6, changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
