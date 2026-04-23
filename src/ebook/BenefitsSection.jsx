import { TrendingDown, ShieldCheck, Clock, Wrench, Target, Zap } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';
import { trackEvent } from '../lib/metaTracking';

const benefits = [
  { icon: TrendingDown, title: 'Menos tentativa e erro',  desc: 'Reduza drasticamente o tempo gasto em diagnósticos incorretos.' },
  { icon: ShieldCheck,  title: 'Mais confiança técnica',  desc: 'Execute procedimentos sabendo exatamente o que esperar em cada etapa.' },
  { icon: Clock,        title: 'Economia de tempo',       desc: 'Aprenda em horas o que levaria dias de pesquisa dispersa em fórum e YouTube.' },
  { icon: Wrench,       title: 'Domínio da ferramenta',   desc: 'Entenda a Flash64 além do básico. Parâmetros que fazem diferença no resultado.' },
  { icon: Target,       title: 'Mais previsibilidade',    desc: 'Saiba o que esperar de cada procedimento antes de executar — sem surpresas.' },
  { icon: Zap,          title: 'Diagnóstico mais rápido', desc: 'Diagnóstico que antes levava horas, agora leva minutos com o método certo.' },
];

export default function BenefitsSection() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-[#060606] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Benefícios</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white">
              Ganhos claros para<br className="hidden sm:inline" /> sua rotina técnica
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 90}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 h-full hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-5 group-hover:bg-[#FF6B00]/[0.1] transition-colors">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-[#FF6B00] transition-colors" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={500}>
          <div className="mt-12 flex justify-center">
            <a
              href="#offer"
              onClick={() => trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_benefits_cta' })}
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-[15px]"
            >
              Quero esses ganhos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
