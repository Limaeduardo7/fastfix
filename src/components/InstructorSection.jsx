import { Reveal } from './ScrollReveal';
import { CTAButton } from './shared';

export default function InstructorSection() {
    return (
        <section id="instructor" className="py-24 px-6 lg:px-20 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <Reveal>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10"></div>
                        <img
                            src="/instrutor-image.webp"
                            alt="João Mattoso, instrutor da FastFix Academy"
                            className="rounded-3xl shadow-2xl border-4 border-gray-100 w-full"
                            loading="lazy"
                            width="1254"
                            height="1254"
                        />
                    </div>
                </Reveal>

                <Reveal className="space-y-6">
                    <span className="text-orange-700 font-bold text-sm uppercase tracking-widest">Seu instrutor</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
                        João Mattoso já consertou o que <span className="text-orange-600 italic">ninguém mais conserta</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        São mais de <strong className="text-gray-900">10 anos vivendo de bancada</strong>. Mais de{' '}
                        <strong className="text-gray-900">5.000 aparelhos</strong> passaram pelas mãos dele. incluindo os que chegaram como "sem conserto" de outras assistências.
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
                        O João não é professor de cursinho. Ele <strong className="text-gray-900">vive de reparo de placas até hoje</strong>. E decidiu abrir o jogo sobre tudo que aprendeu nesses anos. sem guardar segredo.
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4">
                        {[
                            { value: '10+', label: 'Anos na bancada' },
                            { value: '5.000+', label: 'Aparelhos reparados' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                                <p className="text-3xl font-extrabold text-orange-600">{stat.value}</p>
                                <p className="text-gray-500 text-sm font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <CTAButton>Aprender com quem faz →</CTAButton>
                </Reveal>
            </div>
        </section>
    );
}
