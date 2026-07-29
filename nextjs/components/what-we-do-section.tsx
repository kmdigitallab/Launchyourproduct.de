import Reveal from './reveal';

const STEPS = [
  { n: '01', title: 'Free Audit', body: 'We look at your listing and tell you exactly what to fix or build first.' },
  { n: '02', title: 'We Produce', body: 'Motion design videos, scripted and finished by us — no camera crew needed.' },
  { n: '03', title: 'You Launch', body: 'Live on Amazon, Shopify or TikTok, usually within days.' },
];

export default function WhatWeDoSection() {
  return (
    <section id="how" className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[860px] text-center">
        <Reveal>
          <h2 className="mb-5 text-[clamp(26px,3.2vw,42px)] font-extrabold leading-[1.15] tracking-normal text-white">
            We create motion design ads for <span className="text-[#c084fc]">Amazon &amp; e-commerce sellers</span>.
          </h2>
          <p className="mx-auto mb-14 max-w-[560px] text-[17px] font-light leading-[1.75] text-white/60">
            Scroll-stopping product videos — UGC-style hooks, showcase videos, and Sponsored Brands ads — produced
            fast, without a camera crew or studio.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-8 text-left sm:grid-cols-3 sm:gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/[0.08] text-xs font-extrabold text-[#c084fc]">
                {s.n}
              </div>
              <h3 className="mb-1.5 text-[15px] font-bold tracking-normal text-white">{s.title}</h3>
              <p className="text-[13px] font-light leading-[1.65] text-white/55">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
