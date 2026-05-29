import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { UnderwaterScene } from './UnderwaterScene';

interface WebGLCanvasProps {
  scrollPercentage: number;
}

export const WebGLCanvas: React.FC<WebGLCanvasProps> = ({ scrollPercentage }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0, /* Background layer behind glass HUD and text content */
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 5, 15], fov: 60, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <UnderwaterScene scrollPercentage={scrollPercentage} />
        </Suspense>
      </Canvas>
    </div>
  );
};
