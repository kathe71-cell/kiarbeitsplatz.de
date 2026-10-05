import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, CalendarDays } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { articleBySlug } from '../data/articles';
import NotFoundPage from './NotFoundPage';

export default function ArticlePage({ slug }: { slug: string }) {
  const a = articleBySlug(slug);
  if (!a) return <NotFoundPage />;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    dateModified: a.updated,
    inLanguage: 'de-DE',
    author: { '@type': 'Person', name: 'Jens Kathe' },
    publisher: { '@id': 'https://www.kiarbeitsplatz.de/#org' },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ name: a.title.split(':')[0], url: `/${a.slug}` }]} />

      <header className="mb-8">
        <span className="inline-block rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-950">{a.category}</span>
        <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{a.title}</h1>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-600">
          <CalendarDays className="h-4 w-4" /> Stand: {new Date(a.updated).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>
        <p className="mt-5 text-lg leading-relaxed text-slate-800">{a.intro}</p>
      </header>

      <aside className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">Das Wichtigste in Kürze</h2>
        <ul className="space-y-2.5">
          {a.keyFacts.map((f) => (
            <li key={f} className="flex gap-2.5 text-slate-800">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="space-y-10">
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="mb-3 text-2xl font-black tracking-tight text-slate-950">{s.heading}</h2>
            <div className="space-y-4 leading-relaxed text-slate-800">
              {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            {s.bullets && (
              <ul className="mt-4 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-slate-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-black tracking-tight text-slate-950">Häufige Fragen</h2>
        <div className="space-y-3">
          {a.faq.map((f) => (
            <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-slate-900">{f.q}</summary>
              <p className="mt-3 leading-relaxed text-slate-800">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
        <h2 className="text-xl font-black">Weiterlesen</h2>
        <ul className="mt-4 space-y-2">
          {a.related.map((r) => {
            const ra = articleBySlug(r);
            return ra ? (
              <li key={r}>
                <Link to={`/${r}`} className="inline-flex items-center gap-2 font-semibold text-amber-300 hover:text-amber-200">
                  <ArrowRight className="h-4 w-4" /> {ra.title}
                </Link>
              </li>
            ) : null;
          })}
        </ul>
      </section>

      <p className="mt-8 text-xs leading-relaxed text-slate-600">
        Hinweis: Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine Rechtsberatung. Rechtsstand siehe Datum oben.
      </p>
    </article>
  );
}
