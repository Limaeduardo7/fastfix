import { Reveal } from './ScrollReveal';
import { CTAButton } from './shared';

const steps = [
    { num: '1', title: 'Análise de Esquemas', desc: 'Leia qualquer esquema elétrico e saiba exatamente onde está o defeito, sem ficar chutando.' },
    { num: '2', title: 'Micro Soldagem', desc: 'Solde componentes microscópicos com precisão. a habilidade mais valorizada do mercado.' },
    { num: '3', title: 'Diagnóstico Avançado', desc: 'Localize falhas que outros técnicos não encontram. em minutos, não em horas.' },
    { num: '4', title: 'Reparo de Trilhas', desc: 'Recupere placas que seriam jogadas fora. e cobre R$ 500+ por cada uma.' },
    { num: '5', title: 'Reballing Profissional', desc: 'Domine a técnica de BGA que separa amadores de profissionais. e cobra à altura.' },
    { num: '6', title: 'Limpeza Técnica', desc: 'A etapa invisível que previne 30% dos defeitos. e que quase ninguém ensina direito.' },
];

export default function StepsSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
                        Em 6 módulos, você aprende a resolver placas com <span className="text-orange-600">consumo travado</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Um treinamento desenhado para quem já tem noção básica de bancada e quer dominar diagnósticos avançados de forma prática e direta.
                    </p>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, i) => (
                            <Reveal key={step.num} delay={i * 100} className="space-y-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <span className="text-primary font-bold text-xl">{step.num}</span>
                                </div>
                                <h3 className="font-bold text-xl">{step.title}</h3>
                                <p className="text-gray-500 text-sm">{step.desc}</p>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={300}>
                        <img
                            src="/images/04.jpeg"
                            alt="Bancada de ferramentas e multímetro para reparo de smartphones"
                            className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
                            loading="lazy"
                            width="6000"
                            height="4000"
                        />
                    </Reveal>
                </div>

                <Reveal className="mt-20 text-center">
                    <CTAButton className="shadow-xl shadow-primary/25 uppercase tracking-wider font-extrabold px-12 py-5">
                        Ver o que está incluso →
                    </CTAButton>
                </Reveal>
            </div>
        </section>
    );
}
