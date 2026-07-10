
import React from 'react';
import { EDUCATION, WORK_EXPERIENCE, PARTICIPATIONS, CERTIFICATIONS } from '../constants';

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left Column: Experience & Participations */}
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            
            {/* Work Experience Card */}
            <div className="bg-white p-8 rounded-[2.5rem] neo-shadow border border-black/5 flex-grow">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shadow-lg">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                   </svg>
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-black/60">Experience</h2>
              </div>

              {WORK_EXPERIENCE.map((job, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-black uppercase tracking-tight">{job.role}</h3>
                      <p className="text-xs font-bold text-black/40 uppercase tracking-widest mt-1">{job.company}</p>
                    </div>
                    <div className="bg-gray-100 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest self-start md:self-center">
                      {job.period}
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex gap-4 text-sm text-gray-500 font-medium leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <br/>
                </div>
              ))}
            </div>

            {/* Participations Card */}
            <div className="bg-black text-white p-10 rounded-[2.5rem] neo-shadow-deep">
              <h2 className="text-xs font-black mb-12 uppercase tracking-[0.5em] text-white/40">P A R T I C I P A T I O N S</h2>
              <div className="space-y-10">
                {PARTICIPATIONS.map((part, idx) => (
                  <div key={idx} className="group border-l-2 border-white/10 pl-8 hover:border-white transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h4 className="font-black text-lg uppercase tracking-tight leading-none group-hover:translate-x-1 transition-transform">{part.title}</h4>
                      <span className="bg-gray-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest self-start md:self-center">{part.period}</span>
                    </div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">{part.team}</p>
                    <p className="text-sm text-white/60 leading-relaxed max-w-lg">
                      {part.achievements[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education Sidebar (Properly Aligned) */}
          <div className="flex flex-col">
            <div className="bg-white p-10 rounded-[2.5rem] neo-shadow border border-black/5 flex-grow">
              <div className="mb-12 border-b border-gray-100 pb-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-black/40">Education</h2>
              </div>
              
              <div className="space-y-12">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-black shadow-lg">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <h4 className="font-black text-md leading-tight mb-2 uppercase tracking-tight">{edu.school}</h4>
                      <p className="text-xs font-bold text-black/50 mb-4 leading-relaxed">{edu.degree}</p>
                      
                      <div className="space-y-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-black/30">{edu.period}</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-black/60">{edu.location}</div>
                        {edu.extra && (
                          <div className="mt-4 inline-block text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-md">
                            {edu.extra}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative graphic at the bottom of Education card */}
              <div className="mt-16 pt-12 border-t border-gray-100 opacity-20 flex justify-center">
                 <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M50 20 L50 80 M20 50 L80 50" strokeWidth="1" />
                 </svg>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white p-10 rounded-[2.5rem] neo-shadow border border-black/5 mt-8">
              <div className="mb-8 border-b border-gray-100 pb-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-black/40">Certifications</h2>
              </div>
              <div className="space-y-5">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-tight leading-snug">{cert.title}</h4>
                      <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">{cert.issuer} · {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
