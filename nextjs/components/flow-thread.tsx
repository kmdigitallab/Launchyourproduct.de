'use client';

import { useEffect, useRef } from 'react';

/** The green thread line that winds through the content and draws itself in on scroll. */
export default function FlowThread({ contentRef }: { contentRef: React.RefObject<HTMLDivElement> }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const gradRef = useRef<SVGLinearGradientElement>(null);
  const lenRef = useRef(0);

  useEffect(() => {
    const content = contentRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const grad = gradRef.current;
    if (!content || !svg || !path || !grad) return;

    function build() {
      const w = content!.offsetWidth;
      const h = content!.offsetHeight;
      svg!.setAttribute('viewBox', `0 0 ${w} ${h}`);

      const heroEl = document.getElementById('hero');
      const heroH = heroEl ? heroEl.offsetHeight : 0;
      const cx = w * 0.5;
      const amp = w * 0.11;
      const periods = 3.2;
      const steps = 320;
      const phase = Math.PI / 6;
      let d = '';
      for (let i = 0; i <= steps; i++) {
        const y = heroH + (h - heroH) * (i / steps);
        const x = cx + amp * Math.sin((i / steps) * periods * Math.PI * 2 + phase);
        d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
      }
      path!.setAttribute('d', d.trim());

      grad!.setAttribute('y2', String(h));
      const HI = 0.85;
      const LO = 0.06;
      const feather = 100;
      const cTop = content!.getBoundingClientRect().top + window.scrollY;
      const blocks = [...content!.querySelectorAll('.hero-inner-marker, section, .ticker-marker')]
        .map((el) => {
          const r = el.getBoundingClientRect();
          const t = r.top + window.scrollY - cTop;
          return [t, t + r.height] as [number, number];
        })
        .sort((a, b) => a[0] - b[0]);

      let stops: [number, number][] = [[0, HI]];
      blocks.forEach(([t, b]) => {
        stops.push([(t - feather) / h, HI], [(t + feather) / h, LO], [(b - feather) / h, LO], [(b + feather) / h, HI]);
      });
      stops.push([1, HI]);
      stops = stops
        .map(([o, a]) => [Math.max(0, Math.min(1, o)), a] as [number, number])
        .sort((x, y) => x[0] - y[0]);

      grad!.innerHTML = stops
        .map(([o, a]) => `<stop offset="${(o * 100).toFixed(2)}%" stop-color="#c4b5fd" stop-opacity="${a}"/>`)
        .join('');

      lenRef.current = path!.getTotalLength();
      path!.style.strokeDasharray = String(lenRef.current);
      draw();
    }

    function draw() {
      const h = content!.offsetHeight;
      const cTop = content!.getBoundingClientRect().top + window.scrollY;
      const head = window.scrollY + window.innerHeight * 0.55 - cTop;
      const prog = Math.max(0, Math.min(head / h, 1));
      path!.style.strokeDashoffset = (lenRef.current * (1 - prog)).toFixed(1);
    }

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          draw();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', build);
    // Build after layout settles
    const t = setTimeout(build, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', build);
      clearTimeout(t);
    };
  }, [contentRef]);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-visible"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient ref={gradRef} id="flowGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="0" />
      </defs>
      <path
        ref={pathRef}
        fill="none"
        stroke="url(#flowGrad)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: 'drop-shadow(0 0 6px rgba(196,181,253,.55)) drop-shadow(0 0 18px rgba(139,92,246,.4))',
        }}
      />
    </svg>
  );
}
