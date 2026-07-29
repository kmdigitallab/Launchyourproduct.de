'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#programs', label: 'Programs' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '#founders', label: 'About' },
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
      className="fixed left-0 right-0 top-0 z-[200] flex h-[60px] items-center justify-between border-b border-black/[0.08] px-6 backdrop-blur-2xl backdrop-saturate-150 transition-colors md:px-12"
      style={{ background: scrolled ? 'rgba(247,249,247,0.99)' : 'rgba(247,249,247,0.92)' }}
    >
      <a href="/" className="no-underline">
        <span className="text-[17px] font-extrabold tracking-normal text-green-600 [text-shadow:0_0_12px_rgba(22,163,74,0.25)]">
          LaunchYourProduct
        </span>
      </a>

      <div className="hidden gap-6 md:flex">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="text-[13px] text-[#4b6358] transition-colors hover:text-green-600">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href="#cta"
          className="hidden rounded-lg bg-green-600 px-[18px] py-2 text-[13px] font-semibold text-white shadow-[0_4px_14px_rgba(22,163,74,0.3)] transition-all hover:-translate-y-px hover:bg-green-700 hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)] md:inline-block"
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
            className={`h-[2px] w-5 rounded-full bg-[#0d1f12] transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`h-[2px] w-5 rounded-full bg-[#0d1f12] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-[2px] w-5 rounded-full bg-[#0d1f12] transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`absolute left-0 right-0 top-[60px] flex flex-col gap-1 border-b border-black/[0.08] bg-[#f7f9f7] px-6 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-200 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-2 py-3 text-[15px] font-medium text-[#0d1f12] transition-colors hover:bg-green-600/[0.08] hover:text-green-600"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#cta"
          onClick={() => setMenuOpen(false)}
          className="mt-2 rounded-lg bg-green-600 px-4 py-3 text-center text-[15px] font-semibold text-white"
        >
          Free Audit →
        </a>
      </div>
    </nav>
  );
}
