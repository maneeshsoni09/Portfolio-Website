import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  vaultId: string;
  name: string;
  tagline: string;
  desc: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  svgArtifact: React.ReactNode;
  isDeployingSoon?: boolean;
}

export const DeepProjects: React.FC = () => {
  const projects: Project[] = [
    {
      vaultId: 'DISCOVERY_01',
      name: 'AI Expense Tracker',
      tagline: 'AI-Based Expense Tracking & Smart Budgeting System',
      desc: 'An intelligent budgeting platform that parses transaction inputs, classifies financial records using predictive ML models, and recommends smart saving allocations.',
      features: [
        'Machine learning transaction categorization based on natural language descriptors.',
        'Smart budgeting dashboard displaying visual expense patterns and target limits.',
        'Secure relational data management and indexing optimized for rapid queries.',
        'Automated AI-driven alerts for anomaly expenditures and savings suggestions.'
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Scikit-learn', 'React'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      isDeployingSoon: true,
      svgArtifact: (
        <svg viewBox="0 0 100 100" style={{ width: '45px', height: '45px', display: 'block' }}>
          <circle cx="50" cy="50" r="32" fill="none" stroke="#3fe2c9" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="50" cy="50" r="24" fill="none" stroke="#3fe2c9" strokeWidth="2" />
          <circle cx="50" cy="50" r="6" fill="#3fe2c9" className="animate-pulse" />
        </svg>
      )
    },
    {
      vaultId: 'DISCOVERY_02',
      name: 'Stealth Interview Assistant',
      tagline: 'Real-Time AI Assistant for Coding & Technical Guidance',
      desc: 'An AI-powered dashboard offering overlay support, real-time speech-to-text question analysis, and smart context retrieval to assist engineers during live coding trials.',
      features: [
        'Whisper-powered speech-to-text transcript processing with 0-delay latency.',
        'Anthropic Claude and OpenAI API pipelines retrieving key algorithms and optimizations.',
        'Stealth glassmorphic dashboard overlay adapting dynamically to code challenges.',
        'Integrated markdown compiler rendering perfect solutions and complexity specs.'
      ],
      tech: ['FastAPI', 'OpenAI APIs', 'Claude Code', 'React', 'WebSockets'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      isDeployingSoon: true,
      svgArtifact: (
        <svg viewBox="0 0 100 100" style={{ width: '45px', height: '45px', display: 'block' }}>
          <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" fill="none" stroke="#3fe2c9" strokeWidth="2" />
          <circle cx="50" cy="50" r="4" fill="#3fe2c9" />
        </svg>
      )
    },
    {
      vaultId: 'DISCOVERY_03',
      name: 'AI Accent Transformer',
      tagline: 'Real-Time Voice System for Accent Adaptation & Speech Enhancement',
      desc: 'An audio processing mainframe that transforms speech patterns into standard adapting accents, filtering noises and enhancing clarity in real-time.',
      features: [
        'Asynchronous audio processing buffer pipelines handling high-frequency acoustic streams.',
        'Bespoke deep learning voice models adapting accents while preserving original voice timbre.',
        'Real-time spectral analysis showing frequency sweeps and decibel metrics.',
        'Web Audio synthesized oscillators simulating signal synchronization states.'
      ],
      tech: ['Python', 'Flask', 'Web Audio API', 'TensorFlow', 'PostgreSQL'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      isDeployingSoon: true,
      svgArtifact: (
        <svg viewBox="0 0 100 100" style={{ width: '45px', height: '45px', display: 'block' }}>
          <circle cx="50" cy="50" r="30" fill="none" stroke="#3fe2c9" strokeWidth="1.5" />
          <path d="M30,50 Q40,30 50,50 T70,50" fill="none" stroke="#3fe2c9" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      vaultId: 'DISCOVERY_04',
      name: 'Smart Handwriting Digitizer',
      tagline: 'AI-Powered Notes-to-PDF Digitizer & Text Structurer',
      desc: 'An advanced Optical Character Recognition (OCR) pipeline that converts handwritten notes into structured markdown, digital text, and perfect downloadable PDF files.',
      features: [
        'High-integrity OCR pipeline processing raw handwritten images into editable formats.',
        'NLP summarizer structuring notes into clear sections, summaries, and action items.',
        'Automated PDF compiler with professional design layout styles and syntax blocks.',
        'Symmetric file storage system with secure encryption keys and rapid search tags.'
      ],
      tech: ['Python', 'FastAPI', 'SQLAlchemy', 'NLP Models', 'React'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      isDeployingSoon: true,
      svgArtifact: (
        <svg viewBox="0 0 100 100" style={{ width: '45px', height: '45px', display: 'block' }}>
          <rect x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="#3fe2c9" strokeWidth="2" />
          <circle cx="50" cy="50" r="5" fill="#3fe2c9" />
        </svg>
      )
    }
  ];

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '1050px',
        margin: '0 auto',
        padding: '0 20px',
      }}
    >
      {/* SECTION TITLE */}
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h3 
          style={{ 
            fontSize: '1.6rem', 
            fontWeight: 800, 
            color: '#ffffff',
            letterSpacing: '0.5px',
            marginBottom: '8px'
          }}
        >
          Submerged Projects Explorer
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-subtitle)', letterSpacing: '1px' }}>
          DECOMPRESSED AI SYSTEMS & CORE BACKEND ARCHITECTURES
        </p>
      </div>

      {/* PROJECTS GRID (2x2 layout on desktop, stacked on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <div 
            key={project.vaultId}
            style={{
              padding: '24px',
              borderRadius: '14px',
              border: '1px solid rgba(63, 226, 201, 0.15)',
              backgroundColor: 'rgba(2, 12, 27, 0.45)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="hover:scale-[1.01] hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(63,226,201,0.08)]"
          >
            {/* Project Header */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '15px', marginBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-subtitle)', color: 'var(--color-cyan)', fontWeight: 700, letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                    {project.vaultId}
                  </span>
                  <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800, lineHeight: '1.2' }}>
                    {project.name}
                  </h4>
                </div>
                {/* Custom glowing visual badge artifact */}
                <div style={{ color: 'var(--color-cyan)', flexShrink: 0 }}>
                  {project.svgArtifact}
                </div>
              </div>

              {/* Tagline */}
              <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-aqua)', fontWeight: 500, marginBottom: '12px', lineHeight: '1.3' }}>
                {project.tagline}
              </span>

              {/* Description */}
              <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.5', marginBottom: '16px' }}>
                {project.desc}
              </p>

              {/* Features Bullet points */}
              <ul style={{ paddingLeft: '18px', listStyleType: 'disc', color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.78rem', margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.features.map((feat, idx) => (
                  <li key={idx} style={{ lineHeight: '1.4' }}>{feat}</li>
                ))}
              </ul>
            </div>

            {/* Bottom Row: Tech Stack & Action Links */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Technology badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-subtitle)',
                      background: 'rgba(63, 226, 201, 0.05)',
                      border: '1px dashed rgba(63, 226, 201, 0.25)',
                      color: 'var(--color-cyan)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-subtitle)',
                    color: 'var(--color-cyan)',
                    border: '1px solid rgba(63, 226, 201, 0.3)',
                    background: 'rgba(63, 226, 201, 0.04)',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-cyan)';
                    e.currentTarget.style.background = 'rgba(63, 226, 201, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(63, 226, 201, 0.3)';
                    e.currentTarget.style.background = 'rgba(63, 226, 201, 0.04)';
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ display: 'inline-block' }}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>REPOSITORY</span>
                </a>

                {project.isDeployingSoon ? (
                  <div 
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-subtitle)',
                      color: 'rgba(63, 226, 201, 0.7)',
                      border: '1px dashed rgba(63, 226, 201, 0.25)',
                      background: 'rgba(63, 226, 201, 0.03)',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      userSelect: 'none',
                    }}
                  >
                    <span 
                      style={{
                        position: 'relative',
                        display: 'flex',
                        height: '7px',
                        width: '7px',
                      }}
                    >
                      <span 
                        className="animate-ping"
                        style={{
                          position: 'absolute',
                          display: 'inline-flex',
                          height: '100%',
                          width: '100%',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-cyan)',
                          opacity: 0.8,
                        }}
                      />
                      <span 
                        style={{
                          position: 'relative',
                          display: 'inline-flex',
                          borderRadius: '50%',
                          height: '7px',
                          width: '7px',
                          backgroundColor: 'var(--color-cyan)',
                        }}
                      />
                    </span>
                    <span>LINK DEPLOYING SOON</span>
                  </div>
                ) : (
                  project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-subtitle)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-cyan)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>LIVE DEMO</span>
                    </a>
                  )
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
