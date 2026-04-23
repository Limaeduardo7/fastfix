import { Check, Zap, Shield, Lock } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';
import { buildCheckoutUrl, trackEvent } from '../lib/metaTracking';

const CHECKOUT_URL = 'https://pay.hotmart.com/B105126454X?checkoutMode=10';

const features = [
  'Conexão ISP com critério técnico',
  'Diferença prática entre UFS e eMMC',
  'Parâmetros essenciais da Flash64',
  'Chip off com mais segurança',
  'Leitura de arquitetura da placa',
  'Escolha correta de fios e materiais',
  'Estabilidade de comunicação',
  'Boas práticas de bancada profissional',
];

export default function OfferSection() {
  return (
    <section id="offer" className="py-28 px-6 lg:px-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="bg-white/[0.03] border border-[#FF6B00]/25 rounded-3xl overflow-hidden">
            <div className="p-7 sm:p-10 space-y-8">

              {/* Header */}
              <div className="text-center space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">Oferta especial</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white">
                  Flash 64 na Prática
                </h2>
                <p className="text-white/45 text-[15px]">eBook técnico e objetivo para dominar a Flash64 de verdade.</p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="/flash64-hero.webp"
                  alt="eBook Flash 64 na Prática"
                  loading="lazy"
                  decoding="async"
                  width="1402"
                  height="1122"
                  className="w-56 md:w-72 rounded-xl"
                  style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                />
              </div>

              {/* Feature list */}
              <ul className="space-y-2.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="text-white/60 text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-white/[0.07]" />

              {/* Price */}
              <div className="text-center space-y-1.5">
                <p className="text-white/30 line-through text-base">R$ 97,00</p>
                <p className="text-white/50 text-sm">Por apenas</p>
                <p className="text-5xl font-bold tracking-[-0.03em] text-white">R$ 67<span className="text-3xl text-white/60">,00</span></p>
                <p className="text-white/30 text-sm">Menos que o custo de uma peça perdida por diagnóstico errado.</p>
              </div>

              {/* CTA */}
              <a
                href={buildCheckoutUrl(CHECKOUT_URL)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_offer_cta' })}
                className="block"
              >
                <button className="w-full bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-[15px]">
                  <Zap className="w-4 h-4" />
                  Garantir meu Ebook Agora
                </button>
              </a>

              {/* Trust */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {[
                  { icon: Shield, label: 'Compra segura', color: 'text-white/30' },
                  { icon: Zap,    label: 'Acesso imediato', color: 'text-white/30' },
                  { icon: Lock,   label: 'Material exclusivo', color: 'text-white/30' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-white/35">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
