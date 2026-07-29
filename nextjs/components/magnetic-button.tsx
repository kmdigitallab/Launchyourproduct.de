'use client';

import { useRef, type ReactNode } from 'react';

interface MagneticButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

/** Subtle magnetic hover — button drifts toward the cursor within its bounds. */
export default function MagneticButton({ href, className, children, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.2s ease, translate 0.15s ease' }}
    >
      {children}
    </a>
  );
}
