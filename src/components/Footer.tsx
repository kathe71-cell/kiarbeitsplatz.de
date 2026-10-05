import { Link } from 'react-router-dom';
import { Logo } from './Navbar';
import { articles } from '../data/articles';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 pt-12 pb-8 text-slate-300 no-print">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 border-b border-slate-800 pb-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/"><Logo dark /></Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Ratgeber zu künstlicher Intelligenz am Arbeitsplatz: KI-Verordnung, Mitbestimmung, Datenschutz und Praxis für Beschäftigte, Führungskräfte und Betriebsräte.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              Allgemeine Informationen, keine Rechtsberatung im Einzelfall.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Ratgeber</h2>
            <ul className="space-y-2.5 text-sm">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link to={`/${a.slug}`} className="hover:text-amber-400">{a.title.split(':')[0]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Werkzeuge &amp; Info</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/ki-check" className="hover:text-amber-400">KI-Check für Unternehmen</Link></li>
              <li><Link to="/ki-richtlinie" className="hover:text-amber-400">KI-Richtlinie erstellen</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-amber-400">Über uns</Link></li>
              <li><Link to="/impressum" className="hover:text-amber-400">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-amber-400">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <p className="pt-6 text-xs text-slate-400">© 2026 kiarbeitsplatz.de · Jens Kathe, Kassel</p>
      </div>
    </footer>
  );
}
