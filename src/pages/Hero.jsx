import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    // Spring animations for mouse movement
    const mouseX = useSpring(0, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 150, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const target = containerRef.current;
            if (target) {
                const { left, top } = target.getBoundingClientRect();
                mouseX.set(clientX - left);
                mouseY.set(clientY - top);
                setMousePos({ x: clientX - left, y: clientY - top });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const titleVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303] px-6 text-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Cursor Spotlight Mask */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500"
                style={{
                    background: isHovered
                        ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(3, 3, 3, 0.95) 100%)`
                        : 'rgba(3, 3, 3, 0)',
                    opacity: isHovered ? 1 : 0
                }}
            />

            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6a00]/5 blur-[120px] rounded-full opacity-50" />
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10"
            >
                {/* Headline Section */}
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.span
                        variants={itemVariants}
                        className="text-xs uppercase tracking-[0.4em] text-[#ff6a00] font-semibold mb-6"
                    >
                        Web Developer & Designer
                    </motion.span>

                    <h1 className="text-fluid-h1 font-black leading-[0.9] tracking-tighter text-white mb-2">
                        DHANUSSH
                    </h1>
                    <h1 className="text-fluid-h1 font-black leading-[0.9] tracking-tighter text-white/10 outline-text">
                        SHREKAR
                    </h1>

                    <motion.div
                        variants={itemVariants}
                        className="mt-12 max-w-2xl"
                    >
                        <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed">
                            Building in the era of AI. <br />
                            <span className="text-white">For AI. By AI.</span>
                        </p>
                    </motion.div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-6 mt-4"
                >
                    <a href="#projects" className="btn-premium">
                        Explore Projects
                    </a>
                    <a href="#contact" className="px-8 py-4 text-white/60 hover:text-white transition-colors duration-300 font-medium tracking-wide">
                        Let's Talk
                    </a>
                </motion.div>
            </motion.div>

            {/* Floating Elements (Subtle) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/10 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Scroll Progress Indicator Hide/Show */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-[#ff6a00]"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </section>
    );
};

export default Hero;
