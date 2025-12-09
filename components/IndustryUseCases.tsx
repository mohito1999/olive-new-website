import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, GraduationCap, Building2, ShieldCheck, Phone, MessageCircle, Calendar, CheckCircle2, ArrowRight, Clock, FileText, LayoutDashboard, Users, PieChart, Settings, Bell, Database, Filter, Send, CreditCard, UserCheck, MousePointerClick } from 'lucide-react';

const IndustryUseCases: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const industries = [
        {
            id: 'fintech',
            icon: Landmark,
            title: 'Fintech',
            desc: 'Lending & Banking',
        },
        {
            id: 'edtech',
            icon: GraduationCap,
            title: 'EdTech',
            desc: 'Courses & Training',
        },
        {
            id: 'realestate',
            icon: Building2,
            title: 'Real Estate',
            desc: 'Agencies & Developers',
        },
        {
            id: 'insurance',
            icon: ShieldCheck,
            title: 'Insurance',
            desc: 'Carriers & Brokers',
        }
    ];

    return (
        <section className="py-32 px-6 w-full bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-100 via-white to-white opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
                        Built for Your Industry
                    </h2>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                        Olive adapts to your specific workflows, whether it's a quick callback or a multi-day nurture sequence.
                    </p>
                </div>

                {/* Horizontal Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {industries.map((ind, idx) => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveTab(idx)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${activeTab === idx
                                ? 'bg-stone-900 text-white border-stone-900 shadow-xl scale-105'
                                : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                                }`}
                        >
                            <ind.icon size={18} className={activeTab === idx ? 'text-olive-400' : 'text-stone-400'} />
                            <span className="font-semibold text-sm">{ind.title}</span>
                        </button>
                    ))}
                </div>

                {/* Cinematic Dashboard Visual */}
                <div className="relative w-full max-w-6xl mx-auto min-h-[600px] md:min-h-0 md:aspect-[21/9] lg:aspect-[2/1] bg-stone-950 rounded-3xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col">

                    {/* Window Controls */}
                    <div className="h-10 border-b border-stone-800 bg-stone-900/50 flex items-center px-4 gap-2 z-20 relative">
                        <div className="w-3 h-3 rounded-full bg-stone-700/50"></div>
                        <div className="w-3 h-3 rounded-full bg-stone-700/50"></div>
                        <div className="w-3 h-3 rounded-full bg-stone-700/50"></div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 relative flex overflow-hidden bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
                        <div className="absolute inset-0 bg-stone-950/90"></div>

                        {/* Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        <div className="relative z-10 w-full h-full flex items-center justify-center p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                {activeTab === 0 && <FintechDashboard key="fintech" />}
                                {activeTab === 1 && <EdtechDashboard key="edtech" />}
                                {activeTab === 2 && <RealEstateDashboard key="realestate" />}
                                {activeTab === 3 && <InsuranceDashboard key="insurance" />}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

// --- Helper Components ---

const Node = ({ icon: Icon, label, subLabel, active = false, delay = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className={`flex flex-col items-center gap-3 relative z-10 ${active ? 'opacity-100' : 'opacity-50 grayscale'}`}
    >
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 ${active
            ? 'bg-olive-500/10 border-olive-500 text-olive-500 shadow-[0_0_30px_-5px_rgba(132,204,22,0.3)]'
            : 'bg-stone-900 border-stone-800 text-stone-600'
            }`}>
            <Icon size={20} />
        </div>
        <div className="text-center">
            <div className={`text-xs font-bold mb-0.5 ${active ? 'text-white' : 'text-stone-500'}`}>{label}</div>
            {subLabel && <div className="text-[10px] text-stone-600">{subLabel}</div>}
        </div>
    </motion.div>
);

const Connector = ({ active = false, delay = 0 }: any) => (
    <div className="relative bg-stone-800 self-center md:self-start
        w-[2px] h-8 my-1 md:w-20 md:h-[2px] md:mx-2 md:mt-6 md:my-0">
        {active && (
            <motion.div
                className="absolute bg-olive-500 top-0 left-0"
                initial={{ height: 0, width: 0 }}
                animate={{ height: '100%', width: '100%' }}
                transition={{ delay, duration: 0.5 }}
            />
        )}
    </div>
);

// --- Dashboard Visuals ---

const FintechDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center justify-center"
        >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
                <Node icon={MousePointerClick} label="Ad Click" subLabel="Facebook" active={true} delay={0} />
                <Connector active={true} delay={0.3} />
                <Node icon={FileText} label="Lead Form" subLabel="Loan Inquiry" active={true} delay={0.6} />
                <Connector active={true} delay={0.9} />
                <Node icon={Database} label="CRM Sync" subLabel="HubSpot" active={true} delay={1.2} />
                <Connector active={true} delay={1.5} />
                <Node icon={Phone} label="Olive Call" subLabel="Qualification" active={true} delay={1.8} />
                <Connector active={true} delay={2.1} />
                <Node icon={Calendar} label="Meeting" subLabel="Booked" active={true} delay={2.4} />
            </div>

            {/* Context Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="mt-12 bg-stone-900/80 border border-stone-800 p-4 rounded-xl max-w-md w-full backdrop-blur-sm"
            >
                <div className="flex items-center gap-3 mb-3 border-b border-stone-800 pb-3">
                    <div className="w-8 h-8 rounded-full bg-olive-500/20 flex items-center justify-center text-olive-500">
                        <Phone size={16} />
                    </div>
                    <div>
                        <div className="text-stone-200 font-bold text-sm">Olive Agent</div>
                        <div className="text-olive-500 text-[10px] font-mono">LIVE TRANSCRIPT</div>
                    </div>
                </div>
                <div className="space-y-3 text-xs">
                    <div className="text-stone-400">"Hi Arjun, I see you're looking for a ₹2L personal loan. Do you have a minute?"</div>
                    <div className="text-stone-500 italic pl-2 border-l-2 border-stone-800">"Yes, but I'm at work. Can we talk later?"</div>
                    <div className="text-stone-400">"No problem. I'll give you a call at 5 PM today. You'll get a calendar invite shortly."</div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const EdtechDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center justify-center"
        >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
                <Node icon={Users} label="Website" subLabel="Visitor" active={true} delay={0} />
                <Connector active={true} delay={0.3} />
                <Node icon={MessageCircle} label="Chatbot" subLabel="Inquiry" active={true} delay={0.6} />
                <Connector active={true} delay={0.9} />
                <Node icon={Phone} label="Instant Call" subLabel="Speed-to-Lead" active={true} delay={1.2} />
                <Connector active={true} delay={1.5} />
                <Node icon={UserCheck} label="Advisor" subLabel="Handoff" active={true} delay={1.8} />
                <Connector active={true} delay={2.1} />
                <Node icon={GraduationCap} label="Enrolled" subLabel="Success" active={true} delay={2.4} />
            </div>

            {/* Context Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="mt-12 bg-stone-900/80 border border-stone-800 p-4 rounded-xl max-w-md w-full backdrop-blur-sm"
            >
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-olive-500"></span>
                        </span>
                        <span className="text-olive-400 text-xs font-bold uppercase tracking-wider">Call in Progress</span>
                    </div>
                    <span className="text-stone-500 text-xs font-mono">00:42s</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700">
                        <Phone size={18} className="text-white" />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">Connecting to Advisor...</div>
                        <div className="text-stone-400 text-xs">Lead qualified for Data Science Bootcamp</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const RealEstateDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center justify-center"
        >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
                <Node icon={Database} label="Lead DB" subLabel="Cold Leads" active={true} delay={0} />
                <Connector active={true} delay={0.3} />
                <Node icon={Filter} label="Segment" subLabel="6mo+ Old" active={true} delay={0.6} />
                <Connector active={true} delay={0.9} />
                <Node icon={Send} label="SMS Blast" subLabel="Reactivation" active={true} delay={1.2} />
                <Connector active={true} delay={1.5} />
                <Node icon={MessageCircle} label="Reply" subLabel="Interested" active={true} delay={1.8} />
                <Connector active={true} delay={2.1} />
                <Node icon={Building2} label="Viewing" subLabel="Scheduled" active={true} delay={2.4} />
            </div>

            {/* Context Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="mt-12 bg-stone-900/80 border border-stone-800 p-4 rounded-xl max-w-md w-full backdrop-blur-sm"
            >
                <div className="space-y-3">
                    <div className="bg-stone-800 p-3 rounded-lg rounded-tl-none text-xs text-stone-300 border border-stone-700 w-fit">
                        "Hi Anjali, 3 new units just opened up at. Want to see them this weekend?"
                    </div>
                    <div className="bg-olive-500/10 p-3 rounded-lg rounded-tr-none text-xs text-olive-200 border border-olive-500/20 ml-auto w-fit">
                        "Yes, actually! Is Saturday morning open?"
                    </div>
                    <div className="flex items-center gap-2 pt-2 text-stone-500 text-[10px] justify-center">
                        <CheckCircle2 size={12} className="text-olive-500" /> Olive detected intent: <span className="text-white">Booking Viewing</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const InsuranceDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center justify-center"
        >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
                <Node icon={FileText} label="Policy" subLabel="Expiring" active={true} delay={0} />
                <Connector active={true} delay={0.3} />
                <Node icon={Clock} label="Trigger" subLabel="3 Days Left" active={true} delay={0.6} />
                <Connector active={true} delay={0.9} />
                <Node icon={Phone} label="Olive Call" subLabel="Renewal" active={true} delay={1.2} />
                <Connector active={true} delay={1.5} />
                <Node icon={CreditCard} label="Payment" subLabel="Processed" active={true} delay={1.8} />
                <Connector active={true} delay={2.1} />
                <Node icon={ShieldCheck} label="Renewed" subLabel="+12 Months" active={true} delay={2.4} />
            </div>

            {/* Context Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="mt-12 bg-stone-900/80 border border-stone-800 p-4 rounded-xl max-w-md w-full backdrop-blur-sm flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-olive-500/20 flex items-center justify-center text-olive-500">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <div className="text-stone-200 font-bold text-sm">Policy #POL-8832</div>
                        <div className="text-stone-500 text-xs">Auto Insurance • Renewed</div>
                    </div>
                </div>
                <div className="bg-olive-500/10 border border-olive-500/20 px-3 py-1 rounded-full text-olive-400 text-xs font-bold">
                    ACTIVE
                </div>
            </motion.div>
        </motion.div>
    );
};

export default IndustryUseCases;
