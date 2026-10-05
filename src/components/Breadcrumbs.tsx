import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: 'https://www.kiarbeitsplatz.de/'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://www.kiarbeitsplatz.de${item.url}`
      }))
    ]
  };

  return (
    <nav aria-label="Brotkrumen-Navigation" className="py-3 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <ol className="flex items-center gap-1.5">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-slate-600 hover:text-amber-700 transition-colors p-1"
            title="Startseite"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Startseite</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-slate-800" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="text-slate-600 hover:text-amber-700 transition-colors p-1"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
