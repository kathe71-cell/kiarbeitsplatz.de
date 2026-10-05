import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.kiarbeitsplatz.de';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const abs = (p) => path.resolve(__dirname, p);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const template = fs.readFileSync(abs('dist/index.html'), 'utf-8');
const { render, routes } = await import('./dist-ssr/entry-server.js');

function page(url, title, desc, robots = 'index, follow') {
  const { html } = render(url);
  const full = `${SITE}${url}`;
  return template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace(/(<meta name="robots" content=")[^"]*(")/, `$1${robots}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${full}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${full}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`);
}

for (const r of routes) {
  const file = r.url === '/' ? 'dist/index.html' : `dist${r.url}/index.html`;
  fs.mkdirSync(path.dirname(abs(file)), { recursive: true });
  fs.writeFileSync(abs(file), page(r.url, r.title, r.desc), 'utf-8');
  console.log(`  ✓ ${r.url}`);
}
fs.writeFileSync(abs('dist/404.html'), page('/404', 'Seite nicht gefunden | kiarbeitsplatz.de', 'Die angeforderte Seite wurde nicht gefunden.', 'noindex, nofollow'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((r) => `  <url><loc>${SITE}${r.url}</loc><lastmod>${today}</lastmod><priority>${r.priority}</priority></url>`)
  .join('\n')}\n</urlset>\n`;
fs.writeFileSync(abs('dist/sitemap.xml'), sitemap);

const llms = `# kiarbeitsplatz.de\n\n> Ratgeber zu künstlicher Intelligenz am Arbeitsplatz in Deutschland: KI-Verordnung (AI Act), Mitbestimmung des Betriebsrats, Datenschutz, Rechte von Beschäftigten und praktische Einführung von KI. Keine Werbung, keine Partnerlinks.\n\n## Seiten\n\n${routes
  .filter((r) => !['/impressum', '/datenschutz'].includes(r.url))
  .map((r) => `- [${r.title.replace(' | kiarbeitsplatz.de', '')}](${SITE}${r.url}): ${r.desc}`)
  .join('\n')}\n`;
fs.writeFileSync(abs('dist/llms.txt'), llms);
console.log(`Prerendering fertig: ${routes.length} Seiten, sitemap.xml, llms.txt`);
