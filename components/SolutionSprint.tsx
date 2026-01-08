import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const SolutionSprint: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-stone-900 w-full relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-olive-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-stone-800/50 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
                    <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                        We don't just hand you a login. We embed ourselves in your team, build the tech, and guarantee performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-stone-800 via-olive-900 to-stone-800 z-0"></div>

                    {/* Step 1: Deep Embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 bg-stone-800 rounded-2xl border border-stone-700 flex items-center justify-center mb-8 shadow-xl relative group">
                            <div className="absolute inset-0 bg-olive-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Search size={32} className="text-olive-400" />
                            <div className="absolute -bottom-4 bg-stone-900 text-stone-500 text-xs font-mono py-1 px-3 rounded-full border border-stone-800">
                                WEEK 1-2
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Solution Sprint</h3>
                        <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                            We embed deeply in your company to audit your process. We map every touchpoint and design a bespoke AI orchestration layer.
                        </p>
                    </motion.div>

                    {/* Step 2: Orchestration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative z-10 flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 bg-stone-800 rounded-2xl border border-olive-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(132,204,22,0.1)] relative group">
                            <div className="absolute inset-0 bg-olive-500/10 rounded-2xl"></div>
                            <Settings size={32} className="text-olive-400 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute -bottom-4 bg-olive-900/50 text-olive-300 text-xs font-mono py-1 px-3 rounded-full border border-olive-500/50">
                                WEEK 3-8
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Orchestrate & Optimize</h3>
                        <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                            We build proprietary tooling and run the system for you. We continuously optimize against benchmarks until we hit target KPIs.
                        </p>
                    </motion.div>

                    {/* Step 3: Scale */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative z-10 flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 bg-stone-800 rounded-2xl border border-stone-700 flex items-center justify-center mb-8 shadow-xl relative group">
                            <div className="absolute inset-0 bg-olive-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <TrendingUp size={32} className="text-olive-400" />
                            <div className="absolute -bottom-4 bg-stone-900 text-stone-500 text-xs font-mono py-1 px-3 rounded-full border border-stone-800">
                                ONGOING
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Enterprise Scale</h3>
                        <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                            Once value is proven, we expand the use case across your organization, allowing every rep to handle 3x volume.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-20 text-center">
                    <a href="https://cal.com/mohitatneurix/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-olive-400 hover:text-olive-300 font-semibold transition-colors">
                        Start your Solution Sprint <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SolutionSprint;
