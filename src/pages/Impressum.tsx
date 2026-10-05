import Breadcrumbs from '../components/Breadcrumbs';

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <Breadcrumbs items={[{ name: 'Impressum', url: '/impressum' }]} />
      <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Impressum</h1>
      <div className="mt-6 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm sm:p-8">
        <section>
          <h2 className="mb-2 font-bold text-slate-950">Angaben gemäß § 5 DDG</h2>
          <p>Jens Kathe<br />Hansastraße 6<br />34119 Kassel<br />Deutschland</p>
        </section>
        <section>
          <h2 className="mb-2 font-bold text-slate-950">Kontakt</h2>
          <p>Telefon: <a className="underline" href="tel:+491786652623">+49 178 6652623</a><br />E-Mail: <a className="underline" href="mailto:jens@kathe.org">jens@kathe.org</a></p>
        </section>
        <section>
          <h2 className="mb-2 font-bold text-slate-950">Umsatzsteuer</h2>
          <p>Kleinunternehmer nach § 19 UStG</p>
        </section>
        <section>
          <h2 className="mb-2 font-bold text-slate-950">Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
          <p>Jens Kathe, Hansastraße 6, 34119 Kassel</p>
        </section>
        <section>
          <h2 className="mb-2 font-bold text-slate-950">Keine Rechtsberatung</h2>
          <p>Die Beiträge auf dieser Website dienen der allgemeinen Information. Sie stellen keine Rechtsberatung dar und können die Prüfung des Einzelfalls durch eine Rechtsanwältin oder einen Rechtsanwalt nicht ersetzen.</p>
        </section>
        <section>
          <h2 className="mb-2 font-bold text-slate-950">Haftung für Inhalte und Links</h2>
          <p>Als Diensteanbieter sind wir für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Für Inhalte externer Websites, auf die wir verweisen, ist stets der jeweilige Anbieter verantwortlich.</p>
        </section>
        <section>
          <h2 className="mb-2 font-bold text-slate-950">Verbraucherstreitbeilegung</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>
      </div>
    </div>
  );
}
