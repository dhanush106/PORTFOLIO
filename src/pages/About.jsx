import { motion } from "framer-motion";
import links from "../utils/link";
import { Github, Linkedin, Mail } from "lucide-react";

const skills = [
    "React", "Context API", "Zustand", "Typescript", "Next.js",
    "Node.js", "Express.js", "MongoDB", "n8n", "Tailwind",
    "Framer Motion", "Machine Learning", "Generative AI"
];

const stats = [
    { value: "120", label: "Commits" },
    { value: "29", label: "Repos" },
    { value: "2", label: "Open Source" },
];

const codingPlatforms = [
    { name: "LeetCode", href: links.leetcode, stat: "450+ solved" },
    { name: "HackerRank", href: links.hackerrank, stat: "5★ problem solver" },
];

const socials = [
    { icon: Github, href: links.github, label: "GitHub" },
    { icon: Linkedin, href: links.linkedin, label: "LinkedIn" },
    { icon: Mail, href: "mailto:sarpoordhanush@gmail.com", label: "Email" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
};

/* Reusable skill pill for the marquee rows */
const SkillPill = ({ tech }) => (
    <span className="whitespace-nowrap px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/80 hover:border-[#ff6a00]/50 hover:bg-[#ff6a00]/10 transition-all duration-300 select-none">
        {tech}
    </span>
);

export default function About() {
    return (
        <section id="about" className="bg-[#0a0a0a] text-white py-20 md:py-28 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="flex flex-col items-center text-center mb-14"
                >
                    <span className="text-[#ff6a00] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Who I Am
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* ── Intro Card ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        custom={0}
                        className="glass sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff6a00]/8 blur-[100px] rounded-full group-hover:bg-[#ff6a00]/15 transition-all duration-700" />

                        <div>
                            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-8 border-2 border-[#ff6a00]/20 p-1">
                                <img
                                    className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn-Cm0pHyLf547MkMVFQj95lEfcbsYWWloHe-8MNP6Og8dcrwDOOhmzId9dNCAVLVDVlI7ZGa8GPX93pXwEbq1p13RU07KUTDP4dqVcLoI4jzymMp6WNR3jaMMBaln0i5MGhR2H0wAJWo75Fo9KlOl-fOgLAn981_IXEucPz0BORStBzaMlbSc5ajsit_fLYY0WZqLHnM5KRjK8wf4vh-KPrY1kqq3dRUAG1u6pl7oYBZ6YDPMbvS-0PnD-QsuidutqnJbzUkVSg"
                                    alt="Dhanussh Shrekar — Developer"
                                    loading="lazy"
                                    width="80"
                                    height="80"
                                />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                                Building in the era of{" "}
                                <span className="text-[#ff6a00]">AI, for AI, by AI</span>
                            </h3>

                            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                                Full-stack engineer specializing in Large Language Models and
                                high-performance web architectures. Crafting seamless digital
                                experiences with a focus on intelligence and scalability.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-sm text-white/40 font-medium flex-wrap">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Available for projects
                            </span>
                            <span className="hidden sm:block w-px h-4 bg-white/10" />
                            <span>Vijayawada, Andhra Pradesh</span>
                        </div>
                    </motion.div>

                    {/* ── GitHub Activity ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        custom={1}
                        className="glass sm:col-span-2 rounded-2xl p-6 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                            <h3 className="font-bold text-lg">GitHub Activity</h3>
                            <a
                                href={links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-white/40 font-mono hover:text-[#ff6a00] transition-colors"
                            >
                                github.com/dhanush106
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((s) => (
                                <div key={s.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                    <p className="text-white/40 text-xs mb-1">{s.label}</p>
                                    <p className="text-2xl font-bold text-[#ff6a00]">{s.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Projects Built ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        custom={2}
                        className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2"
                    >
                        <p className="text-4xl font-bold">12</p>
                        <p className="text-white/40 uppercase text-xs tracking-widest">Projects Built</p>
                    </motion.div>

                    {/* ── Hackathons ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        custom={3}
                        className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2"
                    >
                        <p className="text-4xl font-bold">4</p>
                        <p className="text-white/40 uppercase text-xs tracking-widest">Hackathons</p>
                    </motion.div>

                    {/* ── Tech Stack Marquee ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        custom={4}
                        className="glass sm:col-span-2 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group"
                    >
                        <h3 className="font-bold text-lg mb-4">Tech Stack</h3>

                        <div className="flex flex-col gap-3">
                            {/* Row 1 — scroll left */}
                            <div className="overflow-hidden">
                                <div className="flex gap-3 animate-scroll-left group-hover:[animation-play-state:paused] w-max">
                                    {[...skills, ...skills].map((tech, i) => (
                                        <SkillPill key={`r1-${i}`} tech={tech} />
                                    ))}
                                </div>
                            </div>

                            {/* Row 2 — scroll right */}
                            <div className="overflow-hidden">
                                <div className="flex gap-3 animate-scroll-right group-hover:[animation-play-state:paused] w-max">
                                    {[...skills, ...skills].map((tech, i) => (
                                        <SkillPill key={`r2-${i}`} tech={tech} />
                                    ))}
                                </div>
                            </div>

                            {/* Row 3 — scroll left */}
                            <div className="overflow-hidden">
                                <div className="flex gap-3 animate-scroll-left group-hover:[animation-play-state:paused] w-max">
                                    {[...skills, ...skills].map((tech, i) => (
                                        <SkillPill key={`r3-${i}`} tech={tech} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Edge fades */}
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
                    </motion.div>

                    {/* ── Competitive Coding ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        custom={5}
                        className="glass sm:col-span-2 rounded-2xl p-8"
                    >
                        <h3 className="font-bold text-lg mb-6">Competitive Coding</h3>
                        <div className="space-y-4">
                            {codingPlatforms.map((p) => (
                                <div key={p.name} className="flex justify-between items-center">
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        {p.name}
                                    </a>
                                    <span className="text-[#ff6a00] text-sm font-medium">{p.stat}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Social Links Bar ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeInUp}
                        custom={6}
                        className="glass sm:col-span-2 lg:col-span-4 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
                            <p className="text-sm text-white/40 mt-1">
                                Available for innovative projects and collaborations.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target={s.label !== "Email" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff6a00]/10 hover:border-[#ff6a00]/40 transition-all duration-300"
                                    >
                                        <Icon className="w-5 h-5 text-white/60 group-hover:text-[#ff6a00] transition-colors" />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}