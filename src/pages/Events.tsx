import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    title: 'Commercial Driver Safety Seminar',
    date: 'July 15, 2026',
    time: '09:00 AM',
    location: 'Central Transit Hub, Abuja',
    description: 'An interactive workshop focusing on defensive driving techniques, fatigue management, and nocturnal visibility practices for commercial transport operators.'
  },
  {
    title: 'School Safety Ambassador Launch',
    date: 'September 08, 2026',
    time: '11:00 AM',
    location: 'Municipal Education Centre, Lagos',
    description: 'Inaugurating our youth advocacy programme to train secondary school students in practical pedestrian safety and community leadership.'
  }
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
            <Calendar className="w-4 h-4 text-[#FF9F00]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Organisation Schedule
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase italic tracking-tighter">
            Action & <br />
            <span className="text-[#FF9F00]">Engagement.</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Join our upcoming public campaigns, community training sessions, and advocacy programmes designed to make road safety an active reality.
          </p>
        </div>

        <hr className="border-neutral-900 mb-20" />

        {/* Events Layout Feed */}
        <div className="flex flex-col gap-8 max-w-4xl">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-[#141414] border border-neutral-800 rounded-2xl p-8 hover:border-[#FF9F00] transition-colors duration-500 group flex flex-col md:flex-row gap-8 justify-between"
            >
              <div className="flex-grow max-w-2xl">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4 group-hover:text-[#FF9F00] transition-colors">
                  {event.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                
                {/* Meta details strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-neutral-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF9F00]" />
                    <span className="text-neutral-300">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF9F00]" />
                    <span className="text-neutral-300">{event.time}</span>
                  </div>
                </div>
              </div>

              {/* Date Card Display */}
              <div className="flex-shrink-0 flex md:flex-col items-center justify-center bg-[#0D0D0D] border border-neutral-800 rounded-xl p-6 min-w-[140px] h-28 md:h-auto gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  {event.date.split(' ')[0]}
                </span>
                <span className="text-3xl font-black text-white group-hover:text-[#FF9F00] transition-colors">
                  {event.date.split(' ')[1].replace(',', '')}
                </span>
                <span className="text-xs font-mono text-neutral-600">
                  {event.date.split(' ')[2]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;