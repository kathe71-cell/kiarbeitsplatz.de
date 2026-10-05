import { useState } from 'react';
import { Link } from 'react-router-dom';
import { finderFragen } from '../data/finder';
import { berufBySlug, feldFarbe } from '../data/berufe';
import Crumbs from '../components/Crumbs';

export default function FinderPage() {
  const [antworten, setAntworten] = useState<number[]>([]);
  const schritt = antworten.length;
  const fertig = schritt === finderFragen.length;

  const ergebnis = (() => {
    if (!fertig) return [];
    const summe: Record<string, number> = {};
    antworten.forEach((a, i) => {
      Object.entries(finderFragen[i].antworten[a].punkte).forEach(([slug, p]) => { summe[slug] = (summe[slug] ?? 0) + (p ?? 0); });
    });
    const max = Math.max(...Object.values(summe));
    return Object.entries(summe).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([slug, p]) => ({ b: berufBySlug(slug)!, pct: Math.round((p / max) * 100) }));
  })();

  return (
    <div className="wrap py-10">
      <Crumbs items={[{ name: 'Berufe-Finder', url: '/berufe-finder' }]} />
      <div className="mx-auto mt-10 max-w-3xl">
        <p className="eyebrow">Berufe-Finder</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Welcher KI-Beruf passt zu dir?</h1>
        <p className="lede mt-5 text-muted">Vier Fragen zu Interessen, Hintergrund und Arbeitsweise. Die Auswertung passiert in deinem Browser, nichts wird gespeichert.</p>

        <div className="mt-10 flex gap-2" aria-hidden="true">
          {finderFragen.map((_, i) => (
            <span key={i} className={`h-1.5 flex-1 rounded-full ${i < schritt ? 'bg-brass' : 'bg-rule'}`} />
          ))}
        </div>

        {!fertig ? (
          <section className="mt-8 rounded-3xl bg-forest p-7 text-cream sm:p-10" aria-live="polite">
            <p className="text-sm text-cream/60">Frage {schritt + 1} von {finderFragen.length}</p>
            <h2 className="mt-2 text-3xl text-cream">{finderFragen[schritt].frage}</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {finderFragen[schritt].antworten.map((a, i) => (
                <button key={a.text} type="button" onClick={() => setAntworten([...antworten, i])}
                  className="min-h-[64px] rounded-2xl border border-cream/25 px-5 py-4 text-left text-[1.05rem] text-cream transition hover:border-brass hover:bg-cream/5">
                  {a.text}
                </button>
              ))}
            </div>
            {schritt > 0 && (
              <button type="button" onClick={() => setAntworten(antworten.slice(0, -1))} className="mt-6 text-sm text-cream/70 underline underline-offset-4 hover:text-cream">Zurück</button>
            )}
          </section>
        ) : (
          <section className="mt-8" aria-live="polite">
            <h2 className="text-3xl">Deine drei passenden Berufe</h2>
            <ol className="mt-6 space-y-4">
              {ergebnis.map(({ b, pct }, i) => (
                <li key={b.slug}>
                  <Link to={`/berufe/${b.slug}`} className="card-lift group grid gap-4 rounded-2xl bg-white p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center" style={{ borderLeft: `6px solid ${feldFarbe[b.feld]}` }}>
                    <span className="num text-4xl" style={{ color: feldFarbe[b.feld] }}>{i + 1}</span>
                    <span>
                      <span className="block font-serif text-2xl group-hover:underline">{b.name}</span>
                      <span className="mt-1 block text-muted">{b.kurz}</span>
                    </span>
                    <span className="text-sm text-muted sm:text-right"><span className="num block text-2xl text-ink">{pct} %</span>Übereinstimmung</span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => setAntworten([])} className="btn bg-forest text-cream">Noch einmal</button>
              <Link to="/einstieg" className="btn btn-ghost text-ink">Wie komme ich hinein?</Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
