import Reveal from './reveal';
import { PORTFOLIO_VIDEOS } from '@/lib/portfolio-data';

export default function PortfolioGrid() {
  return (
    <div className="mx-auto max-w-[860px]">
      {PORTFOLIO_VIDEOS.map((v) => (
        <Reveal key={v.num} className="mb-20">
          <div className="mb-6 text-center">
            <div className="mb-2.5 inline-block border-l-2 border-violet-400/30 pl-2.5 text-[10px] font-bold uppercase tracking-[2px] text-violet-300">
              {v.num}
            </div>
            <h3 className="mb-2.5 text-[clamp(22px,3vw,34px)] font-extrabold leading-[1.1] tracking-normal text-white">
              {v.title[0]}
              <br />
              <span className="text-violet-300">{v.title[1]}</span>
            </h3>
            <p className="mx-auto max-w-[560px] text-sm font-light text-white/55">{v.desc}</p>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <iframe
              src={`https://player.vimeo.com/video/${v.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              title={v.title.join(' ')}
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {v.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-violet-400/[0.25] bg-violet-400/[0.08] px-2.5 py-1 text-[11px] font-semibold tracking-[.5px] text-violet-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
