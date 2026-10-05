import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VercelAnalytics from './components/VercelAnalytics';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import KiCheckPage from './pages/KiCheckPage';
import RichtliniePage from './pages/RichtliniePage';
import AboutPage from './pages/AboutPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFoundPage from './pages/NotFoundPage';
import { articles } from './data/articles';
import { SITE_URL } from './site.config';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
      <Navbar />
      <main className="flex-1">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

function RouteWatcher() {
  const location = useLocation();
  React.useEffect(() => {
    let p = location.pathname;
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    const url = `${SITE_URL}${p === '/' ? '/' : p}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {articles.map((a) => (
        <Route key={a.slug} path={`/${a.slug}`} element={<ArticlePage slug={a.slug} />} />
      ))}
      <Route path="/ki-check" element={<KiCheckPage />} />
      <Route path="/ki-richtlinie" element={<RichtliniePage />} />
      <Route path="/ueber-uns" element={<AboutPage />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <VercelAnalytics />
      <RouteWatcher />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
