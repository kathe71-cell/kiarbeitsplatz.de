import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const nav = [
  { to: '/berufe', label: 'Berufe' },
  { to: '/berufe-finder', label: 'Berufe-Finder' },
  { to: '/gehaelter', label: 'Gehälter' },
  { to: '/einstieg', label: 'Einstieg' },
  { to: '/wandel', label: 'Arbeitsmarkt' },
];

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
        <rect width="28" height="28" rx="7" fill={light ? '#c39a55' : '#14342a'} />
        <circle cx="9" cy="10" r="2.6" fill={light ? '#14342a' : '#c39a55'} />
        <circle cx="19" cy="18" r="2.6" fill={light ? '#14342a' : '#c39a55'} />
        <line x1="9" y1="10" x2="19" y2="18" stroke={light ? '#14342a' : '#c39a55'} strokeWidth="1.6" />
      </svg>
      <span className={`font-serif text-xl tracking-tight ${light ? 'text-cream' : 'text-ink'}`}>KI·Arbeitsplatz</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur no-print">
      <div className="wrap flex items-center justify-between py-4">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Startseite"><Wordmark /></Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end className={({ isActive }) => `text-[0.95rem] ${isActive ? 'text-accent underline decoration-brass decoration-2 underline-offset-[8px]' : 'text-ink hover:text-accent'}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button type="button" className="rounded-full border border-ink px-4 py-1.5 text-sm font-medium text-ink md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Schließen' : 'Menü'}
        </button>
      </div>
      {open && (
        <nav className="wrap border-t border-rule pb-4 md:hidden" aria-label="Mobile Navigation">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-rule py-3 font-serif text-lg text-ink">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
