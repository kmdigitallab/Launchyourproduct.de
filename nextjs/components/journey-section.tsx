import Reveal from './reveal';
import SectionLabel from './section-label';

const STEPS = [
  { icon: '📞', title: 'Free Audit', body: '30 min. We look at your listing and show you exactly what would move the needle.' },
  { icon: '🎬', title: 'We Produce', body: 'Motion design videos – scripted, built and finished by us.' },
  { icon: '🚀', title: 'You Launch', body: 'Live on Amazon, TikTok or Shopify – usually in days, not months.' },
  { icon: '📈', title: 'We Optimize', body: 'We track performance and keep refining – you focus on running your business.' },
];

export default function JourneySection() {
  return (
    <section
      id="how"
      className="px-6 py-[88px] md:px-12"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(22,163,74,0.03),transparent)' }}
    >
      <div className="mx-auto max-w-[1040px]">
        <Reveal className="mb-14 text-center">
          <SectionLabel>Your Transformation</SectionLabel>
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-0.5px]">
            From &quot;I should someday...&quot; to
            <br />
            <span className="text-green-600">&quot;My video is live.&quot;</span>
          </h2>
        </Reveal>

        <Reveal className="relative flex flex-col gap-5 md:flex-row md:gap-0">
          <div className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent md:block" />
          {STEPS.map((s) => (
            <div key={s.title} className="relative flex flex-1 flex-col items-center px-3 text-center">
              <div className="relative z-10 mb-3.5 flex h-12 w-12 items-center justify-center rounded-full border border-green-600/30 bg-green-600/[0.08] text-lg transition-all hover:border-green-600/60 hover:bg-green-600/20 hover:shadow-[0_0_20px_rgba(22,163,74,0.3)]">
                {s.icon}
              </div>
              <h4 className="mb-1 text-[13px] font-bold tracking-[-.2px]">{s.title}</h4>
              <p className="text-xs font-light leading-[1.6] text-[#4b6358]">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
