import { Zap } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';
import { buildCheckoutUrl, trackEvent } from '../lib/metaTracking';

const CHECKOUT_URL = 'https://pay.hotmart.com/B105126454X?checkoutMode=10';

export default function FinalCTA() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-2xl mx-auto text-center space-y-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Última chance</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mt-4 leading-[1.08]">
            Pare de perder tempo<br className="hidden sm:inline" /> com tentativa e erro.
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed mt-5 max-w-lg mx-auto">
            Tempo economizado. Critério técnico. Menos improviso.
            Domínio mais rápido da ferramenta. Tudo em um único material.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-white/30 text-base italic">
            "Cada dia sem método é dinheiro perdido na bancada."
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href={buildCheckoutUrl(CHECKOUT_URL)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_final_cta' })}
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-[15px] w-full sm:w-auto"
          >
            <Zap className="w-4 h-4" />
            Garantir meu Ebook Agora
          </a>
          <p className="text-white/25 text-sm mt-4">
            Acesso imediato · PDF completo · 5 bônus inclusos · Garantia 7 dias
          </p>
        </Reveal>
      </div>
    </section>
  );
}
