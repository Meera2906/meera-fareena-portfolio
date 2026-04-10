
import React from 'react';
import { PROJECTS } from '../constants';

const NEW_PROJECTS = [
  "Self-Evolving AI Mentor Ecosystem",
  "Task Manager",
  "Play For Good",
];

const UPCOMING_PROJECTS = [
  "Hustlr",
];

const ProjectsCarousel: React.FC = () => {
  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 flex items-center justify-between">
         <div>
           <h2 className="text-4xl font-black uppercase tracking-tighter">Featured Projects</h2>
           <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">
             {PROJECTS.length} Projects &mdash; Scroll to Explore
           </p>
         </div>
         <div className="flex gap-4">
            <button
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              onClick={() => {
                const el = document.getElementById('projects-scroll');
                if (el) el.scrollBy({ left: -480, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              onClick={() => {
                const el = document.getElementById('projects-scroll');
                if (el) el.scrollBy({ left: 480, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
            </button>
         </div>
      </div>

      <div id="projects-scroll" className="flex gap-8 overflow-x-auto no-scrollbar px-6 -mx-6 pb-8">
        {PROJECTS.map((project, idx) => {
          const isNew = NEW_PROJECTS.includes(project.title);
          const isUpcoming = UPCOMING_PROJECTS.includes(project.title);
          const hasLink = project.link && project.link !== '#';
          const CardWrapper = hasLink ? 'a' : 'div';
          const wrapperProps = hasLink
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <CardWrapper key={idx} {...(wrapperProps as any)} className="min-w-[320px] md:min-w-[450px] group cursor-pointer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bg-white rounded-[2rem] overflow-hidden neo-shadow border-2 border-black transition-transform group-hover:-translate-y-2 h-full">
                <div className="h-64 relative overflow-hidden bg-gray-200">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">
                    {project.period}
                  </div>
                  {isNew && (
                    <div className="absolute top-4 left-4 bg-green-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      ✦ New
                    </div>
                  )}
                  {isUpcoming && (
                    <div className="absolute top-4 left-4 bg-amber-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      ⏳ Upcoming
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4 uppercase">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold bg-gray-100 px-3 py-1 rounded-full uppercase">{t}</span>
                    ))}
                  </div>
                  <div className="space-y-2 mb-6">
                    {project.description.map((d, i) => (
                      <p key={i} className="text-xs text-gray-500 line-clamp-1">{d}</p>
                    ))}
                  </div>
                  {hasLink && (
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group-hover:gap-4 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      View on GitHub
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  )}
                </div>
              </div>
            </CardWrapper>
          );
        })}
        {/* End cap */}
        <div className="min-w-[220px] flex items-center justify-center">
           <div className="bg-gray-100 w-full h-full rounded-[2rem] border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 gap-4 py-16 px-8">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-center">More Coming Soon</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
