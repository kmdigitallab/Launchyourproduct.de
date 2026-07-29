'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(t);
  }, []);

  if (removed) return null;

  return (
    <div
      onTransitionEnd={() => hidden && setRemoved(true)}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <span
        className="text-[15vw] font-black tracking-[6px] sm:text-[80px]"
        style={{
          fontFamily: 'Georgia, serif',
          backgroundImage: 'linear-gradient(180deg,#ffffff 0%,#d4d8d4 45%,#8f9a90 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        LYP
      </span>
    </div>
  );
}
