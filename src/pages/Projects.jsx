import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SemSync — AI Semester Planner",
        category: "Education · SaaS",
        year: "2025",
        github: "https://github.com/dhanush106/SemSync",
        live: "https://semsync-7pz3.onrender.com/",
        description:
            "A full-stack web application that helps students intelligently plan their semester with AI-driven course recommendations and a SaaS analytics dashboard.",
        tech: ["React", "Express", "Node", "MongoDB", "Ollama", "Tailwind", "Framer Motion", "shadcn/ui", "Recharts"],
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "AI Resume Analyzer",
        category: "AI · Serverless",
        year: "2025",
        github: "https://github.com/dhanush106/Ai-Resume-Analyzer",
        live: "https://ai-resume-analyzer-two-zeta.vercel.app/",
        description:
            "A serverless AI-powered resume analyzer that provides actionable feedback and improvement suggestions — runs entirely in the browser.",
        tech: ["React.js", "Tailwind", "Puter.js"],
        image:
            "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop"
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    })
};

function ProjectCard({ project, index }) {
    const cardRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-200, 200], [4, -4]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-200, 200], [-4, 4]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.article
            ref={cardRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            custom={index}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full rounded-[28px] bg-[#0a0a0a] border border-white/8 overflow-hidden group"
        >
            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-white/8 bg-[#080808] gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-[#ff6a00] text-xs font-bold tracking-widest">{project.year}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-white/40 text-xs uppercase tracking-wider">{project.category}</span>
                </div>

                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/15 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg bg-[#ff6a00] text-black font-semibold hover:bg-[#ff8a33] transition-all duration-300"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                    </a>
                </div>
            </div>

            {/* Body */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10">
                {/* Left — Info */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-white/40 leading-relaxed mb-8 max-w-md text-sm sm:text-base">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 text-[11px] border border-white/10 rounded-full text-white/60 hover:border-[#ff6a00]/40 hover:text-white/80 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right — Image */}
                <div className="relative rounded-2xl overflow-hidden bg-white/5 aspect-video lg:aspect-auto lg:min-h-[320px]">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-[28px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(255,106,0,0.04)]" />
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="bg-[#030303] py-20 md:py-28 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <span className="text-[#ff6a00] text-xs font-bold tracking-[0.4em] uppercase mb-6">
                        Selected Work
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-tight">
                        Proof of Concept
                        <br />
                        <span className="text-white/10">at Scale.</span>
                    </h2>
                </motion.div>

                {/* Project Cards */}
                <div className="flex flex-col gap-10">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}