import type { Feld } from './berufe';

export interface FinderFrage {
  frage: string;
  antworten: { text: string; punkte: Partial<Record<string, number>> }[];
}

/** Punkte je Berufs-Slug. Die drei höchsten Summen werden empfohlen. */
export const finderFragen: FinderFrage[] = [
  {
    frage: 'Was reizt dich an KI am meisten?',
    antworten: [
      { text: 'Selbst bauen und programmieren', punkte: { 'machine-learning-engineer': 3, 'mlops-engineer': 2, 'computer-vision-engineer': 2, 'ki-forschung': 1 } },
      { text: 'Muster in Daten finden', punkte: { 'data-scientist': 3, 'data-engineer': 2, 'ki-forschung': 1 } },
      { text: 'Herausfinden, wo KI wirklich hilft', punkte: { 'ki-produktmanager': 3, 'ki-berater': 3 } },
      { text: 'Regeln, Verantwortung und Fairness', punkte: { 'ai-governance': 4, 'ki-berater': 1 } },
    ],
  },
  {
    frage: 'Welcher Hintergrund passt am ehesten zu dir?',
    antworten: [
      { text: 'Informatik, Mathe oder Physik', punkte: { 'machine-learning-engineer': 2, 'ki-forschung': 3, 'computer-vision-engineer': 2, 'data-scientist': 1 } },
      { text: 'IT-Betrieb oder Softwareentwicklung', punkte: { 'mlops-engineer': 3, 'data-engineer': 3, 'machine-learning-engineer': 1 } },
      { text: 'Wirtschaft, Produkt oder Beratung', punkte: { 'ki-produktmanager': 3, 'ki-berater': 2, 'data-scientist': 1 } },
      { text: 'Recht, Bildung oder Verwaltung', punkte: { 'ai-governance': 3, 'ki-trainer': 3 } },
    ],
  },
  {
    frage: 'Wie arbeitest du am liebsten?',
    antworten: [
      { text: 'Konzentriert und tief in einem Problem', punkte: { 'ki-forschung': 2, 'machine-learning-engineer': 2, 'computer-vision-engineer': 2 } },
      { text: 'Systeme stabil und sauber halten', punkte: { 'mlops-engineer': 3, 'data-engineer': 2 } },
      { text: 'Mit vielen Menschen und Abteilungen', punkte: { 'ki-produktmanager': 2, 'ki-berater': 2, 'ai-governance': 1 } },
      { text: 'Erklären und anderen etwas beibringen', punkte: { 'ki-trainer': 4, 'ki-berater': 1 } },
    ],
  },
  {
    frage: 'Wo möchtest du arbeiten?',
    antworten: [
      { text: 'Industrie und Technik', punkte: { 'computer-vision-engineer': 3, 'machine-learning-engineer': 1, 'mlops-engineer': 1 } },
      { text: 'Hochschule oder Forschungsinstitut', punkte: { 'ki-forschung': 4 } },
      { text: 'Software-Unternehmen oder Start-up', punkte: { 'ki-produktmanager': 2, 'machine-learning-engineer': 2, 'data-engineer': 1 } },
      { text: 'Bank, Versicherung oder Konzern', punkte: { 'ai-governance': 2, 'data-scientist': 2, 'data-engineer': 1 } },
      { text: 'Selbstständig', punkte: { 'ki-berater': 3, 'ki-trainer': 3 } },
    ],
  },
];

export type { Feld };
