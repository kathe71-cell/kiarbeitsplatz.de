/** Abstrakte Grafik: Knoten und Verbindungen, angelehnt an ein neuronales Netz. Rein dekorativ. */
const layers = [[60, 140, 220, 300], [40, 110, 180, 250, 320], [80, 160, 240, 320 - 40], [120, 220]];
const xs = [40, 170, 300, 420];

export default function HeroArt() {
  const nodes = layers.flatMap((ys, li) => ys.map((y) => ({ x: xs[li], y })));
  const edges: [number, number, number, number, number][] = [];
  layers.forEach((ys, li) => {
    if (li === layers.length - 1) return;
    ys.forEach((y, a) => layers[li + 1].forEach((y2, b) => edges.push([xs[li], y, xs[li + 1], y2, (a + b + li) % 4])));
  });
  return (
    <svg viewBox="0 0 460 360" className="h-auto w-full" role="presentation" aria-hidden="true">
      {edges.map(([x1, y1, x2, y2, k], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c39a55" strokeOpacity={k === 0 ? 0.75 : 0.18} strokeWidth={k === 0 ? 1.4 : 1} />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={i % 5 === 0 ? 11 : 7} fill={i % 5 === 0 ? '#c39a55' : '#14342a'} stroke="#c39a55" strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}
