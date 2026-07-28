'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
// Import directly from these submodules (not the "@react-three/drei" barrel) —
// the barrel re-exports Trail/useEnvironment which pull in meshline and
// @monogrid/gainmap-js, both of which import WebGL-only symbols (UniformsLib,
// WebGLRenderer) that don't exist in the three/webgpu build this component needs.
import { useAspect } from '@react-three/drei/core/useAspect';
import { useTexture } from '@react-three/drei/core/Texture';
import { useMemo, useRef, useState, useEffect, Suspense, Component } from 'react';
import type { ReactNode } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';

import {
  abs,
  screen as blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add,
} from 'three/tsl';

// Product image + depth map — swap these for your own product photo + greyscale depth map.
// Defaults point at the original demo assets so the effect works out of the box.
const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

extend(THREE as any);

// ── Post Processing: green scan line + bloom ──────────────────────────
const PostProcessing = ({
  strength = 1,
  threshold = 1,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));

    // Green overlay (was red in the original demo)
    const greenOverlay = vec3(0, 1, 0).mul(oneMinus(scanLine)).mul(0.4);

    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, greenOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    const final = withScanEffect.add(bloomPass);
    postProcessing.outputNode = final;
    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    progressRef.current.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    render.renderAsync();
  }, 1);

  return null;
};

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) setVisible(true);
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;
    const tDepthMap = texture(depthMap);
    const tMap = texture(rawMap, uv().add(tDepthMap.r.mul(uPointer).mul(strength)));

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const depth = tDepthMap;
    const flow = oneMinus(smoothstep(0, 0.02, abs(depth.sub(uProgress))));

    // Green dot-matrix mask (was vec3(10,0,0) red in the original demo)
    const mask = dot.mul(flow).mul(vec3(0, 10, 0));

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 0,
    });

    return { material, uniforms: { uPointer, uProgress } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    if (meshRef.current && 'material' in meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as any;
      if ('opacity' in mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 1 : 0, 0.07);
      }
    }
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  const scaleFactor = 0.4;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

// ── Error boundary ────────────────────────────────────────────────────
// If the product texture / depth map fails to load (dead link, offline,
// blocked host), this stops the failure from taking down the whole hero —
// title, CTAs and tags stay up, only the visual effect is dropped.
class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.warn('Hero canvas effect failed to load, falling back to CSS background:', error);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// ── WebGPU capability check ─────────────────────────────────────────
function useWebGPUSupport() {
  const [supported, setSupported] = useState<boolean | null>(null);
  useEffect(() => {
    setSupported(typeof navigator !== 'undefined' && !!(navigator as any).gpu);
  }, []);
  return supported;
}

interface HeroFuturisticProps {
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tags?: string[];
}

export const HeroFuturistic = ({
  badge = 'Motion Design Videos for Amazon Sellers',
  titleLine1 = 'We create your',
  titleLine2 = 'product video.',
  subtitle = 'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter – delivered in 48h. No camera crew, no studio.',
  primaryCta = { label: 'Get your free audit →', href: '#cta' },
  secondaryCta = { label: 'View Portfolio', href: '/portfolio' },
  tags = ['Amazon', 'Shopify', 'Kickstarter', 'TikTok'],
}: HeroFuturisticProps) => {
  const webgpu = useWebGPUSupport();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#07090a] px-6 py-24 text-center md:px-12"
    >
      {/* CSS fallback glow (always present, canvas draws over it) */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,rgba(22,163,74,0.12)_0%,transparent_65%)]" />

      {webgpu && (
        <CanvasErrorBoundary>
          <Canvas
            className="absolute inset-0 z-[1]"
            flat
            // @react-three/fiber supports an async gl factory at runtime (required
            // for WebGPURenderer's async init), but the v8 type defs predate that.
            {...({
              gl: async (props: unknown) => {
                const renderer = new THREE.WebGPURenderer(props as any);
                await renderer.init();
                return renderer;
              },
            } as any)}
          >
            <Suspense fallback={null}>
              <PostProcessing fullScreenEffect />
              <Scene />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      )}

      {/* Veil for text legibility */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(7,9,10,0.35)_0%,rgba(7,9,10,0.72)_100%)]" />

      <div className="relative z-[3] mx-auto flex w-full max-w-[760px] flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-green-600/35 bg-green-600/[0.14] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-green-400">
          <span className="badge-dot h-[5px] w-[5px] rounded-full bg-green-400" />
          {badge}
        </div>

        <h1 className="mb-5 text-[clamp(38px,5.5vw,72px)] font-black leading-[1.03] tracking-[-3px] text-[#f0f6f1]">
          {titleLine1}
          <br />
          <span className="text-green-400 [text-shadow:0_0_40px_rgba(74,222,128,0.4)]">
            {titleLine2}
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-[500px] text-[17px] font-light leading-[1.75] text-[rgba(240,246,241,0.65)]">
          {subtitle}
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="rounded-[10px] bg-green-600 px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(22,163,74,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(22,163,74,0.65)]"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-[rgba(240,246,241,0.75)] transition-all hover:border-green-400/50 hover:bg-green-600/[0.08] hover:text-green-400"
          >
            {secondaryCta.label}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-green-600/[0.28] bg-green-600/10 px-3.5 py-1.5 text-xs font-bold tracking-[.3px] text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFuturistic;
