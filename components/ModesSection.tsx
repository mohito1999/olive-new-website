import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitMerge, BrainCircuit, Settings } from 'lucide-react';

const ModesSection: React.FC = () => {
    const [activeMode, setActiveMode] = useState<'director' | 'strategist'>('director');
    const [typingText, setTypingText] = useState('');
    const fullText = "I need 50 booked consultations from the 'Webinar Leads' list by Friday.";

    // Typing effect for Strategist Mode
    useEffect(() => {
        if (activeMode === 'strategist') {
            setTypingText('');
            let i = 0;
            const interval = setInterval(() => {
                setTypingText(fullText.slice(0, i + 1));
                i++;
                if (i >= fullText.length) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [activeMode]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row gap-12 lg:h-[600px]">

                {/* Left Col: Controls */}
                <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">Total Visibility & Strategic Alignment</h2>
                        <p className="text-stone-500">You define the rules, we build the engine. Whether you need strict compliance or autonomous optimization, we configure the system to match your goals.</p>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => setActiveMode('director')}
                            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeMode === 'director'
                                ? 'bg-stone-900 border-stone-900 text-white shadow-xl scale-105'
                                : 'bg-white border-stone-200 text-stone-500 hover:bg-stone-50'
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <GitMerge size={20} className={activeMode === 'director' ? 'text-olive-400' : 'text-stone-400'} />
                                <h3 className="font-bold text-lg">Strict Compliance</h3>
                            </div>
                            <p className={`text-sm ${activeMode === 'director' ? 'text-stone-300' : 'text-stone-400'}`}>
                                You define the exact script and flow. We implement it with 100% adherence. Perfect for regulated industries.
                            </p>
                        </button>

                        <button
                            onClick={() => setActiveMode('strategist')}
                            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeMode === 'strategist'
                                ? 'bg-olive-600 border-olive-600 text-white shadow-xl scale-105'
                                : 'bg-white border-stone-200 text-stone-500 hover:bg-stone-50'
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <BrainCircuit size={20} className={activeMode === 'strategist' ? 'text-white' : 'text-stone-400'} />
                                <h3 className="font-bold text-lg">Outcome Optimization</h3>
                            </div>
                            <p className={`text-sm ${activeMode === 'strategist' ? 'text-olive-100' : 'text-stone-400'}`}>
                                You set the target (e.g., "50 meetings"). We optimize the outreach strategy and channel mix to hit it.
                            </p>
                        </button>
                    </div>
                </div>

                {/* Right Col: Animated Visuals */}
                <div className="lg:w-2/3 bg-stone-100 rounded-3xl border border-stone-200 p-2 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

                    <AnimatePresence mode="wait">
                        {activeMode === 'director' ? (
                            <motion.div
                                key="director"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-stone-200 p-6 relative z-10"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Settings size={16} className="text-stone-400" />
                                        <span className="font-bold text-stone-700">Workflow Editor</span>
                                    </div>
                                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Active</div>
                                </div>

                                {/* Nodes */}
                                <div className="flex flex-col items-center space-y-2">
                                    <motion.div className="w-48 p-3 bg-stone-50 border border-stone-200 rounded-lg text-center text-xs font-bold text-stone-600 shadow-sm">
                                        Trigger: New Lead (FB Ads)
                                    </motion.div>
                                    <div className="h-6 w-0.5 bg-stone-300"></div>
                                    <motion.div className="w-48 p-3 bg-white border-2 border-olive-500 rounded-lg text-center text-xs font-bold text-olive-700 shadow-md">
                                        Action: Call Lead
                                    </motion.div>
                                    <div className="h-6 w-0.5 bg-stone-300"></div>
                                    <div className="relative w-full flex justify-center">
                                        <div className="absolute top-0 w-32 h-4 border-t-2 border-l-2 border-r-2 border-stone-300 rounded-t-xl"></div>
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <motion.div className="w-32 p-3 bg-stone-50 border border-stone-200 rounded-lg text-center text-[10px] font-medium text-stone-500">
                                            No Answer: SMS
                                        </motion.div>
                                        <motion.div className="w-32 p-3 bg-stone-50 border border-stone-200 rounded-lg text-center text-[10px] font-medium text-stone-500">
                                            Answered: Qualify
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Cursor Animation */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2"
                                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <div className="w-4 h-4 rounded-full bg-olive-500/50 blur-sm absolute"></div>
                                    <div className="w-4 h-4 rounded-full bg-olive-500 relative z-10 border-2 border-white"></div>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="strategist"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-stone-200 flex flex-col h-[400px] relative z-10 overflow-hidden"
                            >
                                {/* Chat Header */}
                                <div className="bg-olive-600 p-4 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                                        <BrainCircuit size={16} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm">Olive Strategist</div>
                                        <div className="text-olive-100 text-[10px]">AI Planner</div>
                                    </div>
                                </div>

                                {/* Chat Body */}
                                <div className="flex-1 p-4 space-y-4 bg-stone-50">
                                    {/* User Msg */}
                                    <div className="flex justify-end">
                                        <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tr-none text-sm text-stone-700 max-w-[80%] shadow-sm">
                                            {typingText}
                                            {typingText.length < fullText.length && (
                                                <span className="inline-block w-1.5 h-3 bg-stone-400 ml-1 animate-pulse" />
                                            )}
                                        </div>
                                    </div>

                                    {/* AI Processing */}
                                    {typingText.length === fullText.length && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-olive-50 border border-olive-100 p-3 rounded-2xl rounded-tl-none text-sm text-stone-700 max-w-[90%] shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-2 h-2 bg-olive-500 rounded-full animate-pulse"></div>
                                                    <span className="text-xs font-bold text-olive-700">Analyzing 1,200 Leads...</span>
                                                </div>
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    transition={{ delay: 1.5, duration: 0.5 }}
                                                >
                                                    <p className="mb-2 text-xs font-semibold">Suggested Strategy:</p>
                                                    <ul className="list-disc list-inside text-xs space-y-2 text-stone-600">
                                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>Filter: "Attended Webinar &gt; 50%"</motion.li>
                                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>Action: Call (Immediate)</motion.li>
                                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>Fallback: SMS + Email Drip</motion.li>
                                                    </ul>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Input Area */}
                                <div className="p-3 bg-white border-t border-stone-100">
                                    <div className="h-10 bg-stone-100 rounded-lg w-full flex items-center px-3 text-xs text-stone-400">Type a goal...</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default ModesSection;