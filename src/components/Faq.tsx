export default function Faq({ items }: { items: { f: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((x) => ({ '@type': 'Question', name: x.f, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  };
  return (
    <section className="mt-16 border-t border-rule pt-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 className="text-2xl">Häufige Fragen</h2>
      <dl className="mt-6 divide-y divide-rule">
        {items.map((x) => (
          <div key={x.f} className="py-5">
            <dt className="font-serif text-lg">{x.f}</dt>
            <dd className="mt-2 leading-relaxed text-[#2b2a27]">{x.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
