'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-[200] flex h-[60px] items-center justify-between border-b border-black/[0.08] px-6 backdrop-blur-2xl backdrop-saturate-150 transition-colors md:px-12"
      style={{ background: scrolled ? 'rgba(247,249,247,0.99)' : 'rgba(247,249,247,0.92)' }}
    >
      <a href="/" className="no-underline">
        <span className="text-[17px] font-extrabold tracking-[-.5px] text-green-600 [text-shadow:0_0_12px_rgba(22,163,74,0.25)]">
          LaunchYourProduct
        </span>
      </a>

      <div className="hidden gap-6 md:flex">
        <a href="#how" className="text-[13px] text-[#4b6358] transition-colors hover:text-green-600">
          How it works
        </a>
        <a href="#programs" className="text-[13px] text-[#4b6358] transition-colors hover:text-green-600">
          Programs
        </a>
        <a href="/portfolio" className="text-[13px] text-[#4b6358] transition-colors hover:text-green-600">
          Portfolio
        </a>
        <a href="#founders" className="text-[13px] text-[#4b6358] transition-colors hover:text-green-600">
          About
        </a>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="#cta"
          className="rounded-lg bg-green-600 px-[18px] py-2 text-[13px] font-semibold text-white shadow-[0_4px_14px_rgba(22,163,74,0.3)] transition-all hover:-translate-y-px hover:bg-green-700 hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)]"
        >
          Free Audit →
        </a>
      </div>
    </nav>
  );
}
