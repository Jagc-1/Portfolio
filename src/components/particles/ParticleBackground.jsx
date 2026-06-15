import { useEffect, useRef } from "react";

const COUNT = 18;
const MAX_DIST = 280;

const createParticle = (w, h) => ({
  x: Math.random() * w,
  y: Math.random() * h,
  vx: (Math.random() - 0.5) * 0.22,
  vy: (Math.random() - 0.5) * 0.22,
  r: Math.random() * 3.5 + 2,        // core radius 2–5.5 px
  glow: Math.random() * 40 + 30,     // glow halo radius 30–70 px
});

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const resize = () => {
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    let particles = Array.from({ length: COUNT }, () =>
      createParticle(canvas.width, canvas.height)
    );

    let raf;
    const draw = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      // Move
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -80)  p.x = W + 80;
        if (p.x > W + 80) p.x = -80;
        if (p.y < -80)  p.y = H + 80;
        if (p.y > H + 80) p.y = -80;
      });

      // Lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,200,255,${(1 - d / MAX_DIST) * 0.13})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Glowing orbs
      particles.forEach((p) => {
        // Outer soft glow (radial gradient)
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glow);
        g.addColorStop(0,    "rgba(100, 215, 255, 0.55)");
        g.addColorStop(0.18, "rgba(80,  190, 255, 0.22)");
        g.addColorStop(0.55, "rgba(60,  160, 255, 0.07)");
        g.addColorStop(1,    "rgba(60,  160, 255, 0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.glow, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200, 240, 255, 0.95)";
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
};

export default ParticleBackground;