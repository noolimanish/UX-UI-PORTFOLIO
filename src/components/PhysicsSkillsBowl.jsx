import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const BUCKET_SKILLS = [
  { id: "s1", label: "Visual Design", width: 145, theme: "mint" },
  { id: "s2", label: "UI Design", width: 125, theme: "yellow" },
  { id: "s3", label: "Design Systems", width: 155, theme: "coral" },
  { id: "s4", label: "Motion Design / Micro‑interactions", width: 270, theme: "lavender" },
  { id: "s5", label: "UX Writing", width: 135, theme: "mint" },
  { id: "s6", label: "User Research", width: 150, theme: "yellow" },
  { id: "s7", label: "Usability Testing", width: 165, theme: "coral" },
  { id: "s8", label: "Wireframing", width: 140, theme: "lavender" },
  { id: "s9", label: "Prototyping", width: 135, theme: "mint" },
  { id: "s10", label: "User Flows", width: 130, theme: "yellow" },
  { id: "s11", label: "Mockups", width: 120, theme: "coral" },
  { id: "s12", label: "Information Architecture (IA)", width: 245, theme: "lavender" },
  { id: "s13", label: "Interaction Design", width: 175, theme: "mint" },
];

const CAPSULE_STYLES = {
  mint: {
    bg: "bg-[#dcfce7]",
    text: "text-[#14532d]",
    border: "border-[#86efac]",
    dot: "bg-[#16a34a]",
    shadow: "shadow-[0_8px_20px_rgba(20,83,45,0.18)]",
  },
  yellow: {
    bg: "bg-[#fef9c3]",
    text: "text-[#713f12]",
    border: "border-[#fde047]",
    dot: "bg-[#ca8a04]",
    shadow: "shadow-[0_8px_20px_rgba(113,63,18,0.18)]",
  },
  coral: {
    bg: "bg-[#fed7aa]",
    text: "text-[#7c2d12]",
    border: "border-[#fdba74]",
    dot: "bg-[#ea580c]",
    shadow: "shadow-[0_8px_20px_rgba(124,45,18,0.18)]",
  },
  lavender: {
    bg: "bg-[#e0e7ff]",
    text: "text-[#3730a3]",
    border: "border-[#a5b4fc]",
    dot: "bg-[#6366f1]",
    shadow: "shadow-[0_8px_20px_rgba(55,48,163,0.18)]",
  },
};

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
        width: isMobile ? Math.min(s.width * 0.78, 170) : s.width,
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
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto select-none border-t border-white/10"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* SECTION HEADER: Editorial Font Mixing & Pastel Stickers (Hero Matching) */}
      <div className="relative text-center space-y-4 max-w-3xl mx-auto mb-10">
        
        {/* Top Pastel Sticker Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 flex-wrap">
          <div className="px-3.5 py-1 rounded-full bg-[#dcfce7] text-[#14532d] border border-[#86efac] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[-2deg]">
            TOOLKIT
          </div>
          <span className="font-['Playfair_Display'] italic text-slate-300 text-sm sm:text-base font-normal tracking-wide">
            what I have in my bucket
          </span>
          <div className="px-3.5 py-1 rounded-full bg-[#fef9c3] text-[#713f12] border border-[#fde047] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[2deg]">
            13 DISCIPLINES
          </div>
        </div>

        {/* Masterful Headline with Font Mixing */}
        <div className="space-y-1">
          <h2 className="font-['Anton',sans-serif] text-5xl sm:text-7xl md:text-8xl tracking-wider text-white uppercase leading-none filter drop-shadow">
            SKILLS &amp; EXPERTISE
          </h2>
          <div className="-mt-3 sm:-mt-6">
            <span className="font-['Playfair_Display'] italic font-normal text-rose-400 text-2xl sm:text-4xl md:text-5xl tracking-tight filter drop-shadow-md">
              Tactile Glass Bucket
            </span>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed pt-2">
          Pick, toss, and fling any capability capsule below. Real 2D gravity physics simulate how each discipline interacts in production.
        </p>

        {/* Disperse Action Button (Sleek Black Button with White Border) */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={handleDisperse}
            className="px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-mono text-xs sm:text-sm font-bold tracking-wider border-2 border-white/20 hover:border-amber-400 shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            title="Disperse and shake all skill capsules in the glass block"
          >
            <span className="text-amber-400">⚡</span>
            <span>SHAKE &amp; DISPERSE BUCKET</span>
          </button>
        </div>
      </div>

      {/* 3D GLASS BLOCK CONTAINER: Warm Architectural Grid + Specular Reflections */}
      <div
        ref={containerRef}
        className="relative w-full h-[470px] sm:h-[500px] rounded-[36px] sm:rounded-[44px] bg-[#0c0d14]/85 backdrop-blur-3xl border-2 border-[#f97316]/40 hover:border-[#f97316]/70 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_35px_rgba(249,115,22,0.12),inset_0_2px_4px_rgba(255,255,255,0.25)] overflow-hidden cursor-grab active:cursor-grabbing transition-colors"
      >
        {/* Subtle Drafting Grid Pattern inside Glass Chamber */}
        <div className="absolute inset-0 opacity-[0.045] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Top Edge Specular Glass Glare Reflection */}
        <div className="absolute top-0 inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-20" />

        {/* Warm Ambient Underglow Spots */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        {/* Status Watermark */}
        <div className="absolute top-4 left-6 pointer-events-none text-[9px] font-mono tracking-widest text-white/40 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>GLASS BUCKET // 13 VERIFIED CAPABILITIES</span>
        </div>

        <div className="absolute bottom-4 right-6 pointer-events-none text-[9px] font-mono text-white/40 tracking-wider">
          DRAG &amp; FLING ANY SKILL CAPSULE
        </div>

        {/* DISPERSED SKILL CAPSULES INSIDE GLASS BLOCK (Pastel Sticker System) */}
        {skills.map((s) => {
          const isDragging = s.id === draggedId;
          const style = CAPSULE_STYLES[s.theme] || CAPSULE_STYLES.mint;

          return (
            <motion.div
              key={s.id}
              style={{
                width: s.width,
                transform: `translate3d(${s.x}px, ${s.y}px, 0px) rotate(${s.rot}deg)`,
              }}
              onPointerDown={(e) => handlePointerDown(s.id, e)}
              className={`absolute top-0 left-0 h-10 sm:h-11 rounded-full px-3.5 flex items-center justify-between text-xs font-mono font-bold select-none cursor-grab active:cursor-grabbing border-2 ${
                style.bg
              } ${style.text} ${style.border} ${style.shadow} transition-shadow ${
                isDragging
                  ? "z-40 scale-110 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.4)] ring-2 ring-white"
                  : "z-10 hover:scale-105"
              }`}
            >
              {/* Dot indicator matching theme */}
              <span className={`w-2 h-2 rounded-full shrink-0 mr-2 ${style.dot}`} />

              <span className="truncate tracking-tight text-[11px] sm:text-xs flex-1 text-center font-bold">
                {s.label}
              </span>

              <span className="text-[10px] opacity-40 ml-2 tracking-tighter">⋮⋮</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
