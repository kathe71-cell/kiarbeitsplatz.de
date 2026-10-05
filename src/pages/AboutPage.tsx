import SimplePage from './SimplePage';

export default function AboutPage() {
  return (
    <SimplePage title="Über uns" url="/ueber-uns">
      <p>KI·Arbeitsplatz beschreibt die Berufe, die hinter künstlicher Intelligenz stehen: was sie verlangen, was sie einbringen und wie man hineinfindet. Die Seite richtet sich an Studierende, Berufserfahrene, die wechseln möchten, und an alle, die verstehen wollen, wie sich der Arbeitsmarkt verändert.</p>
      <p>Die Inhalte entstehen redaktionell auf Grundlage öffentlich zugänglicher Quellen wie Stellenanzeigen, Gehaltsvergleichen sowie Veröffentlichungen der Bundesagentur für Arbeit und des Instituts für Arbeitsmarkt- und Berufsforschung. Wir aktualisieren sie regelmäßig.</p>
      <p>Die Seite enthält keine Werbung und keine Partnerlinks.</p>
      <p>Hinweise und Korrekturen gern an <a className="link" href="mailto:jens@kathe.org">jens@kathe.org</a>.</p>
    </SimplePage>
  );
}
