import { Reveal } from './ScrollReveal';

export default function GuaranteeSection() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-background">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 border-green-500/20">
                        <div className="shrink-0">
                            <div className="w-32 h-32 bg-green-500/10 rounded-full flex items-center justify-center border-4 border-green-500/30">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 12 15 16 10"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="text-center md:text-left space-y-4">
                            <h2 className="text-2xl lg:text-3xl font-extrabold text-green-400">7 dias pra decidir. Risco zero.</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Assista às aulas, entre no grupo, teste as técnicas. Se em até 7 dias você sentir que não é pra você, basta um e-mail. Devolvemos <strong className="text-white">100% do valor</strong>. Sem pergunta, sem burocracia, sem letra miúda.
                            </p>
                            <p className="text-green-400 text-sm font-semibold">O risco é todo nosso. Você só ganha.</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
