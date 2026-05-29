import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Activity, Compass, ChevronDown } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import seaweedLogo from '../assets/seaweed_logo_crest.png';

interface SonarHUDProps {
  scrollPercentage: number;
  activeSection: number;
  onNavigate: (sectionIndex: number) => void;
}

export const SonarHUD: React.FC<SonarHUDProps> = ({
  scrollPercentage,
  activeSection,
  onNavigate,
}) => {
  const [audioActive, setAudioActive] = useState(false);
  const [o2Jitter, setO2Jitter] = useState(98.4);
  const [telemetryOpen, setTelemetryOpen] = useState(false);

  // Compute realistic underwater telemetry based on depth
  const depth = Math.floor(scrollPercentage * 8000); // 0m to 8000m
  const pressure = Math.floor(scrollPercentage * 799) + 1; // 1 to 800 atmospheres
  const temp = (22.4 - scrollPercentage * 20.4).toFixed(1); // 22.4°C down to 2.0°C

  // Dynamic O2 fluctuation for realistic AI diagnostic look
  useEffect(() => {
    const timer = setInterval(() => {
      setO2Jitter(98.0 + Math.random() * 0.8);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleAudioToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const active = audioEngine.toggle();
    setAudioActive(active);
  };

  const sections = [
    { label: 'Surface', depth: '0m', desc: 'Landing Zone' },
    { label: 'Skills Reef', depth: '200m', desc: 'Skills Matrix' },
    { label: 'Vault Station', depth: '1000m', desc: 'Project Vaults' },
    { label: 'Timeline Cable', depth: '4000m', desc: 'Experience Node' },
    { label: 'Command Cavern', depth: '8000m', desc: 'AI mainframes' },
  ];

  return (
    <>
      {/* --- PREMIUM TOP NAVIGATION NAVBAR (SEAWEED GENERATION THEME) --- */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--dashboard-height)',
        backgroundColor: scrollPercentage > 0.05 ? 'rgba(2, 14, 35, 0.85)' : 'transparent',
        backdropFilter: scrollPercentage > 0.05 ? 'blur(16px)' : 'none',
        borderBottom: scrollPercentage > 0.05 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        transition: 'all 0.4s ease',
      }}>
        {/* Left Side: Brand Logo and Title */}
        <div 
          onClick={() => onNavigate(0)}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          className="interactive-node"
        >
          <img 
            src={seaweedLogo} 
            alt="Seaweed Crest" 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              filter: 'invert(1) brightness(1.2)', /* Make crest solid white */
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '2px',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-header)', 
              fontWeight: 800, 
              fontSize: '0.95rem',
              letterSpacing: '1px',
              color: 'var(--soft-white)' 
            }}>
              DEEPSEA <span style={{ color: 'var(--cyan-glow)' }}>OS</span>
            </span>
            <span style={{ 
              fontSize: '0.55rem', 
              fontFamily: 'var(--font-subtitle)', 
              color: 'var(--cyan-glow)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginTop: '-2px'
            }}>
              Marine Exploratory System
            </span>
          </div>
        </div>

        {/* Center: Sleek Text Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-nav">
          {sections.map((sect, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={sect.label}
                onClick={() => {
                  audioEngine.playPing();
                  onNavigate(idx);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-subtitle)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--cyan-glow)' : 'rgba(255, 255, 255, 0.65)',
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  padding: '6px 0',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                className="interactive-node"
              >
                {sect.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '20%',
                    width: '60%',
                    height: '2px',
                    backgroundColor: 'var(--cyan-glow)',
                    borderRadius: '1px',
                    boxShadow: '0 0 8px var(--cyan-glow)',
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side: Interactive Lets Start Pill and Telemetry Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Telemetry Status Trigger */}
          <button
            onClick={() => {
              audioEngine.playPing();
              setTelemetryOpen(!telemetryOpen);
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${telemetryOpen ? 'var(--cyan-glow)' : 'rgba(255, 255, 255, 0.15)'}`,
              borderRadius: '20px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              color: telemetryOpen ? 'var(--cyan-glow)' : 'var(--soft-white)',
              fontFamily: 'var(--font-header)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
            }}
            className="interactive-node"
          >
            <Activity size={12} className={telemetryOpen ? 'crt-screen' : ''} />
            <span>TELEMETRY: {depth}M</span>
            <ChevronDown size={12} style={{
              transform: telemetryOpen ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.3s ease',
            }} />
          </button>

          {/* Capsule Button: Lets Start */}
          <button
            onClick={() => {
              audioEngine.playPing();
              onNavigate(1); // Smooth scroll to Zone 2 (Skills Reef)
            }}
            style={{
              background: 'linear-gradient(135deg, var(--cyan-glow) 0%, var(--neon-teal) 100%)',
              border: 'none',
              borderRadius: '25px',
              padding: '10px 24px',
              fontFamily: 'var(--font-header)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#020e23',
              cursor: 'pointer',
              letterSpacing: '1px',
              boxShadow: '0 4px 15px rgba(81, 232, 197, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s ease',
            }}
            className="interactive-node"
          >
            <span>Lets start</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>&rarr;</span>
          </button>
        </div>
      </header>

      {/* --- TELEMETRY SLIDE-OUT HUD DRAWER --- */}
      {telemetryOpen && (
        <div 
          className="glass-panel scanlines crt-screen"
          style={{
            position: 'fixed',
            top: 'calc(var(--dashboard-height) + 10px)',
            right: '40px',
            width: '320px',
            padding: '20px',
            zIndex: 48,
            backgroundColor: 'rgba(2, 14, 35, 0.95)',
            border: '1px solid rgba(81, 232, 197, 0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(81, 232, 197, 0.1)',
            animation: 'slide-down-hud 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '8px' }}>
            <Compass size={14} style={{ color: 'var(--cyan-glow)' }} />
            <span style={{ fontFamily: 'var(--font-header)', fontSize: '0.7rem', color: 'var(--cyan-glow)', letterSpacing: '1px' }}>
              SUB-TELEMETRY CALIBRATOR
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontFamily: 'var(--font-header)', fontSize: '0.75rem' }}>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.4)', display: 'block', fontSize: '0.6rem', marginBottom: '2px' }}>EXPLORATION DEPTH</span>
              <span style={{ color: 'var(--cyan-glow)', fontSize: '1rem', fontWeight: 700 }}>{depth} meters</span>
            </div>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.4)', display: 'block', fontSize: '0.6rem', marginBottom: '2px' }}>ATMOSPHERIC PRESS</span>
              <span style={{ color: 'var(--aqua-glow)', fontSize: '1rem', fontWeight: 700 }}>{pressure} ATM</span>
            </div>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.4)', display: 'block', fontSize: '0.6rem', marginBottom: '2px' }}>WATER TEMPERATURE</span>
              <span style={{ color: '#F43F5E', fontSize: '1rem', fontWeight: 700 }}>{temp}°C</span>
            </div>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.4)', display: 'block', fontSize: '0.6rem', marginBottom: '2px' }}>O₂ CHAMBER SYSTEM</span>
              <span style={{ color: '#10B981', fontSize: '1rem', fontWeight: 700 }}>{o2Jitter.toFixed(2)}%</span>
            </div>
          </div>

          {/* Web Audio Synthesizer link toggle inside HUD */}
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.15)', marginTop: '16px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-subtitle)', color: 'rgba(255,255,255,0.5)' }}>
              AMBIENT OSCILLATOR LINK:
            </span>
            <button 
              onClick={handleAudioToggle} 
              style={{
                background: 'none',
                color: audioActive ? 'var(--cyan-glow)' : 'rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-header)',
                fontSize: '0.65rem',
                padding: '4px 8px',
                borderRadius: '4px',
                border: `1px solid ${audioActive ? 'var(--cyan-glow)' : 'rgba(255,255,255,0.2)'}`,
                transition: 'all 0.3s ease',
              }}
            >
              {audioActive ? <Volume2 size={12} /> : <VolumeX size={12} />}
              <span>{audioActive ? 'ACTIVE' : 'MUTED'}</span>
            </button>
          </div>
        </div>
      )}

      {/* --- CINEMATIC FIXED SIDEBAR (ONLY telemetry sweep circles, minimal design) --- */}
      <aside style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px',
        width: '44px',
        height: '44px',
        zIndex: 40,
        borderRadius: '50%',
        border: '1px solid rgba(81, 232, 197, 0.3)',
        background: 'rgba(2, 14, 35, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onClick={() => {
        audioEngine.playPing();
        setTelemetryOpen(!telemetryOpen);
      }}
      title="Calibrate telemetry HUD"
      >
        <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(81, 232, 197, 0.15)' }} />
        <div style={{ position: 'absolute', height: '100%', width: '1px', background: 'rgba(81, 232, 197, 0.15)' }} />
        <div className="radar-sweep-line" style={{ background: 'linear-gradient(90deg, var(--cyan-glow) 0%, transparent 100%)' }} />
        <div className="sonar-ping" style={{ width: '100%', height: '100%', border: '1px solid var(--cyan-glow)' }} />
      </aside>

      {/* Slide-down HUD keyframes & Mobile overrides */}
      <style>{`
        @keyframes slide-down-hud {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          header {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </>
  );
};
