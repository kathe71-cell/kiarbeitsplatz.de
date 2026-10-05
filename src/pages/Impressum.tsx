import SimplePage from './SimplePage';

export default function Impressum() {
  return (
    <SimplePage title="Impressum" url="/impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>Jens Kathe<br />Hansastraße 6<br />34119 Kassel<br />Deutschland</p>
      <h2>Kontakt</h2>
      <p>Telefon: <a className="link" href="tel:+491786652623">+49 178 6652623</a><br />E-Mail: <a className="link" href="mailto:jens@kathe.org">jens@kathe.org</a></p>
      <h2>Umsatzsteuer</h2>
      <p>Kleinunternehmer nach § 19 UStG</p>
      <h2>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
      <p>Jens Kathe, Hansastraße 6, 34119 Kassel</p>
      <h2>Haftung für Inhalte und Links</h2>
      <p>Die Inhalte dieser Seite wurden sorgfältig erstellt. Gehaltsangaben sind Orientierungswerte ohne Gewähr. Für Inhalte externer Websites ist stets der jeweilige Anbieter verantwortlich.</p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </SimplePage>
  );
}
