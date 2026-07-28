import Reveal from './reveal';
import SectionLabel from './section-label';

const PAINS = [
  {
    icon: '⏳',
    title: 'No Time for Production',
    body: "You know you need a product – but between content, community, and daily life there's no time left to build it.",
  },
  {
    icon: '🌀',
    title: 'Overwhelmed by the Process',
    body: 'Course platform, funnel, payment processing, marketing – the effort feels bigger than the potential reward.',
  },
  {
    icon: '📉',
    title: 'Videos Without Impact',
    body: 'Your Amazon listings have generic images. Your competitors have professional motion design videos – and more clicks.',
  },
  {
    icon: '🤷',
    title: 'Wrong Focus',
    body: "You invest hours in production instead of audience-building. That's backwards – production is our job.",
  },
];

export default function PainSection() {
  return (
    <section className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[1040px]">
        <Reveal className="mb-12 text-center">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-1.2px]">
            Why most creators never
            <br />
            <span className="text-green-600">truly monetize</span>
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PAINS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-black/[0.08] bg-white/90 p-7 transition-all hover:-translate-y-[3px] hover:border-black/[0.16] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-3.5 text-2xl">{p.icon}</div>
              <h3 className="mb-2 text-base font-bold tracking-[-.3px]">{p.title}</h3>
              <p className="text-sm font-light leading-[1.7] text-[#4b6358]">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
