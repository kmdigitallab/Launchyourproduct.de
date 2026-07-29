import Reveal from './reveal';
import SectionLabel from './section-label';

const PAINS = [
  {
    icon: '📉',
    title: 'Static Images, Static Sales',
    body: 'Your listing looks like every other listing – because it is. Same white-background photos, same generic bullets. Shoppers scroll straight past.',
  },
  {
    icon: '⚡',
    title: 'Your Competitors Already Moved',
    body: 'The sellers outranking you already switched to motion design ads. Every week you wait, the gap gets harder to close.',
  },
  {
    icon: '🎥',
    title: 'No Studio, No Time',
    body: "Real video production means camera crews, studios, weeks of editing. You don't have that time – and you don't need it.",
  },
  {
    icon: '💸',
    title: 'Wasted Ad Spend',
    body: "You're paying for clicks that don't convert, because the creative isn't doing its job. Fix the video, fix the funnel.",
  },
];

export default function PainSection() {
  return (
    <section className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[1040px]">
        <Reveal className="mb-12 text-center">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-1.2px]">
            Why your listing isn&apos;t
            <br />
            <span className="text-green-600">converting yet.</span>
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
