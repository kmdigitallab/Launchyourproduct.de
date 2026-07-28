const ITEMS = [
  ['Motion Design', 'Scroll-Stopping Ads'],
  ['Amazon Sellers', 'UGC & Showcase Ads'],
  ['Sponsored Brands', 'Video Ads'],
  ['AI-Powered', 'Human-Curated'],
  ['No Camera Crew', 'No Studio'],
  ['Conversion-Ready', 'Ad Creatives'],
];

export default function Ticker() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-black/[0.06] bg-[#eef3ef] py-3.5">
      <div className="ticker-track flex w-max hover:[animation-play-state:paused]">
        {items.map(([strong, rest], i) => (
          <div key={i} className="flex items-center">
            <div className="flex items-center gap-2 whitespace-nowrap px-9 text-xs font-semibold tracking-[.3px] text-[#8aaa96]">
              <strong className="text-green-600">{strong}</strong> · {rest}
            </div>
            <div className="px-1 text-black/10">·</div>
          </div>
        ))}
      </div>
    </div>
  );
}
