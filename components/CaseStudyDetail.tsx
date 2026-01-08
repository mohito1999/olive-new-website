import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CaseStudyContent {
    hero: {
        client: string;
        industry: string;
        title: string;
        metrics: { value: string; label: string }[];
    };
    context: {
        title: string;
        challenge: string;
        issues: { title: string; description: string }[];
    };
    solution: {
        title: string;
        description: string;
        steps: { title: string; timeframe: string; description: string }[];
    };
    results: {
        title: string;
        primaryStat: string;
        primaryLabel: string;
        secondaryStats: { value: string; label: string }[];
        conclusion: string;
    };
}

interface CaseStudyDetailProps {
    content: CaseStudyContent;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ content }) => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-stone-950 text-white pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="w-full max-w-7xl mx-auto relative z-10">
                    <Link to="/case-studies" className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft size={16} /> Back to Case Studies
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-olive-600/20 text-olive-400 border border-olive-600/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {content.hero.industry}
                        </span>
                        <span className="text-stone-400 font-medium">
                            {content.hero.client}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-12 max-w-4xl leading-tight">
                        {content.hero.title}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.hero.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-stone-900 border border-stone-800 p-6 rounded-2xl relative overflow-hidden group hover:border-olive-900 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-olive-600/5 rounded-full blur-xl group-hover:bg-olive-600/10 transition-colors"></div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2 relative z-10">{metric.value}</div>
                                <div className="text-sm text-stone-400 font-bold uppercase tracking-wide relative z-10">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Context Section (The Problem) */}
            <div className="py-24 px-6 md:px-12 lg:px-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-olive-600 font-bold tracking-widest uppercase text-sm mb-4">The Challenge</h2>
                        <h3 className="text-3xl font-bold text-stone-900 mb-6">{content.context.title}</h3>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            {content.context.challenge}
                        </p>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {content.context.issues.map((issue, idx) => (
                            <div key={idx} className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                </div>
                                <h4 className="text-xl font-bold text-stone-900 mb-3">{issue.title}</h4>
                                <p className="text-stone-600 leading-relaxed text-sm">
                                    {issue.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Solution Section (The Process) */}
            <div className="bg-stone-900 text-white py-24 px-6 md:px-12 lg:px-24 w-full">
                <div className="w-full">
                    <div className="mb-16 max-w-3xl">
                        <h2 className="text-olive-400 font-bold tracking-widest uppercase text-sm mb-4">The Solution</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">{content.solution.title}</h3>
                        <p className="text-stone-400 text-lg leading-relaxed">
                            {content.solution.description}
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-[2.5rem] left-[20px] bottom-[2.5rem] w-0.5 bg-stone-800 md:left-1/2 md:-translate-x-1/2"></div>

                        <div className="space-y-12">
                            {content.solution.steps.map((step, idx) => (
                                <div key={idx} className={`flex flex-col md:flex-row gap-8 items-start relative ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-[2rem] w-5 h-5 bg-stone-900 border-4 border-olive-500 rounded-full z-10"></div>

                                    <div className={`pl-12 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 hover:border-olive-500/50 transition-colors">
                                            <span className="inline-block px-3 py-1 bg-olive-900/30 text-olive-400 text-xs font-mono rounded-full mb-4 border border-olive-500/20">
                                                {step.timeframe}
                                            </span>
                                            <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                            <p className="text-stone-400 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section (The Impact) */}
            <div className="py-24 px-6 md:px-12 lg:px-24 w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-olive-600 font-bold tracking-widest uppercase text-sm mb-4">The Impact</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">{content.results.title}</h3>
                    <p className="text-stone-600 text-lg">
                        {content.results.conclusion}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Primary Big Stat */}
                    <div className="md:col-span-3 bg-stone-950 text-white rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>


                        <div className="relative z-10">
                            <div className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">{content.results.primaryStat}</div>
                            <div className="text-xl text-olive-400 font-medium uppercase tracking-widest">{content.results.primaryLabel}</div>
                        </div>
                    </div>

                    {/* Secondary Stats */}
                    {content.results.secondaryStats.map((stat, idx) => (
                        <div key={idx} className="bg-stone-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                            <CheckCircle2 size={32} className="text-olive-600 mb-4" />
                            <div className="text-4xl font-bold text-stone-900 mb-2">{stat.value}</div>
                            <div className="text-stone-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="https://cal.com/mohitatneurix/30min" target="_blank" rel="noopener noreferrer" className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-olive-200 hover:-translate-y-1 inline-flex items-center gap-2">
                        Get These Results
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;
