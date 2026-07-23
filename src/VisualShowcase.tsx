import React, { useState, useEffect } from 'react';
import { Focus, ChevronRight, ChevronLeft } from 'lucide-react';

const RetouchedAssets = [
  {
    id: 1,
    title: 'Illuminating Hazards',
    subtitle: 'Demonstrating the critical importance of visibility and awareness at night.',
    imagePath: '/1.jpg'
  },
  {
    id: 2,
    title: 'Identifying the Vulnerable',
    subtitle: 'Highlighting pedestrian priority zones and the need for driver vigilance in urban spaces.',
    imagePath: '/2.jpg'
  },
  {
    id: 3,
    title: 'Predicting Outcomes',
    subtitle: 'Educating the public on how split-second decisions and trajectory awareness prevent collisions.',
    imagePath: '/3.jpg'
  }
];

export const VisualShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % RetouchedAssets.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % RetouchedAssets.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + RetouchedAssets.length) % RetouchedAssets.length);
  };

  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-32 overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8">
              <Focus className="text-[#FF9F00] w-6 h-6" />
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-[0.2em]">
                Public Awareness
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-8 uppercase italic tracking-tighter">
              Visualising <br />
              <span className="text-[#FF9F00]">Safety.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              We use the media to reach as many people as possible with practical, life-saving information, and we run educational and community programmes that give individuals the knowledge and confidence to make better choices.
            </p>
            
            <div className="border-l-2 border-[#FF9F00] pl-6 py-4 h-28 flex flex-col justify-center transition-all duration-500">
               <h4 className="text-white font-bold uppercase tracking-wider mb-2">
                 {RetouchedAssets[activeIndex].title}
               </h4>
               <p className="text-sm text-neutral-500 max-w-sm">
                 {RetouchedAssets[activeIndex].subtitle}
               </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button onClick={prevSlide} className="p-2 border border-neutral-800 rounded-full text-neutral-400 hover:text-[#FF9F00] hover:border-[#FF9F00] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {RetouchedAssets.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#FF9F00] w-6' : 'bg-neutral-800'}`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="p-2 border border-neutral-800 rounded-full text-neutral-400 hover:text-[#FF9F00] hover:border-[#FF9F00] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* The Animated Carousel Container */}
          <div className="order-1 lg:order-2 relative group h-[600px]">
            <div className="absolute inset-0 bg-[#FF9F00] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
               {RetouchedAssets.map((asset, index) => (
                 <div 
                   key={asset.id}
                   className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                 >
                   <img 
                     src={asset.imagePath} 
                     alt={asset.title} 
                     className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                   />
                 </div>
               ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;