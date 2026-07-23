import React from 'react';
import { BookOpen, ShieldAlert, CheckCircle, ArrowUpRight } from 'lucide-react';

interface PageProps {
  isDark: boolean;
}

const blogCategories = [
  {
    title: 'Ethics & Best Practice',
    description: 'Safe driving ethics and everyday best practice.',
    icon: CheckCircle,
    count: 'Articles, guides & advice'
  },
  {
    title: 'Survivor Stories',
    description: "First-hand stories from survivors of road crashes, including drivers, passengers and eyewitnesses.",
    icon: ShieldAlert,
    count: 'Real accounts & insights'
  },
  {
    title: 'Guides & Q&A',
    description: 'Tips, guides and answers to common road safety questions.',
    icon: BookOpen,
    count: 'Resources & explanations'
  }
];

const SafetyTalks: React.FC<PageProps> = ({ isDark }) => {
  return (
    <div className={`min-h-screen pt-36 pb-24 transition-colors duration-500 ${isDark ? 'bg-[#0D0D0D]' : 'bg-[#F9F9F9]'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="max-w-3xl mb-20">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}>
            <BookOpen className="w-4 h-4 text-[#FF9F00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Resource Hub
            </span>
          </div>
          <h1 className={`text-5xl lg:text-7xl font-black leading-[1.1] mb-8 uppercase italic tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Safety <span className="text-[#FF9F00]">Talks.</span>
          </h1>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Our blog and resource hub for everyone who uses the road.
          </p>
          <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
            Practical tips, honest conversations and real stories that could save your life or someone else's.
          </p>
        </div>

        <hr className={isDark ? 'border-neutral-900 mb-20' : 'border-neutral-200 mb-20'} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl p-8 hover:border-[#FF9F00] transition-colors duration-500 group flex flex-col justify-between h-[320px] ${
                  isDark ? 'bg-[#141414] border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 border rounded-xl group-hover:border-[#FF9F00] group-hover:bg-[#FF9F00]/10 transition-all duration-500 ${
                      isDark ? 'bg-[#0D0D0D] border-neutral-800 text-neutral-400' : 'bg-neutral-50 border-neutral-200 text-neutral-500'
                    }`}>
                      <Icon className="w-6 h-6 group-hover:text-[#FF9F00] transition-colors" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#FF9F00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className={`text-xl font-bold uppercase tracking-wider mb-3 group-hover:text-[#FF9F00] transition-colors ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {category.description}
                  </p>
                </div>
                
                <div className={`pt-6 border-t flex items-center justify-between text-xs font-mono ${isDark ? 'border-neutral-900 text-neutral-600' : 'border-neutral-100 text-neutral-400'}`}>
                  <span>LIBRARY // HUB</span>
                  <span className="uppercase text-neutral-500">{category.count}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SafetyTalks;