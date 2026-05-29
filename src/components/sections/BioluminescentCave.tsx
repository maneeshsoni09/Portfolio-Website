import React, { useState } from 'react';
import { Mail, Phone, Compass, Check, Activity, Radio } from 'lucide-react';

export const BioluminescentCave: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [depthJitter, setDepthJitter] = useState(8004);

  // Randomize depth slightly to simulate deep ocean current movement
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDepthJitter(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate encrypted subsea transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 2200);
  };

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* 1. SECTOR HEADLINE */}
      <div style={{ textAlign: 'center', maxWidth: '720px', marginBottom: '40px' }}>
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
            ZONE 05 // OCEAN FLOOR SEABED
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
          Cavern command & <span style={{ color: 'var(--color-cyan)' }}>expedition hub</span>.
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
          color: 'rgba(255, 255, 255, 0.65)',
          lineHeight: '1.6',
        }}>
          Broadcasting secure coordinate signals directly to our central archive. 
          Use the command console below to transmit a secure payload directly from the deep submersible deck.
        </p>
      </div>

      {/* 2. HIGH-TECH INTEGRATED SUBMARINE HUB CONTROLLER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-5xl mb-12">
        
        {/* LEFT VIEWPORT: The Expedition Submarine (Visual Indicator) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[300px] w-full">
          {/* Submarine sways slowly with currents */}
          <div 
            className="anim-swim-slow"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '360px',
              zIndex: 10,
            }}
          >
            {/* VOLUMETRIC CONE HEADLIGHT OVERLAY (casting searchlight across seabed) */}
            <div 
              className={`anim-spotlight ${isSubmitting ? 'submitting-beam' : ''}`}
              style={{
                position: 'absolute',
                top: '80px',
                left: '-200px',
                width: '300px',
                height: '110px',
                backgroundImage: 'linear-gradient(90deg, rgba(63, 226, 201, 0.28) 0%, rgba(63, 226, 201, 0.05) 50%, transparent 100%)',
                clipPath: 'polygon(100% 45%, 100% 55%, 0% 100%, 0% 0%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Highly Detailed Custom SVG Expedition Submarine */}
            <svg 
              viewBox="0 0 260 160" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block', 
                filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.65))' 
              }}
            >
              <defs>
                <linearGradient id="subBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="30%" stopColor="var(--color-submarine)" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="metalChassisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="40%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
              </defs>

              {/* 1. BACK SHADOW & PROPELLER MECHANICS */}
              <rect x="222" y="70" width="12" height="24" rx="2" fill="url(#metalChassisGrad)" stroke="#1e293b" strokeWidth="1" />
              
              {/* Propeller - Spins fast when transmitting */}
              <g 
                className={`sub-propeller ${isSubmitting ? 'spin-fast' : 'spin-slow'}`}
                style={{ transformOrigin: '232px 82px' }}
              >
                <ellipse cx="232" cy="62" rx="4" ry="18" fill="url(#brassGrad)" stroke="#854d0e" strokeWidth="0.8" />
                <ellipse cx="232" cy="102" rx="4" ry="18" fill="url(#brassGrad)" stroke="#854d0e" strokeWidth="0.8" />
                <circle cx="232" cy="82" r="5" fill="#ca8a04" />
              </g>
              <line x1="212" y1="82" x2="225" y2="82" stroke="url(#brassGrad)" strokeWidth="3" />

              {/* 2. UNDERBELLY PIPES, MECHANICAL LEGS & MANIPULATOR ARM */}
              <path d="M160,105 L170,118 L210,118" fill="none" stroke="url(#brassGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="210" cy="118" r="2.5" fill="#eab308" />
              <rect x="80" y="105" width="45" height="10" rx="3" fill="url(#metalChassisGrad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
              <line x1="85" y1="109" x2="120" y2="109" stroke="#3fe2c9" strokeWidth="1.5" strokeDasharray="3,2" />

              {/* Manipulator Articulated Arm (front bottom) */}
              <g stroke="#334155" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M55,102 L42,118 L26,118 L18,126" stroke="#475569" strokeWidth="2.5" />
                <circle cx="42" cy="118" r="3.5" fill="url(#brassGrad)" stroke="#854d0e" strokeWidth="0.8" />
                <circle cx="26" cy="118" r="3.5" fill="url(#brassGrad)" stroke="#854d0e" strokeWidth="0.8" />
                <path d="M15,123 C14,127 16,130 18,131" stroke="#334155" />
                <path d="M19,123 C22,126 21,129 19,131" stroke="#334155" />
                <circle cx="16" cy="127" r="2.5" fill="#3fe2c9" className="animate-pulse" />
              </g>

              {/* 3. MAIN CHASSIS STRUCTURAL HULL */}
              <path d="M165,48 C195,48 215,62 215,82 C215,96 195,105 165,105 Z" fill="url(#metalChassisGrad)" stroke="#0f172a" strokeWidth="1.2" />
              <path d="M42,82 C42,48 75,38 125,38 C175,38 185,48 185,82 C185,96 165,105 125,105 C75,105 42,96 42,82 Z" fill="url(#subBodyGrad)" stroke="#854d0e" strokeWidth="1.2" />

              {/* Rivet Details along the main seams */}
              <circle cx="65" cy="45" r="1.2" fill="#ca8a04" />
              <circle cx="85" cy="40" r="1.2" fill="#ca8a04" />
              <circle cx="105" cy="39" r="1.2" fill="#ca8a04" />
              <circle cx="125" cy="39" r="1.2" fill="#ca8a04" />
              <circle cx="145" cy="40" r="1.2" fill="#ca8a04" />
              <circle cx="165" cy="45" r="1.2" fill="#ca8a04" />
              <circle cx="178" cy="55" r="1.2" fill="#ca8a04" />
              <circle cx="65" cy="101" r="1.2" fill="#ca8a04" />
              <circle cx="85" cy="104" r="1.2" fill="#ca8a04" />
              <circle cx="105" cy="105" r="1.2" fill="#ca8a04" />
              <circle cx="125" cy="105" r="1.2" fill="#ca8a04" />
              <circle cx="145" cy="104" r="1.2" fill="#ca8a04" />
              <circle cx="165" cy="101" r="1.2" fill="#ca8a04" />

              {/* Vertical panel separators */}
              <path d="M85,40 C85,60 85,85 85,104" stroke="#854d0e" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
              <path d="M125,39 C125,60 125,85 125,105" stroke="#854d0e" strokeWidth="1" />
              <path d="M158,42 C158,60 158,85 158,103" stroke="#854d0e" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />

              {/* 4. EXPEDITION GLASS COCKPIT */}
              <path d="M44,82 C44,62 55,48 68,48 C66,65 66,82 68,96 C55,96 44,90 44,82 Z" fill="#334155" stroke="url(#brassGrad)" strokeWidth="1.2" />
              <path d="M46,82 C46,65 54,52 64,52 C62,68 62,82 64,92 C54,92 46,88 46,82 Z" fill="url(#glassGrad)" stroke="#0284c7" strokeWidth="0.8" />
              <path d="M48,80 C50,70 54,62 59,58 C57,68 57,75 59,85 Z" fill="#ffffff" opacity="0.35" />
              <circle cx="56" cy="78" r="2" fill="#3fe2c9" className="animate-pulse" />

              {/* 5. REINFORCED PORTHOLE WINDOWS */}
              {/* Porthole 1 */}
              <circle cx="95" cy="72" r="14" fill="url(#brassGrad)" stroke="#854d0e" strokeWidth="1.5" />
              <circle cx="95" cy="72" r="10.5" fill="rgba(15, 23, 42, 0.95)" />
              <circle cx="95" cy="72" r="8" fill="url(#glassGrad)" />
              <path d="M90,68 L100,76" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
              <circle cx="95" cy="59.5" r="0.75" fill="#fef08a" />
              <circle cx="95" cy="84.5" r="0.75" fill="#fef08a" />
              <circle cx="82.5" cy="72" r="0.75" fill="#fef08a" />
              <circle cx="107.5" cy="72" r="0.75" fill="#fef08a" />

              {/* Porthole 2 */}
              <circle cx="138" cy="72" r="14" fill="url(#brassGrad)" stroke="#854d0e" strokeWidth="1.5" />
              <circle cx="138" cy="72" r="10.5" fill="rgba(15, 23, 42, 0.95)" />
              <circle cx="138" cy="72" r="8" fill="url(#glassGrad)" />
              <path d="M133,68 L143,76" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
              <circle cx="138" cy="59.5" r="0.75" fill="#fef08a" />
              <circle cx="138" cy="84.5" r="0.75" fill="#fef08a" />
              <circle cx="125.5" cy="72" r="0.75" fill="#fef08a" />
              <circle cx="150.5" cy="72" r="0.75" fill="#fef08a" />

              {/* 6. HIGH-TECH SAIL / CONNING TOWER */}
              <path d="M102,38 L114,14 L142,14 L138,38 Z" fill="url(#subBodyGrad)" stroke="#854d0e" strokeWidth="1" />
              <path d="M108,38 L116,18 L134,18 L132,38 Z" fill="url(#metalChassisGrad)" opacity="0.35" />
              
              {/* Double Periscopes and Radar system */}
              <path d="M120,14 L120,4 L126,4" fill="none" stroke="url(#brassGrad)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="126" cy="4" r="1.5" fill="#3fe2c9" />
              <line x1="132" y1="14" x2="132" y2="1" stroke="#475569" strokeWidth="1.2" />
              <line x1="129" y1="5" x2="135" y2="5" stroke="var(--color-cyan)" strokeWidth="1" />
              <line x1="130.5" y1="2" x2="133.5" y2="2" stroke="var(--color-cyan)" strokeWidth="1" />
              <circle cx="132" cy="1" r="1.8" fill="var(--color-submarine)" className="animate-ping" style={{ transformOrigin: '132px 1px' }} />

              {/* 7. REINFORCED STABILIZER FINS */}
              <path d="M180,102 L206,118 L218,118 L198,102 Z" fill="url(#metalChassisGrad)" stroke="#1e293b" strokeWidth="1" />
              <circle cx="212" cy="118" r="1" fill="#3fe2c9" />
              <path d="M182,42 L206,20 L218,20 L198,42 Z" fill="url(#metalChassisGrad)" stroke="#1e293b" strokeWidth="1" />
              <circle cx="212" cy="20" r="1" fill="#3fe2c9" />

              {/* 8. HIGH-INTENSITY SEARCHLIGHT (FRONT) */}
              <rect x="52" y="88" width="12" height="8" rx="1.5" fill="url(#metalChassisGrad)" stroke="url(#brassGrad)" strokeWidth="1.2" />
              <ellipse cx="52" cy="92" rx="2" ry="4" fill="#a3f3e6" />
              <circle cx="52" cy="92" r="1" fill="#ffffff" />
            </svg>

            {/* Bubble Ejection Streams when transmitting or success */}
            {(isSubmitting || isSuccess) && (
              <div className="absolute top-[80px] right-[-40px] flex flex-col gap-2 pointer-events-none">
                <span className="bubble-particle b1"></span>
                <span className="bubble-particle b2"></span>
                <span className="bubble-particle b3"></span>
              </div>
            )}
          </div>

          {/* Seabed rocks graphic at base */}
          <div 
            style={{
              position: 'absolute',
              bottom: '10px',
              left: 0,
              right: 0,
              height: '35px',
              opacity: 0.2,
              pointerEvents: 'none',
            }}
          >
            <svg viewBox="0 0 300 40" style={{ width: '100%', height: '100%', fill: 'var(--color-soft-white)' }} preserveAspectRatio="none">
              <path d="M0,40 L0,20 L30,30 L60,15 L90,28 L140,10 L180,30 L220,18 L260,28 L300,12 L300,40 Z" />
            </svg>
          </div>
        </div>

        {/* RIGHT VIEWPORT: Interactive Submarine Commander HUD Control Console */}
        <div className="lg:col-span-7 w-full">
          <div 
            className="glass-submarine-console"
            style={{
              border: '1px solid rgba(63, 226, 201, 0.25)',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: 'rgba(5, 15, 28, 0.88)',
              boxShadow: '0 0 40px rgba(6, 25, 45, 0.7), 0 0 25px rgba(63, 226, 201, 0.08) inset',
            }}
          >
            {/* Console Header Bar */}
            <div 
              style={{
                backgroundColor: 'rgba(2, 10, 20, 0.8)',
                padding: '12px 20px',
                borderBottom: '1px solid rgba(63, 226, 201, 0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={13} style={{ color: 'var(--color-cyan)', animation: 'pulse 1.5s infinite' }} />
                <span style={{ 
                  fontFamily: 'var(--font-subtitle)', 
                  fontSize: '0.62rem', 
                  fontWeight: 800, 
                  letterSpacing: '1.5px', 
                  color: 'rgba(255, 255, 255, 0.8)' 
                }}>
                  SUBMERSIBLE DS-05 // COMMS DASHBOARD
                </span>
              </div>
              {/* LED Status Indicators */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className={`led-dot ${isSubmitting ? 'led-transmitting' : 'led-ok'}`}></span>
                  <span style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>SYS</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="led-dot led-secure"></span>
                  <span style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>NET</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '0.52rem', color: 'var(--color-cyan)', fontFamily: 'monospace', fontWeight: 700 }}>
                    {depthJitter}M
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard Inner Screen */}
            <div style={{ padding: '24px 28px' }}>
              {isSuccess ? (
                <div 
                  className="animate-[scaleUp_0.4s_ease-out]"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.03)',
                    border: '1px dashed #10B981',
                    borderRadius: '12px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)',
                  }}>
                    <Check size={24} style={{ color: '#071324' }} />
                  </div>
                  <h4 style={{ color: '#10B981', fontSize: '0.98rem', fontFamily: 'var(--font-header)', fontWeight: 800, letterSpacing: '1px' }}>
                    TRANSMISSION SECURELY COMPLETED
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.72)', lineHeight: '1.5', maxWidth: '420px', margin: '0 auto' }}>
                    Your coordinate packet has been encrypted and broadcasted to our central command archive. 
                    Maneesh Soni will intercept your signal shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '18px' }}>
                  
                  {/* Console Controls row (Left Sonar Screen + Right Fields) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Active Sonar Radar Display Screen */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center border border-cyan-400/15 rounded-xl bg-slate-950/70 p-4 min-h-[220px]">
                      <span style={{ fontSize: '0.52rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-subtitle)', letterSpacing: '1px', fontWeight: 800, marginBottom: '10px', textTransform: 'uppercase' }}>
                        Active Sonar
                      </span>
                      
                      {/* Interactive circular radar sweep */}
                      <div className="relative w-28 h-28 rounded-full border border-cyan-400/30 bg-[#020d1c] overflow-hidden flex items-center justify-center">
                        {/* Rotating Sweep Hand */}
                        <div className="absolute inset-0 radar-sweep-hand"></div>
                        
                        {/* Concentric rings */}
                        <div className="absolute w-[80%] h-[80%] rounded-full border border-cyan-400/10 pointer-events-none"></div>
                        <div className="absolute w-[50%] h-[50%] rounded-full border border-cyan-400/10 pointer-events-none"></div>
                        
                        {/* Grid lines */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-cyan-400/10 pointer-events-none"></div>
                        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-cyan-400/10 pointer-events-none"></div>
                        
                        {/* Interactive pulsing signal targets */}
                        <span className="radar-blip blip-1"></span>
                        <span className="radar-blip blip-2"></span>
                      </div>
                      
                      {/* Live Data feeds */}
                      <div style={{ marginTop: '12px', width: '100%', textAlign: 'left', borderTop: '1px solid rgba(63,226,201,0.1)', paddingTop: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.52rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
                          <span>PING STATS:</span>
                          <span style={{ color: 'var(--color-cyan)' }}>ACTIVE</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.52rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginTop: '2px' }}>
                          <span>SIGNAL DB:</span>
                          <span style={{ color: 'var(--color-teal)' }}>-42.5 dBm</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Input Terminal Forms */}
                    <div className="md:col-span-8 flex flex-col gap-4">
                      
                      {/* Name */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.58rem', fontFamily: 'var(--font-subtitle)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.8px', fontWeight: 800 }}>
                          COMMANDER SIGNATURE NAME
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="ENTER FULL NAME..."
                          className="terminal-hud-input"
                          style={{
                            padding: '10px 14px',
                            fontSize: '0.75rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(63, 226, 201, 0.15)',
                            backgroundColor: 'rgba(2, 12, 27, 0.45)',
                            color: 'var(--color-soft-white)',
                            fontFamily: 'monospace',
                            outline: 'none',
                          }}
                        />
                      </div>

                      {/* Email */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.58rem', fontFamily: 'var(--font-subtitle)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.8px', fontWeight: 800 }}>
                          CORRESPONDENCE SECURE EMAIL
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ENTER SECURE EMAIL..."
                          className="terminal-hud-input"
                          style={{
                            padding: '10px 14px',
                            fontSize: '0.75rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(63, 226, 201, 0.15)',
                            backgroundColor: 'rgba(2, 12, 27, 0.45)',
                            color: 'var(--color-soft-white)',
                            fontFamily: 'monospace',
                            outline: 'none',
                          }}
                        />
                      </div>

                      {/* Message */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.58rem', fontFamily: 'var(--font-subtitle)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.8px', fontWeight: 800 }}>
                          TRANSMISSION PAYLOAD MESSAGE
                        </label>
                        <textarea 
                          rows={3}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="ENTER SECURE PAYLOAD LOGS..."
                          className="terminal-hud-input"
                          style={{
                            padding: '10px 14px',
                            fontSize: '0.75rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(63, 226, 201, 0.15)',
                            backgroundColor: 'rgba(2, 12, 27, 0.45)',
                            color: 'var(--color-soft-white)',
                            fontFamily: 'monospace',
                            outline: 'none',
                            resize: 'none',
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* High-Tactile Broadcast Trigger Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-marine-hud-cta"
                    style={{
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      padding: '14px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginTop: '6px',
                      position: 'relative',
                    }}
                  >
                    <Radio size={12} className={isSubmitting ? 'animate-ping' : ''} />
                    <span>{isSubmitting ? 'ENCRYPTING & BROADCASTING...' : 'INITIATE DEEP-SEA TRANSMISSION'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* 2.5 DEEP-SEA SEABED REEF (VOLCANIC ROCKS & SWAYING BIOLUMINESCENT CORALS) */}
      <div 
        style={{
          width: '100%',
          height: '90px',
          position: 'relative',
          marginTop: '50px',
          marginBottom: '15px',
          overflow: 'visible',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        <svg 
          viewBox="0 0 1200 100" 
          width="100%" 
          height="100%" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          {/* Layer 1: Back Volcanic Rocks */}
          <path d="M-50,100 Q150,85 300,90 Q480,95 650,82 Q820,70 1000,90 Q1150,92 1250,100 Z" fill="#01060d" />
          
          {/* Layer 2: Mid-ground Volcanic Silhouettes */}
          <path d="M-50,100 Q100,60 250,85 Q400,90 550,80 Q700,75 880,88 Q1050,65 1250,100 Z" fill="#020c1b" opacity="0.95" />
          
          {/* Layer 3: Foreground Crags with slight highlights */}
          <path d="M-20,100 Q80,80 180,90 Q300,92 420,83 Q600,95 780,85 Q920,82 1080,91 Q1180,88 1220,100 Z" fill="#071324" opacity="0.8" stroke="rgba(63, 226, 201, 0.15)" strokeWidth="0.8" />

          {/* Bioluminescent Fan Corals (Swaying in the currents) */}
          {/* Left Teal Coral */}
          <g className="swaying-coral" style={{ transformOrigin: '80px 90px' }}>
            <path d="M80,90 Q70,70 65,50 Q62,40 50,42 Q40,44 45,35 Q50,25 60,35 Q65,42 70,55 M80,90 Q85,75 90,60 Q95,50 110,48 Q120,46 115,38 Q110,30 100,40 Q95,48 90,65" stroke="#3fe2c9" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
            <circle cx="50" cy="42" r="1.8" fill="#a3f3e6" />
            <circle cx="110" cy="48" r="1.8" fill="#a3f3e6" />
          </g>

          {/* Purple Coral (Mid-Left) */}
          <g className="swaying-coral-delayed" style={{ transformOrigin: '220px 92px' }}>
            <path d="M220,92 Q215,70 210,50 Q205,35 190,38 M210,50 Q225,40 235,25 Q240,15 250,20 Q245,30 230,45 Q220,55 220,70" stroke="#a78bfa" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
            <circle cx="190" cy="38" r="1.5" fill="#e9d5ff" />
            <circle cx="250" cy="20" r="1.5" fill="#e9d5ff" />
          </g>

          {/* Center-Right Pink Anemone Reef */}
          <g className="swaying-coral" style={{ transformOrigin: '980px 92px' }}>
            <path d="M980,92 Q970,72 965,52 Q960,38 948,40 M965,52 Q980,42 990,28 Q995,18 1005,22 Q1000,32 985,47 Q975,57 975,72" stroke="#f472b6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
            <circle cx="948" cy="40" r="1.5" fill="#fbcfe8" />
            <circle cx="1005" cy="22" r="1.5" fill="#fbcfe8" />
          </g>

          {/* Glowing Sea Grass / Kelp Ribbons */}
          {/* Grass 1 (Left Area) */}
          <path className="swaying-coral" d="M120,90 C110,65 130,40 125,15 C122,2 110,-5 105,-8" stroke="#05b1a3" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.75" style={{ transformOrigin: '120px 90px' }} />
          <path className="swaying-coral-delayed" d="M135,90 C125,70 145,50 140,25 C137,12 125,5 120,0" stroke="#05b1a3" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.6" style={{ transformOrigin: '135px 90px' }} />

          {/* Grass 2 (Mid-Right Area) */}
          <path className="swaying-coral" d="M720,92 C710,65 730,45 725,20 C722,8 710,2 705,-2" stroke="#05b1a3" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.65" style={{ transformOrigin: '720px 92px' }} />
          <path className="swaying-coral-delayed" d="M740,92 C730,70 750,52 745,28 C742,15 730,8 725,2" stroke="#05b1a3" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.55" style={{ transformOrigin: '740px 92px' }} />

          {/* Grass 3 (Right Area) */}
          <path className="swaying-coral" d="M1080,91 C1070,68 1090,46 1085,20 C1082,8 1070,2 1065,-2" stroke="#05b1a3" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" style={{ transformOrigin: '1080px 91px' }} />
        </svg>
      </div>

      {/* 3. CINEMATIC INTEGRATED FOOTER */}
      <footer 
        style={{
          width: '100%',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
        className="documentary-footer-row"
      >
        {/* Left Side Info */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-subtitle)' }}>
            &copy; {new Date().getFullYear()} MANEESH SONI. All rights reserved.
          </span>
          <span style={{ fontSize: '0.58rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-subtitle)', letterSpacing: '1px', fontWeight: 600 }}>
            COORDS: 26.8425° N, 75.5649° E // DEPTH 8,000M
          </span>
        </div>

        {/* Right Side Social Connect Icons */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a 
            href="mailto:maneeshsoni09@gmail.com" 
            style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cyan)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            title="Email Maneesh"
          >
            <Mail size={16} />
          </a>
          <a 
            href="tel:7023867503" 
            style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cyan)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            title="Call Maneesh"
          >
            <Phone size={16} />
          </a>
          <a 
            href="https://linkedin.com/in/maneesh-soni" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cyan)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            title="LinkedIn Profile"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </footer>

      {/* 4. DYNAMIC INTERACTIVE CONSOLE STYLES */}
      <style>{`
        /* Radar Sweep Hand Rotation */
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .radar-sweep-hand {
          position: absolute;
          width: 50%;
          height: 50%;
          background: linear-gradient(45deg, rgba(63, 226, 201, 0.22) 0%, transparent 100%);
          transform-origin: bottom right;
          border-right: 1.5px solid rgba(63, 226, 201, 0.65);
          animation: radar-sweep 4s linear infinite;
        }

        /* Pulsing Radar Blips */
        @keyframes pulse-blip {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.5); opacity: 0.9; }
        }
        .radar-blip {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-cyan);
          box-shadow: 0 0 8px var(--color-cyan);
          animation: pulse-blip 2s infinite ease-in-out;
        }
        .blip-1 { top: 25%; left: 30%; animation-delay: 0.5s; }
        .blip-2 { top: 60%; left: 70%; animation-delay: 1.2s; }

        /* LED Indicator lights */
        .led-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .led-ok {
          background-color: #10B981;
          box-shadow: 0 0 6px #10B981;
        }
        .led-secure {
          background-color: var(--color-cyan);
          box-shadow: 0 0 6px var(--color-cyan);
        }
        .led-transmitting {
          background-color: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: pulse 0.5s infinite;
        }

        /* Submarine Propeller Rotation Engine */
        @keyframes propeller-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sub-propeller {
          transform-origin: 225px 74px;
        }
        .spin-slow {
          animation: propeller-spin 1.5s linear infinite;
        }
        .spin-fast {
          animation: propeller-spin 0.18s linear infinite;
        }

        /* Volumetric beam pulsing when active */
        @keyframes transmit-beam-pulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }
        .submitting-beam {
          animation: transmit-beam-pulse 0.3s infinite ease-in-out !important;
        }

        /* Bubble Ejections */
        @keyframes float-bubble {
          0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.4; }
          100% { transform: translate(30px, -40px) scale(1.1); opacity: 0; }
        }
        .bubble-particle {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid rgba(63, 226, 201, 0.4);
          background-color: rgba(163, 243, 230, 0.12);
          animation: float-bubble 1.5s infinite linear;
        }
        .b1 { animation-delay: 0s; }
        .b2 { animation-delay: 0.4s; width: 5px; height: 5px; }
        .b3 { animation-delay: 0.8s; width: 10px; height: 10px; }

        /* Interactive inputs inside Commander Console */
        .terminal-hud-input:focus {
          border-color: var(--color-cyan) !important;
          box-shadow: 0 0 10px rgba(63, 226, 201, 0.25) !important;
        }
        .terminal-hud-input::placeholder {
          color: rgba(63, 226, 201, 0.25);
          font-family: monospace;
        }

        /* Button Styling inside HUD Console */
        .btn-marine-hud-cta {
          background: linear-gradient(135deg, var(--color-teal) 0%, var(--color-cyan) 100%);
          color: #071324;
          box-shadow: 0 0 15px rgba(63, 226, 201, 0.2);
          transition: all 0.3s;
        }
        .btn-marine-hud-cta:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(63, 226, 201, 0.45);
          background: linear-gradient(135deg, var(--color-cyan) 0%, #a78bfa 100%);
        }
        .btn-marine-hud-cta:active:not(:disabled) {
          transform: translateY(0);
        }
        .btn-marine-hud-cta:disabled {
          background: rgba(63, 226, 201, 0.15);
          color: rgba(255, 255, 255, 0.3);
          border: 1px dashed rgba(63, 226, 201, 0.3);
          cursor: not-allowed;
          box-shadow: none;
        }

        @media (max-width: 1024px) {
          .documentary-footer-row {
            flex-direction: column-reverse !important;
            gap: 20px !important;
            text-align: center !important;
          }
          .documentary-footer-row > div {
            text-align: center !important;
            align-items: center !important;
          }
        }

        /* Bioluminescent Seabed Coral Swaying Currents */
        @keyframes reef-sway {
          0%, 100% { transform: rotate(-1.5deg) skewX(-1deg); }
          50% { transform: rotate(1.8deg) skewX(1deg); }
        }
        .swaying-coral {
          animation: reef-sway 5.5s ease-in-out infinite;
        }
        .swaying-coral-delayed {
          animation: reef-sway 7s ease-in-out infinite;
          animation-delay: -2.5s;
        }
      `}</style>
    </div>
  );
};
