import React from 'react';
import { motion } from 'framer-motion';
import maneeshAvatar from '../../assets/maneesh_profile_avatar.png';

interface HeroProps {
  onStartGame: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartGame,
  onNavigate
}) => {

  const levelCards = [
    {
      num: '01',
      title: 'ABOUT',
      desc: 'Get to know Player 456',
      id: 'profile',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 mx-auto text-[#FF1744]">
          <circle cx="50" cy="50" r="32" stroke="#FF1744" strokeWidth="6" fill="none" />
          <circle cx="50" cy="50" r="14" stroke="#FF1744" strokeWidth="4" fill="none" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'SKILLS',
      desc: 'Check my abilities',
      id: 'skills',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 mx-auto text-[#FF1744]">
          <polygon points="50,15 85,80 15,80" stroke="#FF1744" strokeWidth="6" fill="none" />
          <polygon points="50,38 70,72 30,72" stroke="#FF1744" strokeWidth="4" fill="none" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'PROJECTS',
      desc: 'Explore my creations',
      id: 'projects',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 mx-auto text-[#FF1744]">
          <circle cx="50" cy="50" r="30" stroke="#FF1744" strokeWidth="6" fill="none" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'EXPERIENCE',
      desc: 'Corporate assignments',
      id: 'experience',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 mx-auto text-[#FF1744]">
          <polygon points="50,18 82,78 18,78" stroke="#FF1744" strokeWidth="6" fill="none" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'ACHIEVEMENTS',
      desc: 'Unlocked milestones',
      id: 'achievements',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 mx-auto text-[#FF1744]">
          <rect x="22" y="22" width="56" height="56" stroke="#FF1744" strokeWidth="6" fill="none" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'CONTACT',
      desc: "Let's create opportunities",
      id: 'final',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 mx-auto text-[#FF1744]">
          <polygon points="50,10 63,38 93,38 69,56 78,86 50,68 22,86 31,56 7,38 37,38" stroke="#FF1744" strokeWidth="6" fill="none" />
        </svg>
      )
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '100px' }} className="px-6 md:px-12 max-w-7xl mx-auto text-left">

      {/* Top Split Grid: Candidate Intro vs Large Portrait Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 pb-16 border-b border-neutral-900">

        {/* Left Column: Heading and details */}
        <div className="lg:col-span-7 flex flex-col items-start">

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-accent)', letterSpacing: '2px', fontSize: '0.7rem', color: 'var(--accent-red)', fontWeight: 800 }} className="mb-2">
            <span>WELCOME PLAYER 456</span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-red)' }} className="animate-pulse" />
            <span style={{ color: 'var(--text-muted)' }}>STATUS: ACTIVE</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              color: 'var(--text-white)',
              letterSpacing: '3px',
              lineHeight: '1.05'
            }}
            className="mb-4"
          >
            MANEESH SONI
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }} className="mb-6">
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-accent)', color: 'var(--accent-red)', fontWeight: 800, letterSpacing: '1px' }}>
              FULL STACK DEVELOPER
            </span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-accent)', color: 'var(--accent-red)', fontWeight: 800, letterSpacing: '1px' }}>
              AI/ML ENGINEER
            </span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>

          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
              maxWidth: '560px'
            }}
            className="mb-8"
          >
            Building intelligent software systems that solve real-world challenges. Explore the level modules below to check tech stacks, timeline milestones, and social credentials.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button
              onClick={onStartGame}
              className="btn-neon-primary flex items-center gap-2 group"
            >
              <span>ENTER THE GAME</span>
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Large Professional Portrait Photo */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[380px] group"
          >
            {/* Ambient Red Glow Layer */}
            <div
              className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255, 23, 68, 0.4) 0%, transparent 70%)',
                transform: 'scale(1.1)'
              }}
            />

            {/* Premium minimal image frame */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '16px',
                border: '1.5px solid rgba(255, 23, 68, 0.3)',
                backgroundColor: 'var(--surface-dark)',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="group-hover:border-[var(--accent-red)] group-hover:shadow-[0_8px_30px_rgba(255,23,68,0.15)]"
            >
              <img
                src={maneeshAvatar}
                alt="Maneesh Soni"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(35%) contrast(105%)',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="group-hover:scale-105 group-hover:filter-none"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* CHOOSE YOUR LEVEL Portal Grid */}
      <div className="py-16 border-b border-neutral-900">
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', letterSpacing: '2px', fontWeight: 900 }} className="mb-2">
          CHOOSE YOUR LEVEL
        </h2>
        <div className="flex gap-2 mb-8">
          <svg viewBox="0 0 100 100" className="w-3 h-3 text-[#FF1744]">
            <circle cx="50" cy="50" r="38" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
          <svg viewBox="0 0 100 100" className="w-3 h-3 text-[#FF1744]">
            <polygon points="50,12 90,82 10,82" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
          <svg viewBox="0 0 100 100" className="w-3 h-3 text-[#FF1744]">
            <rect x="14" y="14" width="72" height="72" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {levelCards.map((card) => (
            <div
              key={card.num}
              onClick={() => onNavigate(card.id)}
              className="cyber-card p-5 flex flex-col justify-between items-center text-center cursor-pointer group"
              style={{ minHeight: '190px' }}
            >
              <div>
                <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-accent)', color: 'var(--accent-red)', letterSpacing: '1px', fontWeight: 800 }} className="mb-3">
                  LEVEL {card.num}
                </div>
                <div className="mb-3 transform group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 900, letterSpacing: '0.5px' }} className="mb-0.5">
                  {card.title}
                </div>
                <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PLAYER STATS (Bottom horizontal statistics row) */}
      <div className="py-12 text-left">
        <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', color: 'var(--accent-red)', letterSpacing: '2px', fontWeight: 800 }} className="mb-6">
          PLAYER STATS
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          <div className="border-b border-[#FF1744]/20 pb-3">
            <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-accent)', color: 'var(--text-muted)', letterSpacing: '0.5px' }} className="mb-1">
              PROJECTS BUILT
            </div>
            <div style={{ fontSize: '1.65rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 900 }}>
              12<span style={{ color: 'var(--accent-red)' }}>+</span>
            </div>
          </div>

          <div className="border-b border-[#FF1744]/20 pb-3">
            <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-accent)', color: 'var(--text-muted)', letterSpacing: '0.5px' }} className="mb-1">
              TECHNOLOGIES MASTERED
            </div>
            <div style={{ fontSize: '1.65rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 900 }}>
              20<span style={{ color: 'var(--accent-red)' }}>+</span>
            </div>
          </div>

          <div className="border-b border-[#FF1744]/20 pb-3">
            <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-accent)', color: 'var(--text-muted)', letterSpacing: '0.5px' }} className="mb-1">
              YEARS OF LEARNING
            </div>
            <div style={{ fontSize: '1.65rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 900 }}>
              3<span style={{ color: 'var(--accent-red)' }}>+</span>
            </div>
          </div>
          <div className="border-b border-[#FF1744]/20 pb-3">
            <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-accent)', color: 'var(--text-muted)', letterSpacing: '0.5px' }} className="mb-1">
              AI SYSTEMS DEPLOYED
            </div>
            <div style={{ fontSize: '1.65rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 900 }}>
              4<span style={{ color: 'var(--accent-red)' }}>+</span>
            </div>
          </div>
          <div className="border-b border-[#FF1744]/20 pb-3 col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
              <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-accent)', color: 'var(--text-muted)', letterSpacing: '0.5px' }} className="mb-1 flex items-center gap-1">
                COFFEE CONSUMED
                <svg className="w-3 h-3 text-[var(--accent-red)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
              </div>
              <div style={{ fontSize: '1.65rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 900 }}>
                999<span style={{ color: 'var(--accent-red)' }}>+</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
