const PARTNERS = [
  { icon: '🤖', name: 'Claude AI' },
  { icon: '🎬', name: 'Higgsfield' },
  { icon: '✨', name: 'ChatGPT' },
  { icon: '🎨', name: 'Canva' },
];

export default function TrustBar() {
  // Tripled so the -33.333% translate always has a full, identical set
  // waiting right behind the visible one — no gap, no visible restart.
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <div className="overflow-hidden border-y border-black/[0.07] bg-white py-5">
      <div className="mb-3.5 text-center text-[10px] font-bold uppercase tracking-[2px] text-[#8aaa96]">
        Our Technology Partners
      </div>
      <div className="trust-track flex w-max">
        {items.map((p, i) => (
          <div key={i} className="flex items-center px-6">
            <div className="flex items-center gap-2 rounded-lg border border-black/[0.08] bg-[#f4f7f5] px-4.5 py-2 transition-all hover:border-green-600/30 hover:bg-[#eaf2ec]">
              <span className="text-[15px]">{p.icon}</span>
              <span className="whitespace-nowrap text-[13px] font-bold text-[#4b6358]">{p.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
