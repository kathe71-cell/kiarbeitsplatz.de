import { Link } from 'react-router-dom';
import { berufBySlug, berufe, feldFarbe } from '../data/berufe';
import Crumbs from '../components/Crumbs';
import SalaryBar from '../components/SalaryBar';
import NotFoundPage from './NotFoundPage';

export default function BerufPage({ slug }: { slug: string }) {
  const b = berufBySlug(slug);
  if (!b) return <NotFoundPage />;
  const weitere = berufe.filter((x) => x.feld === b.feld && x.slug !== b.slug).concat(berufe.filter((x) => x.feld !== b.feld)).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Occupation',
    name: b.name,
    description: b.kurz,
    occupationLocation: { '@type': 'Country', name: 'Deutschland' },
    estimatedSalary: { '@type': 'MonetaryAmountDistribution', name: 'Bruttojahresgehalt', currency: 'EUR', duration: 'P1Y', minValue: b.gehalt[0] * 1000, maxValue: b.gehalt[1] * 1000 },
    qualifications: b.profil.join('; '),
    responsibilities: b.aufgaben.join('; '),
  };
  const block = (titel: string, items: string[]) => (
    <section className="mt-12">
      <h2 className="text-2xl">{titel}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((x, i) => <li key={x} className="flex gap-4 leading-relaxed"><span className="num w-6 shrink-0 text-brass">{String(i + 1).padStart(2, '0')}</span><span>{x}</span></li>)}
      </ul>
    </section>
  );
  const farbe = feldFarbe[b.feld];
  const steckbrief: [string, string][] = [
    ['Arbeitsfeld', b.feld],
    ['Gehalt (brutto/Jahr)', `${b.gehalt[0]}.000 – ${b.gehalt[1]}.000 €`],
    ['Typischer Einstieg', b.wege.split('. ')[0] + '.'],
  ];
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header style={{ background: farbe }} className="text-cream">
        <div className="wrap py-10">
          <div className="[&_*]:!text-cream/75"><Crumbs items={[{ name: 'Berufe', url: '/berufe' }, { name: b.name, url: `/berufe/${b.slug}` }]} /></div>
          <div className="grid gap-10 pt-12 pb-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">{b.feld}</p>
              <h1 className="mt-4 text-5xl text-cream sm:text-6xl">{b.name}</h1>
              <p className="lede mt-5 max-w-xl text-cream/85">{b.kurz}</p>
            </div>
            <div className="rounded-2xl bg-black/15 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/70">Bruttojahresgehalt</p>
              <p className="num mt-2 text-4xl text-cream">{b.gehalt[0]}–{b.gehalt[1]} Tsd. €</p>
              <div className="mt-4"><SalaryBar range={b.gehalt} color="#c39a55" track="rgba(242,233,214,.2)" thick /></div>
              <p className="mt-3 text-xs text-cream/70">Orientierungswerte, Stand Oktober 2026. <Link to="/gehaelter" className="underline">Einordnung</Link></p>
            </div>
          </div>
        </div>
      </header>
      <div className="wrap mt-14 grid gap-14 lg:grid-cols-[2fr_1fr]">
        <div className="prose-col">
          {block('Aufgaben', b.aufgaben)}
          {block('Was man mitbringen sollte', b.profil)}
          <section className="mt-12 body-text">
            <h2 className="mb-4 text-2xl text-ink">Wege in den Beruf</h2>
            <p>{b.wege}</p>
          </section>
          <section className="mt-12 body-text">
            <h2 className="mb-4 text-2xl text-ink">Wo man arbeitet</h2>
            <p>{b.arbeitgeber}</p>
          </section>
          <section className="mt-12 rounded-2xl bg-cream p-7">
            <h2 className="text-2xl">Ausblick</h2>
            <p className="mt-3 leading-relaxed">{b.ausblick}</p>
          </section>
        </div>
        <aside>
          <div className="rounded-2xl bg-white p-6 lg:sticky lg:top-24" style={{ borderTop: `5px solid ${farbe}` }}>
            <h2 className="text-xl">Steckbrief</h2>
            <dl className="mt-4 divide-y divide-rule text-sm">
              {steckbrief.map(([k, v]) => (
                <div key={k} className="py-3"><dt className="text-muted">{k}</dt><dd className="mt-1 text-ink">{v}</dd></div>
              ))}
            </dl>
            <Link to="/berufe-finder" className="btn btn-brass mt-5 w-full justify-center">Passt der Beruf zu mir?</Link>
          </div>
        </aside>
      </div>
      <section className="wrap mt-20">
        <h2 className="text-3xl">Verwandte Berufe</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {weitere.map((w) => (
            <Link key={w.slug} to={`/berufe/${w.slug}`} className="card-lift group rounded-2xl bg-white p-6" style={{ borderTop: `5px solid ${feldFarbe[w.feld]}` }}>
              <h3 className="text-xl group-hover:underline">{w.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.kurz}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
