import React from 'react';
import Hero from './Hero';
import SocialProof from './SocialProof';
import ParadigmGrid from './ParadigmGrid';
import ModesSection from './ModesSection';
import UseCases from './UseCases';
import TimelineSection from './TimelineSection';
import IndustryUseCases from './IndustryUseCases';

const LandingPage: React.FC = () => {
    return (
        <>
            <Hero />
            <SocialProof />
            <div id="problem" className="w-full flex justify-center"><ParadigmGrid /></div>
            <div id="engine" className="w-full flex justify-center"><TimelineSection /></div>
            <div id="modes" className="w-full flex justify-center"><ModesSection /></div>
            <div id="use-cases" className="w-full flex justify-center"><UseCases /></div>
            <div id="industries" className="w-full flex justify-center"><IndustryUseCases /></div>
        </>
    );
};

export default LandingPage;
