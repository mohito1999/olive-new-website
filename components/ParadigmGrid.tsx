import React from 'react';
import { Clock, Users, Zap, AlertTriangle, TrendingUp, XCircle, CheckCircle2, Infinity as InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ParadigmGrid: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">Why Leads Drop Off</h2>
                <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                    Most teams respond too slowly. Most tools don’t adapt. The result is lost intent.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Card 1: The Speed Problem */}
                <div className="bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow group h-[500px]">
                    <div className="p-8 pb-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-100 flex items-center justify-center mb-6 text-red-600 shadow-sm">
                            <Clock size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Leads Lose Value Quickly</h3>
                        <p className="text-stone-500 leading-relaxed">
                            Most inbound leads expect a fast reply. Even a short delay causes intent to drop and conversion by 8-10x.
                        </p>
                    </div>
                    <div className="mt-8 flex-1 bg-white border-t border-stone-100 p-6 relative overflow-hidden flex items-center justify-center">
                        {/* Visual: Decay Graph */}
                        <div className="relative w-full h-32 flex items-end gap-2 px-4">
                            {[100, 80, 40, 20, 10, 5].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className={`flex-1 rounded-t-md ${i < 2 ? 'bg-green-500' : 'bg-red-400'}`}
                                />
                            ))}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-200"></div>
                            <div className="absolute top-4 right-4 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                                -90% Conversion
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: The Volume Problem */}
                <div className="bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow group h-[500px]">
                    <div className="p-8 pb-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-100 flex items-center justify-center mb-6 text-orange-600 shadow-sm">
                            <Users size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Humans Can't Scale</h3>
                        <p className="text-stone-500 leading-relaxed">
                            One SDR can handle 50 calls/day. Any more and they burn out, miss follow-ups, and lose revenue.
                        </p>
                    </div>
                    <div className="mt-8 flex-1 bg-white border-t border-stone-100 p-6 relative overflow-hidden flex flex-col items-center justify-center">
                        {/* Visual: Overwhelmed Inbox */}
                        <div className="w-full max-w-[240px] space-y-2">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-red-50 border border-red-100 p-3 rounded-lg flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2 text-red-800 text-xs font-bold">
                                    <XCircle size={14} /> Missed Call
                                </div>
                                <span className="text-[10px] text-red-400">2m ago</span>
                            </motion.div>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="bg-red-50 border border-red-100 p-3 rounded-lg flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2 text-red-800 text-xs font-bold">
                                    <XCircle size={14} /> Missed Call
                                </div>
                                <span className="text-[10px] text-red-400">5m ago</span>
                            </motion.div>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-red-50 border border-red-100 p-3 rounded-lg flex items-center justify-between opacity-60"
                            >
                                <div className="flex items-center gap-2 text-red-800 text-xs font-bold">
                                    <XCircle size={14} /> Missed Call
                                </div>
                                <span className="text-[10px] text-red-400">12m ago</span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Card 3: The Solution */}
                <div className="bg-stone-900 rounded-3xl border border-stone-800 overflow-hidden flex flex-col shadow-2xl h-[500px] relative">
                    <div className="p-8 pb-0 relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-olive-500/10 to-olive-500/20 rounded-2xl border border-olive-500/20 flex items-center justify-center mb-6 text-olive-400 shadow-sm">
                            <InfinityIcon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Olive is Infinite</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Instant speed-to-lead. Infinite follow-up. Zero burnout. Olive scales elastically with your lead volume.
                        </p>
                    </div>
                    <div className="mt-8 flex-1 bg-stone-950/50 border-t border-stone-800 p-6 relative overflow-hidden flex flex-col items-center justify-center">
                        {/* Visual: Infinite Success */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-olive-900/20 via-stone-950 to-stone-950"></div>

                        <div className="relative z-10 text-center">
                            <div className="h-24 w-48 mx-auto mb-4">
                                <svg viewBox="0 0 140 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(132,204,22,0.3)]">
                                    <defs>
                                        <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#84cc16" />
                                            <stop offset="100%" stopColor="#ecfccb" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        d="M30,50 C30,75 55,75 70,50 C85,25 110,25 110,50 C110,75 85,75 70,50 C55,25 30,25 30,50 Z"
                                        fill="none"
                                        stroke="url(#infinityGradient)"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        transition={{
                                            pathLength: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
                                            opacity: { duration: 0.5 }
                                        }}
                                    />
                                </svg>
                            </div>
                            <div className="text-olive-500 text-sm font-bold uppercase tracking-widest mb-6">Capacity</div>

                            <div className="flex gap-2 justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="w-2 h-2 bg-olive-500 rounded-full"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                                    className="w-2 h-2 bg-olive-500 rounded-full"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                                    className="w-2 h-2 bg-olive-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ParadigmGrid;