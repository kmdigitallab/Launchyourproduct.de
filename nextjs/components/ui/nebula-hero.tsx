interface NebulaHeroProps {
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function NebulaHero({
  badge = '✨ Trusted by Amazon & E-Commerce Sellers',
  titleLine1 = 'Turn Your Product',
  titleLine2 = 'Into A Buying Decision',
  subtitle = 'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter — fast, done-for-you, no camera crew.',
  primaryCta = { label: 'Get your free audit →', href: '#cta' },
  secondaryCta = { label: 'View Portfolio', href: '/portfolio' },
}: NebulaHeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#050807] px-6 py-24 text-center"
    >
      {/* Smoky nebula backdrop — layered blurred blobs, same technique as AmbientBackground */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.35),transparent_70%)] blur-[90px]" />
        <span className="absolute right-[5%] top-[10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.22),transparent_70%)] blur-[100px]" />
        <span className="absolute bottom-[-15%] left-[30%] h-[500px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(20,83,45,0.5),transparent_70%)] blur-[110px]" />
        <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,8,7,0.55)_75%)]" />

        {/* Light streaks */}
        <span className="absolute left-[-10%] top-[32%] h-[2px] w-[55%] -rotate-[6deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px]" />
        <span className="absolute left-[-10%] top-[38%] h-px w-[45%] -rotate-[6deg] bg-gradient-to-r from-transparent via-green-300/60 to-transparent blur-[1px]" />
        <span className="absolute right-[-10%] top-[46%] h-[2px] w-[50%] rotate-[5deg] bg-gradient-to-l from-transparent via-white/50 to-transparent blur-[1px]" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[820px] flex-col items-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm">
          {badge}
        </div>

        <h1 className="mb-6 text-[clamp(36px,6vw,72px)] font-extrabold leading-[1.08] tracking-normal">
          <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
            {titleLine1}
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-300 bg-clip-text text-transparent">
            {titleLine2}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-[560px] text-lg font-light leading-[1.7] text-white/70">{subtitle}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={primaryCta.href}
            className="rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-8 py-3.5 text-[15px] font-bold text-black shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(34,197,94,0.6)]"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-[15px] font-bold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.08]"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default NebulaHero;
