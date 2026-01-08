import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, MoreHorizontal } from 'lucide-react';

const TimelineSection: React.FC = () => {
    return (
        <section className="py-32 px-6 bg-stone-950 w-full overflow-hidden text-white relative">
            {/* Background Grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        We Orchestrate The Entire Journey
                    </h2>
                    <p className="text-lg text-stone-400 max-w-xl mx-auto">
                        From the first click to the booked meeting, we build the custom integrations and logic to drive conversion.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Glowing Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-stone-800 -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            className="w-full h-[30%] bg-gradient-to-b from-transparent via-olive-500 to-transparent absolute top-0"
                            animate={{ top: ['-30%', '130%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <div className="space-y-24">

                        {/* Step 1: Inbound Lead (Meta/Facebook Visual) */}
                        <div className="relative flex items-center justify-center w-full">
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-stone-950 border-2 border-stone-600 z-10"></div>

                            <div className="w-1/2 pr-12 text-right hidden md:block">
                                <h3 className="text-xl font-bold text-white mb-1">Inbound Lead</h3>
                                <p className="text-stone-400 text-sm">T-0: Facebook/Meta Lead Ad</p>
                            </div>

                            <div className="w-full pl-20 md:w-1/2 md:pl-12">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-stone-900 rounded-xl p-4 border border-stone-800 shadow-2xl max-w-xs"
                                >
                                    <div className="flex items-center gap-3 mb-3 border-b border-stone-800 pb-3">
                                        {/* Facebook/Meta Blue */}
                                        <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center text-white font-bold text-xl pb-1">f</div>
                                        <div className="text-left">
                                            <div className="text-xs font-bold text-white">Lead Form: Loan Campaign</div>
                                            <div className="text-[10px] text-stone-400">Source: FB Ads Manager</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center text-[10px] text-stone-500">
                                            <span>Name</span>
                                            <span className="text-stone-300">Arjun M</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] text-stone-500">
                                            <span>Interest</span>
                                            <span className="text-stone-300">Personal Loan</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Step 2: Voice Call (Phone UI Visual) */}
                        <div className="relative flex items-center justify-center w-full">
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-stone-950 border-2 border-olive-500 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

                            <div className="w-full pl-20 flex justify-start md:w-1/2 md:pr-12 md:pl-0 md:justify-end">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden w-64"
                                >
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mb-4 border border-stone-700 relative">
                                            <div className="absolute inset-0 rounded-full border border-olive-500/30 animate-ping"></div>
                                            <Phone size={24} className="text-olive-500" />
                                        </div>
                                        <div className="text-white font-bold text-lg mb-1">Lead: Arjun</div>
                                        <div className="text-stone-400 text-xs mb-1">Personal Loan</div>
                                        <div className="text-olive-400 text-sm font-mono mb-4">00:12</div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-1 bg-olive-500 rounded-full h-3 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-stone-950 p-3 flex justify-around border-t border-stone-800">
                                        <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-white"><MoreHorizontal size={14} /></div>
                                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white"><Phone size={14} className="rotate-[135deg]" /></div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="w-1/2 pl-12 hidden md:block">
                                <h3 className="text-xl font-bold text-white mb-1">Instant Voice Outreach</h3>
                                <p className="text-stone-400 text-sm">T+12s: AI Calls Lead</p>
                            </div>
                        </div>

                        {/* Step 3: SMS Nurture (iMessage Visual) */}
                        <div className="relative flex items-center justify-center w-full">
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-stone-950 border-2 border-stone-600 z-10"></div>

                            <div className="w-1/2 pr-12 text-right hidden md:block">
                                <h3 className="text-xl font-bold text-white mb-1">WhatsApp Nurture</h3>
                                <p className="text-stone-400 text-sm">T+2h: No Answer Follow-up</p>
                            </div>

                            <div className="w-full pl-20 md:w-1/2 md:pl-12">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="max-w-xs"
                                >
                                    <div className="bg-[#2a2a2a] text-stone-200 p-3 rounded-2xl rounded-bl-none text-sm mb-2 w-fit">
                                        Hi Arjun, saw your interest in securing a personal loan. Still interested?
                                    </div>
                                    <div className="text-[10px] text-stone-500 font-medium pl-1">WhatsApp • Delivered</div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Step 4: Success (Notification Visual) */}
                        <div className="relative flex flex-col md:items-center justify-center w-full pt-8 pl-0 md:pl-0">
                            <div className="absolute left-8 md:static md:left-auto top-8 md:top-auto -translate-x-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-olive-500 flex items-center justify-center text-white relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                                <CheckCircle2 size={18} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-8 ml-16 md:ml-0 bg-white text-stone-900 rounded-xl p-4 shadow-2xl flex items-center gap-4 w-full max-w-xs md:w-72"
                            >
                                <div className="w-15 h-15 bg-olive-100 rounded-full flex items-center justify-center text-olive-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Transferring Lead</div>
                                    <div className="text-xs text-stone-500">Arjun is ready on Line 1</div>
                                </div>
                                <div className="ml-auto">
                                    <button className="bg-stone-900 text-white text-xs px-3 py-1.5 rounded-lg">Pick Up</button>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;