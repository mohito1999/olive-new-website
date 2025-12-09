import React, { useState, useEffect } from 'react';
import { Rocket, CalendarCheck, Wheat, Briefcase, Phone, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
        icon: Rocket, 
        title: "Speed-to-Lead", 
        desc: "Calls inbound leads within 12 seconds.", 
        tag: "The Qualifier",
    },
    { 
        icon: CalendarCheck, 
        title: "Event Attendance", 
        desc: "Boosts show-up rates for webinars.", 
        tag: "The Shepherd",
    },
    { 
        icon: Wheat, 
        title: "Reactivation", 
        desc: "Wakes up dead leads from months ago.", 
        tag: "The Reactivator",
    },
    { 
        icon: Briefcase, 
        title: "Admin Support", 
        desc: "Updates CRM & cleans data instantly.", 
        tag: "The Assistant",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">Install Skills like Apps</h2>
            <p className="text-stone-500">Olive comes pre-trained with playbooks for every stage of the funnel.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:h-[500px]">
            
            {/* Left Col: Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-4">
                {tabs.map((tab, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 ${
                            activeTab === idx 
                            ? 'bg-stone-50 border-stone-200 shadow-sm ring-1 ring-stone-200' 
                            : 'hover:bg-stone-50/50 border border-transparent opacity-60 hover:opacity-100'
                        }`}
                    >
                        <div className={`mt-1 w-10 h-10 rounded-lg flex items-center justify-center ${activeTab === idx ? 'bg-olive-600 text-white shadow-lg shadow-olive-200' : 'bg-stone-100 text-stone-500'}`}>
                            <tab.icon size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">{tab.tag}</div>
                            <h3 className={`font-bold text-lg mb-1 ${activeTab === idx ? 'text-stone-900' : 'text-stone-600'}`}>{tab.title}</h3>
                            <p className="text-sm text-stone-500 leading-snug">{tab.desc}</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Right Col: Visual Preview */}
            <div className="lg:w-2/3 bg-stone-900 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                
                <AnimatePresence mode="wait">
                    {activeTab === 0 && <SpeedToLeadVisual key="speed" />}
                    {activeTab === 1 && <EventAttendanceVisual key="event" />}
                    {activeTab === 2 && <ReactivationVisual key="renewal" />}
                    {activeTab === 3 && <AdminVisual key="admin" />}
                </AnimatePresence>
            </div>

        </div>
    </section>
  );
};

// --- Custom Animations for each use case ---

const SpeedToLeadVisual = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="relative w-full max-w-sm">
            {/* Step 1: Lead Comes In */}
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-4 mb-4 flex items-center gap-3 shadow-lg"
            >
                <div className="w-8 h-8 bg-[#1877F2] rounded flex items-center justify-center text-white text-xs font-bold">f</div>
                <div>
                    <div className="text-xs font-bold text-stone-900">New Lead: Solar Inquiry</div>
                    <div className="text-[10px] text-stone-500">Source: FB Ads • Just now</div>
                </div>
            </motion.div>

            {/* Step 2: Timer */}
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 justify-center mb-4"
            >
                <Clock size={16} className="text-stone-400" />
                <span className="text-white font-mono text-sm">00:12s elapsed</span>
            </motion.div>

            {/* Step 3: Call UI */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="bg-stone-800 rounded-xl p-4 border border-stone-700 shadow-2xl"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-500 text-xs font-bold">Calling...</span>
                    </div>
                    <Phone size={14} className="text-stone-500" />
                </div>
                <div className="text-center py-4">
                    <div className="w-16 h-16 bg-stone-700 rounded-full mx-auto mb-2 flex items-center justify-center text-stone-300">JD</div>
                    <div className="text-white font-bold">John Doe</div>
                    <div className="text-stone-500 text-xs">+1 (555) 019-2834</div>
                </div>
            </motion.div>

             {/* Success Check */}
             <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 3.5 }}
                 className="absolute bottom-[-10px] right-[-10px] bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
             >
                 <CheckCircle2 size={16} /> Connected
             </motion.div>
        </motion.div>
    )
}

