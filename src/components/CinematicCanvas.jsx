import React, { useEffect, useRef } from "react";

export default function CinematicCanvas({ colorGrade = "kodak-gold" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for dynamic anamorphic flare
    let mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Organic dust motes floating in projector beam
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.2 - 0.1, // gentle upward drift
      alpha: Math.random() * 0.5 + 0.1,
      baseAlpha: Math.random() * 0.5 + 0.1,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Color scheme based on active color grade
      let primaryGlow = "rgba(245, 158, 11,"; // warm tungsten gold (default)
      let secondaryGlow = "rgba(217, 119, 6,";

      if (colorGrade === "blade-runner") {
        primaryGlow = "rgba(56, 189, 248,"; // cyan
        secondaryGlow = "rgba(249, 115, 22,"; // amber
      } else if (colorGrade === "dune-monolith") {
        primaryGlow = "rgba(229, 169, 93,"; // bronze
        secondaryGlow = "rgba(161, 98, 7,";
      } else if (colorGrade === "imax-noir") {
        primaryGlow = "rgba(226, 232, 240,"; // platinum silver
        secondaryGlow = "rgba(148, 163, 184,";
      }

      // 1. Deep cinematic atmosphere gradient
      const bgGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y * 0.8,
        30,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, `${primaryGlow} 0.07)`);
      bgGrad.addColorStop(0.35, `${secondaryGlow} 0.02)`);
      bgGrad.addColorStop(1, "rgba(4, 5, 7, 0.98)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Projector Light Cone from Top
      ctx.save();
      const beamGrad = ctx.createLinearGradient(width / 2, 0, mouse.x, height);
      beamGrad.addColorStop(0, `${primaryGlow} 0.09)`);
      beamGrad.addColorStop(0.4, `${primaryGlow} 0.02)`);
      beamGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = beamGrad;
      ctx.beginPath();
      ctx.moveTo(width * 0.4, 0);
      ctx.lineTo(width * 0.6, 0);
      ctx.lineTo(width, height * 1.2);
      ctx.lineTo(0, height * 1.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 3. Anamorphic Horizontal Lens Streak across mouse position
      ctx.save();
      const flareWidth = width * 0.8;
      const flareGrad = ctx.createLinearGradient(
        mouse.x - flareWidth / 2,
        mouse.y,
        mouse.x + flareWidth / 2,
        mouse.y
      );
      flareGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
      flareGrad.addColorStop(0.45, `${primaryGlow} 0.12)`);
      flareGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.45)");
      flareGrad.addColorStop(0.55, `${primaryGlow} 0.12)`);
      flareGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = flareGrad;
      ctx.fillRect(mouse.x - flareWidth / 2, mouse.y - 1, flareWidth, 2);
      ctx.restore();

      // 4. Subtle Film Projector Crosshairs & Aspect Markers
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 18]);

      // Center crosshair
      const cx = width / 2;
      const cy = height / 2;
      ctx.beginPath();
      ctx.moveTo(cx - 30, cy);
      ctx.lineTo(cx + 30, cy);
      ctx.moveTo(cx, cy - 30);
      ctx.lineTo(cx, cy + 30);
      ctx.stroke();

      ctx.restore();

      // 5. Floating Dust Motes (Filmic Bokeh)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Soft shimmering
        const shimmer = Math.sin(frame * 0.03 + p.phase);
        const currentAlpha = Math.max(0.05, p.baseAlpha + shimmer * 0.15);

        ctx.fillStyle = `${primaryGlow} ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [colorGrade]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
