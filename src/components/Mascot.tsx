import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MascotProps {
  className?: string;
  onClickShape?: () => void;
  lookAtCounter?: boolean;
}

type GuardShape = 'circle' | 'triangle' | 'square';

export const Mascot: React.FC<MascotProps> = ({
  className = '',
  onClickShape,
  lookAtCounter = false
}) => {
  const [currentShape, setCurrentShape] = useState<GuardShape>('circle');
  const [isHovered, setIsHovered] = useState(false);

  // Cycle mascot mask shape automatically every 8 seconds
  useEffect(() => {
    const shapes: GuardShape[] = ['circle', 'triangle', 'square'];
    const timer = setInterval(() => {
      setCurrentShape(prev => {
        const idx = shapes.indexOf(prev);
        return shapes[(idx + 1) % shapes.length];
      });
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleMascotClick = () => {
    const shapes: GuardShape[] = ['circle', 'triangle', 'square'];
    const idx = shapes.indexOf(currentShape);
    const nextShape = shapes[(idx + 1) % shapes.length];
    setCurrentShape(nextShape);
    if (onClickShape) {
      onClickShape();
    }
  };

  // Visor symbol animations (blinking) values
  const blinkAnimValues = {
    opacity: [1, 1, 0.1, 1, 1, 0.1, 1, 1]
  };
  const blinkTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
    times: [0, 0.6, 0.62, 0.64, 0.85, 0.87, 0.89, 1]
  };

  // Soft float animation for the entire mascot
  const floatAnimValues = {
    y: [0, -8, 0],
    rotate: lookAtCounter ? [1, 3, 1] : [-1, 1, -1]
  };
  const floatTransition = {
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  // Head tilt animation
  const headTiltValues = {
    rotate: isHovered ? (lookAtCounter ? 6 : -5) : (lookAtCounter ? 4 : [-2, 2, -2]),
    x: lookAtCounter ? 4 : 0
  };
  const headTiltTransition = {
    duration: isHovered ? 0.3 : 5,
    repeat: isHovered ? 0 : Infinity,
    ease: "easeInOut" as const
  };

  return (
    <motion.div
      className={`relative cursor-pointer select-none ${className}`}
      animate={floatAnimValues}
      transition={floatTransition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleMascotClick}
      aria-label="Interactive Mascot Host"
      style={{ transformOrigin: 'bottom center' }}
    >
      {/* Interactive Speech Bubbles (Subtle microinteraction when hovered) */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[var(--surface-dark)] border border-[var(--accent-red)]/40 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md pointer-events-none text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 z-30"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          y: isHovered ? 0 : 10
        }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <span>CLICK MASK</span>
        <span className="text-[var(--accent-red)] animate-pulse">●</span>
      </motion.div>

      {/* Main Mascot SVG */}
      <svg
        viewBox="0 0 200 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Neon visors glow filter */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Mask mesh pattern */}
          <pattern id="mesh-grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#222" strokeWidth="0.8" />
          </pattern>

          {/* Torso gradient */}
          <linearGradient id="suit-grad" x1="100" y1="120" x2="100" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF1744" />
            <stop offset="100%" stopColor="#8A001A" />
          </linearGradient>

          {/* Mask shadows */}
          <radialGradient id="mask-shading" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#0a0a0a" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.85" />
          </radialGradient>
        </defs>

        {/* ================= TORSO & SUIT ================= */}
        <path
          d="M 40 250 C 40 180, 70 155, 100 155 C 130 155, 160 180, 160 250 Z"
          fill="url(#suit-grad)"
          stroke="#40000A"
          strokeWidth="3"
        />

        {/* Strap / Harness Details (Squid Game Guard Vibe) */}
        <path d="M 65 170 L 85 250" stroke="#1c1c1c" strokeWidth="7" strokeLinecap="round" />
        <path d="M 135 170 L 115 250" stroke="#1c1c1c" strokeWidth="7" strokeLinecap="round" />
        <rect x="94" y="200" width="12" height="18" rx="2" fill="#2d2d2d" stroke="#111" strokeWidth="1.5" />
        
        {/* Zipper line */}
        <line x1="100" y1="175" x2="100" y2="250" stroke="#1c1c1c" strokeWidth="2.5" />
        <path d="M 97 175 L 103 175 M 98 185 L 102 185" stroke="#FF1744" strokeWidth="2" />

        {/* Collar of Jumpsuit */}
        <path
          d="M 68 152 Q 100 170 132 152"
          stroke="#8A001A"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* ================= HEAD / HOOD (Animated Group) ================= */}
        <motion.g animate={headTiltValues} transition={headTiltTransition} style={{ originX: '100px', originY: '145px' }}>
          
          {/* Outer Pink Hood */}
          <path
            d="M 45 100 C 45 40, 155 40, 155 100 C 155 130, 142 150, 100 150 C 58 150, 45 130, 45 100 Z"
            fill="url(#suit-grad)"
            stroke="#40000A"
            strokeWidth="3.5"
          />

          {/* Hood Inner Shadow Area (Dark backing) */}
          <path
            d="M 54 102 C 54 50, 146 50, 146 102 C 146 126, 136 142, 100 142 C 64 142, 54 126, 54 102 Z"
            fill="#0f0f0f"
          />

          {/* Mask Frame (Black mesh visor face) */}
          <path
            d="M 58 102 C 58 58, 142 58, 142 102 C 142 122, 132 138, 100 138 C 68 138, 58 122, 58 102 Z"
            fill="#121212"
          />
          {/* Grid pattern overlay on mask */}
          <path
            d="M 58 102 C 58 58, 142 58, 142 102 C 142 122, 132 138, 100 138 C 68 138, 58 122, 58 102 Z"
            fill="url(#mesh-grid)"
          />
          {/* 3D shading on mask */}
          <path
            d="M 58 102 C 58 58, 142 58, 142 102 C 142 122, 132 138, 100 138 C 68 138, 58 122, 58 102 Z"
            fill="url(#mask-shading)"
          />

          {/* ================= MASK GEOMETRIC SHAPES (Blinking) ================= */}
          <motion.g
            animate={blinkAnimValues}
            transition={blinkTransition}
            style={{ originX: '100px', originY: '95px' }}
            filter="url(#neon-glow)"
          >
            {/* Draw Circle */}
            {currentShape === 'circle' && (
              <circle
                cx="100"
                cy="95"
                r="18"
                stroke="#FFFFFF"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* Draw Triangle */}
            {currentShape === 'triangle' && (
              <polygon
                points="100,75 120,111 80,111"
                stroke="#FFFFFF"
                strokeWidth="4.5"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            )}

            {/* Draw Square */}
            {currentShape === 'square' && (
              <rect
                x="83"
                y="78"
                width="34"
                height="34"
                rx="4"
                stroke="#FFFFFF"
                strokeWidth="4.5"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            )}
          </motion.g>

          {/* Subtly animated reflection glare on mask */}
          <path
            d="M 70 70 A 35 35 0 0 1 125 65"
            stroke="white"
            strokeOpacity="0.08"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>

        {/* ================= HANDS (Peeking/Holding Overlay) ================= */}
        {/* Left hand gripping the poster (placed to match layout overlay) */}
        <g className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {/* Grip Fingers */}
          <path
            d="M 22 130 C 12 130 8 140 10 148 C 12 154 20 156 26 150 M 24 140 C 16 140 12 148 14 156 C 16 162 24 162 30 156 M 26 150 C 20 150 18 156 20 164 C 22 170 28 170 34 162"
            stroke="#111"
            strokeWidth="3"
            fill="#FF1744"
          />
          {/* Thumb */}
          <path
            d="M 30 124 C 25 124 22 130 26 136 C 29 140 34 138 32 130"
            stroke="#111"
            strokeWidth="3"
            fill="#FF1744"
          />
        </g>
      </svg>
    </motion.div>
  );
};
