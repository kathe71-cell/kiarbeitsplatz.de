# kiarbeitsplatz.de

KI-Arbeitsplätze: Berufe in der künstlichen Intelligenz, Gehälter, Einstieg und Wandel des Arbeitsmarkts. Reine Inhaltsseite ohne Werbung und ohne Partnerlinks.

Vite 8 + React 19 + Tailwind 4, statisch vorgerendert (`prerender.js`), Hosting auf Vercel (Team jens-projects2, Push auf `main` baut automatisch).

## Inhalte pflegen
- Berufsbilder inkl. Gehaltsspannen: `src/data/berufe.ts` (neuer Eintrag = neue Seite, Route, Sitemap)
- Ratgeber (Einstieg, Arbeitsmarkt): `src/data/ratgeber.ts`
- Design-Tokens (Farben, Schriften): `src/index.css`

## Befehle
- `npm run dev` – Entwicklung
- `npm run build` – Typprüfung, Build, Prerendering inkl. `sitemap.xml` und `llms.txt`
