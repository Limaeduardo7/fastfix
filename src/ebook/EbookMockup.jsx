import { Cpu } from 'lucide-react';

const CIRCUIT_SVG = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <circle cx="20" cy="20" r="2" fill="rgba(255,107,0,0.3)"/>
  <circle cx="60" cy="20" r="2" fill="rgba(6,182,212,0.3)"/>
  <circle cx="100" cy="20" r="2" fill="rgba(139,92,246,0.3)"/>
  <circle cx="20" cy="60" r="2" fill="rgba(255,107,0,0.3)"/>
  <circle cx="60" cy="60" r="2" fill="rgba(6,182,212,0.3)"/>
  <circle cx="100" cy="60" r="2" fill="rgba(255,107,0,0.3)"/>
  <circle cx="20" cy="100" r="2" fill="rgba(139,92,246,0.3)"/>
  <circle cx="60" cy="100" r="2" fill="rgba(255,107,0,0.3)"/>
  <circle cx="100" cy="100" r="2" fill="rgba(6,182,212,0.3)"/>
  <line x1="20" y1="20" x2="60" y2="20" stroke="rgba(255,107,0,0.15)" stroke-width="0.5"/>
  <line x1="60" y1="20" x2="60" y2="60" stroke="rgba(6,182,212,0.15)" stroke-width="0.5"/>
  <line x1="60" y1="60" x2="100" y2="60" stroke="rgba(139,92,246,0.15)" stroke-width="0.5"/>
  <line x1="20" y1="60" x2="20" y2="100" stroke="rgba(255,107,0,0.15)" stroke-width="0.5"/>
  <line x1="20" y1="100" x2="60" y2="100" stroke="rgba(6,182,212,0.15)" stroke-width="0.5"/>
  <line x1="100" y1="60" x2="100" y2="100" stroke="rgba(139,92,246,0.15)" stroke-width="0.5"/>
  <line x1="100" y1="20" x2="100" y2="60" stroke="rgba(255,107,0,0.15)" stroke-width="0.5"/>
  <line x1="60" y1="60" x2="60" y2="100" stroke="rgba(6,182,212,0.15)" stroke-width="0.5"/>
</svg>
`)}`;

/* Floating data elements around the book */
const floatingData = [
  { top: '-8%', right: '5%', color: 'bg-cyan-400', size: 'w-1 h-1', duration: '5s', delay: '0s' },
  { bottom: '10%', left: '-6%', color: 'bg-violet-400', size: 'w-1.5 h-1.5', duration: '7s', delay: '1.5s' },
  { top: '30%', right: '-4%', color: 'bg-orange-400', size: 'w-1 h-1', duration: '6s', delay: '0.8s' },
];

/* Technology tag colors */
const techTags = [
  { label: 'ISP', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
  { label: 'UFS', color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/30' },
  { label: 'eMMC', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
  { label: 'Chip Off', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
];

export default function EbookMockup({ className = '' }) {
  return (
    <div className={`relative ${className}`} style={{ perspective: '1200px' }}>
      {/* Multi-color glow underneath */}
      <div
        className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 w-[80%] h-[50px] rounded-full blur-2xl pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(255,107,0,0.2), rgba(139,92,246,0.18), rgba(6,182,212,0.2))',
        }}
      />

      {/* Floating data elements */}
      {floatingData.map((fd, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${fd.size} ${fd.color} opacity-50 pointer-events-none`}
          style={{
            top: fd.top,
            bottom: fd.bottom,
            left: fd.left,
            right: fd.right,
            animation: `mockupFloat ${fd.duration} ease-in-out infinite`,
            animationDelay: fd.delay,
          }}
        />
      ))}

      {/* Keyframes for floating data */}
      <style>{`
        @keyframes mockupFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-12px) scale(1.3); opacity: 0.8; }
        }
      `}</style>

      {/* Book wrapper with 3D transform */}
      <div
        className="relative w-[280px] sm:w-[340px] mx-auto"
        style={{
          aspectRatio: '3 / 4',
          transform: 'rotateY(-8deg) rotateX(3deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Spine shadow (left edge) */}
        <div
          className="absolute top-0 left-0 w-[14px] h-full rounded-l-sm z-20"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.15), transparent)',
            transform: 'translateZ(-2px)',
          }}
        />

        {/* Page edges (right side) - blue tint */}
        <div
          className="absolute top-[3px] -right-[8px] w-[8px] h-[calc(100%-6px)] rounded-r-[2px] z-0"
          style={{
            background: 'linear-gradient(to right, #c8d0e0, #d4dcea, #e0e8f4, #d4dcea, #c8d0e0)',
            boxShadow: '2px 0 6px rgba(59,130,246,0.15), 2px 0 12px rgba(0,0,0,0.3)',
          }}
        />

        {/* Front cover */}
        <div
          className="relative w-full h-full rounded-r-sm rounded-l-[2px] overflow-hidden z-10 flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(160deg, #0d1117 0%, #1a0f2e 50%, #0d1117 100%)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(139,92,246,0.05)',
          }}
        >
          {/* Circuit pattern overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: `url("${CIRCUIT_SVG}")`, backgroundSize: '120px 120px' }}
          />

          {/* Animated dot grid overlay (4x4) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="grid grid-cols-4 gap-8 opacity-[0.12]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-violet-400'}`}
                />
              ))}
            </div>
          </div>

          {/* Top gradient accent - CYAN */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: 'linear-gradient(90deg, transparent, #06B6D4, transparent)' }}
          />

          {/* Inner border glow */}
          <div className="absolute inset-[12px] rounded-sm border border-white/[0.06] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-8 gap-4">
            {/* Brand */}
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
              FastFix Academy
            </p>

            {/* Icon with pulsing glow ring */}
            <div className="icon-pulse flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
              <Cpu className="w-6 h-6 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight">
              <span className="text-gradient-multi">Dominando</span>
              <br />
              <span className="text-primary">a Flash64</span>
            </h3>

            {/* Divider - gradient */}
            <div
              className="w-12 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #06B6D4, #FF6B00, #8B5CF6)' }}
            />

            {/* Technology tags as colored pills */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {techTags.map((tag) => (
                <span
                  key={tag.label}
                  className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${tag.color} ${tag.bg} ${tag.border}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom gradient accent - PURPLE */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)' }}
          />
        </div>
      </div>
    </div>
  );
}
