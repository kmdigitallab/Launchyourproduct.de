import Nav from '@/components/nav';
import AnnouncementBar from '@/components/announcement-bar';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="fixed inset-x-0 top-0 z-[210]">
        <AnnouncementBar />
      </div>
      <Nav />
      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-[94px] text-center">
        <div className="mb-6 text-[11px] font-bold uppercase tracking-[1.2px] text-[#c084fc]">Error 404</div>
        <h1 className="mb-4 text-[clamp(32px,5vw,56px)] font-black leading-[1.05]">
          This page doesn&apos;t <span className="text-[#c084fc]">exist.</span>
        </h1>
        <p className="mb-9 max-w-[440px] text-[17px] font-light leading-[1.7] text-white/60">
          The page you&apos;re looking for was moved, renamed, or never existed. Let&apos;s get you back on track.
        </p>
        <a
          href="/"
          className="rounded-[10px] bg-[#7c3aed] px-8 py-3.5 text-[15px] font-bold text-black shadow-[0_4px_20px_rgba(167,139,250,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(167,139,250,0.5)]"
        >
          Back to homepage →
        </a>
      </main>
    </div>
  );
}
