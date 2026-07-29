'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-[150] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black text-[#c084fc] shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 hover:border-[#7c3aed]/40 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
