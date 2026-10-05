import { useState } from 'react';
import { Link } from 'react-router-dom';
import { berufe, felder, feldFarbe, type Feld } from '../data/berufe';
import Crumbs from '../components/Crumbs';
import SalaryBar from '../components/SalaryBar';

export default function BerufePage() {
  const [feld, setFeld] = useState<Feld | 'Alle'>('Alle');
  const liste = feld === 'Alle' ? berufe : berufe.filter((b) => b.feld === feld);
  return (
    <div className="wrap py-10">
      <Crumbs items={[{ name: 'Berufe', url: '/berufe' }]} />
      <header className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <h1 className="text-5xl sm:text-6xl">Berufe in der KI</h1>
        <p className="lede text-muted">Von der Datenbasis bis zur Rechtsabteilung: zehn Rollen, die den Einsatz künstlicher Intelligenz tragen.</p>
      </header>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Nach Feld filtern">
        {(['Alle', ...felder] as const).map((f) => {
          const aktiv = feld === f;
          const farbe = f === 'Alle' ? '#14342a' : feldFarbe[f];
          return (
            <button key={f} type="button" aria-pressed={aktiv} onClick={() => setFeld(f)}
              className="rounded-full border px-4 py-2 text-sm font-medium transition"
              style={aktiv ? { background: farbe, borderColor: farbe, color: '#f6f4ef' } : { borderColor: '#d8d3c8', color: '#191917' }}>
              {f}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {liste.map((b) => (
          <Link key={b.slug} to={`/berufe/${b.slug}`} className="card-lift group flex flex-col rounded-2xl bg-white p-6" style={{ borderTop: `5px solid ${feldFarbe[b.feld]}` }}>
            <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: feldFarbe[b.feld] }}>{b.feld}</span>
            <h2 className="mt-3 text-2xl group-hover:underline">{b.name}</h2>
            <p className="mt-2 flex-1 leading-relaxed text-muted">{b.kurz}</p>
            <p className="num mt-6 text-lg">{b.gehalt[0]}–{b.gehalt[1]} Tsd. €</p>
            <div className="mt-2"><SalaryBar range={b.gehalt} color={feldFarbe[b.feld]} track="#ece7dc" /></div>
          </Link>
        ))}
      </div>
      <div className="mt-14 rounded-3xl bg-forest p-8 text-cream sm:flex sm:items-center sm:justify-between sm:p-10">
        <p className="font-serif text-2xl text-cream sm:text-3xl">Unsicher, welche Rolle passt?</p>
        <Link to="/berufe-finder" className="btn btn-brass mt-5 sm:mt-0">Zum Berufe-Finder</Link>
      </div>
    </div>
  );
}
