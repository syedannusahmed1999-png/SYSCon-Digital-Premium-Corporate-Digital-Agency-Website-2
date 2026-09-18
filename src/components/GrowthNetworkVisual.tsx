import { useEffect, useRef } from 'react';

interface GrowthNetworkVisualProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export function GrowthNetworkVisual({
  className = '',
  theme = 'dark',
}: GrowthNetworkVisualProps) {
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

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Seeded structural nodes forming an ascending digital growth topology
    // Normalized x: 0.1 to 0.9, y: 0.85 (lower) to 0.15 (upper, ascending growth)
    const baseNodes = [
      { id: 0, nx: 0.12, ny: 0.78, radius: 4.5, baseAlpha: 0.8, type: 'source' },
      { id: 1, nx: 0.24, ny: 0.68, radius: 5.5, baseAlpha: 0.9, type: 'hub' },
      { id: 2, nx: 0.20, ny: 0.86, radius: 3.5, baseAlpha: 0.6, type: 'leaf' },
      { id: 3, nx: 0.38, ny: 0.58, radius: 6.0, baseAlpha: 0.95, type: 'core' },
      { id: 4, nx: 0.32, ny: 0.76, radius: 4.0, baseAlpha: 0.7, type: 'leaf' },
      { id: 5, nx: 0.52, ny: 0.44, radius: 6.5, baseAlpha: 1.0, type: 'hub' },
      { id: 6, nx: 0.46, ny: 0.62, radius: 4.0, baseAlpha: 0.65, type: 'leaf' },
      { id: 7, nx: 0.66, ny: 0.32, radius: 7.0, baseAlpha: 0.95, type: 'core' },
      { id: 8, nx: 0.60, ny: 0.50, radius: 4.5, baseAlpha: 0.7, type: 'leaf' },
      { id: 9, nx: 0.78, ny: 0.22, radius: 6.0, baseAlpha: 0.9, type: 'hub' },
      { id: 10, nx: 0.74, ny: 0.40, radius: 4.0, baseAlpha: 0.65, type: 'leaf' },
      { id: 11, nx: 0.88, ny: 0.14, radius: 5.5, baseAlpha: 0.95, type: 'crest' },
      { id: 12, nx: 0.92, ny: 0.28, radius: 3.5, baseAlpha: 0.6, type: 'leaf' },
      // Secondary supporting ambient nodes
      { id: 13, nx: 0.16, ny: 0.54, radius: 3.5, baseAlpha: 0.5, type: 'ambient' },
      { id: 14, nx: 0.42, ny: 0.34, radius: 4.0, baseAlpha: 0.55, type: 'ambient' },
      { id: 15, nx: 0.82, ny: 0.36, radius: 3.5, baseAlpha: 0.5, type: 'ambient' },
      { id: 16, nx: 0.58, ny: 0.20, radius: 4.0, baseAlpha: 0.6, type: 'ambient' },
    ];

    // Edges defining flowing lines and growth trajectories
    const connections: [number, number, number][] = [
      // [nodeA, nodeB, curvature weight]
      [0, 1, 0.15],
      [2, 1, -0.1],
      [1, 3, 0.2],
      [2, 4, 0.1],
      [4, 3, -0.15],
      [3, 5, 0.25],
      [4, 6, 0.15],
      [6, 5, -0.1],
      [5, 7, 0.2],
      [6, 8, 0.12],
      [8, 7, -0.18],
      [7, 9, 0.22],
      [8, 10, 0.14],
      [10, 9, -0.12],
      [9, 11, 0.25],
      [10, 12, 0.15],
      [12, 11, -0.1],
      // Cross connections
      [13, 1, 0.1],
      [13, 3, -0.15],
      [14, 5, 0.12],
      [14, 7, -0.1],
      [16, 7, 0.18],
      [16, 9, -0.14],
      [15, 9, 0.1],
      [15, 12, -0.12],
      // Main growth backbone spline
      [0, 3, 0.3],
      [3, 7, 0.35],
      [7, 11, 0.4],
    ];

    // Signal packets flowing along connections
    interface SignalPacket {
      edgeIndex: number;
      progress: number;
      speed: number;
      size: number;
      color: string;
    }

    const packets: SignalPacket[] = [];
    const numPackets = 14;
    for (let i = 0; i < numPackets; i++) {
      packets.push({
        edgeIndex: Math.floor(Math.random() * connections.length),
        progress: Math.random(),
        speed: 0.0035 + Math.random() * 0.0045,
        size: 2.2 + Math.random() * 1.8,
        color: i % 3 === 0 ? '#B8E5FA' : '#2F80ED',
      });
    }

    let time = 0;

    const render = () => {
      time += 0.016;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Gentle floating elevation for the entire cluster
      const floatY = Math.sin(time * 0.8) * 6;
      const floatX = Math.cos(time * 0.6) * 4;

      // Compute current screen coordinates of each node with organic motion
      const currentNodes = baseNodes.map((node) => {
        // Individual harmonic breathing
        const nodeWobbleX = Math.sin(time * 1.2 + node.id * 1.4) * 3;
        const nodeWobbleY = Math.cos(time * 1.0 + node.id * 1.2) * 3.5;
        // Parallax influence from mouse
        const parallaxX = mouseX * 12 * (1 - node.ny);
        const parallaxY = mouseY * 10 * (1 - node.ny);

        const x = node.nx * width + floatX + nodeWobbleX + parallaxX;
        const y = node.ny * height + floatY + nodeWobbleY + parallaxY;

        return {
          ...node,
          x,
          y,
        };
      });

      // 1. Draw subtle background growth guideline arcs & coordinate ticks
      ctx.save();
      ctx.strokeStyle =
        theme === 'dark' ? 'rgba(184, 229, 250, 0.25)' : 'rgba(220, 231, 239, 0.45)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);

      // Upward growth trajectory guide curve
      if (currentNodes.length > 11) {
        const start = currentNodes[0];
        const mid = currentNodes[5];
        const end = currentNodes[11];
        ctx.beginPath();
        ctx.moveTo(start.x - 20, start.y + 20);
        ctx.quadraticCurveTo(mid.x - 30, mid.y + 40, end.x + 30, end.y - 20);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      ctx.restore();

      // 2. Draw flowing connection lines between nodes
      connections.forEach(([fromIdx, toIdx, curveWeight], edgeIdx) => {
        const from = currentNodes[fromIdx];
        const to = currentNodes[toIdx];
        if (!from || !to) return;

        // Midpoint and control point calculation for smooth bezier
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Perpendicular vector for wave oscillation
        const nx = -dy / (dist || 1);
        const ny = dx / (dist || 1);

        const waveOffset = Math.sin(time * 1.5 + edgeIdx * 0.7) * 4;
        const cpX = midX + nx * (curveWeight * dist * 0.4 + waveOffset);
        const cpY = midY + ny * (curveWeight * dist * 0.4 + waveOffset);

        // Gradient line connecting nodes
        const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        const isBackbone = edgeIdx >= connections.length - 3;
        if (theme === 'dark') {
          if (isBackbone) {
            grad.addColorStop(0, 'rgba(47, 128, 237, 0.65)');
            grad.addColorStop(0.5, 'rgba(184, 229, 250, 0.95)');
            grad.addColorStop(1, 'rgba(47, 128, 237, 0.7)');
          } else {
            grad.addColorStop(0, 'rgba(47, 128, 237, 0.35)');
            grad.addColorStop(1, 'rgba(184, 229, 250, 0.6)');
          }
        } else {
          if (isBackbone) {
            grad.addColorStop(0, 'rgba(47, 128, 237, 0.45)');
            grad.addColorStop(0.5, 'rgba(184, 229, 250, 0.75)');
            grad.addColorStop(1, 'rgba(47, 128, 237, 0.6)');
          } else {
            grad.addColorStop(0, 'rgba(47, 128, 237, 0.22)');
            grad.addColorStop(1, 'rgba(184, 229, 250, 0.35)');
          }
        }

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.quadraticCurveTo(cpX, cpY, to.x, to.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isBackbone ? 2.0 : 1.2;
        ctx.stroke();
      });

      // 3. Draw animated signal packets along the lines
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.edgeIndex = Math.floor(Math.random() * connections.length);
        }

        const [fromIdx, toIdx, curveWeight] = connections[p.edgeIndex];
        const from = currentNodes[fromIdx];
        const to = currentNodes[toIdx];
        if (!from || !to) return;

        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / (dist || 1);
        const ny = dx / (dist || 1);

        const waveOffset = Math.sin(time * 1.5 + p.edgeIndex * 0.7) * 4;
        const cpX = midX + nx * (curveWeight * dist * 0.4 + waveOffset);
        const cpY = midY + ny * (curveWeight * dist * 0.4 + waveOffset);

        // Quadratic Bezier point calculation: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
        const t = p.progress;
        const invT = 1 - t;
        const px = invT * invT * from.x + 2 * invT * t * cpX + t * t * to.x;
        const py = invT * invT * from.y + 2 * invT * t * cpY + t * t * to.y;

        // Packet glow halo
        ctx.beginPath();
        ctx.arc(px, py, p.size * 2.4, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === 'dark'
            ? p.color === '#B8E5FA'
              ? 'rgba(184, 229, 250, 0.65)'
              : 'rgba(47, 128, 237, 0.55)'
            : p.color === '#B8E5FA'
              ? 'rgba(184, 229, 250, 0.4)'
              : 'rgba(47, 128, 237, 0.3)';
        ctx.fill();

        // Core bright pulse
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? '#FFFFFF' : p.color;
        ctx.fill();
      });

      // 4. Draw connected nodes with glowing radial halos
      currentNodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.id) * 0.25 + 1;
        const currentR = node.radius * pulse;

        // Outer ambient glow ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR * 2.8, 0, Math.PI * 2);
        const glowGrad = ctx.createRadialGradient(
          node.x,
          node.y,
          currentR * 0.5,
          node.x,
          node.y,
          currentR * 2.8
        );
        if (theme === 'dark') {
          glowGrad.addColorStop(0, 'rgba(184, 229, 250, 0.6)');
          glowGrad.addColorStop(0.6, 'rgba(47, 128, 237, 0.25)');
          glowGrad.addColorStop(1, 'rgba(47, 128, 237, 0)');
        } else {
          glowGrad.addColorStop(0, 'rgba(184, 229, 250, 0.45)');
          glowGrad.addColorStop(1, 'rgba(184, 229, 250, 0)');
        }
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Border ring around node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR + 1.5, 0, Math.PI * 2);
        ctx.strokeStyle =
          theme === 'dark' ? 'rgba(184, 229, 250, 0.85)' : 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Core node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2);
        if (node.type === 'crest' || node.type === 'core') {
          ctx.fillStyle = theme === 'dark' ? '#B8E5FA' : '#2F80ED';
        } else if (node.type === 'hub') {
          ctx.fillStyle = '#2F80ED';
        } else {
          ctx.fillStyle = '#64B5F6';
        }
        ctx.fill();

        // High-contrast center specular dot
        ctx.beginPath();
        ctx.arc(node.x - currentR * 0.25, node.y - currentR * 0.25, currentR * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
    };
  }, [theme]);

  return (
    <div className={`relative w-full h-full min-h-[360px] sm:min-h-[420px] md:min-h-[480px] flex items-center justify-center ${className}`}>
      {/* Soft ambient gradient backdrop matching the site's brand blues */}
      {theme === 'dark' ? (
        <>
          <div className="absolute inset-0 bg-radial from-[#2F80ED]/25 via-[#B8E5FA]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -inset-4 bg-radial from-[#0B1F3A]/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-radial from-[#B8E5FA]/40 via-[#2F80ED]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -inset-4 bg-radial from-white/60 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
        </>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none relative z-10"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
