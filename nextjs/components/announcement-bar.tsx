export default function AnnouncementBar() {
  return (
    <div className="glass-strip relative z-[210] flex items-center justify-center gap-2 px-4 py-2 text-center text-[12px] font-medium text-white">
      <span className="h-[6px] w-[6px] flex-shrink-0 animate-pulse rounded-full bg-[#7c3aed]" />
      <span>
        Now booking motion design projects for <strong className="font-bold text-[#c084fc]">this month</strong> —
        limited slots.
      </span>
    </div>
  );
}
