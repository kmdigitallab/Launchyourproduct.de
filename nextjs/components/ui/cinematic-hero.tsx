'use client';

import { useEffect, useRef } from 'react';
import LiquidGlassButton from '@/components/liquid-glass-button';

interface CinematicHeroProps {
  eyebrow?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/** Cue sheet, in ms from mount. Nothing arrives at the same moment. */
const CUE = {
  layersIn: 500, // planes surface out of black, far apart
  layersInDur: 1400,
  assemble: 2000, // they converge into a single frame
  assembleDur: 1500,
  eyebrow: 3300,
  l1: 3550,
  l2: 3800,
  l3: 4050,
  sub: 4500,
  cta: 4800,
};
const RUNTIME = CUE.cta + 1100;

/**
 * Planes of a motion-design shot. zb/zs = resting depth and how far they drift
 * apart; o0/o1 = opacity while spread vs. assembled. The abstract scaffolding
 * (subject, type) dissolves on assembly so the finished ad is what remains.
 */
const PLANES = [
  { key: 'plate', zb: -60, zs: -190, ss: 0.1, o0: 0.22, o1: 1 },
  { key: 'subject', zb: 10, zs: -40, ss: 0.04, o0: 0.95, o1: 0 },
  { key: 'type', zb: 46, zs: 150, ss: 0.07, o0: 0.9, o1: 0 },
  { key: 'glass', zb: 78, zs: 300, ss: 0.13, o0: 0.5, o1: 0.5 },
] as const;

const SHAFTS = [
  { a: '-14deg', left: '6%', width: '20%', tint: 'rgba(167,139,250,0.16)', delay: '0s' },
  { a: '9deg', left: '44%', width: '26%', tint: 'rgba(216,180,254,0.13)', delay: '-6s' },
  { a: '-6deg', left: '76%', width: '18%', tint: 'rgba(124,58,237,0.16)', delay: '-12s' },
];

export default function CinematicHero({
  eyebrow = 'Motion design for commerce',
  line1 = 'We turn your product into',
  line2 = 'a buying',
  line3 = 'decision.',
  subtitle = 'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter — delivered fast. No camera crew, no studio.',
  primaryCta = {
    label: 'Get in touch →',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@launchyourproduct.de',
  },
  secondaryCta = { label: 'View Portfolio', href: '#portfolio' },
}: CinematicHeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // A visitor who already watched the intro this session gets the end state.
    const seen = sessionStorage.getItem('chero-seen') === '1';
    const skipIntro = seen || reduced;
    if (!skipIntro) {
      root.style.setProperty('--asm', '0');
      root.style.setProperty('--vis', '0');
    }

    // Hold the reel until the planes have converged, so the reveal lands on
    // motion rather than on a clip already halfway through.
    const video = videoRef.current;
    const startVideo = () => {
      video?.play().catch(() => {
        /* autoplay refused (some power-saving modes) — the poster stands in */
      });
    };
    const videoTimer = window.setTimeout(startVideo, skipIntro ? 0 : CUE.assemble + 400);

    const ctx = canvas.getContext('2d');
    let dpr = 1;
    let w = 0;
    let h = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = root.clientWidth;
      h = root.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Depth-sorted dust. z drives size, speed and alpha, so parallax reads as depth.
    const COUNT = w < 720 ? 34 : 64;
    const dust = Array.from({ length: COUNT }, () => {
      const z = Math.random();
      return {
        x: Math.random(),
        y: Math.random(),
        z,
        r: 0.5 + z * 1.7,
        vx: (Math.random() - 0.5) * 0.00007 * (0.3 + z),
        vy: -(0.00004 + Math.random() * 0.00009) * (0.3 + z),
        tw: Math.random() * Math.PI * 2,
      };
    });

    // pointer, lerped so the light trails rather than snaps
    let px = 0.5;
    let py = 0.5;
    let lx = 0.5;
    let ly = 0.5;
    let pointing = false;

    const onPointer = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width;
      py = (e.clientY - r.top) / r.height;
      if (!pointing) {
        pointing = true;
        root.classList.add('is-pointing');
      }
    };
    const onLeave = () => {
      pointing = false;
      root.classList.remove('is-pointing');
      px = 0.5;
      py = 0.5;
    };

