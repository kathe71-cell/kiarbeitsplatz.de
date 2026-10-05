import { useMemo, useState } from 'react';
import { Copy, Check, Printer } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

interface Options {
  firma: string;
  tools: string;
  ansprechperson: string;
  privatkonten: 'verboten' | 'erlaubt-ohne-daten';
  personendaten: 'verboten' | 'nur-freigegeben';
  kennzeichnung: boolean;
  betriebsrat: boolean;
}

function buildPolicy(o: Options): string {
  const firma = o.firma.trim() || '[Unternehmen]';
  const tools = o.tools.trim() || '[Liste der freigegebenen Tools]';
  const person = o.ansprechperson.trim() || '[Name, E-Mail]';
  const lines: string[] = [
    `Richtlinie zur Nutzung von KI-Werkzeugen bei ${firma}`,
    '',
    '1. Zweck und Geltungsbereich',
    `Diese Richtlinie regelt den Einsatz von Werkzeugen der künstlichen Intelligenz (KI) bei ${firma}. Sie gilt für alle Beschäftigten sowie für Personen, die im Auftrag von ${firma} tätig sind.`,
    '',
    '2. Freigegebene KI-Werkzeuge',
    `Für dienstliche Zwecke dürfen ausschließlich folgende KI-Werkzeuge mit Unternehmenskonto genutzt werden: ${tools}. Weitere Werkzeuge werden nach Prüfung durch IT und Datenschutz freigegeben.`,
    o.privatkonten === 'verboten'
      ? 'Die Nutzung privater KI-Konten für dienstliche Aufgaben ist nicht gestattet.'
      : 'Private KI-Konten dürfen für allgemeine Aufgaben genutzt werden, jedoch ohne Eingabe vertraulicher, personenbezogener oder betriebsinterner Informationen.',
    '',
    '3. Daten und Vertraulichkeit',
    o.personendaten === 'verboten'
      ? 'Personenbezogene Daten (z. B. von Kundschaft, Beschäftigten, Bewerbenden) dürfen nicht in KI-Werkzeuge eingegeben werden.'
      : 'Personenbezogene Daten dürfen nur in die oben genannten, vertraglich abgesicherten Werkzeuge und nur im erforderlichen Umfang eingegeben werden.',
    'Geschäftsgeheimnisse, Zugangsdaten und als vertraulich gekennzeichnete Unterlagen dürfen nicht eingegeben werden.',
    '',
    '4. Prüfung der Ergebnisse',
    'KI-Ergebnisse sind Entwürfe. Sie werden vor jeder Verwendung inhaltlich geprüft, insbesondere Fakten, Zahlen, Quellen und rechtliche Aussagen. Die Verantwortung für das Arbeitsergebnis liegt bei der nutzenden Person.',
    'Entscheidungen über Personen (z. B. Einstellung, Bewertung, Kündigung) werden nicht allein durch KI getroffen.',
    '',
  ];
  let n = 5;
  if (o.kennzeichnung) {
    lines.push(`${n}. Kennzeichnung`, 'Nach außen veröffentlichte Texte, Bilder, Audio- oder Videoinhalte, die wesentlich mit KI erzeugt wurden, werden entsprechend den gesetzlichen Vorgaben und internen Regeln gekennzeichnet.', '');
    n++;
  }
  lines.push(
    `${n}. Schulung`,
    'Beschäftigte, die KI-Werkzeuge nutzen, nehmen an einer Schulung zur KI-Kompetenz teil (Art. 4 Verordnung (EU) 2024/1689). Die Teilnahme wird dokumentiert.',
    '',
  );
  n++;
  lines.push(`${n}. Ansprechperson`, `Fragen zur KI-Nutzung und Vorschläge für neue Werkzeuge richten Sie an: ${person}.`, '');
  n++;
  if (o.betriebsrat) {
    lines.push(`${n}. Beteiligung des Betriebsrats`, 'Der Betriebsrat wurde gemäß Betriebsverfassungsgesetz beteiligt. Die Nutzungsdaten der KI-Werkzeuge werden nicht zur Leistungs- oder Verhaltenskontrolle ausgewertet, soweit keine gesonderte Vereinbarung besteht.', '');
    n++;
  }
  lines.push(`${n}. Inkrafttreten und Überprüfung`, 'Diese Richtlinie tritt mit Bekanntgabe in Kraft und wird mindestens jährlich überprüft.', '', 'Ort, Datum, Unterschrift Geschäftsleitung');
  return lines.join('\n');
}

