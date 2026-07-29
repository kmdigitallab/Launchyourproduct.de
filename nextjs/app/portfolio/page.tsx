import type { Metadata } from 'next';
import Reveal from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Portfolio – LaunchYourProduct',
};

const VIDEOS = [
  {
    num: 'Project 01',
    title: ['Motion Design Ad –', 'Premium Mattress'],
    desc: 'Motion design product video for a premium mattress brand – high-performing ad creative for e-commerce.',
    vimeoId: '1213564603',
    tags: ['Motion Design', 'Amazon', 'Shopify', 'Kickstarter'],
  },
  {
    num: 'Project 02',
    title: ['Motion Design Ad –', 'Tropical Fruit Ice'],
    desc: 'Vibrant motion design product video for a tropical fruit ice brand – scroll-stopping creative for Amazon & social.',
    vimeoId: '1213563562',
    tags: ['Motion Design', 'Amazon', 'Food & Beverage'],
  },
  {
    num: 'Project 03',
    title: ['Motion Design Ad –', 'Stainless Steel Water Bottle'],
    desc: 'High-quality motion design product video for a stainless steel water bottle – clean, clear, conversion-focused.',
    vimeoId: '1213564068',
    tags: ['Motion Design', 'Amazon', 'E-Commerce'],
  },
  {
    num: 'Project 04',
    title: ['Motion Design Ad –', 'Gaming Keyboard'],
    desc: 'Motion design ad creative for a gaming keyboard brand – scroll-stopping and high-performing on TikTok & more.',
    vimeoId: '1213564029',
    tags: ['Motion Design', 'Ad Creative', 'TikTok', 'E-Commerce'],
  },
  {
    num: 'Project 05',
    title: ['Sponsored Brands Ad –', 'Beauty Serum'],
    desc: 'High-quality Sponsored Brands video ad for an Amazon beauty serum. ACoS -28% after 4 weeks.',
    vimeoId: '1213563594',
    tags: ['Amazon Ads', 'Beauty', 'Sponsored Brands'],
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f9f7] text-[#0d1f12]">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <span className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,.10),transparent_70%)] opacity-60 blur-[100px]" />
        <span className="absolute -bottom-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,.06),transparent_70%)] opacity-60 blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-[200] flex h-[60px] items-center justify-between border-b border-black/[0.08] bg-[#f7f9f7]/[0.92] px-6 backdrop-blur-2xl backdrop-saturate-150 md:px-12">
        <a href="/" className="no-underline">
          <div className="text-[17px] font-extrabold tracking-[-.5px] text-green-600 [text-shadow:0_0_12px_rgba(22,163,74,0.25)]">
            LaunchYourProduct
          </div>
        </a>
        <div className="flex items-center gap-2">
          <a href="/" className="rounded-lg px-3 py-1.5 text-[13px] text-[#4b6358] transition-colors hover:bg-black/5 hover:text-[#0d1f12]">
            ← Back to Website
          </a>
          <a
            href="/#cta"
            className="rounded-lg bg-green-600 px-[18px] py-2 text-[13px] font-semibold text-white shadow-[0_4px_14px_rgba(22,163,74,0.3)] transition-all hover:-translate-y-px hover:bg-green-700 hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)]"
          >
            Free Audit →
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="relative z-[1] px-6 pb-[60px] pt-[130px] text-center md:px-12">
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-green-600/20 bg-green-600/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-green-600">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-600" /> Our Work
        </div>
        <h1 className="mb-4 text-[clamp(36px,5vw,64px)] font-black leading-[1.05] tracking-[-2.5px]">
          Our <span className="text-green-600">best projects</span>
          <br />
          for you.
        </h1>
        <p className="mx-auto max-w-[480px] text-[17px] font-light leading-[1.7] text-[#4b6358]">
          Real motion design videos for real products – scroll through our work.
        </p>
      </div>

      <div className="relative z-[1] mx-auto my-12 h-0.5 w-[60px] bg-gradient-to-r from-transparent via-green-600 to-transparent" />

      {/* Videos */}
      <div className="relative z-[1] mx-auto max-w-[860px] px-6 pb-[120px] md:px-6">
        {VIDEOS.map((v) => (
          <Reveal key={v.num} className="mb-20">
            <div className="mb-6 text-center">
              <div className="mb-2.5 inline-block border-l-2 border-green-600/30 pl-2.5 text-[10px] font-bold uppercase tracking-[2px] text-green-600">
                {v.num}
              </div>
              <h2 className="mb-2.5 text-[clamp(22px,3vw,34px)] font-extrabold leading-[1.1] tracking-[-1px]">
                {v.title[0]}
                <br />
                <span className="text-green-600">{v.title[1]}</span>
              </h2>
              <p className="mx-auto max-w-[560px] text-sm font-light text-[#4b6358]">{v.desc}</p>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
              <iframe
                src={`https://player.vimeo.com/video/${v.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
              />
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {v.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-green-600/[0.22] bg-green-600/[0.08] px-2.5 py-1 text-[11px] font-semibold tracking-[.5px] text-green-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-[1] px-6 pb-[100px] text-center md:px-6">
        <div className="mx-auto max-w-[600px] rounded-[20px] border border-green-600/20 bg-gradient-to-br from-green-600/[0.06] to-green-600/[0.02] px-6 py-14 md:px-10">
          <h2 className="mb-3.5 text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-1px]">
            Your project is
            <br />
            <span className="text-green-600">next.</span>
          </h2>
          <p className="mb-7 text-[15px] font-light leading-[1.7] text-[#4b6358]">
            Book a free 30-minute audit and we&apos;ll show you what we can build for you.
          </p>
          <a
            href="/#cta"
            className="inline-block rounded-[10px] bg-green-600 px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(22,163,74,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(22,163,74,0.5)]"
          >
            Book your free audit →
          </a>
        </div>
      </div>
    </div>
  );
}
