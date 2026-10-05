import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Users, ShieldCheck, Laptop, ClipboardCheck, FileText, Wrench, Rocket } from 'lucide-react';
import { articles } from '../data/articles';

const icons: Record<string, typeof Scale> = {
  'ki-kompetenz-pflicht': Scale,
  'betriebsrat-ki': Users,
  'datenschutz-ki-tools': ShieldCheck,
  'beschaeftigte-rechte-ki': FileText,
  'verbotene-und-hochrisiko-ki': Scale,
  'ki-tools-buero': Wrench,
  'ki-arbeitsplatz-ausstattung': Laptop,
  'ki-einfuehrung-unternehmen': Rocket,
};

const homeFaq = [
  { q: 'Welche Regeln gelten für KI am Arbeitsplatz?', a: 'Maßgeblich sind vor allem die EU-KI-Verordnung (z. B. KI-Kompetenzpflicht seit Februar 2025), die DSGVO, das Betriebsverfassungsgesetz und das allgemeine Arbeitsrecht.' },
  { q: 'Müssen Unternehmen ihre Beschäftigten zu KI schulen?', a: 'Nach Art. 4 KI-Verordnung sollen Betreiber von KI-Systemen seit dem 2. Februar 2025 für ausreichende KI-Kompetenz ihres Personals sorgen. Form und Umfang richten sich nach dem Einsatz.' },
  { q: 'Darf der Arbeitgeber die Nutzung von ChatGPT verbieten?', a: 'Ja. Über das Weisungsrecht kann der Arbeitgeber festlegen, welche Arbeitsmittel genutzt werden dürfen. Bei einem Betriebsrat sind dessen Mitbestimmungsrechte zu beachten.' },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <span className="inline-block rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-950">Ratgeber · Stand Oktober 2026</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            KI am Arbeitsplatz: Regeln, Rechte und Praxis
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-800">
            Was die KI-Verordnung von Arbeitgebern verlangt, wann der Betriebsrat mitbestimmt, welche Daten in KI-Tools dürfen und wie Teams KI sinnvoll einsetzen. Verständlich erklärt für Beschäftigte, Führungskräfte und Betriebsräte.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/ki-check" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-amber-500 px-6 font-extrabold text-slate-950 shadow-sm hover:bg-amber-400">
              <ClipboardCheck className="h-5 w-5" /> KI-Check starten
            </Link>
            <Link to="/ki-richtlinie" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-slate-900 px-6 font-bold text-white hover:bg-slate-800">
              <FileText className="h-5 w-5" /> KI-Richtlinie erstellen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Ratgeber</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => {
            const Icon = icons[a.slug] ?? FileText;
            return (
              <Link key={a.slug} to={`/${a.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-900"><Icon className="h-5 w-5" /></span>
                <span className="mt-4 text-xs font-extrabold uppercase tracking-wide text-slate-600">{a.category}</span>
                <span className="mt-1 font-bold leading-snug text-slate-950">{a.title}</span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">{a.description}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-amber-800 group-hover:gap-2">Lesen <ArrowRight className="h-4 w-4" /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          {[
            { d: '2. Februar 2025', t: 'KI-Kompetenzpflicht und Verbote (z. B. Emotionserkennung am Arbeitsplatz) gelten' },
            { d: '2. August 2025', t: 'Pflichten für Anbieter von KI-Modellen mit allgemeinem Verwendungszweck' },
            { d: 'ab August 2026', t: 'Transparenzpflichten; Hochrisiko-Regeln für HR je nach Digital-Omnibus später' },
          ].map((x) => (
            <div key={x.d}>
              <p className="text-sm font-extrabold uppercase tracking-wide text-amber-400">{x.d}</p>
              <p className="mt-2 leading-relaxed text-white">{x.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">Häufige Fragen</h2>
        <div className="mt-5 space-y-3">
          {homeFaq.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-slate-900">{f.q}</summary>
              <p className="mt-3 leading-relaxed text-slate-800">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
