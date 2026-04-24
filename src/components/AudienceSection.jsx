import { Reveal } from './ScrollReveal';
import { Icon } from './shared';

const cards = [
    { icon: 'users', title: 'Técnico que sabe medir, mas não sabe interpretar', desc: 'Você até pega o multímetro, mas na hora de decidir o próximo passo trava. Aqui você aprende a ler o que o aparelho está mostrando e tirar uma conclusão.' },
    { icon: 'trendingUp', title: 'Técnico que faz troca mas devolve placa', desc: 'Você resolve tela, bateria e conector, mas quando chega placa complicada manda embora. Esse é o reparo de maior margem da bancada e ele se aprende.' },
    { icon: 'briefcase', title: 'Quer parar de chutar e construir um lab sério', desc: 'Quem só troca peça vive cobrando barato. Quem diagnostica vira referência. O curso te prepara para esse outro lado.' },
];

export default function AudienceSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-background">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-4">Você se reconhece em alguma dessas situações?</h2>
                </Reveal>
                <Reveal>
                    <p className="text-gray-500 text-center text-lg mb-16">Se alguma dessas frases descreve a sua bancada hoje, o FastFix foi feito pensando em você.</p>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <Reveal key={card.icon} delay={i * 100} className="glass-card p-8 rounded-3xl hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Icon name={card.icon} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
