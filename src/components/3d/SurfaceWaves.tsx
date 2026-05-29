import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SurfaceWavesProps {
  position: [number, number, number];
}

export const SurfaceWaves: React.FC<SurfaceWavesProps> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const geomRef = useRef<THREE.PlaneGeometry | null>(null);

  useFrame((state) => {
    if (geomRef.current) {
      const time = state.clock.getElapsedTime();
      const posAttr = geomRef.current.attributes.position;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        
        // Dynamic wave formula with varying frequencies and speeds
        const z = Math.sin(x * 0.15 + time * 1.2) * 0.35 + 
                  Math.cos(y * 0.12 + time * 0.8) * 0.25 + 
                  Math.sin((x + y) * 0.08 + time * 1.5) * 0.15;
        
        posAttr.setZ(i, z);
      }
      
      posAttr.needsUpdate = true;
      geomRef.current.computeVertexNormals();
    }

    if (meshRef.current) {
      // Gentle surface drifting rotation
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.03;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry ref={geomRef} args={[100, 100, 48, 48]} />
      <meshStandardMaterial
        color="#32d7b8"
        roughness={0.1}
        metalness={0.1}
        wireframe={false}
        transparent
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};
