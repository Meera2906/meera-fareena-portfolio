
import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["Home", "Projects", "Skills", "Education", "About", "Resume"];

  const handleTabClick = (tab: string) => {
    if (tab === "Resume") {
      window.open(PERSONAL_INFO.resumeUrl, '_blank');
      return;
    }
    setActiveTab(tab);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6">
      <div className="bg-black/80 backdrop-blur-xl rounded-full p-2 flex items-center justify-between shadow-2xl border border-white/10">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${
                activeTab === tab 
                ? "bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.15)] scale-105" 
                : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-3 bg-white/5 rounded-full pl-2 pr-5 py-1.5 border border-white/5 mr-1 group cursor-pointer transition-colors hover:bg-white/10">
          <div className="relative">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-[10px] font-black text-white/50 border border-white/10 overflow-hidden">
              <img src={PERSONAL_INFO.avatar} alt="M" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
            {PERSONAL_INFO.name}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
