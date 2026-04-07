import { Gift, Check, Bot } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';
import { Badge } from '../components/ui/badge';

const bonusFeatures = [
  'Troca de eMMC passo a passo',
  'Troca de UFS com segurança',
  'Escolha correta de memória',
  'Cuidados com temperatura e fluxo',
];

const aiAssistantFeatures = [
  'Diagnóstico técnico orientado por contexto',
  'Apoio em orçamento, atendimento e pós-venda',
  'Sugestões de procedimentos para bancada avançada',
  'Suporte para qualquer tarefa da assistência',
];

export default function BonusSection() {
  return (
    <section className="py-24 px-6 lg:px-20 border-t border-white/5 relative overflow-hidden">


      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/5 text-gray-200 border-white/10">
              <Gift className="w-3.5 h-3.5" />
              Bônus Exclusivo
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Incluso na sua compra:{' '}
              <span className="text-white">Troca de Memória Flash64</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={150}>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70">
              <div className="rounded-[15px] p-6 sm:p-10 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                  {/* Bonus mockup */}
                  <div className="flex justify-center shrink-0">
                    <img
                      src="/images/bonus-troca-memoria.png"
                      alt="eBook Troca de Memória Flash64"
                      className="w-48 sm:w-56 md:w-64 rounded-2xl"
                    />
                  </div>

                  {/* Bonus details */}
                  <div className="space-y-5 w-full">
                    <div>
                      <p className="text-gray-300 text-xs font-bold uppercase tracking-wider mb-2">eBook Bônus</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Troca de Memória Flash64
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        O guia essencial para técnicos que querem dominar a troca de eMMC/UFS.
                        Procedimentos claros, sem improviso.
                      </p>
                    </div>

                    <ul className="space-y-2.5">
                      {bonusFeatures.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-gray-300 shrink-0" />
                          <span className="text-gray-300 text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      <Gift className="w-4 h-4 text-gray-200" />
                      <span className="text-gray-200 text-sm font-bold">Grátis na compra do Flash 64 na Prática</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-[#111827]/90 to-[#0b0e14]">
              <div className="rounded-[15px] p-6 sm:p-8 md:p-10">
                <div className="space-y-5 w-full">
                  <div>
                    <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">Bônus Extra</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <Bot className="w-5 h-5 text-primary" />
                      Assistente de IA Profissional para Assistência Avançada
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Um assistente técnico para apoiar você em qualquer tarefa da assistência: diagnóstico,
                      atendimento, orçamento, fluxo de bancada e tomada de decisão no dia a dia.
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {aiAssistantFeatures.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-orange-300 shrink-0" />
                        <span className="text-gray-200 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30">
                    <Bot className="w-4 h-4 text-orange-300" />
                    <span className="text-orange-200 text-sm font-bold">Bônus exclusivo incluso nesta oferta</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
