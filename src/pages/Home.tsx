import React from 'react';
import Hero from '../Hero';
import Mission from '../Mission';
import SafetySignsGrid from '../SafetySignsGrid';
import VisualShowcase from '../VisualShowcase';
import Contact from '../Contact';

const Home: React.FC = () => {
  // Add this hook to listen to your app's global light/dark mode state

  return (
    <main className="bg-[#0D0D0D] text-white min-h-screen">
      <Hero />
      <Mission />

      <div id="campaigns" className="py-24 bg-neutral-50 dark:bg-[#111111] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mb-16 text-center">
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
            Our <span className="text-[#FF9F00]">Campaigns</span>
          </h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
            Each of our campaigns tackles a specific danger on Nigerian roads with practical, visible action.
          </p>
        </div>
        <SafetySignsGrid />
      </div>

      <VisualShowcase />
      <Contact />
    </main>
  );
};

export default Home;