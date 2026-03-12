import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

/* ─── Shared content rendered in both layers ─── */
const HeroContent = ({ inverted = false }) => (
    <div className="w-full max-w-7xl flex flex-col items-center gap-10 px-6">
        <div className="flex flex-col items-center">
            <span
                className={`text-xs uppercase tracking-[0.4em] font-semibold mb-6 ${
                    inverted ? 'text-black/60' : 'text-[#ff6a00]'
                }`}
            >
                Web Developer & Designer
            </span>

            <h1
                className={`text-fluid-h1 font-black leading-[0.9] tracking-tighter mb-2 select-none ${
                    inverted ? 'text-black' : 'text-white'
                }`}
            >
                DHANUSSH
            </h1>
            <h1
                className={`text-fluid-h1 font-black leading-[0.9] tracking-tighter select-none ${
                    inverted
                        ? 'text-white [-webkit-text-stroke:0] [--webkit-text-fill-color:white]'
                        : 'outline-text'
                }`}
                style={inverted ? { WebkitTextStroke: '0', WebkitTextFillColor: 'white' } : undefined}
            >
                SHREKAR
            </h1>

            <div className="mt-12 max-w-2xl">
                <p
                    className={`text-lg sm:text-xl md:text-2xl font-light leading-relaxed ${
                        inverted ? 'text-black/50' : 'text-white/40'
                    }`}
                >
                    Building in the era of AI. <br />
                    <span className={inverted ? 'text-black font-normal' : 'text-white'}>
                        For AI. By AI.
                    </span>
                </p>
            </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <a
                href="#projects"
                className={`relative px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-[0.1em] transition-all duration-300 inline-flex items-center gap-3 border ${
                    inverted
                        ? 'border-black/20 text-black hover:bg-black hover:text-[#ff6a00]'
                        : 'btn-premium'
                }`}
            >
                Explore Projects
            </a>
            <a
                href="#contact"
                className={`px-8 py-4 transition-colors duration-300 font-medium tracking-wide text-center ${
                    inverted
                        ? 'text-black/50 hover:text-black'
                        : 'text-white/60 hover:text-white'
                }`}
            >
                Let's Talk
            </a>
        </div>
    </div>
);

