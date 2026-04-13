import { Reveal } from './ScrollReveal';
import { Icon } from './shared';

const features = [
    { icon: 'headset', title: 'Suporte direto', desc: 'Tira dúvidas direto com o João — sem chatbot, sem espera. Mais encontros ao vivo toda semana no Discord para revisar casos reais com a turma.' },
    { icon: 'refreshCw', title: 'Atualizações vitalícias', desc: 'Novo modelo de placa, nova técnica, nova aula. Você acessa tudo isso sem pagar nada a mais — para sempre, enquanto o curso existir.' },
    { icon: 'users', title: 'Comunidade ativa', desc: 'Grupo de técnicos compartilhando diagnósticos difíceis, dicas de fornecedor e oportunidades de serviço. Networking que gera receita real.' },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-center mb-16">
                        Você não aprende <span className="text-primary italic">sozinho</span>
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {[
                        { ...features[0], bg: 'bg-orange-500/10', text: 'text-orange-400' },
                        { ...features[1], bg: 'bg-green-500/10', text: 'text-green-400' },
                        { ...features[2], bg: 'bg-blue-500/10', text: 'text-blue-400' },
                    ].map((f, i) => (
                        <Reveal key={f.icon} delay={i * 100} className="space-y-4">
                            <div className={`mx-auto w-16 h-16 ${f.bg} ${f.text} rounded-full flex items-center justify-center`}>
                                <Icon name={f.icon} />
                            </div>
                            <h3 className="font-bold text-xl uppercase tracking-tight text-white">{f.title}</h3>
                            <p className="text-gray-400 text-sm">{f.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
