
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Hero Card */}
        <div className="bg-black text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden neo-shadow-deep">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white text-black rounded-full px-4 py-1 text-sm font-bold">0.1</span>
                <span className="text-white/60 text-sm tracking-widest uppercase">Portfolio Introduction</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                {PERSONAL_INFO.name.split(' ')[0]}
                <br />
                <span className="text-outline-white text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                  {PERSONAL_INFO.name.split(' ')[1]}
                </span>
              </h1>

              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                  GET STARTED
                </button>
                <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors cursor-pointer">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Overlapping Info Card */}
              <div className="bg-white text-black p-8 rounded-[2rem] neo-shadow md:-ml-12 relative z-20">
                <div className="flex gap-2 mb-6">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Profile</span>
                  <span className="bg-gray-200 px-4 py-1 rounded-full text-xs font-bold uppercase">Meera</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase leading-none">Who is Meera Fareena?</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-bold text-gray-400">ASPIRING AI ENGINEER</span>
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>
              </div>

              {/* Decorative elements behind */}
              <div className="absolute top-10 right-10 w-24 h-24 bg-gray-800 rounded-full opacity-50 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
