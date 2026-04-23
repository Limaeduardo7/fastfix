import { Zap, ArrowDown, Check } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';
import DecryptedText from '../components/reactbits/DecryptedText';
import EbookUrgencyBar from './EbookUrgencyBar';
import { trackEvent } from '../lib/metaTracking';

const CHECKOUT_URL = '#offer';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

export default function EbookHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-28 pb-16 px-4 sm:px-6 lg:px-20 flex items-center justify-center overflow-hidden bg-black"
    >
      <EbookUrgencyBar />

      {/* Single subtle orange glow behind image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF6B00]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full py-6 relative">
        <Reveal className="space-y-8 text-center flex flex-col items-center">

          {/* Overline */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
            eBook Técnico · Flash 64
          </p>

          {/* Hero image */}
          <div className="flex justify-center">
            <img
              src="/flash64-hero.webp"
              alt="eBook Flash 64 na Prática"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1402"
              height="1122"
              className="w-[90vw] max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] rounded-2xl"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' }}
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.05]">
            <DecryptedText
              text="Flash 64 na Prática"
              speed={30}
              maxIterations={15}
              sequential
              revealDirection="start"
              animateOn="view"
              className="text-white"
            />
          </h1>

          {/* Divider */}
          <div className="w-12 h-px bg-[#FF6B00]/60" />

          {/* Subtitle */}
          <p className="text-[15px] sm:text-base text-white/55 leading-[1.7] max-w-lg mx-auto">
            Domine ISP, UFS, eMMC, chip off e estabilidade de comunicação
            com método direto, sem tentativa e erro.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
            <a
              href={CHECKOUT_URL}
              onClick={() => trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_hero_cta' })}
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-[15px]"
            >
              <Zap className="w-4 h-4" />
              Garantir meu Ebook
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('topics')}
              className="inline-flex items-center justify-center gap-2 border border-white/[0.12] text-white/70 font-medium px-8 py-4 rounded-xl hover:bg-white/[0.04] transition-colors text-[15px]"
            >
              <ArrowDown className="w-4 h-4" />
              Ver conteúdo
            </button>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1">
            {['PDF imediato', 'Leitura objetiva', '5 Bônus inclusos'].map(text => (
              <span key={text} className="flex items-center gap-1.5 text-white/40 text-xs">
                <Check className="w-3.5 h-3.5 text-[#FF6B00]" />
                {text}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
