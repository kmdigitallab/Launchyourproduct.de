import Reveal from './reveal';
import PortfolioGrid from './portfolio-grid';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-[88px] md:px-12">
      <Reveal className="mb-16 text-center">
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-violet-300">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-violet-400" /> Our Work
        </div>
        <h2 className="mb-4 text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.1] tracking-normal text-white">
          Real motion design videos, <span className="text-violet-300">real products.</span>
        </h2>

        <div className="mx-auto mt-9 max-w-[600px] rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] px-6 py-5">
          <p className="text-[15px] font-medium leading-[1.6] text-white/75">
            Shoppers who watch a product video are{' '}
            <span className="font-extrabold text-violet-300">1.81× more likely to purchase</span>, and adding a
            video to a product page lifts add-to-cart rate by up to{' '}
            <span className="font-extrabold text-violet-300">144%</span> compared to static images alone.
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[.5px] text-white/40">
            Source: Invesp / Kissmetrics e-commerce video conversion research
          </p>
        </div>
      </Reveal>

      <PortfolioGrid />
    </section>
  );
}
