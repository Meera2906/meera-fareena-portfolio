
import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const INTRO_TEXT = "Hey there! Meera here code, coffee, and a little chaos. I build things, break things, then build them better. Welcome in.";

const Hero: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [drawLine, setDrawLine] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const timeouts = useRef<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/intro-music.mp3');
    audioRef.current.volume = 0.4;
    return () => clearTimers();
  }, []);

  const clearTimers = () => {
    timeouts.current.forEach(id => window.clearTimeout(id));
    timeouts.current = [];
  };

  const handleGetStarted = () => {
    if (showIntro) return; // ignore repeat clicks mid-animation
    clearTimers();
    setIntroStep(0);
    setTypedText('');
    setFadeOut(false);
    setShowIntro(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => console.log('Audio playback prevented:', err));
    }

    const typeText = (text: string, delay: number = 35) => {
      setTypedText('');
      let i = 0;
      const typeNext = () => {
        i += 1;
        setTypedText(text.slice(0, i));
        if (i < text.length) {
          timeouts.current.push(window.setTimeout(typeNext, delay));
        }
      };
      typeNext();
    };

    // kick off the line-draw on the next frame so the CSS transition fires
    const t0 = window.setTimeout(() => setDrawLine(true), 30);

    // Step 1: "Hey there!" flies in
    const t1 = window.setTimeout(() => setIntroStep(1), 900);
    const t1_out = window.setTimeout(() => setIntroStep(1.5), 2000);

    // Step 2: "Meera here 👋" comes in and waves
    const t2 = window.setTimeout(() => setIntroStep(2), 2300);
    const t2_out = window.setTimeout(() => setIntroStep(2.5), 3500);

    // Step 3: "code, coffee..." types in
    const t3 = window.setTimeout(() => {
      setIntroStep(3);
      typeText("code, coffee, and a little chaos.");
    }, 3800);
    const t3_out = window.setTimeout(() => {
      setIntroStep(3.5);
      setTypedText('');
    }, 5500);

    // Step 4: "I build things..." types in
    const t4 = window.setTimeout(() => {
      setIntroStep(4);
      typeText("I build things, break things, then build them better.");
    }, 5800);
    const t4_out = window.setTimeout(() => {
      setIntroStep(4.5);
      setTypedText('');
    }, 9000);

    // Step 5: "Welcome in."
    const t5 = window.setTimeout(() => {
      setIntroStep(5);
    }, 9300);

    // Fade out everything
    const t6 = window.setTimeout(() => setFadeOut(true), 9800);

    // Full reset
    const t7 = window.setTimeout(() => {
      setShowIntro(false);
      setDrawLine(false);
      setIntroStep(0);
      setTypedText('');
      setFadeOut(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }, 10500);

    timeouts.current.push(t0, t1, t1_out, t2, t2_out, t3, t3_out, t4, t4_out, t5, t6, t7);
  };

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
                <div className="relative inline-block">
                  <button
                    onClick={handleGetStarted}
                    className="relative z-10 bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    GET STARTED
                  </button>

                  {showIntro && (
                    <div
                      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 transition-all duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
                    >
                      <style>{`
                        @keyframes hero-wave {
                          0%, 100% { transform: rotate(0deg); }
                          25% { transform: rotate(20deg); }
                          75% { transform: rotate(-15deg); }
                        }
                        .hero-wave-anim {
                          display: inline-block;
                          transform-origin: 70% 70%;
                          animation: hero-wave 1.5s infinite;
                        }
                      `}</style>
                      
                      {/* Infinity SVG Animation */}
                      <svg 
                        viewBox="0 0 200 100" 
                        className={`absolute w-[90vw] max-w-[800px] transition-all duration-500 ease-out ${introStep > 0 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                      >
                        <path
                           d="M 100,50 C 133,-10 200,-10 200,50 C 200,110 133,110 100,50 C 67,-10 0,-10 0,50 C 0,110 67,110 100,50 Z"
                           fill="none"
                           stroke="white"
                           strokeWidth="1.5"
                           pathLength="100"
                           strokeDasharray="100"
                           strokeDashoffset={drawLine ? 0 : 100}
                           style={{ transition: 'stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1)' }}
                        />
                      </svg>

                      {/* Step 1: Hey there! */}
                      <div className={`absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${introStep === 1 ? 'opacity-100 translate-y-0 scale-100' : introStep > 1 ? 'opacity-0 -translate-y-12 scale-90' : 'opacity-0 translate-y-12 scale-50'}`}>
                        <span className="text-white text-5xl md:text-7xl font-bold fascinate-regular">Hey there!</span>
                      </div>

                      {/* Step 2: Meera here */}
                      <div className={`absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-4 ${introStep === 2 ? 'opacity-100 scale-100' : introStep > 2 ? 'opacity-0 scale-90 blur-sm' : 'opacity-0 scale-50'}`}>
                        <span className="text-white text-5xl md:text-7xl font-bold fascinate-regular">Meera here</span>
                        <span className={`text-5xl md:text-7xl ${introStep === 2 ? 'hero-wave-anim' : ''}`}>👋</span>
                      </div>

                      {/* Step 3: code, coffee... types in */}
                      <div className={`absolute transition-all duration-300 px-4 text-center ${introStep === 3 ? 'opacity-100' : introStep > 3 ? 'opacity-0 -translate-y-4' : 'opacity-0'}`}>
                        <span className="text-white text-3xl md:text-5xl font-bold fascinate-regular leading-tight">
                          {introStep === 3 ? typedText : ''}
                          {introStep === 3 && <span className="inline-block w-[3px] h-[1em] bg-white align-middle ml-2 animate-pulse" />}
                        </span>
                      </div>

                      {/* Step 4: I build things... types in */}
                      <div className={`absolute transition-all duration-300 px-4 text-center max-w-5xl ${introStep === 4 ? 'opacity-100' : introStep > 4 ? 'opacity-0 -translate-y-4' : 'opacity-0'}`}>
                        <span className="text-gray-300 text-3xl md:text-5xl font-bold fascinate-regular leading-tight">
                          {introStep === 4 ? typedText : ''}
                          {introStep === 4 && <span className="inline-block w-[3px] h-[1em] bg-white align-middle ml-2 animate-pulse" />}
                        </span>
                      </div>

                      {/* Step 5: Welcome in */}
                      <div className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                        introStep === 5 && !fadeOut ? 'opacity-100 scale-100 translate-y-0' 
                        : fadeOut ? 'opacity-0 scale-[3] blur-xl' 
                        : 'opacity-0 scale-50 translate-y-12'
                      }`}>
                        <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 fascinate-regular">
                          Welcome in!
                        </span>
                      </div>
                    </div>
                  )}
                </div>

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
