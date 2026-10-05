import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const h2 = 'mb-2 font-bold text-slate-950';

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <Breadcrumbs items={[{ name: 'Datenschutzerklärung', url: '/datenschutz' }]} />
      <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Datenschutzerklärung</h1>
      <div className="mt-6 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 leading-relaxed text-slate-800 shadow-sm sm:p-8">
        <section>
          <h2 className={h2}>1. Verantwortlicher</h2>
          <p>Verantwortlich im Sinne der DSGVO ist Jens Kathe, Hansastraße 6, 34119 Kassel, E-Mail: jens@kathe.org (siehe <Link to="/impressum" className="underline">Impressum</Link>).</p>
        </section>
        <section>
          <h2 className={h2}>2. Hosting und Server-Logfiles</h2>
          <p>Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf werden technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browsertyp), um die Website auszuliefern und ihre Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung; Übermittlungen in die USA stützen sich auf das EU-US Data Privacy Framework bzw. Standardvertragsklauseln.</p>
        </section>
        <section>
          <h2 className={h2}>3. Vercel Web Analytics</h2>
          <p>Wir nutzen Vercel Web Analytics zur statistischen Auswertung der Seitenaufrufe. Dabei werden keine Cookies gesetzt und keine Nutzerprofile gebildet; es werden nur aggregierte Daten wie aufgerufene Seiten, Referrer, Gerätetyp und Land erfasst. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
        </section>
        <section>
          <h2 className={h2}>4. Keine externen Inhalte, keine Werbung</h2>
          <p>Diese Website lädt keine externen Schriftarten, Skripte oder Tracker von Drittanbietern und enthält keine Werbung. Die Werkzeuge „KI-Check“ und „KI-Richtlinie erstellen“ verarbeiten Ihre Eingaben ausschließlich lokal in Ihrem Browser; es werden keine Eingaben an uns übertragen oder gespeichert.</p>
        </section>
        <section>
          <h2 className={h2}>5. Kontakt per E-Mail</h2>
          <p>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und löschen sie, sobald sie nicht mehr erforderlich sind.</p>
        </section>
        <section>
          <h2 className={h2}>6. Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO) sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde, z. B. dem Hessischen Beauftragten für Datenschutz und Informationsfreiheit.</p>
        </section>
      </div>
    </div>
  );
}
