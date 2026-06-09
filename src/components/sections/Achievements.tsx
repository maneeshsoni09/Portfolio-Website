import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  category: string;
  rank: string;
  desc: string;
  icon: React.ReactNode;
  certImg?: string;
}

export const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const list: Achievement[] = [
    {
      title: 'Second Position — AI Model Quest',
      category: 'IEEE CIS MUJ (Oneiros \'26)',
      rank: '#02 NATIONWIDE',
      desc: 'National-scale machine learning efficiency and performance tournament.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a6 6 0 0 1 6 6c0 3.31-2.69 6-6 6a6 6 0 0 1-6-6 6 6 0 0 1 6-6z" />
        </svg>
      ),
      certImg: '/ai_model_quest_cert.jpg'
    },
    {
      title: 'Student Excellence Award',
      category: 'Manipal University Jaipur',
      rank: 'ACADEMIC GOLD',
      desc: 'Honored for exceptional technical contributions and database systems benchmarks.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      certImg: '/excellence_cert.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
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
          LEVEL 05 <span style={{ color: 'var(--accent-red)' }}>//</span> ACHIEVEMENTS
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          {/* Square symbol */}
          <svg viewBox="0 0 100 100" style={{ width: '10px', height: '10px' }}>
            <rect x="14" y="14" width="72" height="72" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          leaderboard of verified player accomplishments
        </p>
      </div>

      {/* Leaderboard panel */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          width: '100%',
          maxWidth: '860px',
          margin: '0 auto',
          border: '1.5px solid rgba(255, 23, 68, 0.15)',
          borderRadius: '10px',
          backgroundColor: 'rgba(17, 17, 17, 0.9)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)',
          overflow: 'hidden',
        }}
        className="scanlines text-left font-[var(--font-body)]"
      >
        {/* Table Header HUD - Hidden on mobile, visible on desktop */}
        <div 
          className="hidden md:flex"
          style={{ 
            backgroundColor: 'rgba(255, 23, 68, 0.08)', 
            borderBottom: '1.5px solid rgba(255, 23, 68, 0.25)',
            padding: '12px 20px',
            fontSize: '0.58rem',
            fontFamily: 'var(--font-accent)',
            color: 'var(--text-muted)',
            fontWeight: 800,
            letterSpacing: '1.5px',
          }}
        >
          <div style={{ width: '22%', flexShrink: 0 }}>RANK / NOMINATION</div>
          <div style={{ width: '53%', flexGrow: 1 }}>ACHIEVEMENT LOG</div>
          <div style={{ width: '25%', flexShrink: 0 }}>ISSUING ORG</div>
        </div>

        {/* List of achievements */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {list.map((node, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col md:flex-row md:items-center p-6 border-b border-[rgba(255,255,255,0.06)] last:border-none hover:bg-neutral-900/40"
              style={{
                transition: 'background-color 0.3s',
              }}
            >
              {/* Rank column */}
              <div 
                className="w-full md:w-[22%] shrink-0 mb-2 md:mb-0"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-red)',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  letterSpacing: '0.5px',
                  paddingRight: '10px',
                }}
              >
                {node.rank}
              </div>

              {/* Title & Desc Column */}
              <div className="w-full md:w-[53%] grow pr-0 md:pr-4 mb-3 md:mb-0 text-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ color: 'var(--accent-red)', flexShrink: 0 }}>
                    {node.icon}
                  </div>
                  <h4 
                    style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-white)', 
                      fontWeight: 800, 
                      fontFamily: 'var(--font-body)',
                      lineHeight: '1.3',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {node.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: '1.4', paddingLeft: '28px' }}>
                  {node.desc}
                </p>
                {node.certImg && (
                  <div style={{ marginTop: '10px', paddingLeft: '28px' }}>
                    <div
                      style={{
                        width: '120px',
                        height: '80px',
                        borderRadius: '4px',
                        border: '1.5px solid rgba(255, 23, 68, 0.3)',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        backgroundColor: '#050505',
                        position: 'relative'
                      }}
                      className="hover:border-[var(--accent-red)] transition-all duration-300 group/cert"
                      onClick={() => setSelectedCert(node.certImg || null)}
                    >
                      <img 
                        src={node.certImg} 
                        alt={node.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(5, 5, 5, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.2s'
                        }}
                        className="group-hover/cert:opacity-100"
                      >
                        <span style={{ fontSize: '0.48rem', color: '#fff', fontFamily: 'var(--font-accent)', letterSpacing: '1px', fontWeight: 800, border: '1px solid #fff', padding: '2px 4px', borderRadius: '2px' }}>
                          VIEW FULL
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Issuing Organization column */}
              <div 
                className="w-full md:w-[25%] shrink-0 text-left md:text-right"
                style={{ 
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--text-white)',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                }}
              >
                {node.category.toUpperCase()}
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Full-screen Certificate Viewer Modal */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              border: '2px solid var(--accent-red)',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#050505',
              boxShadow: '0 10px 40px rgba(255, 23, 68, 0.2)'
            }}
          >
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(5, 5, 5, 0.8)',
                border: '1px solid var(--accent-red)',
                color: 'var(--accent-red)',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 900,
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              ✕
            </button>
            <img 
              src={selectedCert} 
              alt="Full Certificate" 
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '85vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

    </div>
  );
};
