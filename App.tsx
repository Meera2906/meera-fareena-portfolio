
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ProjectsCarousel from './components/ProjectsCarousel';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  // Simple scroll-to-section logic
  useEffect(() => {
    const section = document.getElementById(activeTab.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-gray-100">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="transition-all duration-500">
        <div id="home">
          <Hero />
        </div>

        <div id="projects">
          <ProjectsCarousel />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="education">
          <TimelineSection />
        </div>

        <div id="about" className="py-24 px-6">
           <div className="max-w-6xl mx-auto">
             <div className="bg-white rounded-[4rem] p-10 md:p-16 neo-shadow-deep border border-black/5 flex flex-col md:flex-row gap-16 items-start">
                {/* Profile Image Column */}
                <div className="w-full md:w-[40%]">
                   <div className="aspect-[4/5] bg-gray-200 rounded-[3rem] neo-shadow border-2 border-black overflow-hidden relative group">
                      <img 
                        src="public/Pic.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-[2rem] border border-black/10 shadow-xl">
                         <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Status</div>
                         <div className="text-sm font-black text-black uppercase tracking-tight">Open for Opportunities</div>
                      </div>
                   </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-[60%] flex flex-col h-full">
                   <div className="mb-12">
                      <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-black/30 mb-8">A BIT MORE ABOUT ME</h2>
                      <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium">
                        <p>
                          Currently pursuing B.Tech in Artificial Intelligence & Data Science at Sri Krishna College of Technology. 
                          I am passionate about building things that live on the internet, whether that be websites, applications, 
                          or anything in between.
                        </p>
                        <p>
                          My goal is to always build products that provide pixel-perfect, performant experiences. 
                          I thrive in collaborative environments and love solving complex problems with elegant code.
                        </p>
                      </div>
                   </div>

                   {/* Stats Grid */}
                   <div className="grid grid-cols-2 gap-6 mt-auto">
                      <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-black/5 group hover:bg-black hover:text-white transition-colors duration-500">
                         <div className="text-3xl font-black mb-1">2028</div>
                         <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-white/50">Graduation Year</div>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-black/5 group hover:bg-black hover:text-white transition-colors duration-500">
                         <div className="text-3xl font-black mb-1">AI & DS</div>
                         <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-white/50">Specialization</div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </main>
      <Footer />

      {/* Social Sticky Sidebar */}
      <div className="fixed left-8 bottom-8 hidden lg:flex flex-col gap-8 z-40 items-center">
        <div className="flex flex-col gap-6 items-center">
           <a href={`https://github.com/Meera2906`} target="_blank" className="hover:-translate-y-1 transition-transform cursor-pointer opacity-30 hover:opacity-100">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
           </a>
        </div>
        <div className="w-px h-32 bg-black opacity-10"></div>
      </div>
    </div>
  );
};

export default App;
