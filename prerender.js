import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://kiarbeitsplatz.de';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const abs = (p) => path.resolve(__dirname, p);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const template = fs.readFileSync(abs('dist/index.html'), 'utf-8');
const { render, routes, berufe, ratgeber } = await import('./dist-ssr/entry-server.js');

function page(url, title, desc, robots = 'index, follow') {
  const { html } = render(url);
  const full = `${SITE}${url}`;
  return template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace(/(<meta name="robots" content=")[^"]*(")/, `$1${robots}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${full}$2`)
    .replace(/(<link rel="alternate" hreflang="de" href=")[^"]*(")/, `$1${full}$2`)
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
fs.writeFileSync(abs('dist/404.html'), page('/404', 'Seite nicht gefunden | KI-Arbeitsplatz', 'Die angeforderte Seite wurde nicht gefunden.', 'noindex, nofollow'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((r) => `  <url><loc>${SITE}${r.url}</loc><lastmod>${today}</lastmod><priority>${r.priority}</priority></url>`)
  .join('\n')}\n</urlset>\n`;
fs.writeFileSync(abs('dist/sitemap.xml'), sitemap);

const pageList = routes.filter((r) => !['/impressum', '/datenschutz'].includes(r.url))
  .map((r) => `- [${r.title.replace(' | KI-Arbeitsplatz', '')}](${SITE}${r.url}): ${r.desc}`).join('\n');
const berufFakten = berufe.map((b) => [
  `### ${b.name}`,
  `- Arbeitsfeld: ${b.feld}`,
  `- Kurz: ${b.kurz}`,
  `- Bruttojahresgehalt (Orientierung, Deutschland): ${b.gehalt[0]}.000 bis ${b.gehalt[1]}.000 Euro`,
  `- Aufgaben: ${b.aufgaben.join('; ')}`,
  `- Voraussetzungen: ${b.profil.join('; ')}`,
  `- Einstieg: ${b.wege}`,
  `- Seite: ${SITE}/berufe/${b.slug}`,
].join('\n')).join('\n\n');
const llms = `# KI-Arbeitsplatz (kiarbeitsplatz.de)

> Redaktionelles Portal zu Arbeitsplätzen in der künstlichen Intelligenz in Deutschland: Berufsbilder, Gehaltsspannen, Wege in den Job und Wandel des Arbeitsmarkts. Keine Werbung, keine Partnerlinks. Stand: Oktober 2026.

## Seiten

${pageList}

## Berufe im Überblick

${berufFakten}

## Wichtige Fakten

- Gehaltsangaben sind redaktionelle Orientierungswerte (Bruttojahresgehalt, ohne Führungsverantwortung); Region, Branche und Tarifbindung verursachen große Unterschiede. Amtlicher Abgleich: Entgeltatlas der Bundesagentur für Arbeit.
- Geförderte Weiterbildung: Bildungsgutschein (§ 81 SGB III) für Arbeitsuchende, Beschäftigtenförderung nach § 82 SGB III; Kurse müssen nach AZAV zugelassen sein.
- Bildungsurlaub: in den meisten Bundesländern meist fünf Tage pro Jahr; Bayern und Sachsen haben kein entsprechendes Gesetz.
- Einschätzung der Automatisierbarkeit einzelner Berufe: Job-Futuromat des IAB (Substituierbarkeitspotenzial).
- Die Pflicht zur KI-Kompetenz nach Art. 4 EU-KI-Verordnung gilt seit 2. Februar 2025 und erhöht den Bedarf an Schulung und Governance.

## Betreiber

- Name: Jens Kathe
- Anschrift: Hansastraße 6, 34119 Kassel, Deutschland
- E-Mail: jens@kathe.org
`;
fs.writeFileSync(abs('dist/llms.txt'), llms);

const rfc = new Date().toUTCString();
const items = [...berufe.map((b) => ({ t: b.metaTitle, u: `/berufe/${b.slug}`, d: b.metaDesc })), ...ratgeber.map((r) => ({ t: r.metaTitle, u: `/${r.slug}`, d: r.metaDesc }))];
const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>KI-Arbeitsplatz</title>
    <link>${SITE}/</link>
    <description>Berufe, Gehälter und Wege in die künstliche Intelligenz.</description>
    <language>de-de</language>
    <lastBuildDate>${rfc}</lastBuildDate>
${items.map((i) => `    <item><title>${esc(i.t)}</title><link>${SITE}${i.u}</link><guid>${SITE}${i.u}</guid><description>${esc(i.d)}</description><pubDate>${rfc}</pubDate></item>`).join('\n')}
  </channel>
</rss>
`;
fs.writeFileSync(abs('dist/feed.xml'), feed);
console.log(`Prerendering fertig: ${routes.length} Seiten, sitemap.xml, llms.txt (${llms.split('\n').length} Zeilen), feed.xml`);
