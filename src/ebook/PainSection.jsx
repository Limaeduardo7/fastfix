import { Clock, Unplug, HardDrive, SlidersHorizontal, AlertTriangle } from 'lucide-react'
import { Reveal } from '../components/ScrollReveal'
import { trackEvent } from '../lib/metaTracking'

const painPoints = [
  { icon: Clock,            title: 'Perder dias em tentativa e erro',           description: 'Sem método, cada reparo vira um experimento que consome tempo e material.' },
  { icon: Unplug,           title: 'Falhar na conexão ISP por falta de critério', description: 'Conectar sem entender os requisitos gera falhas recorrentes e retrabalho.' },
  { icon: HardDrive,        title: 'Não entender UFS e eMMC na prática',         description: 'Confundir tecnologias de armazenamento compromete todo o procedimento.' },
  { icon: SlidersHorizontal,title: 'Errar parâmetros da Flash64',                description: 'Configurações incorretas resultam em leituras instáveis e dados corrompidos.' },
  { icon: AlertTriangle,    title: 'Perder dinheiro recomprando peças',          description: 'Diagnóstico errado significa peça queimada, retrabalho e prejuízo direto no caixa.' },
]

export default function PainSection() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Diagnóstico</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white">
              Os erros que atrasam<br className="hidden sm:inline" /> técnicos todos os dias
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white/50" />
                  </div>
                  <h3 className="font-semibold text-white text-[15px] mb-2">{point.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{point.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={500}>
          <p className="text-center text-white/40 mt-14 max-w-xl mx-auto text-[15px] leading-relaxed">
            O problema geralmente não está na ferramenta — está na falta de{' '}
            <span className="text-white/70 font-medium">clareza operacional</span>.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-8 flex justify-center">
            <a
              href="#offer"
              onClick={() => trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_pain_cta' })}
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-[15px]"
            >
              Quero um método claro
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
