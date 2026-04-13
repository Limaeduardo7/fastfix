import { Reveal } from './ScrollReveal';
import { CTAButton } from './shared';
import DecryptedText from './reactbits/DecryptedText';

export default function BeforeAfterSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-background border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <Reveal className="text-center mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">A transformação</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mt-2 mb-4">
                        O que muda quando você domina{' '}
                        <span className="text-primary italic">
                            <DecryptedText text="reparo de placas" speed={40} maxIterations={12} sequential animateOn="view" className="text-primary" />
                        </span>
                    </h2>
                </Reveal>

                <Reveal className="grid md:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="glass-card rounded-3xl p-8 space-y-5 border-red-500/20">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                                <span className="text-red-400 text-lg">✕</span>
                            </div>
                            <h3 className="text-xl font-bold text-red-400">Sem o treinamento</h3>
                        </div>
                        <div className="space-y-4 text-gray-400 text-sm">
                            {[
                                'Sente frustração e insegurança toda vez que chega uma placa difícil',
                                'Devolve placas "sem conserto" e perde o lucro mais alto da bancada',
                                'Cobra R$ 50~80 por troca de tela e vive espremido no preço',
                                'Depende de emprego CLT ou loja com salário fixo baixo',
                                'Fica para trás enquanto o mercado exige cada vez mais especialização'
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-red-400/60 mt-0.5">✕</span>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* After */}
                    <div className="glass-card rounded-3xl p-8 space-y-5 border-green-500/20 bg-green-500/5">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                                <span className="text-green-400 text-lg">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-400">Com o FastFix</h3>
                        </div>
                        <div className="space-y-4 text-gray-300 text-sm">
                            {[
                                ['Tem ', 'confiança e clareza', ' para encarar qualquer placa que chegar na bancada'],
                                ['Repara placas que ', 'outros técnicos recusaram', ' e cobra caro por isso'],
                                ['Cobra ', 'R$ 300 a R$ 800 por reparo', ' de placa com margem altíssima'],
                                ['Tem seu próprio lab lucrativo ou ', 'dobra o faturamento', ' da loja'],
                                ['Vira a ', 'referência da região', '. clientes e lojas te procuram']
                            ].map((parts, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>{parts[0]}<strong className="text-white">{parts[1]}</strong>{parts[2]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Reveal className="text-center mt-12">
                    <CTAButton>Quero essa transformação →</CTAButton>
                </Reveal>
            </div>
        </section>
    );
}
