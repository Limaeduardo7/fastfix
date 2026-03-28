import { Reveal } from '../components/ScrollReveal';
import { Badge } from '../components/ui/badge';

function TextLine({ width = '100%', className = '' }) {
  return (
    <div
      className={`h-[6px] rounded-full bg-white/[0.06] ${className}`}
      style={{ width }}
    />
  );
}

function CodeBlock({ color }) {
  return (
    <div className="w-full rounded-md p-2.5 space-y-1.5" style={{ background: `${color}08`, border: `1px solid ${color}15` }}>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
        <div className="h-[4px] rounded-full bg-white/10 w-[60%]" />
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
        <div className="h-[4px] rounded-full bg-white/[0.06] w-[45%]" />
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
        <div className="h-[4px] rounded-full bg-white/[0.06] w-[70%]" />
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
        <div className="h-[4px] rounded-full bg-white/10 w-[50%]" />
      </div>
    </div>
  );
}

function Checklist({ color }) {
  const widths = ['65%', '80%', '55%', '72%'];
  const dotColors = ['bg-emerald-400', 'bg-emerald-500', 'bg-emerald-300', 'bg-emerald-400'];
  return (
    <div className="w-full space-y-2">
      {widths.map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full shrink-0 ${dotColors[i]}`} style={{ opacity: 0.7 }} />
          <div className="h-[4px] rounded-full bg-white/[0.06]" style={{ width: w }} />
        </div>
      ))}
    </div>
  );
}

function CircuitLines({ color }) {
  return (
    <svg viewBox="0 0 120 50" className="w-full h-10 opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="25" x2="40" y2="25" stroke={color} strokeWidth="1.5" />
      <line x1="40" y1="25" x2="40" y2="10" stroke={color} strokeWidth="1.5" />
      <line x1="40" y1="10" x2="70" y2="10" stroke={color} strokeWidth="1.5" />
      <line x1="70" y1="10" x2="70" y2="40" stroke={color} strokeWidth="1.5" />
      <line x1="70" y1="40" x2="110" y2="40" stroke={color} strokeWidth="1.5" />
      <circle cx="40" cy="25" r="2.5" fill={color} />
      <circle cx="70" cy="10" r="2.5" fill={color} />
      <circle cx="70" cy="40" r="2.5" fill={color} />
      <rect x="85" y="20" width="20" height="10" rx="2" stroke={color} strokeWidth="1" fill={`${color}20`} />
      <line x1="40" y1="25" x2="85" y2="25" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  );
}

function MiniTable({ color }) {
  return (
    <div className="w-full rounded-md overflow-hidden" style={{ border: `1px solid ${color}20` }}>
      <div className="flex gap-0" style={{ background: `${color}12` }}>
        <div className="flex-1 px-2 py-1 border-r" style={{ borderColor: `${color}15` }}>
          <div className="h-[3px] rounded-full bg-white/20 w-[70%]" />
        </div>
        <div className="flex-1 px-2 py-1">
          <div className="h-[3px] rounded-full bg-white/20 w-[50%]" />
        </div>
      </div>
      {[0, 1].map((row) => (
        <div key={row} className="flex gap-0 border-t" style={{ borderColor: `${color}10` }}>
          <div className="flex-1 px-2 py-1 border-r" style={{ borderColor: `${color}10` }}>
            <div className="h-[3px] rounded-full bg-white/[0.06] w-[60%]" />
          </div>
          <div className="flex-1 px-2 py-1">
            <div className="h-[3px] rounded-full bg-white/[0.06] w-[40%]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SimulatedPage({ chapter, title, color = '#FF6B00', rotation = 0, zIndex = 10, className = '', variant = 'main' }) {
  return (
    <div
      className={`relative bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden aspect-[3/4] w-[220px] sm:w-[240px] shrink-0 ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex,
        boxShadow: `0 0 40px ${color}15, 0 0 80px ${color}08`,
      }}
    >
      <div className="p-5 flex flex-col gap-3 h-full">
        {/* Chapter label */}
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          {chapter}
        </span>

        {/* Title */}
        <h4 className="text-sm font-bold text-white leading-tight">{title}</h4>

        {/* Divider */}
        <div className="h-[2px] rounded-full w-10" style={{ background: color }} />

        {variant === 'main' && (
          <>
            {/* Simulated text paragraphs - varied widths */}
            <div className="flex flex-col gap-2 mt-1">
              <TextLine width="100%" />
              <TextLine width="70%" />
              <TextLine width="92%" />
              <TextLine width="55%" />
            </div>

            {/* Circuit diagram */}
            <CircuitLines color={color} />

            {/* Mini table */}
            <MiniTable color={color} />

            {/* More text lines */}
            <div className="flex flex-col gap-2 mt-auto">
              <TextLine width="88%" />
              <TextLine width="65%" />
            </div>
          </>
        )}

        {variant === 'code' && (
          <>
            {/* Text intro */}
            <div className="flex flex-col gap-2 mt-1">
              <TextLine width="90%" />
              <TextLine width="60%" />
            </div>

            {/* Code block style */}
            <CodeBlock color={color} />

            {/* More text */}
            <div className="flex flex-col gap-2 mt-auto">
              <TextLine width="95%" />
              <TextLine width="78%" />
              <TextLine width="88%" />
            </div>
          </>
        )}

        {variant === 'checklist' && (
          <>
            {/* Text intro */}
            <div className="flex flex-col gap-2 mt-1">
              <TextLine width="85%" />
              <TextLine width="70%" />
            </div>

            {/* Checklist */}
            <Checklist color={color} />

            {/* Simulated diagram / image */}
            <div
              className="w-full h-12 rounded-md mt-2"
              style={{ background: `linear-gradient(135deg, ${color}15, ${color}08)`, border: `1px solid ${color}20` }}
            />

            {/* More text lines */}
            <div className="flex flex-col gap-2 mt-auto">
              <TextLine width="92%" />
              <TextLine width="68%" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ContentPreview() {
  return (
    <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider" />

      {/* Glow orb */}
      <div className="ebook-glow-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <Badge className="mb-4">Preview</Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Material técnico de <span className="text-gradient-purple">alto nível</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Conteúdo direto ao ponto, construído para quem trabalha na bancada e precisa de respostas claras.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          {/* Fan-out page previews */}
          <div className="relative flex items-center justify-center h-[380px] sm:h-[420px]">
            {/* Page 2 - Left */}
            <div className="absolute hidden sm:block" style={{ left: 'calc(50% - 260px)' }}>
              <SimulatedPage
                chapter="Capítulo 05"
                title="Parâmetros UFS"
                rotation={-6}
                zIndex={5}
                color="#3B82F6"
                variant="code"
              />
            </div>

            {/* Page 1 - Center (main) */}
            <div className="relative" style={{ zIndex: 10 }}>
              {/* Preview badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-primary/30">
                  Preview
                </span>
              </div>
              <SimulatedPage
                chapter="Capítulo 03"
                title="Conexão ISP"
                rotation={0}
                zIndex={10}
                color="#FF6B00"
                variant="main"
                className="shadow-2xl shadow-black/40"
              />
            </div>

            {/* Page 3 - Right */}
            <div className="absolute hidden sm:block" style={{ right: 'calc(50% - 260px)' }}>
              <SimulatedPage
                chapter="Capítulo 07"
                title="Chip Off"
                rotation={6}
                zIndex={5}
                color="#10B981"
                variant="checklist"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-gray-500 text-xs text-center mt-8">
            Conteúdo real do eBook. Visual ilustrativo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
