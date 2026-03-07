import { Reveal } from './ScrollReveal';
import { CTAButton } from './shared';

export default function Footer() {
    return (
        <footer className="py-20 px-6 lg:px-20 bg-[#07090D] border-t border-white/5 text-gray-500">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Sua carreira não vai esperar. <span className="text-primary">E essa oferta também não.</span>
                    </h2>
                    <CTAButton variant="secondary">
                        Última chance. garantir vaga →
                    </CTAButton>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-12 text-sm">
                    <Reveal>
                        <img src="/images/Logo-Horizontal---Branco-e-Azul.png" alt="Fastfix Academy" className="h-10 w-auto mb-4" width="1080" height="313" />
                        <p>Formando os melhores especialistas em reparo de placas do Brasil.</p>
                    </Reveal>
                    <Reveal delay={100}>
                        <h3 className="text-white font-bold mb-4 italic">Links Úteis</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Página de Suporte</a></li>
                        </ul>
                    </Reveal>
                    <Reveal delay={200}>
                        <h3 className="text-white font-bold mb-4 italic">Informações</h3>
                        <ul className="space-y-2">
                            <li>Certificado de conclusão</li>
                            <li>Acesso vitalício</li>
                            <li>Garantia 7 dias</li>
                        </ul>
                    </Reveal>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs">
                    <p className="text-gray-400">© 2026 Fastfix Academy. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
