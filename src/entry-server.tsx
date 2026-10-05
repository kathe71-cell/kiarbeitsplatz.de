import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes, Layout } from './App';
import { berufe } from './data/berufe';
import { ratgeber } from './data/ratgeber';

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

const S = ' | KI-Arbeitsplatz';

export const routes = [
  { url: '/', title: 'KI-Arbeitsplätze 2026: Berufe, Gehälter, Einstieg' + S, desc: 'Arbeitsplätze in der künstlichen Intelligenz: zehn Berufsbilder mit Aufgaben, Gehältern und Wegen in den Job, dazu der Wandel am Arbeitsmarkt.', priority: '1.0' },
  { url: '/berufe', title: 'KI-Berufe 2026: alle Berufsbilder im Überblick' + S, desc: 'Machine Learning Engineer, Data Scientist, AI Governance und mehr: Berufe in der KI mit Aufgaben und Gehaltsspannen.', priority: '0.9' },
  ...berufe.map((b) => ({ url: `/berufe/${b.slug}`, title: b.metaTitle + S, desc: b.metaDesc, priority: '0.8' })),
  { url: '/berufe-finder', title: 'Berufe-Finder: Welcher KI-Beruf passt zu mir?' + S, desc: 'Vier Fragen zu Interessen, Hintergrund und Arbeitsweise: Der Berufe-Finder zeigt die drei KI-Berufe, die am besten zu dir passen.', priority: '0.9' },
  { url: '/gehaelter', title: 'KI-Gehälter 2026: Was KI-Fachleute verdienen' + S, desc: 'Gehaltsspannen für KI-Berufe in Deutschland vom Einstieg bis zur erfahrenen Fachkraft, mit Einordnung nach Region und Branche.', priority: '0.9' },
  ...ratgeber.map((r) => ({ url: `/${r.slug}`, title: r.metaTitle + S, desc: r.metaDesc, priority: '0.8' })),
  { url: '/ueber-uns', title: 'Über uns' + S, desc: 'Wer hinter KI-Arbeitsplatz steht und wie die Inhalte entstehen.', priority: '0.3' },
  { url: '/impressum', title: 'Impressum' + S, desc: 'Impressum und Anbieterkennzeichnung nach § 5 DDG.', priority: '0.1' },
  { url: '/datenschutz', title: 'Datenschutz' + S, desc: 'Datenschutzhinweise: Hosting bei Vercel, cookielose Statistik, keine Werbung.', priority: '0.1' },
];
export { berufe } from './data/berufe';
export { ratgeber } from './data/ratgeber';
