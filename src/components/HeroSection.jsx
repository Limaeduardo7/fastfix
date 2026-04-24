import { Reveal } from './ScrollReveal';
import { Icon, CTAButton } from './shared';
import DecryptedText from './reactbits/DecryptedText';

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen pt-4 sm:pt-10 pb-16 px-5 lg:px-20 flex items-center justify-center overflow-hidden">
            <div className="hero-glow hero-glow--1"></div>
            <div className="hero-glow hero-glow--2"></div>

            <div className="max-w-7xl mx-auto w-full py-4 sm:py-8">
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:items-center gap-4">

                    {/* 1 — Badge (mobile: first, desktop: col-1 row-1) */}
                    <Reveal className="lg:col-start-1 lg:row-start-1">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-orange-300 text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse shrink-0"></span>
                            Método de Diagnóstico Avançado
                        </div>
                    </Reveal>

                    {/* 2 — Image (mobile: second, desktop: col-2 spanning both rows) */}
                    <Reveal delay={300} className="relative lg:col-start-2 lg:row-start-1 lg:row-end-3">
                        <div className="hero-image-wrapper relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-transparent to-primary/10 rounded-3xl blur-2xl -z-10"></div>
                            <img
                                src="/hero-image.webp"
                                alt="Técnico João Mattoso realizando reparo avançado em placa Android"
                                className="w-full max-h-[280px] sm:max-h-[420px] lg:max-h-[640px] object-cover object-center rounded-2xl shadow-2xl relative z-10"
                                fetchPriority="high"
                                width="1254"
                                height="1254"
                            />
                        </div>
                        <div className="absolute bottom-3 left-3 bg-surface/95 border border-white/10 rounded-xl p-3 shadow-2xl z-20">
                            <p className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold mb-0.5">Por reparo de placa</p>
                            <p className="text-base sm:text-xl font-extrabold text-white leading-none">R$ 300 a R$ 800<span className="text-primary">+</span></p>
                            <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">o que outros técnicos recusam</p>
                        </div>
                    </Reveal>

                    {/* 3 — Copy: headline, paragraph, CTA, social proof (mobile: third, desktop: col-1 row-2) */}
                    <Reveal className="space-y-4 sm:space-y-6 lg:col-start-1 lg:row-start-2">
                        <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.1] tracking-tight">
                            <DecryptedText
                                text="A placa não está"
                                speed={30}
                                maxIterations={15}
                                sequential={true}
                                revealDirection="start"
                                animateOn="view"
                                className="text-white"
                            />
                            <br />
                            <span className="text-primary">
                                <DecryptedText
                                    text="sem conserto."
                                    speed={30}
                                    maxIterations={15}
                                    sequential={true}
                                    revealDirection="start"
                                    animateOn="view"
                                    className="text-primary"
                                />
                            </span>
                        </h1>

                        <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
                            Você só precisa de um método para encontrar o defeito. Aprenda a diagnosticar{' '}
                            <strong className="text-white font-bold">curtos, falhas de boot, consumo travado</strong>{' '}
                            e defeitos em CPU e memória, mesmo nas placas que outros técnicos já desistiram.
                        </p>

                        <div className="flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2">
                            <CTAButton className="hero-cta w-full sm:w-auto sm:self-start shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 text-base hover:scale-[1.03] active:scale-[0.98] font-bold px-8 sm:px-10 py-4">
                                <Icon name="zap" className="[&_svg]:w-5 [&_svg]:h-5" />
                                Comprar agora
                            </CTAButton>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                                {['Acesso vitalício', 'Garantia 7 dias', 'Certificado incluso'].map(text => (
                                    <span key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                                        <span className="flex items-center justify-center w-5 h-5 bg-green-500/20 border border-green-500/30 rounded-full shrink-0">
                                            <Icon name="check" className="text-green-400 [&_svg]:w-3 [&_svg]:h-3" />
                                        </span>
                                        {text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                            <div className="flex -space-x-2.5 shrink-0">
                                {[
                                    { letter: 'R', colors: 'from-orange-400 to-orange-600' },
                                    { letter: 'A', colors: 'from-blue-400 to-blue-600' },
                                    { letter: 'L', colors: 'from-green-400 to-green-600' },
                                    { letter: 'J', colors: 'from-cyan-400 to-cyan-600' },
                                ].map(({ letter, colors }) => (
                                    <div key={letter} className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors} border-2 border-[#0B0E14] flex items-center justify-center text-white text-xs font-bold`}>
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-0.5">
                                    <span className="text-yellow-400 text-sm leading-none">★★★★★</span>
                                </div>
                                <p className="text-gray-300 text-xs mt-0.5">
                                    <strong className="text-white font-semibold">+1.200 técnicos</strong> já faturando mais
                                </p>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>

        </section>
    );
}
