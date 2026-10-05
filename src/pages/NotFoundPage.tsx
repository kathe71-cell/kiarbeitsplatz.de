import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="wrap py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl">Diese Seite gibt es nicht</h1>
      <p className="mt-4 text-muted">Vielleicht hilft die <Link to="/berufe" className="link">Übersicht der Berufe</Link> weiter.</p>
    </div>
  );
}
