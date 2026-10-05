export interface CheckQuestion {
  id: string;
  question: string;
  todo: string;
  link: string;
}

export const checkQuestions: CheckQuestion[] = [
  { id: 'inventar', question: 'Wissen Sie, welche KI-Tools in Ihrem Unternehmen genutzt werden, auch inoffiziell?', todo: 'Bestandsaufnahme aller genutzten KI-Tools durchführen', link: '/ki-einfuehrung-unternehmen' },
  { id: 'richtlinie', question: 'Gibt es eine schriftliche KI-Richtlinie mit freigegebenen Tools?', todo: 'KI-Nutzungsrichtlinie erstellen und bekannt machen', link: '/ki-richtlinie' },
  { id: 'schulung', question: 'Wurden Beschäftigte, die KI nutzen, geschult (Art. 4 KI-Verordnung)?', todo: 'KI-Kompetenz-Schulung organisieren und dokumentieren', link: '/ki-kompetenz-pflicht' },
  { id: 'avv', question: 'Liegt für jedes genutzte Tool ein Auftragsverarbeitungsvertrag vor?', todo: 'Verträge nach Art. 28 DSGVO prüfen bzw. abschließen', link: '/datenschutz-ki-tools' },
  { id: 'training', question: 'Ist ausgeschlossen, dass Eingaben zum Training der Modelle genutzt werden?', todo: 'Training-Opt-out bzw. Business-Tarif sicherstellen', link: '/datenschutz-ki-tools' },
  { id: 'betriebsrat', question: 'Ist der Betriebsrat eingebunden (oder gibt es keinen)?', todo: 'Betriebsrat unterrichten, ggf. Betriebsvereinbarung verhandeln', link: '/betriebsrat-ki' },
  { id: 'hr', question: 'Haben Sie geprüft, ob Sie KI im Personalbereich (Recruiting, Bewertung) einsetzen?', todo: 'HR-Anwendungen auf Hochrisiko nach Anhang III prüfen', link: '/verbotene-und-hochrisiko-ki' },
  { id: 'pruefung', question: 'Ist geregelt, dass KI-Ergebnisse vor Verwendung von Menschen geprüft werden?', todo: 'Prüfpflicht („Mensch entscheidet“) in Richtlinie aufnehmen', link: '/ki-richtlinie' },
  { id: 'ansprechpartner', question: 'Gibt es eine feste Ansprechperson für KI-Fragen?', todo: 'KI-Verantwortliche Person benennen', link: '/ki-einfuehrung-unternehmen' },
  { id: 'kennzeichnung', question: 'Ist geregelt, wann KI-erzeugte Inhalte nach außen gekennzeichnet werden?', todo: 'Kennzeichnungsregeln festlegen (Art. 50 KI-Verordnung)', link: '/beschaeftigte-rechte-ki' },
];
