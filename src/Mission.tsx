import React from 'react';

const Mission: React.FC = () => {
  const isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <div className={`py-24 transition-colors duration-300 ${isDark ? 'bg-[#0D0D0D] text-white' : 'bg-neutral-50 text-neutral-900'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="text-[#FF9F00] text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Our Vision
          </h2>
          <p className="text-3xl lg:text-5xl font-light text-white leading-tight max-w-4xl mx-auto italic">
            "A world where road crashes no longer claim lives, where every journey is safe, and where our work is ultimately no longer needed."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-6">Our Mission</h3>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              To prevent road crashes, injuries and deaths in Nigeria by raising awareness, educating the public and promoting responsible behaviour, working through the media, schools, communities and partnerships to build a lasting culture of road safety.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We partner with government agencies, private sector organisations and local communities to shape policies and strategies that make roads safer for everyone, whether they drive, ride or walk.
            </p>
          </div>
          
          <div className="bg-[#141414] border border-neutral-800 p-8 lg:p-10 rounded-2xl">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-8 text-[#FF9F00]">Core Values</h3>
            <ul className="space-y-6 text-neutral-400">
              <li><strong className="text-white tracking-wide uppercase text-sm">Safety:</strong> <br/> We put safety first in everything we do.</li>
              <li><strong className="text-white tracking-wide uppercase text-sm">Collaboration:</strong> <br/> We work hand in hand with communities and stakeholders.</li>
              <li><strong className="text-white tracking-wide uppercase text-sm">Education:</strong> <br/> We believe informed road users make better choices.</li>
              <li><strong className="text-white tracking-wide uppercase text-sm">Inclusivity:</strong> <br/> We champion safe mobility for everyone, on every road.</li>
              <li><strong className="text-white tracking-wide uppercase text-sm">Innovation:</strong> <br/> We embrace creative approaches to road safety.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;