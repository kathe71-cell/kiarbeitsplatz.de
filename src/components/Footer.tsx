import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule no-print">
      <div className="wrap grid gap-8 py-12 text-sm text-muted sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg text-ink">KI·Arbeitsplatz</p>
          <p className="mt-2 max-w-sm leading-relaxed">Berufe, Gehälter und Wege in die künstliche Intelligenz. Ein redaktionelles Angebot ohne Werbung.</p>
        </div>
        <ul className="space-y-2">
          <li><Link to="/berufe" className="hover:text-ink">Berufe</Link></li>
          <li><Link to="/gehaelter" className="hover:text-ink">Gehälter</Link></li>
          <li><Link to="/einstieg" className="hover:text-ink">Einstieg</Link></li>
          <li><Link to="/wandel" className="hover:text-ink">Arbeitsmarkt</Link></li>
        </ul>
        <ul className="space-y-2">
          <li><Link to="/ueber-uns" className="hover:text-ink">Über uns</Link></li>
          <li><Link to="/impressum" className="hover:text-ink">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-ink">Datenschutz</Link></li>
        </ul>
      </div>
    </footer>
  );
}
