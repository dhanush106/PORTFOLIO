import React from "react";

export default function About() {
    return (
        <section className="bg-[#0a0a0a] text-white py-20 px-6">

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Intro Card */}

                    <div className="glass col-span-1 md:col-span-2 row-span-2 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">

                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full group-hover:bg-orange-500/20 transition-all duration-700"></div>

                        <div>

                            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-8 border-2 border-orange-500/20 p-1">

                                <img
                                    className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn-Cm0pHyLf547MkMVFQj95lEfcbsYWWloHe-8MNP6Og8dcrwDOOhmzId9dNCAVLVDVlI7ZGa8GPX93pXwEbq1p13RU07KUTDP4dqVcLoI4jzymMp6WNR3jaMMBaln0i5MGhR2H0wAJWo75Fo9KlOl-fOgLAn981_IXEucPz0BORStBzaMlbSc5ajsit_fLYY0WZqLHnM5KRjK8wf4vh-KPrY1kqq3dRUAG1u6pl7oYBZ6YDPMbvS-0PnD-QsuidutqnJbzUkVSg"
                                    alt="Developer"
                                />

                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">

                                Building in the era of{" "}
                                <span className="text-orange-500">
                                    AI, for AI, by AI
                                </span>

                            </h1>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">

                                Full-stack engineer specializing in Large Language Models and high-performance web architectures. Crafting seamless digital experiences with a focus on intelligence and scalability.

                            </p>

                        </div>

                        <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">

                            <span className="flex items-center gap-2">

                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Available for projects

                            </span>

                            <span className="w-px h-4 bg-white/10"></span>

                            <span className="flex items-center gap-2">
                                San Francisco, CA
                            </span>

                        </div>

                    </div>


                    {/* GitHub Activity */}

                    <div className="glass col-span-1 md:col-span-2 rounded-2xl p-6 flex flex-col justify-between">

                        <div className="flex items-center justify-between mb-6">

                            <h3 className="font-bold text-lg">
                                GitHub Activity
                            </h3>

                            <span className="text-xs text-gray-500 font-mono">
                                github.com/dev_user
                            </span>

                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">

                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">

                                <p className="text-gray-500 text-xs mb-1">
                                    Commits
                                </p>

                                <p className="text-2xl font-bold text-orange-500">
                                    2.5k+
                                </p>

                            </div>

                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">

                                <p className="text-gray-500 text-xs mb-1">
                                    Repos
                                </p>

                                <p className="text-2xl font-bold text-orange-500">
                                    45+
                                </p>

                            </div>

                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">

                                <p className="text-gray-500 text-xs mb-1">
                                    Stars
                                </p>

                                <p className="text-2xl font-bold text-orange-500">
                                    1.2k
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Projects Built */}

                    <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2">

                        <p className="text-4xl font-bold">
                            48
                        </p>

                        <p className="text-gray-400 uppercase text-xs tracking-widest">
                            Projects Built
                        </p>

                    </div>


                    {/* Hackathons */}

                    <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2">

                        <p className="text-4xl font-bold">
                            12
                        </p>

                        <p className="text-gray-400 uppercase text-xs tracking-widest">
                            Hackathons Won
                        </p>

                    </div>


                    {/* Tech Stack */}

                    <div className="glass col-span-1 md:col-span-2 rounded-2xl p-8">

                        <h3 className="font-bold text-lg mb-6">
                            Tech Stack
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {[
                                "React",
                                "Next.js",
                                "Node.js",
                                "Python",
                                "Tailwind",
                                "Machine Learning"
                            ].map((tech) => (

                                <span
                                    key={tech}
                                    className="px-5 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>


                    {/* Competitive Coding */}

                    <div className="glass col-span-1 md:col-span-2 rounded-2xl p-8">

                        <h3 className="font-bold text-lg mb-6">
                            Competitive Coding
                        </h3>

                        <div className="space-y-4">

                            <div className="flex justify-between">

                                <span>LeetCode</span>

                                <span className="text-orange-500">
                                    450+ solved
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Codeforces</span>

                                <span className="text-orange-500">
                                    1650 rating
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>CodeChef</span>

                                <span className="text-orange-500">
                                    4★
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Social Links */}

                    <div className="glass col-span-1 md:col-span-4 rounded-2xl p-8 flex justify-center gap-6">

                        {["GitHub", "LinkedIn", "Twitter", "Email"].map((link) => (

                            <button
                                key={link}
                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 transition"
                            >
                                {link}
                            </button>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}