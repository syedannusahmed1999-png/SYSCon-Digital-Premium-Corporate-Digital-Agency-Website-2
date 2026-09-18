import { useEffect, useRef } from 'react';

interface BreakthroughMatrixVisualProps {
  className?: string;
}

export function BreakthroughMatrixVisual({ className = '' }: BreakthroughMatrixVisualProps) {
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

    // 3D Orbital Constellation nodes (Sphere/Hyperbolic Torus hybrid topology)
    interface MatrixNode {
      theta: number; // azimuth
      phi: number;   // elevation
      r: number;     // radius
      speedTheta: number;
      speedPhi: number;
      pulseOffset: number;
      size: number;
      colorType: 'cyan' | 'blue' | 'bright';
    }

    const numNodes = 36;
    const nodes: MatrixNode[] = [];

    for (let i = 0; i < numNodes; i++) {
      // Golden spiral distribution for balanced 3D distribution
      const y = 1 - (i / (numNodes - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = (i * 2.399963229728653) % (Math.PI * 2); // golden angle

      nodes.push({
        theta,
        phi: Math.asin(y),
        r: 140 + (i % 5) * 12,
        speedTheta: 0.003 + (i % 4) * 0.0008,
        speedPhi: 0.002 + (i % 3) * 0.0006,
        pulseOffset: i * 0.4,
        size: i % 4 === 0 ? 5.5 : i % 2 === 0 ? 4.0 : 3.0,
        colorType: i % 5 === 0 ? 'bright' : i % 2 === 0 ? 'cyan' : 'blue',
      });
    }

    // Moving luminous energy pulses along edges
    interface Pulse {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
    }
    const pulses: Pulse[] = [];
    const maxPulses = 12;

    let time = 0;

    const render = () => {
      time += 0.012; // Slow, majestic motion
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const scale = Math.min(width, height) / 340;

      // Slow 3D rotation angles
      const rotY = time * 0.35 + mouseX * 0.4;
      const rotX = 0.3 + Math.sin(time * 0.25) * 0.15 + mouseY * 0.3;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project all nodes to 2D screen coordinates
      const projected = nodes.map((node) => {
        const curTheta = node.theta + time * node.speedTheta;
        const curPhi = node.phi + Math.sin(time * node.speedPhi) * 0.2;
        const waveR = node.r + Math.sin(curTheta * 3 + time * 1.5) * 14;
        const currentR = waveR * scale;

        // Spherical coordinates
        const x3d = currentR * Math.cos(curPhi) * Math.sin(curTheta);
        const y3d = currentR * Math.sin(curPhi);
        const z3d = currentR * Math.cos(curPhi) * Math.cos(curTheta);

        // Rotation
        const x1 = x3d * cosY - z3d * sinY;
        const z1 = x3d * sinY + z3d * cosY;
        const y2 = y3d * cosX - z1 * sinX;
        const z2 = y3d * sinX + z1 * cosX;

        // Perspective
        const fov = 420;
        const perspective = fov / (fov + z2 + 180);
        const screenX = cx + x1 * perspective;
        const screenY = cy + y2 * perspective;
        const depth = (z2 + 200) / 400; // 0 (far) to 1 (near)

        return {
          ...node,
          screenX,
          screenY,
          depth,
          perspective,
        };
      });

      // Find nearby nodes to draw flowing connection lines
      const maxDistance = 95 * scale;
      const activeEdges: [number, number, number, number][] = [];

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const avgDepth = (p1.depth + p2.depth) * 0.5;
            if (avgDepth > 0.05) {
              activeEdges.push([i, j, dist, avgDepth]);
            }
          }
        }
      }

      // Draw flowing connection lines
      activeEdges.forEach(([i, j, dist, avgDepth]) => {
        const p1 = projected[i];
        const p2 = projected[j];

        const proximityAlpha = (1 - dist / maxDistance) * Math.max(0.08, avgDepth);
        const grad = ctx.createLinearGradient(p1.screenX, p1.screenY, p2.screenX, p2.screenY);
        grad.addColorStop(0, `rgba(47, 128, 237, ${proximityAlpha * 0.6})`);
        grad.addColorStop(0.5, `rgba(184, 229, 250, ${proximityAlpha * 0.85})`);
        grad.addColorStop(1, `rgba(47, 128, 237, ${proximityAlpha * 0.6})`);

        // Subtle curved line wave
        const midX = (p1.screenX + p2.screenX) / 2;
        const midY = (p1.screenY + p2.screenY) / 2;
        const offset = Math.sin(time * 2 + (i + j) * 0.4) * 3 * avgDepth;

        ctx.beginPath();
        ctx.moveTo(p1.screenX, p1.screenY);
        ctx.quadraticCurveTo(midX + offset, midY - offset, p2.screenX, p2.screenY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = Math.max(0.8, 1.6 * avgDepth);
        ctx.stroke();
      });

      // Manage pulses along active edges
      if (activeEdges.length > 0 && pulses.length < maxPulses && Math.random() < 0.1) {
        const edge = activeEdges[Math.floor(Math.random() * activeEdges.length)];
        pulses.push({
          fromIdx: edge[0],
          toIdx: edge[1],
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
        });
      }

      // Draw pulses
      for (let pIdx = pulses.length - 1; pIdx >= 0; pIdx--) {
        const pulse = pulses[pIdx];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(pIdx, 1);
          continue;
        }

        const p1 = projected[pulse.fromIdx];
        const p2 = projected[pulse.toIdx];
        if (!p1 || !p2) continue;

        const t = pulse.progress;
        const curX = p1.screenX + (p2.screenX - p1.screenX) * t;
        const curY = p1.screenY + (p2.screenY - p1.screenY) * t;
        const pulseAlpha = Math.sin(t * Math.PI) * Math.max(0.2, (p1.depth + p2.depth) * 0.5);

        // Pulse outer glow
        ctx.beginPath();
        ctx.arc(curX, curY, 6 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 229, 250, ${pulseAlpha * 0.6})`;
        ctx.fill();

        // Pulse core
        ctx.beginPath();
        ctx.arc(curX, curY, 2.5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha * 0.95})`;
        ctx.fill();
      }

      // Sort nodes by depth for correct 3D rendering (back to front)
      const sortedNodes = [...projected].sort((a, b) => a.depth - b.depth);

      // Draw nodes with glowing halos
      sortedNodes.forEach((node) => {
        if (node.depth <= 0.05) return;

        const pulse = Math.sin(time * 2.2 + node.pulseOffset) * 0.25 + 1;
        const nodeRadius = node.size * node.perspective * pulse;
        const nodeAlpha = Math.max(0.2, Math.min(0.95, node.depth * 1.1));

        // 1. Soft glowing outer aura
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, nodeRadius * 2.8, 0, Math.PI * 2);
        const glowGrad = ctx.createRadialGradient(
          node.screenX,
          node.screenY,
          nodeRadius * 0.4,
          node.screenX,
          node.screenY,
          nodeRadius * 2.8
        );
        if (node.colorType === 'bright' || node.colorType === 'cyan') {
          glowGrad.addColorStop(0, `rgba(184, 229, 250, ${nodeAlpha * 0.5})`);
          glowGrad.addColorStop(0.6, `rgba(47, 128, 237, ${nodeAlpha * 0.2})`);
          glowGrad.addColorStop(1, 'rgba(47, 128, 237, 0)');
        } else {
          glowGrad.addColorStop(0, `rgba(47, 128, 237, ${nodeAlpha * 0.45})`);
          glowGrad.addColorStop(0.6, `rgba(24, 104, 224, ${nodeAlpha * 0.15})`);
          glowGrad.addColorStop(1, 'rgba(24, 104, 224, 0)');
        }
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // 2. Translucent ring outline
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, nodeRadius + 1.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(184, 229, 250, ${nodeAlpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // 3. Node core
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, nodeRadius, 0, Math.PI * 2);
        if (node.colorType === 'bright') {
          ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha})`;
        } else if (node.colorType === 'cyan') {
          ctx.fillStyle = `rgba(184, 229, 250, ${nodeAlpha})`;
        } else {
          ctx.fillStyle = `rgba(47, 128, 237, ${nodeAlpha})`;
        }
        ctx.fill();

        // 4. White center highlight for specular gleam
        if (node.depth > 0.4) {
          ctx.beginPath();
          ctx.arc(
            node.screenX - nodeRadius * 0.25,
            node.screenY - nodeRadius * 0.25,
            nodeRadius * 0.35,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[320px] sm:min-h-[380px] md:min-h-[440px] flex items-center justify-center ${className}`}>
      {/* Subtle radial cyan & digital blue backdrops that melt seamlessly into dark navy #0B1F3A */}
      <div className="absolute inset-0 bg-radial from-[#2F80ED]/20 via-[#B8E5FA]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none relative z-10"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
