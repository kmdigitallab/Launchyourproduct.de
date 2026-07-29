const TESTIMONIALS = [
  {
    text: 'Within 3 weeks I had a complete online course – <strong>including funnel and sales page</strong>. I never could have done that alone in that time.',
    name: 'Mia K.',
    role: 'Fitness Creator · 85K Followers',
    avatar: 'M',
    avatarBg: 'linear-gradient(135deg,#16a34a,#166534)',
    result: '↑ €12,400 in the first month',
  },
  {
    text: 'The motion design videos increased my <strong>Amazon click-through rate by 340%</strong>. My competitors are still wondering how.',
    name: 'Jonas R.',
    role: 'Amazon Seller · Home & Kitchen',
    avatar: 'J',
    avatarBg: 'linear-gradient(135deg,#1d4ed8,#1e3a8a)',
    result: '↑ CTR +340% in 6 weeks',
  },
  {
    text: 'I had tried building courses before – and quit. With LYP it was the first time someone <strong>truly took over the work</strong>.',
    name: 'Sarah L.',
    role: 'Business Coach · LinkedIn',
    avatar: 'S',
    avatarBg: 'linear-gradient(135deg,#7c3aed,#4c1d95)',
    result: '↑ First €5K launch',
  },
  {
    text: 'As an Amazon seller I thought great videos needed a camera crew. <strong>Within days I had 3 professional product videos</strong> – AI-produced, but you can&apos;t tell.',
    name: 'Thomas W.',
    role: 'Amazon Seller · Beauty',
    avatar: 'T',
    avatarBg: 'linear-gradient(135deg,#b45309,#78350f)',
    result: '↑ ACoS -28% after 4 weeks',
  },
  {
    text: 'Our social media agent runs fully automated. <strong>We post daily without lifting a finger</strong> – reach has grown by 180%.',
    name: 'Laura M.',
    role: 'E-Commerce Brand · Fashion',
    avatar: 'L',
    avatarBg: 'linear-gradient(135deg,#0891b2,#0e7490)',
    result: '↑ Reach +180% in 4 weeks',
  },
];

export default function TestimonialsCarousel() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="pb-0 pl-0 pr-0 pt-0">
      <div className="relative overflow-hidden pb-[88px] before:absolute before:bottom-[88px] before:left-0 before:top-0 before:z-[2] before:w-[100px] before:bg-gradient-to-r before:from-[#f7f9f7] before:to-transparent before:content-[''] after:absolute after:bottom-[88px] after:right-0 after:top-0 after:z-[2] after:w-[100px] after:bg-gradient-to-l after:from-[#f7f9f7] after:to-transparent after:content-['']">
        <div className="testi-track flex w-max gap-3.5 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <div
              key={i}
              className="w-[340px] flex-shrink-0 rounded-xl border border-black/[0.08] bg-white/90 p-6 transition-all hover:border-black/[0.16] hover:shadow-[0_0_24px_rgba(22,163,74,0.06)]"
            >
              <div className="mb-3.5 tracking-[2px] text-green-600">★★★★★</div>
              <p
                className="mb-4 text-[15px] italic leading-[1.7] text-[#0d1f12] [&_strong]:font-bold [&_strong]:not-italic [&_strong]:text-green-500"
                dangerouslySetInnerHTML={{ __html: `"${t.text}"` }}
              />
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[13px] font-semibold">{t.name}</div>
                  <div className="text-[11px] text-[#8aaa96]">{t.role}</div>
                </div>
              </div>
              <span className="mt-3 inline-block rounded-full border border-green-600/20 bg-green-600/[0.08] px-2.5 py-[3px] text-[11px] font-bold tracking-[.5px] text-green-600">
                {t.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
