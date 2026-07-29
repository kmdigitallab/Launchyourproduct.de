import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

// Seamless ambient background loop for the hero section.
// Pure black bg + drifting violet streak lines (matches illuminated-hero.tsx)
// + one soft spotlight cone sweeping left<->right, looped so frame 0 === frame(durationInFrames).
// No text is baked in — the real DOM hero title/subtitle sits on top on the live site.

const VIOLET_DEEP = '#7c3aed';
const VIOLET_LIGHT = '#c084fc';

export const HeroLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();

  // Single full sine period across the whole loop -> seamless (frame 0 === frame N).
  const t = (frame / durationInFrames) * Math.PI * 2;
  const sweepX = width * 0.5 + Math.sin(t) * width * 0.38;
  const sweepY = height * 0.42 + Math.sin(t * 2) * height * 0.06;

  // Gentle breathing glow, also one full period -> loops cleanly.
  const breathe = 0.75 + 0.25 * (0.5 + 0.5 * Math.sin(t));

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Streak lines — same geometry/colors as the live hero, subtly drifting */}
      <AbsoluteFill style={{ overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            left: `${-10 + 3 * Math.sin(t)}%`,
            top: '28%',
            height: 2,
            width: '55%',
            transform: 'rotate(-6deg)',
            background: `linear-gradient(90deg, transparent, ${VIOLET_DEEP}66, transparent)`,
            opacity: breathe,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${-10 + 2 * Math.sin(t + 1)}%`,
            top: '33%',
            height: 2,
            width: '42%',
            transform: 'rotate(-6deg)',
            background: `linear-gradient(90deg, transparent, ${VIOLET_LIGHT}40, transparent)`,
            opacity: breathe,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: `${-10 + 3 * Math.sin(t + 2)}%`,
            top: '62%',
            height: 2,
            width: '50%',
            transform: 'rotate(5deg)',
            background: `linear-gradient(270deg, transparent, ${VIOLET_DEEP}4d, transparent)`,
            opacity: breathe,
          }}
        />
      </AbsoluteFill>

      {/* Soft spotlight cone sweeping across, seamless single-period sine */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle 700px at ${sweepX}px ${sweepY}px, ${VIOLET_LIGHT}55 0%, ${VIOLET_DEEP}30 40%, transparent 75%)`,
        }}
      />

      {/* Static ambient vignette to match the page's overall glow bed */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${VIOLET_DEEP}22 0%, transparent 60%)`,
        }}
      />
    </AbsoluteFill>
  );
};
