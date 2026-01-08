import React from 'react';
import { ArrowRight, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 pt-32 pb-12 px-6 w-full border-t border-stone-900 relative overflow-hidden">
      {/* Background Glow */}
      {/* Background Glow - Removed */}

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
          An AI sales agent that actually <br className="hidden md:block" />
          <span className="text-olive-500">works your leads.</span>
        </h2>

        <p className="text-stone-400 text-lg max-w-2xl mb-12">
          Most voice AI tools make one call and stop. Olive keeps working the lead by calling back, following up, answering questions, and pushing the next step. Built for high-volume B2C teams to close more without adding staff.
        </p>

        <div className="mb-24">
          <a href="https://cal.com/mohitatneurix/30min" target="_blank" rel="noopener noreferrer" className="group bg-white hover:bg-stone-200 text-stone-900 px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center gap-3 inline-flex">
            Book a Solution Sprint
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="w-full border-t border-stone-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-500">
          <Link to="/" className="hidden md:flex items-center gap-2">
            <div className="w-6 h-6 bg-olive-500 rounded flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-stone-950 rounded-full" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">Olive</span>
          </Link>

          <div className="flex gap-8">
            <a href="https://www.linkedin.com/company/olive-ai-hq/" className="hover:text-white transition-colors">LinkedIn</a>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="flex md:hidden items-center gap-2">
              <div className="w-6 h-6 bg-olive-500 rounded flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-stone-950 rounded-full" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Olive</span>
            </Link>
            <div className="font-mono text-xs">
              © 2026 Reboot Labs
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;