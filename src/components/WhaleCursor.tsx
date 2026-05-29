import React, { useState, useEffect, useRef } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

interface WhaleCursorProps {
  introComplete?: boolean;
}

export const WhaleCursor: React.FC<WhaleCursorProps> = ({ introComplete = true }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [whalePos, setWhalePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [scaleY, setScaleY] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  
  const requestRef = useRef<number | null>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const whalePosRef = useRef({ x: 0, y: 0 });
  const lastMoveTimeRef = useRef(Date.now());
  const bubbleIdRef = useRef(0);
  const isMovingRef = useRef(false);
  const isFlippedRef = useRef(false);

  // Monitor screen width to responsive disable cursor on mobile/touch interfaces
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive hide standard cursor only when both desktop screen is active and subsea intro is fully complete
  useEffect(() => {
    if (isMobile || !introComplete) {
      document.body.classList.remove('submerged-mode');
      return;
    }

    // Apply the active subsea mode class to the body
    document.body.classList.add('submerged-mode');

    // Scoped CSS styles to hide mouse only inside active portfolio
    const style = document.createElement('style');
    style.innerHTML = `
      .submerged-mode,
      .submerged-mode a,
      .submerged-mode button,
      .submerged-mode select,
      .submerged-mode input,
      .submerged-mode textarea,
      .submerged-mode [role="button"],
      .submerged-mode .group {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.classList.remove('submerged-mode');
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [isMobile, introComplete]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      lastMoveTimeRef.current = Date.now();
      
      if (!isMovingRef.current) {
        isMovingRef.current = true;
        setIsMoving(true);
      }
    };

    const handleMouseDown = () => {
      setClickCount(prev => prev + 1);
      spawnBubbleBurst(whalePosRef.current.x, whalePosRef.current.y, isFlippedRef.current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Animation Loop
    const animate = () => {
      const targetX = mousePosRef.current.x;
      const targetY = mousePosRef.current.y;
      
      let currX = whalePosRef.current.x;
      let currY = whalePosRef.current.y;

      // Spring physics (lerp interpolation)
      const dx = targetX - currX;
      const dy = targetY - currY;
      
      // Update position with a natural subsea drag delay
      currX += dx * 0.085;
      currY += dy * 0.085;
      
      whalePosRef.current = { x: currX, y: currY };
      setWhalePos({ x: currX, y: currY });

      // Calculate swimming direction angle
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        let angle = Math.atan2(dy, dx);
        
        // Flip whale vertically when swimming left to keep it upright
        if (dx < 0) {
          setScaleY(-1);
          isFlippedRef.current = true;
          // Adjust angle offset when scale is flipped
          angle = angle + Math.PI;
        } else {
          setScaleY(1);
          isFlippedRef.current = false;
        }
        
        setRotation(angle);
      }

      // Check if mouse has stopped moving
      if (Date.now() - lastMoveTimeRef.current > 150) {
        if (isMovingRef.current) {
          isMovingRef.current = false;
          setIsMoving(false);
        }
      }

      // Randomly spawn blowhole bubbles from the whale's back
      if (Math.random() < (isMovingRef.current ? 0.095 : 0.025)) {
        spawnBubble(currX, currY, isFlippedRef.current);
      }

      // Animate bubbles
      setBubbles(prevBubbles => 
        prevBubbles
          .map(b => ({
            ...b,
            x: b.x + b.vx,
            y: b.y + b.vy - 0.65, // float up
            opacity: b.opacity - 0.012, // fade slightly slower
          }))
          .filter(b => b.opacity > 0)
      );

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile]);

  const spawnBubble = (wx: number, wy: number, isFlipped: boolean) => {
    // The blowhole is located slightly forward of center on the Humpback's back
    const blowholeX = wx + (isFlipped ? -8 : 8);
    const blowholeY = wy - 8;

    const id = bubbleIdRef.current++;
    const newBubble: Bubble = {
      id,
      x: blowholeX,
      y: blowholeY,
      size: Math.random() * 4 + 2,
      opacity: 0.85,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -Math.random() * 0.5 - 0.3,
    };
    setBubbles(prev => [...prev, newBubble]);
  };

  const spawnBubbleBurst = (wx: number, wy: number, isFlipped: boolean) => {
    const burstCount = 7 + Math.floor(Math.random() * 5);
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < burstCount; i++) {
      const blowholeX = wx + (isFlipped ? -8 : 8);
      const blowholeY = wy - 8;
      const id = bubbleIdRef.current++;
      newBubbles.push({
        id,
        x: blowholeX,
        y: blowholeY,
        size: Math.random() * 5 + 3, // slightly larger
        opacity: 0.95,
        vx: (Math.random() - 0.5) * 3.2, // wider spread
        vy: -Math.random() * 2.0 - 0.8, // floats up faster
      });
    }
    setBubbles(prev => [...prev, ...newBubbles]);
  };

  if (isMobile) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999999, // Ensure custom cursor floats over ALL modals & headers
      }}
    >
      {/* 1. Target Snout Reticle (Glowing Bubble) at exact mouse click coordinates */}
      <div 
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'rgba(63, 226, 201, 0.75)',
          boxShadow: '0 0 10px rgba(63, 226, 201, 0.85)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Ripple ring on click */}
      {clickCount > 0 && (
        <div 
          key={`ripple-${clickCount}`}
          className="reticle-ripple"
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '2px solid rgba(63, 226, 201, 0.85)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* 2. Rising Blowhole Bubbles Trail */}
      {bubbles.map(b => (
        <div 
          key={b.id}
          style={{
            position: 'absolute',
            left: b.x,
            top: b.y,
            width: `${b.size}px`,
            height: `${b.size}px`,
            borderRadius: '50%',
            border: '1.2px solid rgba(63, 226, 201, 0.5)',
            backgroundColor: 'rgba(163, 243, 230, 0.15)',
            opacity: b.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* 3. Sleek swimming Humpback Whale mouse-trailer */}
      <div 
        style={{
          position: 'absolute',
          left: whalePos.x,
          top: whalePos.y,
          transform: `translate(-50%, -50%) rotate(${rotation}rad) scaleY(${scaleY})`,
          transformOrigin: '50% 50%',
          filter: 'drop-shadow(0 4px 10px rgba(2, 12, 27, 0.55))',
        }}
      >
        <div
          key={clickCount}
          className={clickCount > 0 ? 'whale-click-anim' : ''}
          style={{
            transformOrigin: '50% 50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg 
            width="80" 
            height="32" 
            viewBox="0 0 80 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="realisticWhaleBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="55%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>

            {/* Background Pectoral Fin (slightly darker for realistic depth) */}
            <path 
              d="M 45,18 C 42,21 38,24 33,24 C 31,23 35,20 40,17 C 43,15 45,16 45,18 Z" 
              fill="#082f49" 
              opacity="0.7"
            />
            
            {/* Whale Main Body */}
            <path 
              d="M 72,15 C 68,10 60,8 54,8 C 44,8 34,9 25,12 C 20,13 14,14 10,14 C 11,15 11,15.5 10,16 C 14,16 19,16.5 23,17 C 32,20 43,21 56,20 C 65,19 71,17 72,15 Z" 
              fill="url(#realisticWhaleBodyGrad)" 
              stroke="#0284c7" 
              strokeWidth="1.2" 
              strokeLinejoin="round"
            />

            {/* Throat Grooves / Ventral Pleats (highly characteristic humpback baleen lines) */}
            <path d="M 68,16 C 63,18 55,20 48,19" stroke="rgba(63, 226, 201, 0.65)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            <path d="M 66,17 C 61,19 54,20.8 49,19.8" stroke="rgba(63, 226, 201, 0.55)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            <path d="M 63,18.2 C 59,20 53,21.5 49,20.5" stroke="rgba(63, 226, 201, 0.45)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            <path d="M 60,19 C 56,20.5 52,21.8 49,21.0" stroke="rgba(63, 226, 201, 0.3)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            
            {/* Elegant glowing eye */}
            <circle cx="64" cy="12.5" r="0.7" fill="#a3f3e6" />
            <circle cx="64" cy="12.5" r="1.5" fill="rgba(63, 226, 201, 0.4)" />

            {/* Dorsal Fin */}
            <path 
              d="M 33,8.5 C 31,6.5 28,5.8 26,6 C 27.5,7.8 29.5,8.5 30.5,8.8 Z" 
              fill="url(#realisticWhaleBodyGrad)"
              stroke="#0284c7"
              strokeWidth="0.8"
            />

            {/* Active Up/Down Wiggling Tail Fluke */}
            <g className={`whale-tail ${isMoving ? 'swimming' : 'floating'}`}>
              <path 
                d="M 10,14 C 8,11 3,7 2,8 C 3,11 6,13.5 10,15 C 6,16.5 3,19 2,22 C 3,23 8,19 10,16 Z" 
                fill="url(#realisticWhaleBodyGrad)" 
                stroke="#0284c7" 
                strokeWidth="1.0" 
                strokeLinejoin="round" 
              />
            </g>

            {/* Front Main Pectoral Fin */}
            <path 
              d="M 49,17 C 46,21 40,27 34,28 C 32.5,28.2 33,27 36,24 C 41,19 46,17.2 49,17 Z" 
              fill="url(#realisticWhaleBodyGrad)" 
              stroke="#0284c7" 
              strokeWidth="1.0" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* CSS keyframes for dynamic cursor oscillations & click responses */}
      <style>{`
        @keyframes subsea-tail-wiggle {
          0%, 100% { transform: rotate(-7deg); }
          50% { transform: rotate(7deg); }
        }
        @keyframes subsea-tail-drift {
          0%, 100% { transform: rotate(-1.5deg); }
          50% { transform: rotate(1.5deg); }
        }
        @keyframes subsea-whale-bounce {
          0% { transform: scale(1); }
          12% { transform: scale(1.3, 0.7); } /* Squish */
          40% { transform: scale(0.8, 1.25); } /* Stretch */
          70% { transform: scale(1.1, 0.9); }  /* Wobble bounce */
          100% { transform: scale(1); }
        }
        @keyframes ripple-expand {
          0% { transform: translate(-50%, -50%) scale(0.2); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.0); opacity: 0; }
        }
        
        .whale-tail {
          transform-origin: 10px 15px;
        }
        .whale-tail.swimming {
          animation: subsea-tail-wiggle 0.25s ease-in-out infinite;
        }
        .whale-tail.floating {
          animation: subsea-tail-drift 2.2s ease-in-out infinite;
        }
        .whale-click-anim {
          animation: subsea-whale-bounce 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .reticle-ripple {
          animation: ripple-expand 0.45s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

