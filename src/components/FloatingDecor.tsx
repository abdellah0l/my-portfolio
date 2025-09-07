import { motion } from 'framer-motion';

type Decor = {
  type: 'emoji' | 'svg';
  content?: string;
  size: number;
  colorClass?: string;
  svg?: JSX.Element;
};

const SpiderWeb = ({ size, colorClass }: { size: number; colorClass?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`${colorClass || ''}`}> 
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="50" r="45" />
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="15" />
      <line x1="50" y1="5" x2="50" y2="95" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <line x1="15" y1="15" x2="85" y2="85" />
      <line x1="85" y1="15" x2="15" y2="85" />
    </g>
  </svg>
);

const SpiderEmblem = ({ size, colorClass }: { size: number; colorClass?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`${colorClass || ''}`}>
    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <ellipse cx="50" cy="50" rx="18" ry="24" />
      <line x1="50" y1="20" x2="50" y2="10" />
      <line x1="50" y1="80" x2="50" y2="90" />
      <line x1="32" y1="40" x2="15" y2="30" />
      <line x1="68" y1="40" x2="85" y2="30" />
      <line x1="32" y1="60" x2="15" y2="70" />
      <line x1="68" y1="60" x2="85" y2="70" />
    </g>
  </svg>
);

const spideyAndMath: Decor[] = [
  { type: 'emoji', content: '🕷️', size: 36, colorClass: 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.45)]' },
  { type: 'emoji', content: '🕸️', size: 40, colorClass: 'text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.45)]' },
  { type: 'svg', size: 70, colorClass: 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]', svg: <SpiderEmblem size={70} colorClass="" /> },
  { type: 'svg', size: 90, colorClass: 'text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]', svg: <SpiderWeb size={90} colorClass="" /> },
  { type: 'emoji', content: '∑', size: 34, colorClass: 'text-primary drop-shadow-[0_0_8px_rgba(99,102,241,0.45)]' },
  { type: 'emoji', content: 'π', size: 34, colorClass: 'text-accent drop-shadow-[0_0_8px_rgba(34,197,94,0.45)]' },
  { type: 'emoji', content: '∞', size: 34, colorClass: 'text-primary drop-shadow-[0_0_8px_rgba(99,102,241,0.45)]' },
  { type: 'emoji', content: '∫', size: 36, colorClass: 'text-accent drop-shadow-[0_0_8px_rgba(34,197,94,0.45)]' },
  { type: 'emoji', content: '√', size: 34, colorClass: 'text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.45)]' },
  { type: 'emoji', content: 'Δ', size: 34, colorClass: 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.45)]' },
  { type: 'svg', size: 60, colorClass: 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]', svg: <SpiderEmblem size={60} colorClass="" /> },
  { type: 'svg', size: 80, colorClass: 'text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]', svg: <SpiderWeb size={80} colorClass="" /> },
  { type: 'emoji', content: '🕷️', size: 32, colorClass: 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.45)]' },
  { type: 'emoji', content: '🕸️', size: 36, colorClass: 'text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.45)]' },
];

const positions = [
  // Left edge placements
  { top: '6%', left: '2%' },
  { top: '14%', left: '3%' },
  { top: '22%', left: '4%' },
  { top: '30%', left: '2.5%' },
  { top: '38%', left: '3.5%' },
  { top: '46%', left: '2%' },
  { top: '58%', left: '4%' },
  { top: '68%', left: '2.5%' },
  { top: '78%', left: '3%' },
  { top: '88%', left: '4%' },
  // Right edge placements
  { top: '10%', right: '2%' },
  { top: '18%', right: '3%' },
  { top: '26%', right: '4%' },
  { top: '34%', right: '2.5%' },
  { top: '42%', right: '3.5%' },
  { top: '54%', right: '2%' },
  { top: '64%', right: '4%' },
  { top: '74%', right: '2.5%' },
  { top: '82%', right: '3%' },
  { top: '92%', right: '4%' },
];

const FloatingDecor = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {spideyAndMath.map((item, idx) => {
        const pos = positions[idx % positions.length];
        const duration = 7 + (idx % 5);
        const delay = (idx % 3) * 0.8;
        const horizontalDrift = (idx % 2 === 0) ? 16 : -16;
        return (
          <motion.div
            key={idx}
            className={`absolute select-none ${item.colorClass || 'text-primary/60'}`}
            style={{ ...pos, fontSize: item.size, filter: 'saturate(1.2)' }}
            initial={{ y: 0, x: 0, opacity: 0 }}
            animate={{
              y: [0, -28, 0, 28, 0],
              x: [0, horizontalDrift, 0, -horizontalDrift, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.35, 0.7, 0.5, 0.7, 0.35],
            }}
            transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut' }}
          >
            {item.type === 'emoji' ? item.content : item.svg}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingDecor;


