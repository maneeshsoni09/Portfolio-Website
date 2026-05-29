import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ResearchPodsProps {
  position: [number, number, number];
}

export const ResearchPods: React.FC<ResearchPodsProps> = ({ position }) => {
  const p1Ref = useRef<THREE.Group | null>(null);
  const p2Ref = useRef<THREE.Group | null>(null);
  const p3Ref = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Independent hover wave translations for the 3 pods
    if (p1Ref.current) {
      p1Ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.35;
      p1Ref.current.rotation.y = t * 0.2;
    }
    if (p2Ref.current) {
      p2Ref.current.position.y = position[1] + Math.cos(t * 0.7) * 0.35;
      p2Ref.current.rotation.y = -t * 0.15;
    }
    if (p3Ref.current) {
      p3Ref.current.position.y = position[1] + Math.sin(t * 0.9 + 1) * 0.35;
      p3Ref.current.rotation.y = t * 0.25;
    }
  });

  const renderPod = (ref: React.RefObject<THREE.Group | null>, xPos: number, coreColor: string) => {
    return (
      <group ref={ref} position={[xPos, 0, 0]}>
        {/* Outer Cylinder Wireframe Capsule */}
        <mesh>
          <cylinderGeometry args={[1.1, 1.1, 3.2, 8, 2, true]} />
          <meshBasicMaterial 
            color="#51E8C5" 
            wireframe 
            transparent 
            opacity={0.3} 
            side={THREE.DoubleSide} 
          />
        </mesh>

        {/* Floating Glowing Sphere Core inside the capsule */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.55, 12, 12]} />
          <meshStandardMaterial
            color={coreColor}
            emissive={coreColor}
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Small orbital halo ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.9, 0.04, 8, 32]} />
          <meshBasicMaterial color="#51E8C5" transparent opacity={0.5} />
        </mesh>
      </group>
    );
  };

  return (
    <group position={[position[0], 0, position[2]]}>
      {/* Dynamic spot-light illuminating the research pod grids */}
      <pointLight position={[0, 5, 3]} intensity={2.0} color="#B2F5EA" distance={20} />

      {/* Pod 1 (Left, x = -4.5) */}
      {renderPod(p1Ref, -4.5, '#51E8C5')}

      {/* Pod 2 (Center, x = 0) */}
      {renderPod(p2Ref, 0, '#00d3c4')}

      {/* Pod 3 (Right, x = 4.5) */}
      {renderPod(p3Ref, 4.5, '#c084fc')}
    </group>
  );
};
