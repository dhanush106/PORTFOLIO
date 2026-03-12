import { motion } from "framer-motion";
import { Code2, Sparkles, MessageCircle, User } from "lucide-react";

export default function Contact() {

    const orbitIcons = [
        { icon: Code2 },
        { icon: Sparkles },
        { icon: MessageCircle },
        { icon: User }
    ];

    return (
        <section className="relative min-h-screen bg-[#030303] text-white px-6 py-28 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[600px] h-[600px] bg-orange-500/10 blur-[160px] rounded-full top-20 left-1/2 -translate-x-1/2 pointer-events-none" />

            {/* HERO */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
            >
                <h1 className="text-5xl md:text-6xl font-bold">
                    Start a <span className="text-orange-500">Conversation</span>
                </h1>

                <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* GRID */}
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                {/* CHAT FORM */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="space-y-10"
                >

                    <div>
                        <div className="bg-white/5 px-4 py-2 rounded-xl inline-block text-sm mb-3 border border-white/10">
                            Hi! What's your name?
                        </div>

                        <input
                            placeholder="Type your name..."
                            className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>

                    <div>
                        <div className="bg-white/5 px-4 py-2 rounded-xl inline-block text-sm mb-3 border border-white/10">
                            Great to meet you! What's your email?
                        </div>

                        <input
                            placeholder="example@domain.com"
                            className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>

                    <div>
                        <div className="bg-white/5 px-4 py-2 rounded-xl inline-block text-sm mb-3 border border-white/10">
                            Tell me about your project...
                        </div>

                        <textarea
                            rows="4"
                            placeholder="Describe your vision..."
                            className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-orange-500 text-black font-semibold shadow-lg shadow-orange-500/30"
                    >
                        Send Message →
                    </motion.button>

                </motion.div>

                {/* ORBIT SECTION */}
                <div className="relative w-[320px] h-[320px] z-100 flex items-center justify-center mx-auto">

                    {/* Animated Glow Ring */}
                    <motion.div
                        className="absolute w-[360px] h-[360px] rounded-full blur-2xl opacity-20"
                        style={{
                            background:
                                "conic-gradient(from 0deg, #ff6a00, #ff9a3d, #ff6a00)"
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 12,
                            ease: "linear"
                        }}
                    />

                    {/* Orbit Ring */}
                    <div className="absolute w-full h-full border border-white/10 rounded-full" />

                    {/* Center Card */}
                    <div className="relative z-10 bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-center backdrop-blur-md">
                        <div className="text-xs text-white/40 uppercase">Status</div>
                        <div className="font-semibold">Available for Work</div>
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>

                    {/* ORBIT ICONS */}
                    {orbitIcons.map((item, index) => {
                        const Icon = item.icon;
                        const angle = (index / orbitIcons.length) * 360;

                        return (
                            <motion.div
                                key={index}
                                className="absolute"
                                style={{
                                    transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`
                                }}
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut"
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:border-orange-500 hover:bg-orange-500/20 transition"
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* FOOTER */}
            <div className="grid md:grid-cols-3 gap-12 text-sm text-white/60 max-w-6xl mx-auto mt-24">

                <div>
                    <div className="text-white font-semibold mb-2">Location</div>
                    Global Remote / Hyderabad, India
                </div>

                <div>
                    <div className="text-white font-semibold mb-2">Response Time</div>
                    Usually within 24-48 hours
                </div>

                <div>
                    <div className="text-white font-semibold mb-2">Local Time</div>
                    {new Date().toLocaleTimeString()}
                </div>

            </div>

        </section>
    );
}