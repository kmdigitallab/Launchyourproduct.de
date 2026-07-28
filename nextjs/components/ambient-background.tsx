export default function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <span
        className="absolute rounded-full blur-[90px]"
        style={{
          width: 520,
          height: 520,
          top: '10%',
          left: '-8%',
          background: 'radial-gradient(circle,rgba(22,163,74,.07),transparent 70%)',
          animation: 'drift1 22s ease-in-out infinite alternate',
        }}
      />
      <span
        className="absolute rounded-full blur-[90px]"
        style={{
          width: 620,
          height: 620,
          top: '42%',
          right: '-12%',
          background: 'radial-gradient(circle,rgba(22,163,74,.05),transparent 70%)',
          animation: 'drift2 27s ease-in-out infinite alternate',
        }}
      />
      <span
        className="absolute rounded-full blur-[90px]"
        style={{
          width: 460,
          height: 460,
          top: '74%',
          left: '18%',
          background: 'radial-gradient(circle,rgba(22,163,74,.06),transparent 70%)',
          animation: 'drift3 31s ease-in-out infinite alternate',
        }}
      />
      <style>{`
        @keyframes drift1 { to { transform: translate(130px,90px) scale(1.18); } }
        @keyframes drift2 { to { transform: translate(-110px,-90px) scale(1.12); } }
        @keyframes drift3 { to { transform: translate(90px,-70px) scale(1.22); } }
      `}</style>
    </div>
  );
}
