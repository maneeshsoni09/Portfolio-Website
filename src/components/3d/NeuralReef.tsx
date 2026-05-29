import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuralReefProps {
  position: [number, number, number];
}

export const NeuralReef: React.FC<NeuralReefProps> = ({ position }) => {
  const frontRef = useRef<THREE.Mesh | null>(null);
  const backRef = useRef<THREE.Mesh | null>(null);
  const toolsRef = useRef<THREE.Mesh | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // 1. Organic swaying motion for the entire reef group
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(t * 0.4) * 0.4;
      groupRef.current.position.y = position[1] + Math.cos(t * 0.5) * 0.25;
    }

    // 2. Animate Frontend Crystal (Icosahedron)
    if (frontRef.current) {
      frontRef.current.rotation.y = t * 0.55;
      frontRef.current.rotation.x = t * 0.3;
      
      const mat = frontRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.6 + Math.sin(t * 2.5) * 0.4;
    }

    // 3. Animate Backend Crystal (Dodecahedron)
    if (backRef.current) {
      backRef.current.rotation.y = -t * 0.45;
      backRef.current.rotation.z = t * 0.25;
      
      const mat = backRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.6 + Math.cos(t * 2.0) * 0.4;
    }

    // 4. Animate Tools Crystal (TorusKnot)
    if (toolsRef.current) {
      toolsRef.current.rotation.x = t * 0.35;
      toolsRef.current.rotation.y = t * 0.5;
      
      const mat = toolsRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.6 + Math.sin(t * 3.0) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* 3D Directional Point Light for bioluminescent lighting glow */}
      <pointLight position={[0, 2, 2]} intensity={2.5} color="#51E8C5" distance={15} />

      {/* FRONTEND TECH CRYSTAL (Left, y = 0, x = -4) */}
      <mesh ref={frontRef} position={[-4, 0, 0]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#15ad91"
          emissive="#51E8C5"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* BACKEND TECH CRYSTAL (Center, y = 0, x = 0) */}
      <mesh ref={backRef} position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#6d28d9"
          emissive="#c084fc"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* TOOLS & PIPELINES TECH CRYSTAL (Right, y = 0, x = 4) */}
      <mesh ref={toolsRef} position={[4, 0, 0]}>
        <torusKnotGeometry args={[0.8, 0.26, 64, 8]} />
        <meshStandardMaterial
          color="#0d9488"
          emissive="#00d3c4"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};
