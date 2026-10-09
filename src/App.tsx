import ProjektuebernahmePage from "./pages/ProjektuebernahmePage.tsx";
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import VercelAnalytics from './components/VercelAnalytics';
import HomePage from './pages/HomePage';
import BerufePage from './pages/BerufePage';
import BerufPage from './pages/BerufPage';
import GehaelterPage from './pages/GehaelterPage';
import RatgeberPage from './pages/RatgeberPage';
import FinderPage from './pages/FinderPage';
import AboutPage from './pages/AboutPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFoundPage from './pages/NotFoundPage';
import { berufe } from './data/berufe';
import { ratgeber } from './data/ratgeber';
import { SITE_URL } from './site.config';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
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
      <Route path="/berufe" element={<BerufePage />} />
      {berufe.map((b) => <Route key={b.slug} path={`/berufe/${b.slug}`} element={<BerufPage slug={b.slug} />} />)}
      <Route path="/gehaelter" element={<GehaelterPage />} />
      <Route path="/berufe-finder" element={<FinderPage />} />
      {ratgeber.map((r) => <Route key={r.slug} path={`/${r.slug}`} element={<RatgeberPage slug={r.slug} />} />)}
      <Route path="/ueber-uns" element={<AboutPage />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/projektuebernahme" element={<ProjektuebernahmePage />} />
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
