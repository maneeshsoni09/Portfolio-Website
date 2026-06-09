import React, { useState, useEffect } from 'react';

interface HeaderNavbarProps {
  scrollPercentage: number;
  activeLevel: number;
  onNavigate: (sectionId: string) => void;
  onGalleryOpen: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  scrollPercentage,
  activeLevel,
  onNavigate,
  onGalleryOpen,
}) => {
  const [xp, setXp] = useState(0);

  // Compute XP earned based on scroll progress (up to 15,000 XP)
  useEffect(() => {
    const targetXp = Math.floor(scrollPercentage * 15000);

    // Animate XP number incrementing smoothly
    const startXp = xp;
    if (startXp === targetXp) return;

    const diff = targetXp - startXp;
    const duration = 200; // ms
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const stepValue = diff / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setXp(prev => {
        const next = Math.floor(prev + stepValue);
        if (currentStep >= steps) {
          clearInterval(timer);
          return targetXp;
        }
        return next;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [scrollPercentage]);

  const navItems = [
    { label: 'HOME', id: 'hero', level: 0 },
    { label: 'ABOUT', id: 'profile', level: 1 },
    { label: 'SKILLS', id: 'skills', level: 2 },
    { label: 'PROJECTS', id: 'projects', level: 3 },
    { label: 'EXPERIENCE', id: 'experience', level: 4 },
    { label: 'ACHIEVEMENTS', id: 'achievements', level: 5 },
    { label: 'CONTACT', id: 'final', level: 6 },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '75px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        backgroundColor: 'rgba(5, 5, 5, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1.5px solid rgba(255, 23, 68, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
      }}
    >
      {/* Top Left: Glowing Geometric Logo */}
      <div
        onClick={() => onNavigate('hero')}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        className="group"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {/* Circle */}
          <svg viewBox="0 0 100 100" style={{ width: '15px', height: '15px' }}>
            <circle cx="50" cy="50" r="38" stroke="#FF1744" strokeWidth="14" fill="none" />
          </svg>
          {/* Triangle */}
          <svg viewBox="0 0 100 100" style={{ width: '15px', height: '15px' }}>
            <polygon points="50,12 90,82 10,82" stroke="#FF1744" strokeWidth="14" fill="none" />
          </svg>
          {/* Square */}
          <svg viewBox="0 0 100 100" style={{ width: '15px', height: '15px' }}>
            <rect x="14" y="14" width="72" height="72" stroke="#FF1744" strokeWidth="14" fill="none" />
          </svg>
        </div>

      </div>

      {/* Top Center: Horizontal Menu & Active Underlines */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = activeLevel === item.level;
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: isActive ? 'var(--accent-red)' : 'var(--text-white)',
                fontFamily: 'var(--font-accent)',
                fontSize: '0.75rem',
                fontWeight: isActive ? 800 : 500,
                letterSpacing: '2px',
                cursor: 'pointer',
                padding: '6px 0',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              className="hover:text-[var(--accent-red)] group"
            >
              {item.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: isActive ? '100%' : '0%',
                  height: '2px',
                  backgroundColor: 'var(--accent-red)',
                  transition: 'width 0.3s ease',
                }}
                className="group-hover:w-full"
              />
            </button>
          );
        })}
      </nav>

      {/* Top Right: XP counter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Gallery Button */}
        <button
          onClick={onGalleryOpen}
          style={{
            background: 'rgba(255, 23, 68, 0.1)',
            border: '1px solid var(--accent-red)',
            color: 'var(--text-white)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '1.5px',
            padding: '6px 14px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          className="hover:bg-[var(--accent-red)] hover:text-white"
        >
          MY GALLERY
        </button>

        {/* XP Tracker */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} className="hidden sm:flex">
          <span style={{ fontSize: '0.52rem', fontFamily: 'var(--font-accent)', color: 'var(--text-muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            SURVIVAL SCORE
          </span>
          <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 800 }}>
            XP <span style={{ color: 'var(--accent-red)' }}>{xp.toLocaleString()}</span>
          </span>
        </div>
      </div>
    </header>
  );
};
