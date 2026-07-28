export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 inline-block border-l-2 border-green-600/30 pl-2.5 text-[10px] font-bold uppercase tracking-[2px] text-green-600">
      {children}
    </span>
  );
}
