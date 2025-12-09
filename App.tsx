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
        <ParadigmGrid />
        <TimelineSection />
        <ModesSection />
        <UseCases />
        <IndustryUseCases />
        {/* <CRMSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;