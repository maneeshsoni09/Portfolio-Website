import React from 'react';
import { motion } from 'framer-motion';

export const PlayerProfile: React.FC = () => {
  const stats = [
    { name: 'AI Engineering', value: 95, color: 'var(--accent-red)' },
    { name: 'Full Stack Development', value: 92, color: 'var(--accent-red)' },
    { name: 'Problem Solving', value: 96, color: 'var(--accent-red)' },
    { name: 'System Design', value: 88, color: 'var(--accent-red)' },
    { name: 'Creativity', value: 90, color: 'var(--accent-red)' },
  ];

  const details = [
    { 
      label: 'NAME', 
      value: 'Maneesh Soni' 
    },
    { 
      label: 'EDUCATION', 
      value: 'B.Tech CS (AI & ML)' 
    },
    { 
      label: 'LOCATION', 
      value: 'Jaipur, India' 
    },
    { 
      label: 'FOCUS', 
      value: 'Full Stack & AI Agents' 
    },
    { 
      label: 'MISSION', 
      value: 'Build intelligent systems' 
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px',
      }}
    >
      {/* Level Title */}
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
          LEVEL 01 <span style={{ color: 'var(--accent-red)' }}>//</span> PLAYER DOSSIER
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          <svg viewBox="0 0 100 100" style={{ width: '10px', height: '10px' }}>
            <circle cx="50" cy="50" r="40" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          identity matrix & player telemetry
        </p>
      </div>

      {/* 3-Column Visual Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Column 1: Custom SVG Low-Poly Geometric Mask Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cyber-card p-6 flex flex-col justify-between items-center text-center relative overflow-hidden"
          style={{ minHeight: '380px' }}
        >
          {/* Faint Radar sweep border inside */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 23, 68, 0.1) 0%, transparent 70%)',
            }}
          />

          <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
            {/* Custom Low-Poly Faceted Vector Mask */}
            <svg viewBox="0 0 200 280" className="w-full max-w-[190px] h-auto mx-auto drop-shadow-[0_0_20px_rgba(255,23,68,0.2)]">
              <g fill="#141414" stroke="#2a2a2a" strokeWidth="0.8">
                {/* Forehead center */}
                <polygon points="100,20 80,60 100,75 120,60" fill="#2d2c2d" />
                {/* Forehead left */}
                <polygon points="80,60 35,70 65,95 80,60" fill="#1c1a1c" />
                <polygon points="100,20 80,60 35,70 100,20" fill="#222022" />
                {/* Forehead right */}
                <polygon points="120,60 165,70 135,95 120,60" fill="#323032" />
                <polygon points="100,20 120,60 165,70 100,20" fill="#3b393b" />
                
                {/* Temples */}
                <polygon points="35,70 30,120 65,95" fill="#161416" />
                <polygon points="165,70 170,120 135,95" fill="#282628" />
                
                {/* Nose bridge */}
                <polygon points="100,75 88,125 100,135" fill="#3a383a" />
                <polygon points="100,75 112,125 100,135" fill="#4a484a" />
                <polygon points="100,75 80,60 65,95 88,125" fill="#262426" />
                <polygon points="100,75 120,60 135,95 112,125" fill="#343234" />
                
                {/* Eye facet sockets (Black holes with red glow outline) */}
                <polygon points="65,95 88,125 60,130" fill="#050505" stroke="var(--accent-red)" strokeWidth="1.2" />
                <polygon points="135,95 112,125 140,130" fill="#080808" stroke="var(--accent-red)" strokeWidth="1.2" />
                
                {/* Glowing eye nodes */}
                <circle cx="76" cy="115" r="3" fill="var(--accent-red)" filter="drop-shadow(0 0 6px var(--accent-red))" />
                <circle cx="124" cy="115" r="3" fill="var(--accent-red)" filter="drop-shadow(0 0 6px var(--accent-red))" />

                {/* Cheeks Outer */}
                <polygon points="30,120 60,130 40,185" fill="#110f11" />
                <polygon points="170,120 140,130 160,185" fill="#242224" />
                {/* Cheeks Inner */}
                <polygon points="60,130 88,125 100,135 90,195 65,190" fill="#1a181a" />
                <polygon points="140,130 112,125 100,135 110,195 135,190" fill="#2d2b2d" />
                
                {/* Cheek Upper-Mid */}
                <polygon points="65,95 60,130 30,120" fill="#181618" />
                <polygon points="135,95 140,130 170,120" fill="#2a282a" />
                
                {/* Mouth / Nose lower */}
                <polygon points="100,135 90,195 100,205" fill="#2d2b2d" />
                <polygon points="100,135 110,195 100,205" fill="#3c3a3c" />
                
                {/* Chin sides */}
                <polygon points="90,195 65,190 75,245 100,260" fill="#201e20" />
                <polygon points="110,195 135,190 125,245 100,260" fill="#2e2c2e" />
                {/* Chin center */}
                <polygon points="90,195 100,205 110,195 100,260" fill="#383638" />
                
                {/* Outer jaw border */}
                <polygon points="40,185 65,190 75,245" fill="#131113" />
                <polygon points="160,185 135,190 125,245" fill="#222022" />
              </g>
            </svg>
          </div>

          <div style={{ width: '100%', position: 'relative', zIndex: 10, marginTop: '20px' }}>
            <span 
              style={{ 
                fontFamily: 'var(--font-accent)', 
                fontSize: '0.62rem', 
                color: 'var(--accent-red)', 
                letterSpacing: '2px',
                fontWeight: 900,
                display: 'block',
                marginBottom: '4px'
              }}
            >
              FRONT OPERATOR CODE: 456
            </span>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 800 }}>
              AI PROFILE ENCRYPTED
            </span>
          </div>
        </motion.div>

        {/* Column 2: Player dossier data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="cyber-card p-6 flex flex-col justify-between"
          style={{ minHeight: '380px' }}
        >
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-white)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                borderBottom: '1.5px solid rgba(255, 23, 68, 0.15)',
                paddingBottom: '10px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '1px',
              }}
            >
              <span style={{ color: 'var(--accent-red)' }}>◯</span> FILE RECORDS
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {details.map((item, idx) => (
                <div key={idx} className="text-left">
                  <span 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.58rem', 
                      fontFamily: 'var(--font-accent)', 
                      color: 'var(--accent-red)', 
                      letterSpacing: '1px',
                      fontWeight: 800,
                      marginBottom: '2px'
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 600 }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'monospace', textAlign: 'left', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '10px', marginTop: '10px' }}>
            REGISTRY SECURE // SECTOR 09
          </div>
        </motion.div>

        {/* Column 3: Skill Telemetry bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cyber-card p-6 flex flex-col justify-between"
          style={{ minHeight: '380px' }}
        >
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-white)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                borderBottom: '1.5px solid rgba(255, 23, 68, 0.15)',
                paddingBottom: '10px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '1px',
              }}
            >
              <span style={{ color: 'var(--accent-red)' }}>◯</span> SYS METRICS
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {stats.map((stat, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 700 }}>
                    <span style={{ color: 'var(--text-white)', fontFamily: 'var(--font-accent)', letterSpacing: '0.5px' }}>
                      {stat.name}
                    </span>
                    <span style={{ color: stat.color, fontFamily: 'var(--font-heading)' }}>
                      LVL {stat.value}
                    </span>
                  </div>

                  <div 
                    style={{ 
                      width: '100%', 
                      height: '5px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.04)', 
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
                      style={{ 
                        height: '100%', 
                        backgroundColor: stat.color,
                        borderRadius: '2px',
                        boxShadow: `0 0 6px ${stat.color}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            style={{ 
              marginTop: '15px',
              padding: '8px',
              borderRadius: '4px',
              border: '1px dashed rgba(255, 23, 68, 0.2)',
              backgroundColor: 'rgba(255, 23, 68, 0.01)',
              fontSize: '0.6rem',
              color: 'var(--accent-red)',
              fontFamily: 'monospace',
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            SYS STATUS: OPTIMIZED
          </div>
        </motion.div>

      </div>
    </div>
  );
};
