import { useState, useEffect } from 'react';
import { scrollToOffer } from './shared';
import { trackEvent } from '../lib/metaTracking';

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 600);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-[44px] sm:top-[40px] left-0 right-0 z-[998] transition-all duration-300 ${
                visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
            style={{ background: 'rgba(11, 14, 20, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
                <span className="text-lg font-extrabold text-white">
                    Fast<span className="text-primary">Fix</span>
                    <span className="text-[10px] text-gray-400 ml-1.5 uppercase tracking-widest font-semibold hidden sm:inline">Academy</span>
                </span>

                <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
                    <a href="#steps" className="text-gray-400 hover:text-white transition-colors hidden sm:inline">Módulos</a>
                    <a href="#pricing-anchor" className="text-gray-400 hover:text-white transition-colors hidden sm:inline">Preço</a>
                    <button
                        type="button"
                        onClick={() => {
                            trackEvent('InitiateCheckout', { currency: 'BRL', value: 497, placement: 'navbar' });
                            scrollToOffer();
                        }}
                        className="bg-primary hover:bg-primary-hover text-white font-bold px-4 py-1.5 rounded-lg transition-all cursor-pointer text-xs sm:text-sm"
                    >
                        Garantir vaga
                    </button>
                </div>
            </div>
        </nav>
    );
}
