'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className="fixed left-0 right-0 top-[34px] z-[200] flex h-[60px] items-center justify-between border-b border-white/[0.08] px-6 backdrop-blur-2xl backdrop-saturate-150 transition-colors md:px-12"
      style={{ background: scrolled ? 'rgba(0,0,0,0.92)' : 'rgba(0,0,0,0.7)' }}
    >
      <a href="/" className="no-underline">
        <span className="text-[17px] font-extrabold tracking-normal text-[#c084fc] [text-shadow:0_0_12px_rgba(167,139,250,0.35)]">
          LaunchYourProduct
        </span>
      </a>

      <div className="hidden gap-6 md:flex">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="text-[13px] text-white/70 transition-colors hover:text-[#c084fc]">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href="mailto:info@launchyourproduct.de"
          className="hidden rounded-lg bg-[#7c3aed] px-[18px] py-2 text-[13px] font-semibold text-black shadow-[0_4px_14px_rgba(167,139,250,0.3)] transition-all hover:-translate-y-px hover:bg-[#8b5cf6] hover:shadow-[0_6px_20px_rgba(167,139,250,0.45)] md:inline-block"
        >
          Free Audit →
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg md:hidden"
        >
          <span
            className={`h-[2px] w-5 rounded-full bg-white transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`h-[2px] w-5 rounded-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-[2px] w-5 rounded-full bg-white transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`absolute left-0 right-0 top-[60px] flex flex-col gap-1 border-b border-white/[0.08] bg-black px-6 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-200 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-2 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#8b5cf6]/[0.1] hover:text-[#c084fc]"
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:info@launchyourproduct.de"
          onClick={() => setMenuOpen(false)}
          className="mt-2 rounded-lg bg-[#7c3aed] px-4 py-3 text-center text-[15px] font-semibold text-black"
        >
          Free Audit →
        </a>
      </div>
    </nav>
  );
}
