import { useRef, useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "SemSync - AI Based Semester planner",
        category: "Education, SaaS",
        year: "2025",
        github: "https://github.com/dhanush106/SemSync",
        live: "https://semsync-7pz3.onrender.com/",
        description:
            "A Web Application that helps students to plan their semester based on their interests and skills with AI And a SAAS Based Dashboard",
        tech: ["React", "Express", "Node", "MongoDB", "Ollama", "Tailwindcss", "Framer Motion", "shadcn/ui", "Recharts"],
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "AI Resume Analyzer",
        category: "AI, SaaS",
        year: "2025",
        github: "https://github.com/dhanush106/Ai-Resume-Analyzer",
        live: "https://ai-resume-analyzer-two-zeta.vercel.app/",
        description:
            "Serverless AI Based Resume Analyzer that helps students to analyze their resume and get suggestions to improve it.",
        tech: ["React.js", "Tailwindcss", "Puter.js"],
        image:
            "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop"
    },
    // {
    //     id: 3,
    //     title: "Horizon Marketplace",
    //     category: "E-Commerce & AR",
    //     year: "2025",
    //     github: "",
    //     live: "",
    //     description:
    //         "An immersive shopping experience featuring headless commerce architecture and augmented reality previews.",
    //     tech: ["React", "Three.js", "PostgreSQL", "Tailwind"],
    //     image:
    //         "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?q=80&w=2010&auto=format&fit=crop"
    // }
];

function ProjectCard({ project }) {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useSpring(useTransform(y, [-200, 200], [6, -6]))
    const rotateY = useSpring(useTransform(x, [-200, 200], [-6, 6]))

    const handleMouseMove = (e) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-6xl mx-auto rounded-[28px]
      bg-[#0a0a0a] border border-white/10
      overflow-hidden shadow-[0_0_60px_rgba(255,106,0,0.12)] group"
        >

            {/* HEADER — always visible when stacked */}

            <div className="flex  items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0b0b0b]">

                <h3 className="text-lg font-semibold text-white">
                    {project.title}
                </h3>

                <div className="flex gap-3">

                    <a
                        href={project.github}
                        target="_blank"
                        className="text-lg px-4 py-1 rounded-md border border-white/20 text-white hover:bg-white/10 hover:shadow-lg hover:shadow-[#ff6a00]"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.live}
                        target="_blank"
                        className="text-lg px-4 py-1 rounded-full bg-[#ff6a00] text-black font-semibold hover:shadow-lg hover:shadow-amber-600"
                    >
                        Live Demo
                    </a>

                </div>

            </div>


            {/* BODY */}

            <div className="grid lg:grid-cols-2 gap-12 p-10 min-h-[460px]">

                {/* LEFT */}

                <div>

                    <div className="flex items-center gap-4 mb-6">

                        <span className="text-[#ff6a00] text-sm font-bold tracking-widest">
                            {project.year}
                        </span>

                        <span className="text-white/40 text-xs uppercase">
                            {project.category}
                        </span>

                    </div>

                    <h3 className="text-4xl font-bold text-white mb-6">
                        {project.title}
                    </h3>

                    <p className="text-white/40 leading-relaxed mb-8 max-w-md">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">

                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-white/60"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                    {/* <div className="flex gap-10">

                        {project.metrics.map((m, i) => (
                            <div key={i}>
                                <div className="text-2xl flex font-bold text-white">{m.value}</div>
                                <div className="text-white/20 text-[10px] uppercase">
                                    {m.label}
                                </div>
                            </div>
                        ))}

                    </div> */}

                </div>


                {/* IMAGE */}

                <div className="relative rounded-[20px] overflow-hidden sm:bg-[url(project.image)] bg-white/5">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                </div>

            </div>

        </motion.div>
    )
}

export default function Projects() {
    const [stackCompleted, setStackCompleted] = useState(false);

    useEffect(() => {
        if (!stackCompleted) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [stackCompleted]);

    return (
        <section id="projects" className="bg-[#030303]">
            <div className="container-wide">
                <div className="flex flex-col items-center text-center mb-3">
                    <span className="text-[#ff6a00] text-xs font-bold tracking-[0.4em] uppercase mb-6">
                        Selected Project
                    </span>

                    <h2 className="text-6xl text-white font-bold tracking-tight leading-tight">
                        Proof of Concept
                        <br />
                        <span className="text-white/10">at Scale.</span>
                    </h2>
                </div>

                <ScrollStack
                    useWindowScroll
                    itemDistance={200}
                    itemStackDistance={20}
                    itemScale={0.03}
                    baseScale={0.92}
                    rotationAmount={0}
                    blurAmount={0}
                    stackPosition="25%"
                    scaleEndPosition="12%"
                >
                    {projects.map((project) => (
                        <ScrollStackItem key={project.id}>
                            <ProjectCard project={project} />
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </section>
    );
}