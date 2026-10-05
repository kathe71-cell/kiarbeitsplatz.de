import { Link } from 'react-router-dom';
import { berufBySlug, berufe } from '../data/berufe';
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
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {items.map((x) => <li key={x} className="py-3 leading-relaxed">{x}</li>)}
      </ul>
    </section>
  );
  return (
    <article className="wrap py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Crumbs items={[{ name: 'Berufe', url: '/berufe' }, { name: b.name, url: `/berufe/${b.slug}` }]} />
      <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="prose-col">
          <p className="eyebrow">{b.feld}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{b.name}</h1>
          <p className="lede mt-5">{b.kurz}</p>
          {block('Aufgaben', b.aufgaben)}
          {block('Was man mitbringen sollte', b.profil)}
          <section className="mt-12 body-text">
            <h2 className="mb-4 text-2xl text-ink">Wege in den Beruf</h2>
            <p>{b.wege}</p>
            <p>Typische Arbeitgeber: {b.arbeitgeber}</p>
          </section>
          <section className="mt-12 body-text">
            <h2 className="mb-4 text-2xl text-ink">Ausblick</h2>
            <p>{b.ausblick}</p>
          </section>
        </div>
        <aside className="lg:pt-24">
          <div className="border-t-2 border-ink pt-5 lg:sticky lg:top-8">
            <p className="eyebrow">Bruttojahresgehalt</p>
            <p className="mt-3 font-serif text-3xl tabular-nums">{b.gehalt[0]}.000 – {b.gehalt[1]}.000 €</p>
            <div className="mt-4"><SalaryBar range={b.gehalt} /></div>
            <p className="mt-4 text-sm leading-relaxed text-muted">Orientierungswerte vom Einstieg bis zu mehreren Jahren Berufserfahrung. <Link to="/gehaelter" className="link">So ordnen wir Gehälter ein</Link>.</p>
          </div>
        </aside>
      </div>
      <section className="mt-20 border-t border-rule pt-10">
        <h2 className="text-2xl">Verwandte Berufe</h2>
        <div className="mt-6 grid gap-x-10 sm:grid-cols-3">
          {weitere.map((w) => (
            <Link key={w.slug} to={`/berufe/${w.slug}`} className="group border-t border-ink py-5">
              <h3 className="text-xl group-hover:text-accent">{w.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{w.kurz}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
