import { useEffect, useState, useRef } from 'react';

export default function CountUp({ target, duration = 2000, className = '' }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const startTime = Date.now();
        const numericTarget = typeof target === 'string' ? parseFloat(target.replace(/[^0-9.]/g, '')) : target;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericTarget));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(numericTarget);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, target, duration]);

    return (
        <span ref={ref} className={className}>
            {count}
        </span>
    );
}
