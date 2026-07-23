import React from 'react';

const stats = [
  { value: '500k+', label: 'People Reached', detail: 'With road safety awareness via media campaigns' },
  { value: '10k+', label: 'Individuals Educated', detail: 'Across schools, communities & driver groups' },
  { value: '15+', label: 'Active Partnerships', detail: 'With government & private sector organisations' }
];

export const ImpactStats: React.FC<{ isDark: boolean }> = ({ }) => {
  return (
    <section className="py-20 transition-colors duration-300 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 px-4 group">
              <span className="text-5xl lg:text-7xl font-black text-[#FF9F00] tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </span>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-neutral-500">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;