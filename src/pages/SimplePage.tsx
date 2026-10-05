import type { ReactNode } from 'react';
import Crumbs from '../components/Crumbs';

export default function SimplePage({ title, url, children }: { title: string; url: string; children: ReactNode }) {
  return (
    <div className="wrap py-10">
      <Crumbs items={[{ name: title, url }]} />
      <div className="prose-col mx-auto mt-12">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <div className="body-text mt-8 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:text-ink">{children}</div>
      </div>
    </div>
  );
}
