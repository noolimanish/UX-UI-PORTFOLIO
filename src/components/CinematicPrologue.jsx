import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function CinematicPrologue({ isOpen, onClose }) {
  const [stage, setStage] = useState(3); // Start fully visible so buttons are ready immediately

  useEffect(() => {
    if (!isOpen) return;
    setStage(3);

    // Allow ESC key to close prologue
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleEnter = (e) => {
    e?.stopPropagation?.();
    try {
      cinematicAudio.playProjectorClick(1400);
      cinematicAudio.playBraam();
    } catch {}
    onClose?.();
  };

  const handleSkip = (e) => {
    e?.stopPropagation?.();
    onClose?.();
  };

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[9999] bg-[#040507]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden cursor-pointer"
    >
      {/* Horizontal Anamorphic Lens Flare */}
      <div className="pointer-events-none absolute w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent blur-[1px]" />

      {/* Ambient Projector Cone Glow */}
      <div className="pointer-events-none absolute w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />

      {/* Cinematic Title Cards Progression */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 max-w-2xl space-y-8 cursor-default"
      >
        <div className="space-y-1 font-mono text-xs text-amber-400/90 tracking-[0.4em] uppercase">
          <span className="w-2 h-2 rounded-full bg-amber-400 inline-block mr-2 animate-ping" />
          PRESENTING A PRODUCTION BY
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl sm:text-7xl font-cinematic uppercase tracking-widest text-white drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]">
            MANISH NOOLI
          </h1>
          <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-widest uppercase">
            CREATIVE UI/UX & PRODUCT ARCHITECT
          </p>
        </div>

        <div className="space-y-6 pt-2">
          <p className="font-sans font-light text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            "Where human cognitive psychology, spring dynamics, and mathematical design systems collide."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleEnter}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-display font-extrabold text-sm uppercase tracking-widest active:scale-95 transition-all shadow-[0_0_40px_rgba(245,158,11,0.5)] flex items-center gap-2 cursor-pointer z-20"
            >
              <span>▶ ENTER SCREENING</span>
              <span className="text-xs font-mono font-bold">[ACT I]</span>
            </button>

            <button
              type="button"
              onClick={handleSkip}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer z-20"
            >
              SKIP INTRO [ESC]
            </button>
          </div>

          <div className="text-[10px] font-mono text-slate-500 tracking-widest pt-2">
            CLICK ANYWHERE OR PRESS ESC TO ENTER IMMEDIATELY
          </div>
        </div>
      </div>
    </div>
  );
}
