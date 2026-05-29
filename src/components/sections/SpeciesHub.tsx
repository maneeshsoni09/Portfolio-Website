import React, { useState } from 'react';
import { audioEngine } from '../../utils/audioEngine';

interface Species {
  id: string;
  nameRU: string;
  nameEN: string;
  targetIndex: number;
  label: string;
  desc: string;
  color: string;
  svgIcon: React.ReactNode;
}

interface SpeciesHubProps {
  onNavigate: (sectionIndex: number) => void;
  activeSection: number;
}

export const SpeciesHub: React.FC<SpeciesHubProps> = ({ onNavigate, activeSection }) => {
  const [hoveredSpecies, setHoveredSpecies] = useState<Species | null>(null);

  const speciesList: Species[] = [
    {
      id: 'pike',
      nameRU: 'Щука',
      nameEN: 'Pike',
      targetIndex: 1, // CoralSkills
      label: 'TECHNICAL SKILLS REEF',
      desc: 'Machine learning algorithms, robust backend structures, database schemas, and AI automation engines.',
      color: 'var(--cyan-glow)',
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '38px', height: '38px' }}>
          {/* Pike Silhouette */}
          <path d="M2 12c4-2 8-3 12-1 2-1 4-2 6-1 1 .5.5 1.5 0 2-2 1-4 0-6-1-4 2-8 1-12-1z" strokeLinecap="round" />
          <path d="M19 11.5l1.5-1.5M16 11l1-2M4 12c2 1 3 2 4 4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'omul',
      nameRU: 'Омуль',
      nameEN: 'Omul',
      targetIndex: 2, // Map Section (which we will integrate inside projects zone!)
      label: 'DEPLOYMENT RADAR MAP',
      desc: 'Interactive geographic telemetry sweeps mapping current technical deployments across subsea facilities.',
      color: 'var(--yellow-accent)',
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '38px', height: '38px' }}>
          {/* Omul Silhouette */}
          <path d="M3 11c3-2.5 7-3 11-1.5 2-.8 4-1.2 6-.5.5.3.3 1.2 0 1.5-2 .8-4 .2-6-.5-4 1.5-8 1-11 1z" strokeLinecap="round" />
          <path d="M18 10l1-1.5M15 9.5l.5-1.5M4 11.5c1.5.5 2 1.5 2.5 3.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'chinook',
      nameRU: 'Чавыча',
      nameEN: 'Chinook',
      targetIndex: 2, // Projects (Vault Facility)
      label: 'DATA VAULT PROJECTS',
      desc: 'Holographic records of AI expense trackers, real-time voice accent transformers, OCR platforms, and stealth assistants.',
      color: 'var(--neon-teal)',
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '38px', height: '38px' }}>
          {/* Chinook Salmon Silhouette */}
          <path d="M2 13c3-3 7-3.5 11-2 2-1 4-1.5 6-1 1 .5.5 1.5 0 2-2 1-4 .5-6 0-4 1.5-8 .5-11 1z" strokeLinecap="round" />
          <path d="M19 11l2-2M15 10.5l1.5-2M4 13c1 1.5 2 3 3 4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'chum',
      nameRU: 'Кета',
      nameEN: 'Chum',
      targetIndex: 3, // AbyssExperience
      label: 'CHRONO CAREER TIMELINE',
      desc: 'Armored subsea fiber optic cables tracking B-Tech CSE AIML academic milestones, backend internships, and prestigious honors.',
      color: 'var(--neon-purple)',
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '38px', height: '38px' }}>
          {/* Chum Salmon Silhouette */}
          <path d="M2 12c3-2 7-2 11-1 2-.5 4-1 6-.5.8.3.5 1.2 0 1.5-2 .5-4 0-6-.5-4 1-8 .5-11.5.5z" strokeLinecap="round" />
          <path d="M17 10.5L18.5 9M14 10l1-2M4 12c1.2 1.2 2 2.2 2.5 3.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'flounder',
      nameRU: 'Камбала',
      nameEN: 'Flounder',
      targetIndex: 4, // BioluminescentCave
      label: 'A.Q.U.A. CHAT TERMINAL',
      desc: 'Secure command chat and typewriter diagnostics emulator powered by reactive subsea processors.',
      color: 'var(--aqua-glow)',
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '38px', height: '38px' }}>
          {/* Flounder Flatfish Silhouette */}
          <path d="M4 12c2-4.5 7-5.5 12-4 2 1.5 3.5 2.5 4 4.5.2.8-.5 1.5-1.2 1.5-2.5 0-4.5-1-6.8-2C9.5 15.5 6.5 15.5 4 12z" strokeLinecap="round" />
          <path d="M15 8.5L16.5 7M10 8l.5-2M6 10c0 1.5.5 3 1.5 4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'nerka',
      nameRU: 'Нерка',
      nameEN: 'Nerka',
      targetIndex: 4, // BioluminescentCave (Contact Form)
      label: 'FREQUENCY BROADCASTER',
      desc: 'Central secure correspondence payload form encrypted with advanced subsea validation constraints.',
      color: '#F43F5E',
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '38px', height: '38px' }}>
          {/* Nerka Salmon Silhouette */}
          <path d="M2 13.5c3-2.5 7-3 11-1.5 2-.8 4-1.2 6-.5.8.3.5 1.2 0 1.5-2 .5-4 0-6-.5-4 1.5-8 1-11 1z" strokeLinecap="round" />
          <path d="M18 11.5l1.5-1.5M14 11l1-2M4 13.5c1.2 1 2 2.2 2.5 3.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const handleSelect = (idx: number) => {
    audioEngine.playPing();
    onNavigate(idx);
  };

  const handleHover = (species: Species | null) => {
    if (species) {
      audioEngine.playClick();
    }
    setHoveredSpecies(species);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      zIndex: 20,
      margin: '40px 0',
      position: 'relative'
    }}>
      {/* 1. Quote or introductory header matching "ЧИСТАЯ ВОДА - ЗДОРОВАЯ РЫБА" */}
      <div 
        className="glass-panel"
        style={{
          maxWidth: '800px',
          padding: '20px 30px',
          textAlign: 'center',
          backgroundColor: 'rgba(2, 14, 35, 0.45)',
          border: '1px solid rgba(81, 232, 197, 0.25)',
          borderRadius: '10px',
          marginBottom: '35px',
          boxShadow: '0 8px 32px 0 rgba(81, 232, 197, 0.05)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--cyan-glow)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
          <span style={{ 
            fontFamily: 'var(--font-header)', 
            fontSize: '0.7rem', 
            fontWeight: 800, 
            letterSpacing: '1.5px',
            textTransform: 'uppercase'
          }}>
            SYSTEMIC COGNITION // DEEP WATER DOCKING
          </span>
        </div>
        <h3 style={{
          fontSize: '1.35rem',
          fontWeight: 800,
          color: 'var(--soft-white)',
          marginBottom: '6px',
          fontFamily: 'var(--font-header)',
          letterSpacing: '0.5px'
        }}>
          SYSTEM COGNITION - ENGINE PORTAL
        </h3>
        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'var(--font-subtitle)',
          color: 'rgba(255, 255, 255, 0.65)',
          lineHeight: '1.45',
          maxWidth: '650px',
          margin: '0 auto'
        }}>
          Interact with any specialized marine sensory node below to intercept core telemetry profiles, or scroll to trigger global sector scans.
        </p>
      </div>

      {/* 2. Interactive circular fish species cards */}
      <div className="species-selector-grid">
        {speciesList.map((species) => {
          const isTargetActive = activeSection === species.targetIndex;
          return (
            <div
              key={species.id}
              className={`species-circle-card ${isTargetActive ? 'active' : ''}`}
              onMouseEnter={() => handleHover(species)}
              onMouseLeave={() => handleHover(null)}
              onClick={() => handleSelect(species.targetIndex)}
              style={{
                borderColor: hoveredSpecies?.id === species.id ? species.color : '',
                color: hoveredSpecies?.id === species.id ? species.color : ''
              }}
            >
              <div style={{ color: hoveredSpecies?.id === species.id ? species.color : 'var(--soft-white)', transition: 'color 0.3s ease' }}>
                {species.svgIcon}
              </div>
              <span className="species-label">{species.nameEN}</span>
              <span style={{
                fontSize: '0.5rem',
                fontFamily: 'var(--font-subtitle)',
                color: 'rgba(255,255,255,0.4)',
                marginTop: '-2px',
                fontWeight: 600
              }}>
                {species.nameRU}
              </span>
            </div>
          );
        })}
      </div>

      {/* 3. Expanding detail popup below the circles when hovered */}
      <div style={{
        height: '90px',
        marginTop: '20px',
        width: '100%',
        maxWidth: '560px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>
        {hoveredSpecies ? (
          <div 
            className="glass-popup-node scanlines crt-screen"
            style={{
              width: '100%',
              textAlign: 'center',
              border: `1px solid ${hoveredSpecies.color}`,
              boxShadow: `0 8px 30px rgba(0,0,0,0.5), 0 0 15px ${hoveredSpecies.color}15`,
              animation: 'popup-bounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
            }}
          >
            <span style={{ 
              display: 'block', 
              fontSize: '0.6rem', 
              color: hoveredSpecies.color, 
              fontFamily: 'var(--font-header)', 
              fontWeight: 800,
              letterSpacing: '1.5px',
              marginBottom: '4px'
            }}>
              {hoveredSpecies.label}
            </span>
            <span style={{ 
              fontSize: '0.75rem', 
              color: 'var(--soft-white)', 
              lineHeight: '1.35',
              fontFamily: 'var(--font-subtitle)'
            }}>
              {hoveredSpecies.desc}
            </span>
          </div>
        ) : (
          <span style={{
            fontSize: '0.65rem',
            fontFamily: 'var(--font-header)',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            animation: 'jellyfish-bob 3s infinite'
          }}>
            // Hover a species circular card to intercept subsea telemetry
          </span>
        )}
      </div>

      <style>{`
        @keyframes popup-bounce {
          from { transform: scale(0.95) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
