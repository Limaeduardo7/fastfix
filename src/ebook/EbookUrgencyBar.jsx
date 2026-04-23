import { trackEvent } from '../lib/metaTracking';

export default function EbookUrgencyBar() {
    function scrollToOffer() {
        const el = document.getElementById('offer');
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    }

    return (
        <div id="urgency-bar" className="absolute top-0 left-0 right-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-2.5">
                <div className="bg-black/80 border border-white/[0.08] backdrop-blur-sm rounded-xl text-center px-4 py-2">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium tracking-wide text-white/60">
                        <span>Acesso imediato · 5 bônus inclusos · Garantia de 7 dias</span>
                        <button
                            type="button"
                            onClick={() => {
                                trackEvent('InitiateCheckout', { currency: 'BRL', value: 67, placement: 'ebook_urgency_bar' });
                                scrollToOffer();
                            }}
                            className="bg-[#FF6B00] text-white font-semibold px-3 py-1 rounded-full text-[11px] hover:bg-[#e55f00] transition-colors cursor-pointer"
                        >
                            Garantir agora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
