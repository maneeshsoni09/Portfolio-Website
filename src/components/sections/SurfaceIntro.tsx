import React from 'react';
import { ArrowDown } from 'lucide-react';
import maneeshAvatar from '../../assets/maneesh_profile_avatar.png';

interface SurfaceIntroProps {
  onDive: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SurfaceIntro: React.FC<SurfaceIntroProps> = ({ onDive }) => {
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '60px',
      }}
    >
      {/* 1. TWILIGHT GRID HERO CONTENT (Text left, Avatar right) */}
      <div 
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Left Column: Headings & Sub-role details */}
        <div className="col-span-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Sub-Headline Label */}
          <span 
            style={{
              fontFamily: 'var(--font-subtitle)',
              fontSize: '0.85rem',
              color: 'var(--color-cyan)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '14px',
              textShadow: '0 0 10px rgba(63, 226, 201, 0.3)',
            }}
          >
            EXPLORING COMPUTATIONAL DEPTHS
          </span>

          {/* Elegant Large Heading */}
          <h1 
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: '1.05',
              letterSpacing: '-1.5px',
              fontFamily: 'var(--font-header)',
              marginBottom: '10px',
              textShadow: '0 4px 15px rgba(2, 12, 27, 0.6)',
            }}
          >
            MANEESH SONI
          </h1>

          {/* Sub-role description */}
          <span 
            style={{
              fontFamily: 'var(--font-subtitle)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
              color: 'var(--color-cyan)',
              fontWeight: 500,
              letterSpacing: '1px',
              marginBottom: '22px',
              textShadow: '0 2px 8px rgba(63, 226, 201, 0.2)',
              display: 'block',
            }}
          >
            AI/ML Engineer
          </span>

          {/* Cinematic Minimal Intro sentence */}
          <p 
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              fontFamily: 'var(--font-body)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: '1.65',
              maxWidth: '580px',
              marginBottom: '32px',
              fontWeight: 400,
              textShadow: '0 2px 10px rgba(2, 12, 27, 0.5)',
            }}
          >
            B-Tech student in Computer Science Engineering (AIML) at Manipal University Jaipur. 
            Passionate about building intelligent, scalable solutions through machine learning models, 
            robust backend architectures, and AI automation pipelines.
          </p>

          {/* Clean elegant CTA button */}
          <button
            onClick={onDive}
            className="btn-marine-cta"
            style={{
              border: 'none',
              fontSize: '0.85rem',
              padding: '14px 32px',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>DIVE DEEPER</span>
            <ArrowDown size={15} />
          </button>
        </div>

        {/* Right Column: Premium Glassmorphic Avatar Portal Window */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            {/* Ambient Glow behind avatar */}
            <div className="absolute w-72 h-72 rounded-full bg-cyan-400/8 blur-2xl z-0 pointer-events-none" />

            {/* Decorative Dashed Orbit Rings (Rotates slowly) */}
            <div className="absolute inset-[-12px] rounded-full border border-dashed border-cyan-400/20 animate-[spin_40s_linear_infinite] pointer-events-none z-0" />
            <div className="absolute inset-[-24px] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_reverse_infinite] pointer-events-none z-0" />

            {/* Main Profile Frame (Glassmorphic) */}
            <div 
              style={{
                width: 'clamp(240px, 22vw, 320px)',
                height: 'clamp(240px, 22vw, 320px)',
                borderRadius: '50%',
                position: 'relative',
                zIndex: 10,
                overflow: 'hidden',
                border: '2px solid rgba(63, 226, 201, 0.35)',
                boxShadow: '0 0 35px rgba(63, 226, 201, 0.22)',
                backgroundColor: 'rgba(7, 19, 36, 0.45)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(63,226,201,0.35)]"
            >
              <img 
                src={maneeshAvatar} 
                alt="Maneesh Soni Professional Avatar" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. BACKGROUND SHALLOW SEA SILHOUETTES */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          zIndex: 5,
        }}
      >
        {/* SILHOUETTE 1: Swimming sea turtle drifting under the waterline */}
        <div 
          className="anim-swim-slow"
          style={{
            position: 'absolute',
            left: '8%',
            top: '42%',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        >
          <svg viewBox="0 0 120 120" style={{ width: '90px', height: '90px', fill: '#0a2e38' }}>
            <path d="M60,10 C62,10 65,15 63,22 C67,23 70,25 73,28 C85,20 95,15 94,18 C92,23 85,32 78,38 C81,45 82,53 80,60 C88,68 96,75 94,78 C91,81 83,75 75,68 C70,75 62,80 54,81 C50,86 45,95 43,94 C41,92 46,83 50,78 C42,75 36,68 34,60 C26,68 18,74 16,71 C14,68 22,61 30,53 C28,45 29,37 32,30 C25,24 18,15 20,13 C22,11 32,18 42,25 C47,20 53,15 60,10 Z M63,35 C63,33 60,33 60,35 C60,37 63,37 63,35 Z" />
          </svg>
        </div>

        {/* SILHOUETTE 2: School of fish swimming on the right side */}
        <div 
          className="anim-drift"
          style={{
            position: 'absolute',
            right: '8%',
            top: '55%',
            opacity: 0.14,
            pointerEvents: 'none',
          }}
        >
          <svg viewBox="0 0 100 100" style={{ width: '130px', height: '130px', fill: '#0a2e38' }}>
            <path d="M10,20 C15,18 20,20 25,23 C22,24 18,24 15,23 Z M40,30 C45,28 50,30 55,33 C52,34 48,34 45,33 Z M25,45 C30,43 35,45 40,48 C37,49 33,49 30,48 Z M65,18 C70,16 75,18 80,21 C77,22 73,22 70,21 Z M55,55 C60,53 65,55 70,58 C67,59 63,59 60,58 Z" />
          </svg>
        </div>

        {/* SILHOUETTE 3: Distant underwater mountain outline silhouettes */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            opacity: 0.12,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <svg viewBox="0 0 1440 200" style={{ width: '100%', height: '100%', fill: '#0a2e38' }} preserveAspectRatio="none">
            <path d="M0,200 L0,120 L240,160 L480,110 L720,170 L960,130 L1200,150 L1440,90 L1440,200 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
