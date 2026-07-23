import React from 'react';
import { Shield, AlertTriangle, Activity, Eye, ArrowRightLeft } from 'lucide-react';

const campaigns = [
  {
    id: '01',
    title: 'Buckle Up',
    subtitle: 'Seatbelt Safety',
    description: 'Promoting consistent seatbelt use through branded wear and our RAP Initiative Agents programme, which trains school children as young safety ambassadors.',
    icon: Shield
  },
  {
    id: '02',
    title: 'Cross Safely',
    subtitle: 'Zebra Crossings',
    description: 'Encouraging drivers to respect pedestrian crossings and teaching pedestrians to use them confidently.',
    icon: Activity
  },
  {
    id: '03',
    title: 'Slow Down',
    subtitle: 'Speed Management',
    description: 'Challenging the culture of excessive speed, one of the biggest killers on our roads.',
    icon: AlertTriangle
  },
  {
    id: '04',
    title: 'Overtake Wisely',
    subtitle: 'Dangerous Overtaking',
    description: 'Educating drivers on the risks of reckless overtaking and how to judge when it is safe.',
    icon: ArrowRightLeft
  },
  {
    id: '05',
    title: 'Be Seen, Be Safe',
    subtitle: 'Visibility',
    description: 'Providing reflective jackets for truck drivers and reflective stickers for large vehicles so they remain visible at night and in poor weather.',
    icon: Eye
  }
];

const SafetySignsGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => {
          const IconComponent = campaign.icon;
          const cardContent = (
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-8 hover:border-[#FF9F00] transition-colors duration-500 group relative overflow-hidden flex flex-col">
              {/* Subtle Ambient Background Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9F00] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-3 border border-neutral-800 rounded-xl group-hover:border-[#FF9F00] group-hover:bg-[#FF9F00]/10 transition-colors duration-500">
                  <IconComponent className="w-6 h-6 text-neutral-400 group-hover:text-[#FF9F00] transition-colors duration-500" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-neutral-600 block mb-1">{campaign.id} // RAP_INIT</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF9F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Live Mission</span>
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  {campaign.subtitle}
                </h4>
                <h3 className="text-2xl font-black text-white tracking-wide mb-2 group-hover:text-[#FF9F00] transition-colors duration-500">
                  {campaign.title}
                </h3>
                
                {/* The Hidden Description that slides down seamlessly */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out">
                  <p className="text-sm text-neutral-400 leading-relaxed mt-4 pt-4 border-t border-neutral-800">
                    {campaign.description}
                  </p>
                </div>
              </div>
            </div>
          );

          return campaign.title === 'Buckle Up' ? (
            <a key={campaign.id} href="/articles/buckle-up.html" className="block group">
              {cardContent}
            </a>
          ) : (
            <div key={campaign.id} className="block group">
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SafetySignsGrid;