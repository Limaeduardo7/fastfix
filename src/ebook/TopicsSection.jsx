import { Cable, HardDrive, SlidersHorizontal, Cpu, CircuitBoard, Wifi, Wrench } from 'lucide-react'
import { Reveal } from '../components/ScrollReveal'
import { trackEvent } from '../lib/metaTracking'

const topics = [
  { icon: Cable,            title: 'Conexão ISP com critério',    description: 'Entenda quando, como e por que conectar via ISP de forma segura e eficiente.' },
  { icon: HardDrive,        title: 'UFS vs eMMC na prática',      description: 'Diferenças reais que impactam o procedimento. Sem teoria desnecessária.' },
  { icon: SlidersHorizontal,title: 'Parâmetros da Flash64',       description: 'Os ajustes que realmente importam para estabilidade e sucesso na leitura.' },
  { icon: Cpu,              title: 'Chip off com segurança',      description: 'Técnica de remoção com mais previsibilidade e menos risco.' },
  { icon: CircuitBoard,     title: 'Arquitetura da placa',        description: 'Leitura de layout para decisões técnicas mais rápidas e certeiras.' },
  { icon: Cable,            title: 'Escolha correta de fios',     description: 'Material certo para cada situação. Elimine falhas de comunicação.' },
  { icon: Wifi,             title: 'Estabilidade de comunicação', description: 'Como garantir leitura estável e reduzir erros de conexão.' },
  { icon: Wrench,           title: 'Boas práticas de bancada',    description: 'Rotinas e cuidados que separam amadores de profissionais.' },
]

export default function TopicsSection() {
  return (
    <section id="topics" className="py-28 px-6 lg:px-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Conteúdo</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-3">
              O que você vai aprender
            </h2>
            <p className="text-white/40 text-sm font-medium uppercase tracking-wider">8 módulos · Zero enrolação</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((topic, i) => {
            const Icon = topic.icon
            return (
              <Reveal key={i} delay={i * 70}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 h-full hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-5 group-hover:bg-[#FF6B00]/[0.1] transition-colors">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-[#FF6B00] transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white text-[15px] mb-2">{topic.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{topic.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={500}>
          <div className="mt-12 flex justify-center">
            <a
              href="#offer"
              onClick={() => trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_topics_cta' })}
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-[15px]"
            >
              Ver oferta completa
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
