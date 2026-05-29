import React from 'react';
import { X, Compass, Award, User } from 'lucide-react';
import { CoralSkills } from './CoralSkills';
import { DeepProjects } from './DeepProjects';
import { AbyssExperience } from './AbyssExperience';
import { BioluminescentCave } from './BioluminescentCave';
import aiModelQuestCertificate from '../../assets/ai_model_quest_certificate.jpg';

interface SpecimenPortalProps {
  activeModal: string | null;
  setActiveModal: (modalId: string | null) => void;
}

export const SpecimenPortal: React.FC<SpecimenPortalProps> = ({ activeModal, setActiveModal }) => {
  
  // Close modal handler
  const handleClose = () => {
    setActiveModal(null);
  };

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '1200px',
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
      {/* 1. SECTOR HEADER (DOCUMENTARY SYMMETRY) */}
      <div style={{ textAlign: 'center', maxWidth: '750px', marginBottom: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Compass size={15} style={{ color: 'var(--color-cyan)', animation: 'pulse 2s infinite' }} />
          <span style={{ 
            fontFamily: 'var(--font-subtitle)', 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            letterSpacing: '2.5px',
            color: 'var(--color-cyan)',
            textTransform: 'uppercase'
          }}>
            ZONE 02 // SUBSEA SPECIMEN PORTAL
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.8vw, 2.5rem)',
          fontWeight: 900,
          color: 'var(--color-soft-white)',
          lineHeight: '1.2',
          marginBottom: '16px',
          letterSpacing: '-0.5px'
        }}>
          Know a little more <span style={{ color: 'var(--color-cyan)' }}>about me</span>.
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.85rem, 1.6vw, 0.98rem)',
          color: 'rgba(255, 255, 255, 0.72)',
          lineHeight: '1.6',
        }}>
          Click on any of the cute floating aquatic creatures below to explore my technical skills, 
          projects, honors, work timeline, credentials, or get in touch!
        </p>
      </div>

      {/* 2. SPECIMEN PORTAL GRID (3x2 grid of cute animals) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl justify-items-center">
        
        {/* SPECIMEN 01: GLIDING MANTA RAY (PROFILE) */}
        <div 
          onClick={() => setActiveModal('profile')}
          className="group cursor-pointer flex flex-col items-center relative"
        >
          <div className="specimen-bubble relative flex justify-center items-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-cyan-400/20 bg-slate-950/40 hover:bg-slate-900/60 transition-all duration-500 shadow-[0_0_20px_rgba(63,226,201,0.05)] hover:shadow-[0_0_35px_rgba(63,226,201,0.22)] hover:-translate-y-2">
            {/* Adorable Gliding Manta Ray SVG */}
            <svg viewBox="0 0 100 100" className="w-[82%] h-[82%] specimen-svg-ray">
              {/* Tail whipping behind */}
              <path d="M50,62 Q50,75 56,88" stroke="#0284c7" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Wide Gliding Wings */}
              <path 
                d="M50,22 C34,25 10,40 16,50 C22,60 40,58 50,56 C60,58 78,60 84,50 C90,40 66,25 50,22 Z" 
                fill="#38bdf8" 
                stroke="#0284c7" 
                strokeWidth="1.8" 
                strokeLinejoin="round" 
              />
              {/* Cephalic Horns (front fins) */}
              <path d="M43,22 C40,16 45,14 47,21 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
              <path d="M57,22 C60,16 55,14 53,21 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
              {/* Cute spotted back detail */}
              <circle cx="50" cy="32" r="1.5" fill="#bae6fd" />
              <circle cx="42" cy="38" r="1" fill="#bae6fd" />
              <circle cx="58" cy="38" r="1" fill="#bae6fd" />
              <circle cx="34" cy="42" r="1.2" fill="#bae6fd" />
              <circle cx="66" cy="42" r="1.2" fill="#bae6fd" />
              {/* Big cute friendly eyes */}
              <circle cx="36" cy="27.5" r="2.2" fill="#1e1b4b" />
              <circle cx="64" cy="27.5" r="2.2" fill="#1e1b4b" />
              <circle cx="35" cy="26.5" r="0.8" fill="#ffffff" />
              <circle cx="63" cy="26.5" r="0.8" fill="#ffffff" />
              {/* Smiling mouth beneath */}
              <path d="M48.5,29.5 Q50,31.5 51.5,29.5" stroke="#bae6fd" strokeWidth="1.2" fill="none" opacity="0.8" />
            </svg>
          </div>
          <span className="mt-4 font-subtitle text-xs md:text-sm font-bold tracking-[2px] text-cyan-300 group-hover:text-white uppercase transition-colors text-center">
            Profile Bio
          </span>
        </div>

        {/* SPECIMEN 02: BIOLUMINESCENT OCTOPUS (SKILLS) */}
        <div 
          onClick={() => setActiveModal('skills')}
          className="group cursor-pointer flex flex-col items-center relative"
        >
          <div className="specimen-bubble relative flex justify-center items-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-cyan-400/20 bg-slate-950/40 hover:bg-slate-900/60 transition-all duration-500 shadow-[0_0_20px_rgba(63,226,201,0.05)] hover:shadow-[0_0_35px_rgba(63,226,201,0.22)] hover:-translate-y-2">
            {/* Adorable Pink/Lavender Octopus SVG */}
            <svg viewBox="0 0 100 100" className="w-[75%] h-[75%] specimen-svg-pulse">
              {/* Head */}
              <ellipse cx="50" cy="40" rx="22" ry="18" fill="rgba(167, 139, 250, 0.85)" stroke="#c084fc" strokeWidth="1.5" />
              {/* Eyes */}
              <circle cx="41" cy="40" r="4.5" fill="#1e1b4b" />
              <circle cx="59" cy="40" r="4.5" fill="#1e1b4b" />
              {/* Sparkles in eyes */}
              <circle cx="39.5" cy="38.5" r="1.5" fill="#ffffff" />
              <circle cx="57.5" cy="38.5" r="1.5" fill="#ffffff" />
              {/* Cute smiling mouth */}
              <path d="M48,46 Q50,49 52,46" stroke="#1e1b4b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Blush cheeks */}
              <circle cx="35" cy="44" r="2.5" fill="#f472b6" opacity="0.8" />
              <circle cx="65" cy="44" r="2.5" fill="#f472b6" opacity="0.8" />
              {/* Wavy Cute Tentacles */}
              <path d="M34,54 C30,62 36,75 32,82" stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M44,56 C42,65 48,76 44,84" stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M56,56 C58,65 52,76 56,84" stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M66,54 C70,62 64,75 68,82" stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Soft suction cups */}
              <circle cx="29" cy="65" r="1" fill="#f472b6" />
              <circle cx="47" cy="68" r="1" fill="#f472b6" />
              <circle cx="53" cy="68" r="1" fill="#f472b6" />
              <circle cx="71" cy="65" r="1" fill="#f472b6" />
            </svg>
          </div>
          <span className="mt-4 font-subtitle text-xs md:text-sm font-bold tracking-[2px] text-cyan-300 group-hover:text-white uppercase transition-colors text-center">
            Skills Database
          </span>
        </div>

        {/* SPECIMEN 03: PADDLING SEA TURTLE (PROJECTS) */}
        <div 
          onClick={() => setActiveModal('projects')}
          className="group cursor-pointer flex flex-col items-center relative"
        >
          <div className="specimen-bubble relative flex justify-center items-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-cyan-400/20 bg-slate-950/40 hover:bg-slate-900/60 transition-all duration-500 shadow-[0_0_20px_rgba(63,226,201,0.05)] hover:shadow-[0_0_35px_rgba(63,226,201,0.22)] hover:-translate-y-2">
            {/* Adorable Paddling Green Sea Turtle SVG */}
            <svg viewBox="0 0 100 100" className="w-[78%] h-[78%] specimen-svg-swim">
              {/* Flippers */}
              <path d="M22,35 C15,38 12,48 18,52 C24,56 28,48 26,42" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
              <path d="M78,35 C85,38 88,48 82,52 C76,56 72,48 74,42" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
              {/* Back flippers */}
              <path d="M35,68 C30,72 28,78 32,80 C36,82 40,78 38,72" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
              <path d="M65,68 C70,72 72,78 68,80 C64,82 60,78 62,72" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
              {/* Hexagonal shell */}
              <ellipse cx="50" cy="54" rx="22" ry="24" fill="#047857" stroke="#065f46" strokeWidth="1.5" />
              {/* Mosaic Shell Details */}
              <path d="M50,30 L50,78 M28,54 L72,54 M35,40 L65,68 M65,40 L35,68" stroke="#34d399" strokeWidth="1.2" opacity="0.6" />
              {/* Head */}
              <ellipse cx="50" cy="24" rx="8.5" ry="9.5" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
              {/* Eyes */}
              <circle cx="46.5" cy="22" r="1.8" fill="#1e1b4b" />
              <circle cx="53.5" cy="22" r="1.8" fill="#1e1b4b" />
              <circle cx="46" cy="21" r="0.6" fill="#ffffff" />
              <circle cx="53" cy="21" r="0.6" fill="#ffffff" />
              {/* Smile */}
              <path d="M48.5,27.5 Q50,29 51.5,27.5" stroke="#1e1b4b" strokeWidth="1" fill="none" />
              {/* Little Tail */}
              <path d="M50,78 L47,84 L53,84 Z" fill="#10b981" />
            </svg>
          </div>
          <span className="mt-4 font-subtitle text-xs md:text-sm font-bold tracking-[2px] text-cyan-300 group-hover:text-white uppercase transition-colors text-center">
            Projects Vault
          </span>
        </div>

        {/* SPECIMEN 04: CURLED SEAHORSE (EXPERIENCE) */}
        <div 
          onClick={() => setActiveModal('experience')}
          className="group cursor-pointer flex flex-col items-center relative"
        >
          <div className="specimen-bubble relative flex justify-center items-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-cyan-400/20 bg-slate-950/40 hover:bg-slate-900/60 transition-all duration-500 shadow-[0_0_20px_rgba(63,226,201,0.05)] hover:shadow-[0_0_35px_rgba(63,226,201,0.22)] hover:-translate-y-2">
            {/* Adorable Curled Seahorse SVG */}
            <svg viewBox="0 0 100 100" className="w-[74%] h-[74%] specimen-svg-drift">
              {/* Back fin (Peach translucent) */}
              <path d="M43,45 C38,40 38,55 43,50" fill="rgba(251, 146, 60, 0.4)" stroke="#f97316" strokeWidth="1" />
              {/* Seahorse Body outline */}
              <path 
                d="M50,16 C53,16 57,20 54,26 C53,28 48,32 50,35 C52,38 58,40 56,48 C54,53 48,58 50,64 C52,70 56,72 50,78 C44,84 40,78 44,72 C48,66 48,60 44,54 C40,48 42,38 46,30 C48,26 47,16 50,16 Z" 
                fill="#fb923c" 
                stroke="#ea580c" 
                strokeWidth="1.6" 
                strokeLinejoin="round" 
              />
              {/* Seahorse Snout */}
              <path d="M54,23 L62,23 C64,23 64,26 62,26 L53,26" fill="#fb923c" stroke="#ea580c" strokeWidth="1.2" />
              {/* Crown ridges */}
              <path d="M50,16 L53,10 L47,12 L44,8 L44,16" stroke="#ea580c" strokeWidth="1.5" fill="#fb923c" />
              {/* Curled Tail details */}
              <path d="M50,78 C52,82 48,86 44,84 C40,82 42,76 46,76" stroke="#ea580c" strokeWidth="1.2" fill="none" />
              {/* Big friendly eye */}
              <circle cx="48.5" cy="21" r="2.8" fill="#1e1b4b" />
              <circle cx="48" cy="20" r="1" fill="#ffffff" />
              {/* Rosy Blush cheek */}
              <circle cx="47" cy="25" r="1.5" fill="#f43f5e" opacity="0.8" />
            </svg>
          </div>
          <span className="mt-4 font-subtitle text-xs md:text-sm font-bold tracking-[2px] text-cyan-300 group-hover:text-white uppercase transition-colors text-center">
            Experience Deck
          </span>
        </div>

        {/* SPECIMEN 05: GLOWING STARFISH (AWARDS) */}
        <div 
          onClick={() => setActiveModal('awards')}
          className="group cursor-pointer flex flex-col items-center relative"
        >
          <div className="specimen-bubble relative flex justify-center items-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-cyan-400/20 bg-slate-950/40 hover:bg-slate-900/60 transition-all duration-500 shadow-[0_0_20px_rgba(63,226,201,0.05)] hover:shadow-[0_0_35px_rgba(63,226,201,0.22)] hover:-translate-y-2">
            {/* Adorable Smiling Golden Starfish SVG */}
            <svg viewBox="0 0 100 100" className="w-[74%] h-[74%] specimen-svg-float">
              {/* Glowing back star */}
              <path 
                d="M50,12 L61,38 L88,38 L66,54 L75,80 L50,64 L25,80 L34,54 L12,38 L39,38 Z" 
                fill="rgba(250, 204, 21, 0.9)" 
                stroke="#d97706" 
                strokeWidth="1.8" 
                strokeLinejoin="round" 
              />
              {/* Happy Starfish details */}
              <circle cx="43" cy="46" r="3.2" fill="#1e1b4b" />
              <circle cx="57" cy="46" r="3.2" fill="#1e1b4b" />
              <circle cx="42" cy="44.5" r="1.1" fill="#ffffff" />
              <circle cx="56" cy="44.5" r="1.1" fill="#ffffff" />
              {/* Wide rosy happy blush smile */}
              <path d="M46,54 Q50,58 54,54" stroke="#1e1b4b" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <circle cx="36" cy="51" r="2.2" fill="#f43f5e" opacity="0.8" />
              <circle cx="64" cy="51" r="2.2" fill="#f43f5e" opacity="0.8" />
              {/* Cute little textured dots along starfish arms */}
              <circle cx="50" cy="22" r="1" fill="#d97706" />
              <circle cx="50" cy="28" r="1" fill="#d97706" />
              <circle cx="78" cy="41" r="1" fill="#d97706" />
              <circle cx="70" cy="44" r="1" fill="#d97706" />
              <circle cx="68" cy="70" r="1" fill="#d97706" />
              <circle cx="60" cy="66" r="1" fill="#d97706" />
              <circle cx="32" cy="70" r="1" fill="#d97706" />
              <circle cx="40" cy="66" r="1" fill="#d97706" />
              <circle cx="22" cy="41" r="1" fill="#d97706" />
              <circle cx="30" cy="44" r="1" fill="#d97706" />
            </svg>
          </div>
          <span className="mt-4 font-subtitle text-xs md:text-sm font-bold tracking-[2px] text-cyan-300 group-hover:text-white uppercase transition-colors text-center">
            Awards & Honors
          </span>
        </div>

        {/* SPECIMEN 06: PLAYFUL CRAB (CONTACT) */}
        <div 
          onClick={() => setActiveModal('contact')}
          className="group cursor-pointer flex flex-col items-center relative"
        >
          <div className="specimen-bubble relative flex justify-center items-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-cyan-400/20 bg-slate-950/40 hover:bg-slate-900/60 transition-all duration-500 shadow-[0_0_20px_rgba(63,226,201,0.05)] hover:shadow-[0_0_35px_rgba(63,226,201,0.22)] hover:-translate-y-2">
            {/* Adorable Wiggling Crab SVG */}
            <svg viewBox="0 0 100 100" className="w-[78%] h-[78%] specimen-svg-crab">
              {/* Little Legs */}
              <path d="M26,62 C22,65 18,72 20,76" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M34,65 C32,70 30,76 34,80" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M74,62 C78,65 82,72 80,76" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M66,65 C68,70 70,76 66,80" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" fill="none" />
              {/* Claws / Snapping Pincers */}
              <path d="M24,42 C16,40 10,48 16,56" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" fill="none" />
              <path d="M16,56 L12,48 M16,56 L20,50" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M76,42 C84,40 90,48 84,56" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" fill="none" />
              <path d="M84,56 L88,48 M84,56 L80,50" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Main Body */}
              <ellipse cx="50" cy="58" rx="26" ry="18" fill="#f87171" stroke="#dc2626" strokeWidth="1.8" />
              {/* Smiling face */}
              <path d="M46.5,62.5 Q50,65.5 53.5,62.5" stroke="#1e1b4b" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <circle cx="38" cy="60" r="1.8" fill="#f43f5e" opacity="0.8" />
              <circle cx="62" cy="60" r="1.8" fill="#f43f5e" opacity="0.8" />
              {/* Eyes on short stalks */}
              <line x1="42" y1="48" x2="42" y2="40" stroke="#dc2626" strokeWidth="2.5" />
              <line x1="58" y1="48" x2="58" y2="40" stroke="#dc2626" strokeWidth="2.5" />
              <circle cx="42" cy="38" r="5" fill="#ffffff" stroke="#dc2626" strokeWidth="1.2" />
              <circle cx="58" cy="38" r="5" fill="#ffffff" stroke="#dc2626" strokeWidth="1.2" />
              <circle cx="42" cy="38" r="2.2" fill="#1e1b4b" />
              <circle cx="58" cy="38" r="2.2" fill="#1e1b4b" />
            </svg>
          </div>
          <span className="mt-4 font-subtitle text-xs md:text-sm font-bold tracking-[2px] text-cyan-300 group-hover:text-white uppercase transition-colors text-center">
            Contact Deck
          </span>
        </div>

      </div>

      {/* 3. GORGEOUS POPUP MODAL OVERLAY CONTEXTS */}
      {activeModal && (
        <div 
          onClick={handleClose}
          className="fixed inset-0 w-full h-full z-[1000] flex justify-center items-center backdrop-blur-xl bg-slate-950/80 p-4 transition-all duration-300 animate-[fadeIn_0.3s_ease-out]"
        >
          {/* Glassmorphic Modal Card */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: '85vh',
              width: '100%',
              maxWidth: '1100px',
              border: '1px solid rgba(63, 226, 201, 0.25)',
              boxShadow: '0 0 50px rgba(63, 226, 201, 0.15)',
              backgroundColor: 'rgba(7, 19, 36, 0.94)',
              borderRadius: '20px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 50,
            }}
            className="overflow-y-auto no-scrollbar animate-[scaleUp_0.4s_cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* Elegant Floating Close Button in Top Right */}
            <button
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                padding: '8px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: 'rgba(7, 19, 36, 0.6)',
                zIndex: 100,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-cyan)';
                e.currentTarget.style.color = 'var(--color-cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
              }}
              title="Close Explorer"
            >
              <X size={18} />
            </button>

            {/* Modal Body Contents based on target ID */}
            <div style={{ width: '100%', height: '100%', padding: '40px 10px' }}>
              
              {/* MODAL 01: TECHNICAL SKILLS */}
              {activeModal === 'skills' && (
                <div className="py-6">
                  <CoralSkills />
                </div>
              )}

              {/* MODAL 02: PROJECTS VAULT */}
              {activeModal === 'projects' && (
                <div className="py-6">
                  <DeepProjects />
                </div>
              )}

              {/* MODAL 03: AWARDS & SCHOLARSHIPS */}
              {activeModal === 'awards' && (
                <div className="w-full max-w-[900px] mx-auto px-4 sm:px-8">
                  <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <Award size={16} style={{ color: 'var(--color-cyan)', animation: 'pulse 2s infinite' }} />
                      <span style={{ fontFamily: 'var(--font-subtitle)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--color-cyan)' }}>
                        SCHOLARSHIPS & ACADEMIC MERITS
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Honors & Technical Achievements</h3>
                  </div>

                  <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
                    {/* Unified Award Card 1: IEEE CIS AI Model Quest */}
                    <div 
                      style={{
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        backgroundColor: 'rgba(2, 12, 27, 0.45)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                      }}
                      className="glass-discovery-card w-full p-5 sm:p-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Description column */}
                        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left justify-between h-full">
                          <div className="flex flex-col items-center md:items-start">
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(63, 226, 201, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', color: 'var(--color-cyan)' }}>
                              <Award size={20} />
                            </div>
                            <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-subtitle)', color: 'var(--color-cyan)', fontWeight: 700, letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                              IEEE COMPUTATIONAL INTELLIGENCE SOCIETY
                            </span>
                            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '8px', lineHeight: '1.3' }}>
                              Second Position — AI Model Quest
                            </h4>
                            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                              Secured the Second Position at the national-scale *AI Model Quest* competition hosted by IEEE CIS MUJ (Oneiros '26) on March 13th, 2026. Recognizes outstanding creativity, machine learning modeling proficiency, and problem-solving under strict constraint parameters.
                            </p>
                          </div>
                        </div>
                        {/* Certificate Column */}
                        <div className="md:col-span-5 w-full flex justify-center">
                          <div 
                            style={{
                              padding: '12px',
                              borderRadius: '12px',
                              border: '1px solid rgba(255,255,255,0.08)',
                              backgroundColor: 'rgba(2, 12, 27, 0.5)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '8px',
                              width: '100%',
                              maxWidth: '320px',
                            }}
                          >
                            <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '6px' }}>
                              <img 
                                src={aiModelQuestCertificate} 
                                alt="IEEE CIS AI Model Quest Certificate of Excellence"
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  display: 'block',
                                  borderRadius: '6px',
                                  border: '1px solid rgba(255, 255, 255, 0.08)',
                                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                                  filter: 'contrast(1.08) brightness(1.04) saturate(1.02)', // Crisp, enhanced digital legibility
                                }}
                              />
                            </div>
                            <span style={{ fontSize: '0.6rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-subtitle)', letterSpacing: '1px', fontWeight: 600 }}>
                              VERIFIED CREDENTIAL TRANSCRIPT
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Unified Award Card 2: MUJ Student Excellence Award */}
                    <div 
                      style={{
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        backgroundColor: 'rgba(2, 12, 27, 0.45)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                      }}
                      className="glass-discovery-card w-full p-5 sm:p-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Description column */}
                        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left justify-between h-full">
                          <div className="flex flex-col items-center md:items-start">
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(63, 226, 201, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', color: 'var(--color-cyan)' }}>
                              <Compass size={20} />
                            </div>
                            <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-subtitle)', color: 'var(--color-cyan)', fontWeight: 700, letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                              MANIPAL UNIVERSITY JAIPUR
                            </span>
                            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '4px', lineHeight: '1.3' }}>
                              Student Excellence Award
                            </h4>
                            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>Summer Internship</span>
                            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                              Honored with the Student Excellence Award for summer internship contributions. Engineered highly optimized backend REST APIs using FastAPI, designed relational databases with PostgreSQL, and constructed a scalable NLP machine learning pipeline for automated document parsing at Nexthon.
                            </p>
                          </div>
                        </div>
                        {/* Certificate Slot Column (Placeholder ready for copy/linking!) */}
                        <div className="md:col-span-5 w-full flex justify-center">
                          <div 
                            style={{
                              height: '140px',
                              width: '100%',
                              maxWidth: '320px',
                              borderRadius: '8px',
                              border: '2px dashed rgba(255,255,255,0.08)',
                              backgroundColor: 'rgba(2, 12, 27, 0.25)',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '16px',
                              color: 'rgba(255,255,255,0.25)',
                              transition: 'border-color 0.3s ease',
                            }}
                          >
                            <Compass size={24} style={{ opacity: 0.4 }} />
                            <div style={{ textAlign: 'center' }}>
                              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-subtitle)', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, display: 'block' }}>
                                TRANSCRIPT SLOT READY
                              </span>
                              <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', display: 'block', marginTop: '2px' }}>
                                Replace with internship certificate image
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 04: EXPERIENCE TIMELINE */}
              {activeModal === 'experience' && (
                <div className="py-6">
                  <AbyssExperience />
                </div>
              )}

              {/* MODAL 05: CONTACT SUBSEA CONSOLE */}
              {activeModal === 'contact' && (
                <div className="py-6">
                  <BioluminescentCave />
                </div>
              )}

              {/* MODAL 06: PROFILE BIO DETAIL */}
              {activeModal === 'profile' && (
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 30px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '45px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <User size={16} style={{ color: 'var(--color-cyan)', animation: 'pulse 2s infinite' }} />
                      <span style={{ fontFamily: 'var(--font-subtitle)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--color-cyan)' }}>
                        BIOLOGICAL IDENTITY MATRIX
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Maneesh Soni Summary</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Bio Left Column */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                      <div 
                        style={{
                          padding: '24px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255,255,255,0.06)',
                          backgroundColor: 'rgba(2, 12, 27, 0.45)',
                          textAlign: 'center'
                        }}
                      >
                        <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '4px' }}>Maneesh Soni</h4>
                        <span style={{ fontSize: '0.7rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-subtitle)', letterSpacing: '1px', display: 'block', marginBottom: '16px' }}>
                          AI / ML SPECIALIST
                        </span>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                          <div>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, display: 'block' }}>ACADEMICS</span>
                            <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 500 }}>Manipal University Jaipur</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, display: 'block' }}>DEGREE FOCUS</span>
                            <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 500 }}>B-Tech AIML (Graduating 2027)</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, display: 'block' }}>EXPERIENCE RADAR</span>
                            <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 500 }}>Python API & Model Pipelines</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, display: 'block' }}>ORIGIN LOCATION</span>
                            <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 500 }}>Udaipur, Rajasthan, India</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, display: 'block' }}>HOBBIES & OUTDOORS</span>
                            <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 500 }}>Trekking, Cricket, Adventures</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bio Right Column */}
                    <div className="md:col-span-7 flex flex-col gap-6">
                      <div 
                        style={{
                          padding: '24px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255,255,255,0.06)',
                          backgroundColor: 'rgba(2, 12, 27, 0.45)',
                        }}
                      >
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-cyan)', fontWeight: 700, marginBottom: '12px', letterSpacing: '0.5px' }}>
                          Career Objective & Core Value
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', marginBottom: '16px' }}>
                          Dedicated Computer Science student with specialized credentials in Artificial Intelligence and Machine Learning. 
                          Passionate about engineering clean, highly performant, and scale-resilient AI backend platforms. 
                          Proven competency in NLP systems, FastAPI backends, and robust model scoring nodes.
                        </p>

                        <div className="grid grid-cols-3 gap-4 border-top border-white/10 pt-4 mt-2">
                          <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '1.2rem', color: 'var(--color-cyan)', fontWeight: 800, display: 'block' }}>95%</span>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>BACKEND CORE</span>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '1.2rem', color: 'var(--color-cyan)', fontWeight: 800, display: 'block' }}>88%</span>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>ML DESIGNS</span>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '1.2rem', color: 'var(--color-cyan)', fontWeight: 800, display: 'block' }}>96%</span>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>AI PIPELINES</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* 4. KEYFRAME ANIMATIONS & COMPONENT STYLE RULES */}
      <style>{`
        /* Bubble Floating Animation */
        @keyframes float-specimen {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1.5deg);
          }
        }
        
        /* Floating bubbles class */
        .specimen-bubble {
          animation: float-specimen 6s ease-in-out infinite;
        }
        
        /* Custom Cute SVG Animation Classes */
        @keyframes svg-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .specimen-svg-pulse {
          animation: svg-pulse 4s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes svg-swim {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(2deg) translateY(-2px); }
        }
        .specimen-svg-swim {
          animation: svg-swim 5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes svg-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(4deg); }
        }
        .specimen-svg-float {
          animation: svg-float 7s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes svg-drift {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-3px) scaleY(1.02); }
        }
        .specimen-svg-drift {
          animation: svg-drift 6s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes svg-crab {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(3px) rotate(1.5deg); }
        }
        .specimen-svg-crab {
          animation: svg-crab 3.5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes svg-ray {
          0%, 100% { transform: scaleY(1) translateY(0); }
          50% { transform: scaleY(0.95) translateY(-2px); }
        }
        .specimen-svg-ray {
          animation: svg-ray 8s ease-in-out infinite;
          transform-origin: center;
        }

        /* Modal Overlay Fade-in Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Hide scrollbars but keep functionality */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};
