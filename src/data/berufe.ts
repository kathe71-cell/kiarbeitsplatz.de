export type Feld = 'Technik' | 'Daten' | 'Produkt & Beratung' | 'Recht & Governance';

export interface Beruf {
  slug: string;
  name: string;
  feld: Feld;
  kurz: string;
  /** Bruttojahresgehalt in Tausend Euro: Einstieg bis erfahren (Orientierung) */
  gehalt: [number, number];
  aufgaben: string[];
  profil: string[];
  wege: string;
  arbeitgeber: string;
  ausblick: string;
  metaTitle: string;
  metaDesc: string;
}

export const berufe: Beruf[] = [
  {
    slug: 'machine-learning-engineer',
    name: 'Machine Learning Engineer',
    feld: 'Technik',
    kurz: 'Bringt Modelle aus dem Experiment in den produktiven Betrieb.',
    gehalt: [58, 95],
    aufgaben: [
      'Modelle trainieren, feinabstimmen und für den Einsatz optimieren',
      'Schnittstellen und Datenpipelines für KI-Anwendungen bauen',
      'Sprachmodelle über APIs oder eigene Infrastruktur in Produkte integrieren',
      'Qualität messen: Evaluierung, Tests, Überwachung im Betrieb',
    ],
    profil: [
      'Sicheres Programmieren, meist in Python',
      'Erfahrung mit Frameworks wie PyTorch',
      'Grundlagen in Statistik und linearer Algebra',
      'Softwaretechnik: Versionierung, Tests, Cloud',
    ],
    wege: 'Typisch ist ein Studium der Informatik, Mathematik, Physik oder Elektrotechnik. Viele kommen aus der Softwareentwicklung und spezialisieren sich über Projekte und Weiterbildung.',
    arbeitgeber: 'Softwarehäuser, Start-ups, Industrie (Automobil, Maschinenbau), Banken und Versicherungen, Beratungen.',
    ausblick: 'Die Rolle verschiebt sich vom Training eigener Modelle hin zur Integration und Absicherung großer Sprachmodelle. Wer beides beherrscht, ist besonders gefragt.',
    metaTitle: 'Machine Learning Engineer: Aufgaben, Gehalt, Einstieg',
    metaDesc: 'Was Machine Learning Engineers tun, welche Qualifikation gefragt ist, wie viel man verdient und wie der Einstieg gelingt.',
  },
  {
    slug: 'data-scientist',
    name: 'Data Scientist',
    feld: 'Daten',
    kurz: 'Gewinnt aus Daten Antworten auf geschäftliche Fragen.',
    gehalt: [52, 85],
    aufgaben: [
      'Fragestellungen mit Fachabteilungen schärfen',
      'Daten aufbereiten, analysieren und visualisieren',
      'Prognose- und Klassifikationsmodelle entwickeln',
      'Ergebnisse verständlich präsentieren und Entscheidungen vorbereiten',
    ],
    profil: [
      'Statistik und Methodenwissen',
      'Python oder R, SQL',
      'Verständnis für das jeweilige Geschäftsfeld',
      'Klare Kommunikation gegenüber Nicht-Fachleuten',
    ],
    wege: 'Häufig nach einem Studium mit quantitativem Schwerpunkt, etwa Statistik, Wirtschaftsinformatik, Physik oder Volkswirtschaft. Quereinstieg aus der Datenanalyse ist verbreitet.',
    arbeitgeber: 'Handel, Logistik, Energie, Gesundheitswesen, öffentliche Verwaltung, Marktforschung.',
    ausblick: 'Routineanalysen werden zunehmend automatisiert. Gefragt bleiben Menschen, die die richtigen Fragen stellen und Ergebnisse kritisch einordnen.',
    metaTitle: 'Data Scientist: Aufgaben, Gehalt und Einstieg',
    metaDesc: 'Der Beruf Data Scientist im Überblick: typische Aufgaben, gefragte Kenntnisse, Gehaltsspanne in Deutschland und Wege in den Job.',
  },
  {
    slug: 'data-engineer',
    name: 'Data Engineer',
    feld: 'Daten',
    kurz: 'Baut die Datenbasis, auf der jede KI-Anwendung steht.',
    gehalt: [55, 88],
    aufgaben: [
      'Datenquellen anbinden und zusammenführen',
      'Datenpipelines und Datenplattformen aufbauen und betreiben',
      'Datenqualität, Zugriffsrechte und Dokumentation sicherstellen',
      'Daten für Training und Suche in Sprachmodellen bereitstellen',
    ],
    profil: [
      'SQL und eine Programmiersprache wie Python oder Scala',
      'Erfahrung mit Cloud-Datenplattformen',
      'Verständnis für Datenschutz und Datenmodellierung',
    ],
    wege: 'Oft über ein Informatikstudium oder eine Ausbildung zur Fachinformatikerin oder zum Fachinformatiker mit anschließender Spezialisierung.',
    arbeitgeber: 'Nahezu alle Branchen mit größeren Datenbeständen, besonders Handel, Finanzwesen, Telekommunikation und Industrie.',
    ausblick: 'Ohne saubere Daten bleibt jedes KI-Projekt Stückwerk. Die Nachfrage folgt direkt den KI-Investitionen der Unternehmen.',
    metaTitle: 'Data Engineer: Beruf, Gehalt und Einstieg',
    metaDesc: 'Data Engineers bauen die Datenbasis für KI. Aufgaben, Anforderungen, Gehaltsspanne und Wege in den Beruf.',
  },
  {
    slug: 'mlops-engineer',
    name: 'MLOps Engineer',
    feld: 'Technik',
    kurz: 'Sorgt dafür, dass KI-Systeme zuverlässig und nachvollziehbar laufen.',
    gehalt: [58, 92],
    aufgaben: [
      'Infrastruktur für Training und Betrieb von Modellen automatisieren',
      'Versionen von Daten, Modellen und Code nachvollziehbar halten',
      'Leistung, Kosten und Fehler im Betrieb überwachen',
      'Dokumentation und Protokolle für Prüfungen bereitstellen',
    ],
    profil: [
      'DevOps-Erfahrung: Container, CI/CD, Cloud',
      'Grundverständnis von Machine Learning',
      'Sorgfalt bei Sicherheit und Dokumentation',
    ],
    wege: 'Meist ein Wechsel aus DevOps, Systemadministration oder Softwareentwicklung, ergänzt um Wissen über den Lebenszyklus von Modellen.',
    arbeitgeber: 'Unternehmen mit eigenen KI-Produkten, Cloud-Anbieter, IT-Dienstleister.',
    ausblick: 'Mit den Dokumentationspflichten der EU-KI-Verordnung gewinnt nachvollziehbarer Betrieb an Gewicht.',
    metaTitle: 'MLOps Engineer: Aufgaben, Gehalt, Einstieg',
    metaDesc: 'MLOps Engineers betreiben KI-Systeme zuverlässig. Was der Beruf umfasst, was er voraussetzt und was er einbringt.',
  },
  {
    slug: 'ki-forschung',
    name: 'Research Scientist',
    feld: 'Technik',
    kurz: 'Entwickelt neue Methoden und veröffentlicht Ergebnisse.',
    gehalt: [62, 110],
    aufgaben: [
      'Neue Verfahren entwerfen und experimentell prüfen',
      'Fachliteratur auswerten und Ergebnisse publizieren',
      'Prototypen in Produktteams überführen',
    ],
    profil: [
      'Meist Promotion in Informatik, Mathematik oder Physik',
      'Veröffentlichungen in Fachkonferenzen',
      'Sehr gute Englischkenntnisse',
    ],
    wege: 'Klassisch über Promotion und Postdoc an Universitäten oder Forschungsinstituten, danach Wechsel in Industrielabore möglich.',
    arbeitgeber: 'Universitäten, Max-Planck- und Fraunhofer-Institute, DFKI, Forschungsabteilungen großer Konzerne und KI-Labore.',
    ausblick: 'Wenige, stark umworbene Stellen. Gehälter in der Industrie liegen teils deutlich über der Spanne, im öffentlichen Dienst darunter (Tarif TV-L/TVöD).',
    metaTitle: 'KI-Forschung: Research Scientist werden',
    metaDesc: 'Arbeiten in der KI-Forschung: Aufgaben, Voraussetzungen, Gehälter in Hochschule und Industrie, typische Karrierewege.',
  },
  {
    slug: 'ki-produktmanager',
    name: 'KI-Produktmanager',
    feld: 'Produkt & Beratung',
    kurz: 'Entscheidet, welches Problem eine KI-Anwendung lösen soll und wie.',
    gehalt: [62, 100],
    aufgaben: [
      'Anwendungsfälle finden und nach Nutzen und Risiko bewerten',
      'Anforderungen mit Entwicklung, Fachbereichen und Recht abstimmen',
      'Qualitätskriterien für KI-Ergebnisse festlegen',
      'Einführung, Akzeptanz und Wirkung messen',
    ],
    profil: [
      'Erfahrung im Produktmanagement',
      'Solides technisches Verständnis von Sprachmodellen und ihren Grenzen',
      'Moderation zwischen Technik, Fachbereich und Management',
    ],
    wege: 'Meist ein Wechsel aus dem klassischen Produktmanagement oder aus technischen Rollen mit Kundennähe.',
    arbeitgeber: 'Softwareunternehmen, Plattformen, Medienhäuser, Konzerne mit internen KI-Programmen.',
    ausblick: 'Je leichter KI technisch verfügbar wird, desto wichtiger ist die Frage, wo sie wirklich hilft.',
    metaTitle: 'KI-Produktmanager: Rolle, Gehalt, Einstieg',
    metaDesc: 'Was KI-Produktmanagerinnen und -manager tun, welche Kenntnisse sie brauchen und wie viel die Rolle einbringt.',
  },
  {
    slug: 'ki-berater',
    name: 'KI-Berater',
    feld: 'Produkt & Beratung',
    kurz: 'Begleitet Unternehmen von der Idee bis zur Einführung.',
    gehalt: [52, 90],
    aufgaben: [
      'Potenziale in Prozessen analysieren',
      'Strategien und Fahrpläne für den KI-Einsatz erarbeiten',
      'Pilotprojekte steuern und Schulungen durchführen',
    ],
    profil: [
      'Branchen- oder Prozesswissen',
      'Breites Verständnis gängiger KI-Werkzeuge',
      'Projektmanagement und Präsentationsstärke',
    ],
    wege: 'Einstieg über Trainee-Programme großer Beratungen, als Spezialisierung aus der IT- oder Prozessberatung oder selbstständig.',
    arbeitgeber: 'Unternehmensberatungen, IT-Dienstleister, Kammern und Verbände, Selbstständigkeit.',
    ausblick: 'Gerade kleine und mittlere Unternehmen suchen Unterstützung, die Technik und Alltag zusammenbringt.',
    metaTitle: 'KI-Berater: Aufgaben, Gehalt und Einstieg',
    metaDesc: 'KI-Beraterinnen und -Berater begleiten Unternehmen bei der Einführung von KI. Aufgaben, Profil, Verdienst und Einstieg.',
  },
  {
    slug: 'ai-governance',
    name: 'AI-Governance-Manager',
    feld: 'Recht & Governance',
    kurz: 'Sorgt dafür, dass KI rechtssicher und verantwortungsvoll eingesetzt wird.',
    gehalt: [60, 98],
    aufgaben: [
      'KI-Anwendungen im Unternehmen erfassen und nach Risiko einstufen',
      'Pflichten aus der EU-KI-Verordnung und dem Datenschutz umsetzen',
      'Richtlinien, Schulungen und Freigabeprozesse aufbauen',
      'Mit Betriebsrat, Datenschutz und IT-Sicherheit zusammenarbeiten',
    ],
    profil: [
      'Hintergrund in Recht, Compliance, Datenschutz oder IT-Sicherheit',
      'Gute Kenntnis der KI-Verordnung',
      'Technisches Grundverständnis',
    ],
    wege: 'Häufig ein Wechsel aus Datenschutz, Compliance oder Revision, ergänzt um Zertifikatskurse zur KI-Verordnung.',
    arbeitgeber: 'Konzerne, Banken und Versicherungen, Gesundheitswesen, Prüfungsgesellschaften, Behörden.',
    ausblick: 'Ein noch junges Berufsbild, das mit der schrittweisen Geltung der KI-Verordnung deutlich wächst.',
    metaTitle: 'AI Governance Manager: Beruf mit Zukunft',
    metaDesc: 'AI-Governance-Fachleute sorgen für rechtssicheren KI-Einsatz. Aufgaben, Qualifikation, Gehalt und Einstieg.',
  },
  {
    slug: 'computer-vision-engineer',
    name: 'Computer-Vision-Ingenieur',
    feld: 'Technik',
    kurz: 'Bringt Maschinen bei, Bilder und Videos auszuwerten.',
    gehalt: [56, 90],
    aufgaben: [
      'Bildverarbeitung für Qualitätsprüfung, Medizin oder Fahrzeuge entwickeln',
      'Trainingsdaten planen und annotieren lassen',
      'Modelle auf Kameras und eingebetteter Hardware zum Laufen bringen',
    ],
    profil: [
      'Bildverarbeitung und Deep Learning',
      'Python, oft auch C++',
      'Verständnis für Optik und Sensorik ist von Vorteil',
    ],
    wege: 'Studium der Informatik, Elektrotechnik, Mechatronik oder Physik, oft mit Abschlussarbeit im Bereich Bildverarbeitung.',
    arbeitgeber: 'Automobil- und Zulieferindustrie, Medizintechnik, Robotik, Landwirtschaft, Sicherheitstechnik.',
    ausblick: 'Stark mit der deutschen Industrie verknüpft und weniger von Sprachmodellen verdrängt als andere Felder.',
    metaTitle: 'Computer Vision Engineer: Beruf und Gehalt',
    metaDesc: 'Computer-Vision-Ingenieurinnen und -Ingenieure entwickeln Bildverarbeitung mit KI. Aufgaben, Profil, Gehalt, Arbeitgeber.',
  },
  {
    slug: 'ki-trainer',
    name: 'KI-Trainer und Dozent',
    feld: 'Produkt & Beratung',
    kurz: 'Vermittelt Beschäftigten den sicheren Umgang mit KI.',
    gehalt: [45, 75],
    aufgaben: [
      'Schulungen zu KI-Werkzeugen und KI-Kompetenz konzipieren',
      'Workshops in Unternehmen, Kammern und Bildungsträgern leiten',
      'Lernmaterialien aktuell halten',
    ],
    profil: [
      'Didaktische Erfahrung',
      'Praxis mit gängigen KI-Werkzeugen',
      'Grundwissen zu Datenschutz und KI-Verordnung',
    ],
    wege: 'Quereinstieg aus Lehre, Erwachsenenbildung, IT-Support oder Fachabteilungen ist üblich. Viele arbeiten freiberuflich mit Tagessätzen.',
    arbeitgeber: 'Bildungsträger, Volkshochschulen, IHKs, Personalabteilungen großer Unternehmen, Selbstständigkeit.',
    ausblick: 'Die Pflicht zur KI-Kompetenz nach Art. 4 KI-Verordnung sorgt für anhaltenden Schulungsbedarf.',
    metaTitle: 'KI-Trainer werden: Aufgaben und Verdienst',
    metaDesc: 'KI-Trainerinnen und -Trainer schulen Beschäftigte im Umgang mit KI. Wege in den Beruf, Verdienst und Perspektiven.',
  },
];

export const felder: Feld[] = ['Technik', 'Daten', 'Produkt & Beratung', 'Recht & Governance'];
export const berufBySlug = (s: string) => berufe.find((b) => b.slug === s);
