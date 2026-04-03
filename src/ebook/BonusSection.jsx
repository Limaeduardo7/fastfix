import { Gift, Check } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';
import { Badge } from '../components/ui/badge';

const bonusFeatures = [
  'Troca de eMMC passo a passo',
  'Troca de UFS com segurança',
  'Escolha correta de memória',
  'Cuidados com temperatura e fluxo',
];

export default function BonusSection() {
  return (
    <section className="py-24 px-6 lg:px-20 border-t border-white/5 relative overflow-hidden">
      <div className="section-divider" />
      <div className="ebook-glow-cyan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/20">
              <Gift className="w-3.5 h-3.5" />
              Bônus Exclusivo
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Incluso na sua compra:{' '}
              <span className="text-gradient-fire">Troca de Memória Flash64</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="gradient-border rounded-2xl">
            <div className="rounded-[15px] p-6 sm:p-10 md:p-12" style={{ background: 'rgba(16,24,40,0.85)' }}>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
                {/* Bonus mockup */}
                <div className="flex justify-center">
                  <img
                    src="/images/bonus-troca-memoria.png"
                    alt="eBook Troca de Memória Flash64"
                    className="w-48 sm:w-56 md:w-64 drop-shadow-2xl rounded-2xl"
                    style={{ filter: 'drop-shadow(0 0 30px rgba(234,179,8,0.2))' }}
                  />
                </div>

                {/* Bonus details */}
                <div className="space-y-5">
                  <div>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">eBook Bônus</p>
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
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-gray-300 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                    <Gift className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 text-sm font-bold">Grátis na compra do Flash 64 na Prática</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
