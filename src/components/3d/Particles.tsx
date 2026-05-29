import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MarineSnowParticlesProps {
  count: number;
  scrollPercentage: number;
}

export const MarineSnowParticles: React.FC<MarineSnowParticlesProps> = ({ count }) => {
  const pointsRef = useRef<THREE.Points | null>(null);

  // Generate stable particle coordinates distributed throughout the depth column (y = -95 to y = 15)
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Horizontal dispersion (X, Z)
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;

      // Vertical depth dispersion (Y)
      pos[i * 3 + 1] = Math.random() * 110 - 95;

      // Drift speed
      spd[i] = Math.random() * 0.05 + 0.02;
    }

    return [pos, spd];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const geom = pointsRef.current.geometry;
      const posAttr = geom.attributes.position;
      const count = posAttr.count;

      // Capture mouse coordinates (-1 to 1) for physical particle sway
      const mouseX = state.mouse.x * 2.5;

      for (let i = 0; i < count; i++) {
        let y = posAttr.getY(i);
        let x = posAttr.getX(i);

        // Drift particles upwards
        y += speeds[i];

        // Apply cursor reaction sway
        x += (mouseX - x * 0.02) * 0.01;

        // If particle rises past surface, recycle it to the ocean floor
        if (y > 10) {
          y = -90;
          x = (Math.random() - 0.5) * 45;
        }

        posAttr.setY(i, y);
        posAttr.setX(i, x);
      }

      posAttr.needsUpdate = true;
      
      // Gentle global rotation
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#a9f6e4"
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
