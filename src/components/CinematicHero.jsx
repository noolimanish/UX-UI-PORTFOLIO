import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function CinematicHero({
  onNavigateToProductions,
  onNavigateToCraftLab,
  onOpenDossier,
  onOpenShowreel,
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [takeNumber, setTakeNumber] = useState(4);
  const [activePill, setActivePill] = useState(null);

  // 3D Parallax Tilt Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      setTilt({
        rx: -dy * 5,
        ry: dx * 5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClapSlate = () => {
    setTakeNumber((prev) => prev + 1);
    cinematicAudio.playProjectorClick(1400);
    cinematicAudio.playBraam();
  };

  const handlePillClick = (label, freq) => {
    setActivePill(label);
    cinematicAudio.playAnamorphicChime(freq);
    setTimeout(() => setActivePill(null), 350);
  };

  return (
    <section
      id="act-1"
      className="relative min-h-[96vh] flex flex-col justify-center items-center px-4 sm:px-8 pt-24 pb-16 overflow-hidden perspective-[1200px]"
    >
      {/* Architectural Storyboard Grid Lines Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="w-full h-full grid grid-cols-6 grid-rows-6 border border-white/10">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border-r border-b border-white/[0.05]" />
          ))}
        </div>
      </div>

      {/* 3D Camera Space */}
      <motion.div
        animate={{
          rotateX: tilt.rx,
          rotateY: tilt.ry,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-6"
      >
        {/* Top Editorial Triple-Column Header (From attached image layout) */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/[0.08] pb-5 text-left">
          {/* Left: Design / Code Credits */}
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-8 bg-amber-400 rounded-full" />
            <div className="font-mono text-xs">
              <div className="text-white font-bold">
                Design by <span className="text-amber-400">Manish Nooli</span>
              </div>
              <div className="text-slate-400 text-[11px]">
                Code into <strong className="text-white font-normal">Solutions.</strong>
              </div>
            </div>
          </div>

          {/* Center: MyCreative Hunch Moniker */}
          <div className="text-center group cursor-pointer" onClick={handleClapSlate}>
            <div className="flex items-center justify-center gap-1.5">
              <span className="font-serifTitle italic text-xl sm:text-2xl text-slate-200">
                MyCreative
              </span>
              <span className="font-sans font-black text-xl sm:text-2xl text-[#f24e1e] drop-shadow-[0_0_15px_rgba(242,78,30,0.5)]">
                Hunch
              </span>
            </div>
            <div className="text-[10px] font-mono text-amber-400 tracking-widest uppercase opacity-80">
              ROLL 01 // SCENE 0{takeNumber} [CLICK TO CLAP]
            </div>
          </div>

          {/* Right: Technical Precision Markers */}
          <div className="flex items-center gap-2.5 sm:text-right">
            <div className="font-mono text-xs hidden sm:block">
              <div className="text-white font-bold">
                Built with <strong className="text-amber-400 font-semibold">Precision.</strong>
              </div>
              <div className="text-slate-400 text-[11px]">
                Driven by <strong className="text-white font-normal">Innovation.</strong>
              </div>
            </div>
            <div className="w-1 h-8 bg-amber-400 rounded-full hidden sm:block" />
          </div>
        </div>

        {/* Chunky Cut-out Brutalist DEV Badge (From Image 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white/[0.04] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        >
          <span className="font-dela text-base sm:text-lg text-amber-400 tracking-wider">
            DEV
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-xs uppercase text-slate-300 tracking-widest">
            CINEMATIC UI/UX & PRODUCT ENGINEERING
          </span>
        </motion.div>

        {/* THE ICONIC HERO HEADLINE (From Image 2) */}
        <div className="space-y-1 sm:space-y-2 select-none w-full">
          {/* Line 1: WHERE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex justify-center"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-anton uppercase tracking-tight text-white leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
              WHERE
            </h1>
          </motion.div>

          {/* Line 2: CODE [FLOATING BADGES] MEETS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 leading-none"
          >
            {/* CODE word (Fiery red-orange gradient) */}
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-anton uppercase tracking-tight text-[#f24e1e] drop-shadow-[0_0_40px_rgba(242,78,30,0.4)]">
              CODE
            </span>

            {/* Floating Overlapping Pills Cluster */}
            <div className="relative inline-flex flex-col items-center justify-center py-2 px-2 -my-2 sm:my-0 z-20">
              <div className="flex flex-wrap justify-center gap-1.5 max-w-[190px] sm:max-w-[240px]">
                {/* Pill 1: AI */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePillClick("AI.", 880)}
                  className={`px-3 py-1 rounded-full bg-[#facc15] text-black font-sans font-black text-[11px] sm:text-xs shadow-[0_4px_14px_rgba(250,204,21,0.5)] transition-transform ${
                    activePill === "AI." ? "scale-110" : ""
                  }`}
                >
                  AI.
                </motion.button>

                {/* Pill 2: SYSTEMS */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePillClick("SYSTEMS.", 740)}
                  className={`px-3.5 py-1 rounded-full bg-[#ef4444] text-white font-sans font-black text-[11px] sm:text-xs shadow-[0_4px_14px_rgba(239,68,68,0.5)] transition-transform ${
                    activePill === "SYSTEMS." ? "scale-110" : ""
                  }`}
                >
                  SYSTEMS.
                </motion.button>

                {/* Pill 3: WEB */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: -3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePillClick("WEB.", 660)}
                  className={`px-3.5 py-1 rounded-full bg-[#f97316] text-white font-sans font-black text-[11px] sm:text-xs shadow-[0_4px_14px_rgba(249,115,22,0.5)] transition-transform ${
                    activePill === "WEB." ? "scale-110" : ""
                  }`}
                >
                  WEB.
                </motion.button>

                {/* Pill 4: APIs */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePillClick("APIs.", 580)}
                  className={`px-3.5 py-1 rounded-full bg-[#06b6d4] text-black font-sans font-black text-[11px] sm:text-xs shadow-[0_4px_14px_rgba(6,182,212,0.5)] transition-transform ${
                    activePill === "APIs." ? "scale-110" : ""
                  }`}
                >
                  APIs.
                </motion.button>

                {/* Pill 5: AUTOMATION */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: -1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePillClick("AUTOMATION.", 520)}
                  className={`px-3.5 py-1 rounded-full bg-[#0284c7] text-white font-sans font-black text-[11px] sm:text-xs shadow-[0_4px_14px_rgba(2,132,199,0.5)] transition-transform ${
                    activePill === "AUTOMATION." ? "scale-110" : ""
                  }`}
                >
                  AUTOMATION.
                </motion.button>
              </div>
            </div>

            {/* MEETS word (Warm amber golden gradient) */}
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-anton uppercase tracking-tight text-[#f59e0b] drop-shadow-[0_0_40px_rgba(245,158,11,0.4)]">
              MEETS
            </span>
          </motion.div>

          {/* Line 3: CREATIVE THINKING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-anton uppercase tracking-tight text-white/90 leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
              CREATIVE THINKING
            </h2>
          </motion.div>
        </div>

        {/* Generic & Director Philosophy Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-300 text-sm sm:text-base lg:text-lg font-sans font-light max-w-2xl mx-auto leading-relaxed pt-2"
        >
          Directing digital products at the exact intersection of <strong className="text-amber-300 font-medium">cognitive human psychology</strong>, <strong className="text-amber-300 font-medium">damped spring physics</strong>, and <strong className="text-amber-300 font-medium">production-ready code architecture</strong>.
        </motion.p>

        {/* Action Trigger Deck */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          {/* Showreel Button */}
          <button
            onClick={() => {
              cinematicAudio.playBraam();
              onOpenShowreel?.();
            }}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-display font-extrabold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_35px_rgba(245,158,11,0.4)] flex items-center gap-2.5 cursor-pointer"
          >
            <span className="text-sm">▶</span>
            <span>WATCH SHOWREEL (4K)</span>
          </button>

          {/* Productions Jump */}
          <button
            onClick={() => {
              cinematicAudio.playProjectorClick(950);
              onNavigateToProductions?.();
            }}
            className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/50 text-white font-mono text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>📁</span>
            <span>EXPLORE PRODUCTIONS</span>
          </button>

          {/* Craft Lab Jump */}
          <button
            onClick={() => {
              cinematicAudio.playProjectorClick(1100);
              onNavigateToCraftLab?.();
            }}
            className="px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>⚡</span>
            <span>CRAFT LAB</span>
          </button>

          {/* Dossier Button */}
          <button
            onClick={() => {
              cinematicAudio.playAnamorphicChime(640);
              onOpenDossier?.();
            }}
            className="px-5 py-3.5 rounded-xl bg-black/50 hover:bg-black/70 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>📜</span>
            <span>DOSSIER</span>
          </button>
        </motion.div>

        {/* Telemetry Stats Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08] text-left"
        >
          <div className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-1">
            <div className="text-[10px] font-mono uppercase text-amber-400/90 tracking-wider">
              INTERACTION FPS
            </div>
            <div className="text-sm font-mono font-bold text-white">60.0 LOCKED</div>
            <div className="text-[11px] font-sans text-slate-400">Euler spring curves</div>
          </div>

          <div className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-1">
            <div className="text-[10px] font-mono uppercase text-amber-400/90 tracking-wider">
              TOKEN SHIFT SPEED
            </div>
            <div className="text-sm font-mono font-bold text-white">0ms RECALC</div>
            <div className="text-[11px] font-sans text-slate-400">Pure :root variables</div>
          </div>

          <div className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-1">
            <div className="text-[10px] font-mono uppercase text-amber-400/90 tracking-wider">
              CONCURRENCY ENGINE
            </div>
            <div className="text-sm font-mono font-bold text-white">10,000+ / SEC</div>
            <div className="text-[11px] font-sans text-slate-400">Web Worker threads</div>
          </div>

          <div className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-1">
            <div className="text-[10px] font-mono uppercase text-amber-400/90 tracking-wider">
              ACCESSIBILITY
            </div>
            <div className="text-sm font-mono font-bold text-white">100% WAI-ARIA</div>
            <div className="text-[11px] font-sans text-slate-400">Universal keyboard focus</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
