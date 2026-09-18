import { useEffect, useRef } from 'react';

interface GenerativeMeshProps {
  className?: string;
  density?: number;
  interactive?: boolean;
  mode?: 'sphere' | 'wave' | 'torus';
  theme?: 'light' | 'dark';
}

export function GenerativeMesh({
  className = '',
  density = 42,
  interactive = true,
  mode = 'sphere',
  theme = 'light',
}: GenerativeMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle collection based on mode
    interface Particle {
      u: number;
      v: number;
      baseR: number;
      offset: number;
    }

    const particles: Particle[] = [];
    const count = density;

    if (mode === 'sphere' || mode === 'torus') {
      for (let i = 0; i < count; i++) {
        const u = (i / count) * Math.PI; // 0 to PI
        for (let j = 0; j < count; j++) {
          const v = (j / count) * Math.PI * 2; // 0 to 2PI
          particles.push({
            u,
            v,
            baseR: mode === 'sphere' ? 190 : 160,
            offset: Math.sin(u * 3) * Math.cos(v * 2),
          });
        }
      }
    } else if (mode === 'wave') {
      const rows = count;
      const cols = count;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          particles.push({
            u: (i / (rows - 1) - 0.5) * 600,
            v: (j / (cols - 1) - 0.5) * 600,
            baseR: 0,
            offset: Math.sin(i * 0.3) * Math.cos(j * 0.3),
          });
        }
      }
    }

    let time = 0;

    const render = () => {
      time += 0.007;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const radiusScale = Math.min(width, height) / 520;

      if (mode === 'sphere') {
        const rotY = time * 0.4 + mouseX * 0.45;
        const rotX = Math.sin(time * 0.3) * 0.2 + mouseY * 0.35 + 0.2;
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const wave =
            Math.sin(p.u * 4 + time * 2) * 16 +
            Math.cos(p.v * 3 - time * 1.5) * 14 +
            p.offset * 18;
          const r = (p.baseR + wave) * radiusScale;

          const x = r * Math.sin(p.u) * Math.cos(p.v);
          const y = r * Math.cos(p.u);
          const z = r * Math.sin(p.u) * Math.sin(p.v);

          const x1 = x * cosY - z * sinY;
          const z1 = x * sinY + z * cosY;
          const y2 = y * cosX - z1 * sinX;
          const z2 = y * sinX + z1 * cosX;

          const fov = 480;
          const perspective = fov / (fov + z2 + 200);
          const screenX = cx + x1 * perspective;
          const screenY = cy + y2 * perspective;

          const normalizedZ = (z2 + 200) / 400;
          if (normalizedZ < 0.1) continue;

          const size = Math.max(0.6, (1.8 - (1 - normalizedZ) * 0.9) * perspective);
          const alpha = Math.max(0.08, Math.min(0.75, (normalizedZ * 0.75 + 0.15)));

          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);

          if (theme === 'dark') {
            if (i % 6 === 0) {
              ctx.fillStyle = `rgba(184, 229, 250, ${alpha * 1.3})`;
            } else if (i % 3 === 0) {
              ctx.fillStyle = `rgba(47, 128, 237, ${alpha * 1.1})`;
            } else {
              ctx.fillStyle = `rgba(100, 181, 246, ${alpha * 0.8})`;
            }
          } else {
            if (i % 6 === 0) {
              ctx.fillStyle = `rgba(47, 128, 237, ${alpha})`;
            } else if (i % 3 === 0) {
              ctx.fillStyle = `rgba(184, 229, 250, ${alpha * 1.2})`;
            } else {
              ctx.fillStyle = `rgba(75, 145, 230, ${alpha * 0.8})`;
            }
          }
          ctx.fill();
        }
      } else if (mode === 'wave') {
        const rotX = 1.05 + mouseY * 0.2;
        const rotZ = time * 0.15 + mouseX * 0.2;
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const cosZ = Math.cos(rotZ);
        const sinZ = Math.sin(rotZ);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dist = Math.sqrt(p.u * p.u + p.v * p.v);
          const waveHeight =
            Math.sin(dist * 0.02 - time * 2.5) * 32 +
            Math.cos(p.u * 0.02 + time * 1.5) * 20;

          const x = p.u * radiusScale;
          const y = p.v * radiusScale;
          const z = waveHeight * radiusScale;

          // Rotate around Z then X
          const x1 = x * cosZ - y * sinZ;
          const y1 = x * sinZ + y * cosZ;
          const y2 = y1 * cosX - z * sinX;
          const z2 = y1 * sinX + z * cosX;

          const fov = 450;
          const perspective = fov / (fov + z2 + 350);
          const screenX = cx + x1 * perspective;
          const screenY = cy + y2 * perspective + 40;

          const size = Math.max(0.6, 1.4 * perspective);
          const alpha = Math.max(0.08, Math.min(0.65, (perspective * 0.8)));

          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);

          if (theme === 'dark') {
            ctx.fillStyle = i % 4 === 0 ? `rgba(184, 229, 250, ${alpha * 1.2})` : `rgba(47, 128, 237, ${alpha})`;
          } else {
            ctx.fillStyle = i % 4 === 0 ? `rgba(47, 128, 237, ${alpha})` : `rgba(184, 229, 250, ${alpha * 1.3})`;
          }
          ctx.fill();
        }
      } else if (mode === 'torus') {
        const majorR = 170 * radiusScale;
        const minorR = 60 * radiusScale;
        const rotY = time * 0.5 + mouseX * 0.5;
        const rotX = 0.5 + Math.sin(time * 0.3) * 0.3 + mouseY * 0.3;
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const ripple = Math.sin(p.u * 3 + time * 3) * 10 * radiusScale;
          const r = minorR + ripple;

          const x = (majorR + r * Math.cos(p.u)) * Math.cos(p.v);
          const y = (majorR + r * Math.cos(p.u)) * Math.sin(p.v);
          const z = r * Math.sin(p.u);

          const x1 = x * cosY - z * sinY;
          const z1 = x * sinY + z * cosY;
          const y2 = y * cosX - z1 * sinX;
          const z2 = y * sinX + z1 * cosX;

          const fov = 460;
          const perspective = fov / (fov + z2 + 250);
          const screenX = cx + x1 * perspective;
          const screenY = cy + y2 * perspective;

          const size = Math.max(0.6, 1.6 * perspective);
          const alpha = Math.max(0.08, Math.min(0.75, (perspective * 0.9)));

          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);

          if (theme === 'dark') {
            ctx.fillStyle = i % 3 === 0 ? `rgba(184, 229, 250, ${alpha * 1.3})` : `rgba(47, 128, 237, ${alpha})`;
          } else {
            ctx.fillStyle = i % 3 === 0 ? `rgba(47, 128, 237, ${alpha})` : `rgba(184, 229, 250, ${alpha * 1.2})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [density, interactive, mode, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ willChange: 'transform' }}
    />
  );
}
