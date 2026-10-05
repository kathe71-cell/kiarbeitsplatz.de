import { Link } from 'react-router-dom';
import { ratgeberBySlug, ratgeber } from '../data/ratgeber';
import Crumbs from '../components/Crumbs';
import Faq from '../components/Faq';
import NotFoundPage from './NotFoundPage';

export default function RatgeberPage({ slug }: { slug: string }) {
  const r = ratgeberBySlug(slug);
  if (!r) return <NotFoundPage />;
  const andere = ratgeber.filter((x) => x.slug !== slug);
  return (
    <article className="wrap py-10">
      <Crumbs items={[{ name: r.rubrik, url: `/${r.slug}` }]} />
      <div className="prose-col mx-auto mt-12">
        <p className="eyebrow">{r.rubrik}</p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{r.titel}</h1>
        <p className="lede mt-6">{r.vorspann}</p>
        {r.abschnitte.map((a) => (
          <section key={a.titel} className="body-text mt-12">
            <h2 className="mb-4 text-2xl text-ink">{a.titel}</h2>
            {a.text.map((t, i) => <p key={i}>{t}</p>)}
            {a.liste && (
              <ul className="mt-5 divide-y divide-rule border-y border-rule">
                {a.liste.map((l) => <li key={l} className="py-3">{l}</li>)}
              </ul>
            )}
          </section>
        ))}
        <Faq items={r.fragen} />
        <p className="mt-10 text-sm text-muted">Stand: Oktober 2026</p>
        {andere.map((o) => (
          <Link key={o.slug} to={`/${o.slug}`} className="group mt-12 block border-t-2 border-ink pt-5">
            <p className="eyebrow">Weiterlesen</p>
            <p className="mt-2 font-serif text-2xl group-hover:text-accent">{o.titel}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}
