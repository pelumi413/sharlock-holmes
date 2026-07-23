import React from 'react';
import { Download, FileText, Image, ArrowDownToLine } from 'lucide-react';

const downloadableResources = [
  {
    title: 'Pedestrian Safety Handbook',
    type: 'PDF Document',
    size: '2.4 MB',
    icon: FileText,
    description: 'A comprehensive guide outlining defensive walking strategies, understanding crossing priorities, and urban transit safety principles.'
  },
  {
    title: 'Fleet Operator Compliance Manual',
    type: 'PDF Document',
    size: '4.1 MB',
    icon: FileText,
    description: 'Operational guidelines for logistics managers and transport companies to implement vehicle visibility protocols and driver rest schedules.'
  },
  {
    title: 'High-Visibility Advocacy Poster Kit',
    type: 'ZIP Archive',
    size: '18.5 MB',
    icon: Image,
    description: 'A collection of print-ready minimalist graphics and safety layouts for community centres, schools, and transit hubs.'
  }
];

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
            <ArrowDownToLine className="w-4 h-4 text-[#FF9F00]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Media & Assets
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase italic tracking-tighter">
            Downloads & <br />
            <span className="text-[#FF9F00]">Toolkits.</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Access our open-source safety manuals, instructional materials, and digital campaign files to spread alertness within your own network.
          </p>
        </div>

        <hr className="border-neutral-900 mb-20" />

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloadableResources.map((resource, index) => {
            const ResourceIcon = resource.icon;
            return (
              <div 
                key={index}
                className="bg-[#141414] border border-neutral-800 rounded-2xl p-8 hover:border-[#FF9F00] transition-all duration-500 group flex flex-col justify-between h-[340px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#0D0D0D] border border-neutral-800 rounded-xl group-hover:border-[#FF9F00] group-hover:bg-[#FF9F00]/10 transition-colors duration-500">
                      <ResourceIcon className="w-6 h-6 text-neutral-400 group-hover:text-[#FF9F00] transition-colors" />
                    </div>
                    
                    {/* Action Download Trigger */}
                    <button className="p-2 bg-[#0D0D0D] border border-neutral-800 rounded-lg text-neutral-500 group-hover:text-black group-hover:bg-[#FF9F00] group-hover:border-[#FF9F00] transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#FF9F00] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-600">
                  <span className="uppercase">{resource.type}</span>
                  <span className="text-neutral-500">{resource.size}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Resources;