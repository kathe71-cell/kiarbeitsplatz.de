import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-extrabold uppercase tracking-wide text-amber-700">Fehler 404</p>
      <h1 className="mt-2 text-3xl font-black text-slate-950">Seite nicht gefunden</h1>
      <p className="mt-4 text-slate-700">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
      <Link to="/" className="mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-slate-800">Zur Startseite</Link>
    </div>
  );
}
