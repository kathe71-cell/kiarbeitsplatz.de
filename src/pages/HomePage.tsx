import { Link } from 'react-router-dom';
import { berufe, felder, feldFarbe } from '../data/berufe';
import { ratgeber } from '../data/ratgeber';
import SalaryBar from '../components/SalaryBar';
import HeroArt from '../components/HeroArt';
import Faq from '../components/Faq';

const maxGehalt = Math.max(...berufe.map((b) => b.gehalt[1]));
const minGehalt = Math.min(...berufe.map((b) => b.gehalt[0]));

export default function HomePage() {
  const nachGehalt = [...berufe].sort((a, b) => b.gehalt[1] - a.gehalt[1]).slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="bg-forest text-cream">
        <div className="wrap grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Berufe · Gehälter · Einstieg · 2026</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] text-cream sm:text-7xl">
              Arbeitsplätze in der <em className="text-brass">künstlichen Intelligenz</em>
            </h1>
            <p className="lede mt-7 max-w-xl text-cream/80">
              Wer entwickelt, betreibt und verantwortet KI? Zehn Berufe, was sie verlangen, was sie einbringen und wie man hineinfindet.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/berufe-finder" className="btn btn-brass">Welcher KI-Beruf passt zu mir?</Link>
              <Link to="/berufe" className="btn btn-ghost text-cream">Alle Berufe</Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none"><HeroArt /></div>
        </div>
        <div className="border-t border-cream/15">
          <dl className="wrap grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
            {[
              [String(berufe.length), 'Berufsbilder'],
              [String(felder.length), 'Arbeitsfelder'],
              [`${minGehalt}–${maxGehalt} Tsd. €`, 'Gehaltsspanne'],
              ['4', 'Fragen im Berufe-Finder'],
            ].map(([z, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="num text-3xl text-cream sm:text-4xl">{z}</dd>
                <dd className="mt-1 text-sm text-cream/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Felder */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Vier Arbeitsfelder</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Wo KI-Arbeit stattfindet</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {felder.map((f, fi) => {
            const liste = berufe.filter((b) => b.feld === f);
            return (
              <div key={f} className="card-lift relative overflow-hidden rounded-2xl bg-white p-7 sm:p-8" style={{ borderTop: `6px solid ${feldFarbe[f]}` }}>
                <span className="num absolute right-6 top-4 text-6xl opacity-10" style={{ color: feldFarbe[f] }}>0{fi + 1}</span>
                <h3 className="text-2xl" style={{ color: feldFarbe[f] }}>{f}</h3>
                <ul className="mt-5 divide-y divide-rule">
                  {liste.map((b) => (
                    <li key={b.slug}>
                      <Link to={`/berufe/${b.slug}`} className="group flex items-baseline justify-between gap-4 py-3">
                        <span className="font-serif text-lg group-hover:underline">{b.name}</span>
                        <span className="shrink-0 text-sm tabular-nums text-muted">bis {b.gehalt[1]} Tsd. €</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gehälter */}
      <section className="bg-cream">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Gehälter 2026</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Was KI-Fachleute verdienen</h2>
            <p className="body-text mt-5 max-w-md">Bruttojahresgehälter vom Einstieg bis zur erfahrenen Fachkraft. Region, Branche und Tarifbindung machen große Unterschiede.</p>
            <Link to="/gehaelter" className="btn mt-7 bg-forest text-cream">Zur Gehaltsübersicht</Link>
          </div>
          <ul className="space-y-5">
            {nachGehalt.map((b) => (
              <li key={b.slug}>
                <Link to={`/berufe/${b.slug}`} className="group block">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-lg group-hover:underline">{b.name}</span>
                    <span className="num text-sm">{b.gehalt[0]}–{b.gehalt[1]} Tsd. €</span>
                  </div>
                  <div className="mt-2"><SalaryBar range={b.gehalt} color={feldFarbe[b.feld]} track="#e6dcc5" thick /></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ratgeber */}
      <section className="wrap grid gap-6 py-20 lg:grid-cols-2">
        {ratgeber.map((r, i) => (
          <Link key={r.slug} to={`/${r.slug}`} className={`card-lift group flex flex-col justify-between rounded-2xl p-8 sm:p-10 ${i === 0 ? 'bg-forest text-cream' : 'bg-white'}`}>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${i === 0 ? 'text-brass' : 'text-muted'}`}>{r.rubrik}</p>
              <h2 className={`mt-4 text-3xl sm:text-4xl ${i === 0 ? 'text-cream' : ''}`}>{r.titel}</h2>
              <p className={`mt-4 leading-relaxed ${i === 0 ? 'text-cream/75' : 'text-muted'}`}>{r.vorspann}</p>
            </div>
            <span className={`mt-8 text-sm font-semibold ${i === 0 ? 'text-brass' : 'text-accent'}`}>Weiterlesen →</span>
          </Link>
        ))}
      </section>

      {/* Finder-Teaser */}
      <section className="wrap">
        <div className="grid items-center gap-8 rounded-3xl border border-rule bg-white p-8 sm:p-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow">Berufe-Finder</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Vier Fragen, drei passende KI-Berufe</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">Interessen, Hintergrund, Arbeitsweise und Wunscharbeitgeber: Der Finder zeigt, welche Rollen zu dir passen. Ohne Anmeldung, nichts wird gespeichert.</p>
          </div>
          <div className="lg:text-right"><Link to="/berufe-finder" className="btn btn-brass">Finder starten</Link></div>
        </div>
      </section>

      <section className="wrap">
        <div className="prose-col">
          <Faq items={[
            { f: 'Welche Berufe gibt es in der künstlichen Intelligenz?', a: 'Neben technischen Rollen wie Machine Learning Engineer, Data Scientist oder MLOps Engineer gehören dazu Produktmanagement, Beratung, Schulung sowie AI-Governance für den rechtssicheren Einsatz.' },
            { f: 'Braucht man für einen KI-Job ein Informatikstudium?', a: 'Für Forschung und viele Ingenieursstellen ist ein Studium mit mathematischem Schwerpunkt üblich. In Data Engineering, Beratung, Schulung und Governance ist der Quereinstieg verbreitet.' },
            { f: 'Wie viel verdient man in der KI?', a: `Je nach Beruf, Region und Erfahrung liegen typische Bruttojahresgehälter zwischen etwa ${minGehalt}.000 und ${maxGehalt}.000 Euro.` },
          ]} />
        </div>
      </section>
    </div>
  );
}
