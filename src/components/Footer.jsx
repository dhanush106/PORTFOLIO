import { motion } from 'framer-motion';
import links from '../utils/link';

const socialLinks = [
    { label: 'GitHub', href: links.github },
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'LeetCode', href: links.leetcode },
];

const Footer = () => {
    return (
        <footer className="py-16 md:py-20 bg-[#030303] border-t border-white/5">
            <div className="container-wide px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2 text-center md:text-left"
                    >
                        <span className="text-white font-bold tracking-tighter text-xl">
                            DHANUSSH <span className="text-[#ff6a00]">SHREKAR</span>
                        </span>
                        <p className="text-white/20 text-xs uppercase tracking-[0.3em]">
                            &copy; {new Date().getFullYear()} — Building the Future.
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <nav aria-label="Social links" className="flex gap-10">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold tracking-widest text-white/40 hover:text-[#ff6a00] transition-colors duration-300 uppercase"
                            >
                                {social.label}
                            </a>
                        ))}
                    </nav>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[10px] text-white/20 uppercase tracking-[0.5em]"
                    >
                        Minimalist Portfolio 2026
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
