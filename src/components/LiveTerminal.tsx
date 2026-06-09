import React, { useState, useRef, useEffect } from 'react';

interface TermMessage {
  type: 'input' | 'output' | 'error';
  text: string;
}

export const LiveTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<TermMessage[]>([
    { type: 'output', text: 'SYSTEM CONSOLE v1.45.6 — READY.' },
    { type: 'output', text: 'Type "help" to see available command protocols.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const outputEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen, isMinimized]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input' as const, text: `> ${inputValue}` }];
    setInputValue('');

    let reply = '';
    let isErr = false;

    switch (cmd) {
      case 'help':
        reply = 'AVAILABLE COMMAND PROTOCOLS:\n' +
                '  about    - Fetch candidate summary log data\n' +
                '  skills   - Retrieve core technology levels & stats\n' +
                '  projects - Decapsulate contestant project vault logs\n' +
                '  resume   - Link download protocol of profile resume\n' +
                '  contact  - Print secure direct comm-link parameters\n' +
                '  clear    - Flush terminal console command logs';
        break;
      case 'about':
        reply = 'CANDIDATE DOSSIER [Player 456]:\n' +
                '  Name: Maneesh Soni\n' +
                '  Education: B.Tech Computer Science (AI & ML) at Manipal University Jaipur\n' +
                '  Location: Jaipur / Udaipur, Rajasthan, India\n' +
                '  Current Focus: Developing high-throughput backends and intelligent neural agents.';
        break;
      case 'skills':
        reply = 'TECHNOLOGY MATRICES LEVEL LOGS:\n' +
                '  [95%] AI Core & Agents (OpenAI, Claude, Prompt Eng)\n' +
                '  [92%] Backend Core APIs (FastAPI, Flask, REST APIs)\n' +
                '  [90%] Relational Storage (PostgreSQL, SQLAlchemy, SQL)\n' +
                '  [92%] User Interfaces (React, Next.js, HTML/CSS)\n' +
                '  [94%] Machine Learning Core (Scikit-learn, clustering)\n' +
                '  [88%] Diagnostics & VCS (Git, Postman, VS Code)';
        break;
      case 'projects':
        reply = 'ACTIVE CONTESTANTS [PROJECTS VAULT]:\n' +
                '  PROJECT 001: AI Expense Tracker (LIVE NOW)\n' +
                '  PROJECT 002: Stealth Interview Assistant (DEPLOYING SOON)\n' +
                '  PROJECT 003: AI Accent Transformer (DEPLOYING SOON)\n' +
                '  PROJECT 004: Smart Handwriting Digitizer (DEPLOYING SOON)';
        break;
      case 'resume':
        reply = 'INITIATING DOWNLOAD PROTOCOL...\n' +
                'Redirecting packet to: /Maneesh_Soni_Resume.pdf';
        // Trigger download
        window.open('/Maneesh_Soni_Resume.pdf', '_blank');
        break;
      case 'contact':
        reply = 'SECURE DIRECT DIRECTIVES:\n' +
                '  Email: maneeshsoni09@gmail.com\n' +
                '  Phone Direct: 7023867503\n' +
                '  LinkedIn: linkedin.com/in/maneesh-soni\n' +
                '  Instagram: instagram.com/maneeshsoni35\n' +
                '  GitHub: github.com/maneeshsoni09';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        reply = `ERROR: Command "${inputValue}" not recognized.\nType "help" to see valid command protocols.`;
        isErr = true;
    }

    // Short lag to simulate database compute cycle
    setTimeout(() => {
      setHistory([...newHistory, { type: isErr ? 'error' : 'output', text: reply }]);
    }, 250);
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            border: '2px solid var(--accent-red)',
            boxShadow: '0 0 20px rgba(255, 23, 68, 0.35)',
            color: 'var(--accent-red)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            transition: 'all 0.3s ease',
          }}
          className="hover:scale-110 hover:shadow-[0_0_25px_rgba(255, 23, 68, 0.55)]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5"/>
            <line x1="12" y1="19" x2="20" y2="19"/>
          </svg>
        </button>
      )}

      {/* Floating System Console Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '380px',
            height: isMinimized ? '45px' : '420px',
            backgroundColor: 'rgba(17, 17, 17, 0.95)',
            border: '1.5px solid var(--accent-red)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 23, 68, 0.15)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 100,
            overflow: 'hidden',
            transition: 'height 0.3s ease',
          }}
          className="scanlines crt-screen"
        >
          {/* Header controls bar */}
          <div
            style={{
              height: '45px',
              backgroundColor: 'rgba(255, 23, 68, 0.08)',
              borderBottom: '1px solid rgba(255, 23, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 15px',
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-red)' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5"/>
                <line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '1px' }}>
                SYSTEM CONSOLE
              </span>
            </div>

            {/* Window control action links */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => {
                  setIsMinimized(!isMinimized);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {isMinimized ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="4 14 10 14 10 20"/>
                    <polyline points="20 10 14 10 14 4"/>
                    <line x1="14" y1="10" x2="21" y2="3"/>
                    <line x1="3" y1="21" x2="10" y2="14"/>
                  </svg>
                ) : (
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="4" y1="14" x2="20" y2="14"/>
                  </svg>
                )}
              </button>

              <button
                onClick={handleToggle}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-red)',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Terminal Screen content */}
          {!isMinimized && (
            <>
              <div
                style={{
                  flex: 1,
                  padding: '16px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.72rem',
                  lineHeight: '1.45',
                  color: '#ffffff',
                  textAlign: 'left',
                }}
                className="no-scrollbar"
              >
                {history.map((msg, idx) => (
                  <div key={idx} style={{ whiteSpace: 'pre-wrap' }}>
                    {msg.type === 'input' ? (
                      <span style={{ color: 'var(--accent-red)' }}>{msg.text}</span>
                    ) : msg.type === 'error' ? (
                      <span style={{ color: 'var(--accent-red)' }}>{msg.text}</span>
                    ) : (
                      <span style={{ color: '#ffffff' }}>{msg.text}</span>
                    )}
                  </div>
                ))}
                <div ref={outputEndRef} />
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleCommand}
                style={{
                  height: '48px',
                  borderTop: '1.5px solid rgba(255, 23, 68, 0.15)',
                  backgroundColor: 'rgba(5, 5, 5, 0.98)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 12px',
                }}
              >
                <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem', marginRight: '6px', fontWeight: 'bold' }}>
                  &gt;
                </span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  placeholder="INPUT COMMAND PROTOCOL..."
                  style={{
                    flex: 1,
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    fontSize: '0.72rem',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-red)',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};
