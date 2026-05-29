import React from 'react';
import { Compass, Calendar, Anchor } from 'lucide-react';

interface Job {
  id: string;
  year: string;
  role: string;
  company: string;
  desc: string;
  bulletPoints: string[];
  techUsed: string[];
}

export const AbyssExperience: React.FC = () => {
  const careerHistory: Job[] = [
    {
      id: 'NODE_01',
      year: '12/2025 - 12/2025',
      role: 'Backend Developer Intern',
      company: 'NEXTHON GLOBAL SERVICES PVT. LTD.',
      desc: 'Engineered high-performance backend pipelines, natural language processing resume structured extracts, and robust database layers.',
      bulletPoints: [
        'Built an AI-powered resume parsing pipeline using Python, OpenAI APIs, and NLP to extract and structure resume data into JSON and PDFs.',
        'Developed a scalable Resume Database REST API using FastAPI, SQLAlchemy, and PostgreSQL for efficient resume data management and querying.'
      ],
      techUsed: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'OpenAI APIs', 'NLP']
    },
    {
      id: 'NODE_02',
      year: '2023 - 2027',
      role: 'B-Tech in Computer Science Engineering (AIML)',
      company: 'MANIPAL UNIVERSITY JAIPUR',
      desc: 'Specializing in Artificial Intelligence and Machine Learning, focusing on advanced data structures, database engines, and predictive neural models.',
      bulletPoints: [
        'Maintained top-tier academic standards in AIML coursework including Regression, Clustering, and Data Preprocessing.',
        'Elected for the Student Excellence Award for exceptional technical contributions and academic diligence.',
        'Developed custom ML classifiers and regression lines using Scikit-learn on complex datasets.'
      ],
      techUsed: ['Scikit-learn', 'Regression', 'Classification', 'Clustering', 'Data Preprocessing']
    },
    {
      id: 'NODE_03',
      year: 'SECONDARY EDUCATION',
      role: '10th & 12th Secondary Education',
      company: "ST. ANTHONY'S SR. SEC. SCHOOL",
      desc: 'Completed standard secondary education with top grades, establishing a strong foundation in Mathematics, Physics, and computer science basics.',
      bulletPoints: [
        'Achieved 91.8% cumulative grade in 10th class secondary examination.',
        'Achieved 84.0% cumulative grade in 12th class senior secondary science stream.',
        'Participated in regional coding hackathons and physics exhibition symposiums.'
      ],
      techUsed: ['C Programming', 'Physics', 'Mathematics', 'Computer Science Basics']
    }
  ];

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* 1. ELEGANT HEADLINE */}
      <div style={{ textAlign: 'center', maxWidth: '720px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Compass size={14} style={{ color: 'var(--color-cyan)', animation: 'pulse 2s infinite' }} />
          <span style={{ 
            fontFamily: 'var(--font-subtitle)', 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            letterSpacing: '2px',
            color: 'var(--color-cyan)',
            textTransform: 'uppercase'
          }}>
            ZONE 04 // CHRONO CAREER TIMELINE
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3.8vw, 2.4rem)',
          fontWeight: 800,
          color: 'var(--color-soft-white)',
          lineHeight: '1.2',
          marginBottom: '14px',
          letterSpacing: '-0.5px'
        }}>
          Armored subsea <span style={{ color: 'var(--color-cyan)' }}>fiber optic</span> path.
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
          color: 'rgba(255, 255, 255, 0.65)',
          lineHeight: '1.6',
        }}>
          Tracing backend systems execution, specialized academic research matrices, 
          and national achievements. Explore the chronological nodes along the glowing subsea cable.
        </p>
      </div>

      {/* 2. GLOWING PATH TIMELINE STRUCTURE */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Main Central Armored Fiber Optic Glowing Cable Line */}
        <div 
          className="glowing-timeline-path"
          style={{
            position: 'absolute',
            top: '20px',
            bottom: '20px',
            width: '4px',
            borderRadius: '2px',
            zIndex: 1,
          }} 
        />

        {/* Chronological Alternate Card Items */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: '50px', zIndex: 10 }}>
          {careerHistory.map((job, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={job.id} 
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-end' : 'flex-start',
                  width: '100%',
                  position: 'relative',
                }}
                className="timeline-row-item"
              >
                {/* Central Connector blinking Node Circle */}
                <div 
                  style={{
                    position: 'absolute',
                    left: 'calc(50% - 10px)',
                    top: '30px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-navy)',
                    border: '3.5px solid var(--color-cyan)',
                    boxShadow: '0 0 10px var(--color-cyan)',
                    zIndex: 20,
                  }} 
                />

                {/* Translucent detailed metadata card (alternates Left and Right) */}
                <div 
                  className="glass-discovery-card"
                  style={{
                    width: '44%',
                    padding: '24px',
                    backgroundColor: 'rgba(2, 12, 27, 0.45)',
                    border: '1px solid rgba(63, 226, 201, 0.25)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-cyan)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(63, 226, 201, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(63, 226, 201, 0.25)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
                  }}
                >
                  {/* Card Header (Year & Node) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-cyan)' }}>
                      <Calendar size={12} />
                      <span style={{
                        fontFamily: 'var(--font-subtitle)',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                      }}>
                        {job.year}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-subtitle)' }}>
                      {job.id}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-soft-white)', fontWeight: 800, marginBottom: '2px' }}>
                    {job.role}
                  </h3>
                  <h4 style={{ 
                    fontFamily: 'var(--font-subtitle)', 
                    fontSize: '0.85rem', 
                    color: 'var(--color-cyan)', 
                    fontWeight: 600,
                    marginBottom: '14px',
                  }}>
                    {job.company}
                  </h4>

                  {/* Description summary */}
                  <p style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255, 255, 255, 0.72)',
                    lineHeight: '1.5',
                    marginBottom: '15px',
                    borderLeft: '2px solid rgba(63, 226, 201, 0.3)',
                    paddingLeft: '10px',
                  }}>
                    {job.desc}
                  </p>

                  {/* Bullet points */}
                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                    {job.bulletPoints.map((b, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', lineHeight: '1.35' }}>
                        <span style={{ color: 'var(--color-cyan)', fontWeight: 'bold' }}>[-]</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', borderTop: '1px dashed rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                    {job.techUsed.map((t) => (
                      <span 
                        key={t}
                        style={{
                          fontSize: '0.58rem',
                          fontFamily: 'var(--font-subtitle)',
                          backgroundColor: 'rgba(63, 226, 201, 0.05)',
                          border: '1px solid rgba(63, 226, 201, 0.15)',
                          color: 'var(--color-cyan)',
                          padding: '1px 6px',
                          borderRadius: '3px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating anchor node decoration at the bottom of timeline */}
      <div 
        style={{
          marginTop: '40px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255,255,255,0.3)',
          zIndex: 10,
        }}
        className="anim-swim-slow"
      >
        <Anchor size={14} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-row-item {
            justify-content: flex-start !important;
            padding-left: 30px !important;
          }
          .timeline-row-item > div:nth-child(2) {
            width: 100% !important;
          }
          .glowing-timeline-path {
            left: 10px !important;
          }
          .timeline-row-item > div:nth-child(1) {
            left: 0px !important;
          }
        }
      `}</style>
    </div>
  );
};