    let scrollP = 0;
    const onScroll = () => {
      scrollP = Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight)));
    };
    onScroll();

    const t0 = performance.now();
    let raf = 0;
    let running = true;
    let introDone = skipIntro;

    // ease-out quint — the slow settle that makes the assembly feel weighted
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 5);
    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

    const frame = (now: number) => {
      if (!running) return;
      const t = now - t0;

      // ── stage ────────────────────────────────────────────────────────
      let asm = 1;
      let vis = 1;
      if (!skipIntro) {
        vis = clamp01((t - CUE.layersIn) / CUE.layersInDur);
        asm = easeOut(clamp01((t - CUE.assemble) / CUE.assembleDur));
      }

      lx += (px - lx) * 0.055;
      ly += (py - ly) * 0.055;

      // idle drift keeps the frame alive once assembled; cursor adds parallax
      const idle = reduced ? 0 : Math.sin(t / 4200);
      const ry = (lx - 0.5) * 26 + idle * 5 + scrollP * 10;
      const rx = (0.5 - ly) * 14 + Math.cos(t / 5200) * 2.5 - scrollP * 6;

      root.style.setProperty('--asm', asm.toFixed(4));
      root.style.setProperty('--vis', vis.toFixed(4));
      root.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
      root.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
      root.style.setProperty('--scroll', scrollP.toFixed(4));
      root.style.setProperty('--cx', `${(lx * w).toFixed(1)}px`);
      root.style.setProperty('--cy', `${(ly * h).toFixed(1)}px`);

      if (!introDone && t > RUNTIME) {
        introDone = true;
        sessionStorage.setItem('chero-seen', '1');
      }

      // ── particles ────────────────────────────────────────────────────
      if (ctx && !reduced) {
        ctx.clearRect(0, 0, w, h);
        const offX = (lx - 0.5) * 26;
        const offY = (ly - 0.5) * 18 + scrollP * 40;
        for (const p of dust) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -0.05) {
            p.y = 1.05;
            p.x = Math.random();
          }
          if (p.x < -0.05) p.x = 1.05;
          if (p.x > 1.05) p.x = -0.05;

          const tw = 0.55 + 0.45 * Math.sin(t / 1600 + p.tw);
          const a = (0.1 + p.z * 0.4) * tw * vis;
          const cx = p.x * w + offX * p.z;
          const cy = p.y * h + offY * p.z;

          ctx.beginPath();
          ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(214, 199, 255, ${a.toFixed(3)})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
        video?.pause();
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
        startVideo();
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    root.addEventListener('pointermove', onPointer);
    root.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(videoTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      root.removeEventListener('pointermove', onPointer);
      root.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <section id="hero" ref={rootRef} className="chero">
      {/* L1 — atmosphere */}
      <div className="chero-atmos" aria-hidden />

      {/* L2 — volumetric light */}
      <div className="chero-shafts" aria-hidden>
        {SHAFTS.map((s, i) => (
          <div
            key={i}
            className="chero-shaft"
            style={
              {
                left: s.left,
                width: s.width,
                animationDelay: s.delay,
                background: `linear-gradient(180deg, ${s.tint} 0%, transparent 78%)`,
                '--a': s.a,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* L3 — particles */}
      <canvas ref={canvasRef} className="chero-particles" aria-hidden />

      {/* L4 — the product: a shot assembling out of its own planes.
          L5 (the glow bed) lives inside the stage so it tracks the object. */}
      <div className="chero-stage" aria-hidden>
        <div className="chero-bed" />
        <div className="chero-frame">
          {PLANES.map((p) => (
            <div
              key={p.key}
              className={`chero-layer chero-${p.key}`}
              style={
                { '--zb': p.zb, '--zs': p.zs, '--ss': p.ss, '--o0': p.o0, '--o1': p.o1 } as React.CSSProperties
              }
            >
              {p.key === 'plate' && (
                <video
                  ref={videoRef}
                  className="chero-shot"
                  poster="/hero/poster.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  {/* WebM first: some Linux Chromium/Firefox builds ship without H.264 */}
                  <source src="/hero/prototyp.webm" type="video/webm" />
                  <source src="/hero/prototyp.mp4" type="video/mp4" />
                </video>
              )}
              {p.key === 'subject' && <div className="chero-subject-form" />}
              {p.key === 'type' && (
                <div className="flex h-full flex-col justify-end gap-[9px]">
                  <div className="chero-bar" style={{ width: '58%' }} />
                  <div className="chero-bar" style={{ width: '34%', opacity: 0.6 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* L7 — cursor light */}
      <div className="chero-cursor" aria-hidden />

      {/* L6 — copy */}
      <div className="chero-copy">
        <div className="chero-eyebrow chero-rise" style={{ animationDelay: `${CUE.eyebrow}ms` }}>
          {eyebrow}
        </div>

        <h1 className="chero-h1">
          <span className="chero-l1 chero-rise" style={{ animationDelay: `${CUE.l1}ms` }}>
            {line1}
          </span>
          {/* The reveal animates opacity/blur, so it has to sit on a wrapper:
              sharing an element with a clipped background fill produces the
              box-shaped artefact instead of a glyph-shaped one. */}
          <span className="chero-l2 chero-rise" style={{ animationDelay: `${CUE.l2}ms` }}>
            <span className="metal-text">{line2}</span>
          </span>
          <span className="chero-l3 chero-rise" style={{ animationDelay: `${CUE.l3}ms` }}>
            <span className="lit-text">{line3}</span>
          </span>
        </h1>

        <p className="chero-sub chero-rise" style={{ animationDelay: `${CUE.sub}ms` }}>
          {subtitle}
        </p>

        <div className="chero-cta chero-rise" style={{ animationDelay: `${CUE.cta}ms` }}>
          <LiquidGlassButton href={primaryCta.href} target="_blank" rel="noreferrer">
            {primaryCta.label}
          </LiquidGlassButton>
          <a href={secondaryCta.href} className="glass-ghost px-6 py-3.5 text-sm font-medium text-white/80 hover:text-[#c084fc]">
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
