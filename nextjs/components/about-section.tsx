import Reveal from './reveal';

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[860px]">
        <Reveal className="mb-14 text-center">
          <h2 className="mb-4 text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-normal text-white">
            About <span className="text-[#c084fc]">us.</span>
          </h2>
          <p className="mx-auto max-w-[520px] text-base font-light leading-[1.75] text-white/60">
            LaunchYourProduct is run by Kabisch &amp; Miller GbR — Tobias Miller and Cedric Leon Kabisch.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="glass-card p-7">
            <div className="glass-medallion mb-4 flex h-14 w-14 items-center justify-center text-xl font-black text-[#c084fc]">
              T
            </div>
            <h3 className="mb-0.5 text-base font-bold tracking-normal text-white">Tobias Miller</h3>
            <div className="text-xs text-white/40">Co-Founder, Kabisch &amp; Miller GbR</div>
          </div>
          <div className="glass-card p-7">
            <div className="glass-medallion mb-4 flex h-14 w-14 items-center justify-center text-xl font-black text-[#c084fc]">
              C
            </div>
            <h3 className="mb-0.5 text-base font-bold tracking-normal text-white">Cedric Leon Kabisch</h3>
            <div className="text-xs text-white/40">Co-Founder, Kabisch &amp; Miller GbR</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
