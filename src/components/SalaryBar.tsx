const MIN = 40, MAX = 120;
const pct = (v: number) => ((v - MIN) / (MAX - MIN)) * 100;

/** Gehaltsspanne als schmaler Balken auf einer Skala von 40 bis 120 Tsd. Euro */
export default function SalaryBar({ range }: { range: [number, number] }) {
  return (
    <div className="relative h-2 w-full bg-accent-soft" aria-hidden="true">
      <div className="absolute inset-y-0 bg-accent" style={{ left: `${pct(range[0])}%`, width: `${pct(range[1]) - pct(range[0])}%` }} />
    </div>
  );
}
