import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";
import EyeTrackingHireButton from "./EyeTrackingHireButton";

export default function FilmicHero({
  onNavigateToWork,
  onNavigateToCopassengers,
  onOpenShowreel,
  onOpenDossier,
  onRebootSystem,
  currentTheme,
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [activeTool, setActiveTool] = useState(null);

  const primaryColor = currentTheme?.primary || "#10B981";
  const glowColor = currentTheme?.glow || "rgba(16, 185, 129, 0.25)";

  // 3D Parallax tilt tracking
  useEffect(() => {
    let animId = null;
    const handleMouseMove = (e) => {
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;

        setTilt({
          rx: -dy * 3,
          ry: dx * 3,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  const handleToolClick = (toolName, soundFreq = 880) => {
    setActiveTool(toolName);
    try {
      cinematicAudio.playTactileClick(soundFreq);
    } catch {}
    setTimeout(() => setActiveTool(null), 1400);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] w-full bg-[#050608] text-white flex flex-col justify-between items-center px-4 sm:px-8 pt-24 sm:pt-28 pb-12 select-none overflow-hidden"
    >
      {/* Soft Ambient Emerald Vignette Glow */}
      <div
        className="absolute top-0 right-1/4 w-[45vw] h-[45vh] max-w-[550px] max-h-[550px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: primaryColor }}
      />

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Floating Figma Multi-Cursor Badges */}
      <motion.div
        animate={{
          x: [15, 55, 25, 15],
          y: [25, 65, 35, 25],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 z-20 hidden md:flex items-center gap-1.5 pointer-events-none"
      >
        <svg className="w-4 h-4 text-emerald-400 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.679z" />
        </svg>
        <span className="px-2.5 py-1 rounded-full text-black text-[10px] font-mono font-semibold bg-emerald-400 shadow-lg">
          MANISH NOOLI // LEAD ARCHITECT
        </span>
      </motion.div>

      <motion.div
        animate={{
          x: [-15, -45, -15, -15],
          y: [30, 60, 20, 30],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-36 right-20 z-20 hidden md:flex items-center gap-1.5 pointer-events-none"
      >
        <svg className="w-4 h-4 text-white drop-shadow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.679z" />
        </svg>
        <span className="px-2.5 py-1 rounded-full text-black text-[10px] font-mono font-semibold bg-white shadow-lg">
          DESIGN SYSTEM [ONLINE]
        </span>
      </motion.div>

      {/* 3D Main Stage with Clickable Interactive Design Tools */}
      <motion.div
        animate={{
          rotateX: tilt.rx,
          rotateY: tilt.ry,
        }}
        transition={{ type: "spring", stiffness: 140, damping: 22 }}
        className="relative z-10 w-full max-w-5xl my-auto flex flex-col items-center justify-center text-center py-6 sm:py-10"
      >
        {/* Clickable Tool 1: 🎨 Figma Color Tokens */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleToolClick("Figma Color Tokens", 880)}
          className="absolute -left-2 sm:left-4 top-2 sm:top-6 text-4xl sm:text-5xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] cursor-pointer z-30 group"
          title="Click to test Color Tokens"
        >
          🎨
          <span className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] bg-black/90 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap shadow-md">
            COLOR TOKENS
          </span>
        </motion.div>

        {/* Clickable Tool 2: 📐 Bezier Pen Tool */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleToolClick("Figma Vector Curves", 720)}
          className="absolute left-6 sm:left-12 bottom-4 text-3xl sm:text-4xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] cursor-pointer z-30 group"
          title="Click to draw Vector Curve"
        >
          📐
          <span className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] bg-black/90 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap shadow-md">
            BEZIER CURVE
          </span>
        </motion.div>

        {/* Clickable Tool 3: 📱 Interactive Smartphone Frame */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 12 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleToolClick("Mobile Prototype Frame", 600)}
          className="absolute -right-2 sm:right-6 top-4 sm:top-8 text-4xl sm:text-5xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] cursor-pointer z-30 group"
          title="Click to test Mobile UI"
        >
          📱
          <span className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] bg-black/90 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap shadow-md">
            MOBILE UI
          </span>
        </motion.div>

        {/* Clickable Tool 4: 🎬 Film Slate */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: -8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleToolClick("Director Slate Clap", 1200)}
          className="absolute right-8 sm:right-16 bottom-4 text-3xl sm:text-4xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] cursor-pointer z-30 group"
          title="Click to Clap Film Slate"
        >
          🎬
          <span className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] bg-black/90 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap shadow-md">
            CLAP SLATE
          </span>
        </motion.div>

        {/* Active Tool Toast Alert */}
        <AnimatePresence>
          {activeTool && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="mb-4 px-4 py-1.5 rounded-full font-mono font-medium text-xs shadow-lg bg-emerald-400 text-black"
            >
              ✓ SYSTEM ACTIVATED: {activeTool.toUpperCase()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            HERO MAIN TITLE: CLEAN, SCULPTURAL & HIGHLY READABLE
            Pure White & Emerald Green with Signature Accent Bar
            ======================================================== */}
        <div className="space-y-5 select-none">
          
          <div className="relative inline-block">
            {/* Sculptural Display Header: "MANISH NOOLI" */}
            <h1 className="font-display font-extrabold tracking-tight leading-[0.92] select-none text-6xl sm:text-8xl md:text-9xl text-white">
              MANISH <span className="text-emerald-400">NOOLI</span>
            </h1>

            {/* Signature Emerald Underline Bar */}
            <div className="w-full h-1.5 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.6)] mt-3" />
          </div>

          {/* Sub-Header Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-xs sm:text-sm tracking-wider text-slate-300">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium">
              LEAD UI/UX &amp; PRODUCT ARCHITECT
            </span>
            <span className="text-white/20">•</span>
            <span className="text-emerald-400 text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM: ONLINE [LVL 48]
            </span>
          </div>

          {/* Clean, Readable Sentence-Case Bio Copy (Outfit font, airy, zero squishing) */}
          <div className="pt-2 space-y-2.5 font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            <p className="text-white font-normal">
              Where human cognitive psychology, computer vision, and mathematical design systems collide into seamless digital products.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Explore verified case studies—featuring the published <strong className="text-emerald-400 font-medium">HelpFarm</strong> AI crop diagnosis platform and the <strong className="text-white font-medium">EatSure</strong> multi-restaurant single cart architecture.
            </p>
          </div>

        </div>

        {/* Futuristic Action Buttons Strip Featuring EyeTrackingHireButton */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 z-20">
          
          {/* Main Case Studies CTA */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              cinematicAudio.playTactileClick(1000);
              onNavigateToWork?.();
            }}
            className="px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-black font-sans font-semibold text-sm tracking-wide rounded-full transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] group"
          >
            <span>Explore Case Studies</span>
            <span className="text-xs font-mono opacity-80 group-hover:translate-x-0.5 transition-transform">
              [02 // QUESTS ↵]
            </span>
          </button>

          {/* "Hire me 👋" Button with Eye-Tracking Cursor Physics */}
          <EyeTrackingHireButton onClick={onOpenDossier} />

          {/* System Screenplay Resume Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              cinematicAudio.playThemeChime(850);
              onOpenDossier?.();
            }}
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-400/40 text-slate-200 hover:text-white font-sans text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Resume Dossier</span>
            <span className="text-xs text-emerald-400">↗</span>
          </button>
        </div>

      </motion.div>

      {/* Bottom Boarding Pass Ticket Stub */}
      <div className="relative z-10 w-full max-w-xs mx-auto -mb-6 flex justify-center">
        <button
          onClick={onOpenDossier}
          className="px-6 py-2 rounded-t-xl bg-[#0e111a] border-t border-x border-white/15 hover:border-emerald-400/40 text-white font-mono text-[10px] tracking-wider shadow-xl flex items-center justify-between gap-4 cursor-pointer hover:bg-[#141824] transition-all"
        >
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>||| | | |||| | |</span>
            <span>MANISH_NOOLI_RESUME.FIG</span>
          </div>
          <span className="font-semibold text-emerald-400">OPEN DOSSIER ↗</span>
        </button>
      </div>
    </section>
  );
}
