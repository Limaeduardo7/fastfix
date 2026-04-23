import { Check, X } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';

const positiveItems = [
  { text: 'Técnicos iniciantes que querem acelerar o aprendizado',       desc: 'Fundamentos sólidos para começar com o pé direito.' },
  { text: 'Técnicos intermediários que buscam mais critério operacional', desc: 'Eleve seu nível com fluxos estruturados e parâmetros reais.' },
  { text: 'Profissionais que usam Flash64 e querem reduzir erro',         desc: 'Domine cada configuração e elimine diagnósticos incorretos.' },
  { text: 'Quem quer entender a lógica por trás do procedimento',         desc: 'Não apenas o "como", mas o "por quê" de cada passo.' },
];

const negativeItems = [
  'Quem busca atalhos sem investir em base técnica',
  'Quem não está disposto a seguir um método estruturado',
  'Quem ainda não está pronto para levar a bancada a sério',
];

export default function AudienceSection() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Público</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white">
              Para quem foi feito
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* For */}
          <Reveal>
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 sm:p-8 h-full">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF6B00] mb-6">Para quem é</p>
              <h3 className="text-xl font-semibold text-white mb-7">Este eBook foi feito para você se…</h3>
              <div className="flex flex-col gap-5">
                {positiveItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/75 text-[15px] leading-snug">{item.text}</p>
                      <p className="text-white/35 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Not for */}
          <Reveal delay={120}>
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-7 sm:p-8 h-full flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-6">Para quem não é</p>
              <p className="text-white/35 text-sm mb-5">Este material pode não ser ideal se você ainda não está pronto para:</p>
              <ul className="flex flex-col gap-4">
                {negativeItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-white/20 shrink-0" />
                    <span className="text-white/45 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
