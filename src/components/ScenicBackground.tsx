import React from 'react';
import sunBeams from '../assets/underwater_sun_beams.png';

interface ScenicBackgroundProps {
  scrollPercentage: number;
}

export const ScenicBackground: React.FC<ScenicBackgroundProps> = ({ scrollPercentage }) => {
  // 1. Soft Sunlight Volumetric God-Rays (gently fades in as you scroll down, max 0.4 opacity for perfect subtlety)
  const sunBeamsOpacity = Math.min(0.4, scrollPercentage * 0.5);

  // 2. Soft Ambient Vignette Layer
  const abyssOpacity = scrollPercentage * 0.35;

  return (
    <div 
      className="scenic-bg-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -20,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* BASE GRADIENT BACKGROUND: A highly refined, soft, muted cool-toned "dark-pastel" subsea palette */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, #0c1524 0%, #0a2432 30%, #071526 65%, #020710 100%)',
          zIndex: 1,
        }} 
      />

      {/* LAYER 2: SUBTLE VOLUMETRIC SUNLIGHT GOD-RAYS */}
      <div 
        className="scenic-bg-layer"
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url(${sunBeams})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: sunBeamsOpacity,
          zIndex: 2,
          mixBlendMode: 'screen',
          transform: `scale(${1.02 + scrollPercentage * 0.03}) translateY(${scrollPercentage * -15}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* LAYER 3: SOFT AMBIENT RADIAL DEPTH GLOOM */}
      <div 
        className="scenic-bg-layer"
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at 50% 100%, rgba(1, 6, 13, 0) 0%, rgba(1, 6, 13, 0.9) 80%, #01060d 100%)',
          opacity: abyssOpacity,
          zIndex: 3,
        }}
      />

      {/* BOTTOM SEABED DARKNESS GRADIENT */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '300px',
          background: 'linear-gradient(to top, rgba(1, 6, 13, 0.95) 0%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
