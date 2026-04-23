import { Reveal } from '../components/ScrollReveal';
import { trackEvent } from '../lib/metaTracking';

const pages = [
  { src: '/images/preview-ufs.png',    alt: 'Parâmetros UFS - página 9',     label: 'Parâmetros UFS · p.9',  rotation: -5 },
  { src: '/images/preview-chipoff.png',alt: 'Chip Off - página 6',           label: 'Chip Off · p.6',        rotation: 0,  center: true },
  { src: '/images//preview-emmc.png', alt: 'Aba eMMC da Flash64 - página 11',label: 'Aba eMMC · p.11',       rotation: 5 },
];

export default function ContentPreview() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Preview</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
              Material técnico de alto nível
            </h2>
            <p className="text-white/40 mt-4 max-w-lg mx-auto text-[15px]">
              Conteúdo direto ao ponto, construído para quem trabalha na bancada e precisa de respostas claras.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          {/* Mobile: scroll */}
          <div className="sm:hidden overflow-hidden w-full">
            <div className="flex gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-none">
              {pages.map((page, i) => (
                <div key={i} className="snap-center shrink-0">
                  <div
                    className="relative overflow-hidden rounded-xl border border-white/[0.07] w-[200px]"
                    style={{ aspectRatio: '3/4', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                  >
                    <img src={page.src} alt={page.alt} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-[10px] font-medium text-center text-white/40 bg-gradient-to-t from-black/60 to-transparent">
                      {page.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: fan-out */}
          <div className="hidden sm:flex items-center justify-center h-[360px] md:h-[420px] relative">
            {pages.map((page, i) => (
              <div
                key={i}
                className={i === 1 ? 'relative z-10' : 'absolute'}
                style={i === 0 ? { left: 'calc(50% - 270px)' } : i === 2 ? { right: 'calc(50% - 270px)' } : {}}
              >
                <div
                  className="relative overflow-hidden rounded-xl border border-white/[0.07] w-[220px] md:w-[260px]"
                  style={{
                    transform: `rotate(${page.rotation}deg)`,
                    aspectRatio: '3/4',
                    boxShadow: i === 1 ? '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' : '0 12px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  <img src={page.src} alt={page.alt} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
                  <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-[10px] font-medium text-center text-white/50 bg-gradient-to-t from-black/70 to-transparent">
                    {page.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-white/25 text-xs text-center mt-8">
            Isso é o que você recebe. Sem surpresa. — Chip Off (p.6), Parâmetros UFS (p.9), Aba eMMC (p.11).
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-8 flex justify-center">
            <a
              href="#offer"
              onClick={() => trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_preview_cta' })}
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-[15px]"
            >
              Garantir meu Ebook Agora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
