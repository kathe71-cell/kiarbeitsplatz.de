import { Link } from 'react-router-dom';
import { berufe, feldFarbe } from '../data/berufe';
import Crumbs from '../components/Crumbs';
import SalaryBar from '../components/SalaryBar';
import Faq from '../components/Faq';

export default function GehaelterPage() {
  const sortiert = [...berufe].sort((a, b) => b.gehalt[1] - a.gehalt[1]);
  return (
    <div className="wrap py-10">
      <Crumbs items={[{ name: 'Gehälter', url: '/gehaelter' }]} />
      <header className="mt-10 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl">Gehälter in KI-Berufen 2026</h1>
        <p className="lede mt-5 text-muted">Bruttojahresgehälter in Deutschland vom Einstieg bis zur erfahrenen Fachkraft, ohne Führungsverantwortung.</p>
      </header>
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-ink text-sm">
              <th className="py-3 pr-4 font-semibold">Beruf</th>
              <th className="py-3 pr-4 text-right font-semibold">Einstieg</th>
              <th className="py-3 pr-4 text-right font-semibold">Erfahren</th>
              <th className="w-2/5 py-3 font-semibold"><span className="sr-only">Spanne</span></th>
            </tr>
          </thead>
          <tbody>
            {sortiert.map((b) => (
              <tr key={b.slug} className="border-b border-rule">
                <td className="py-4 pr-4"><Link to={`/berufe/${b.slug}`} className="font-serif text-lg hover:text-accent">{b.name}</Link></td>
                <td className="py-4 pr-4 text-right tabular-nums">{b.gehalt[0]}.000 €</td>
                <td className="py-4 pr-4 text-right tabular-nums">{b.gehalt[1]}.000 €</td>
                <td className="py-4"><SalaryBar range={b.gehalt} color={feldFarbe[b.feld]} track="#ece7dc" thick /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-muted">Skala der Balken: 40.000 bis 120.000 €</p>
      </div>
      <section className="prose-col body-text mt-16">
        <h2 className="mb-4 text-2xl text-ink">Wie diese Werte zu lesen sind</h2>
        <p>Die Spannen sind redaktionelle Orientierungswerte. Sie beruhen auf öffentlich zugänglichen Gehaltsvergleichen und Stellenanzeigen und bilden typische Gehälter ab, keine Extremwerte. Einzelne Stellen können deutlich darüber oder darunter liegen.</p>
        <p>Am stärksten wirken Region (Süddeutschland und Großstädte liegen meist höher), Branche (Finanzwesen und Industrie zahlen oft mehr als Agenturen oder Start-ups) und Tarifbindung. Im öffentlichen Dienst richtet sich das Gehalt nach TV-L oder TVöD. Für einen Abgleich mit amtlichen Daten eignet sich der Entgeltatlas der Bundesagentur für Arbeit.</p>
      </section>
      <div className="prose-col">
        <Faq items={[
          { f: 'Welcher KI-Beruf verdient am meisten?', a: 'Am oberen Ende liegen Research Scientists in der Industrie, KI-Produktmanager und AI-Governance-Fachleute mit Erfahrung. Führungsrollen liegen darüber.' },
          { f: 'Was verdient man als Einsteiger in der KI?', a: 'Mit Hochschulabschluss beginnen viele technische Rollen bei etwa 52.000 bis 60.000 € brutto im Jahr, abhängig von Region und Branche.' },
        ]} />
      </div>
    </div>
  );
}
