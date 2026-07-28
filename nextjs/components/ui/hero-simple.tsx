import { Globe } from '@/components/ui/globe';

interface HeroSimpleProps {
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tags?: string[];
}

export const HeroSimple = ({
  badge = 'Motion Design Videos for Amazon Sellers',
  titleLine1 = 'We create your',
  titleLine2 = 'product video.',
  subtitle = 'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter – delivered in 48h. No camera crew, no studio.',
  primaryCta = { label: 'Get your free audit →', href: '#cta' },
  secondaryCta = { label: 'View Portfolio', href: '/portfolio' },
  tags = ['Amazon', 'Shopify', 'Kickstarter', 'TikTok'],
}: HeroSimpleProps) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#07090a] px-6 pb-[420px] pt-24 text-center md:px-12"
    >
      {/* Decorative rotating globe */}
      <Globe className="top-[46%]" />

      {/* Veil so the text stays readable over the globe */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_55%_at_50%_38%,rgba(7,9,10,0.35)_0%,rgba(7,9,10,0.85)_75%)]" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[760px] flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-green-400/25 bg-green-600/[0.14] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-green-400">
          <span className="h-[5px] w-[5px] rounded-full bg-green-400" />
          {badge}
        </div>

        <h1 className="mb-5 text-[clamp(38px,5.5vw,72px)] font-black leading-[1.03] tracking-[-3px] text-[#f0f6f1]">
          {titleLine1}
          <br />
          <span className="text-green-400 [text-shadow:0_0_40px_rgba(74,222,128,0.4)]">
            {titleLine2}
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-[500px] text-[17px] font-light leading-[1.75] text-[rgba(240,246,241,0.65)]">
          {subtitle}
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="rounded-[10px] bg-green-600 px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(22,163,74,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(22,163,74,0.65)]"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-[rgba(240,246,241,0.75)] transition-all hover:border-green-400/50 hover:bg-green-600/[0.08] hover:text-green-400"
          >
            {secondaryCta.label}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-green-400/[0.28] bg-green-600/10 px-3.5 py-1.5 text-xs font-bold tracking-[.3px] text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
