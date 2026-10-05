import { Link } from 'react-router-dom';
import { SITE_URL } from '../site.config';

export default function Crumbs({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Start', url: '/' }, ...items].map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE_URL}${it.url}` })),
  };
  return (
    <nav aria-label="Brotkrumen" className="text-sm text-muted">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Link to="/" className="hover:text-ink">Start</Link>
      {items.map((it, i) => (
        <span key={it.url}>
          <span className="mx-2 text-rule">/</span>
          {i === items.length - 1 ? <span aria-current="page">{it.name}</span> : <Link to={it.url} className="hover:text-ink">{it.name}</Link>}
        </span>
      ))}
    </nav>
  );
}
