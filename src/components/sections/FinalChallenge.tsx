import React from 'react';
import { motion } from 'framer-motion';

export const FinalChallenge: React.FC = () => {
  const handleActionClick = () => {
    // Action tracked
  };

  const contacts = [
    {
      label: 'EMAIL',
      value: 'maneeshsoni09@gmail.com',
      href: 'mailto:maneeshsoni09@gmail.com?subject=Recruitment%20Interest%20-%20Player%20456',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      label: 'PHONE',
      value: '7023867503',
      href: 'tel:7023867503',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/maneesh-soni',
      href: 'https://www.linkedin.com/in/maneesh-soni/',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      label: 'INSTAGRAM',
      value: 'instagram.com/maneeshsoni35',
      href: 'https://www.instagram.com/maneeshsoni35/',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      label: 'GITHUB',
      value: 'github.com/maneeshsoni09',
      href: 'https://github.com/maneeshsoni09',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
        padding: '100px 20px',
      }}
    >
      {/* Level Title */}
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
          LEVEL 06 <span style={{ color: 'var(--accent-red)' }}>//</span> CONTACT
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          <svg viewBox="0 0 100 100" style={{ width: '10px', height: '10px' }}>
            <rect x="14" y="14" width="72" height="72" stroke="#FF1744" strokeWidth="12" fill="none" />
          </svg>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          terminate assessments and establish contact
        </p>
      </div>

      {/* Textured Kraft Card Contact Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '820px', margin: '0 auto', padding: '50px 40px', marginBottom: '50px' }}
        className="kraft-card text-left"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Squid shapes and card print headers */}
          <div className="md:col-span-7 flex flex-col items-start gap-8">
            <div>
              <h4 
                style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '2.5rem', 
                  fontWeight: 900, 
                  color: '#111111', 
                  letterSpacing: '2px',
                  lineHeight: '1.1',
                  marginBottom: '10px'
                }}
              >
                FINAL INVITATION
              </h4>
              <p 
                style={{ 
                  fontFamily: 'var(--font-accent)', 
                  fontSize: '0.75rem', 
                  color: '#111111', 
                  fontWeight: 800,
                  letterSpacing: '1px' 
                }}
              >
                PLAYER 456 &bull; WOULD YOU LIKE TO CONNECT?
              </p>
            </div>

            {/* Giant Cardboard Print Symbols */}
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#111111]">
                <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="9" fill="none" />
              </svg>
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#111111]">
                <polygon points="50,12 90,82 10,82" stroke="currentColor" strokeWidth="9" fill="none" />
              </svg>
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#111111]">
                <rect x="14" y="14" width="72" height="72" stroke="currentColor" strokeWidth="9" fill="none" />
              </svg>
            </div>
          </div>

          {/* Right Side: Essential contacts stack */}
          <div className="md:col-span-5 flex flex-col gap-5 w-full">
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={handleActionClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: '#111111',
                }}
                className="group"
              >
                {/* Red Circle Badge */}
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(255, 23, 68, 0.25)',
                    transition: 'transform 0.3s'
                  }}
                  className="group-hover:scale-110"
                >
                  {item.icon}
                </div>

                {/* Label/Value Stack */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span 
                    style={{ 
                      fontSize: '0.55rem', 
                      fontFamily: 'var(--font-accent)', 
                      fontWeight: 800, 
                      color: '#444444', 
                      letterSpacing: '1px' 
                    }}
                  >
                    {item.label}
                  </span>
                  <span 
                    style={{ 
                      fontSize: '0.8rem', 
                      fontFamily: 'var(--font-body)', 
                      fontWeight: 700,
                      color: '#111111',
                    }}
                    className="underline decoration-transparent group-hover:decoration-[#111111] transition-all"
                  >
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </motion.div>

      {/* Clean Premium Social Media Section */}
      <div 
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '40px',
        }}
      >
        <span 
          style={{ 
            fontSize: '0.65rem', 
            fontFamily: 'var(--font-accent)', 
            color: 'var(--accent-red)', 
            letterSpacing: '2px', 
            fontWeight: 800 
          }}
        >
          CONNECT CHANNELS
        </span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maneesh-soni/"
            target="_blank"
            rel="noreferrer"
            onClick={handleActionClick}
            style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
            className="hover:text-[var(--accent-red)]"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maneeshsoni09"
            target="_blank"
            rel="noreferrer"
            onClick={handleActionClick}
            style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
            className="hover:text-[var(--accent-red)]"
            title="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/maneeshsoni35/"
            target="_blank"
            rel="noreferrer"
            onClick={handleActionClick}
            style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
            className="hover:text-[var(--accent-red)]"
            title="Instagram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:maneeshsoni09@gmail.com"
            onClick={handleActionClick}
            style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
            className="hover:text-[var(--accent-red)]"
            title="Email"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
