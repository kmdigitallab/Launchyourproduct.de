import MagneticButton from '@/components/magnetic-button';

interface IlluminatedHeroProps {
  badge?: string;
  titleLine1?: string;
  titleGlow?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tags?: string[];
}

export function IlluminatedHero({
  badge = 'Motion Design Videos for Amazon Sellers',
  titleLine1 = 'We turn your product into',
  titleGlow = 'a buying decision.',
  subtitle = 'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter – delivered fast. No camera crew, no studio.',
  primaryCta = { label: 'Get your free audit →', href: 'mailto:info@launchyourproduct.de' },
  secondaryCta = { label: 'View Portfolio', href: '#portfolio' },
  tags = ['Amazon', 'Shopify', 'Kickstarter', 'TikTok'],
}: IlluminatedHeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-wrap items-center justify-center overflow-hidden bg-black px-6 py-24 text-center"
    >
      {/* Violet streak lines — subtle diagonal light trails, pure CSS gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[-10%] top-[28%] h-px w-[55%] -rotate-[6deg] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
        <span className="absolute left-[-10%] top-[33%] h-px w-[42%] -rotate-[6deg] bg-gradient-to-r from-transparent via-violet-300/25 to-transparent" />
        <span className="absolute right-[-10%] top-[62%] h-px w-[50%] rotate-[5deg] bg-gradient-to-l from-transparent via-violet-400/30 to-transparent" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[760px] flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-violet-300">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-violet-400" />
          {badge}
        </div>

        <h1 className="mb-5 text-[clamp(34px,5.5vw,68px)] font-black leading-[1.08] tracking-normal text-white">
          {titleLine1}
          <br />
          <span
            className="inline-block animate-[glowWipe_1.1s_ease-out_forwards] text-violet-300"
            style={{
              textShadow:
                '0 0 6px rgba(196,181,253,0.85), 0 0 16px rgba(167,139,250,0.6), 0 0 32px rgba(139,92,246,0.35)',
            }}
          >
            {titleGlow}
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-[500px] text-[17px] font-light leading-[1.75] text-white/60">{subtitle}</p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            href={primaryCta.href}
            className="rounded-[10px] bg-violet-400 px-8 py-3.5 text-[15px] font-bold text-black shadow-[0_4px_20px_rgba(167,139,250,0.35)] transition-shadow hover:shadow-[0_8px_30px_rgba(167,139,250,0.5)]"
          >
            {primaryCta.label}
          </MagneticButton>
          <a
            href={secondaryCta.href}
            className="rounded-[10px] border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-violet-400/50 hover:text-violet-300"
          >
            {secondaryCta.label}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-violet-400/[0.25] bg-violet-400/[0.08] px-3.5 py-1.5 text-xs font-bold tracking-[.3px] text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IlluminatedHero;
