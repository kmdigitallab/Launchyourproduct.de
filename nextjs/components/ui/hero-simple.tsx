import { GlobeCard } from '@/components/ui/globe-card';

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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#f7f9f7] px-6 py-24 text-center md:px-12"
    >
      <div className="relative z-[2] mx-auto flex w-full max-w-[760px] flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-green-600/20 bg-green-600/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-green-600">
          <span className="h-[5px] w-[5px] rounded-full bg-green-600" />
          {badge}
        </div>

        <h1 className="mb-5 text-[clamp(38px,5.5vw,72px)] font-black leading-[1.03] tracking-[-3px] text-[#0d1f12]">
          {titleLine1}
          <br />
          <span className="text-green-600">{titleLine2}</span>
        </h1>

        <p className="mx-auto mb-9 max-w-[500px] text-[17px] font-light leading-[1.75] text-[#4b6358]">
          {subtitle}
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
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

        <div className="mb-14 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-green-600/[0.22] bg-green-600/[0.08] px-3.5 py-1.5 text-xs font-bold tracking-[.3px] text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Contained decorative globe, using the proven reference card layout */}
        <GlobeCard />
      </div>
    </section>
  );
};

export default HeroSimple;
