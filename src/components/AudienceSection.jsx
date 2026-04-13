import { Reveal } from './ScrollReveal';
import { Icon } from './shared';

const cards = [
    { icon: 'users', title: 'Técnico básico querendo evoluir', desc: 'Já faz reparo mas está travado no diagnóstico avançado? Aprenda a interpretar qualquer placa defeituosa, independente da marca ou modelo.' },
    { icon: 'trendingUp', title: 'Técnico que faz troca mas não repara placa', desc: 'Você troca tela e conector, mas devolve placa. Aprenda o reparo que a maioria das assistências não faz — e cobre 5x mais por ele.' },
    { icon: 'briefcase', title: 'Quer abrir seu próprio lab', desc: 'Quer sair do emprego e ser dono do seu negócio? Reparo de placa tem margem alta e demanda crescente. O curso te prepara pra isso.' },
];

export default function AudienceSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-background">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-4">Isso é pra você se…</h2>
                </Reveal>
                <Reveal>
                    <p className="text-gray-500 text-center text-lg mb-16">Se você se identifica com algum desses perfis, o FastFix foi feito sob medida.</p>
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
