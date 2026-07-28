'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Nav from '@/components/nav';
import TrustBar from '@/components/trust-bar';
import Ticker from '@/components/ticker';
import AmbientBackground from '@/components/ambient-background';
import FlowThread from '@/components/flow-thread';
import PainSection from '@/components/pain-section';
import JourneySection from '@/components/journey-section';
import ResultsSection from '@/components/results-section';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import ProgramsSection from '@/components/programs-section';
import ProcessSection from '@/components/process-section';
import FoundersSection from '@/components/founders-section';
import FaqSection from '@/components/faq-section';
import CtaSection from '@/components/cta-section';
import CinematicFooter from '@/components/cinematic-footer';

// three/webgpu touches browser-only globals (e.g. `self`) at module-eval time,
// so this must never run during SSR/prerendering.
const HeroFuturistic = dynamic(() => import('@/components/ui/hero-futuristic'), {
  ssr: false,
  loading: () => <div className="min-h-[100svh] bg-[#07090a]" />,
});

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <Nav />

      {/* Content lifts up over the fixed cinematic footer as you scroll */}
      <div
        ref={contentRef}
        className="relative z-10 mb-[460px] overflow-hidden rounded-b-[32px] border-b border-white/10 bg-[#f7f9f7] shadow-[0_40px_90px_rgba(0,0,0,0.55)] md:mb-[460px]"
      >
        <AmbientBackground />
        <FlowThread contentRef={contentRef} />

        <div className="hero-inner-marker">
          <HeroFuturistic />
        </div>

        <div className="ticker-marker">
          <TrustBar />
          <Ticker />
        </div>

        <PainSection />
        <JourneySection />
        <ResultsSection />
        <TestimonialsCarousel />
        <ProgramsSection />
        <ProcessSection />
        <FoundersSection />
        <FaqSection />
        <CtaSection />
      </div>

      <CinematicFooter />
    </>
  );
}
