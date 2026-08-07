import type { Metadata } from 'next';
import Nav from '@/components/nav';
import AnnouncementBar from '@/components/announcement-bar';
import PortfolioGrid from '@/components/portfolio-grid';
import ScrollToTop from '@/components/scroll-to-top';
import LiquidGlassButton from '@/components/liquid-glass-button';

export const metadata: Metadata = {
  title: 'Portfolio – LaunchYourProduct',
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-x-0 top-0 z-[210]">
        <AnnouncementBar />
      </div>
      <Nav />

      {/* Header */}
      <div className="relative z-[1] px-6 pb-[60px] pt-[130px] text-center md:px-12">
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#c084fc]">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-[#7c3aed]" /> Our Work
        </div>
        <h1 className="mb-4 text-[clamp(36px,5vw,64px)] font-black leading-[1.05] tracking-normal text-white">
          Our <span className="text-[#c084fc]">best projects</span>
          <br />
          for you.
        </h1>
        <p className="mx-auto max-w-[480px] text-[17px] font-light leading-[1.7] text-white/55">
          Real motion design videos for real products – scroll through our work.
        </p>

        <div className="mx-auto mt-9 max-w-[600px] rounded-2xl border border-[#7c3aed]/20 bg-[#7c3aed]/[0.05] px-6 py-5">
          <p className="text-[15px] font-medium leading-[1.6] text-white/75">
            Shoppers who watch a product video are{' '}
            <span className="font-extrabold text-[#c084fc]">1.81× more likely to purchase</span>, and adding a
            video to a product page lifts add-to-cart rate by up to{' '}
            <span className="font-extrabold text-[#c084fc]">144%</span> compared to static images alone.
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[.5px] text-white/40">
            Source: Invesp / Kissmetrics e-commerce video conversion research
          </p>
        </div>
      </div>

      <div className="relative z-[1] mx-auto my-12 h-0.5 w-[60px] bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent" />

      <div className="relative z-[1] px-6 pb-[120px] md:px-6">
        <PortfolioGrid />
      </div>

      {/* CTA */}
      <div className="relative z-[1] px-6 pb-[100px] text-center md:px-6">
        <div className="mx-auto max-w-[600px] rounded-[20px] border border-[#7c3aed]/20 bg-gradient-to-br from-[#7c3aed]/[0.06] to-[#7c3aed]/[0.02] px-6 py-14 md:px-10">
          <h2 className="mb-3.5 text-[clamp(24px,3vw,36px)] font-extrabold tracking-normal text-white">
            Your project is
            <br />
            <span className="text-[#c084fc]">next.</span>
          </h2>
          <p className="mb-7 text-[15px] font-light leading-[1.7] text-white/55">
            Book a free 30-minute audit and we&apos;ll show you what we can build for you.
          </p>
          <LiquidGlassButton
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@launchyourproduct.de"
            target="_blank"
            rel="noreferrer"
            orb={false}
          >
            Get in touch →
          </LiquidGlassButton>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
