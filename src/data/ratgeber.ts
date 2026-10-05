export interface Abschnitt {
  titel: string;
  text: string[];
  liste?: string[];
}

export interface Ratgeber {
  slug: string;
  rubrik: string;
  titel: string;
  vorspann: string;
  abschnitte: Abschnitt[];
  fragen: { f: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
}

export const ratgeber: Ratgeber[] = [
  {
    slug: 'einstieg',
    rubrik: 'Einstieg',
    titel: 'Wege in einen KI-Arbeitsplatz',
    vorspann: 'Ein Informatikstudium ist der bekannteste Weg, aber längst nicht der einzige. Viele KI-Stellen werden mit Menschen besetzt, die aus der Softwareentwicklung, der Datenanalyse, der Beratung oder aus Fachabteilungen kommen.',
    abschnitte: [
      {
        titel: 'Studium',
        text: [
          'Für technische Rollen wie Machine Learning Engineer oder Research Scientist ist ein Studium mit mathematischem Schwerpunkt die Regel. Neben Informatik bereiten auch Mathematik, Physik, Elektrotechnik und Statistik gut vor. Zahlreiche Hochschulen bieten inzwischen eigene Studiengänge mit Schwerpunkt künstliche Intelligenz oder Data Science an.',
        ],
      },
      {
        titel: 'Quereinstieg',
        text: [
          'Der häufigste Weg führt über eine verwandte Tätigkeit. Wer Software entwickelt, Daten auswertet oder Prozesse berät, kann sich schrittweise spezialisieren. Entscheidend sind nachweisbare Ergebnisse: eigene Projekte, ein öffentliches Code-Portfolio oder eine KI-Anwendung, die im eigenen Unternehmen tatsächlich genutzt wird.',
          'Für nicht-technische Rollen wie AI-Governance, KI-Training oder Produktmanagement ist Fachwissen aus Recht, Bildung oder Produktentwicklung oft wertvoller als Programmierkenntnisse.',
        ],
      },
      {
        titel: 'Weiterbildung und Förderung',
        text: [
          'Die Agentur für Arbeit fördert berufliche Weiterbildung. Arbeitsuchende können einen Bildungsgutschein erhalten (§ 81 SGB III), Beschäftigte werden unter bestimmten Voraussetzungen nach § 82 SGB III gefördert, wobei sich der Arbeitgeber je nach Betriebsgröße an den Kosten beteiligt. Voraussetzung ist ein zugelassener Kurs. Die Weiterbildungsdatenbank der Agentur für Arbeit (KURSNET) listet passende Angebote.',
          'In den meisten Bundesländern haben Beschäftigte zudem Anspruch auf Bildungsurlaub, in der Regel fünf Tage pro Jahr. Bayern und Sachsen haben kein entsprechendes Gesetz.',
        ],
        liste: [
          'Vor der Anmeldung klären, ob der Kurs nach AZAV zugelassen ist',
          'Auf Praxisanteile achten: eigene Projekte statt reiner Theorie',
          'Herstellerzertifikate der großen Cloud-Anbieter sind bei Arbeitgebern bekannt',
          'Kostenlose Hochschulkurse, etwa vom KI-Campus, eignen sich zum Einstieg',
        ],
      },
      {
        titel: 'Bewerbung',
        text: [
          'Stellenanzeigen im KI-Umfeld nennen oft eine lange Wunschliste. Kaum jemand erfüllt alle Punkte. Wichtiger ist, an einem konkreten Beispiel zu zeigen, wie man ein Problem mit Daten oder KI gelöst hat und was dabei herauskam. Viele Unternehmen bevorzugen Englisch als Arbeitssprache in technischen Teams.',
        ],
      },
    ],
    fragen: [
      { f: 'Kann man ohne Studium in der KI arbeiten?', a: 'Ja, vor allem in angewandten Rollen wie Data Engineering, KI-Training oder Beratung. Für Forschung und viele Ingenieursstellen ist ein Studium jedoch üblich.' },
      { f: 'Übernimmt die Agentur für Arbeit eine KI-Weiterbildung?', a: 'Das ist möglich, etwa über einen Bildungsgutschein oder die Beschäftigtenförderung nach § 82 SGB III. Voraussetzung sind eine Beratung und ein zugelassener Kurs.' },
    ],
    metaTitle: 'In die KI wechseln: Studium, Quereinstieg, Förderung',
    metaDesc: 'Wie man einen Arbeitsplatz in der KI findet: Studium, Quereinstieg, geförderte Weiterbildung mit Bildungsgutschein und Tipps zur Bewerbung.',
  },
  {
    slug: 'wandel',
    rubrik: 'Arbeitsmarkt',
    titel: 'Welche Arbeitsplätze die KI verändert',
    vorspann: 'Künstliche Intelligenz schafft neue Stellen und verändert bestehende. Anders als frühere Automatisierungswellen betrifft generative KI vor allem Büro- und Wissensarbeit. Ob ein Arbeitsplatz wegfällt, hängt weniger vom Beruf ab als von den einzelnen Tätigkeiten.',
    abschnitte: [
      {
        titel: 'Tätigkeiten statt Berufe',
        text: [
          'Das Institut für Arbeitsmarkt- und Berufsforschung (IAB) misst, welcher Anteil der Tätigkeiten eines Berufs heute schon von Technik übernommen werden könnte, das sogenannte Substituierbarkeitspotenzial. Im Job-Futuromat des IAB lässt sich dieser Wert für einzelne Berufe abrufen. Ein hoher Wert bedeutet nicht, dass der Beruf verschwindet, sondern dass sich die Arbeit darin stark verändert.',
        ],
      },
      {
        titel: 'Wo der Wandel am deutlichsten ist',
        text: ['Besonders betroffen sind Tätigkeiten mit standardisierten Texten, Daten und Abläufen:'],
        liste: [
          'Sachbearbeitung, Buchhaltung und Dokumentenprüfung',
          'Kundenservice mit wiederkehrenden Anfragen',
          'Übersetzung, Redaktion und einfache Texterstellung',
          'Programmieren von Standardfunktionen',
          'Recherche und Zusammenfassung',
        ],
      },
      {
        titel: 'Wo neue Arbeit entsteht',
        text: [
          'Neue Stellen entstehen dort, wo KI entwickelt, betrieben, abgesichert und eingeführt wird: in Datenteams, im Betrieb von KI-Systemen, in Governance und Compliance sowie in Schulung und Beratung. Hinzu kommen Rollen, die KI-Ergebnisse prüfen und verantworten.',
          'Tätigkeiten mit körperlicher Arbeit in wechselnden Umgebungen, persönlicher Zuwendung oder komplexer Verhandlung sind bisher deutlich weniger betroffen.',
        ],
      },
    ],
    fragen: [
      { f: 'Wird mein Arbeitsplatz durch KI ersetzt?', a: 'In den meisten Berufen werden einzelne Aufgaben übernommen, nicht der ganze Arbeitsplatz. Einen ersten Anhaltspunkt bietet der Job-Futuromat des IAB.' },
      { f: 'Welche Berufe sind sicher vor KI?', a: 'Keiner ist völlig unberührt. Weniger betroffen sind bislang Handwerk, Pflege, Erziehung und Tätigkeiten mit viel direktem Kontakt zu Menschen.' },
    ],
    metaTitle: 'KI und Arbeitsplätze: Welche Jobs sich verändern',
    metaDesc: 'Welche Arbeitsplätze KI verändert, welche neu entstehen und wie man das Risiko für den eigenen Beruf einschätzt.',
  },
];

export const ratgeberBySlug = (s: string) => ratgeber.find((r) => r.slug === s);
