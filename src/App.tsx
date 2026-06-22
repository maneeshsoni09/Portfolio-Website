import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DeepSeaCanvas } from './components/DeepSeaCanvas';
import { HeaderNavbar } from './components/HeaderNavbar';
import { Hero } from './components/sections/Hero';
import { PlayerProfile } from './components/sections/PlayerProfile';
import { SkillArena } from './components/sections/SkillArena';
import { ProjectArena } from './components/sections/ProjectArena';
import { Achievements } from './components/sections/Achievements';
import { ExperienceArena } from './components/sections/ExperienceArena';
import { GalleryModal } from './components/GalleryModal';

import { FinalChallenge } from './components/sections/FinalChallenge';
import { LiveTerminal } from './components/LiveTerminal';
import { WhaleCursor } from './components/WhaleCursor';
import { WelcomeModal } from './components/WelcomeModal';

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeLevel, setActiveLevel] = useState<number>(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // Initialize welcome modal check on mount
  useEffect(() => {
    const dismissed = sessionStorage.getItem('portfolio_welcome_dismissed');
    if (dismissed !== 'true') {
      setShowWelcome(true);
    }
  }, []);

  // References to level sections for smooth scrolling and monitoring
  const heroRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const achievementsRef = useRef<HTMLDivElement | null>(null);
  const finalRef = useRef<HTMLDivElement | null>(null);

  // Update scroll progress and active level based on section intersection
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercentage(window.scrollY / scrollHeight);
      }

      // Check offsets to determine active level
      const scrollY = window.scrollY + window.innerHeight / 3;

      if (finalRef.current && scrollY >= finalRef.current.offsetTop) {
        setActiveLevel(6);
      } else if (achievementsRef.current && scrollY >= achievementsRef.current.offsetTop) {
        setActiveLevel(5);
      } else if (experienceRef.current && scrollY >= experienceRef.current.offsetTop) {
        setActiveLevel(4);
      } else if (projectsRef.current && scrollY >= projectsRef.current.offsetTop) {
        setActiveLevel(3);
      } else if (skillsRef.current && scrollY >= skillsRef.current.offsetTop) {
        setActiveLevel(2);
      } else if (profileRef.current && scrollY >= profileRef.current.offsetTop) {
        setActiveLevel(1);
      } else {
        setActiveLevel(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    let target: HTMLDivElement | null = null;
    switch (sectionId) {
      case 'hero':
        target = heroRef.current;
        break;
      case 'profile':
        target = profileRef.current;
        break;
      case 'skills':
        target = skillsRef.current;
        break;
      case 'projects':
        target = projectsRef.current;
        break;
      case 'experience':
        target = experienceRef.current;
        break;
      case 'achievements':
        target = achievementsRef.current;
        break;
      case 'final':
        target = finalRef.current;
        break;
    }

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };





  return (
    <>
      {/* Custom Neon Target Reticle Cursor follow */}
      <WhaleCursor />

      {/* 1. Cybernetic Particle and Grid Canvas background */}
      <DeepSeaCanvas scrollPercentage={scrollPercentage} />

      {/* 2. HUD Top Control Navbar */}
      <HeaderNavbar
        scrollPercentage={scrollPercentage}
        activeLevel={activeLevel}
        onNavigate={handleNavigate}
        onGalleryOpen={() => setIsGalleryOpen(true)}
      />

      {/* 4. Sequential Scroll Progression Level Sections */}
      <main className="relative z-10 w-full no-scrollbar overflow-x-hidden">

        {/* LEVEL 0: DOCKING ENTRY LANDING */}
        <div ref={heroRef} id="hero">
          <Hero
            onNavigate={handleNavigate}
          />
        </div>

        {/* LEVEL 1: PROFILE DOSSIER */}
        <div ref={profileRef} id="profile" className="game-section-container">
          <PlayerProfile />
        </div>

        {/* LEVEL 2: SKILL ARENA TECH DECK */}
        <div ref={skillsRef} id="skills" className="game-section-container">
          <SkillArena />
        </div>

        {/* LEVEL 3: PROJECT CONTENDERS */}
        <div ref={projectsRef} id="projects" className="game-section-container">
          <ProjectArena />
        </div>

        {/* LEVEL 4: EXPERIENCE ARENA */}
        <div ref={experienceRef} id="experience" className="game-section-container">
          <ExperienceArena />
        </div>

        {/* LEVEL 5: ACHIEVEMENTS LEADERBOARD */}
        <div ref={achievementsRef} id="achievements" className="game-section-container">
          <Achievements />
        </div>

        {/* FINAL LEVEL: ELISTMENT CHALLENGE */}
        <div ref={finalRef} id="final" className="game-section-container">
          <FinalChallenge />
        </div>

      </main>

      {/* 5. Floating Operator Console Terminal */}
      <LiveTerminal />

      {/* Credentials Gallery Modal */}
      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      {/* Welcome Mascot Modal */}
      <AnimatePresence>
        {showWelcome && (
          <WelcomeModal onClose={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
