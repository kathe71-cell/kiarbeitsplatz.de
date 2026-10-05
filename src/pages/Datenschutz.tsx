import SimplePage from './SimplePage';

export default function Datenschutz() {
  return (
    <SimplePage title="Datenschutz" url="/datenschutz">
      <h2>Verantwortlicher</h2>
      <p>Jens Kathe, Hansastraße 6, 34119 Kassel, E-Mail: jens@kathe.org</p>
      <h2>Hosting und Server-Logfiles</h2>
      <p>Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf werden technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browsertyp), um die Website auszuliefern und abzusichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung; Übermittlungen in die USA stützen sich auf das EU-US Data Privacy Framework bzw. Standardvertragsklauseln.</p>
      <h2>Vercel Web Analytics</h2>
      <p>Wir nutzen Vercel Web Analytics für eine statistische Auswertung der Seitenaufrufe. Es werden keine Cookies gesetzt und keine Nutzerprofile gebildet; erfasst werden nur zusammengefasste Daten wie aufgerufene Seiten, Herkunftsseite, Gerätetyp und Land. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
      <h2>Keine Werbung, keine externen Inhalte</h2>
      <p>Diese Website enthält keine Werbung und lädt keine Schriftarten, Skripte oder Tracker von Drittanbietern.</p>
      <h2>Kontakt per E-Mail</h2>
      <p>Wenn Sie uns per E-Mail schreiben, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage und löschen sie, sobald sie nicht mehr benötigt werden.</p>
      <h2>Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO) sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde, etwa dem Hessischen Beauftragten für Datenschutz und Informationsfreiheit.</p>
    </SimplePage>
  );
}
