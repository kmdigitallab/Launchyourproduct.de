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
  primaryCta = { label: 'Get in touch →', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@launchyourproduct.de' },
  secondaryCta = { label: 'View Portfolio', href: '#portfolio' },
  tags = ['Amazon', 'Shopify', 'Kickstarter', 'TikTok'],
}: IlluminatedHeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-wrap items-center justify-center overflow-hidden bg-black px-6 py-24 text-center"
    >
      {/* Ambient looping glow — drifting violet streaks + sweeping spotlight, seamless loop */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
        src="/video/hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-[760px] flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#c084fc]">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-[#7c3aed]" />
          {badge}
        </div>

        <h1 className="mb-5 text-[clamp(34px,5.5vw,68px)] font-black leading-[1.08] tracking-normal text-white">
          {titleLine1}
          <br />
          <span
            className="inline-block animate-[glowWipe_1.1s_ease-out_forwards] text-[#c084fc]"
            style={{
              textShadow:
                '0 0 1px rgba(255,255,255,0.9), 0 0 4px rgba(196,181,253,0.7), 0 0 10px rgba(139,92,246,0.4)',
            }}
          >
            {titleGlow}
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-[500px] text-[17px] font-light leading-[1.75] text-white/60">{subtitle}</p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            href={primaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[10px] bg-[#7c3aed] px-8 py-3.5 text-[15px] font-bold text-black shadow-[0_4px_20px_rgba(167,139,250,0.35)] transition-shadow hover:shadow-[0_8px_30px_rgba(167,139,250,0.5)]"
          >
            {primaryCta.label}
          </MagneticButton>
          <a
            href={secondaryCta.href}
            className="rounded-[10px] border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-[#7c3aed]/50 hover:text-[#c084fc]"
          >
            {secondaryCta.label}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#7c3aed]/[0.25] bg-[#7c3aed]/[0.08] px-3.5 py-1.5 text-xs font-bold tracking-[.3px] text-[#c084fc]"
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
