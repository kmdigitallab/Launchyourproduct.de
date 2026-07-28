import { Globe } from '@/components/ui/globe';

// Card structure copied from the reference demo: padding creates the box
// height (not min-h/flex-stretch), which is what keeps the absolutely
// positioned Globe from stretching into a broken shape.
export function GlobeCard() {
  return (
    <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#07090a] px-10 pb-40 pt-8 shadow-xl md:pb-60">
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.35),rgba(255,255,255,0))]" />
    </div>
  );
}

export default GlobeCard;
