'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LiquidGlassButton from '@/components/liquid-glass-button';

const LINKS = [
  { hash: '#how', label: 'How it works' },
  { hash: '#portfolio', label: 'Portfolio' },
  { hash: '#about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Section anchors only exist on the homepage — from any other route the link
  // has to navigate home first, otherwise it silently does nothing.
  const isHome = pathname === '/';
  const links = LINKS.map((l) => ({ ...l, href: isHome ? l.hash : `/${l.hash}` }));

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
    <div className="fixed inset-x-0 top-[44px] z-[200] flex justify-center px-4">
      <nav
        className="nav-glow-border relative flex w-full max-w-[1100px] items-center justify-between gap-4 rounded-[28px] border px-5 py-2.5 backdrop-blur-2xl backdrop-saturate-150 transition-all"
        style={{
          background: scrolled ? 'rgba(20,14,28,0.8)' : 'rgba(20,14,28,0.5)',
          borderColor: 'rgba(167,139,250,0.35)',
          boxShadow: scrolled
            ? '0 8px 30px rgba(0,0,0,0.5), 0 0 16px rgba(139,92,246,0.35), inset 0 0 0 1px rgba(167,139,250,0.12)'
            : '0 8px 30px rgba(0,0,0,0.35), 0 0 20px rgba(139,92,246,0.3), inset 0 0 0 1px rgba(167,139,250,0.1)',
        }}
      >
        <a href="/" className="whitespace-nowrap no-underline">
          <span className="text-[15px] font-extrabold tracking-normal text-[#c084fc] [text-shadow:0_0_12px_rgba(167,139,250,0.35)]">
            LaunchYourProduct
          </span>
        </a>

        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-white/70 transition-colors hover:text-[#c084fc]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline-flex">
            <LiquidGlassButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@launchyourproduct.de"
              target="_blank"
              rel="noreferrer"
              size="sm"
            >
              Get in touch →
            </LiquidGlassButton>
          </span>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
          >
            <span
              className={`h-[2px] w-4 rounded-full bg-white transition-transform ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span className={`h-[2px] w-4 rounded-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-[2px] w-4 rounded-full bg-white transition-transform ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu panel — floating card, matches the pill style */}
        <div
          className={`absolute left-0 right-0 top-[calc(100%+10px)] flex flex-col gap-1 rounded-[24px] border border-[#a78bfa]/30 bg-[#14101c]/95 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_16px_rgba(139,92,246,0.3)] backdrop-blur-2xl transition-all duration-200 md:hidden ${
            menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#7c3aed]/[0.12] hover:text-[#c084fc]"
            >
              {l.label}
            </a>
          ))}
          <LiquidGlassButton
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@launchyourproduct.de"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-1 justify-center"
          >
            Get in touch →
          </LiquidGlassButton>
        </div>
      </nav>
    </div>
  );
}
