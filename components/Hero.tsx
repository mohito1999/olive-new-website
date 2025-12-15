import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, User, BarChart3, Mic, Smartphone, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [feedIndex, setFeedIndex] = useState(0);

  // Cycle through feed items to simulate live activity
  useEffect(() => {
    const timer = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const feedItems = [
    { type: 'call', text: 'Dialing Lead...', sub: 'Loan Inquiry (FB Ads)', icon: Smartphone, color: 'text-stone-400' },
    { type: 'voice', text: 'Qualifying...', sub: 'Credit Score > 720', icon: Mic, color: 'text-orange-400' },
    { type: 'success', text: 'Consultation Booked', sub: 'Tomorrow, 10am', icon: CheckCircle2, color: 'text-emerald-400' },
    { type: 'crm', text: 'Syncing CRM', sub: 'Deal Value: ₹2L', icon: Activity, color: 'text-blue-400' },
  ];

  return (
    <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.05] mb-6 tracking-tight">
              <br /> World's First <br />
              <span className="text-olive-600">Long-Horizon Sales Agent</span>
            </h1>

            <p className="text-lg text-stone-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Sales isn’t a single interaction. Olive calls leads instantly, nurtures them over days, reactivates dead lists, and helps your team close more 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* <button className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-olive-200 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
                <Mic size={20} /> Talk to Olive
              </button> */}
              <a href="https://cal.com/mohitatneurix/30min" target="_blank" rel="noopener noreferrer" className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-olive-200 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                Book a Demo
              </a>
            </div>

            <p className="mt-6 text-xs text-stone-400 font-medium">
              * Perfect for Finance, EdTech, Real Estate, and Insurance.
            </p>
          </motion.div>
        </div>

        {/* Dense Visual: The "Agent Console" */}
        <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
          <motion.div
            className="relative bg-stone-900 rounded-3xl p-5 shadow-2xl border border-stone-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header Cleaned up */}
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-stone-500 text-xs font-mono font-medium">System Online</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Left Col: Live Activity Feed */}
              <div className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 flex flex-col gap-3 h-[320px] overflow-hidden relative">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2 font-mono uppercase tracking-wider">
                  <span>Live Feed</span>
                  <Activity size={14} className="text-olive-500" />
                </div>

                {/* Animated Feed */}
                <div className="flex flex-col gap-3">
                  <AnimatePresence initial={false}>
                    {[0, 1, 2].map((offset) => {
                      const itemIndex = (feedIndex + offset) % feedItems.length;
                      const item = feedItems[itemIndex];
                      return (
                        <motion.div
                          key={`${itemIndex}-${offset}`} // Unique key to force re-render/animate
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className={`bg-stone-800 rounded-lg p-3 border border-stone-700/80 ${offset === 0 ? 'border-l-4 border-l-olive-500' : ''}`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-xs font-bold ${item.color}`}>{item.text}</span>
                            <span className="text-[10px] text-stone-600">Now</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-stone-400">
                            <item.icon size={12} /> {item.sub}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Gradient Fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-800/80 to-transparent pointer-events-none"></div>
              </div>

              {/* Right Col: Voice Analysis & Stats */}
              <div className="flex flex-col gap-4">

                {/* Voice Visualizer */}
                <div className="bg-stone-800 rounded-xl p-4 border border-stone-700 h-40 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs text-stone-400 font-mono">AUDIO_IN</span>
                    <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      ACTIVE
                    </div>
                  </div>

                  {/* Waveform Animation */}
                  <div className="flex items-center justify-center gap-1 h-16 mb-2">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-olive-500 rounded-full"
                        animate={{ height: ["20%", "90%", "30%"] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "mirror",
                          delay: i * 0.05,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono truncate z-10 border-t border-stone-700 pt-2 mt-1">
                    &gt; Qualifying budget...
                  </div>
                </div>

                {/* Stats Card */}
                <div className="bg-stone-100 rounded-xl p-4 border border-stone-200 flex-1 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <BarChart3 size={64} />
                  </div>
                  <div className="flex items-center gap-2 mb-1 z-10">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">Daily Consults</span>
                  </div>
                  <div className="flex items-end gap-2 z-10">
                    <span className="text-3xl font-bold text-stone-900">42/50</span>
                    <span className="text-xs text-stone-500 font-medium mb-1.5">Booked</span>
                  </div>
                  <div className="w-full bg-stone-200 h-1.5 rounded-full mt-3 overflow-hidden z-10">
                    <motion.div
                      className="h-full bg-olive-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "84%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;