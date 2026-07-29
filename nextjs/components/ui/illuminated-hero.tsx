import { cn } from '@/lib/utils';

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
  subtitle = 'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter – delivered in 48h. No camera crew, no studio.',
  primaryCta = { label: 'Get your free audit →', href: '#cta' },
  secondaryCta = { label: 'View Portfolio', href: '/portfolio' },
  tags = ['Amazon', 'Shopify', 'Kickstarter', 'TikTok'],
}: IlluminatedHeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-wrap items-center justify-center overflow-hidden bg-[#f7f9f7] px-6 py-24 text-center"
    >
      {/* Two "planet" glow shapes — same shape/animation as the reference, recolored green for a light bg */}
      <div className="pointer-events-none absolute h-full w-full max-w-[44em]">
        <div
          className="absolute size-full origin-center translate-y-[-70%] scale-[1.2] animate-[onloadbgt_1s_ease-in-out_forwards] rounded-[100em] opacity-70"
          style={{
            background:
              'radial-gradient(circle,rgba(22,163,74,0.22) 0%,rgba(22,163,74,0.08) 45%,transparent 70%)',
          }}
        />
        <div
          className="absolute size-full origin-center translate-y-[70%] scale-[1.2] animate-[onloadbgb_1s_ease-in-out_forwards] rounded-[100em] opacity-70"
          style={{
            background:
              'radial-gradient(circle,rgba(22,163,74,0.22) 0%,rgba(22,163,74,0.08) 45%,transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[760px] flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-green-600/20 bg-green-600/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-green-600">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-600" />
          {badge}
        </div>

        <h1 className="mb-5 text-[clamp(34px,5.5vw,68px)] font-black leading-[1.08] tracking-[-2.5px] text-[#0d1f12]">
          {titleLine1}
          <br />
          <span
            className={cn(
              'relative inline-block',
              'before:absolute before:animate-[onloadopacity_1s_ease-out_forwards] before:opacity-0 before:content-[attr(data-text)]',
              'before:bg-[linear-gradient(0deg,#16a34a_0%,#4ade80_50%)] before:bg-clip-text before:text-[#4ade80]',
              '[filter:url(#glow-green)]'
            )}
            data-text={titleGlow}
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

      {/* Original glow filter (glow-4), recolored green instead of gold */}
      <svg className="absolute -z-10 h-0 w-0" width="1440" height="300" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-green" colorInterpolationFilters="sRGB" x="-50%" y="-200%" width="200%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />

            <feColorMatrix
              in="blur4"
              result="color-0-blur"
              type="matrix"
              values="0.08 0 0 0 0
                      0 0.64 0 0 0
                      0 0 0.29 0 0
                      0 0 0 0.8 0"
            />
            <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" />

            <feColorMatrix
              in="blur19"
              result="color-1-blur"
              type="matrix"
              values="0.06 0 0 0 0
                      0 0.49 0 0 0
                      0 0 0.26 0 0
                      0 0 0 1 0"
            />
            <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" />

            <feColorMatrix
              in="blur9"
              result="color-2-blur"
              type="matrix"
              values="0.09 0 0 0 0
                      0 0.67 0 0 0
                      0 0 0.36 0 0
                      0 0 0 0.65 0"
            />
            <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" />

            <feColorMatrix
              in="blur30"
              result="color-3-blur"
              type="matrix"
              values="0.09 0 0 0 0
                      0 0.61 0 0 0
                      0 0 0.39 0 0
                      0 0 0 1 0"
            />
            <feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="2" />

            <feColorMatrix
              in="blur30"
              result="color-4-blur"
              type="matrix"
              values="0.06 0 0 0 0
                      0 0.35 0 0 0
                      0 0 0.16 0 0
                      0 0 0 1 0"
            />
            <feOffset in="color-4-blur" result="layer-4-offsetted" dx="0" dy="16" />

            <feColorMatrix
              in="blur30"
              result="color-5-blur"
              type="matrix"
              values="0.05 0 0 0 0
                      0 0.29 0 0 0
                      0 0 0.13 0 0
                      0 0 0 1 0"
            />
            <feOffset in="color-5-blur" result="layer-5-offsetted" dx="0" dy="64" />

            <feColorMatrix
              in="blur30"
              result="color-6-blur"
              type="matrix"
              values="0.03 0 0 0 0
                      0 0.16 0 0 0
                      0 0 0.07 0 0
                      0 0 0 1 0"
            />
            <feOffset in="color-6-blur" result="layer-6-offsetted" dx="0" dy="64" />

            <feMerge>
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="layer-1-offsetted" />
              <feMergeNode in="layer-2-offsetted" />
              <feMergeNode in="layer-3-offsetted" />
              <feMergeNode in="layer-4-offsetted" />
              <feMergeNode in="layer-5-offsetted" />
              <feMergeNode in="layer-6-offsetted" />
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </section>
  );
}

export default IlluminatedHero;
