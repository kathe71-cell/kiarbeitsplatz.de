import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, RotateCcw } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { checkQuestions } from '../data/check';

type Answer = 'ja' | 'nein' | 'unklar';

export default function KiCheckPage() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const answered = Object.keys(answers).length;
  const done = answered === checkQuestions.length;
  const score = checkQuestions.filter((q) => answers[q.id] === 'ja').length;
  const open = checkQuestions.filter((q) => answers[q.id] && answers[q.id] !== 'ja');

  const verdict =
    score >= 9 ? { t: 'Gut aufgestellt', c: 'border-emerald-300 bg-emerald-50 text-emerald-950' } :
    score >= 6 ? { t: 'Auf einem guten Weg', c: 'border-amber-300 bg-amber-50 text-amber-950' } :
    { t: 'Handlungsbedarf', c: 'border-red-300 bg-red-50 text-red-950' };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <Breadcrumbs items={[{ name: 'KI-Check', url: '/ki-check' }]} />
      <header className="mb-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">KI-Check: Wie gut ist Ihr Unternehmen aufgestellt?</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-800">
          Zehn Fragen zu KI-Verordnung, Datenschutz und Organisation. Die Auswertung zeigt, wo noch etwas zu tun ist. Ihre Antworten bleiben in Ihrem Browser, es wird nichts gespeichert oder übertragen.
        </p>
      </header>

      <ol className="space-y-4">
        {checkQuestions.map((q, i) => (
          <li key={q.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900"><span className="text-amber-700">{i + 1}.</span> {q.question}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={q.question}>
              {(['ja', 'nein', 'unklar'] as Answer[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  role="radio"
                  aria-checked={answers[q.id] === v}
                  onClick={() => setAnswers({ ...answers, [q.id]: v })}
                  className={`min-h-[44px] rounded-lg border px-5 text-sm font-bold capitalize transition-colors ${answers[q.id] === v ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-slate-500'}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-8" aria-live="polite">
        {!done ? (
          <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
            {answered} von {checkQuestions.length} Fragen beantwortet.
          </p>
        ) : (
          <div className={`rounded-2xl border-2 p-6 ${verdict.c}`}>
            <p className="flex items-center gap-2 text-xl font-black"><ClipboardCheck className="h-6 w-6" /> {verdict.t}: {score} von {checkQuestions.length} Punkten</p>
            {open.length > 0 && (
              <>
                <h2 className="mt-5 font-extrabold">Ihre nächsten Schritte</h2>
                <ul className="mt-2 space-y-2">
                  {open.map((q) => (
                    <li key={q.id}>
                      <Link to={q.link} className="font-semibold underline underline-offset-2">{q.todo}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <button type="button" onClick={() => setAnswers({})} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-800">
              <RotateCcw className="h-4 w-4" /> Neu starten
            </button>
          </div>
        )}
      </section>
      <p className="mt-6 text-xs text-slate-600">Der Check dient der Orientierung und ersetzt keine rechtliche Prüfung.</p>
    </div>
  );
}
