import { Reveal } from './ScrollReveal';
import { Icon, CTAButton } from './shared';

export default function BenchSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <Reveal>
                    <img
                        src="/bancada-image.webp"
                        alt="Processo prático de micro soldagem em placa de celular"
                        className="rounded-3xl shadow-2xl border-2 border-surface w-full"
                        loading="lazy"
                        width="1254"
                        height="1254"
                    />
                </Reveal>

                <div className="space-y-10">
                    <Reveal>
                        <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
                            Não é teoria. é <span className="text-primary italic">decisão na bancada, com a placa na sua frente</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Você vê o método sendo aplicado em casos reais, com a leitura aparecendo no multímetro, o consumo travando, o defeito sendo isolado.
                            É o tipo de conteúdo que assistências técnicas cobram{' '}
                            <strong className="text-white">R$ 3.000+ em treinamentos presenciais</strong>.
                        </p>
                    </Reveal>

                    <div className="space-y-6">
                        {[
                            { icon: 'cpu', title: 'Filmado na bancada, não no PowerPoint', desc: 'Cada aula mostra o reparo real acontecendo. com zoom em componentes microscópicos em alta definição.' },
                            { icon: 'zap', title: 'Segredos que você não acha no YouTube', desc: 'Macetes, atalhos e técnicas de quem conserta dezenas de aparelhos por dia. sem enrolação.' },
                            { icon: 'shieldCheck', title: 'Suporte VIP Direto', desc: 'Suporte direto com o João através do WhatsApp ou grupo no Discord com encontros semanais para tirar dúvidas.' },
                        ].map((item, i) => (
                            <Reveal key={item.icon} delay={i * 100} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                <div className="p-3 bg-primary rounded-xl shrink-0">
                                    <Icon name={item.icon} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={300} className="pt-4">
                        <CTAButton className="px-12">Quero esse nível de conteúdo →</CTAButton>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
