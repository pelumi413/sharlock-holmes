import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
        <section 
      className="relative bg-cover bg-center min-h-screen flex items-center" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url('/1.jpg')` }}
    >

      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF9F00] opacity-[0.03] blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10 w-full">
        <div className="max-w-4xl">
          
          {/* Tag Pill - Now completely clear of the logo */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800/60 mb-8 select-none">
            <Activity className="w-4 h-4 text-[#FF9F00]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Creating Awareness of Safety on Roads
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] mb-10 uppercase italic tracking-tighter">
            Safe Roads. <br />
            <span className="text-[#FF9F00]">Bright Futures.</span>
          </h1>

          {/* Core Body Copy */}
          <div className="space-y-6 text-white text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            <p className="text-white">
              Every journey should end safely. RAP Initiative works across Nigeria to prevent road 
              crashes through education, advocacy and community action, because behind every 
              statistic is a life, a family and a future worth protecting.
            </p>
            <p className="text-white text-sm sm:text-base">
              Road crashes are one of the leading causes of preventable deaths in Nigeria, yet 
              nearly every one of them can be avoided. We exist to change what happens on our 
              roads, one informed choice at a time.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="#contact" 
              className="group bg-[#FF9F00] text-black text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300"
            >
              <span>Join the Movement</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/donate" 
              className="border border-neutral-800 bg-neutral-900/40 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full text-center hover:border-neutral-700 hover:bg-neutral-900 transition-colors duration-300"
            >
              Support a Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;