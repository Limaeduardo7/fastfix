import { trackEvent } from '../lib/metaTracking'

const academyUrl = 'https://fastfixcaxias.com'

export default function AcademyPromoSection() {
  return (
    <section className="py-20 px-6 lg:px-20 border-t border-white/5 relative overflow-hidden">
      <div className="ebook-glow-orange absolute -top-20 left-1/2 -translate-x-1/2 -z-10" />
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-orange-500/25 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-violet-500/10 p-7 sm:p-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-orange-300 font-bold">Próximo passo</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
            Quer evoluir além do eBook?
            <span className="block text-gradient-fire mt-1">Conheça o FastFix Academy</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Se o Flash64 te deu direção, o Academy te entrega o método completo para acelerar diagnóstico,
            aumentar ticket e ter mais previsibilidade na bancada.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={academyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('ViewContent', { content_name: 'academy_section_flash64', placement: 'flash64_bottom' })}
              className="hero-cta inline-flex items-center justify-center bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white font-bold px-8 py-3 rounded-xl"
            >
              Ver FastFix Academy
            </a>
            <a
              href="https://wa.me/5554981673607?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20FastFix%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/20 bg-white/5 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Falar com suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
