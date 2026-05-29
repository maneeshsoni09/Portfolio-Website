import React, { useEffect, useRef } from 'react';

interface DeepSeaCanvasProps {
  scrollPercentage: number; // 0 (surface) to 1 (cave)
}

export const DeepSeaCanvas: React.FC<DeepSeaCanvasProps> = ({ scrollPercentage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const scrollRef = useRef(scrollPercentage);

  // Sync scroll percentage in ref to prevent tearing down the particle loops on every scroll pixel
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

    // Dynamic scale limits based on screen size for premium performance
    const isMobile = width < 768;
    const maxBubbles = isMobile ? 15 : 45;
    const maxPlankton = isMobile ? 35 : 90;

    // --- Particle Blueprint Classes ---

    class Bubble {
      x: number = 0;
      y: number = 0;
      radius: number = 0;
      speedY: number = 0;
      wobble: number = 0;
      wobbleSpeed: number = 0;
      wobbleRange: number = 0;
      opacity: number = 0;

      constructor(initBottom = false) {
        this.reset(initBottom);
      }

      reset(initBottom = false) {
        this.radius = Math.random() * 5 + 2;
        this.x = Math.random() * width;
        this.y = initBottom ? height + Math.random() * 100 : Math.random() * height;
        this.speedY = -(Math.random() * 0.8 + 0.4);
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.03 + 0.01;
        this.wobbleRange = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.4 + 0.15;
      }

      update() {
        this.y += this.speedY;
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 0.2;

        if (this.y < -30) {
          this.reset(true);
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.strokeStyle = `rgba(0, 229, 255, ${this.opacity})`;
        c.lineWidth = 1;
        c.beginPath();
        c.arc(this.x + Math.sin(this.wobble) * this.wobbleRange, this.y, this.radius, 0, Math.PI * 2);
        c.stroke();

        // Highlight glint inside bubble
        c.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
        c.beginPath();
        c.arc(
          this.x + Math.sin(this.wobble) * this.wobbleRange - this.radius * 0.3,
          this.y - this.radius * 0.3,
          this.radius * 0.15,
          0,
          Math.PI * 2
        );
        c.fill();
        c.restore();
      }
    }

    class Plankton {
      x: number = 0;
      y: number = 0;
      radius: number = 0;
      baseSpeedX: number = 0;
      baseSpeedY: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      angle: number = 0;
      angleSpeed: number = 0;
      glowIntensity: number = 0;
      opacity: number = 0;
      color: string = '';

      constructor() {
        this.reset();
        this.y = Math.random() * height; // Distribute evenly at start
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.radius = Math.random() * 2 + 0.6;
        this.baseSpeedX = Math.random() * 0.4 - 0.2;
        this.baseSpeedY = -(Math.random() * 0.3 + 0.1);
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 + 0.005;
        this.glowIntensity = Math.random() * 8 + 3;
        this.opacity = Math.random() * 0.5 + 0.2;
        
        // Dynamic bioluminescent colors depending on scroll depth
        const depthVal = scrollRef.current;
        if (depthVal < 0.3) {
          // Ocean Cyan
          this.color = `rgba(0, 229, 255, ${this.opacity})`;
        } else if (depthVal < 0.7) {
          // Aqua Glow
          this.color = `rgba(103, 232, 249, ${this.opacity})`;
        } else {
          // Bioluminescent Purple / Pink
          this.color = `rgba(192, 132, 252, ${this.opacity})`;
        }
      }

      update(mouseX: number, mouseY: number) {
        this.angle += this.angleSpeed;
        
        // Repel from mouse coordinates to create fluid interaction
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 120) {
          const force = (120 - dist) / 120;
          const forceAngle = Math.atan2(dy, dx);
          
          this.speedX += Math.cos(forceAngle) * force * 0.5;
          this.speedY += Math.sin(forceAngle) * force * 0.5;
        }

        // Apply friction to mouse-affected vectors
        this.speedX += (this.baseSpeedX - this.speedX) * 0.05;
        this.speedY += (this.baseSpeedY - this.speedY) * 0.05;

        this.x += this.speedX + Math.sin(this.angle) * 0.15;
        this.y += this.speedY;

        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.shadowBlur = this.glowIntensity;
        c.shadowColor = this.color;
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    // --- Instantiate Arrays ---
    const bubbles: Bubble[] = Array.from({ length: maxBubbles }, () => new Bubble(false));
    const planktonList: Plankton[] = Array.from({ length: maxPlankton }, () => new Plankton());

    // --- Dynamic Light God-Rays (Top Surface Only) ---
    let rayAngle = 0.35;
    const drawGodRays = (c: CanvasRenderingContext2D, alpha: number) => {
      if (alpha <= 0.01) return;
      c.save();
      c.globalCompositeOperation = 'screen';
      
      const numRays = 4;
      const t = Date.now() * 0.0006;
      rayAngle = 0.3 + Math.sin(t * 0.5) * 0.08;

      for (let i = 0; i < numRays; i++) {
        const rayWidth = 140 + Math.sin(t + i * 2) * 50;
        const xOffset = width * 0.2 + i * (width * 0.2) + Math.cos(t * 0.8 + i) * 60;
        
        const gradient = c.createLinearGradient(xOffset, 0, xOffset + Math.sin(rayAngle) * height * 0.8, height * 0.7);
        gradient.addColorStop(0, `rgba(0, 229, 255, ${0.15 * alpha})`);
        gradient.addColorStop(0.3, `rgba(0, 229, 255, ${0.06 * alpha})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        c.fillStyle = gradient;
        c.beginPath();
        c.moveTo(xOffset - rayWidth / 2, 0);
        c.lineTo(xOffset + rayWidth / 2, 0);
        c.lineTo(xOffset + Math.sin(rayAngle) * height + rayWidth, height);
        c.lineTo(xOffset + Math.sin(rayAngle) * height - rayWidth, height);
        c.closePath();
        c.fill();
      }
      c.restore();
    };

    // --- Handle Mouse Interactions smoothly ---
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

    // --- Main Loop ---
    const tick = () => {
      // Smooth interpolation for mouse coordinates
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Environmental Shift based on scroll depth
      ctx.clearRect(0, 0, width, height);

      const currentScroll = scrollRef.current;

      // 2. Draw light rays (fades as depth approaches 40%)
      const rayAlpha = Math.max(0, 1 - currentScroll * 2.8);
      drawGodRays(ctx, rayAlpha);

      // 3. Bubbles logic
      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw(ctx);
      });

      // 4. Plankton logic
      planktonList.forEach((plankton) => {
        plankton.update(mouse.x, mouse.y);
        plankton.draw(ctx);
      });

      animationId = requestAnimationFrame(tick);
    };

    // --- Handle Resize ---
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Launch loop
    tick();

    // Cleanup listeners and animation loop
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

