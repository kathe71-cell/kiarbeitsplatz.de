import { Link } from 'react-router-dom';
import { berufe } from '../data/berufe';
import { ratgeber } from '../data/ratgeber';
import SalaryBar from '../components/SalaryBar';

const eur = (n: number) => `${n}.000 €`;

export default function HomePage() {
  const auswahl = berufe.slice(0, 6);
  return (
    <div className="wrap">
      <section className="grid gap-10 border-b border-rule py-16 sm:py-24 lg:grid-cols-[3fr_2fr] lg:items-end">
        <div>
          <p className="eyebrow">Berufe · Gehälter · Einstieg</p>
          <h1 className="mt-5 text-4xl leading-[1.1] sm:text-6xl">Arbeitsplätze in der künstlichen Intelligenz</h1>
        </div>
        <p className="lede text-muted lg:pb-2">
          Wer entwickelt, betreibt und verantwortet KI? Wir beschreiben die Berufe dahinter, was sie verlangen, was sie einbringen und wie man hineinfindet.
        </p>
      </section>

      <section className="py-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl">Berufsbilder</h2>
          <Link to="/berufe" className="link text-sm">Alle {berufe.length} Berufe</Link>
        </div>
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {auswahl.map((b) => (
            <Link key={b.slug} to={`/berufe/${b.slug}`} className="group border-t border-ink py-6">
              <p className="eyebrow">{b.feld}</p>
              <h3 className="mt-2 text-2xl group-hover:text-accent">{b.name}</h3>
              <p className="mt-2 leading-relaxed text-muted">{b.kurz}</p>
              <p className="mt-5 text-sm tabular-nums text-ink">{eur(b.gehalt[0])} bis {eur(b.gehalt[1])}</p>
              <div className="mt-2"><SalaryBar range={b.gehalt} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-rule py-14 lg:grid-cols-2">
        {ratgeber.map((r) => (
          <Link key={r.slug} to={`/${r.slug}`} className="group">
            <p className="eyebrow">{r.rubrik}</p>
            <h2 className="mt-3 text-3xl group-hover:text-accent">{r.titel}</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">{r.vorspann}</p>
            <span className="link mt-4 inline-block text-sm">Weiterlesen</span>
          </Link>
        ))}
      </section>

      <section className="border-t border-rule py-14">
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <h2 className="text-3xl">Was KI-Fachleute verdienen</h2>
          <div>
            <p className="body-text">
              Die Spannen reichen von rund {eur(Math.min(...berufe.map((b) => b.gehalt[0])))} für den Einstieg bis über {eur(Math.max(...berufe.map((b) => b.gehalt[1])))} mit Erfahrung. Region, Branche und Unternehmensgröße machen große Unterschiede.
            </p>
            <Link to="/gehaelter" className="link mt-4 inline-block">Zur Gehaltsübersicht</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
