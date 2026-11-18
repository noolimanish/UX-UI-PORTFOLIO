import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function DirectorDossierModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText("nmanish10@gmail.com");
    setCopied(true);
    cinematicAudio.playThemeChime(950);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-2xl overflow-y-auto cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl rounded-[32px] sm:rounded-[40px] bg-[#0c0d14] border-2 border-[#f97316]/50 p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_35px_rgba(249,115,22,0.15)] text-white font-sans max-h-[92vh] overflow-y-auto cursor-default relative overflow-hidden"
        >
          {/* Subtle Drafting Grid Background */}
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* Top Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#0c0d14] border-2 border-[#f97316]/40 flex items-center justify-center text-xl shadow-md">
                🎬
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-['Anton',sans-serif] text-xl sm:text-2xl tracking-wider text-white uppercase leading-none">
                    DESIGN DOSSIER // MANISH NOOLI
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[11px] font-['Playfair_Display'] italic text-rose-400 mt-0.5">
                  Creative Product Architecture &amp; Lead UI/UX
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                cinematicAudio.playTactileClick(600);
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all text-sm font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Screenplay Content Body */}
          <div className="space-y-6 text-xs sm:text-sm relative z-10">
            {/* Opening Scene Tag */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#dcfce7] text-[#14532d] border border-[#86efac] font-bold uppercase tracking-wider inline-block">
                SCENE 01 // INT. PRODUCT DESIGN STUDIO — CONTINUOUS
              </span>
              <p className="text-slate-300 font-sans leading-relaxed text-xs sm:text-sm font-light">
                MANISH NOOLI sits before a high-refresh display. On screen: a complex enterprise interface reduced to fluid, organic momentum. No static wireframes. No brittle CSS hacks. Every interaction is calculated with damped Euler spring physics, zero-recalculation design tokens, and human cognitive clarity.
              </p>
            </div>

            {/* Core Value Proposition */}
            <div className="p-5 rounded-2xl bg-[#fef9c3]/[0.08] border border-[#fde047]/30 space-y-2">
              <span className="text-[10px] font-mono uppercase text-amber-300 font-bold tracking-wider block">
                CREATIVE PHILOSOPHY
              </span>
              <p className="text-slate-200 leading-relaxed font-light text-xs sm:text-sm">
                "I design software that gets out of your way. Where <strong className="text-amber-200 font-medium">cognitive psychology, spatial physics, and mathematical design systems</strong> collide. Instead of generating sterile, throwaway mockups, I bridge design and engineering by building living, accessible interfaces with 60 FPS spring physics, tactile sound synthesizers, and zero-dependency web performance."
              </p>
            </div>

            {/* Education & Availability Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Academic Foundation
                </span>
                <div className="font-bold text-white text-xs sm:text-sm">
                  B.Tech in Computer Science &amp; Engineering
                </div>
                <div className="text-[11px] font-mono text-amber-300">
                  SNIST Hyderabad (2020–2024, CGPA 8.0+)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Career Trajectory
                </span>
                <div className="font-bold text-emerald-300 text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open to Senior Product Roles</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Remote / Hybrid / Relocation Worldwide
                </div>
              </div>
            </div>

            {/* Design Process Storyboard */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase text-amber-300 font-bold tracking-wider block">
                THE 5-ACT PRODUCTION PIPELINE (HOW I BUILD)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-[#0c0d14] border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold">ACT I: COGNITIVE MAPPING</div>
                  <div className="text-slate-400 text-[11px] font-sans font-light">
                    Deconstruct user tasks using Hick's Law and Miller's 7±2 rule to eliminate choice paralysis.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0c0d14] border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold">ACT II: ATOMIC TOKEN SYSTEMS</div>
                  <div className="text-slate-400 text-[11px] font-sans font-light">
                    Define modular semantic scales on :root for instantaneous 0ms style recalculation.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0c0d14] border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold">ACT III: SPRING PHYSICS &amp; FEEL</div>
                  <div className="text-slate-400 text-[11px] font-sans font-light">
                    Implement damped Euler spring curves and haptic audio synthesizers on GPU composite layers.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0c0d14] border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold">ACT IV: ACCESSIBILITY &amp; ARIA</div>
                  <div className="text-slate-400 text-[11px] font-sans font-light">
                    Enforce 100% WAI-ARIA semantics, focus traps, and screen-reader navigable flows.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Transmission Action Bar */}
            <div className="p-5 rounded-2xl bg-[#0c0d14] border-2 border-[#f97316]/40 space-y-3">
              <div className="text-[10px] font-mono uppercase text-amber-300 font-bold tracking-wider">
                TRANSMISSION CHANNELS // GET IN TOUCH DIRECTLY
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-white/30 hover:border-white transition-all flex items-center gap-1.5 active:scale-95 shadow-md cursor-pointer"
                >
                  <span>{copied ? "✓ EMAIL COPIED" : "✉ NMANISH10@GMAIL.COM"}</span>
                </button>

                <a
                  href="https://www.behance.net/nmanish"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => cinematicAudio.playTactileClick(900)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold transition-all cursor-pointer"
                >
                  BEHANCE ARCHIVE ↗
                </a>

                <a
                  href="https://github.com/noolimanish"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => cinematicAudio.playTactileClick(950)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold transition-all cursor-pointer"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
