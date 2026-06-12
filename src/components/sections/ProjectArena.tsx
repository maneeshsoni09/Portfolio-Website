import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  name: string;
  desc: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  status: 'LIVE' | 'SOON';
  metrics: string;
  chart: React.ReactNode;
  previewImg?: string;
}

export const ProjectArena: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'PROJECT 001',
      name: 'AI Expense Tracker',
      desc: 'Intelligent budget compiler that parses transactions and classifies financial records using machine learning algorithms.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Scikit-learn', 'React'],
      liveUrl: 'https://piggyyy.vercel.app/',
      githubUrl: 'https://github.com/maneeshsoni09/Piggy-Smart-Budgeting-AI',
      status: 'LIVE',
      metrics: 'REGRESSOR: XGBoost // LATENCY: 14ms',
      chart: (
        <path d="M0,20 Q15,2 30,16 T60,4" fill="none" stroke="var(--accent-red)" strokeWidth="2.2" />
      ),
      previewImg: '/piggyy_preview.png'
    },
    {
      id: 'PROJECT 002',
      name: 'Bingelyyy',
      desc: 'Collaborative watchlist platform that helps friends create shared watchlists, vote on movies and shows, track viewing progress, and decide what to watch together in real time.',
      tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Google OAuth', 'TMDB API'],
      liveUrl: 'https://bingelyyy.vercel.app',
      githubUrl: 'https://github.com/manesshsoni09/bingelyyy',
      status: 'LIVE',
      metrics: 'WATCHLIST SYNC: REAL-TIME // COLLABORATION INDEX: 99.1%',
      chart: (
        <path d="M0,20 L10,16 L20,18 L30,10 L40,12 L50,4 L60,8" fill="none" stroke="var(--accent-red)" strokeWidth="2.2" />
      ),
      previewImg: '/bingelyyy_preview.png'
    },
    {
      id: 'PROJECT 003',
      name: 'Stealth Interview Assistant',
      desc: 'Speech-to-text context analyzer that extracts and displays interview answers live with minimal latency.',
      tech: ['FastAPI', 'OpenAI APIs', 'Claude Code', 'React', 'WebSockets'],
      liveUrl: 'https://github.com/maneeshsoni09',
      githubUrl: 'https://github.com/maneeshsoni09',
      status: 'SOON',
      metrics: 'RECOGNITION: Whispers v3 // STACK LOAD: 98.4%',
      chart: (
        <path d="M0,12 L10,3 L20,21 L30,8 L40,17 L50,4 L60,12" fill="none" stroke="var(--accent-red)" strokeWidth="2.2" />
      )
    },
    {
      id: 'PROJECT 004',
      name: 'AI Accent Transformer',
      desc: 'Real-time audio processing mainframe translating speech patterns into adaptive standard accents.',
      tech: ['Python', 'Flask', 'Web Audio API', 'TensorFlow', 'PostgreSQL'],
      liveUrl: 'https://github.com/maneeshsoni09',
      githubUrl: 'https://github.com/maneeshsoni09',
      status: 'SOON',
      metrics: 'SAMPLE: 48kHz // AUDIO DEPTH: 24bit',
      chart: (
        <path d="M0,12 C10,-2 15,26 30,12 C45,-2 50,26 60,12" fill="none" stroke="var(--accent-red)" strokeWidth="2.2" />
      )
    },
    {
      id: 'PROJECT 005',
      name: 'Smart Handwriting Digitizer',
      desc: 'Optical Character Recognition pipeline converting handwritten assets into clean editable markdown files.',
      tech: ['Python', 'FastAPI', 'SQLAlchemy', 'NLP Models', 'React'],
      liveUrl: 'https://github.com/maneeshsoni09',
      githubUrl: 'https://github.com/maneeshsoni09',
      status: 'SOON',
      metrics: 'PIPELINE: OCR/NLP // ACCURACY: 98.7%',
      chart: (
        <>
          <rect x="0" y="6" width="9" height="12" fill="rgba(255,23,68,0.25)" stroke="var(--accent-red)" strokeWidth="1" />
          <rect x="15" y="10" width="9" height="8" fill="rgba(255,23,68,0.25)" stroke="var(--accent-red)" strokeWidth="1" />
          <rect x="30" y="3" width="9" height="15" fill="rgba(255,23,68,0.25)" stroke="var(--accent-red)" strokeWidth="1" />
          <rect x="45" y="8" width="9" height="10" fill="rgba(255,23,68,0.25)" stroke="var(--accent-red)" strokeWidth="1" />
        </>
      )
    }
  ];

  // Dynamic 3D mouse tilt handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 4;
    const rotateY = -((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
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
          LEVEL 03 <span style={{ color: 'var(--accent-red)' }}>//</span> PROJECT SURVIVAL ARENA
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          <svg viewBox="0 0 100 100" style={{ width: '10px', height: '10px' }}>
            <circle cx="50" cy="50" r="40" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          direct-access contestants &bull; zero modal overlays required
        </p>
      </div>

      {/* Grid displaying project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {projects.map((project, idx) => {
          const isLive = project.status === 'LIVE';
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                padding: '24px',
                borderRadius: '10px',
                border: '1.5px solid rgba(255, 23, 68, 0.15)',
                backgroundColor: 'rgba(17, 17, 17, 0.9)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s',
              }}
              className="hover:border-[var(--accent-red)] hover:shadow-[0_8px_25px_rgba(255,23,68,0.1)] group"
            >
              <div>
                {/* Header: Project ID & Status Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.6rem',
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--accent-red)',
                      fontWeight: 900,
                      letterSpacing: '1px'
                    }}
                  >
                    {project.id}
                  </span>

                  {/* Status Badge */}
                  {isLive ? (
                    <div
                      style={{
                        fontSize: '0.55rem',
                        fontFamily: 'var(--font-accent)',
                        color: '#FFFFFF',
                        backgroundColor: 'var(--accent-red)',
                        padding: '2px 6px',
                        borderRadius: '3px',
                        fontWeight: 900,
                        letterSpacing: '0.5px',
                        boxShadow: '0 0 6px var(--accent-red)'
                      }}
                    >
                      LIVE NOW
                    </div>
                  ) : (
                    <div
                      style={{
                        fontSize: '0.55rem',
                        fontFamily: 'var(--font-accent)',
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '2px 6px',
                        borderRadius: '3px',
                        fontWeight: 800,
                        letterSpacing: '0.5px'
                      }}
                    >
                      DEPLOYING SOON
                    </div>
                  )}
                </div>

                {project.previewImg && (
                  <div
                    style={{
                      width: '100%',
                      height: '150px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: '1.5px solid rgba(255, 23, 68, 0.2)',
                      marginBottom: '14px',
                      backgroundColor: '#050505',
                    }}
                  >
                    <img
                      src={project.previewImg}
                      alt={project.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.85,
                        transition: 'opacity 0.3s, transform 0.3s',
                      }}
                      className="group-hover:opacity-100 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Name */}
                <h4
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-white)',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    lineHeight: '1.2',
                    marginBottom: '8px',
                    letterSpacing: '0.5px'
                  }}
                >
                  {project.name.toUpperCase()}
                </h4>

                {/* Description */}
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.45', marginBottom: '16px' }}>
                  {project.desc}
                </p>

                {/* Core Metrics Visual Panel */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    background: 'rgba(5, 5, 5, 0.6)',
                    border: '1px solid rgba(255, 23, 68, 0.08)',
                    marginBottom: '16px',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }} className="text-left">
                    <span style={{ fontSize: '0.5rem', fontFamily: 'var(--font-accent)', color: 'var(--accent-red)', letterSpacing: '0.5px', fontWeight: 800 }}>
                      TELEMETRY METRICS
                    </span>
                    <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: '#ffffff' }}>
                      {project.metrics}
                    </span>
                  </div>
                  <svg width="60" height="20" viewBox="0 0 60 20" style={{ overflow: 'visible' }}>
                    {project.chart}
                  </svg>
                </div>

                {/* Tech Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px' }}>
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.6rem',
                        fontFamily: 'var(--font-accent)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        background: 'rgba(255, 255, 255, 0.01)',
                        color: 'var(--text-white)',
                        padding: '1.5px 6px',
                        borderRadius: '3px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px', display: 'flex', gap: '8px' }}>
                {isLive ? (
                  <>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-heading)',
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1.5px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        background: 'rgba(255, 255, 255, 0.01)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        transition: 'all 0.3s',
                        letterSpacing: '0.5px',
                        fontWeight: 800,
                      }}
                      className="hover:border-[var(--accent-red)] hover:bg-neutral-900"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                      <span>GITHUB</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-heading)',
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1.5px solid var(--accent-red)',
                        color: '#050505',
                        background: 'var(--accent-red)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        transition: 'all 0.3s',
                        letterSpacing: '0.5px',
                        fontWeight: 900,
                      }}
                      className="hover:scale-[1.01]"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>LIVE DEMO</span>
                    </a>
                  </>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-heading)',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px dashed rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.5px',
                      fontWeight: 800,
                      backgroundColor: 'rgba(255, 255, 255, 0.01)'
                    }}
                  >
                    SYSTEM OFFLINE // DEPLOYING SOON
                  </div>
                )}
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
