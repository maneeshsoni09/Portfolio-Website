import React from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  title: string;
  category: string;
  level: number;
  icon: React.ReactNode;
  tools: string[];
  description: string;
}

export const SkillArena: React.FC = () => {
  const skills: SkillNode[] = [
    {
      title: 'AI CORE & AGENTS',
      category: 'AI Automation & Prompting',
      level: 95,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
        </svg>
      ),
      tools: ['OpenAI APIs', 'Claude Code', 'Prompt Eng.', 'Cursor AI'],
      description: 'Deploying custom agentic frameworks and LLM orchestration nodes.'
    },
    {
      title: 'API ARCHITECTURES',
      category: 'Backend Core Systems',
      level: 92,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4 17 10 11 4 5"/>
          <line x1="12" y1="19" x2="20" y2="19"/>
        </svg>
      ),
      tools: ['FastAPI', 'Flask', 'REST APIs', 'Uvicorn'],
      description: 'Constructing high-throughput RESTful servers and asynchronous endpoints.'
    },
    {
      title: 'RELATIONAL STORAGE',
      category: 'Database & Storage Decks',
      level: 90,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>
      ),
      tools: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Raw SQL'],
      description: 'Structuring complex database schemas and optimized indexing queries.'
    },
    {
      title: 'USER INTERFACES',
      category: 'Frontend Core Graphics',
      level: 92,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      tools: ['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Next.js'],
      description: 'Drafting high-performance vertical layouts and interactive dashboard overlays.'
    },
    {
      title: 'PREDICTIVE ANALYTICS',
      category: 'Machine Learning Core',
      level: 94,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      tools: ['Scikit-learn', 'Regression', 'Classification', 'Clustering'],
      description: 'Designing custom classifiers, regression pipelines, and anomaly filters.'
    },
    {
      title: 'DIAGNOSTICS & VCS',
      category: 'Workflow & Dev Utilities',
      level: 88,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      tools: ['Git / GitHub', 'Postman', 'VS Code', 'Git branches'],
      description: 'Collaborating across branches and executing REST API diagnostics tests.'
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1050px',
        margin: '0 auto',
        padding: '100px 20px',
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
          LEVEL 02 <span style={{ color: 'var(--accent-red)' }}>//</span> SKILL ARENA
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          {/* Triangle */}
          <svg viewBox="0 0 100 100" style={{ width: '10px', height: '10px' }}>
            <polygon points="50,12 90,82 10,82" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          progression board and technology tree levels
        </p>
      </div>

      {/* Skills board grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((node, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="cyber-card"
            style={{ 
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glowing Corner Badge */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: 'rgba(255, 23, 68, 0.1)',
                borderBottomLeftRadius: '8px',
                borderLeft: '1.5px solid rgba(255, 23, 68, 0.25)',
                borderBottom: '1.5px solid rgba(255, 23, 68, 0.25)',
                padding: '4px 10px',
                fontSize: '0.58rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--accent-red)',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              XP GAIN
            </div>

            <div>
              {/* Header: Icon & Category */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }} className="text-left">
                <div 
                  style={{
                    color: 'var(--accent-red)',
                    padding: '8px',
                    borderRadius: '6px',
                    background: 'rgba(255, 23, 68, 0.05)',
                    border: '1.5px solid rgba(255, 23, 68, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {node.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {node.category.toUpperCase()}
                  </span>
                  <h4 style={{ fontSize: '0.98rem', color: 'var(--text-white)', fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '0.5px' }}>
                    {node.title}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.45', marginBottom: '16px' }} className="text-left">
                {node.description}
              </p>

              {/* Tools tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {node.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-accent)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-white)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
