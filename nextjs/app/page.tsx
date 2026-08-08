'use client';

import { useRef } from 'react';
import Nav from '@/components/nav';
import AnnouncementBar from '@/components/announcement-bar';
import CinematicHero from '@/components/ui/cinematic-hero';
import FlowThread from '@/components/flow-thread';
import WhatWeDoSection from '@/components/what-we-do-section';
import PortfolioSection from '@/components/portfolio-section';
import AboutSection from '@/components/about-section';
import CinematicFooter from '@/components/cinematic-footer';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[210]">
        <AnnouncementBar />
      </div>
      <Nav />

      {/* Content lifts up over the fixed cinematic footer as you scroll */}
      <div
        ref={contentRef}
        className="relative z-10 mb-[460px] overflow-hidden rounded-b-[32px] border-b border-white/10 bg-black shadow-[0_40px_90px_rgba(0,0,0,0.55)] md:mb-[460px]"
      >
        <FlowThread contentRef={contentRef} />

        <div className="hero-inner-marker">
          <CinematicHero />
        </div>

        <WhatWeDoSection />
        <PortfolioSection />
        <AboutSection />
      </div>

      <CinematicFooter />
      <ScrollToTop />
    </>
  );
}