const input = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200';

export default function RichtliniePage() {
  const [o, setO] = useState<Options>({ firma: '', tools: '', ansprechperson: '', privatkonten: 'verboten', personendaten: 'nur-freigegeben', kennzeichnung: true, betriebsrat: false });
  const [copied, setCopied] = useState(false);
  const text = useMemo(() => buildPolicy(o), [o]);
  const set = <K extends keyof Options>(k: K, v: Options[K]) => setO({ ...o, [k]: v });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* Zwischenablage nicht verfügbar */ }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <Breadcrumbs items={[{ name: 'KI-Richtlinie erstellen', url: '/ki-richtlinie' }]} />
      <header className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">KI-Richtlinie für Ihr Unternehmen erstellen</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-800">
          Füllen Sie die Felder aus und erhalten Sie einen Entwurf für eine interne KI-Nutzungsrichtlinie. Der Text entsteht direkt in Ihrem Browser, es werden keine Eingaben übertragen.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 no-print" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm font-bold text-slate-900">Name des Unternehmens
            <input className={input} value={o.firma} onChange={(e) => set('firma', e.target.value)} placeholder="Muster GmbH" />
          </label>
          <label className="block text-sm font-bold text-slate-900">Freigegebene KI-Werkzeuge
            <input className={input} value={o.tools} onChange={(e) => set('tools', e.target.value)} placeholder="z. B. Microsoft 365 Copilot, DeepL Pro" />
          </label>
          <label className="block text-sm font-bold text-slate-900">Ansprechperson
            <input className={input} value={o.ansprechperson} onChange={(e) => set('ansprechperson', e.target.value)} placeholder="Name, E-Mail" />
          </label>
          <fieldset>
            <legend className="text-sm font-bold text-slate-900">Private KI-Konten</legend>
            <label className="mt-2 flex items-center gap-2 text-slate-800"><input type="radio" checked={o.privatkonten === 'verboten'} onChange={() => set('privatkonten', 'verboten')} /> nicht erlaubt</label>
            <label className="mt-1 flex items-center gap-2 text-slate-800"><input type="radio" checked={o.privatkonten === 'erlaubt-ohne-daten'} onChange={() => set('privatkonten', 'erlaubt-ohne-daten')} /> erlaubt, ohne vertrauliche Daten</label>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-bold text-slate-900">Personenbezogene Daten</legend>
            <label className="mt-2 flex items-center gap-2 text-slate-800"><input type="radio" checked={o.personendaten === 'nur-freigegeben'} onChange={() => set('personendaten', 'nur-freigegeben')} /> nur in freigegebenen Tools</label>
            <label className="mt-1 flex items-center gap-2 text-slate-800"><input type="radio" checked={o.personendaten === 'verboten'} onChange={() => set('personendaten', 'verboten')} /> grundsätzlich nicht</label>
          </fieldset>
          <label className="flex items-center gap-2 font-semibold text-slate-800"><input type="checkbox" checked={o.kennzeichnung} onChange={(e) => set('kennzeichnung', e.target.checked)} /> Regel zur Kennzeichnung aufnehmen</label>
          <label className="flex items-center gap-2 font-semibold text-slate-800"><input type="checkbox" checked={o.betriebsrat} onChange={(e) => set('betriebsrat', e.target.checked)} /> Es gibt einen Betriebsrat</label>
        </form>

        <section aria-label="Entwurf der KI-Richtlinie">
          <div className="mb-3 flex flex-wrap gap-2 no-print">
            <button type="button" onClick={copy} className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-amber-500 px-4 font-extrabold text-slate-950 hover:bg-amber-400">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? 'Kopiert' : 'Text kopieren'}
            </button>
            <button type="button" onClick={() => window.print()} className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-4 font-bold text-white hover:bg-slate-800">
              <Printer className="h-4 w-4" /> Drucken / PDF
            </button>
          </div>
          <pre className="whitespace-pre-wrap rounded-2xl border border-slate-200 bg-white p-5 font-sans text-sm leading-relaxed text-slate-900 shadow-sm sm:p-6">{text}</pre>
          <p className="mt-3 text-xs text-slate-600">Muster ohne Gewähr. Passen Sie den Entwurf an Ihr Unternehmen an und lassen Sie ihn bei Bedarf rechtlich prüfen.</p>
        </section>
      </div>
    </div>
  );
}
