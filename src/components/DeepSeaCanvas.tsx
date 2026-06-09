import React, { useEffect, useRef } from 'react';

interface DeepSeaCanvasProps {
  scrollPercentage: number;
}

export const DeepSeaCanvas: React.FC<DeepSeaCanvasProps> = ({ scrollPercentage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const scrollRef = useRef(scrollPercentage);

  useEffect(() => {
    scrollRef.current = scrollPercentage;
  }, [scrollPercentage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const maxParticles = isMobile ? 25 : 60;

    class GeometricParticle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;
      color: string = '';
      shape: 'circle' | 'triangle' | 'square' | 'dot' = 'dot';
      rotation: number = 0;
      rotationSpeed: number = 0;

      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.size = Math.random() * 2 + 1; // tiny size
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.opacity = Math.random() * 0.3 + 0.1;
        this.rotation = 0;
        this.rotationSpeed = 0;
        this.shape = 'dot';

        // Red or white/gray stardust
        const isRed = Math.random() > 0.7;
        const colorVal = isRed ? '255, 23, 68' : '220, 220, 220'; 
        this.color = `rgba(${colorVal}, ${this.opacity})`;
      }

      update(mouseX: number, mouseY: number) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          const angle = Math.atan2(dy, dx);
          this.speedX += Math.cos(angle) * force * 0.3;
          this.speedY += Math.sin(angle) * force * 0.3;
        }

        // Dampen back to base speeds
        this.speedX *= 0.98;
        this.speedY = this.speedY * 0.95 + (-0.3) * 0.05;

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < -30 || this.x < -30 || this.x > width + 30) {
          this.reset();
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    // Red light streaks animation
    class RedLightStreak {
      y: number = 0;
      speed: number = 0;
      opacity: number = 0;
      height: number = 0;

      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.y = -100;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.12 + 0.03;
        this.height = Math.random() * 80 + 30;
      }

      update() {
        this.y += this.speed;
        if (this.y > height + 100) {
          this.reset();
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        const gradient = c.createLinearGradient(0, this.y, 0, this.y + this.height);
        gradient.addColorStop(0, 'rgba(255, 23, 68, 0)');
        gradient.addColorStop(0.5, `rgba(255, 23, 68, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 23, 68, 0)');
        c.fillStyle = gradient;
        c.fillRect(0, this.y, width, this.height);
        c.restore();
      }
    }

    const particles: GeometricParticle[] = Array.from({ length: maxParticles }, () => new GeometricParticle());
    const lightStreaks: RedLightStreak[] = Array.from({ length: 3 }, () => new RedLightStreak());

    const drawGrid = (c: CanvasRenderingContext2D, scroll: number) => {
      c.save();
      // Very faint red grid lines
      c.strokeStyle = 'rgba(255, 23, 68, 0.025)';
      c.lineWidth = 1;

      // Draw perspective grid lines radiating from top/center
      const horizon = height * 0.15;
      const step = width / 18;
      
      for (let i = -10; i <= 28; i++) {
        c.beginPath();
        c.moveTo(width / 2, horizon);
        c.lineTo(i * step, height);
        c.stroke();
      }

      // Horizontal lines that warp with depth (moving as scroll changes)
      const numLines = 15;
      const scrollOffset = (scroll * 240) % 50;

      for (let i = 0; i < numLines; i++) {
        // Exponential progression for 3D depth effect
        const ratio = Math.pow(i / numLines, 2);
        const y = horizon + ratio * (height - horizon) + scrollOffset * ratio;
        if (y > height) continue;

        c.beginPath();
        c.moveTo(0, y);
        c.lineTo(width, y);
        c.stroke();
      }
      c.restore();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const tick = () => {
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const currentScroll = scrollRef.current;
      drawGrid(ctx, currentScroll);

      // Update and draw light streaks
      lightStreaks.forEach((streak) => {
        streak.update();
        streak.draw(ctx);
      });

      // Update and draw particles
      particles.forEach((p) => {
        p.update(mouse.x, mouse.y);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    tick();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
      }}
    />
  );
};
