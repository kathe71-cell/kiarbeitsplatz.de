import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const nav = [
  { to: '/berufe', label: 'Berufe' },
  { to: '/gehaelter', label: 'Gehälter' },
  { to: '/einstieg', label: 'Einstieg' },
  { to: '/wandel', label: 'Arbeitsmarkt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-rule no-print">
      <div className="wrap flex items-center justify-between py-5">
        <Link to="/" onClick={() => setOpen(false)} className="font-serif text-xl tracking-tight text-ink sm:text-2xl">
          KI<span className="text-muted">·</span>Arbeitsplatz
        </Link>
        <nav className="hidden gap-8 sm:flex" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `text-[0.95rem] ${isActive ? 'text-accent underline decoration-1 underline-offset-[6px]' : 'text-ink hover:text-accent'}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button type="button" className="text-sm font-medium text-ink sm:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Schließen' : 'Menü'}
        </button>
      </div>
      {open && (
        <nav className="wrap border-t border-rule pb-4 sm:hidden" aria-label="Mobile Navigation">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-rule py-3 font-serif text-lg text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
