import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function StickyLanyardBadge({ onOpenDossier, currentTheme }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
    try {
      cinematicAudio.playTactileClick(1100);
    } catch {}
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("nmanish10@gmail.com");
    setCopied(true);
    try {
      cinematicAudio.playThemeChime(950);
    } catch {}
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed right-3 sm:right-6 top-24 sm:top-28 z-30 select-none pointer-events-auto">
      {/* 1. Hanging Lanyard Ribbon & Clasp with Gentle Physics Sway */}
      <motion.div
        animate={{
          rotate: [0, 1.2, -1.2, 0.8, -0.8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="origin-top flex flex-col items-center"
      >
        {/* Black Woven Lanyard Strap */}
        <div className="w-3 h-8 sm:h-10 bg-gradient-to-b from-black to-[#181a20] border-x border-white/10 shadow-sm relative">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/20" />
        </div>
        
        {/* Metallic Hanging Clip */}
        <div className="w-6 h-2.5 bg-gradient-to-b from-slate-400 via-slate-200 to-slate-500 rounded-sm shadow-md flex items-center justify-center">
          <div className="w-3 h-1 bg-black/40 rounded-full" />
        </div>

        {/* 2. 3D Flipping ID Card Container */}
        <div
          className="relative w-56 sm:w-64 h-[340px] sm:h-[370px] cursor-pointer mt-0.5"
          style={{ perspective: 1200 }}
          onClick={handleFlip}
          title="Click to Flip ID Card"
        >
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full h-full rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(16,185,129,0.12)]"
          >
            {/* ========================================================
                FRONT SIDE OF THE CARD (Matches User Uploaded Image 1)
                ======================================================== */}
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="absolute inset-0 rounded-[30px] bg-[#0c0d12] border border-white/10 p-4 sm:p-5 flex flex-col justify-between items-center text-white overflow-hidden shadow-2xl group"
            >
              {/* Subtle Ambient Vignette & Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.04] via-transparent to-white/[0.03] pointer-events-none" />
              
              {/* Card Punch Hole at Top */}
              <div className="w-10 h-2 rounded-full bg-[#050608] border border-white/10 shadow-inner -mt-1" />

              {/* Central Elevated Frame with Photo */}
              <div className="relative w-full flex-1 my-3 rounded-[22px] bg-[#16171f] border border-white/10 p-2 sm:p-2.5 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#1f212d] flex items-center justify-center">
                  {/* Photo of Manish Nooli */}
                  <div className="w-full h-full bg-gradient-to-b from-[#2a2d3d] to-[#12131a] flex flex-col items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                    <span className="text-6xl sm:text-7xl filter drop-shadow">👨‍💻</span>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        ONLINE // LVL 48
                      </span>
                    </div>
                  </div>
                </div>

                {/* "TAP TO REVEAL" Capsule Button (Exact match to Image 1) */}
                <div className="absolute bottom-4 inset-x-6 flex justify-center">
                  <div className="px-5 py-1.5 rounded-full bg-[#20222e]/90 hover:bg-[#2c2f3f] border border-white/15 text-[11px] font-sans font-medium text-slate-200 tracking-wide shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 group-hover:border-emerald-400/50">
                    <span>TAP TO REVEAL</span>
                    <span className="text-[10px] text-emerald-400">↻</span>
                  </div>
                </div>
              </div>

              {/* Front Footer Tag */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span className="font-semibold text-white tracking-wide">MANISH NOOLI</span>
                <span className="text-emerald-400 text-[9px]">UI/UX ARCHITECT</span>
              </div>
            </div>

            {/* ========================================================
                BACK SIDE OF THE CARD (Matches User Uploaded Image 2)
                ======================================================== */}
            <div
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="absolute inset-0 rounded-[30px] bg-[#0c0d12] border border-white/15 p-4 sm:p-5 flex flex-col justify-between text-white shadow-2xl"
            >
              {/* Subtle Emerald Sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-transparent pointer-events-none rounded-[30px]" />

              {/* Card Punch Hole */}
              <div className="w-10 h-2 mx-auto rounded-full bg-[#050608] border border-white/10 shadow-inner -mt-1" />

              {/* Top Avatar Logo Monogram "M" (Matches Image 2 "Z" badge!) */}
              <div className="flex flex-col items-center space-y-2 pt-1">
                <div className="w-11 h-11 rounded-2xl bg-[#1d1f2b] border border-white/15 flex items-center justify-center font-display font-extrabold text-lg text-emerald-400 shadow-md">
                  M
                </div>

                <div className="text-center space-y-0.5">
                  <h4 className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                    Manish Nooli
                  </h4>
                  <p className="font-sans text-xs text-slate-400 font-light">
                    Lead UI/UX &amp; Product Designer
                  </p>
                </div>
              </div>

              {/* Key Attributes Data Table (Aligned with colons like Image 2!) */}
              <div className="space-y-1.5 font-sans text-xs py-2 px-1 border-y border-white/10 my-auto">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 font-light">Role</span>
                  <span className="font-medium text-white">: Product Architect</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 font-light">Experience</span>
                  <span className="font-medium text-emerald-400">: 4+ Years Shipping</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 font-light">Specialty</span>
                  <span className="font-medium text-white">: Ergonomics &amp; Systems</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 font-light">Location</span>
                  <span className="font-medium text-white">: Hyderabad ✈ Remote</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 font-light">Status</span>
                  <span className="font-medium text-emerald-400 flex items-center gap-1">
                    : <span>🟢 Open for Hire</span>
                  </span>
                </div>
              </div>

              {/* Fast Connect Icons */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <a
                  href="https://www.linkedin.com/in/manish-nooli/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-black border border-white/10 text-[10px] font-mono transition-all text-slate-300"
                >
                  LinkedIn ↗
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-black border border-white/10 text-[10px] font-mono transition-all text-slate-300"
                >
                  {copied ? "Copied! ✓" : "Email ✉"}
                </button>
                <a
                  href="https://medium.com/@nmanish"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-black border border-white/10 text-[10px] font-mono transition-all text-slate-300"
                >
                  Medium ↗
                </a>
              </div>

              {/* "TAP TO FLIP BACK" Capsule Button (Exact match to Image 2) */}
              <div className="flex justify-center pt-2">
                <div className="px-5 py-1.5 rounded-full bg-[#1e202a] hover:bg-[#282b3a] border border-white/15 text-[11px] font-sans font-medium text-slate-200 tracking-wide shadow-lg transition-all flex items-center gap-1.5">
                  <span>TAP TO FLIP BACK</span>
                  <span className="text-[10px] text-emerald-400">↺</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