const Hero = () => {
    const containerRef = useRef(null);
    const maskLayerRef = useRef(null);
    const headingRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);
    const [isHoveringHeading, setIsHoveringHeading] = useState(false);

    /* ─── Scroll-driven parallax ─── */
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    /* ─── Cursor tracking with Framer Motion values ─── */
    const cursorX = useMotionValue(-500);
    const cursorY = useMotionValue(-500);

    // Spring for smooth, high-performance cursor following
    const smoothX = useSpring(cursorX, { stiffness: 500, damping: 35, mass: 0.2 });
    const smoothY = useSpring(cursorY, { stiffness: 500, damping: 35, mass: 0.2 });

    // Mask radius — expands when hovering the heading
    const maskRadius = useSpring(0, { stiffness: 300, damping: 30, mass: 0.5 });

    /* ─── Detect mobile ─── */
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(
                window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768
            );
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    /* ─── Mouse tracking — uses rAF-driven motion values (no React state re-renders) ─── */
    const handleMouseMove = useCallback(
        (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            cursorX.set(e.clientX - rect.left);
            cursorY.set(e.clientY - rect.top);
        },
        [cursorX, cursorY]
    );

    const handleMouseEnter = useCallback(() => {
        maskRadius.set(60);
    }, [maskRadius]);

    const handleMouseLeave = useCallback(() => {
        maskRadius.set(0);
        cursorX.set(-500);
        cursorY.set(-500);
    }, [maskRadius, cursorX, cursorY]);

    /* ─── Heading hover detection (expands mask) ─── */
    useEffect(() => {
        if (isMobile) return;

        const container = containerRef.current;
        if (!container) return;

        const headings = container.querySelectorAll('[data-mask-target]');

        const onEnter = () => {
            setIsHoveringHeading(true);
            maskRadius.set(200);
        };
        const onLeave = () => {
            setIsHoveringHeading(false);
            maskRadius.set(60);
        };

        headings.forEach((el) => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            headings.forEach((el) => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
            });
        };
    }, [isMobile, maskRadius]);

    /* ─── Apply mask via rAF for zero-jitter performance ─── */
    useEffect(() => {
        if (isMobile) return;

        const layer = maskLayerRef.current;
        if (!layer) return;

        let rafId;

        const updateMask = () => {
            const x = smoothX.get();
            const yVal = smoothY.get();
            const r = maskRadius.get();

            layer.style.maskImage = `radial-gradient(circle ${r}px at ${x}px ${yVal}px, black 0%, black 80%, transparent 100%)`;
            layer.style.webkitMaskImage = `radial-gradient(circle ${r}px at ${x}px ${yVal}px, black 0%, black 80%, transparent 100%)`;

            rafId = requestAnimationFrame(updateMask);
        };

        rafId = requestAnimationFrame(updateMask);

        return () => cancelAnimationFrame(rafId);
    }, [isMobile, smoothX, smoothY, maskRadius]);

    /* ─── Memoize particles ─── */
    const particles = useMemo(
        () =>
            Array.from({ length: 5 }, (_, i) => ({
                id: i,
                top: `${15 + i * 18}%`,
                left: `${10 + i * 20}%`,
                duration: 5 + i * 1.5,
            })),
        []
    );

    const titleVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303] text-center"
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            onMouseEnter={!isMobile ? handleMouseEnter : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        >
            {/* ═══ LAYER 1: Normal (bottom) ═══ */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ff6a00]/5 blur-[120px] rounded-full opacity-50" />
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 w-full flex flex-col items-center"
            >
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center w-full"
                >
                    <motion.div variants={itemVariants} className="w-full">
                        {/* Normal content with data-mask-target on headings */}
                        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 px-6">
                            <div className="flex flex-col items-center">
                                <span className="text-xs uppercase tracking-[0.4em] text-[#ff6a00] font-semibold mb-6">
                                    Web Developer & Designer
                                </span>

                                <h1
                                    data-mask-target
                                    className="text-fluid-h1 font-black leading-[0.9] tracking-tighter text-white mb-2 select-none cursor-default"
                                >
                                    DHANUSSH
                                </h1>
                                <h1
                                    data-mask-target
                                    className="text-fluid-h1 font-black leading-[0.9] tracking-tighter outline-text select-none cursor-default"
                                >
                                    SHREKAR
                                </h1>

                                <div className="mt-12 max-w-2xl">
                                    <p className="text-lg sm:text-xl md:text-2xl text-white/40 font-light leading-relaxed">
                                        Building in the era of AI. <br />
                                        <span className="text-white">For AI. By AI.</span>
                                    </p>
                                </div>
                            </div>

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
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ═══ LAYER 2: Inverted / Masked (top) — Desktop only ═══ */}
            {!isMobile && (
                <div
                    ref={maskLayerRef}
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        maskImage: 'radial-gradient(circle 0px at -500px -500px, black 0%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle 0px at -500px -500px, black 0%, transparent 100%)',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                    }}
                    aria-hidden="true"
                >
                    {/* Orange background for the inverted zone */}
                    <div className="absolute inset-0 bg-[#ff6a00]" />

                    {/* Inverted content — identical structure, different colors */}
                    <motion.div
                        style={{ y, opacity, scale }}
                        className="relative w-full min-h-screen flex flex-col items-center justify-center"
                    >
                        <HeroContent inverted />
                    </motion.div>
                </div>
            )}

            {/* ═══ Floating Particles ═══ */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute w-1 h-1 bg-white/10 rounded-full"
                        style={{ top: p.top, left: p.left }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* ═══ Scroll Indicator ═══ */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer z-30"
                onClick={() =>
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }
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
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
