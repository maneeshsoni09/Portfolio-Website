import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { SurfaceWaves } from './SurfaceWaves';
import { MarineSnowParticles } from './Particles';
import { NeuralReef } from './NeuralReef';
import { ResearchPods } from './ResearchPods';
import { ProceduralWhale } from './ProceduralWhale';
import { SubmarineTerminal } from './SubmarineTerminal';

interface UnderwaterSceneProps {
  scrollPercentage: number;
}

export const UnderwaterScene: React.FC<UnderwaterSceneProps> = ({ scrollPercentage }) => {
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const { camera } = useThree();

  useFrame((state) => {
    // 1. LERP WebGL camera position Y to create cinematic scroll-snapping dive
    const startY = 6;
    const endY = -82;
    const targetY = startY + (endY - startY) * scrollPercentage;
    camera.position.y += (targetY - camera.position.y) * 0.06;

    // Subtle breathing camera drift for natural underwater floating feeling
    const time = state.clock.getElapsedTime();
    camera.position.x = Math.sin(time * 0.5) * 0.25;
    camera.position.z = 12 + Math.cos(time * 0.3) * 0.4;

    // 2. Dynamic lighting blending based on depth
    if (ambientLightRef.current) {
      if (scrollPercentage < 0.25) {
        // Shallow / Coral zone (turquoise/aqua ambience)
        ambientLightRef.current.color.lerp(new THREE.Color('#3ad1b5'), 0.05);
        ambientLightRef.current.intensity = THREE.MathUtils.lerp(ambientLightRef.current.intensity, 1.4, 0.05);
      } else if (scrollPercentage < 0.6) {
        // Intermediate zone (deep ocean blue)
        ambientLightRef.current.color.lerp(new THREE.Color('#031d3f'), 0.05);
        ambientLightRef.current.intensity = THREE.MathUtils.lerp(ambientLightRef.current.intensity, 0.8, 0.05);
      } else {
        // Midnight abyss / Cavern (inky violet-navy)
        ambientLightRef.current.color.lerp(new THREE.Color('#010714'), 0.05);
        ambientLightRef.current.intensity = THREE.MathUtils.lerp(ambientLightRef.current.intensity, 0.4, 0.05);
      }
    }

    // Directional Sunlight rays fade as depth increases
    if (sunLightRef.current) {
      const sunIntensity = Math.max(0, 2.5 - scrollPercentage * 5);
      sunLightRef.current.intensity = THREE.MathUtils.lerp(sunLightRef.current.intensity, sunIntensity, 0.05);
    }
  });

  return (
    <>
      {/* 3D Cinematic Fog that gets darker as you descend */}
      <color attach="background" args={['#020b1c']} />
      <fogExp2 attach="fog" args={['#010612', 0.015 + scrollPercentage * 0.025]} />

      {/* Global Ambience Lights */}
      <ambientLight ref={ambientLightRef} intensity={1.4} color="#3ad1b5" />
      <directionalLight
        ref={sunLightRef}
        position={[5, 12, 5]}
        color="#a9f6e4"
        intensity={2.5}
        castShadow
      />

      {/* ZONE 1 (Surface, y = 8): 3D Wave ocean mesh */}
      <SurfaceWaves position={[0, 8, 0]} />

      {/* REACTIVE PARTICLES (Full Ocean, y = -100 to y = 20): Plankton and bubbles */}
      <MarineSnowParticles count={250} scrollPercentage={scrollPercentage} />

      {/* ZONE 2 (Skills, y = -15): Glowing 3D neural crystal reef */}
      <NeuralReef position={[0, -14, 0]} />

      {/* ZONE 3 (Projects, y = -36): Floating 3D holographic vaults */}
      <ResearchPods position={[0, -36, 0]} />

      {/* ZONE 4 (Abyss, y = -58): Majestic procedural swimming whale */}
      <ProceduralWhale position={[0, -58, -5]} />

      {/* ZONE 5 (Cavern, y = -80): Massive submarine command terminal hatch */}
      <SubmarineTerminal position={[0, -80, 0]} />
    </>
  );
};
