import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className="scroll-to-top fixed bottom-8 right-6 z-40 flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 no-print"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
