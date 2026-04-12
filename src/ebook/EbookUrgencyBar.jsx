import { trackEvent } from '../lib/metaTracking';

export default function EbookUrgencyBar() {
    function scrollToOffer() {
        const el = document.getElementById('offer');
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    }

    return (
        <div id="urgency-bar" className="absolute top-0 left-0 right-0 z-30 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-2.5">
                <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 rounded-xl text-center shadow-lg px-3 sm:px-4 py-2.5">
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-[11px] sm:text-sm font-bold tracking-wide">
                        <span className="hidden sm:inline">⚠️</span>
                        <span>🔥 Acesso imediato + 5 bônus — só nesta página</span>
                        <button
                            type="button"
                            onClick={() => {
                                trackEvent('InitiateCheckout', { currency: 'BRL', value: 47, placement: 'ebook_urgency_bar' });
                                scrollToOffer();
                            }}
                            className="bg-white text-red-700 font-extrabold px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs hover:scale-105 transition-transform cursor-pointer"
                        >
                            GARANTIR AGORA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
