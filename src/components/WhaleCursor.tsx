import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  text: string;
}

export const WhaleCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Particle[]>([]);
  const [clickCount, setClickCount] = useState(0);

  const requestRef = useRef<number | null>(null);
  const mousePosRef = useRef({ x: -100, y: -100 });
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide default cursor and configure cyber area style scope
  useEffect(() => {
    if (isMobile) return;

    document.body.classList.add('custom-cursor-area');
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-cursor-area,
      .custom-cursor-area a,
      .custom-cursor-area button,
      .custom-cursor-area input,
      .custom-cursor-area textarea,
      .custom-cursor-area [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.classList.remove('custom-cursor-area');
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      // Spawn trail particles on move
      if (Math.random() < 0.25) {
        spawnParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = () => {
      setClickCount(prev => prev + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Animation loop
    const animate = () => {
      setTrail(prevTrail =>
        prevTrail
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            alpha: p.alpha - 0.02,
          }))
          .filter(p => p.alpha > 0)
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

  const spawnParticle = (x: number, y: number) => {
    const id = particleIdRef.current++;
    const newParticle: Particle = {
      id,
      x: x + (Math.random() - 0.5) * 12,
      y: y + (Math.random() - 0.5) * 12,
      vx: (Math.random() - 0.5) * 1.2,
      vy: Math.random() * 0.8 + 0.3, // drifts down
      alpha: 1,
      size: Math.random() * 2 + 1,
      text: Math.random() > 0.5 ? '◯' : Math.random() > 0.5 ? '△' : '▢',
    };
    setTrail(prev => [...prev, newParticle].slice(-30)); // limit trail size
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
        zIndex: 999999,
      }}
    >
      {/* Trailing digital bit stream */}
      {trail.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            fontSize: '8px',
            fontFamily: 'monospace',
            color: 'var(--accent-red)',
            opacity: p.alpha,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {p.text}
        </span>
      ))}

      {/* Cyber Reticle Target Circle */}
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: '24px',
          height: '24px',
          border: '1.5px solid var(--accent-red)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(255, 23, 68, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.1s, height 0.1s',
        }}
      >
        {/* Crosshair Dots */}
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-white)' }} />
      </div>

      {/* Crosshair outer lines */}
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: '32px',
          height: '1px',
          backgroundColor: 'rgba(255, 23, 68, 0.3)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: '1px',
          height: '32px',
          backgroundColor: 'rgba(255, 23, 68, 0.3)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Dynamic Ripple Ring on click */}
      {clickCount > 0 && (
        <div
          key={`ripple-${clickCount}`}
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid var(--accent-red)',
            boxShadow: '0 0 15px var(--accent-red)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
          className="reticle-ripple"
        />
      )}
    </div>
  );
};
