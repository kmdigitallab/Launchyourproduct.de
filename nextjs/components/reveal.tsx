'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[46px] opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
