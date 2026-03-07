import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'view',
    ...props
}) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        let interval;
        let currentIteration = 0;

        const getNextIndex = (revealedSet) => {
            const textLength = text.length;
            switch (revealDirection) {
                case 'start':
                    return revealedSet.size;
                case 'end':
                    return textLength - 1 - revealedSet.size;
                case 'center': {
                    const middle = Math.floor(textLength / 2);
                    const offset = Math.floor(revealedSet.size / 2);
                    return revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
                }
                default:
                    return revealedSet.size;
            }
        };

        const availableChars = characters.split('');

        const shuffleText = (originalText, currentRevealed) => {
            return originalText
                .split('')
                .map((char, i) => {
                    if (char === ' ') return ' ';
                    if (currentRevealed.has(i)) return originalText[i];
                    return availableChars[Math.floor(Math.random() * availableChars.length)];
                })
                .join('');
        };

        if (isHovering) {
            let revealed = new Set();
            interval = setInterval(() => {
                if (sequential) {
                    if (revealed.size < text.length) {
                        const nextIndex = getNextIndex(revealed);
                        revealed = new Set(revealed);
                        revealed.add(nextIndex);
                        setDisplayText(shuffleText(text, revealed));
                    } else {
                        clearInterval(interval);
                    }
                } else {
                    setDisplayText(shuffleText(text, revealed));
                    currentIteration++;
                    if (currentIteration >= maxIterations) {
                        clearInterval(interval);
                        setDisplayText(text);
                    }
                }
            }, speed);
        } else {
            setDisplayText(text);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters]);

    useEffect(() => {
        if (animateOn !== 'view') return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsHovering(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [animateOn, hasAnimated]);

    const handleMouseEnter = () => {
        if (animateOn === 'hover') setIsHovering(true);
    };

    const handleMouseLeave = () => {
        if (animateOn === 'hover') setIsHovering(false);
    };

    return (
        <motion.span
            ref={containerRef}
            className={`${parentClassName} inline-block`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <span className="sr-only">{text}</span>
            <span aria-hidden className={className}>
                {displayText.split('').map((char, i) => {
                    const isRevealed = char === text[i];
                    return (
                        <span
                            key={i}
                            className={isRevealed ? '' : encryptedClassName}
                        >
                            {char}
                        </span>
                    );
                })}
            </span>
        </motion.span>
    );
}
