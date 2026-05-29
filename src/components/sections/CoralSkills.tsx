import React from 'react';

interface SkillRow {
  category: string;
  subCategory: string;
  tools: string[];
  level: number;
  useCase: string;
}

export const CoralSkills: React.FC = () => {
  const skillMatrix: SkillRow[] = [
    {
      category: 'AI Automation & Prompting',
      subCategory: 'AI CORE & AGENTS',
      tools: ['OpenAI APIs', 'Claude Code', 'Prompt Eng.', 'Cursor AI'],
      level: 96,
      useCase: 'Deploying custom agentic frameworks and LLM orchestration nodes.'
    },
    {
      category: 'Backend Core Systems',
      subCategory: 'API ARCHITECTURES',
      tools: ['FastAPI', 'Flask', 'REST APIs', 'Uvicorn'],
      level: 95,
      useCase: 'Constructing high-throughput RESTful servers and asynchronous endpoints.'
    },
    {
      category: 'Machine Learning Core',
      subCategory: 'PREDICTIVE ANALYTICS',
      tools: ['Scikit-learn', 'Regression', 'Classification', 'Clustering'],
      level: 88,
      useCase: 'Designing custom classifiers, regression pipelines, and anomaly filters.'
    },
    {
      category: 'Database & Storage Decks',
      subCategory: 'RELATIONAL STORAGE',
      tools: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Raw SQL'],
      level: 90,
      useCase: 'Structuring complex schemas, ORM integrations, and optimized indexing locks.'
    },
    {
      category: 'Frontend Core Graphics',
      subCategory: 'USER INTERFACES',
      tools: ['HTML5', 'CSS3 / HSL', 'Flexbox / Grid', 'Tailwind CSS'],
      level: 90,
      useCase: 'Drafting high-performance vertical scrollytelling pages and minimal UI overlays.'
    },
    {
      category: 'Workflow & Dev Utilities',
      subCategory: 'DIAGNOSTICS & VCS',
      tools: ['Git / GitHub', 'Postman', 'VS Code', 'Git branches'],
      level: 92,
      useCase: 'Collaborating across branches and executing REST API diagnostics tests.'
    }
  ];

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '1000px',
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
          Technical Specifications Ledger
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-subtitle)', letterSpacing: '1px' }}>
          VERIFIED CORE SKILLS & TECHNOLOGY CAPABILITIES
        </p>
      </div>

      {/* DESKTOP TABLE VIEW (Visible on tablet/desktop) */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800 bg-slate-950/20 backdrop-blur-md">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'rgba(2, 12, 27, 0.4)' }}>
              <th style={thStyle}>SKILL CATEGORY</th>
              <th style={thStyle}>TECHNOLOGY STACK</th>
              <th style={thStyle}>PROFICIENCY</th>
              <th style={thStyle}>FOCUS APPLICATION</th>
            </tr>
          </thead>
          <tbody>
            {skillMatrix.map((row, idx) => (
              <tr 
                key={idx} 
                style={{ 
                  borderBottom: idx === skillMatrix.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background 0.3s'
                }}
                className="hover:bg-slate-900/35"
              >
                {/* Category info */}
                <td style={tdStyle}>
                  <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                    {row.category}
                  </span>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-subtitle)', color: 'var(--color-cyan)', letterSpacing: '0.5px', fontWeight: 600 }}>
                    {row.subCategory}
                  </span>
                </td>

                {/* Technology Badges */}
                <td style={tdStyle}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '300px' }}>
                    {row.tools.map((tool) => (
                      <span 
                        key={tool}
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-subtitle)',
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Proficiency progress bar */}
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      width: '80px', 
                      height: '4px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        width: `${row.level}%`, 
                        height: '100%', 
                        backgroundColor: 'var(--color-cyan)',
                        boxShadow: '0 0 6px var(--color-cyan)',
                      }} />
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-cyan)', fontWeight: 700, fontFamily: 'var(--font-header)' }}>
                      {row.level}%
                    </span>
                  </div>
                </td>

                {/* Application Focus */}
                <td style={tdStyle}>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.4', margin: 0, maxWidth: '280px' }}>
                    {row.useCase}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE LIST VIEW (Visible on mobile screens) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {skillMatrix.map((row, idx) => (
          <div 
            key={idx}
            style={{
              padding: '16px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              backgroundColor: 'rgba(2, 12, 27, 0.3)',
            }}
          >
            {/* Category */}
            <div style={{ marginBottom: '10px' }}>
              <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
                {row.category}
              </span>
              <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-subtitle)', color: 'var(--color-cyan)', letterSpacing: '0.5px' }}>
                {row.subCategory}
              </span>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
              {row.tools.map((tool) => (
                <span 
                  key={tool}
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-subtitle)',
                    color: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Proficiency and focus */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>PROFICIENCY</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-cyan)', fontWeight: 700 }}>{row.level}%</span>
              </div>
              <div style={{ 
                width: '100%', 
                height: '4px', 
                backgroundColor: 'rgba(255, 255, 255, 0.06)', 
                borderRadius: '2px',
                overflow: 'hidden',
                marginBottom: '10px'
              }}>
                <div style={{ 
                  width: `${row.level}%`, 
                  height: '100%', 
                  backgroundColor: 'var(--color-cyan)',
                }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.45', margin: 0 }}>
                {row.useCase}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple clean CSS style objects for standard HTML table
const thStyle: React.CSSProperties = {
  padding: '12px 16px',
  fontSize: '0.68rem',
  fontFamily: 'var(--font-subtitle)',
  color: 'rgba(255, 255, 255, 0.4)',
  fontWeight: 700,
  letterSpacing: '1px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
};

const tdStyle: React.CSSProperties = {
  padding: '16px 16px',
  verticalAlign: 'middle'
};
