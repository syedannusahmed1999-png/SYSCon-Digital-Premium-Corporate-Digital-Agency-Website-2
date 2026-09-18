import { useEffect, useRef } from 'react';

interface MicroTechStripVisualProps {
  variant?: 'performance' | 'advantage';
  className?: string;
}

export function MicroTechStripVisual({
  variant = 'performance',
  className = '',
}: MicroTechStripVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Nodes definition: 2 layers for depth
    const primaryNodes = Array.from({ length: 7 }, (_, i) => ({
      baseX: (i / 6) * 0.84 + 0.08,
      baseY: variant === 'performance' ? 0.5 + Math.sin(i * 1.3) * 0.26 : 0.65 - (i / 6) * 0.35,
      phase: i * 0.9,
      size: i % 2 === 0 ? 4 : 3,
    }));

    const secondaryNodes = Array.from({ length: 5 }, (_, i) => ({
      baseX: (i / 4) * 0.72 + 0.14,
      baseY: variant === 'performance' ? 0.5 - Math.sin(i * 1.4) * 0.22 : 0.45 + Math.sin(i * 1.1) * 0.2,
      phase: i * 1.1 + 1.2,
      size: 2.5,
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient background coordinate grid / ticks
      ctx.save();
      ctx.strokeStyle = variant === 'performance' ? 'rgba(184, 229, 250, 0.12)' : 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);

      ctx.beginPath();
      ctx.moveTo(width * 0.05, height * 0.5);
      ctx.lineTo(width * 0.95, height * 0.5);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.restore();

      // Compute current animated positions
      const pNodes = primaryNodes.map((n) => {
        const wave = Math.sin(time + n.phase) * (height * 0.16);
        return {
          x: n.baseX * width,
          y: n.baseY * height + wave,
          size: n.size,
        };
      });

      const sNodes = secondaryNodes.map((n) => {
        const wave = Math.cos(time * 0.9 + n.phase) * (height * 0.14);
        return {
          x: n.baseX * width,
          y: n.baseY * height + wave,
          size: n.size,
        };
      });

      // 2. Draw cross-connecting faint lines between primary and secondary nodes
      ctx.beginPath();
      pNodes.forEach((pn, i) => {
        if (sNodes[i % sNodes.length]) {
          const sn = sNodes[i % sNodes.length];
          ctx.moveTo(pn.x, pn.y);
          ctx.lineTo(sn.x, sn.y);
        }
      });
      ctx.strokeStyle =
        variant === 'performance'
          ? 'rgba(47, 128, 237, 0.22)'
          : 'rgba(184, 229, 250, 0.22)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Primary flowing curve (bezier spline through primary nodes)
      ctx.beginPath();
      ctx.moveTo(pNodes[0].x, pNodes[0].y);
      for (let i = 0; i < pNodes.length - 1; i++) {
        const xc = (pNodes[i].x + pNodes[i + 1].x) / 2;
        const yc = (pNodes[i].y + pNodes[i + 1].y) / 2;
        ctx.quadraticCurveTo(pNodes[i].x, pNodes[i].y, xc, yc);
      }
      ctx.lineTo(pNodes[pNodes.length - 1].x, pNodes[pNodes.length - 1].y);

      const primaryGrad = ctx.createLinearGradient(0, 0, width, 0);
      if (variant === 'performance') {
        primaryGrad.addColorStop(0, 'rgba(47, 128, 237, 0.3)');
        primaryGrad.addColorStop(0.5, 'rgba(184, 229, 250, 0.9)');
        primaryGrad.addColorStop(1, 'rgba(47, 128, 237, 0.45)');
      } else {
        primaryGrad.addColorStop(0, 'rgba(100, 181, 246, 0.35)');
        primaryGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
        primaryGrad.addColorStop(1, 'rgba(184, 229, 250, 0.6)');
      }
      ctx.strokeStyle = primaryGrad;
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // 4. Secondary flowing curve
      ctx.beginPath();
      ctx.moveTo(sNodes[0].x, sNodes[0].y);
      for (let i = 0; i < sNodes.length - 1; i++) {
        const xc = (sNodes[i].x + sNodes[i + 1].x) / 2;
        const yc = (sNodes[i].y + sNodes[i + 1].y) / 2;
        ctx.quadraticCurveTo(sNodes[i].x, sNodes[i].y, xc, yc);
      }
      ctx.lineTo(sNodes[sNodes.length - 1].x, sNodes[sNodes.length - 1].y);
      ctx.strokeStyle =
        variant === 'performance'
          ? 'rgba(47, 128, 237, 0.35)'
          : 'rgba(184, 229, 250, 0.4)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // 5. Traveling pulse on primary curve
      const pulseT = (time * 0.35) % 1;
      const pulseIndex = Math.floor(pulseT * (pNodes.length - 1));
      const localT = (pulseT * (pNodes.length - 1)) % 1;
      const p1 = pNodes[pulseIndex];
      const p2 = pNodes[Math.min(pulseIndex + 1, pNodes.length - 1)];
      const pulseX = p1.x + (p2.x - p1.x) * localT;
      const pulseY = p1.y + (p2.y - p1.y) * localT;

      // Pulse aura
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
      ctx.fillStyle =
        variant === 'performance'
          ? 'rgba(184, 229, 250, 0.5)'
          : 'rgba(255, 255, 255, 0.6)';
      ctx.fill();

      // Pulse core
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // 6. Draw primary nodes with glowing halo
      pNodes.forEach((n, idx) => {
        const pulse = Math.sin(time * 2.2 + idx) * 0.2 + 1;
        // Node outer halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 2.4 * pulse, 0, Math.PI * 2);
        ctx.fillStyle =
          variant === 'performance'
            ? 'rgba(184, 229, 250, 0.25)'
            : 'rgba(100, 181, 246, 0.3)';
        ctx.fill();

        // White border
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * pulse + 1, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Node center
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? '#B8E5FA' : '#2F80ED';
        ctx.fill();

        // Specular dot
        ctx.beginPath();
        ctx.arc(n.x - 0.8, n.y - 0.8, n.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      });

      // Secondary nodes
      sNodes.forEach((n, idx) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? '#2F80ED' : '#B8E5FA';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [variant]);

  return (
    <div className={`relative h-28 sm:h-32 w-full max-w-[340px] overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-radial from-[#2F80ED]/15 via-transparent to-transparent blur-xl pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full pointer-events-none relative z-10" />
    </div>
  );
}
