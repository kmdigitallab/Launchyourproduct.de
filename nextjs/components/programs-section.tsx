import Reveal from './reveal';
import SectionLabel from './section-label';

const PROGRAMS = [
  {
    featured: false,
    forWhom: 'For Content Creators',
    title: 'Monetise',
    outcome: '→ Your first digital product in 3 weeks',
    body: 'You have the audience. We build the product. E-book, online course or video program – fully produced, branded and with funnel.',
    tags: ['E-Books', 'Courses', 'Sales Funnel'],
  },
  {
    featured: true,
    forWhom: 'For scaling-ready Founders',
    title: 'UpLevel',
    outcome: '→ From product to systematic growth',
    body: 'You have a product but want to scale faster. We build AI content pipelines, optimize your funnel and take over the complete growth execution.',
    tags: ['Growth Ops', 'AI Pipeline', 'Scaling'],
  },
  {
    featured: false,
    forWhom: 'For Amazon Sellers',
    title: 'Motion Ads',
    outcome: '→ Videos delivered in 48h',
    body: 'Professional motion design videos without shooting. UGC hooks, showcase videos, Sponsored Brands Ads – produced with Higgsfield AI, delivered in 48 hours.',
    tags: ['Amazon', 'TikTok', '48h Delivery'],
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
          <SectionLabel>Programs</SectionLabel>
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-1.2px]">
            Choose your
            <br />
            <span className="text-green-600">growth path</span>
          </h2>
          <p className="mx-auto mb-4 mt-4 max-w-[480px] text-base font-light leading-[1.75] text-[#4b6358]">
            Three focused programs – depending on where you stand and where you want to go.
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