const EventAttendanceVisual = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="w-full max-w-sm space-y-4">
             {/* Calendar Invite */}
             <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-stone-800 rounded-xl p-4 border-l-4 border-l-purple-500"
             >
                 <div className="text-xs text-purple-400 font-bold mb-1">TOMORROW 2PM</div>
                 <div className="text-white font-bold">Real Estate Investing Workshop</div>
                 <div className="text-stone-500 text-xs mt-1">Live Webinar • 60 mins</div>
             </motion.div>

             {/* SMS Reminder */}
             <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-[#2a2a2a] p-3 rounded-2xl rounded-br-none ml-auto max-w-[80%]"
             >
                 <div className="text-stone-200 text-xs">
                     Hi Sarah! Ready to learn how to flip houses? Here is your link for tomorrow: zoom.us/j/9...
                 </div>
             </motion.div>

             {/* Reply */}
             <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="bg-purple-600 p-3 rounded-2xl rounded-bl-none mr-auto max-w-[80%]"
             >
                 <div className="text-white text-xs">
                     Can't wait! See you there.
                 </div>
             </motion.div>
        </motion.div>
    )
}

const ReactivationVisual = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="w-full max-w-sm">
             {/* Database Row */}
             <div className="bg-stone-800 rounded-lg overflow-hidden mb-8 border border-stone-700">
                 <div className="flex bg-stone-700 p-2 text-[10px] text-stone-400 font-mono">
                     <div className="w-1/3">LEAD</div>
                     <div className="w-1/3">LAST SEEN</div>
                     <div className="w-1/3">STATUS</div>
                 </div>
                 <div className="flex p-3 text-xs text-stone-300 items-center">
                     <div className="w-1/3">Alex M.</div>
                     <div className="w-1/3">6 months ago</div>
                     <motion.div 
                        className="w-1/3"
                        animate={{ color: ["#9ca3af", "#ef4444"] }}
                        transition={{ delay: 1, duration: 0.5 }}
                     >
                         <span className="bg-stone-700 px-2 py-1 rounded text-stone-400">Cold</span>
                     </motion.div>
                 </div>
             </div>

             {/* Auto-Trigger Line */}
             <motion.div 
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="w-0.5 bg-stone-600 mx-auto mb-2"
             ></motion.div>

             {/* SMS Draft */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="bg-white rounded-xl p-4 shadow-xl"
             >
                 <div className="text-xs text-stone-400 mb-2">Sending SMS to: <span className="text-stone-800">(555) 123-4567</span></div>
                 <div className="text-sm font-medium text-stone-900 mb-2">"Hey Alex, we have 2 spots left for the new coaching cohort. Want back in?"</div>
             </motion.div>
        </motion.div>
    )
}

const AdminVisual = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="w-full max-w-sm flex items-center justify-center gap-4">
             {/* Unstructured Data */}
             <div className="w-1/2 space-y-2">
                 <div className="text-xs text-stone-500 text-center mb-2">Call Transcript</div>
                 <div className="bg-stone-800 p-3 rounded-lg text-[10px] text-stone-400 border border-stone-700 leading-relaxed">
                     "Client said credit score is 740 and property value is around $550k."
                 </div>
             </div>

             {/* Arrow */}
             <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
             >
                 <div className="text-olive-500">→</div>
             </motion.div>

             {/* Structured CRM */}
             <div className="w-1/2 space-y-2">
                 <div className="text-xs text-stone-500 text-center mb-2">HubSpot Fields</div>
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-white p-3 rounded-lg border border-stone-200 shadow-lg space-y-2"
                 >
                     <div>
                         <div className="text-[8px] text-stone-400 uppercase">Credit Score</div>
                         <div className="text-xs font-bold text-stone-900">740</div>
                     </div>
                     <div>
                         <div className="text-[8px] text-stone-400 uppercase">Est. Value</div>
                         <div className="text-xs font-bold text-stone-900">$550,000</div>
                     </div>
                     <div>
                         <div className="text-[8px] text-stone-400 uppercase">Lead Quality</div>
                         <div className="text-xs font-bold text-green-600">HIGH</div>
                     </div>
                 </motion.div>
             </div>
        </motion.div>
    )
}

export default UseCases;