export default function CinematicFooter() {
  return (
    <footer className="fixed bottom-0 left-0 z-0 flex h-[460px] w-full flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#0b0f0d] to-[#050706] px-6 pb-[26px] pt-[60px] md:h-[460px] md:px-12">
      <div className="pointer-events-none absolute left-1/2 top-[-45%] h-[560px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(22,163,74,0.13),transparent_70%)]" />

      <div className="relative z-[2] flex w-full max-w-[1240px] flex-wrap justify-between gap-10">
        <div className="max-w-[340px]">
          <div className="mb-4 flex items-center gap-2">
            <div className="text-[17px] font-extrabold tracking-[-.5px] text-green-400 [text-shadow:0_0_18px_rgba(74,222,128,0.55),0_0_36px_rgba(22,163,74,0.3)]">
              LaunchYourProduct
            </div>
          </div>
          <p className="text-sm font-light leading-[1.7] text-[#4b6358]">
            Scroll-stopping motion design videos for Amazon sellers – delivered fast, no camera crew needed.
          </p>
          <a
            href="#cta"
            className="mt-[22px] inline-block rounded-[10px] bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(22,163,74,0.35)]"
          >
            Free Audit →
          </a>
        </div>

        <div className="flex flex-wrap gap-14">
          <div>
            <h5 className="mb-3.5 text-[11px] font-bold uppercase tracking-[1.5px] text-[#8aaa96]">Programs</h5>
            <a href="#programs" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">Monetise</a>
            <a href="#programs" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">UpLevel</a>
            <a href="#programs" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">Motion Ads</a>
          </div>
          <div>
            <h5 className="mb-3.5 text-[11px] font-bold uppercase tracking-[1.5px] text-[#8aaa96]">Company</h5>
            <a href="#founders" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">About</a>
            <a href="/portfolio" className="mb-2.5 block text-sm font-bold text-green-400">→ Portfolio</a>
            <a href="#results" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">Results</a>
            <a href="#how" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">How it works</a>
          </div>
          <div>
            <h5 className="mb-3.5 text-[11px] font-bold uppercase tracking-[1.5px] text-[#8aaa96]">Legal</h5>
            <a href="/imprint" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">Imprint</a>
            <a href="/privacy-policy" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">Privacy Policy</a>
            <a href="/terms" className="mb-2.5 block text-sm text-[#4b6358] transition-colors hover:text-green-400">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      <div
        className="relative z-[1] select-none text-center font-black leading-[0.8] tracking-[-0.5px] text-green-400 opacity-90"
        style={{
          fontSize: 'clamp(32px,8vw,110px)',
          textShadow: '0 0 40px rgba(74,222,128,0.4), 0 0 80px rgba(22,163,74,0.2)',
        }}
      >
        LaunchYourProduct
      </div>

      <div className="relative z-[2] flex w-full max-w-[1240px] flex-wrap justify-between gap-3.5 border-t border-white/[0.06] pt-5">
        <p className="text-xs text-[#8aaa96]">© 2025 LaunchYourProduct.de – All rights reserved.</p>
        <div className="flex gap-[18px]">
          <a href="https://www.instagram.com/launchyourproduct.de" target="_blank" rel="noreferrer" className="text-xs text-[#8aaa96] transition-colors hover:text-[#0d1f12]">
            Instagram
          </a>
          <a href="mailto:info@launchyourproduct.de" className="text-xs text-[#8aaa96] transition-colors hover:text-[#0d1f12]">
            info@launchyourproduct.de
          </a>
        </div>
      </div>
    </footer>
  );
}
