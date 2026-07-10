
import React from 'react';

/* ─── Individual doodle SVGs ─────────────────────────────────── */

const GearDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="40" cy="40" r="12" />
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = 40 + 17 * Math.cos(rad), y1 = 40 + 17 * Math.sin(rad);
      const x2 = 40 + 26 * Math.cos(rad), y2 = 40 + 26 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="5" strokeLinecap="round" />;
    })}
    <circle cx="40" cy="40" r="26" strokeDasharray="5 3" />
  </svg>
);

const LaptopDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="15" y="18" width="50" height="32" rx="3" />
    <line x1="22" y1="27" x2="34" y2="27" />
    <line x1="22" y1="33" x2="44" y2="33" />
    <line x1="22" y1="39" x2="38" y2="39" />
    <path d="M8 50 h64 l-5 8 H13 Z" />
    <line x1="35" y1="50" x2="45" y2="50" />
  </svg>
);

const WifiDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M10 32 Q40 8 70 32" />
    <path d="M18 42 Q40 25 62 42" />
    <path d="M26 52 Q40 41 54 52" />
    <circle cx="40" cy="62" r="3" fill="currentColor" />
  </svg>
);

const CursorDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12 L20 55 L32 43 L42 65 L50 61 L40 39 L56 39 Z" />
    <path d="M58 18 Q70 25 65 40" strokeDasharray="3 3" />
    <circle cx="65" cy="42" r="2" fill="currentColor" />
  </svg>
);

const ShareDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="60" cy="20" r="8" />
    <circle cx="60" cy="60" r="8" />
    <circle cx="20" cy="40" r="8" />
    <line x1="28" y1="36" x2="52" y2="24" />
    <line x1="28" y1="44" x2="52" y2="56" />
  </svg>
);

const ThumbUpDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 55 V36 L44 14 Q54 14 54 24 L50 36 h14 Q68 36 68 44 Q68 52 60 52 Q62 60 56 62 Q58 68 50 68 H32 Q26 68 26 62 V55 Z" />
    <line x1="26" y1="36" x2="14" y2="36" />
    <line x1="14" y1="36" x2="14" y2="68" />
    <line x1="14" y1="68" x2="26" y2="68" />
  </svg>
);

const AtDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="40" cy="40" r="12" />
    <path d="M52 40 Q52 60 40 60 Q20 60 20 40 Q20 18 40 18 Q62 18 62 40 L62 46" />
    <line x1="62" y1="46" x2="58" y2="50" />
  </svg>
);

const VideoMonitorDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="14" width="64" height="42" rx="4" />
    <polygon points="32,26 32,46 54,36" />
    <line x1="28" y1="56" x2="28" y2="66" />
    <line x1="52" y1="56" x2="52" y2="66" />
    <line x1="20" y1="66" x2="60" y2="66" />
  </svg>
);

const ArrowRefreshDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 40 Q18 18 40 18 Q60 18 62 36" />
    <polygon points="62,28 62,40 50,34" fill="currentColor" stroke="none" />
    <path d="M62 40 Q62 62 40 62 Q20 62 18 44" />
    <polygon points="18,52 18,40 30,46" fill="currentColor" stroke="none" />
  </svg>
);

const BrowserDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="14" width="64" height="52" rx="4" />
    <line x1="8" y1="26" x2="72" y2="26" />
    <circle cx="18" cy="20" r="2.5" />
    <circle cx="28" cy="20" r="2.5" />
    <circle cx="38" cy="20" r="2.5" />
    <rect x="48" y="16" width="18" height="8" rx="2" />
    <line x1="20" y1="38" x2="60" y2="38" />
    <line x1="20" y1="48" x2="50" y2="48" />
    <line x1="20" y1="58" x2="44" y2="58" />
  </svg>
);

const PeopleDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="40" cy="18" r="10" />
    <circle cx="16" cy="42" r="8" />
    <circle cx="64" cy="42" r="8" />
    <line x1="40" y1="28" x2="40" y2="45" />
    <line x1="40" y1="45" x2="24" y2="42" />
    <line x1="40" y1="45" x2="56" y2="42" />
    <path d="M26 58 Q40 68 54 58" />
  </svg>
);

const UploadDoodle = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="26,36 40,20 54,36" />
    <line x1="40" y1="20" x2="40" y2="58" />
    <path d="M16 58 Q16 68 26 68 H54 Q64 68 64 58" />
  </svg>
);

