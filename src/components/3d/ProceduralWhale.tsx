import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ProceduralWhaleProps {
  position: [number, number, number];
}

export const ProceduralWhale: React.FC<ProceduralWhaleProps> = ({ position }) => {
  const whaleRef = useRef<THREE.Group | null>(null);
  const tailRef = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (whaleRef.current) {
      const t = state.clock.getElapsedTime();

      // Cinematic swimming path: wide horizontal sways (swimming back and forth)
      whaleRef.current.position.x = Math.sin(t * 0.25) * 8.5;
      whaleRef.current.position.y = position[1] + Math.cos(t * 0.3) * 0.6;
      whaleRef.current.position.z = position[2] + Math.sin(t * 0.15) * 2;

      // Adjust rotation to face exactly in the direction of swimming motion
      whaleRef.current.rotation.y = Math.cos(t * 0.25) * 0.5 - Math.PI / 2;
      whaleRef.current.rotation.z = Math.sin(t * 0.25) * 0.08; // subtle roll

      // Dynamic tail wagging speed linked to swim sway
      if (tailRef.current) {
        tailRef.current.rotation.y = Math.sin(t * 1.5) * 0.25;
      }
    }
  });

  return (
    <group ref={whaleRef} position={position}>
      {/* 3D Cyber-Whale Body Cylinder (Rotated horizontally) */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 1.2, 5.8, 8, 4]} />
        <meshStandardMaterial
          color="#06122d"
          emissive="#c084fc"
          emissiveIntensity={0.25}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Whale Head (Sphere cap) */}
      <mesh position={[2.9, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <sphereGeometry args={[1.2, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#020e23"
          emissive="#51E8C5"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Segmented Tail Joint (Left/Right wagging) */}
      <group ref={tailRef} position={[-2.9, 0, 0]}>
        {/* Tail Fin */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.9, 2.2, 4]} />
          <meshStandardMaterial
            color="#06122d"
            emissive="#51E8C5"
            emissiveIntensity={0.4}
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </group>
  );
};
