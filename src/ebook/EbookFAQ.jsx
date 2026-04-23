import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '../components/ScrollReveal';

const faqs = [
  { question: 'Esse eBook serve para iniciantes?',              answer: 'Sim. O material foi escrito para ser compreendido mesmo por quem está começando. A linguagem é técnica, mas acessível. Cada conceito é explicado com clareza antes de ser aplicado.' },
  { question: 'Ele mostra conexão ISP na prática?',             answer: 'Sim. Você vai entender quando, como e por que usar ISP, com critérios técnicos claros para cada situação.' },
  { question: 'Aborda UFS e eMMC?',                             answer: 'Sim. O eBook explica as diferenças reais entre UFS e eMMC e como isso impacta diretamente o procedimento que você vai executar.' },
  { question: 'É muito teórico ou vai direto ao ponto?',        answer: 'Direto ao ponto. Todo o conteúdo é orientado à prática. Teoria só aparece quando é necessária para fundamentar a execução.' },
  { question: 'Vou conseguir aprender mais rápido?',            answer: 'Esse é o objetivo principal. O eBook organiza o conhecimento de forma que você pule etapas desnecessárias e vá direto ao que funciona.' },
  { question: 'Preciso ter muita experiência?',                 answer: 'Não. O material atende desde técnicos iniciantes até intermediários que querem mais critério. Se você já mexe com celular, vai aproveitar.' },
  { question: 'E se eu não gostar? Tem garantia?',              answer: 'Sim. Você tem 7 dias de garantia incondicional. Se por qualquer motivo o material não fizer sentido para você, basta solicitar o reembolso e devolvemos 100% do valor — sem burocracia.' },
];

export default function EbookFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-28 px-6 lg:px-20 bg-[#060606] border-t border-white/[0.06]">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Dúvidas</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">Perguntas frequentes</h2>
          </div>
        </Reveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 60}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-white/80 font-medium text-[15px] leading-snug">{faq.question}</span>
                    {isOpen
                      ? <Minus className="w-4 h-4 text-[#FF6B00] shrink-0" />
                      : <Plus  className="w-4 h-4 text-white/30 shrink-0" />
                    }
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-5 pb-5 text-white/45 text-[15px] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
