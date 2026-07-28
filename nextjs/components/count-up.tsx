'use client';

import { useEffect, useRef, useState } from 'react';

export default function CountUp({ target }: { target: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const raw = target.trim();
    const m = raw.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!m) {
      setText(raw);
      return;
    }
    const [, pre, numStr, suf] = m;
    const thousand = /\d\.\d{3}/.test(numStr);
    const decMatch = !thousand && numStr.includes(',') ? numStr.split(',')[1].length : 0;
    const num = parseFloat(numStr.replace(/\./g, '').replace(',', '.'));
    if (isNaN(num)) {
      setText(raw);
      return;
    }

    function fmt(v: number) {
      let s: string;
      if (thousand) s = Math.round(v).toLocaleString('de-DE');
      else if (decMatch > 0) s = v.toFixed(decMatch).replace('.', ',');
      else s = Math.round(v).toString();
      return pre + s + suf;
    }

    let animId: number;
    function run(reverse = false) {
      let start: number | null = null;
      const dur = 1500;
      function step(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setText(fmt(num * e));
        if (p < 1) animId = requestAnimationFrame(step);
      }
      animId = requestAnimationFrame(step);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
        else setText('0');
      },
      { threshold: 0.6 }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [target]);

  return <div ref={ref}>{text}</div>;
}
