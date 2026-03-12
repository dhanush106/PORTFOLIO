import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, MessageCircle, User, Send, ArrowUpRight } from "lucide-react";

const orbitIcons = [
    { icon: Code2, label: "Development" },
    { icon: Sparkles, label: "Design" },
    { icon: MessageCircle, label: "Communication" },
    { icon: User, label: "Collaboration" },
];

const infoCards = [
    { title: "Location", value: "Global Remote / Hyderabad, India" },
    { title: "Response Time", value: "Usually within 24–48 hours" },
    { title: "Status", value: "Available for Work" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    })
};

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Open mailto with pre-filled content
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:sarpoordhanush@gmail.com?subject=${subject}&body=${body}`);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="relative min-h-screen bg-[#030303] text-white px-6 py-20 md:py-28 overflow-hidden">

            {/* Background Glow */}
            <div
                className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#ff6a00]/8 blur-[160px] rounded-full top-20 left-1/2 -translate-x-1/2 pointer-events-none"
                aria-hidden="true"
            />

            {/* Section Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16 md:mb-24"
            >
                <span className="text-[#ff6a00] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                    Get in Touch
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Start a <span className="text-[#ff6a00]">Conversation</span>
                </h2>
                <div className="w-20 h-[3px] bg-[#ff6a00] mx-auto mt-6 rounded-full" />
            </motion.div>

            {/* Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">

                {/* Contact Form */}
                <motion.form
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeInUp}
                    custom={0}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    <div>
                        <div className="bg-white/5 px-4 py-2 rounded-xl inline-block text-sm mb-3 border border-white/8">
                            Hi! What's your name?
                        </div>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Type your name..."
                            aria-label="Your name"
                            className="w-full bg-white/[0.03] border border-white/10 px-5 py-3.5 rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-[#ff6a00]/60 focus:bg-white/[0.05] transition-all duration-300"
                        />
                    </div>

                    <div>
                        <div className="bg-white/5 px-4 py-2 rounded-xl inline-block text-sm mb-3 border border-white/8">
                            Great to meet you! What's your email?
                        </div>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@domain.com"
                            aria-label="Your email"
                            className="w-full bg-white/[0.03] border border-white/10 px-5 py-3.5 rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-[#ff6a00]/60 focus:bg-white/[0.05] transition-all duration-300"
                        />
                    </div>

                    <div>
                        <div className="bg-white/5 px-4 py-2 rounded-xl inline-block text-sm mb-3 border border-white/8">
                            Tell me about your project...
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Describe your vision..."
                            aria-label="Your message"
                            className="w-full bg-white/[0.03] border border-white/10 px-5 py-3.5 rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-[#ff6a00]/60 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#ff6a00] text-black font-semibold shadow-lg shadow-[#ff6a00]/20 hover:shadow-[#ff6a00]/40 hover:bg-[#ff8a33] transition-all duration-300 cursor-pointer"
                    >
                        <Send className="w-4 h-4" />
                        {submitted ? "Message Sent!" : "Send Message"}
                        {!submitted && <ArrowUpRight className="w-4 h-4" />}
                    </motion.button>
                </motion.form>

                {/* Orbit Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeInUp}
                    custom={1}
                    className="flex items-center justify-center"
                >
                    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">

                        {/* Animated Glow Ring */}
                        <motion.div
                            className="absolute -inset-5 rounded-full blur-2xl opacity-15"
                            style={{
                                background: "conic-gradient(from 0deg, #ff6a00, #ff9a3d, #ff6a00)"
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 12,
                                ease: "linear"
                            }}
                        />

                        {/* Orbit Ring */}
                        <div className="absolute inset-0 border border-white/8 rounded-full" />

                        {/* Center Card */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-center backdrop-blur-md">
                                <div className="text-xs text-white/40 uppercase tracking-wider">Status</div>
                                <div className="font-semibold text-white mt-1">Available for Work</div>
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            </div>
                        </div>

                        {/* Orbit Icons */}
                        {orbitIcons.map((item, index) => {
                            const Icon = item.icon;
                            const angle = (index / orbitIcons.length) * 360;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute top-1/2 left-1/2"
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`
                                    }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4 + index * 0.5,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <div
                                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:border-[#ff6a00]/50 hover:bg-[#ff6a00]/15 transition-all duration-300"
                                        title={item.label}
                                    >
                                        <Icon className="w-4.5 h-4.5 text-white/70" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Info Footer */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid sm:grid-cols-3 gap-8 text-sm text-white/50 max-w-6xl mx-auto mt-20 md:mt-24"
            >
                {infoCards.map((card, i) => (
                    <motion.div key={card.title} variants={fadeInUp} custom={i}>
                        <div className="text-white font-semibold mb-2">{card.title}</div>
                        <div>{card.value}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}