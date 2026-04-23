import { Zap, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';
import { trackEvent } from '../lib/metaTracking';

const academyUrl = 'https://fastfixcaxias.com';

const pillars = [
  { icon: TrendingUp, label: 'Feche mais orçamentos', desc: 'Diagnóstico mais rápido = mais clientes atendidos e mais faturamento.' },
  { icon: BookOpen,   label: 'Método completo',       desc: 'Do hardware ao software — tudo que você precisa para se tornar referência.' },
  { icon: Users,      label: 'Comunidade de elite',   desc: 'Técnicos sérios que compartilham casos reais e crescem juntos.' },
];

export default function AcademyPromoSection() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-[#060606] border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 border border-[#FF6B00]/20 text-[#FF6B00] text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full">
              <Zap className="w-3 h-3" />
              Conheça o FastFix Academy
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-7 sm:p-10 md:p-12 text-center">

            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-white">
                Quer ser um técnico de referência?
              </h2>
              <p className="text-[15px] text-white/45 max-w-xl mx-auto leading-relaxed">
                Técnicos medianos improvisam.{' '}
                <span className="text-white/70 font-medium">Técnicos de referência têm método.</span>{' '}
                O Academy é o treinamento completo para você cobrar mais, errar menos e construir uma bancada que funciona de verdade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {pillars.map(({ icon: Icon, label, desc }) => (
                <Reveal key={label} delay={200}>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-left hover:border-white/[0.12] transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/[0.1] transition-colors">
                      <Icon className="w-5 h-5 text-white/40 group-hover:text-[#FF6B00] transition-colors" />
                    </div>
                    <p className="text-white/80 font-semibold text-[15px] mb-1">{label}</p>
                    <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={academyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('ViewContent', { content_name: 'academy_section_flash64', placement: 'flash64_bottom' })}
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-[15px]"
              >
                <Zap className="w-4 h-4" />
                Quero ser referência
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5554991006375?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20FastFix%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/[0.12] text-white/60 font-medium px-7 py-3.5 rounded-xl hover:bg-white/[0.04] transition-colors text-[15px]"
              >
                Falar com suporte
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
