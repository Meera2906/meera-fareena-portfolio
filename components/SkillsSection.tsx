
import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black text-white rounded-[3rem] p-12 neo-shadow-deep">
          <div className="mb-12 flex justify-between items-end border-b border-white/10 pb-8">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Technical Stack</h2>
            <div className="text-[10px] font-black text-white/30 tracking-[0.3em] uppercase">Modules // 02</div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {SKILLS.map((group, idx) => (
              <div key={idx} className="relative group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-black text-sm shadow-inner transition-transform group-hover:scale-110">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-widest">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-5 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Vertical Divider for Desktop */}
                {idx % 2 === 0 && (
                   <div className="hidden md:block absolute -right-8 top-0 bottom-0 w-px bg-white/5"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="bg-white/5 rounded-lg px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border border-white/5">
               SOURCE // MEERA_RESUME.PDF
             </div>
             <button className="flex items-center gap-4 group">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">VIEW ALL SKILLS</span>
               <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
               </div>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
