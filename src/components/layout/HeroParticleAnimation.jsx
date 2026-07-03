import { useEffect, useRef } from "react";

const TAU = Math.PI * 2;
const MAX_DPR = 2;
const BASE_PALETTE = [
  [52, 105, 255],
  [126, 92, 255],
  [204, 77, 139],
  [250, 67, 76],
  [255, 127, 26],
  [255, 196, 0],
];

function seededRandom(seed) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseAccentColor() {
  if (typeof window === "undefined") return [2, 199, 140];

  const raw = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--accent-rgb")
    .trim()
    .split(/\s+/)
    .map((value) => Number.parseInt(value, 10));

  return raw.length === 3 && raw.every(Number.isFinite) ? raw : [2, 199, 140];
}

function buildParticles(width, height) {
  const count = clamp(Math.floor((width * height) / 3600), 170, 520);
  const centerX = width * 0.53;
  const centerY = height * 0.5;
  const spread = Math.max(width, height);

  return Array.from({ length: count }, (_, index) => {
    const isOrbit = seededRandom(index * 4.91 + 8.17) > 0.32;
    let anchorX;
    let anchorY;

    if (isOrbit) {
      const theta = seededRandom(index * 9.13 + 3.14) * TAU;
      const radius = (0.18 + seededRandom(index * 2.33 + 4.44) * 0.82) * spread * 0.62;

      anchorX = centerX + Math.cos(theta) * radius * 1.08;
      anchorY = centerY + Math.sin(theta) * radius * 0.72;
    } else {
      anchorX = seededRandom(index * 12.99 + 78.23) * width;
      anchorY = seededRandom(index * 78.23 + 12.99) * height;
    }

    anchorX = clamp(anchorX, -42, width + 42);
    anchorY = clamp(anchorY, -42, height + 42);

    const xRatio = clamp(anchorX / Math.max(width, 1), 0, 0.999);
    const paletteIndex = Math.min(
      BASE_PALETTE.length - 1,
      Math.floor(xRatio * BASE_PALETTE.length)
    );
    const color = BASE_PALETTE[paletteIndex];
    const length = 2.5 + seededRandom(index * 6.71 + 1.38) * 8.5;
    const widthSeed = seededRandom(index * 7.43 + 9.81);

    return {
      anchorX,
      anchorY,
      x: anchorX,
      y: anchorY,
      alpha: 0.2 + seededRandom(index * 3.47 + 5.62) * 0.5,
      angle: seededRandom(index * 5.73 + 1.62) * TAU,
      color,
      depth: 0.42 + seededRandom(index * 10.31 + 2.22) * 0.9,
      drift: 4 + seededRandom(index * 8.41 + 6.28) * 12,
      length,
      lineWidth: widthSeed > 0.82 ? 2.7 : widthSeed > 0.52 ? 1.9 : 1.2,
      phase: seededRandom(index * 11.17 + 7.31) * TAU,
      spin: 0.00034 + seededRandom(index * 2.71 + 8.98) * 0.00058,
    };
  });
}

export function HeroParticleAnimation({ themeId }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.parentElement;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !stage || !context) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = reducedMotionQuery.matches;
    const accentColor = parseAccentColor();
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles = [];
    const pointer = {
      active: false,
      targetX: -9999,
      targetY: -9999,
      x: -9999,
      y: -9999,
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = buildParticles(width, height);
    };

    const drawParticle = (particle, time, force, directionX, directionY) => {
      const driftX = Math.cos(time * 0.00035 + particle.phase) * particle.drift;
      const driftY = Math.sin(time * 0.00028 + particle.phase) * particle.drift * 0.7;
      const repulsion = force * force * 148 * particle.depth;
      const targetX = particle.anchorX + driftX + directionX * repulsion;
      const targetY = particle.anchorY + driftY + directionY * repulsion;

      particle.x += (targetX - particle.x) * 0.08;
      particle.y += (targetY - particle.y) * 0.08;

      const orbitAngle = Math.atan2(directionY, directionX) + Math.PI / 2;
      const idleAngle =
        particle.angle + Math.sin(time * particle.spin + particle.phase) * 0.34;
      const angle = idleAngle * (1 - force) + orbitAngle * force;
      const length = particle.length + force * 15 * particle.depth;
      const color = force > 0.28 ? accentColor : particle.color;
      const alpha = clamp(particle.alpha + force * 0.48, 0.08, 0.94);

      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(angle);
      context.beginPath();
      context.moveTo(-length * 0.5, 0);
      context.lineTo(length * 0.5, 0);
      context.lineCap = "round";
      context.lineWidth = particle.lineWidth + force * 0.7;
      context.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
      context.stroke();
      context.restore();
    };

    const render = (time = 0) => {
      pointer.x += (pointer.targetX - pointer.x) * 0.12;
      pointer.y += (pointer.targetY - pointer.y) * 0.12;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      const radius = clamp(Math.min(width, height) * 0.48, 260, 430);

      particles.forEach((particle) => {
        const distanceX = particle.anchorX - pointer.x;
        const distanceY = particle.anchorY - pointer.y;
        const distance = Math.hypot(distanceX, distanceY) || 1;
        const influence = pointer.active ? clamp(1 - distance / radius, 0, 1) : 0;
        const force = influence * influence * (3 - 2 * influence);

        drawParticle(
          particle,
          time,
          force,
          distanceX / distance,
          distanceY / distance
        );
      });

      context.globalCompositeOperation = "source-over";

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const updatePointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.active = true;
      pointer.targetX = event.clientX - rect.left;
      pointer.targetY = event.clientY - rect.top;
    };

    const resetPointer = () => {
      pointer.active = false;
      pointer.targetX = -9999;
      pointer.targetY = -9999;
    };

    resize();
    render();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) {
        render();
      }
    });

    resizeObserver.observe(canvas);
    stage.addEventListener("pointermove", updatePointer, { passive: true });
    stage.addEventListener("pointerleave", resetPointer);

    return () => {
      resizeObserver.disconnect();
      stage.removeEventListener("pointermove", updatePointer);
      stage.removeEventListener("pointerleave", resetPointer);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [themeId]);

  return (
    <canvas
      aria-hidden="true"
      className="hero-particle-animation pointer-events-none absolute inset-0"
      ref={canvasRef}
    />
  );
}
