import { useState } from 'react';
import { Link } from 'react-router-dom';
import { berufe, felder, type Feld } from '../data/berufe';
import Crumbs from '../components/Crumbs';

export default function BerufePage() {
  const [feld, setFeld] = useState<Feld | 'Alle'>('Alle');
  const liste = feld === 'Alle' ? berufe : berufe.filter((b) => b.feld === feld);
  return (
    <div className="wrap py-10">
      <Crumbs items={[{ name: 'Berufe', url: '/berufe' }]} />
      <header className="mt-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl">Berufe in der KI</h1>
        <p className="lede mt-5 text-muted">Von der Datenbasis bis zur Rechtsabteilung: Diese Rollen tragen den Einsatz künstlicher Intelligenz in Unternehmen und Forschung.</p>
      </header>
      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-rule pb-4 text-sm" role="group" aria-label="Nach Feld filtern">
        {(['Alle', ...felder] as const).map((f) => (
          <button key={f} type="button" aria-pressed={feld === f} onClick={() => setFeld(f)}
            className={feld === f ? 'text-ink underline decoration-1 underline-offset-[6px]' : 'text-muted hover:text-ink'}>
            {f}
          </button>
        ))}
      </div>
      <ol className="divide-y divide-rule">
        {liste.map((b) => (
          <li key={b.slug}>
            <Link to={`/berufe/${b.slug}`} className="group grid gap-2 py-6 sm:grid-cols-[1fr_2fr_auto] sm:items-baseline sm:gap-8">
              <h2 className="text-2xl group-hover:text-accent">{b.name}</h2>
              <p className="leading-relaxed text-muted">{b.kurz}</p>
              <p className="text-sm tabular-nums">{b.gehalt[0]}–{b.gehalt[1]} Tsd. €</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
