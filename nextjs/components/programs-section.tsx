import Reveal from './reveal';
import SectionLabel from './section-label';

const PROGRAMS = [
  {
    featured: true,
    forWhom: 'For TikTok & Instagram',
    title: 'UGC-Style Hooks',
    outcome: '→ Scroll-stopping opening shots',
    body: 'Short, punchy hooks built to stop the scroll in the first second – styled like organic content, produced without a camera crew.',
    tags: ['TikTok', 'Reels', 'Hooks'],
  },
  {
    featured: false,
    forWhom: 'For Amazon & Shopify Listings',
    title: 'Showcase Videos',
    outcome: '→ Product videos that convert',
    body: 'Clean, professional motion design product videos for your listing or product page – built to turn browsers into buyers.',
    tags: ['Amazon', 'Shopify', 'Listings'],
  },
  {
    featured: false,
    forWhom: 'For Amazon Sellers',
    title: 'Sponsored Brands Ads',
    outcome: '→ Higher CTR on paid placements',
    body: 'Motion design video ads optimized specifically for Amazon Sponsored Brands – built to earn the click and the sale.',
    tags: ['Amazon Ads', 'Sponsored Brands', 'CTR'],
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="px-6 py-[88px] md:px-12"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(22,163,74,0.03),transparent)' }}
    >
      <div className="mx-auto max-w-[1040px]">
        <Reveal className="mb-8 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-0.5px]">
            Motion design ads that
            <br />
            <span className="text-green-600">get you selling more.</span>
          </h2>
          <p className="mx-auto mb-4 mt-4 max-w-[480px] text-base font-light leading-[1.75] text-[#4b6358]">
            Three formats, one focus: scroll-stopping motion design videos for Amazon, Shopify &amp; TikTok sellers.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div
              key={p.title}
              className={`relative overflow-hidden rounded-xl border p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${
                p.featured
                  ? 'border-green-600/25 bg-gradient-to-br from-green-600/[0.08] to-green-400/[0.02]'
                  : 'border-black/[0.08] bg-white/90 hover:border-black/[0.16]'
              }`}
            >
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[1.5px] text-[#8aaa96]">
                {p.forWhom}
              </div>
              <h3 className="mb-2 text-xl font-extrabold tracking-[-.4px]">{p.title}</h3>
              <div className="mb-3 text-[13px] font-semibold text-green-500">{p.outcome}</div>
              <p className="text-[13px] font-light leading-[1.7] text-[#4b6358]">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-green-600/[0.18] bg-green-600/[0.08] px-2 py-[3px] text-[10px] font-semibold tracking-[.5px] text-green-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#cta"
                className="mt-[18px] inline-flex items-center gap-1.5 text-[13px] font-semibold text-green-600 transition-all hover:gap-2.5 hover:text-black"
              >
                Learn more →
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
