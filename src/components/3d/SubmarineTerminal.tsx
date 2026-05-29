import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SubmarineTerminalProps {
  position: [number, number, number];
}

export const SubmarineTerminal: React.FC<SubmarineTerminalProps> = ({ position }) => {
  const hatchRef = useRef<THREE.Mesh | null>(null);
  const ring1Ref = useRef<THREE.Mesh | null>(null);
  const ring2Ref = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Rotate mechanical locking rings in opposite directions
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.2;
    }

    // Emissive breathing pulse for the command hatch
    if (hatchRef.current) {
      const mat = hatchRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(t * 1.8) * 0.25;
    }
  });

  return (
    <group position={position}>
      {/* 3D Main Submarine Hatch Base Disc */}
      <mesh ref={hatchRef} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[3.2, 3.4, 0.6, 24]} />
        <meshStandardMaterial
          color="#041026"
          emissive="#51E8C5"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Mechanical Ring Gear 1 (Outer, raised) */}
      <mesh ref={ring1Ref} position={[0, 0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.12, 8, 48]} />
        <meshStandardMaterial
          color="#0a2240"
          roughness={0.1}
          metalness={0.95}
          wireframe
        />
      </mesh>

      {/* Mechanical Ring Gear 2 (Inner, raised) */}
      <mesh ref={ring2Ref} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.08, 6, 36]} />
        <meshStandardMaterial
          color="#0d3f68"
          roughness={0.1}
          metalness={0.95}
          wireframe
        />
      </mesh>

      {/* HIGH-INTENSITY CONICAL SEARCHLIGHT BEAM */}
      <mesh position={[0, 5, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[2.8, 10, 24, 1, true]} />
        <meshBasicMaterial
          color="#51E8C5"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Core Terminal Light Spot */}
      <pointLight position={[0, 1, 0]} intensity={3.5} color="#51E8C5" distance={20} />
    </group>
  );
};
