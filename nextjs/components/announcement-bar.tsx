export default function AnnouncementBar() {
  return (
    <div className="relative z-[210] flex items-center justify-center gap-2 bg-[#0d1f12] px-4 py-2 text-center text-[12px] font-medium text-white">
      <span className="h-[6px] w-[6px] flex-shrink-0 animate-pulse rounded-full bg-green-400" />
      <span>
        Now booking motion design projects for <strong className="font-bold text-green-400">this month</strong> —
        limited slots.
      </span>
    </div>
  );
}
