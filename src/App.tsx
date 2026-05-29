import { useState, useEffect } from 'react';
import { ScenicBackground } from './components/ScenicBackground';
import { DeepSeaCanvas } from './components/DeepSeaCanvas';
import { HeaderNavbar } from './components/HeaderNavbar';
import { SurfaceIntro } from './components/sections/SurfaceIntro';
import { SpecimenPortal } from './components/sections/SpecimenPortal';
import { WhaleCursor } from './components/WhaleCursor';

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Smooth scrollytelling window scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercentage(window.scrollY / scrollHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scroll when modal is active
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  // Navigate smoothly to target DOM coordinate or open corresponding modal
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'about' || sectionId === 'portal') {
      setActiveModal(null);
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Toggle or set target modal
      setActiveModal(sectionId);
    }
  };

  return (
    <>
      {/* Adorable spring-physics Whale Follow Cursor */}
      <WhaleCursor introComplete={true} />

      {/* 1. Volumetric God-Rays & Parallax Ocean Gradients */}
      <ScenicBackground scrollPercentage={scrollPercentage} />

      {/* 2. Custom 2D Canvas for rise-up Bubbles and Mouse-repelled Plankton */}
      <DeepSeaCanvas scrollPercentage={scrollPercentage} />

      {/* 3. Immersive Floating Glass Navbar (Pill Design) */}
      <HeaderNavbar 
        scrollPercentage={scrollPercentage} 
        onNavigate={handleNavigate} 
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />

      {/* 4. Unified Parallax Document Experience */}
      <main className="relative z-10 w-full no-scrollbar overflow-x-hidden">
        
        {/* ZONE 01: SURFACE OCEAN [0m] */}
        <section id="about" className="relative w-full min-h-screen flex items-center justify-center">
          <SurfaceIntro 
            onDive={() => handleNavigate('portal')} 
            onNavigate={handleNavigate}
          />
        </section>

        {/* ZONE 02: SUBSEA SPECIMEN PORTAL [200m] */}
        <section id="portal" className="relative w-full min-h-screen py-16 flex items-center justify-center">
          <SpecimenPortal 
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        </section>

      </main>
    </>
  );
}

export default App;
