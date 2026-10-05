import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';

const nav = [
  { to: '/ki-kompetenz-pflicht', label: 'KI-Kompetenz' },
  { to: '/betriebsrat-ki', label: 'Betriebsrat' },
  { to: '/datenschutz-ki-tools', label: 'Datenschutz' },
  { to: '/ki-tools-buero', label: 'KI-Tools' },
  { to: '/ki-check', label: 'KI-Check' },
  { to: '/ki-richtlinie', label: 'Richtlinie erstellen' },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-slate-950">
        <BrainCircuit className="h-5 w-5" />
      </span>
      <span className={`text-lg font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        ki<span className="text-amber-600">arbeitsplatz</span>.de
      </span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur no-print">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Startseite kiarbeitsplatz.de" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'bg-amber-100 text-amber-950' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 lg:hidden"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden" aria-label="Mobile Navigation">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-slate-100">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
