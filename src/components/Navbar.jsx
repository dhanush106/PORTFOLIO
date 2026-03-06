import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4 backdrop-blur-xl bg-white/10 border-b border-white/5' : 'py-8 bg-transparent'
                    }`}
            >
                <div className="container-wide flex items-center justify-between px-6 md:px-12">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => scrollTo(e, '#home')}
                        className="text-lg font-heading font-black tracking-tighter text-white group"
                    >
                        DHANUSSH <span className="text-[#ff6a00]">SHREKAR</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollTo(e, link.href)}
                                className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group nav"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ff6a00] transition-all duration-500 group-hover:width-full" />
                            </a>
                        ))}
                        <a
                            href="mailto:dhanusshsrekar@gmail.com"
                            className="btn-premium py-2 px-8 text-xs"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden relative z-[101] flex flex-col gap-1.5 p-2"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-[1.5px] bg-white"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-[1.5px] bg-white"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-[1.5px] bg-white"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0, }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[99] bg-[#030303] flex flex-col items-center justify-center p-8 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-10">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => scrollTo(e, link.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                                    className="text-4xl font-heading font-bold text-white tracking-tighter"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                href="mailto:dhanusshsrekar@gmail.com"
                                className="btn-premium mt-10"
                            >
                                Hire Me
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
