import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    // Memoize particle positions so they don't change on re-render
    const particles = useMemo(() =>
        Array.from({ length: 5 }, (_, i) => ({
            id: i,
            top: `${15 + i * 18}%`,
            left: `${10 + i * 20}%`,
            duration: 5 + i * 1.5,
        })), []
    );

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
        >
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ff6a00]/5 blur-[120px] rounded-full opacity-50" />
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
                    <h1 className="text-fluid-h1 font-black leading-[0.9] tracking-tighter outline-text">
                        SHREKAR
                    </h1>

                    <motion.div
                        variants={itemVariants}
                        className="mt-12 max-w-2xl"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-white/40 font-light leading-relaxed">
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
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
                >
                    <a href="#projects" className="btn-premium">
                        Explore Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 text-white/60 hover:text-white transition-colors duration-300 font-medium tracking-wide text-center"
                    >
                        Let's Talk
                    </a>
                </motion.div>
            </motion.div>

            {/* Floating Particles (Memoized positions) */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute w-1 h-1 bg-white/10 rounded-full"
                        style={{ top: p.top, left: p.left }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                role="button"
                tabIndex={0}
                aria-label="Scroll to About section"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 group-hover:text-white/60 transition-colors">
                    Scroll
                </span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-[#ff6a00]"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
