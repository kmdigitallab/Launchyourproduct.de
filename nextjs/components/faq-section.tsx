'use client';

import { useState } from 'react';
import Reveal from './reveal';
import SectionLabel from './section-label';

const FAQS = [
  {
    q: 'What does a motion design video do for my Amazon listing?',
    a: 'Listings with videos have up to <strong>3x higher conversion rates</strong>. Our motion design videos are delivered fast, no camera shoot needed, optimized for Amazon Sponsored Brands – that\'s the difference between a click and a purchase.',
  },
  {
    q: 'Why AI – will quality suffer?',
    a: 'AI is our accelerator, not our replacement. <strong>Every result is curated, refined and finalized by us.</strong> The difference: we need days, not months. And you get the same result at a fraction of the cost.',
  },
  {
    q: 'I don\'t sell on Amazon – can you still help?',
    a: 'Yes. We produce the same style of motion design videos for <strong>Shopify product pages, Kickstarter campaigns, and TikTok/Instagram ads</strong> – not just Amazon listings.',
  },
  {
    q: 'Can I get more than one video?',
    a: 'Yes. Many sellers order a <strong>set of videos</strong> – different hooks, different platforms, different angles – instead of relying on a single creative.',
  },
  {
    q: 'How much time do I need to invest?',
    a: '<strong>Very little.</strong> You give us your inputs – we handle production. Expect 2–3 hours per week for feedback and alignment. We do the rest.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-[88px] md:px-12">
      <div className="mx-auto max-w-[1040px]">
        <Reveal className="mb-12 text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.1] tracking-[-0.5px]">
            Your questions.
            <br />
            <span className="text-green-600">Answered directly.</span>
          </h2>
        </Reveal>

        <Reveal className="mx-auto flex max-w-[740px] flex-col">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-black/[0.08]">
                <div
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex cursor-pointer items-center justify-between gap-3.5 py-5 text-[15px] font-medium tracking-[-.2px] transition-colors hover:text-green-500"
                >
                  <span>{f.q}</span>
                  <span
                    className={`flex-shrink-0 text-[17px] text-[#8aaa96] transition-transform ${
                      isOpen ? 'rotate-45 text-green-600' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '220px' : '0' }}
                >
                  <div
                    className="pb-[18px] text-sm font-light leading-[1.8] text-[#4b6358] [&_strong]:font-semibold [&_strong]:text-[#0d1f12]"
                    dangerouslySetInnerHTML={{ __html: f.a }}
                  />
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
