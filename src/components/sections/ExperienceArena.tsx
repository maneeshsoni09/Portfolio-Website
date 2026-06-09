import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceArena: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1050px',
        margin: '0 auto',
        padding: '80px 20px',
      }}
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '55px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            color: 'var(--text-white)',
            letterSpacing: '3px',
            marginBottom: '8px',
          }}
        >
          LEVEL 04 <span style={{ color: 'var(--accent-red)' }}>//</span> EXPERIENCE
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          {/* Triangle */}
          <svg viewBox="0 0 100 100" style={{ width: '10px', height: '10px' }}>
            <polygon points="50,12 90,82 10,82" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          internship assignments and corporate missions
        </p>
      </div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="cyber-card p-6 md:p-8 text-left max-w-[850px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Photo with glowing border */}
          <div className="md:col-span-5 flex justify-center w-full">
            <div 
              style={{
                width: '100%',
                maxWidth: '280px',
                borderRadius: '8px',
                border: '2px solid var(--accent-red)',
                padding: '5px',
                backgroundColor: 'rgba(255, 23, 68, 0.05)',
                boxShadow: '0 0 20px rgba(255, 23, 68, 0.12)'
              }}
              className="group"
            >
              <div style={{ overflow: 'hidden', borderRadius: '4px', height: '310px' }}>
                <img 
                  src="/nexithon_photo.jpg" 
                  alt="Maneesh Soni Nexithon Internship" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  className="group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Specification dossier */}
          <div className="md:col-span-7 flex flex-col gap-5 justify-between h-full text-left">
            <div>
              <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-accent)', color: 'var(--accent-red)', letterSpacing: '2px', fontWeight: 900 }}>
                MISSION TIMELINE: 2026
              </span>
              <h4 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-heading)', color: '#ffffff', fontWeight: 900, marginTop: '2px', marginBottom: '6px', letterSpacing: '1px' }}>
                NEXITHON INTERNSHIP
              </h4>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-accent)', color: 'var(--text-white)', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
                AI & FULL STACK DEVELOPER INTERN
              </span>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                Engineered high-throughput backend pipelines and integrated advanced agentic AI automation models during industrial workflows. Collaborated on deploying optimized relational schemas and custom user interfaces.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
              {['Backend Nodes', 'AI Automation', 'Relational Schemas', 'API Testing'].map((spec, sIdx) => (
                <span 
                  key={sIdx}
                  style={{ fontSize: '0.58rem', fontFamily: 'var(--font-accent)', padding: '2px 8px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', color: 'var(--text-white)', borderRadius: '4px' }}
                >
                  {spec.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
