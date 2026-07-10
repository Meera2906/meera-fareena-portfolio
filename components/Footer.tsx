
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="pt-12">
          {/* Contact Bar */}
          <div className="bg-black text-white rounded-full p-2 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="flex items-center gap-8 px-8 py-2 overflow-x-auto no-scrollbar w-full md:w-auto">
              <span className="text-xs font-bold uppercase tracking-widest opacity-60 flex-shrink-0">Let's Connect</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-bold hover:text-white/70 flex-shrink-0">EMAIL</a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-xs font-bold hover:text-white/70 flex-shrink-0">LINKEDIN</a>
              <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="text-xs font-bold hover:text-white/70 flex-shrink-0">GITHUB</a>
            </div>
            
            <div className="bg-white/10 rounded-full px-8 py-2 md:mr-2 mb-2 md:mb-0 w-[calc(100%-1rem)] md:w-auto text-center">
              <span className="text-[10px] font-black uppercase tracking-widest">{PERSONAL_INFO.phone}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center text-[10px] font-black uppercase tracking-[0.2em] text-black/30 px-4">
           <div>MADE WITH REASONING & PASSION</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
