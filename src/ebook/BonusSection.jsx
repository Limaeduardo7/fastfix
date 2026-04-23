import { Gift, Check, Bot, FileSpreadsheet, ClipboardList, Radio } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';

const bonusFeatures = [
  'Troca de eMMC passo a passo',
  'Troca de UFS com segurança',
  'Escolha correta de memória',
  'Cuidados com temperatura e fluxo',
];

const bonuses = [
  {
    id: 'ebook',
    icon: Gift,
    label: 'eBook Bônus 1',
    title: 'Troca de Memória Flash64',
    description: 'O guia essencial para técnicos que querem dominar a troca de eMMC/UFS. Procedimentos claros, sem improviso.',
    image: '/bonus1-image.webp',
    price: 'R$ 37,00',
    features: bonusFeatures,
  },
  {
    id: 'ia',
    icon: Bot,
    label: 'Bônus 2',
    title: 'Assistente de IA para Técnicos',
    price: 'R$ 47,00',
    video: '/Animação ROBO LOOP.mp4',
    description: 'IA treinada especificamente para o universo do reparo de placas. Tire dúvidas técnicas e acelere seu aprendizado.',
    features: ['Dúvidas técnicas em tempo real', 'Orientações de diagnóstico', 'Treinado para reparo de placas', 'Disponível 24h por dia'],
  },
  {
    id: 'planilha',
    icon: FileSpreadsheet,
    label: 'Bônus 3',
    title: 'Planilha de Precificação',
    price: 'R$ 27,00',
    video: '/video-planilha-precificacao.mp4',
    description: 'Pare de cobrar no achismo. Calcule o valor ideal de cada serviço com base em custos, tempo e margem de lucro.',
    features: ['Cálculo por tipo de serviço', 'Margem de lucro configurável', 'Custos de insumos inclusos', 'Pronta para usar imediatamente'],
  },
  {
    id: 'checklist',
    icon: ClipboardList,
    label: 'Bônus 4',
    title: 'Checklist – Troca de Memória',
    price: 'R$ 17,00',
    description: 'Um checklist completo para garantir que nenhuma etapa seja esquecida. Protocolo profissional do início ao fim.',
    features: ['Etapas organizadas por fase', 'Verificações de segurança', 'Pontos críticos sinalizados', 'Formato prático de bancada'],
  },
  {
    id: 'rf',
    icon: Radio,
    label: 'Bônus 5',
    title: 'Tabela de Partições de RF',
    price: 'R$ 27,00',
    description: 'Guia rápido com as principais partições de rádio frequência por fabricante e arquitetura.',
    highlight: true,
    features: ['Partições por fabricante', 'Diferentes arquiteturas', 'Referência rápida de bancada', 'Conteúdo exclusivo'],
  },
];

export default function BonusSection() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-[#060606] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Bônus exclusivos</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white">
              5 bônus inclusos na sua compra
            </h2>
            <p className="text-white/40 mt-4 max-w-md mx-auto text-[15px]">Além do eBook principal, você recebe 5 materiais extras sem custo adicional.</p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <Reveal key={bonus.id} delay={index * 100}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors relative">
                  {bonus.highlight && (
                    <div className="absolute top-4 right-4 bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Essencial
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row gap-7 md:gap-10 items-center md:items-start">
                      {bonus.image && (
                        <div className="flex justify-center shrink-0">
                          <img src={bonus.image} alt={bonus.title} className="w-56 sm:w-72 md:w-80 rounded-xl" />
                        </div>
                      )}
                      {!bonus.image && !bonus.video && (
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.05] flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-white/40" />
                        </div>
                      )}

                      <div className="space-y-4 w-full">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF6B00] mb-1">{bonus.label}</p>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{bonus.title}</h3>
                          <p className="text-white/40 text-[15px] leading-relaxed">{bonus.description}</p>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {bonus.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2.5">
                              <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                              <span className="text-white/60 text-sm">{feat}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-3 flex-wrap pt-1">
                          <span className="text-white/25 text-sm line-through">{bonus.price}</span>
                          <span className="text-[#FF6B00] font-semibold text-sm">Grátis na compra</span>
                        </div>
                      </div>
                    </div>

                    {bonus.video && (
                      <div className="mt-6 rounded-xl overflow-hidden border border-white/[0.07]">
                        <video
                          src={bonus.video}
                          autoPlay loop muted playsInline preload="metadata"
                          disablePictureInPicture controls={false}
                          onCanPlay={(e) => { e.currentTarget.play().catch(() => {}); }}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
