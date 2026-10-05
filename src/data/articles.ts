export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  category: 'Recht' | 'Praxis' | 'Ausstattung';
  title: string;
  metaTitle: string;
  description: string;
  keywords: string;
  intro: string;
  keyFacts: string[];
  sections: ArticleSection[];
  faq: { q: string; a: string }[];
  related: string[];
  updated: string;
}

const u = '2026-10-05';

export const articles: Article[] = [
  {
    slug: 'ki-kompetenz-pflicht',
    category: 'Recht',
    title: 'KI-Kompetenz nach Art. 4 KI-Verordnung: Was Arbeitgeber jetzt tun',
    metaTitle: 'KI-Kompetenz Pflicht (Art. 4 AI Act) für Arbeitgeber',
    description: 'Seit 2. Februar 2025 gilt die Pflicht zur KI-Kompetenz nach Art. 4 KI-Verordnung. Wen sie trifft, was als Schulung genügt und wie Sie sie dokumentieren.',
    keywords: 'KI-Kompetenz, Art. 4 KI-Verordnung, AI Act Schulungspflicht, KI Schulung Mitarbeiter, AI Literacy, KI-Kompetenz Nachweis',
    intro: 'Wer KI-Systeme im Betrieb einsetzt, gilt nach der KI-Verordnung (EU) 2024/1689 als „Betreiber“. Für Betreiber gilt seit dem 2. Februar 2025 Art. 4: Sie sollen nach besten Kräften sicherstellen, dass Beschäftigte, die mit KI arbeiten, über ausreichende KI-Kompetenz verfügen. Das betrifft auch kleine Betriebe, die nur ChatGPT, Copilot oder ein Übersetzungstool nutzen.',
    keyFacts: [
      'Gilt seit 2. Februar 2025 für Anbieter und Betreiber von KI-Systemen',
      'Keine feste Stundenzahl und kein amtliches Zertifikat vorgeschrieben',
      'Maßstab: technisches Wissen, Erfahrung, Ausbildung und Einsatzkontext',
      'Dokumentation der Maßnahmen ist dringend zu empfehlen',
    ],
    sections: [
      {
        heading: 'Wer ist betroffen?',
        paragraphs: [
          'Betreiber ist jede natürliche oder juristische Person, die ein KI-System in eigener Verantwortung beruflich verwendet. Damit fallen praktisch alle Unternehmen, Behörden, Vereine und Selbstständige darunter, die KI-Werkzeuge für ihre Arbeit einsetzen. Eine Mindestgröße gibt es nicht.',
          'Die Pflicht bezieht sich auf das eigene Personal und auf „andere Personen“, die im Auftrag des Betriebs mit KI-Systemen umgehen, etwa Freelancer oder Leiharbeitskräfte.',
        ],
      },
      {
        heading: 'Was bedeutet „ausreichende KI-Kompetenz“?',
        paragraphs: [
          'Art. 3 Nr. 56 KI-Verordnung beschreibt KI-Kompetenz als Fähigkeiten, Kenntnisse und Verständnis, um KI-Systeme sachkundig einzusetzen und sich der Chancen, Risiken und möglichen Schäden bewusst zu sein. Die EU-Kommission hat dazu Fragen und Antworten veröffentlicht: Ein risikobasierter Ansatz ist ausdrücklich gewollt.',
          'In der Praxis heißt das: Eine Sachbearbeiterin, die Texte mit einem Sprachmodell entwirft, braucht anderes Wissen als ein Recruiting-Team, das Bewerbungen mit KI vorsortiert.',
        ],
        bullets: [
          'Grundlagen: Wie funktionieren Sprachmodelle, warum „halluzinieren“ sie?',
          'Datenschutz und Geschäftsgeheimnisse: Was darf in welches Tool eingegeben werden?',
          'Urheberrecht und Kennzeichnung von KI-Inhalten',
          'Grenzen: Ergebnisse prüfen, keine automatisierten Entscheidungen über Menschen ohne Kontrolle',
          'Interne Regeln: KI-Richtlinie, freigegebene Tools, Ansprechperson',
        ],
      },
      {
        heading: 'Schulung organisieren und dokumentieren',
        paragraphs: [
          'Die Verordnung schreibt kein bestimmtes Format vor. Bewährt haben sich kurze Basisschulungen für alle, vertiefende Module für Rollen mit höherem Risiko und eine schriftliche KI-Richtlinie. Halten Sie fest, wer wann zu welchen Inhalten geschult wurde; bei Schäden durch fehlerhaften KI-Einsatz kann diese Dokumentation wichtig werden.',
          'Für Art. 4 selbst sieht die Verordnung kein eigenes Bußgeld vor. Fehlende Schulungen können aber bei Haftungsfragen und bei Verstößen gegen andere Pflichten (etwa Datenschutz) eine Rolle spielen. Die nationale Marktüberwachung soll in Deutschland die Bundesnetzagentur übernehmen.',
        ],
      },
    ],
    faq: [
      { q: 'Gilt die KI-Kompetenzpflicht auch für kleine Unternehmen?', a: 'Ja. Art. 4 KI-Verordnung kennt keine Mindestgröße. Der Aufwand richtet sich aber nach dem Einsatz: Wer nur einfache Textassistenten nutzt, kommt mit einer kompakten Schulung und klaren Regeln aus.' },
      { q: 'Brauchen Beschäftigte ein Zertifikat?', a: 'Nein. Die Verordnung verlangt kein bestimmtes Zertifikat. Wichtig ist, dass die Maßnahmen zum Einsatz passen und nachvollziehbar dokumentiert sind.' },
      { q: 'Seit wann gilt die Pflicht?', a: 'Art. 4 gilt seit dem 2. Februar 2025, zeitgleich mit den Verboten bestimmter KI-Praktiken nach Art. 5.' },
    ],
    related: ['ki-einfuehrung-unternehmen', 'verbotene-und-hochrisiko-ki', 'betriebsrat-ki'],
    updated: u,
  },
  {
    slug: 'betriebsrat-ki',
    category: 'Recht',
    title: 'KI und Betriebsrat: Mitbestimmung, Unterrichtung und Betriebsvereinbarung',
    metaTitle: 'KI und Betriebsrat: Mitbestimmung nach BetrVG',
    description: 'Wann der Betriebsrat bei KI mitbestimmt (§ 87 Abs. 1 Nr. 6 BetrVG), welche Rechte seit 2021 speziell für KI gelten und was in eine KI-Betriebsvereinbarung gehört.',
    keywords: 'KI Betriebsrat, Mitbestimmung KI, § 87 Abs. 1 Nr. 6 BetrVG KI, Betriebsvereinbarung KI, ChatGPT Betriebsrat, § 80 Abs. 3 BetrVG Sachverständiger',
    intro: 'In Betrieben mit Betriebsrat ist die Einführung von KI fast immer ein Thema für die Mitbestimmung. Das Betriebsrätemodernisierungsgesetz von 2021 hat KI ausdrücklich ins Betriebsverfassungsgesetz aufgenommen. Wer früh einbindet, vermeidet Stillstand und Einigungsstellenverfahren.',
    keyFacts: [
      '§ 87 Abs. 1 Nr. 6 BetrVG: Mitbestimmung bei technischen Einrichtungen zur Überwachung',
      '§ 90 Abs. 1 Nr. 3 BetrVG: Unterrichtung über geplante KI-Anwendungen',
      '§ 80 Abs. 3 Satz 2 BetrVG: Sachverständiger zu KI gilt als erforderlich',
      '§ 95 Abs. 2a BetrVG: Auswahlrichtlinien auch beim KI-Einsatz mitbestimmt',
    ],
    sections: [
      {
        heading: 'Mitbestimmung bei Überwachungseignung',
        paragraphs: [
          'Nach § 87 Abs. 1 Nr. 6 BetrVG bestimmt der Betriebsrat mit, wenn technische Einrichtungen eingeführt werden, die dazu geeignet sind, Verhalten oder Leistung der Beschäftigten zu überwachen. Nach ständiger Rechtsprechung des Bundesarbeitsgerichts reicht die objektive Eignung, eine Überwachungsabsicht ist nicht nötig. Viele KI-Systeme protokollieren Eingaben und Nutzung und sind damit regelmäßig erfasst.',
          'Das Arbeitsgericht Hamburg hat 2024 (Beschluss vom 16.01.2024, 24 BVGa 1/24) entschieden, dass die Erlaubnis, ChatGPT über private Konten im Browser zu nutzen, nicht unter Nr. 6 fällt, weil der Arbeitgeber dabei keine Nutzungsdaten erhält. Werden KI-Tools dagegen zentral lizenziert und verwaltet, sieht das in der Regel anders aus.',
        ],
      },
      {
        heading: 'Unterrichtung, Beratung und Sachverstand',
        paragraphs: [
          'Plant der Arbeitgeber den Einsatz von KI, muss er den Betriebsrat nach § 90 Abs. 1 Nr. 3 BetrVG rechtzeitig und unter Vorlage der Unterlagen unterrichten. Zieht der Betriebsrat zur Beurteilung einen externen Sachverständigen hinzu, gilt dies nach § 80 Abs. 3 Satz 2 BetrVG als erforderlich, soweit es um KI geht. Die Kosten trägt der Arbeitgeber, über die Person muss man sich verständigen.',
          'Werden Auswahlrichtlinien für Einstellungen, Versetzungen oder Kündigungen mithilfe von KI erstellt, besteht nach § 95 Abs. 2a BetrVG ebenfalls Mitbestimmung.',
        ],
      },
      {
        heading: 'Was in eine KI-Betriebsvereinbarung gehört',
        paragraphs: [
          'Bewährt haben sich Rahmenvereinbarungen, die Grundsätze festlegen, und Anlagen pro Tool. So muss nicht für jedes neue Werkzeug neu verhandelt werden.',
        ],
        bullets: [
          'Geltungsbereich und Liste der freigegebenen KI-Systeme (als Anlage)',
          'Verbot der Leistungs- und Verhaltenskontrolle über KI-Protokolle, Ausnahmen klar regeln',
          'Datenschutz: Zwecke, Speicherfristen, Zugriffsrechte',
          'Keine Personalentscheidungen allein durch KI',
          'Qualifizierung (passend zu Art. 4 KI-Verordnung)',
          'Verfahren für neue Tools und regelmäßige Überprüfung',
        ],
      },
    ],
    faq: [
      { q: 'Darf der Arbeitgeber ChatGPT ohne Betriebsrat einführen?', a: 'Das hängt von der Ausgestaltung ab. Werden Nutzungsdaten zentral erfasst (z. B. Unternehmenslizenz mit Admin-Konsole), ist die Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG regelmäßig betroffen. Das ArbG Hamburg sah bei der bloßen Erlaubnis privater Browser-Nutzung kein Mitbestimmungsrecht nach Nr. 6.' },
      { q: 'Wer bezahlt den KI-Sachverständigen des Betriebsrats?', a: 'Der Arbeitgeber. Die Erforderlichkeit wird bei KI gesetzlich vermutet (§ 80 Abs. 3 Satz 2 BetrVG); über die Person des Sachverständigen ist eine Vereinbarung zu treffen.' },
    ],
    related: ['beschaeftigte-rechte-ki', 'datenschutz-ki-tools', 'ki-kompetenz-pflicht'],
    updated: u,
  },
  {
    slug: 'datenschutz-ki-tools',
    category: 'Recht',
    title: 'Datenschutz bei KI-Tools am Arbeitsplatz',
    metaTitle: 'Datenschutz bei KI-Tools im Job: DSGVO-Checkliste',
    description: 'Welche Daten in ChatGPT, Copilot & Co. dürfen, was ein Auftragsverarbeitungsvertrag regelt und warum Drittlandtransfer, Training und Löschfristen geprüft werden sollten.',
    keywords: 'Datenschutz KI Tools, ChatGPT DSGVO Arbeitgeber, KI Auftragsverarbeitung, Copilot Datenschutz, personenbezogene Daten KI, Beschäftigtendatenschutz KI',
    intro: 'Die meisten Datenschutzfragen beim KI-Einsatz entstehen nicht durch die Technik, sondern durch das, was Beschäftigte eingeben. Kundendaten, Personalakten oder Vertragsentwürfe landen schnell in einem Chatfenster. Klare Regeln und das richtige Lizenzmodell lösen die meisten Probleme.',
    keyFacts: [
      'Für personenbezogene Daten braucht es eine Rechtsgrundlage nach Art. 6 DSGVO',
      'Bei Unternehmenslizenzen: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO',
      'Drittlandtransfer (z. B. USA) gesondert prüfen',
      'Nutzung von Eingaben zum Training vertraglich ausschließen',
    ],
    sections: [
      {
        heading: 'Private Konten vs. Unternehmenslizenz',
        paragraphs: [
          'Kostenlose Verbraucherkonten sind für den beruflichen Einsatz mit personenbezogenen Daten meist ungeeignet: Es fehlt ein Auftragsverarbeitungsvertrag, und Eingaben können je nach Einstellung zum Training verwendet werden. Business- und Enterprise-Tarife der großen Anbieter bieten in der Regel einen Vertrag nach Art. 28 DSGVO und schließen Training mit Kundendaten aus. Prüfen Sie die aktuellen Vertragsbedingungen des jeweiligen Anbieters.',
        ],
      },
      {
        heading: 'Checkliste vor der Freigabe eines KI-Tools',
        paragraphs: ['Diese Punkte sollten Datenschutzbeauftragte und IT vor der Freigabe klären:'],
        bullets: [
          'Auftragsverarbeitungsvertrag und Liste der Unterauftragsverarbeiter',
          'Serverstandort und Grundlage für Drittlandtransfers (z. B. EU-US Data Privacy Framework)',
          'Keine Nutzung der Eingaben zum Training, Speicherdauer der Verläufe',
          'Zugriffskonzept, Single Sign-on, Protokollierung',
          'Eintrag im Verzeichnis der Verarbeitungstätigkeiten',
          'Datenschutz-Folgenabschätzung bei hohem Risiko (Art. 35 DSGVO), z. B. bei Bewerberauswahl',
        ],
      },
      {
        heading: 'Beschäftigtendaten',
        paragraphs: [
          'Für die Verarbeitung von Beschäftigtendaten stützten sich Arbeitgeber lange auf § 26 BDSG. Nach dem Urteil des EuGH vom 30.03.2023 (C-34/21) zu einer gleichlautenden hessischen Regelung ist umstritten, ob diese Norm noch trägt; in der Praxis wird daher zusätzlich auf Art. 6 Abs. 1 DSGVO und auf Betriebsvereinbarungen (Art. 88 DSGVO) abgestellt. Automatisierte Entscheidungen mit rechtlicher Wirkung sind nach Art. 22 DSGVO nur in engen Grenzen zulässig.',
        ],
      },
    ],
    faq: [
      { q: 'Dürfen Beschäftigte Kundendaten in ChatGPT eingeben?', a: 'Nur wenn der Arbeitgeber dafür ein geeignetes, vertraglich abgesichertes Tool freigegeben hat und eine Rechtsgrundlage besteht. Ohne Freigabe sollten personenbezogene Daten anonymisiert oder weggelassen werden.' },
      { q: 'Ist Microsoft 365 Copilot automatisch datenschutzkonform?', a: 'Nein, kein Tool ist automatisch konform. Entscheidend sind Konfiguration, Berechtigungskonzept, Vertragslage und die konkreten Zwecke im Unternehmen.' },
    ],
    related: ['beschaeftigte-rechte-ki', 'betriebsrat-ki', 'ki-tools-buero'],
    updated: u,
  },
  {
    slug: 'beschaeftigte-rechte-ki',
    category: 'Recht',
    title: 'KI im Job: Rechte und Pflichten von Beschäftigten',
    metaTitle: 'KI im Job: Darf mein Chef ChatGPT verbieten?',
    description: 'Darf der Arbeitgeber KI verbieten oder vorschreiben? Was gilt bei heimlicher Nutzung, Fehlern durch KI und Überwachung? Antworten für Beschäftigte.',
    keywords: 'ChatGPT Arbeit verboten, KI Arbeitnehmer Rechte, Schatten-KI, KI Nutzung Abmahnung, Arbeitgeber KI vorschreiben, Haftung KI Fehler Arbeitnehmer',
    intro: 'Viele Beschäftigte nutzen KI-Werkzeuge längst, oft ohne dass der Arbeitgeber davon weiß. Fachleute sprechen von „Schatten-KI“. Die wichtigsten Fragen drehen sich um Erlaubnis, Haftung und Kontrolle. Die folgenden Informationen sind allgemeiner Natur und ersetzen keine Rechtsberatung im Einzelfall.',
    keyFacts: [
      'Arbeitgeber dürfen über das Direktionsrecht (§ 106 GewO) KI-Nutzung regeln',
      'Verstöße gegen klare Verbote können arbeitsrechtliche Folgen haben',
      'Bei Fehlern gelten die Grundsätze der Arbeitnehmerhaftung',
      'Emotionserkennung am Arbeitsplatz ist seit 2025 grundsätzlich verboten',
    ],
    sections: [
      {
        heading: 'Darf der Arbeitgeber KI verbieten oder vorschreiben?',
        paragraphs: [
          'Ja, grundsätzlich. Mit dem Weisungsrecht nach § 106 GewO kann der Arbeitgeber festlegen, welche Arbeitsmittel genutzt werden. Er kann also bestimmte KI-Tools verbieten, nur freigegebene erlauben oder die Nutzung eines Tools anordnen. Gibt es einen Betriebsrat, sind dessen Rechte zu beachten. Ein generelles Recht von Beschäftigten, private KI-Konten für die Arbeit zu nutzen, gibt es nicht.',
        ],
      },
      {
        heading: 'Heimliche Nutzung und Geheimnisschutz',
        paragraphs: [
          'Wer trotz eines klaren Verbots betriebliche Informationen in externe KI-Dienste eingibt, riskiert eine Abmahnung. Bei schwerwiegenden Verstößen, etwa der Weitergabe von Geschäftsgeheimnissen oder sensiblen Personaldaten, kommen auch weitergehende Konsequenzen in Betracht. Wo keine Regeln existieren, ist die Lage weniger eindeutig; der Arbeitsvertrag verpflichtet aber in jedem Fall zur Rücksichtnahme auf betriebliche Interessen und zur Verschwiegenheit.',
        ],
      },
      {
        heading: 'Wer haftet für Fehler aus der KI?',
        paragraphs: [
          'Übernehmen Beschäftigte ein fehlerhaftes KI-Ergebnis ungeprüft, gelten die von der Rechtsprechung entwickelten Grundsätze der Arbeitnehmerhaftung: Bei leichter Fahrlässigkeit haften Beschäftigte in der Regel nicht, bei mittlerer Fahrlässigkeit wird der Schaden geteilt, bei grober Fahrlässigkeit und Vorsatz haften sie meist voll. Wer KI im Auftrag des Arbeitgebers nutzt, sollte Ergebnisse deshalb prüfen und Unklarheiten melden.',
        ],
      },
      {
        heading: 'Überwachung und Emotionserkennung',
        paragraphs: [
          'Seit dem 2. Februar 2025 verbietet Art. 5 Abs. 1 lit. f KI-Verordnung KI-Systeme, die Emotionen von Personen am Arbeitsplatz ableiten, außer aus medizinischen oder Sicherheitsgründen. Eine verdeckte Totalüberwachung von Beschäftigten ist nach deutschem Datenschutz- und Arbeitsrecht ohnehin unzulässig.',
        ],
      },
    ],
    faq: [
      { q: 'Darf ich ChatGPT bei der Arbeit nutzen, wenn es nicht verboten ist?', a: 'Rechtlich ist das nicht ausdrücklich untersagt, aber riskant, wenn vertrauliche oder personenbezogene Daten eingegeben werden. Fragen Sie im Zweifel nach, welche Tools freigegeben sind.' },
      { q: 'Muss ich offenlegen, dass ein Text mit KI erstellt wurde?', a: 'Gegenüber dem Arbeitgeber gilt, was intern geregelt ist. Gegenüber Dritten können Kennzeichnungspflichten aus der KI-Verordnung (Art. 50, ab August 2026) oder aus Verträgen folgen.' },
    ],
    related: ['datenschutz-ki-tools', 'betriebsrat-ki', 'verbotene-und-hochrisiko-ki'],
    updated: u,
  },
  {
    slug: 'verbotene-und-hochrisiko-ki',
    category: 'Recht',
    title: 'Verbotene und Hochrisiko-KI im Personalbereich',
    metaTitle: 'Hochrisiko-KI im HR: Recruiting, Bewertung, Kündigung',
    description: 'Welche KI im Personalwesen nach der KI-Verordnung verboten ist, welche als Hochrisiko gilt (Anhang III Nr. 4) und welche Pflichten Betreiber dann treffen.',
    keywords: 'Hochrisiko KI HR, KI Recruiting AI Act, Anhang III Beschäftigung, Emotionserkennung Arbeitsplatz Verbot, KI Bewerberauswahl Pflichten, Art. 26 KI-Verordnung',
    intro: 'Das Personalwesen ist einer der Bereiche, die die KI-Verordnung besonders streng regelt. Manche Praktiken sind verboten, andere gelten als Hochrisiko und bringen umfangreiche Pflichten mit sich, auch für Unternehmen, die die Software nur einkaufen.',
    keyFacts: [
      'Verboten seit 02.02.2025: Emotionserkennung am Arbeitsplatz, Social Scoring, biometrische Kategorisierung nach sensiblen Merkmalen',
      'Hochrisiko: KI für Recruiting, Beförderung, Kündigung, Aufgabenzuweisung, Leistungsbewertung',
      'Betreiberpflichten nach Art. 26: menschliche Aufsicht, Protokolle, Information der Beschäftigten',
      'Zeitpunkt der Hochrisiko-Pflichten: aktuellen Stand prüfen (Digital-Omnibus)',
    ],
    sections: [
      {
        heading: 'Verbotene Praktiken',
        paragraphs: [
          'Art. 5 KI-Verordnung verbietet unter anderem KI-Systeme zur Ableitung von Emotionen am Arbeitsplatz (Ausnahme: medizinische oder Sicherheitsgründe), die biometrische Kategorisierung nach sensiblen Merkmalen wie politischer Meinung oder sexueller Orientierung sowie Social Scoring. Verstöße können mit Bußgeldern von bis zu 35 Mio. Euro oder 7 % des weltweiten Jahresumsatzes geahndet werden.',
        ],
      },
      {
        heading: 'Hochrisiko nach Anhang III Nr. 4',
        paragraphs: ['Als Hochrisiko gelten KI-Systeme im Bereich Beschäftigung und Personalmanagement, insbesondere zur:'],
        bullets: [
          'Schaltung gezielter Stellenanzeigen, Sichtung und Filterung von Bewerbungen, Bewertung von Bewerbenden',
          'Entscheidung über Beförderung oder Kündigung',
          'Zuweisung von Aufgaben anhand von Verhalten oder persönlichen Merkmalen',
          'Beobachtung und Bewertung von Leistung und Verhalten',
        ],
      },
      {
        heading: 'Pflichten für Betreiber',
        paragraphs: [
          'Wer ein solches System nutzt, muss es nach Art. 26 gemäß Gebrauchsanweisung betreiben, menschliche Aufsicht durch kompetente Personen sicherstellen, Eingabedaten auf Relevanz prüfen, automatisch erzeugte Protokolle mindestens sechs Monate aufbewahren und vor der Inbetriebnahme Arbeitnehmervertretungen und betroffene Beschäftigte informieren.',
          'Ursprünglich sollten diese Pflichten ab dem 2. August 2026 gelten. Mit dem sogenannten Digital-Omnibus hat die EU eine Verschiebung der Hochrisiko-Regeln auf den Weg gebracht. Prüfen Sie vor Projektstart den aktuellen Stand im Amtsblatt der EU.',
          'Einen strukturierten Selbst-Check für Unternehmen bietet unser Schwesterprojekt aiactaudit.de; KI im Recruiting behandelt ki-hiring.de ausführlich.',
        ],
      },
    ],
    faq: [
      { q: 'Ist ein CV-Parser schon Hochrisiko-KI?', a: 'Wenn er Bewerbungen filtert oder bewertet, fällt er typischerweise unter Anhang III Nr. 4. Reine Texterkennung ohne Bewertung kann nach Art. 6 Abs. 3 ausgenommen sein; das sollte dokumentiert werden.' },
      { q: 'Haften wir als Käufer einer HR-Software?', a: 'Als Betreiber treffen Sie eigene Pflichten nach Art. 26. Die Konformität des Produkts selbst ist Sache des Anbieters, Ihre Nutzung aber nicht.' },
    ],
    related: ['ki-kompetenz-pflicht', 'beschaeftigte-rechte-ki', 'betriebsrat-ki'],
    updated: u,
  },
  {
    slug: 'ki-tools-buero',
    category: 'Praxis',
    title: 'KI-Tools im Büro: Einsatzfelder und Auswahlkriterien',
    metaTitle: 'KI-Tools fürs Büro: Einsatzfelder & Auswahl',
    description: 'Wofür sich KI im Büroalltag eignet: Texte, Protokolle, Übersetzung, Tabellen, Recherche. Mit Kriterien, nach denen Unternehmen Tools auswählen.',
    keywords: 'KI Tools Büro, KI im Arbeitsalltag, KI Protokoll Meeting, KI Übersetzung Arbeit, Copilot ChatGPT Vergleich Kriterien, KI Produktivität',
    intro: 'Generative KI ist in vielen Büroaufgaben angekommen. Der größte Nutzen entsteht dort, wo wiederkehrende Text- und Strukturarbeit anfällt und ein Mensch das Ergebnis prüft. Wir stellen die typischen Einsatzfelder vor, ohne einzelne Anbieter zu bewerten.',
    keyFacts: [
      'Stärken: Entwürfe, Zusammenfassungen, Umformulieren, Übersetzen, Strukturieren',
      'Schwächen: Fakten, Zahlen, aktuelle Rechtslage ohne Quellenprüfung',
      'Auswahl nach Datenschutz, Integration, Kosten und Verwaltbarkeit',
      'Ergebnisse immer prüfen und Verantwortung behalten',
    ],
    sections: [
      {
        heading: 'Typische Einsatzfelder',
        paragraphs: ['In Büro und Verwaltung haben sich vor allem diese Anwendungen etabliert:'],
        bullets: [
          'E-Mails, Angebote und Berichte vorformulieren und kürzen',
          'Meeting-Protokolle aus Transkripten erstellen',
          'Übersetzungen und Anpassen von Tonalität',
          'Tabellen auswerten, Formeln erklären, Daten strukturieren',
          'Recherche mit Quellenangaben als Ausgangspunkt',
          'Wissenssuche in internen Dokumenten (bei passender Lizenz)',
        ],
      },
      {
        heading: 'Gute Prompts sparen Zeit',
        paragraphs: [
          'Die Qualität der Ergebnisse hängt stark von der Aufgabenbeschreibung ab: Rolle, Ziel, Kontext, gewünschtes Format und Beispiele. Ein gemeinsamer Prompt-Katalog im Team verhindert, dass jede Person bei null anfängt.',
        ],
      },
      {
        heading: 'Auswahlkriterien für Unternehmen',
        paragraphs: ['Bevor ein Tool freigegeben wird, sollten diese Fragen beantwortet sein:'],
        bullets: [
          'Gibt es einen Auftragsverarbeitungsvertrag und ein Training-Opt-out?',
          'Lässt sich das Tool zentral verwalten (Single Sign-on, Rechte, Löschung)?',
          'Passt es in die vorhandene Software (Office, Ticketsystem, CRM)?',
          'Wie entwickeln sich die Kosten pro Nutzer und Monat?',
          'Ist der Betriebsrat eingebunden, sind Beschäftigte geschult?',
        ],
      },
    ],
    faq: [
      { q: 'Welches KI-Tool ist das beste fürs Büro?', a: 'Das hängt von der vorhandenen Software, den Datenschutzanforderungen und den Aufgaben ab. Viele Unternehmen starten mit dem Assistenten, der in ihre Office-Umgebung integriert ist, und ergänzen spezialisierte Tools.' },
    ],
    related: ['ki-arbeitsplatz-ausstattung', 'datenschutz-ki-tools', 'ki-einfuehrung-unternehmen'],
    updated: u,
  },
  {
    slug: 'ki-arbeitsplatz-ausstattung',
    category: 'Ausstattung',
    title: 'Ausstattung für den KI-Arbeitsplatz: Notebook, Headset, Webcam',
    metaTitle: 'KI-Arbeitsplatz einrichten: Hardware-Ratgeber',
    description: 'Welche Hardware bei KI-Arbeit wirklich hilft: Copilot+ PCs mit NPU, Headsets und Mikrofone für Transkription, Webcams und Monitore. Sachlicher Überblick.',
    keywords: 'KI Arbeitsplatz Ausstattung, Copilot+ PC, Laptop NPU, Headset Transkription, Mikrofon Spracheingabe, Webcam Homeoffice, KI Laptop kaufen',
    intro: 'Für die meisten KI-Werkzeuge reicht ein normaler Büro-PC, denn die Rechenarbeit passiert in der Cloud. Spürbare Unterschiede machen gute Audiotechnik für Spracheingabe und Transkription, ein großer Bildschirm und, für lokale KI-Funktionen, ein Notebook mit NPU.',
    keyFacts: [
      'Cloud-KI braucht vor allem stabiles Internet, keine Spezialhardware',
      'Copilot+ PCs haben eine NPU mit mindestens 40 TOPS für lokale KI-Funktionen',
      'Gutes Mikrofon verbessert Transkription und Spracheingabe deutlich',
      'Arbeitgeber stellen Arbeitsmittel bereit (auch im Homeoffice)',
    ],
    sections: [
      {
        heading: 'Notebook: Wann lohnt sich ein Copilot+ PC?',
        paragraphs: [
          'Microsoft bezeichnet Windows-Geräte mit einer NPU ab 40 TOPS, mindestens 16 GB RAM und 256 GB SSD als Copilot+ PC. Sie können bestimmte KI-Funktionen lokal ausführen, etwa Live-Untertitel, Bildbearbeitung oder Effekte in Videocalls. Für Chat-Assistenten im Browser ist das nicht nötig. Sinnvoll ist ein solches Gerät, wenn ohnehin ein neues Notebook ansteht oder lokale Verarbeitung aus Datenschutzgründen gewünscht ist.',
        ],
      },
      {
        heading: 'Audio: Headset und Mikrofon',
        paragraphs: [
          'KI-Transkription von Meetings und Spracheingabe funktionieren nur so gut wie die Tonaufnahme. Ein Headset mit Geräuschunterdrückung oder ein USB-Mikrofon reduziert Fehler spürbar, besonders im Großraumbüro. Für Diktate unterwegs gibt es weiterhin klassische Diktiergeräte mit Software-Anbindung.',
        ],
      },
      {
        heading: 'Webcam und Monitor',
        paragraphs: [
          'Ein zweiter oder größerer Bildschirm erleichtert die Arbeit mit KI-Assistenten nebenher, etwa Chat links und Dokument rechts. Monitore mit USB-C-Docking reduzieren den Kabelaufwand. Für Videocalls genügt meist eine Full-HD-Webcam.',
        ],
      },
    ],
    faq: [
      { q: 'Brauche ich für ChatGPT einen besonderen Laptop?', a: 'Nein. Browserbasierte KI-Assistenten laufen auf jedem aktuellen Rechner. Eine NPU hilft nur bei lokal ausgeführten KI-Funktionen.' },
      { q: 'Muss der Arbeitgeber die Ausstattung bezahlen?', a: 'Arbeitsmittel stellt grundsätzlich der Arbeitgeber. Wer auf eigene Rechnung Ausstattung für das Homeoffice kauft, kann sie unter Umständen steuerlich als Werbungskosten geltend machen.' },
    ],
    related: ['ki-tools-buero', 'ki-einfuehrung-unternehmen', 'datenschutz-ki-tools'],
    updated: u,
  },
  {
    slug: 'ki-einfuehrung-unternehmen',
    category: 'Praxis',
    title: 'KI im Unternehmen einführen: Leitfaden in 7 Schritten',
    metaTitle: 'KI im Unternehmen einführen: 7 Schritte',
    description: 'Von der Bestandsaufnahme bis zur Schulung: So führen kleine und mittlere Unternehmen KI geordnet ein, rechtssicher und mit Beteiligung der Beschäftigten.',
    keywords: 'KI einführen Unternehmen, KI Strategie KMU, KI Einführung Leitfaden, KI Pilotprojekt, KI Richtlinie Unternehmen, Change Management KI',
    intro: 'Viele Unternehmen stehen vor demselben Bild: Einige Beschäftigte nutzen KI bereits, andere gar nicht, Regeln fehlen. Ein geordnetes Vorgehen schafft Sicherheit und macht Nutzen messbar.',
    keyFacts: [
      'Mit einer Bestandsaufnahme der bereits genutzten Tools beginnen',
      'Wenige, klar umrissene Pilotfälle statt Großprojekt',
      'KI-Richtlinie, Schulung und Betriebsrat früh einbinden',
      'Nutzen messen und regelmäßig überprüfen',
    ],
    sections: [
      {
        heading: 'Die 7 Schritte',
        paragraphs: ['Dieser Ablauf hat sich in kleinen und mittleren Unternehmen bewährt:'],
        bullets: [
          '1. Bestandsaufnahme: Welche KI-Tools werden bereits (auch inoffiziell) genutzt?',
          '2. Ziele festlegen: Welche Aufgaben kosten heute viel Zeit?',
          '3. Pilotfälle wählen: zwei bis drei Anwendungen mit klarem Nutzen und geringem Risiko',
          '4. Tools prüfen und freigeben: Datenschutz, Vertrag, Verwaltung',
          '5. Regeln schaffen: KI-Richtlinie, ggf. Betriebsvereinbarung',
          '6. Schulen: KI-Kompetenz nach Art. 4 KI-Verordnung, Prompt-Beispiele',
          '7. Messen und nachsteuern: Zeitersparnis, Qualität, Akzeptanz',
        ],
      },
      {
        heading: 'Menschen mitnehmen',
        paragraphs: [
          'Die Einführung scheitert selten an der Technik, häufiger an Unsicherheit. Offene Kommunikation darüber, was KI übernehmen soll und was nicht, wirkt Ängsten entgegen. Feste Ansprechpersonen und ein interner Austausch über gelungene Beispiele helfen beim Start.',
        ],
      },
    ],
    faq: [
      { q: 'Wie lange dauert eine KI-Einführung?', a: 'Ein erster Pilot mit Richtlinie und Schulung lässt sich in kleinen Unternehmen in wenigen Wochen umsetzen. Die laufende Anpassung ist eine Daueraufgabe.' },
    ],
    related: ['ki-kompetenz-pflicht', 'ki-tools-buero', 'betriebsrat-ki'],
    updated: u,
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
