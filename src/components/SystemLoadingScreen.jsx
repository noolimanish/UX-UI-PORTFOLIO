import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function SystemLoadingScreen({ isOpen, onEnter }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    try {
      cinematicAudio.playTactileClick(1200);
    } catch {}

    setTimeout(() => {
      onEnter?.();
    }, 350);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.code === "Enter" || e.key === " ") {
        e.preventDefault();
        handleEnter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isExiting]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed inset-0 z-[10000] w-full h-full bg-[#050608] text-white flex items-center justify-center p-6 sm:p-12 overflow-hidden select-none"
      >
        {/* Soft Ambient Emerald Aura (Zero Red, Zero Two-Tone Clashing) */}
        <div className="absolute top-1/4 right-1/4 w-[45vw] h-[45vh] max-w-[550px] max-h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle Minimal Dot Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Clean, Unique 2-Column Layout */}
        <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
          
          {/* LEFT COLUMN: Clean Sculptural "HI!" with Emerald Accent */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start justify-center">
            <div className="relative inline-block">
              <div className="flex items-end font-display font-extrabold text-white tracking-tighter leading-[0.85] select-none text-8xl sm:text-9xl md:text-[11rem] drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                <span>H</span>
                <span className="ml-1 sm:ml-2">I</span>
                <span className="ml-1 sm:ml-2 text-emerald-400">!</span>
              </div>

              {/* Refined Emerald Accent Bar */}
              <div className="w-full h-1.5 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.7)] mt-3" />
            </div>
          </div>

          {/* RIGHT COLUMN: Clean, Elegant, Highly Readable Introduction */}
          <div className="md:col-span-7 space-y-6 max-w-lg">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>PRODUCT ARCHITECTURE SYSTEM</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Welcome to my personal portfolio.
              </h2>
            </div>

            <div className="space-y-3 font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <p>
                I design human-centered interfaces that combine cognitive ergonomics, computer vision, and mathematical design systems.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Explore real published case studies—including <strong className="text-emerald-400 font-medium">HelpFarm</strong> (AI agricultural leaf scanner) and the <strong className="text-white font-medium">EatSure Redesign</strong> (single-cart multi-brand dining).
              </p>
            </div>

            {/* Interactive "ENTER THE SYSTEM" Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleEnter}
                className="px-8 py-3.5 bg-black border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black font-sans font-semibold text-sm tracking-wide rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer active:scale-95 flex items-center justify-center gap-3 group"
              >
                <span>Enter Portfolio</span>
                <span className="text-xs font-mono opacity-80 group-hover:translate-x-0.5 transition-transform">
                  [ENTER ↵]
                </span>
              </button>
            </div>

            {/* Designer Identifier Footnote */}
            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-500 tracking-wider border-t border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>MANISH NOOLI // SENIOR PRODUCT ARCHITECT</span>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
