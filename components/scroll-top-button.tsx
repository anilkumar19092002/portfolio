'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-[70] grid h-12 w-12 place-items-center rounded-full border border-white/[0.14] bg-[#08110f]/90 text-[#f4f1e8] shadow-[0_18px_35px_rgba(0,0,0,.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b7ff6a]/55 hover:text-[#b7ff6a] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-4.5 w-4.5" />
    </button>
  );
}
