import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
    return (
        <section className="py-12 bg-stone-50 w-full border-y border-stone-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="text-stone-400 text-sm font-semibold uppercase tracking-widest">
                    Trusted by Leaders At
                </div>

                <div className="flex-1 flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {/* Client Logos: Add matching PNGs to public/logos/ */}
                    {/* Client Logos */}
                    {[
                        { src: 'client1.png', className: 'h-10 md:h-12' }, // GrowthSchool (Too small -> Larger)
                        { src: 'client2.png', className: 'h-6 md:h-7' },   // HolidayTribe (Too big -> Smaller)
                        { src: 'client3.png', className: 'h-7 md:h-8' },   // Swipe (Current is ~10, slightly smaller)
                    ].map((logo, i) => (
                        <div key={i} className={`${logo.className} w-auto opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer`}>
                            <img
                                src={`/logos/${logo.src}`}
                                alt={`Client ${i + 1}`}
                                className="h-full w-auto object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                    {/* Fallback Text (Remove once logos are added) */}
                    {/* <div className="text-stone-300 text-xs font-mono">Add client1.png - client4.png to /public/logos</div> */}
                </div>

                {/* Featured Testimonial */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 max-w-md relative">
                    <div className="absolute -top-3 left-6 bg-olive-100 text-olive-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border border-olive-200">
                        Case Study
                    </div>
                    <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-stone-700 text-sm font-medium italic mb-3">
                        "We managed to get <span className="bg-yellow-100 px-1 text-yellow-800">20% conversion re-engagement</span> from workshop registrants. Olive is our top AE."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-stone-200 rounded-full overflow-hidden">
                            {/* Placeholder avatar */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                        </div>
                        <div>
                            <div className="text-xs font-bold text-stone-900">Aditya Goenka</div>
                            <div className="text-[10px] text-stone-500">Founder, House of EdTech</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProof;