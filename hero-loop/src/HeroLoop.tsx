import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from 'remotion';

// Ambient hero background loop — glow-flyline-moves (A: glow-orb-ambient + B: flyline-arc),
// purple-only palette, continuously looping (no freeze — this runs forever as a bg video).
// All motion is deterministic (seeded sine phases), no Math.random()/Date.now().
// Loop length must be an exact common multiple of every period used below.

const DEEP = '124,58,237'; // #7c3aed
const MID = '168,85,247'; // #a855f7
const LIGHT = '192,132,252'; // #c084fc

const h = (n: number) => {
  const s = Math.sin(n * 127.3) * 43758.5453;
  return s - Math.floor(s);
};

const TAU = Math.PI * 2;

type Orb = {
  size: number;
  peak: number;
  color: string;
  bx: number;
  by: number;
  p1: number;
  p2: number;
  ax1: number;
  ax2: number;
  ay1: number;
  ay2: number;
  seed: number;
};

// Periods (p1/p2) all divide 240 -> guarantees a perfectly seamless loop at durationInFrames=240.
const ORBS: Orb[] = [
  { size: 720, peak: 0.34, color: DEEP, bx: 620, by: 380, p1: 120, p2: 80, ax1: 170, ax2: 115, ay1: 160, ay2: 120, seed: 1 },
  { size: 600, peak: 0.24, color: MID, bx: 1340, by: 580, p1: 60, p2: 48, ax1: 160, ax2: 120, ay1: 150, ay2: 105, seed: 2 },
  { size: 520, peak: 0.2, color: LIGHT, bx: 960, by: 820, p1: 80, p2: 40, ax1: 140, ax2: 110, ay1: 130, ay2: 100, seed: 3 },
];

const orbPos = (o: Orb, t: number) => {
  const f1 = h(o.seed * 7 + 1) * TAU;
  const f2 = h(o.seed * 7 + 2) * TAU;
  const f3 = h(o.seed * 7 + 3) * TAU;
  const f4 = h(o.seed * 7 + 4) * TAU;
  const x = o.bx + o.ax1 * Math.sin((TAU * t) / o.p1 + f1) + o.ax2 * Math.sin((TAU * t) / o.p2 + f2);
  const y = o.by + o.ay1 * Math.sin((TAU * t) / o.p2 + f3) + o.ay2 * Math.sin((TAU * t) / o.p1 + f4);
  return { x, y };
};

// Flyline between orb0 and orb1 anchors, pulsing every FLY_PERIOD frames (must divide durationInFrames).
const FLY_PERIOD = 80;
const FLY_GROW = 22;
const FLY_HOLD = 14;
const FLY_FADE = 20;

export const HeroLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();

  const positions = ORBS.map((o) => orbPos(o, frame));

  // Streak lines "boiling" — redraw offset every 3 frames (line-boil), period divides 240.
  const boilStep = Math.floor(frame / 3);
  const boilOffset = (seed: number) => (h(boilStep + seed) - 0.5) * 6;

  // Flyline cycle-local time.
  const cycleF = frame % FLY_PERIOD;
  const start = positions[0];
  const end = positions[1];
  const grow = interpolate(cycleF, [0, FLY_GROW], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fade = interpolate(
    cycleF,
    [FLY_GROW + FLY_HOLD, FLY_GROW + FLY_HOLD + FLY_FADE],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );
  const flyAlive = cycleF < FLY_GROW + FLY_HOLD + FLY_FADE;
  const flyOpacity = grow * fade;

  const midX = (start.x + end.x) / 2 + (start.y - end.y) * 0.12;
  const midY = (start.y + end.y) / 2 + (end.x - start.x) * 0.12;
  const headT = Math.min(cycleF / FLY_GROW, 1);
  const headX = (1 - headT) ** 2 * start.x + 2 * (1 - headT) * headT * midX + headT ** 2 * end.x;
  const headY = (1 - headT) ** 2 * start.y + 2 * (1 - headT) * headT * midY + headT ** 2 * end.y;

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Glow orbs — ambient base noise, purple only */}
      {ORBS.map((o, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: positions[i].x - o.size / 2,
            top: positions[i].y - o.size / 2,
            width: o.size,
            height: o.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(${o.color},${o.peak}) 0%, rgba(${o.color},${o.peak * 0.5}) 42%, rgba(${o.color},0) 70%)`,
            filter: 'blur(90px)',
          }}
        />
      ))}

      {/* Streak lines, slightly boiling so the frame never sits dead-still */}
      <AbsoluteFill style={{ overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            left: `${-10 + boilOffset(11) * 0.3}%`,
            top: `${28 + boilOffset(12) * 0.15}%`,
            height: 2,
            width: '55%',
            transform: `rotate(${-6 + boilOffset(13) * 0.2}deg)`,
            background: `linear-gradient(90deg, transparent, rgba(${DEEP},0.4), transparent)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${-10 + boilOffset(21) * 0.3}%`,
            top: `${33 + boilOffset(22) * 0.15}%`,
            height: 2,
            width: '42%',
            transform: `rotate(${-6 + boilOffset(23) * 0.2}deg)`,
            background: `linear-gradient(90deg, transparent, rgba(${LIGHT},0.25), transparent)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: `${-10 + boilOffset(31) * 0.3}%`,
            top: `${62 + boilOffset(32) * 0.15}%`,
            height: 2,
            width: '50%',
            transform: `rotate(${5 + boilOffset(33) * 0.2}deg)`,
            background: `linear-gradient(270deg, transparent, rgba(${DEEP},0.3), transparent)`,
          }}
        />
      </AbsoluteFill>

      {/* Flyline arc pulsing between two orbs — data-flow accent, purple only */}
      {flyAlive && (
        <svg
          width={width}
          height={height}
          style={{ position: 'absolute', inset: 0 }}
        >
          <path
            d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
            fill="none"
            stroke={`rgba(${LIGHT},${flyOpacity})`}
            strokeWidth={2.5}
            strokeDasharray="1 0"
            pathLength={1}
            strokeDashoffset={1 - grow}
            style={{ filter: `drop-shadow(0 0 6px rgba(${LIGHT},${flyOpacity * 0.8}))` }}
          />
          {grow < 1 && (
            <circle
              cx={headX}
              cy={headY}
              r={5}
              fill={`rgba(${LIGHT},${flyOpacity})`}
              style={{ filter: `drop-shadow(0 0 8px rgba(${LIGHT},0.9))` }}
            />
          )}
        </svg>
      )}

      {/* Static ambient vignette to match the page's overall glow bed */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 40%, rgba(${DEEP},0.15) 0%, transparent 60%)`,
        }}
      />
    </AbsoluteFill>
  );
};
