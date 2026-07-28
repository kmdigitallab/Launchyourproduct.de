'use client';

import { useEffect, useRef, useState } from 'react';

const DATA = [4, 5, 4, 6, 8, 7, 10, 14, 20, 32, 52, 78, 110];

export default function RevenueChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('€0');
  const [growth, setGrowth] = useState('↑ 0%');
  const progRef = useRef(0);
  const runningRef = useRef(false);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = wrap!.clientWidth - 48;
      canvas!.width = w * dpr;
      canvas!.height = 130 * dpr;
      canvas!.style.width = w + 'px';
      canvas!.style.height = '130px';
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      return { w, h: 130 };
    }

    function draw(p: number) {
      const { w, h } = resize();
      ctx!.clearRect(0, 0, w, h);
      const n = Math.max(2, Math.floor(p * DATA.length));
      const d = DATA.slice(0, n);
      const mx = 120;
      const pad = { l: 6, r: 6, t: 10, b: 6 };
      const aw = w - pad.l - pad.r;
      const ah = h - pad.t - pad.b;
      const xS = aw / (DATA.length - 1);
      const pts = d.map((v, i) => ({ x: pad.l + i * xS, y: pad.t + ah * (1 - v / mx) }));
      if (pts.length < 2) return;

      ctx!.strokeStyle = 'rgba(0,0,0,0.06)';
      ctx!.lineWidth = 1;
      [0.25, 0.5, 0.75, 1].forEach((f) => {
        const y = pad.t + ah * (1 - f);
        ctx!.beginPath();
        ctx!.moveTo(pad.l, y);
        ctx!.lineTo(w - pad.r, y);
        ctx!.stroke();
      });

      const gr = ctx!.createLinearGradient(0, pad.t, 0, h);
      gr.addColorStop(0, 'rgba(22,163,74,0.3)');
      gr.addColorStop(1, 'rgba(22,163,74,0)');
      ctx!.beginPath();
      ctx!.moveTo(pts[0].x, pad.t + ah);
      pts.forEach((pt) => ctx!.lineTo(pt.x, pt.y));
      ctx!.lineTo(pts[pts.length - 1].x, pad.t + ah);
      ctx!.closePath();
      ctx!.fillStyle = gr;
      ctx!.fill();

      ctx!.beginPath();
      ctx!.moveTo(pts[0].x, pts[0].y);
      pts.forEach((pt) => ctx!.lineTo(pt.x, pt.y));
      ctx!.strokeStyle = '#16a34a';
      ctx!.lineWidth = 2.5;
      ctx!.lineJoin = 'round';
      ctx!.lineCap = 'round';
      ctx!.stroke();

      const L = pts[pts.length - 1];
      ctx!.beginPath();
      ctx!.arc(L.x, L.y, 5, 0, Math.PI * 2);
      ctx!.fillStyle = '#4ade80';
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(L.x, L.y, 10, 0, Math.PI * 2);
      ctx!.fillStyle = 'rgba(74,222,128,0.2)';
      ctx!.fill();

      const cv = d[d.length - 1];
      setValue('€' + Math.round(cv * 1818).toLocaleString('de-DE'));
      setGrowth('↑ ' + Math.round((cv / DATA[0] - 1) * 100) + '%');
    }

    function animate(ts: number) {
      if (!startRef.current) startRef.current = ts;
      progRef.current = Math.min((ts - startRef.current) / 2400, 1);
      const e = 1 - Math.pow(1 - progRef.current, 3);
      draw(e);
      if (progRef.current < 1) requestAnimationFrame(animate);
      else runningRef.current = false;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!runningRef.current) {
            runningRef.current = true;
            startRef.current = null;
            progRef.current = 0;
            requestAnimationFrame(animate);
          }
        } else {
          runningRef.current = false;
          startRef.current = null;
          progRef.current = 0;
          draw(0);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(canvas);

    const onResize = () => draw(1 - Math.pow(1 - progRef.current, 3));
    window.addEventListener('resize', onResize);

    return () => {
      io.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="rounded-xl border border-black/[0.08] bg-white/90 p-6 transition-all hover:border-black/[0.16] hover:shadow-[0_0_30px_rgba(22,163,74,0.08)]"
    >
      <div className="mb-[18px] flex items-start justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-[#8aaa96]">Monthly Revenue</div>
          <div className="mt-1 text-[26px] font-extrabold tracking-tight">{value}</div>
        </div>
        <div className="text-right">
          <div className="text-[13px] font-bold text-green-600">{growth}</div>
          <div className="mt-0.5 text-[11px] text-[#8aaa96]">after LYP launch</div>
        </div>
      </div>
      <canvas ref={canvasRef} height={130} className="block w-full" />
      <div className="mt-2 flex justify-between">
        <span className="text-[10px] text-[#8aaa96]">Before LYP</span>
        <span className="text-[10px] font-bold text-green-600">After LYP →</span>
      </div>
    </div>
  );
}
