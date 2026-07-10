
import React, { useState } from 'react';
import { SKILLS } from '../constants';

/* Category icon map */
const ICONS: Record<string, React.ReactNode> = {
  Programming: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Frontend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Backend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  Databases: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" />
    </svg>
  ),
  'Tools & Platforms': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'AI / ML': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

const SkillsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Show first 4 categories in the main grid; all 6 in the modal
  const PREVIEW_COUNT = 4;
  const previewSkills = SKILLS.slice(0, PREVIEW_COUNT);

  return (
    <>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white rounded-[3rem] p-12 neo-shadow-deep">
            <div className="mb-12 flex justify-between items-end border-b border-white/10 pb-8">
              <h2 className="text-4xl font-black tracking-tighter uppercase">Technical Stack</h2>
              <div className="text-[10px] font-black text-white/30 tracking-[0.3em] uppercase">
                Modules // {String(SKILLS.length).padStart(2, '0')}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
              {previewSkills.map((group, idx) => (
                <div key={idx} className="relative group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shadow-inner transition-transform group-hover:scale-110">
                      {ICONS[group.category] ?? (
                        <span className="font-black text-sm">{String(idx + 1).padStart(2, '0')}</span>
                      )}
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
                  {idx % 2 === 0 && (
                    <div className="hidden md:block absolute -right-8 top-0 bottom-0 w-px bg-white/5" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="bg-white/5 rounded-lg px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border border-white/5">
                SOURCE // MEERA_RESUME.PDF
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-4 group"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">
                  VIEW ALL SKILLS
                </span>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Skills Modal ──────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-black text-white rounded-[2.5rem] p-10 max-w-4xl w-full max-h-[85vh] overflow-y-auto neo-shadow-deep border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">All Skills</h2>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">
                  {SKILLS.reduce((acc, g) => acc + g.skills.length, 0)} Technologies · {SKILLS.length} Categories
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* All categories grid */}
            <div className="grid md:grid-cols-2 gap-10">
              {SKILLS.map((group, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
                      {ICONS[group.category] ?? (
                        <span className="font-black text-xs">{String(idx + 1).padStart(2, '0')}</span>
                      )}
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 rounded-full border border-white/15 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex justify-center">
              <button
                onClick={() => setModalOpen(false)}
                className="px-8 py-3 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsSection;
