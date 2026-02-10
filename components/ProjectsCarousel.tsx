
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectsCarousel: React.FC = () => {
  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 flex items-center justify-between">
         <h2 className="text-4xl font-black uppercase tracking-tighter">Featured Projects</h2>
         <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
            </button>
         </div>
      </div>

      <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 -mx-6 pb-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="min-w-[320px] md:min-w-[450px] group cursor-pointer">
            <div className="bg-white rounded-[2rem] overflow-hidden neo-shadow border-2 border-black transition-transform group-hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden bg-gray-200">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">
                  {project.period}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4 uppercase">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold bg-gray-100 px-3 py-1 rounded-full uppercase">{t}</span>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.description.map((d, i) => (
                    <p key={i} className="text-xs text-gray-500 line-clamp-1">{d}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Placeholder for more */}
        <div className="min-w-[320px] md:min-w-[450px] flex items-center justify-center">
           <div className="bg-gray-100 w-full h-full rounded-[2rem] border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">More Projects Coming Soon</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
