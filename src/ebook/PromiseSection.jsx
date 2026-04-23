import { X, Check } from 'lucide-react'
import { Reveal } from '../components/ScrollReveal'

const transformations = [
  { before: 'De tentativa e erro',     after: 'Para método direto' },
  { before: 'De improviso na bancada', after: 'Para procedimento técnico claro' },
  { before: 'De insegurança',          after: 'Para mais taxa de acerto' },
  { before: 'De horas perdidas',       after: 'Para aprendizado encurtado' },
]

export default function PromiseSection() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-[#060606] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">A transformação</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white">
              Clareza técnica que se transforma<br className="hidden sm:inline" /> em resultado
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-3 mb-14">
          {transformations.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex items-center gap-4 hover:border-white/[0.12] transition-colors">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <X className="w-4 h-4 text-white/25 shrink-0" />
                  <span className="text-white/40 text-sm truncate">{item.before}</span>
                </div>
                <span className="text-[#FF6B00] font-bold shrink-0">→</span>
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span className="text-white/80 text-sm font-medium truncate">{item.after}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-white/60 text-base sm:text-lg leading-relaxed italic max-w-2xl mx-auto">
              "Estruturado por quem já passou pelas mesmas dificuldades na bancada."
            </p>
          </div>
        </Reveal>

        <Reveal delay={650}>
          <p className="text-white/40 text-center max-w-xl mx-auto leading-relaxed mt-10 text-[15px]">
            Este material foi estruturado para encurtar a curva de aprendizado e transformar
            conhecimento disperso em{' '}
            <span className="text-white/70 font-medium">procedimento técnico claro e replicável</span>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
