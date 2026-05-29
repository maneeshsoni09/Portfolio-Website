import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Cpu, Database, Eye } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import gliderDrone from '../assets/yellow_drone_glider.png';

interface Message {
  sender: 'user' | 'aqua';
  text: string;
  timestamp: string;
}

export const AquaTerminal: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'aqua',
      text: 'A.Q.U.A. Mainframe Station v2.0.8 - ACTIVE. Sub-sea AI chatbot active. Ask me about Maneesh Soni\'s skills, education, projects, or career timeline.',
      timestamp: '16:53:31',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll terminal on new inputs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getCurrentTime = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  };

  const seedAquaResponse = (userQuery: string): string => {
    const q = userQuery.toLowerCase().trim();

    // Thematic routing
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('who are you') || q.includes('maneesh')) {
      return "GREETINGS OBSERVER. I am A.Q.U.A. (Autonomous Aquatic Utility Agent). I am Maneesh Soni's personal intelligence agent. Ask me about his SKILLS (Zone 2), PROJECTS (Zone 3), EXPERIENCE & EDUCATION (Zone 4), or how to contact him!";
    }
    
    if (q.includes('skill') || q.includes('tech') || q.includes('python') || q.includes('code') || q.includes('language')) {
      return "RETRIEVING NEURAL CORE DATA: Maneesh Soni specializes in Python, FastAPI, Flask, Scikit-learn, SQLAlchemy, and databases like PostgreSQL & MySQL. He is also highly proficient in advanced AI Tools (OpenAI APIs, Claude Code, Cursor, Prompt Engineering) and C. I monitor 9 active skill modules in the Coral Reef.";
    }

    if (q.includes('expense tracker') || q.includes('budgeting')) {
      return "DECAPSULATION SUCCESS [VAULT_01 - AI Expense Tracker]: An intelligent budgeting system designed using Python, FastAPI, PostgreSQL, and Scikit-learn. It classifies transaction inputs automatically using predictive ML models to recommend smart budget limits.";
    }

    if (q.includes('interview') || q.includes('stealth') || q.includes('assistant')) {
      return "DECAPSULATION SUCCESS [VAULT_02 - Stealth Interview Assistant]: A real-time coding overlay assistant powered by Whisper speech-to-text, OpenAI APIs, and Anthropic Claude. It dynamically analyzes audio questions to retrieve algorithms and optimized solutions.";
    }

    if (q.includes('accent') || q.includes('voice') || q.includes('transformer')) {
      return "DECAPSULATION SUCCESS [VAULT_03 - AI Accent Transformer]: A real-time vocal system that adapts accents and enhances speech clarity using deep learning voice models, Flask, and Web Audio API pipelines.";
    }

    if (q.includes('handwriting') || q.includes('digit') || q.includes('notes')) {
      return "DECAPSULATION SUCCESS [VAULT_04 - Smart Handwriting Digitizer]: An OCR and NLP notes-to-PDF digitizer built with FastAPI, SQLAlchemy, and React. It structures handwritten document scans into clean markdown and professional downloadable PDFs.";
    }

    if (q.includes('project') || q.includes('portfolio') || q.includes('work')) {
      return "SONAR SIGNAL DETECTED: Maneesh has built 4 major AI/ML systems: 1. AI EXPENSE TRACKER, 2. STEALTH INTERVIEW ASSISTANT, 3. AI ACCENT TRANSFORMER, 4. SMART HANDWRITING DIGITIZER. Ask me about any specific project name for direct decapsulation logs!";
    }

    if (q.includes('experience') || q.includes('job') || q.includes('career') || q.includes('intern') || q.includes('nexthon')) {
      return "CHRONO LOGS DECRYPTED [NODE_01 - Nexthon Intern]: Maneesh Soni served as a Backend Developer Intern at Nexthon Global Services (12/2025 - 12/2025). He developed a scalable FastAPI & PostgreSQL Resume Database REST API and built an AI-powered NLP resume parsing pipeline.";
    }

    if (q.includes('education') || q.includes('study') || q.includes('university') || q.includes('college') || q.includes('school') || q.includes('muj')) {
      return "CHRONO LOGS DECRYPTED [NODE_02 / NODE_03]: Maneesh is a B-Tech CSE (AIML) student at Manipal University Jaipur (2023-2027), where he maintains top academic standings. He completed his secondary school at St. Anthony's Sr. Sec. School with 91.8% (10th) and 84.0% (12th) grades.";
    }

    if (q.includes('award') || q.includes('honor') || q.includes('student excellence') || q.includes('ieee')) {
      return "CHRONO LOGS DECRYPTED [NODE_04 - KEY AWARDS]: Maneesh received the Student Excellence Award from Manipal University Jaipur for academic and project leadership, and was the Runner-up in the national AI Model Quest hosted by the IEEE Computational Intelligence Society.";
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin')) {
      return "COMMUNICATION SIGNALS ONLINE: You can reach Maneesh Soni via email at maneeshsoni09@gmail.com, phone at 7023867503, or connect on LinkedIn at linkedin.com/in/maneesh-soni. You can also broadcast a secure message using the frequency transmitter in Zone 5.";
    }

    if (q.includes('joke') || q.includes('sea') || q.includes('fish')) {
      return "QUERY: OCEAN HUMOR. Why do software engineers prefer saltwater over freshwater? ... Because there are more micro-chips in the sea! System humor node successfully executed.";
    }

    // Default fall-back response
    return `PROTOCOL ERROR: COMMAND '${userQuery.toUpperCase()}' NOT RECOGNIZED. Suggest querying: 'skills', 'projects', 'experience', 'education', 'contact', or requesting 'ocean humor'.`;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    audioEngine.playPing();

    const userMsg: Message = {
      sender: 'user',
      text: input,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    // Simulate retro terminal computational delay
    setTimeout(() => {
      setIsTyping(false);
      const replyText = seedAquaResponse(currentInput);

      // Play click sounds during typing response
      let charIndex = 0;
      const interval = setInterval(() => {
        audioEngine.playClick();
        charIndex++;
        if (charIndex > 5) clearInterval(interval);
      }, 70);

      const aquaMsg: Message = {
        sender: 'aqua',
        text: replyText,
        timestamp: getCurrentTime(),
      };
      setMessages((prev) => [...prev, aquaMsg]);
    }, 1200);
  };

  // Quick Action Buttons
  const handleQuickCommand = (cmd: string) => {
    setInput(cmd);
    setTimeout(() => {
      const mockForm = document.getElementById('terminal-form') as HTMLFormElement;
      if (mockForm) {
        mockForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 50);
  };

  return (
    <div 
      className="glass-panel scanlines crt-screen" 
      style={{
        width: '100%',
        maxWidth: '780px',
        height: '420px',
        backgroundColor: 'rgba(2, 14, 35, 0.9)',
        border: '1px solid rgba(81, 232, 197, 0.3)',
        boxShadow: '0 0 25px rgba(81, 232, 197, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        overflow: 'hidden',
        color: 'var(--cyan-glow)',
        fontFamily: 'var(--font-header)',
        position: 'relative',
      }}
    >
      {/* Terminal Title Bar */}
      <div style={{
        backgroundColor: 'rgba(81, 232, 197, 0.08)',
        borderBottom: '1px solid rgba(81, 232, 197, 0.2)',
        height: '46px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
        fontSize: '0.75rem',
        letterSpacing: '1px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={14} style={{ animation: 'crt-flicker 2s infinite' }} />
          <span>A.Q.U.A._TERMINAL_STATION</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.65rem' }}>
          <span style={{ color: 'var(--neon-purple)' }}>[O₂: 98%]</span>
          {/* Small animated Active chat assistant drone mini logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--yellow-accent)' }}>[AI_ACTIVE]</span>
            <img 
              src={gliderDrone} 
              alt="Mini drone" 
              className="drone-hover"
              style={{
                width: '24px',
                height: 'auto',
                borderRadius: '2px',
                border: '1px solid var(--yellow-accent)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Terminal Display Output Area */}
      <div 
        className="no-scrollbar"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          fontSize: '0.75rem',
          lineHeight: '1.5',
          letterSpacing: '0.5px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontFamily: 'var(--font-header)',
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            width: '100%',
          }}>
            <div style={{
              fontSize: '0.6rem',
              color: 'rgba(81, 232, 197, 0.4)',
              marginBottom: '2px',
            }}>
              [{msg.timestamp}] {msg.sender === 'user' ? 'GUEST_EXPLORER' : 'A.Q.U.A._MAINFRAME'}
            </div>
            <div style={{
              backgroundColor: msg.sender === 'user' ? 'rgba(81, 232, 197, 0.05)' : 'transparent',
              border: msg.sender === 'user' ? '1px dashed rgba(81, 232, 197, 0.2)' : 'none',
              padding: msg.sender === 'user' ? '8px 12px' : '0',
              borderRadius: msg.sender === 'user' ? '6px' : '0',
              maxWidth: '85%',
              wordBreak: 'break-word',
              color: msg.sender === 'user' ? 'var(--aqua-glow)' : 'var(--soft-white)',
              textShadow: msg.sender === 'user' ? 'none' : '0 0 6px rgba(255, 255, 255, 0.3)',
            }}>
              {msg.sender === 'user' ? '' : '> '}{msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(81, 232, 197, 0.6)' }}>
            <span style={{ fontSize: '0.75rem' }}>&gt; A.Q.U.A. IS DECOMPRESSING SIGNAL...</span>
            <div className="sonar-ping" style={{ width: '12px', height: '12px', position: 'relative', border: '2px solid' }} />
          </div>
        )}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Access Capsule Buttons */}
      <div style={{
        padding: '0 20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '12px',
      }}>
        <button 
          onClick={() => handleQuickCommand('tell me about your skills')}
          style={{
            background: 'rgba(81, 232, 197, 0.05)',
            border: '1px solid rgba(81, 232, 197, 0.25)',
            color: 'var(--cyan-glow)',
            fontSize: '0.62rem',
            padding: '5px 12px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'var(--font-header)',
            fontWeight: 700,
            transition: 'all 0.2s ease',
          }}
          className="interactive-node"
        >
          <Cpu size={10} style={{ marginRight: '4px', display: 'inline' }} />
          QUERY_SKILLS
        </button>
        <button 
          onClick={() => handleQuickCommand('tell me about your projects')}
          style={{
            background: 'rgba(81, 232, 197, 0.05)',
            border: '1px solid rgba(81, 232, 197, 0.25)',
            color: 'var(--cyan-glow)',
            fontSize: '0.62rem',
            padding: '5px 12px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'var(--font-header)',
            fontWeight: 700,
            transition: 'all 0.2s ease',
          }}
          className="interactive-node"
        >
          <Database size={10} style={{ marginRight: '4px', display: 'inline' }} />
          QUERY_PROJECTS
        </button>
        <button 
          onClick={() => handleQuickCommand('tell me a sea joke')}
          style={{
            background: 'rgba(81, 232, 197, 0.05)',
            border: '1px solid rgba(81, 232, 197, 0.25)',
            color: 'var(--cyan-glow)',
            fontSize: '0.62rem',
            padding: '5px 12px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'var(--font-header)',
            fontWeight: 700,
            transition: 'all 0.2s ease',
          }}
          className="interactive-node"
        >
          <Eye size={10} style={{ marginRight: '4px', display: 'inline' }} />
          SYS_HUMOR
        </button>
      </div>

      {/* Terminal Input Bar */}
      <form 
        id="terminal-form"
        onSubmit={handleSend}
        style={{
          borderTop: '1px solid rgba(81, 232, 197, 0.2)',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(2, 14, 35, 0.95)',
          padding: '0 15px',
        }}
      >
        <span style={{ color: 'var(--cyan-glow)', marginRight: '8px', fontSize: '0.8rem' }}>&gt;</span>
        <input 
          type="text"
          value={input}
          onChange={(e) => {
            audioEngine.playClick();
            setInput(e.target.value);
          }}
          placeholder="ENTER TRANSMISSION INSTRUCTIONS..."
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            color: 'var(--soft-white)',
            fontFamily: 'var(--font-header)',
            fontSize: '0.75rem',
            outline: 'none',
          }}
        />
        <button 
          type="submit"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--cyan-glow)',
            cursor: 'pointer',
            padding: '5px',
          }}
          title="Send instruction"
        >
          <Send size={16} className="interactive-node" style={{ color: 'var(--cyan-glow)' }} />
        </button>
      </form>
    </div>
  );
};
