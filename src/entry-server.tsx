import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes, Layout } from './App';
import { articles } from './data/articles';

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <Layout>
        <AppRoutes />
      </Layout>
    </StaticRouter>
  );
  return { html };
}

export const routes = [
  { url: '/', title: 'KI am Arbeitsplatz: Regeln, Rechte & Praxis | kiarbeitsplatz.de', desc: 'KI-Verordnung, Betriebsrat, Datenschutz und Praxis: Was beim Einsatz von KI im Job gilt. Mit KI-Check und Generator für eine KI-Richtlinie.', priority: '1.0' },
  ...articles.map((a) => ({ url: `/${a.slug}`, title: `${a.metaTitle} | kiarbeitsplatz.de`, desc: a.description, priority: '0.8' })),
  { url: '/ki-check', title: 'KI-Check für Unternehmen: 10 Fragen | kiarbeitsplatz.de', desc: 'Kostenloser KI-Check: Wie gut ist Ihr Unternehmen bei KI-Verordnung, Datenschutz und Organisation aufgestellt? Mit konkreten nächsten Schritten.', priority: '0.9' },
  { url: '/ki-richtlinie', title: 'KI-Richtlinie erstellen: Muster & Generator | kiarbeitsplatz.de', desc: 'Erstellen Sie in wenigen Minuten den Entwurf einer KI-Nutzungsrichtlinie für Ihr Unternehmen. Kostenlos, ohne Anmeldung, Daten bleiben im Browser.', priority: '0.9' },
  { url: '/ueber-uns', title: 'Über uns | kiarbeitsplatz.de', desc: 'Wer hinter kiarbeitsplatz.de steht und wie die Inhalte entstehen.', priority: '0.3' },
  { url: '/impressum', title: 'Impressum | kiarbeitsplatz.de', desc: 'Impressum und Anbieterkennzeichnung nach § 5 DDG für kiarbeitsplatz.de.', priority: '0.1' },
  { url: '/datenschutz', title: 'Datenschutzerklärung | kiarbeitsplatz.de', desc: 'Datenschutzhinweise für kiarbeitsplatz.de: Hosting bei Vercel, cookielose Statistik, keine Werbung.', priority: '0.1' },
];
