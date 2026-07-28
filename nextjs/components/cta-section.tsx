import Reveal from './reveal';

export default function CtaSection() {
  return (
    <section id="cta" className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[1040px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] border border-green-600/20 bg-gradient-to-br from-green-600/[0.06] to-green-600/[0.02] px-6 py-[72px] text-center md:px-10">
            <div className="pointer-events-none absolute -top-[60px] left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-green-600/[0.06] blur-[60px]" />
            <div className="relative z-[1]">
              <span className="mb-3.5 block border-l-2 border-green-600/30 pl-2.5 text-[10px] font-bold uppercase tracking-[2px] text-green-600">
                Next Step
              </span>
              <h2 className="mx-auto mb-3.5 max-w-[560px] text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-1.2px]">
                Your free
                <br />
                <span className="text-green-600">Monetization Audit</span>
              </h2>
              <p className="mx-auto mb-8 max-w-[440px] text-base font-light leading-[1.7] text-[#4b6358]">
                30 minutes. No pitch. We analyze your situation and show you exactly which product to build – and how
                fast we can do it.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                <a
                  href="mailto:hello@launchyourproduct.de"
                  className="rounded-[10px] bg-green-600 px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(22,163,74,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(22,163,74,0.5)]"
                >
                  Book your free audit →
                </a>
                <a
                  href="mailto:hello@launchyourproduct.de"
                  className="rounded-[10px] border border-black/[0.12] bg-white px-[26px] py-3.5 text-sm font-medium text-[#4b6358] transition-all hover:border-green-600 hover:text-green-600"
                >
                  hello@launchyourproduct.de
                </a>
              </div>
              <div className="mt-4 text-[11px] tracking-[.3px] text-[#8aaa96]">
                NO COMMITMENT · FREE · 30 MINUTES · REPLY WITHIN 24H
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
