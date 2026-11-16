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
    cinematicAudio.playAnamorphicChime(950);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#090b10] border-2 border-emerald-400 p-6 sm:p-10 shadow-[0_0_60px_rgba(16,185,129,0.3)] text-white font-sans max-h-[92vh] overflow-y-auto film-gate cursor-default"
        >
          {/* Top Screenplay Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-lg text-amber-400">
                🎬
              </div>
              <div>
                <h3 className="font-display font-black text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
                  <span>SCREENPLAY DOSSIER // MANISH NOOLI</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                </h3>
                <p className="text-[11px] font-mono text-amber-400/80">
                  CLASSIFIED // CREATIVE PRODUCT ARCHITECTURE & UI/UX DIRECTION
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                cinematicAudio.playProjectorClick(600);
                onClose();
              }}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {/* Screenplay Content Body */}
          <div className="space-y-6 text-xs sm:text-sm">
            {/* Screenplay Scene Opening */}
            <div className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs space-y-2">
              <span className="text-amber-400 font-bold uppercase tracking-wider block">
                SCENE 01 // INT. PRODUCT DESIGN STUDIO — CONTINUOUS
              </span>
              <p className="text-slate-300 font-sans leading-relaxed text-xs sm:text-sm">
                MANISH NOOLI sits before a high-refresh display. On screen: a complex enterprise interface reduced to fluid, organic momentum. No static wireframes. No brittle CSS hacks. Every interaction is calculated with damped Euler spring physics, zero-recalculation design tokens, and human cognitive clarity.
              </p>
            </div>

            {/* Core Value Proposition */}
            <div className="p-5 rounded-2xl bg-amber-400/[0.04] border border-amber-400/25 space-y-2">
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                DIRECTOR'S STATEMENT & CREATIVE PHILOSOPHY
              </span>
              <p className="text-slate-200 leading-relaxed font-light text-xs sm:text-sm">
                "I design high-craft digital products where <strong className="text-amber-300 font-medium">cognitive psychology, spatial physics, and mathematical design systems</strong> collide. Instead of generating sterile, throwaway mockups, I bridge design and engineering by building living, accessible interfaces with 60 FPS spring physics, tactile sound synthesizers, and zero-dependency web performance."
              </p>
            </div>

            {/* Education & Availability Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Academic Foundation
                </span>
                <div className="font-bold text-white text-xs sm:text-sm">
                  B.Tech in Computer Science & Engineering
                </div>
                <div className="text-[11px] font-mono text-amber-400">
                  SNIST Hyderabad (2020–2024, CGPA 8.0+)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Career Trajectory
                </span>
                <div className="font-bold text-emerald-400 text-xs sm:text-sm flex items-center gap-1.5">
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
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                THE 5-ACT PRODUCTION PIPELINE (HOW I BUILD)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-amber-400 font-bold">ACT I: COGNITIVE MAPPING</div>
                  <div className="text-slate-400 text-[11px]">
                    Deconstruct user tasks using Hick's Law and Miller's 7±2 rule to eliminate choice paralysis.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-amber-400 font-bold">ACT II: ATOMIC TOKEN SYSTEMS</div>
                  <div className="text-slate-400 text-[11px]">
                    Define modular semantic scales on :root for instantaneous 0ms style recalculation.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-amber-400 font-bold">ACT III: SPRING PHYSICS & FEEL</div>
                  <div className="text-slate-400 text-[11px]">
                    Implement damped Euler spring curves and haptic audio synthesizers on GPU composite layers.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-amber-400 font-bold">ACT IV: ACCESSIBILITY & ARIA</div>
                  <div className="text-slate-400 text-[11px]">
                    Enforce 100% WAI-ARIA semantics, focus traps, and screen-reader navigable flows.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Transmission Action Bar */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-black to-zinc-900 border border-amber-400/40 space-y-3">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                TRANSMISSION CHANNELS // GET IN TOUCH WITH THE DIRECTOR
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                >
                  <span>{copied ? "✓ EMAIL COPIED" : "✉ NMANISH10@GMAIL.COM"}</span>
                </button>

                <a
                  href="https://www.behance.net/nmanish"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => cinematicAudio.playProjectorClick(900)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold transition-all"
                >
                  BEHANCE ARCHIVE ↗
                </a>

                <a
                  href="https://github.com/noolimanish"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => cinematicAudio.playProjectorClick(950)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold transition-all"
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
