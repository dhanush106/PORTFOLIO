import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.3 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('data-cursor') === 'hover'
            ) {
                setIsHovered(true);
            }
        };

        const handleMouseOut = () => setIsHovered(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isVisible]);

    if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                style={{
                    x: springX,
                    y: springY,
                    scale: isHovered ? 2 : 1,
                    opacity: isVisible ? 1 : 0,
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    borderColor: isHovered ? 'rgba(255, 106, 0, 0.5)' : 'rgba(255, 255, 255, 0.2)'
                }}
            >
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full bg-[#ff6a00]/10 flex items-center justify-center"
                    >
                        <div className="w-1 h-1 bg-[#ff6a00] rounded-full" />
                    </motion.div>
                )}
            </motion.div>

            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-[#ff6a00] rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: mouseX,
                    y: mouseY,
                    opacity: isVisible ? 1 : 0,
                    scale: isHovered ? 0 : 1
                }}
            />
        </>
    );
};

export default CustomCursor;
