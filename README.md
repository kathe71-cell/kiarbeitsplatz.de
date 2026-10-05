# kiarbeitsplatz.de

Ratgeber zu KI am Arbeitsplatz (KI-Verordnung, Betriebsrat, Datenschutz, Praxis). Reine Inhaltsseite ohne Werbung und ohne Partnerlinks.

Vite 8 + React 19 + Tailwind 4, statisch vorgerendert (`prerender.js`), Hosting auf Vercel.

## Befehle
- `npm run dev` – Entwicklung
- `npm run build` – Typprüfung, Client- und SSR-Build, Prerendering inkl. `sitemap.xml` und `llms.txt`

## Inhalte pflegen
- Ratgeberbeiträge: `src/data/articles.ts` (neuer Eintrag = neue Seite, Route, Sitemap und Footer-Link automatisch)
- KI-Check-Fragen: `src/data/check.ts`
- Richtlinien-Generator: `src/pages/RichtliniePage.tsx`
- Rechtsstand je Beitrag über `updated` pflegen
