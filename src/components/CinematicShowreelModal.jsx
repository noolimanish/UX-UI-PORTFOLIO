import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const REEL_SCENES = [
  {
    act: "PROLOGUE",
    title: "THE CINEMATICS OF INTERFACE FEEL",
    subtitle: "A PRODUCTION DIRECTED BY MANISH NOOLI",
    genre: "PRODUCT DESIGN DIRECTION & INTERACTION ARCHITECTURE",
    stats: "24.000 FPS LOCKED // 100% WCAG AAA",
    gradient: "from-amber-950/60 via-black to-zinc-950",
    accent: "#f5bc44",
  },
  {
    act: "SCENE 01",
    title: "NEXUS // FIGMA DESIGN SYSTEM",
    subtitle: "120+ ATOMIC COMPONENT VARIANTS & AUTO-LAYOUT 5.0",
    genre: "ENTERPRISE DESIGN SYSTEMS & TOKEN STUDIO",
    stats: "42 SEMANTIC TOKENS // 0ms STYLE RECALC",
    gradient: "from-blue-950/50 via-black to-zinc-950",
    accent: "#6385d6",
  },
  {
    act: "SCENE 02",
    title: "FINFLOW // MOBILE BANKING REDESIGN",
    subtitle: "3-STEP PROGRESSIVE ONBOARDING & 1-TAP CHECKOUT",
    genre: "FINTECH PRODUCT DESIGN & HICK'S LAW",
    stats: "+38% CONVERSION // 94 / 100 SUS SCORE",
    gradient: "from-amber-900/50 via-black to-amber-950/40",
    accent: "#f5bc44",
  },
  {
    act: "SCENE 03",
    title: "AURA // SENSORY HABIT TRACKER",
    subtitle: "DAMPED SPRING PHYSICS & 432Hz HARMONIC AUDIO",
    genre: "GAMIFIED PRODUCT PSYCHOLOGY & MICRO-DELIGHT",
    stats: "+54% 30-DAY RETENTION // APP STORE 4.9★",
    gradient: "from-purple-950/40 via-black to-amber-950/30",
    accent: "#f472b6",
  },
  {
    act: "SCENE 04",
    title: "ORBIT // B2B SAAS SECURITY DASHBOARD",
    subtitle: "HICK'S LAW DATA HIERARCHY & CONTEXTUAL DRILL-DOWN",
    genre: "ENTERPRISE B2B PRODUCT ARCHITECTURE",
    stats: "-42% TRIAGE TIME // 3.8X TASK SPEEDUP",
    gradient: "from-emerald-950/40 via-black to-zinc-950",
    accent: "#4ade80",
  },
  {
    act: "EPILOGUE",
    title: "DIRECTED BY MANISH NOOLI",
    subtitle: "OPEN TO SENIOR PRODUCT DESIGN & UI/UX ROLES",
    genre: "B.TECH CS • SNIST HYDERABAD • WORLDWIDE REMOTE",
    stats: "TRANSMISSION: NMANISH10@GMAIL.COM",
    gradient: "from-amber-950/50 via-black to-zinc-950",
    accent: "#f5bc44",
  },
];

export default function CinematicShowreelModal({ isOpen, onClose }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance scenes when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setCurrentScene((prev) => {
        const next = (prev + 1) % REEL_SCENES.length;
        cinematicAudio.playProjectorClick(900);
        if (next === 0 || next === 1) cinematicAudio.playBraam();
        return next;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scene = REEL_SCENES[currentScene];

  const handleNext = () => {
    setCurrentScene((prev) => (prev + 1) % REEL_SCENES.length);
    cinematicAudio.playProjectorClick(1100);
  };

  const handlePrev = () => {
    setCurrentScene((prev) => (prev > 0 ? prev - 1 : REEL_SCENES.length - 1));
    cinematicAudio.playProjectorClick(800);
  };

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-4xl rounded-3xl bg-[#0a0a0f] border-2 border-emerald-400 shadow-[0_0_60px_rgba(16,185,129,0.35)] text-white overflow-hidden flex flex-col font-sans cursor-default"
        >
          {/* Top Cinema Letterbox Bar */}
          <div className="px-6 py-4 bg-black border-b border-white/10 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-bold text-white tracking-widest uppercase">
                4K PRODUCT SHOWREEL // SCENE {currentScene + 1} OF {REEL_SCENES.length}
              </span>
            </div>

            <button
              onClick={() => {
                cinematicAudio.playProjectorClick(600);
                onClose();
              }}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-all"
            >
              ✕
            </button>
          </div>

          {/* Reel Display Canvas */}
          <div
            className={`relative min-h-[360px] sm:min-h-[420px] p-8 sm:p-14 flex flex-col justify-between bg-gradient-to-br ${scene.gradient} transition-all duration-700`}
          >
            {/* Act Identifier */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-3 py-1 rounded bg-black/60 border border-white/15 text-[#f5bc44] font-bold">
                {scene.act}
              </span>
              <span className="text-slate-400 uppercase tracking-widest">{scene.genre}</span>
            </div>

            {/* Main Cinema Titles */}
            <div className="space-y-3 my-auto">
              <motion.h2
                key={scene.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-5xl md:text-6xl font-titan uppercase tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              >
                {scene.title}
              </motion.h2>

              <motion.p
                key={scene.subtitle}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xs sm:text-base font-mono text-[#f5bc44] uppercase tracking-wider"
              >
                "{scene.subtitle}"
              </motion.p>
            </div>

            {/* Bottom Scene Specs Strip */}
            <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">{scene.stats}</span>
              <span className="text-slate-500 hidden sm:inline">24.000 FPS // 35MM GRAIN</span>
            </div>
          </div>

          {/* Bottom Scrubbing & Playback Bar */}
          <div className="px-6 py-4 bg-black border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  cinematicAudio.playProjectorClick(900);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold cursor-pointer"
              >
                {isPlaying ? "❚❚ PAUSE" : "▶ PLAY"}
              </button>

              <button
                onClick={handlePrev}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 cursor-pointer"
              >
                ◀ PREV
              </button>

              <button
                onClick={handleNext}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 cursor-pointer"
              >
                NEXT ▶
              </button>
            </div>

            {/* Scene progress dots */}
            <div className="flex gap-2">
              {REEL_SCENES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentScene(i);
                    cinematicAudio.playProjectorClick(900);
                  }}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    currentScene === i
                      ? "bg-[#f5bc44] scale-125 shadow-[0_0_8px_rgba(245,188,68,0.8)]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
