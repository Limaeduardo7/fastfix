import { Reveal } from './ScrollReveal';

const testimonials = [
    {
        text: '"Cara, eu achei que ia ser mais um cursinho genérico. Mas na segunda semana já consertei uma placa que a assistência tinha devolvido pro cliente. Faturei R$ 350 nesse reparo.',
        highlight: 'Hoje tiro R$ 9.000/mês',
        suffix: ' só com placa."',
        initials: 'RM',
        name: 'Rafael M.',
        handle: '@rafael.tech. São Paulo, SP',
    },
    {
        text: '"A parada é que o João responde rápido. Travei numa placa de um Redmi, mandei foto no grupo e em 20 min já tinha a solução. Nenhum curso que fiz antes tinha esse suporte.',
        highlight: 'Valeu cada centavo.',
        suffix: '"',
        initials: 'JC',
        name: 'João C.',
        handle: '@joaocell.bh. Belo Horizonte, MG',
    },
    {
        text: '"Trabalhava para uma assistência técnica e hoje tenho o meu próprio laboratório.',
        highlight: 'Recusei proposta CLT de R$ 4.500',
        suffix: ' porque ganho o dobro por conta própria."',
        initials: 'LS',
        name: 'Lucas S.',
        handle: '@lucasfix.cwb. Curitiba, PR',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-16">
                    <span className="text-orange-700 font-bold text-sm uppercase tracking-widest">Resultados reais</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mt-2 mb-4">
                        Não acredite em mim. <span className="text-orange-600 italic">veja os números</span>
                    </h2>
                    <p className="text-gray-500 text-lg">Quem passa pelo treinamento não volta ao serviço básico. Os resultados falam.</p>
                </Reveal>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Reveal key={t.initials} delay={i * 100} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                            <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                {t.text} <strong className="text-gray-900">{t.highlight}</strong>{t.suffix}
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                    <span className="text-primary font-bold text-sm">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-gray-900">{t.name}</p>
                                    <p className="text-gray-500 text-xs">{t.handle}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
