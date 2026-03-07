import { Reveal } from './ScrollReveal';
import { Icon } from './shared';

const features = [
    { icon: 'headset', title: 'Suporte direto', desc: 'Suporte direto com o João através do WhatsApp ou grupo no Discord com encontros semanais para garantir sua evolução.' },
    { icon: 'refreshCw', title: 'Atualizações vitalícias', desc: 'Novos celulares, novas placas, novas aulas. Você tem acesso a todas as atualizações. pra sempre, sem pagar mais.' },
    { icon: 'users', title: 'Comunidade ativa', desc: 'Comunidade de técnicos trocando diagnósticos, dicas e oportunidades. Networking que gera dinheiro real.' },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-gray-50 text-gray-900 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-center mb-16">
                        Você não aprende <span className="text-orange-600 italic">sozinho</span>
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {features.map((f, i) => (
                        <Reveal key={f.icon} delay={i * 100} className="space-y-4">
                            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                <Icon name={f.icon} />
                            </div>
                            <h3 className="font-bold text-xl uppercase tracking-tight">{f.title}</h3>
                            <p className="text-gray-500 text-sm">{f.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
