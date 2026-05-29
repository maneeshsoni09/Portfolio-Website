import React, { useState } from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

interface DeploymentNode {
  id: string;
  name: string;
  location: string;
  coords: string;
  x: number; // percentage width
  y: number; // percentage height
  depth: string;
  purpose: string;
  status: string;
}

export const DeploymentMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<DeploymentNode | null>(null);

  const deploymentNodes: DeploymentNode[] = [
    {
      id: 'NODE_ALPHA',
      name: 'AIML Mainframe (MUJ Station)',
      location: 'Manipal University Jaipur, India',
      coords: '26.8425° N, 75.5649° E',
      x: 67,
      y: 42,
      depth: '0M (SURFACE)',
      purpose: 'B-Tech CSE (AIML) academic station and smart neural modeling lab.',
      status: 'STABLE RUNNING'
    },
    {
      id: 'NODE_BETA',
      name: 'Resume Parser (Nexthon Node)',
      location: 'Nexthon Global Services, Jaipur',
      coords: '26.9124° N, 75.7873° E',
      x: 69,
      y: 44,
      depth: '15M (LOCAL ROUTER)',
      purpose: 'FastAPI REST API database deployments managing secure structured resume data.',
      status: 'SECURE BROADCAST'
    },
    {
      id: 'NODE_GAMMA',
      name: 'AI Accent Sensory Node',
      location: 'US West Cloud Region, USA',
      coords: '45.7285° N, 121.5215° W',
      x: 18,
      y: 32,
      depth: '60M (EDGE)',
      purpose: 'Voice transformation models and high-throughput real-time WebSocket buffers.',
      status: 'ONLINE ACTIVE'
    },
    {
      id: 'NODE_DELTA',
      name: 'Stealth Assistant Local Station',
      location: 'Bengaluru Dev Station, India',
      coords: '12.9716° N, 77.5946° E',
      x: 68,
      y: 48,
      depth: '2M (CLIENT)',
      purpose: 'Whisper-based local speech capture and direct Claude-engineered response pipelines.',
      status: 'STABLE LINKED'
    }
  ];

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '20px 0 10px 0',
        position: 'relative'
      }}
    >
      {/* Sonar Map SVG outline chart container */}
      <div 
        className="sonar-map-container" 
        style={{ 
          position: 'relative', 
          width: '100%',
          maxWidth: '900px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          background: 'rgba(2, 12, 27, 0.25)',
          borderRadius: '16px',
          padding: '16px',
        }}
      >
        <svg 
          viewBox="0 0 1000 500" 
          fill="none" 
          stroke="rgba(63, 226, 201, 0.12)" 
          strokeWidth="1.2"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          {/* Coordinates grid lines */}
          <g stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.8">
            <line x1="0" y1="100" x2="1000" y2="100" />
            <line x1="0" y1="200" x2="1000" y2="200" />
            <line x1="0" y1="300" x2="1000" y2="300" />
            <line x1="0" y1="400" x2="1000" y2="400" />
            <line x1="166" y1="0" x2="166" y2="500" />
            <line x1="333" y1="0" x2="333" y2="500" />
            <line x1="500" y1="0" x2="500" y2="500" />
            <line x1="666" y1="0" x2="666" y2="500" />
            <line x1="833" y1="0" x2="833" y2="500" />
          </g>

          {/* Clean Outline vectors representing continents */}
          {/* North America */}
          <path d="M120 100 L220 110 L280 180 L290 230 L220 250 L180 200 L110 160 Z" fill="rgba(63, 226, 201, 0.01)" />
          {/* South America */}
          <path d="M230 260 L280 270 L340 330 L320 440 L280 460 L230 330 Z" fill="rgba(63, 226, 201, 0.01)" />
          {/* Eurasia */}
          <path d="M420 80 L620 60 L890 90 L950 180 L880 250 L720 280 L550 250 L480 180 Z" fill="rgba(63, 226, 201, 0.01)" />
          {/* Africa */}
          <path d="M440 200 L540 220 L580 320 L530 400 L470 320 Z" fill="rgba(63, 226, 201, 0.01)" />
          {/* Australia */}
          <path d="M780 340 L890 350 L910 400 L840 430 Z" fill="rgba(63, 226, 201, 0.01)" />
          {/* Greenland */}
          <path d="M320 40 L380 50 L360 80 Z" fill="rgba(63, 226, 201, 0.01)" />
        </svg>

        {/* Sonar blinking coordinate nodes */}
        {deploymentNodes.map((node) => {
          const isActive = activeNode?.id === node.id;
          return (
            <button
              key={node.id}
              className="map-coordinate-dot"
              onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
              style={{
                position: 'absolute',
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: isActive ? 'var(--color-submarine)' : 'var(--color-cyan)',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10,
              }}
              title={node.name}
            >
              <div 
                className="sonar-map-dot-pulse" 
                style={{ 
                  position: 'absolute',
                  top: '-7px',
                  left: '-7px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: `1px solid ${isActive ? 'var(--color-submarine)' : 'var(--color-cyan)'}`,
                  animation: 'sonar-pulse 2s infinite ease-out',
                }} 
              />
            </button>
          );
        })}

        {/* Discovery Telemetry preview box overlay */}
        {activeNode && (
          <div 
            className="glass-discovery-card"
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              width: '290px',
              zIndex: 30,
              backgroundColor: 'rgba(2, 12, 27, 0.92)',
              border: '1px solid rgba(63, 226, 201, 0.25)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
              padding: '16px',
              animation: 'map-pop-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Compass size={12} style={{ color: 'var(--color-cyan)' }} />
                <span style={{ fontSize: '0.6rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-subtitle)', fontWeight: 800 }}>
                  ACTIVE SYSTEM NODE // {activeNode.id}
                </span>
              </div>
              <button 
                onClick={() => setActiveNode(null)}
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '0.75rem' }}
              >
                ✕
              </button>
            </div>

            <h4 style={{ fontSize: '0.88rem', color: 'var(--color-soft-white)', fontWeight: 800, marginBottom: '2px' }}>
              {activeNode.name}
            </h4>
            <span style={{ fontSize: '0.62rem', color: 'var(--color-submarine)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-subtitle)', fontWeight: 700 }}>
              COORDS: {activeNode.coords} // DEPTH {activeNode.depth}
            </span>
            <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4', marginBottom: '10px' }}>
              {activeNode.purpose}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px', fontSize: '0.58rem' }}>
              <ShieldCheck size={10} style={{ color: '#10B981' }} />
              <span style={{ color: '#10B981', fontWeight: 700, fontFamily: 'var(--font-subtitle)' }}>
                {activeNode.status}
              </span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes map-pop-up {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
