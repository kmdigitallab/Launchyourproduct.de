import Reveal from './reveal';
import SectionLabel from './section-label';

const STEPS = [
  { n: '01', title: 'Free Audit', body: 'We analyze your listings or your idea and show you <strong>exactly what to fix or build first</strong>.' },
  { n: '02', title: 'Strategy & Build', body: 'We structure concept, pricing and positioning – <strong>you give feedback, we build</strong>.' },
  { n: '03', title: 'AI Production', body: 'Claude AI + Higgsfield accelerate scripts, copy and videos to <strong>a fraction of normal time</strong>.' },
  { n: '04', title: 'Launch & Optimize', body: 'Your video goes live. We measure performance and refine – <strong>continuously</strong>.' },
];

export default function ProcessSection() {
  return (
    <section id="how2" className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[1040px]">
        <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mb-4 text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-0.5px]">
              Simply explained.
              <br />
              <span className="text-green-600">Quickly executed.</span>
            </h2>
            <p className="mb-11 max-w-[520px] text-base font-light leading-[1.75] text-[#4b6358]">
              No long onboarding. No endless back-and-forth. We start immediately.
            </p>
            <a
              href="#cta"
              className="inline-block rounded-[10px] bg-green-600 px-[26px] py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(22,163,74,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(22,163,74,0.5)]"
            >
              Get started →
            </a>
          </Reveal>

          <Reveal className="flex flex-col">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`grid grid-cols-[44px_1fr] items-start gap-4 py-5 ${
                  i !== STEPS.length - 1 ? 'border-b border-black/[0.07]' : ''
                }`}
              >
                <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border border-green-600/20 bg-green-600/[0.08] text-xs font-extrabold text-green-500">
                  {s.n}
                </div>
                <div>
                  <h4 className="mb-1 text-[15px] font-bold tracking-[-.2px]">{s.title}</h4>
                  <p
                    className="text-[13px] font-light leading-[1.65] text-[#4b6358] [&_strong]:font-semibold [&_strong]:text-[#0d1f12]"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
