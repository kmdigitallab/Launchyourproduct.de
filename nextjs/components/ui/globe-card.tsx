import { Globe } from '@/components/ui/globe';

// Card structure copied from the reference demo: padding creates the box
// height (not min-h/flex-stretch), which is what keeps the absolutely
// positioned Globe from stretching into a broken shape.
//
// The reference demo also has a text-8xl "Globe" watermark sitting in
// normal flow, which is what actually gives that card enough height to
// reveal a good chunk of the sphere. We don't want that placeholder text,
// so a fixed min-height stands in for it instead — without it the card
// collapses too short and overflow-hidden clips almost the whole globe,
// leaving only a flat, over-zoomed sliver with no visible dot texture.
export function GlobeCard() {
  return (
    <div className="relative flex min-h-[420px] w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#07090a] px-10 pb-40 pt-8 shadow-xl md:pb-60">
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.35),rgba(255,255,255,0))]" />
    </div>
  );
}

export default GlobeCard;
