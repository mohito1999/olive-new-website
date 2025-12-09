import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ParadigmGrid from './components/ParadigmGrid';
import ModesSection from './components/ModesSection';
import UseCases from './components/UseCases';
import TimelineSection from './components/TimelineSection';
import IndustryUseCases from './components/IndustryUseCases';
import CRMSection from './components/CRMSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-olive-100 selection:text-olive-900 bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <SocialProof />
        <div id="problem" className="w-full flex justify-center"><ParadigmGrid /></div>
        <div id="engine" className="w-full flex justify-center"><TimelineSection /></div>
        <div id="modes" className="w-full flex justify-center"><ModesSection /></div>
        <div id="use-cases" className="w-full flex justify-center"><UseCases /></div>
        <div id="industries" className="w-full flex justify-center"><IndustryUseCases /></div>
        {/* <div id="crm" className="w-full flex justify-center"><CRMSection /></div> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;