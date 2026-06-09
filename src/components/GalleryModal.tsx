import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  const items = [
    { title: 'Student Excellence Certificate', src: '/excellence_cert.jpg', type: 'Certificate' },
    { title: 'Nexithon Internship Handover', src: '/nexithon_photo.jpg', type: 'Experience' },
    { title: 'AI Model Quest 2nd Place Certificate', src: '/ai_model_quest_cert.jpg', type: 'Certificate' },
    { title: 'Piggyyy Finance Interface Preview', src: '/piggyy_preview.png', type: 'Project Interface' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '900px',
              backgroundColor: 'var(--surface-dark)',
              border: '1.5px solid var(--accent-red)',
              borderRadius: '10px',
              padding: '28px',
              boxShadow: '0 10px 40px rgba(255, 23, 68, 0.15)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            className="no-scrollbar"
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid rgba(255, 23, 68, 0.2)', paddingBottom: '14px', marginBottom: '24px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-white)', letterSpacing: '2px' }}>
                CREDENTIALS GALLERY
              </h3>
              <button 
                onClick={onClose}
                style={{ background: 'none', border: 'none', color: 'var(--accent-red)', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px' }}
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {items.map((item, idx) => (
                <div 
                  key={idx}
                  className="cyber-card p-4 flex flex-col gap-3 group"
                >
                  <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#050505', transition: 'transform 0.4s' }}
                      className="group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.55rem', fontFamily: 'var(--font-accent)', color: 'var(--accent-red)', letterSpacing: '1.5px', fontWeight: 800 }}>
                      {item.type.toUpperCase()}
                    </span>
                    <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-heading)', color: 'var(--text-white)', fontWeight: 800, marginTop: '2px', letterSpacing: '0.5px' }}>
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
