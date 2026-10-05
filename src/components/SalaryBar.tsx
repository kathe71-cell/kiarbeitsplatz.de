const MIN = 40, MAX = 120;
const pct = (v: number) => ((v - MIN) / (MAX - MIN)) * 100;

/** Gehaltsspanne als Balken auf einer Skala von 40 bis 120 Tsd. Euro */
export default function SalaryBar({ range, color = 'var(--color-accent)', track = 'var(--color-accent-soft)', thick = false }: { range: [number, number]; color?: string; track?: string; thick?: boolean }) {
  return (
    <div className={`relative w-full rounded-full ${thick ? 'h-3' : 'h-2'}`} style={{ background: track }} aria-hidden="true">
      <div className="absolute inset-y-0 rounded-full" style={{ left: `${pct(range[0])}%`, width: `${pct(range[1]) - pct(range[0])}%`, background: color }} />
    </div>
  );
}
