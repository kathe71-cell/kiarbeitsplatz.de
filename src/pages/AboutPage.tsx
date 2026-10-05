import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <Breadcrumbs items={[{ name: 'Über uns', url: '/ueber-uns' }]} />
      <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Über kiarbeitsplatz.de</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-800">
        <p>kiarbeitsplatz.de erklärt, was beim Einsatz künstlicher Intelligenz im Berufsalltag gilt: rechtliche Rahmenbedingungen aus KI-Verordnung, Datenschutz- und Arbeitsrecht sowie praktische Hinweise für die Einführung im Team.</p>
        <p>Die Inhalte stützen sich auf Gesetzestexte, veröffentlichte Gerichtsentscheidungen und Leitlinien von Behörden. Jeder Beitrag nennt seinen Stand. Weil sich die Regeln rund um KI schnell ändern, prüfen wir die Beiträge regelmäßig.</p>
        <p>Die Seite enthält keine Werbung und keine Partnerlinks. Sie dient der allgemeinen Information und ersetzt keine Rechtsberatung im Einzelfall.</p>
        <p>Hinweise auf Fehler oder veraltete Angaben nehmen wir gern per E-Mail an <a className="font-semibold text-amber-800 underline" href="mailto:jens@kathe.org">jens@kathe.org</a> entgegen.</p>
      </div>
    </div>
  );
}
