import { Link } from 'react-router-dom';
import { Wordmark } from './Header';
import { berufe } from '../data/berufe';

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest text-cream/80 no-print">
      <div className="wrap grid gap-10 py-14 text-sm sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Wordmark light />
          <p className="mt-4 max-w-sm leading-relaxed">Berufe, Gehälter und Wege in die künstliche Intelligenz. Ein redaktionelles Angebot ohne Werbung.</p>
        </div>
        <ul className="space-y-2">
          <li className="mb-3 text-xs font-semibold uppercase tracking-widest text-brass">Berufe</li>
          {berufe.slice(0, 5).map((b) => <li key={b.slug}><Link to={`/berufe/${b.slug}`} className="hover:text-cream">{b.name}</Link></li>)}
        </ul>
        <ul className="space-y-2">
          <li className="mb-3 text-xs font-semibold uppercase tracking-widest text-brass">Ratgeber</li>
          <li><Link to="/berufe-finder" className="hover:text-cream">Berufe-Finder</Link></li>
          <li><Link to="/gehaelter" className="hover:text-cream">Gehälter</Link></li>
          <li><Link to="/einstieg" className="hover:text-cream">Einstieg</Link></li>
          <li><Link to="/wandel" className="hover:text-cream">Arbeitsmarkt</Link></li>
        </ul>
        <ul className="space-y-2">
          <li className="mb-3 text-xs font-semibold uppercase tracking-widest text-brass">Info</li>
          <li><Link to="/ueber-uns" className="hover:text-cream">Über uns</Link></li>
          <li><Link to="/impressum" className="hover:text-cream">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-cream">Datenschutz</Link></li>
        </ul>
      </div>
      <div className="wrap border-t border-cream/15 py-5 text-xs text-cream/60">Stand der Inhalte: Oktober 2026</div>
    
            <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300">
              <span className="font-bold text-white block mb-1">Projektübernahme</span>
              <p className="mb-2">Interesse an der Übernahme von kiarbeitsplatz.de inklusive Projekt?</p>
              <a href="/projektuebernahme" className="text-blue-400 hover:text-blue-300 font-medium">
                Mehr erfahren &rarr;
              </a>
            </div>

</footer>
  );
}
