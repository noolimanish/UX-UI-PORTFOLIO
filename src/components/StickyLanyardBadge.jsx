import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function StickyLanyardBadge({ onOpenDossier }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (isExpanded) {
          setIsExpanded(false);
          try {
            cinematicAudio.playTactileClick(850);
          } catch {}
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  const handleToggleExpand = (e) => {
    e.stopPropagation();
    try {
      if (!isExpanded) {
        cinematicAudio.playTactileClick(1250);
        cinematicAudio.playThemeChime(1100);
      } else {
        cinematicAudio.playTactileClick(850);
      }
    } catch {}
    setIsExpanded((prev) => !prev);
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
    <div
      ref={containerRef}
      className="fixed right-4 sm:right-8 top-20 sm:top-24 z-40 select-none pointer-events-auto"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 25,
          mass: 0.8,
        }}
        className={`relative overflow-hidden transition-shadow ${
          isExpanded
            ? "w-72 sm:w-80 rounded-[32px] sm:rounded-[36px] bg-[#0c0d14]/95 backdrop-blur-2xl border-2 border-[#f97316] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(249,115,22,0.25)] p-4 sm:p-5 text-white"
            : "w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#0c0d14]/90 backdrop-blur-xl border-2 border-[#f97316]/50 hover:border-[#f97316] shadow-[0_12px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(249,115,22,0.2)] p-1.5 cursor-pointer group"
        }`}
        onClick={!isExpanded ? handleToggleExpand : undefined}
      >
        {/* Subtle Drafting Mat Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:18px_18px]" />

        {/* ========================================================
            STATE 1: COMPACT SQUARE (CAR MODE)
            Just image with subtle online indicator & unlock cue
            ======================================================== */}
        {!isExpanded && (
          <motion.div
            layoutId="avatar-container"
            className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
          >
            {/* The Stylized Designer Portrait */}
            <img
              src="/images/avatar_portrait.png"
              alt="Manish Nooli"
              className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
            />

            {/* Glowing Green Online Dot */}
            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />

            {/* "Unlock / ID" Pill Tag on Hover */}
            <div className="absolute bottom-1 inset-x-1.5 py-0.5 rounded-md bg-black/80 backdrop-blur-sm border border-white/20 text-[7px] sm:text-[8px] font-mono font-bold text-center text-white flex items-center justify-center gap-1 shadow-md">
              <span className="text-[9px]">🔓</span>
              <span>UNFOLD</span>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STATE 2: TRANSFORMER EXPANDED CARD (ROBOT MODE)
            Unfolds into the designer profile inspired by user reference
            ======================================================== */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, delay: 0.05 }}
              className="relative z-10 flex flex-col space-y-3"
            >
              {/* Top Control Bar: Status Tag + Transformer Fold Button */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1.5">
                  <div className="px-2.5 py-0.5 rounded-full bg-[#dcfce7] text-[#14532d] border border-[#86efac] text-[9px] font-mono font-bold tracking-wider flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                  <span className="font-['Playfair_Display'] italic text-[11px] text-slate-300">
                    pixel alchemist
                  </span>
                </div>

                <button
                  onClick={handleToggleExpand}
                  className="w-7 h-7 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/20 hover:border-amber-400 flex items-center justify-center text-xs font-mono font-bold transition-all cursor-pointer shadow-md active:scale-90"
                  title="Fold back into square"
                >
                  ✕
                </button>
              </div>

              {/* Top Artistic Portrait with Dissolve Aesthetic */}
              <motion.div
                layoutId="avatar-container"
                className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden bg-black border-2 border-white/10 shadow-inner group"
              >
                <img
                  src="/images/avatar_portrait.png"
                  alt="Manish Nooli"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125"
                />

                {/* Left Edge Particle Dissolve / Grain Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Ambient Specular Arc */}
                <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

                {/* Top Left Badge */}
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[8px] font-mono text-emerald-300 font-bold flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>LEAD ARCHITECT</span>
                </div>
              </motion.div>

              {/* Profile Details: Name, Verified Badge, Role & Location */}
              <div className="space-y-1 pt-1 text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-['Anton',sans-serif] text-xl sm:text-2xl text-white uppercase tracking-wider leading-none">
                    Manish Nooli
                  </h4>
                  {/* Blue Verified Badge */}
                  <span
                    className="w-4 h-4 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-[9px] font-bold shadow-sm"
                    title="Verified Product Designer"
                  >
                    ✓
                  </span>
                </div>

                <p className="font-sans font-medium text-xs text-rose-400">
                  Senior Product Designer &amp; UI/UX
                </p>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                  <span className="text-amber-400">📍</span>
                  <span>Hyderabad, IN • Remote Worldwide</span>
                </div>
              </div>

              {/* Bio Quote (Image 1 Inspiration) */}
              <p className="font-sans text-xs text-slate-300 font-light leading-relaxed text-left">
                Crafting digital experiences where cognitive clarity meets high-craft usability.
              </p>

              {/* 3 Pill Stats: Experience, Shipped & Impact */}
              <div className="grid grid-cols-3 gap-1.5 pt-1 text-center font-mono text-[9px] sm:text-[10px] font-bold">
                <div className="py-1 px-1.5 rounded-xl bg-[#dcfce7] text-[#14532d] border border-[#86efac] shadow-sm">
                  💼 4+ Yrs
                </div>
                <div className="py-1 px-1.5 rounded-xl bg-[#fef9c3] text-[#713f12] border border-[#fde047] shadow-sm">
                  🗂️ 14 Shipped
                </div>
                <div className="py-1 px-1.5 rounded-xl bg-[#fed7aa] text-[#7c2d12] border border-[#fdba74] shadow-sm">
                  ⭐ 4.9 Impact
                </div>
              </div>

              {/* Full-Width Action Buttons (Image 1 "Follow +" Inspiration) */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onOpenDossier?.();
                    try {
                      cinematicAudio.playThemeChime(950);
                    } catch {}
                  }}
                  className="w-full py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-mono text-xs font-bold tracking-wider border-2 border-white/20 hover:border-emerald-400 shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Dossier / Resume</span>
                  <span className="text-emerald-400 text-sm font-bold">+</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-200 hover:text-white font-mono text-[10px] font-bold border border-white/15 transition-all cursor-pointer text-center"
                  >
                    {copied ? "✓ EMAIL COPIED" : "✉ COPY EMAIL"}
                  </button>

                  <button
                    onClick={handleToggleExpand}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white font-mono text-[10px] transition-all cursor-pointer flex items-center gap-1"
                    title="Fold back to compact car mode"
                  >
                    <span>FOLD</span>
                    <span className="text-amber-400">↻</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
