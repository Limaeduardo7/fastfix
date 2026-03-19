import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.1) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
}

export function Reveal({ children, className = '', delay = 0, style = {}, ...props }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? 'active' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms`, ...style }}
            {...props}
        >
            {children}
        </div>
    );
}
