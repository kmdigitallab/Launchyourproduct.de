import Reveal from './reveal';
import SectionLabel from './section-label';
import RevenueChart from './revenue-chart';
import CountUp from './count-up';

const STATS = [
  { num: '120+', label: 'Digital products launched', growth: '↑ Done-for-you' },
  { num: '3 wks', label: 'Average launch time', growth: '↑ AI-accelerated' },
  { num: '340%', label: 'Avg. CTR uplift for Motion Ads', growth: '↑ Client average' },
];

export default function ResultsSection() {
  return (
    <section id="results" className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[1040px]">
        <Reveal className="mb-11">
          <SectionLabel>Real Results</SectionLabel>
          <h2 className="mb-4 text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-0.5px]">
            The numbers
            <br />
            <span className="text-green-600">don&apos;t lie.</span>
          </h2>
          <p className="max-w-[520px] text-base font-light leading-[1.75] text-[#4b6358]">
            What happens when someone else handles the execution – and you focus on what you do best.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
          <RevenueChart />
          <div className="flex flex-col gap-3.5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-black/[0.08] bg-white/90 px-6 py-[22px] transition-colors hover:border-black/[0.16]"
              >
                <div className="text-[30px] font-black tracking-[-1.5px]">
                  <CountUp target={s.num} />
                </div>
                <div className="mt-1 text-xs text-[#8aaa96]">{s.label}</div>
                <div className="mt-[3px] text-xs font-semibold text-green-600">{s.growth}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