/* ─── Types ───────────────────────────────────────────────────── */
interface DoodleItem {
  id: string;
  component: React.ReactNode;
  side: 'left' | 'right';
  /** px from the side edge — controls how far IN from the edge */
  edgeOffset: number;
  /** vertical position as % of total document height (vh) */
  topVh: number;
  /** idle rotation tilt in degrees */
  rotate: number;
  animation: 'swirl' | 'bounce' | 'shrink';
  /** size in px — each doodle is deliberately different */
  size: number;
}

/* ─── Scattered layout config ────────────────────────────────────
   Positions are hand-picked to feel random and unaligned.
   edgeOffset varies so items jut in/out at different depths.
   Sizes span 30–72 px so the visual weight differs across icons.
──────────────────────────────────────────────────────────────── */
const DOODLES: DoodleItem[] = [
  // ── LEFT SIDE ──────────────────────────────────────────────
  { id: 'l-gear',    component: <GearDoodle />,         side: 'left',  size: 64, edgeOffset: 22, topVh: 5,   rotate: -14, animation: 'swirl'  },
  { id: 'l-wifi',    component: <WifiDoodle />,          side: 'left',  size: 36, edgeOffset: 58, topVh: 18,  rotate: 9,   animation: 'bounce' },
  { id: 'l-people',  component: <PeopleDoodle />,        side: 'left',  size: 52, edgeOffset: 14, topVh: 31,  rotate: -5,  animation: 'shrink' },
  { id: 'l-at',      component: <AtDoodle />,            side: 'left',  size: 40, edgeOffset: 46, topVh: 47,  rotate: 17,  animation: 'swirl'  },
  { id: 'l-refresh', component: <ArrowRefreshDoodle />,  side: 'left',  size: 30, edgeOffset: 32, topVh: 60,  rotate: -20, animation: 'bounce' },
  { id: 'l-upload',  component: <UploadDoodle />,        side: 'left',  size: 58, edgeOffset: 10, topVh: 74,  rotate: 8,   animation: 'shrink' },
  { id: 'l-share',   component: <ShareDoodle />,         side: 'left',  size: 44, edgeOffset: 50, topVh: 87,  rotate: -10, animation: 'swirl'  },

  // ── RIGHT SIDE ─────────────────────────────────────────────
  { id: 'r-laptop',  component: <LaptopDoodle />,        side: 'right', size: 46, edgeOffset: 40, topVh: 3,   rotate: 12,  animation: 'shrink' },
  { id: 'r-cursor',  component: <CursorDoodle />,        side: 'right', size: 72, edgeOffset: 12, topVh: 15,  rotate: -7,  animation: 'swirl'  },
  { id: 'r-video',   component: <VideoMonitorDoodle />,  side: 'right', size: 38, edgeOffset: 54, topVh: 28,  rotate: 16,  animation: 'bounce' },
  { id: 'r-browser', component: <BrowserDoodle />,       side: 'right', size: 60, edgeOffset: 20, topVh: 43,  rotate: -11, animation: 'swirl'  },
  { id: 'r-thumb',   component: <ThumbUpDoodle />,       side: 'right', size: 32, edgeOffset: 44, topVh: 58,  rotate: 22,  animation: 'bounce' },
  { id: 'r-gear',    component: <GearDoodle />,          side: 'right', size: 54, edgeOffset: 16, topVh: 71,  rotate: -18, animation: 'shrink' },
  { id: 'r-at',      component: <AtDoodle />,            side: 'right', size: 42, edgeOffset: 36, topVh: 85,  rotate: 6,   animation: 'swirl'  },
];

/* ─── Single doodle node ─────────────────────────────────────── */
const Doodle: React.FC<DoodleItem> = ({
  component, side, edgeOffset, topVh, rotate, animation, size,
}) => {
  const posStyle: React.CSSProperties = {
    position: 'fixed',
    [side]: edgeOffset,
    top: `${topVh}vh`,
    width: size,
    height: size,
    zIndex: 0,
    color: 'rgba(0,0,0,0.14)',
    cursor: 'default',
    transform: `rotate(${rotate}deg)`,
    transition: 'color 0.25s ease',
    pointerEvents: 'none',
  };

  return (
    <div
      style={posStyle}
      className={`doodle-anim-${animation}`}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.58)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.14)'; }}
    >
      {component}
    </div>
  );
};

/* ─── Main export ────────────────────────────────────────────── */
const DoodleDecorations: React.FC = () => (
  <div className="hidden xl:block">
    {DOODLES.map(d => <Doodle key={d.id} {...d} />)}
  </div>
);

export default DoodleDecorations;
