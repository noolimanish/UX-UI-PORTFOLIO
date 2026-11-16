import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const BUCKET_SKILLS = [
  { id: "s1", label: "Visual Design", width: 145, color: "emerald" },
  { id: "s2", label: "UI Design", width: 125, color: "slate" },
  { id: "s3", label: "Design Systems", width: 155, color: "emerald" },
  { id: "s4", label: "Motion Design / Micro‑interactions", width: 260, color: "emerald" },
  { id: "s5", label: "UX Writing", width: 135, color: "slate" },
  { id: "s6", label: "User Research", width: 150, color: "slate" },
  { id: "s7", label: "Usability Testing", width: 165, color: "emerald" },
  { id: "s8", label: "Wireframing", width: 140, color: "slate" },
  { id: "s9", label: "Prototyping", width: 135, color: "emerald" },
  { id: "s10", label: "User Flows", width: 130, color: "slate" },
  { id: "s11", label: "Mockups", width: 120, color: "slate" },
  { id: "s12", label: "Information Architecture (IA)", width: 235, color: "emerald" },
  { id: "s13", label: "Interaction Design", width: 175, color: "emerald" },
];

export default function PhysicsSkillsBowl() {
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const dragPosRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const [draggedId, setDraggedId] = useState(null);

  // Initialize skills scattered inside the glass block
  const [skills, setSkills] = useState(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const numCols = isMobile ? 2 : 4;
    const spacingX = isMobile ? 130 : 210;
    const spacingY = isMobile ? 60 : 95;
    return BUCKET_SKILLS.map((s, i) => {
      const col = i % numCols;
      const row = Math.floor(i / numCols);
      return {
        ...s,
        width: isMobile ? Math.min(s.width * 0.78, 165) : s.width,
        x: (isMobile ? 20 : 50) + col * spacingX + (Math.random() * 20 - 10),
        y: (isMobile ? 40 : 60) + row * spacingY + (Math.random() * 20 - 10),
        vx: (Math.random() - 0.5) * 40,
        vy: (Math.random() - 0.5) * 40,
        rot: (Math.random() - 0.5) * 14,
      };
    });
  });

  // Disperse function: throws all skills outward in random directions
  const handleDisperse = () => {
    try {
      cinematicAudio.playTactileClick(1300);
      cinematicAudio.playThemeChime(1100);
    } catch {}

    setSkills((prev) =>
      prev.map((s) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 260 + Math.random() * 420;
        return {
          ...s,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: s.rot + (Math.random() - 0.5) * 60,
        };
      })
    );
  };

  // 2D Physics Animation Loop inside the Glass Block
  useEffect(() => {
    let lastTime = performance.now();

    const updatePhysics = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.04);
      lastTime = time;

      const friction = 0.985;
      const bounce = -0.65;
      const containerWidth = containerRef.current?.clientWidth || 950;
      const containerHeight = containerRef.current?.clientHeight || 440;

      const paddingX = 24;
      const paddingY = 24;

      setSkills((prevSkills) =>
        prevSkills.map((s) => {
          if (s.id === draggedId) {
            const vx = (dragPosRef.current.x - dragPosRef.current.prevX) * 22;
            const vy = (dragPosRef.current.y - dragPosRef.current.prevY) * 22;
            dragPosRef.current.prevX = dragPosRef.current.x;
            dragPosRef.current.prevY = dragPosRef.current.y;
            return {
              ...s,
              x: Math.max(paddingX, Math.min(containerWidth - s.width - paddingX, dragPosRef.current.x - s.width / 2)),
              y: Math.max(paddingY, Math.min(containerHeight - 44 - paddingY, dragPosRef.current.y - 20)),
              vx,
              vy,
            };
          }

          let newX = s.x + s.vx * dt;
          let newY = s.y + s.vy * dt;
          let newVx = s.vx * friction;
          let newVy = s.vy * friction;
          let newRot = s.rot + newVx * 0.04;

          // Gentle ambient float
          if (Math.abs(newVx) < 4 && Math.abs(newVy) < 4) {
            newVx += (Math.random() - 0.5) * 8;
            newVy += (Math.random() - 0.5) * 8;
          }

          // Left / Right glass wall bounce
          if (newX <= paddingX) {
            newX = paddingX;
            newVx *= bounce;
          } else if (newX >= containerWidth - s.width - paddingX) {
            newX = containerWidth - s.width - paddingX;
            newVx *= bounce;
          }

          // Top / Bottom glass wall bounce
          if (newY <= paddingY) {
            newY = paddingY;
            newVy *= bounce;
          } else if (newY >= containerHeight - 46 - paddingY) {
            newY = containerHeight - 46 - paddingY;
            newVy *= bounce;
          }

          return {
            ...s,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rot: newRot,
          };
        })
      );

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [draggedId]);

  // Pointer drag event handlers
  const handlePointerDown = (id, e) => {
    e.stopPropagation();
    setDraggedId(id);
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    dragPosRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      prevX: clientX - rect.left,
      prevY: clientY - rect.top,
    };
    try {
      cinematicAudio.playTactileClick(1150);
    } catch {}
  };

  const handlePointerMove = (e) => {
    if (!draggedId || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    dragPosRef.current.x = clientX - rect.left;
    dragPosRef.current.y = clientY - rect.top;
  };

  const handlePointerUp = () => {
    if (draggedId) {
      try {
        cinematicAudio.playTactileClick(900);
      } catch {}
    }
    setDraggedId(null);
  };

  return (
    <section
      id="skills-bowl"
      className="relative py-20 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto select-none border-t border-white/10"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* CLEAN HEADER: Exactly as requested */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="space-y-1">
          <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-bold uppercase block">
            [ SKILLS &amp; EXPERTISE ]
          </span>
          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Here's what I have in my bucket.
          </h3>
        </div>

        {/* Action Controls - ONLY Disperse button, Resume Dossier removed as requested */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDisperse}
            className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-emerald-500/20 text-white hover:text-emerald-300 border border-white/20 hover:border-emerald-400/40 text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
            title="Disperse and shake all skill capsules in the glass block"
          >
            <span className="text-emerald-400">⚡</span>
            <span>DISPERSE BUCKET</span>
          </button>
        </div>
      </div>

      {/* 3D GLASS BLOCK CONTAINER */}
      <div
        ref={containerRef}
        className="relative w-full h-[460px] sm:h-[490px] rounded-[36px] sm:rounded-[44px] bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-3xl border-2 border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.85),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.6)] overflow-hidden cursor-grab active:cursor-grabbing"
      >
        {/* Top Edge Specular Glass Glare Reflection */}
        <div className="absolute top-0 inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none z-20" />

        {/* Ambient Glass Caustic Glow Spots */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Glass Block Status Watermark */}
        <div className="absolute top-4 left-6 pointer-events-none text-[9px] font-mono tracking-widest text-white/30 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
          <span>GLASS CHAMBER // {BUCKET_SKILLS.length} VERIFIED CAPABILITIES</span>
        </div>

        <div className="absolute bottom-4 right-6 pointer-events-none text-[9px] font-mono text-white/30 tracking-wider">
          CLICK &amp; FLING ANY SKILL CAPSULE
        </div>

        {/* DISPERSED SKILL CAPSULES INSIDE THE GLASS BLOCK */}
        {skills.map((s) => {
          const isDragging = s.id === draggedId;
          const isPrimary = s.color === "emerald";

          return (
            <motion.div
              key={s.id}
              style={{
                width: s.width,
                transform: `translate3d(${s.x}px, ${s.y}px, 0px) rotate(${s.rot}deg)`,
              }}
              onPointerDown={(e) => handlePointerDown(s.id, e)}
              className={`absolute top-0 left-0 h-10 sm:h-11 rounded-full px-3.5 flex items-center justify-between text-xs font-mono font-bold select-none cursor-grab active:cursor-grabbing transition-shadow ${
                isDragging
                  ? "z-40 scale-105 shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(16,185,129,0.5)] border-emerald-400 bg-neutral-900/95"
                  : isPrimary
                  ? "z-10 shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-emerald-500/40 bg-neutral-900/80 hover:border-emerald-300 hover:bg-neutral-800/90 text-emerald-300"
                  : "z-10 shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-white/20 bg-neutral-900/75 hover:border-white/40 hover:bg-neutral-800/90 text-slate-200"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full shrink-0 mr-2 ${
                  isPrimary ? "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" : "bg-white/40"
                }`}
              />

              <span className="truncate tracking-wide text-[11px] flex-1 text-center font-semibold">
                {s.label}
              </span>

              <span className="text-[10px] text-white/30 ml-2 tracking-tighter">⋮⋮</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
