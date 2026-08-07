'use client';

import { useId, type ReactNode } from 'react';

interface LiquidGlassButtonProps {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  /** Show the 3D chrome orb on the left */
  orb?: boolean;
  /** 'md' matches the hero/footer CTAs, 'sm' matches the nav bar */
  size?: 'sm' | 'md';
  onClick?: () => void;
  className?: string;
}

/**
 * Liquid-glass CTA — translucent refracting pill with a chromatic rainbow edge
 * and a 3D glass orb, tuned to the site's violet palette.
 */
export default function LiquidGlassButton({
  href,
  children,
  target,
  rel,
  orb = true,
  size = 'md',
  onClick,
  className,
}: LiquidGlassButtonProps) {
  // Several of these can live on one page — a shared gradient id would break
  // whichever instance renders after a display:none one.
  const gradientId = `lgSpark-${useId().replace(/:/g, '')}`;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`lg-btn${size === 'sm' ? ' lg-btn--sm' : ''}${className ? ` ${className}` : ''}`}
    >
      {/* chromatic rim — sits under the glass, bleeds a faint rainbow at the edges */}
      <span aria-hidden className="lg-rim" />
      {/* specular sheen that sweeps across on hover */}
      <span aria-hidden className="lg-sheen" />

      <span className="lg-inner">
        {orb && (
          <span aria-hidden className="lg-orb">
            <svg viewBox="0 0 24 24" className="lg-orb-spark">
              <path
                d="M12 2.6l1.9 5.6a4 4 0 002.5 2.5l5.6 1.9-5.6 1.9a4 4 0 00-2.5 2.5L12 22.7l-1.9-5.7a4 4 0 00-2.5-2.5L2 12.6l5.6-1.9a4 4 0 002.5-2.5L12 2.6z"
                fill={`url(#${gradientId})`}
              />
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f5e9ff" />
                  <stop offset="45%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        )}
        <span className="lg-label">{children}</span>
      </span>
    </a>
  );
}
