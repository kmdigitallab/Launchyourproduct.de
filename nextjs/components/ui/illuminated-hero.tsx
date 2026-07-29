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
  primaryCta = { label: 'Get your free audit →', href: '#cta' },
  secondaryCta = { label: 'View Portfolio', href: '/portfolio' },
  tags = ['Amazon', 'Shopify', 'Kickstarter', 'TikTok'],
}: IlluminatedHeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-wrap items-center justify-center overflow-hidden bg-[#f7f9f7] px-6 py-24 text-center"
    >
      {/* Green streak lines — subtle diagonal light trails, pure CSS gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[-10%] top-[28%] h-px w-[55%] -rotate-[6deg] bg-gradient-to-r from-transparent via-green-500/45 to-transparent" />
        <span className="absolute left-[-10%] top-[33%] h-px w-[42%] -rotate-[6deg] bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
        <span className="absolute right-[-10%] top-[62%] h-px w-[50%] rotate-[5deg] bg-gradient-to-l from-transparent via-green-500/35 to-transparent" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[760px] flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-green-600/20 bg-green-600/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-green-600">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-600" />
          {badge}
        </div>

        <h1 className="mb-5 text-[clamp(34px,5.5vw,68px)] font-black leading-[1.08] tracking-normal text-[#0d1f12]">
          {titleLine1}
          <br />
          <span
            className="inline-block animate-[glowWipe_1.1s_ease-out_forwards] text-green-500"
            style={{
              textShadow:
                '0 0 6px rgba(74,222,128,0.85), 0 0 16px rgba(34,197,94,0.6), 0 0 32px rgba(34,197,94,0.35)',
            }}
          >
            {titleGlow}
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-[500px] text-[17px] font-light leading-[1.75] text-[#4b6358]">
          {subtitle}
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="rounded-[10px] bg-green-600 px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(22,163,74,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(22,163,74,0.5)]"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-[10px] border border-black/[0.12] bg-white px-6 py-3.5 text-sm font-medium text-[#4b6358] transition-all hover:border-green-600 hover:text-green-600"
          >
            {secondaryCta.label}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-green-600/[0.22] bg-green-600/[0.08] px-3.5 py-1.5 text-xs font-bold tracking-[.3px] text-green-600"
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
