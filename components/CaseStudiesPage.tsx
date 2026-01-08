import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudiesPage: React.FC = () => {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

    const industries = ['All', 'EdTech', 'Finance', 'Real Estate', 'Healthcare'];

    const filteredStudies = selectedIndustry === 'All'
        ? caseStudies
        : caseStudies.filter(study => study.industry === selectedIndustry);

    return (
        <div className="bg-stone-50 min-h-screen pt-24 pb-24">
            {/* Header */}
            <div className="bg-stone-950 text-white py-24 mb-12 relative overflow-hidden w-full">
                <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Real Results. <span className="text-olive-500">Verified Impact.</span></h1>
                    <p className="text-stone-400 text-lg max-w-2xl">
                        See how category leaders are using Olive's AI workforce to scale revenue without scaling headcount.
                    </p>
                </div>
            </div>

            <div className="w-full px-6 md:px-12 lg:px-24">

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-16">
                    <div className="flex items-center gap-2 text-stone-500 text-sm font-bold uppercase tracking-wider mr-4">
                        <Filter size={16} /> Filter by:
                    </div>
                    {industries.map((industry) => (
                        <button
                            key={industry}
                            onClick={() => setSelectedIndustry(industry)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIndustry === industry
                                ? 'bg-stone-900 text-white shadow-lg transform scale-105'
                                : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                                }`}
                        >
                            {industry}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredStudies.map((study) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={study.id}
                                className="bg-white rounded-2xl border border-stone-200 p-8 flex flex-col hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                                        {study.industry}
                                    </span>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-2 leading-tight group-hover:text-olive-600 transition-colors">
                                        {study.title}
                                    </h3>
                                    <div className="text-sm text-stone-500 font-medium mb-4">Client: {study.clientName}</div>
                                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                                        {study.summary}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-stone-100">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {study.metrics.slice(0, 2).map((metric, idx) => (
                                            <div key={idx}>
                                                <div className="text-2xl font-bold text-stone-900">{metric.value}</div>
                                                <div className="text-[10px] text-stone-500 uppercase tracking-wide font-bold">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to={`/case-studies/${study.slug}`} className="w-full flex items-center justify-center gap-2 text-sm font-bold text-stone-900 bg-stone-50 hover:bg-stone-100 py-3 rounded-xl transition-colors group-hover:bg-stone-900 group-hover:text-white">
                                        Read Case Study <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredStudies.length === 0 && (
                    <div className="text-center py-24 text-stone-400">
                        No case studies found for this category yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseStudiesPage;
