import Reveal from './reveal';
import SectionLabel from './section-label';

export default function FoundersSection() {
  return (
    <section
      id="founders"
      className="px-6 py-[88px] md:px-12"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(22,163,74,0.03),transparent)' }}
    >
      <div className="mx-auto max-w-[1040px]">
        <Reveal className="mb-12 text-center">
          <SectionLabel>Why trust us</SectionLabel>
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-0.5px]">
            Built by founders
            <br />
            <span className="text-green-600">who&apos;ve done it themselves.</span>
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-black/[0.08] bg-white/90 p-7 transition-colors hover:border-black/[0.16]">
            <div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl font-black text-white"
              style={{ background: 'linear-gradient(135deg,#16a34a,#14532d)' }}
            >
              C
            </div>
            <h4 className="mb-0.5 text-base font-bold tracking-[-.3px]">Cedric</h4>
            <div className="mb-3 text-xs text-[#8aaa96]">Co-Founder · Strategy &amp; Product Development</div>
            <p className="text-[13px] font-light leading-[1.7] text-[#4b6358]">
              Cedric built digital products before helping others do it. He knows every step – and every mistake you
              can make along the way. His focus: the fastest route from idea to sellable product.
            </p>
          </div>
          <div className="rounded-xl border border-black/[0.08] bg-white/90 p-7 transition-colors hover:border-black/[0.16]">
            <div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-xl font-black text-white"
              style={{ background: 'linear-gradient(135deg,#1c1c1c,#2a2a2a)' }}
            >
              T
            </div>
            <h4 className="mb-0.5 text-base font-bold tracking-[-.3px]">Tobi</h4>
            <div className="mb-3 text-xs text-[#8aaa96]">Co-Founder · Growth &amp; Content Production</div>
            <p className="text-[13px] font-light leading-[1.7] text-[#4b6358]">
              Tobi combines growth systems with AI-powered production. He builds content pipelines that scale – and
              motion design videos that set Amazon sellers apart from the competition.
            </p>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-5 max-w-[640px] rounded-xl border border-black/[0.08] bg-white/90 p-7">
          <p className="text-center text-[15px] font-light leading-[1.8] text-[#4b6358]">
            <strong className="font-bold text-[#0d1f12]">We&apos;re 21, studied business</strong> and founded LYP
            because we saw how much potential creators leave on the table – not out of laziness, but because they
            lack the right systems.{' '}
            <span className="text-green-500">We build those systems for you.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
