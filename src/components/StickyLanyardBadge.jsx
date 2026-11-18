import React, { useState } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function StickyLanyardBadge({ onOpenDossier }) {
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
    <>
      {/* DESKTOP (lg screens): Hanging 3D Flipping Lanyard Badge */}
      <div className="hidden lg:block fixed right-6 top-24 sm:top-28 z-30 select-none pointer-events-auto">
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

          {/* 3D Flipping ID Card Container */}
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
              className="relative w-full h-full rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(249,115,22,0.15)]"
            >
              {/* FRONT SIDE OF THE CARD */}
              <div
                style={{ backfaceVisibility: "hidden" }}
                className="absolute inset-0 rounded-[30px] bg-[#0c0d14] border-2 border-[#f97316]/50 p-4 sm:p-5 flex flex-col justify-between items-center text-white overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="w-10 h-2 rounded-full bg-[#050608] border border-white/10 shadow-inner -mt-1" />

                <div className="relative w-full flex-1 my-3 rounded-[22px] bg-[#16171f] border border-white/10 p-2 sm:p-2.5 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                  <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#1f212d] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-b from-[#2a2d3d] to-[#12131a] flex flex-col items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                      <span className="text-6xl sm:text-7xl filter drop-shadow">👨‍💻</span>
                      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/70 px-2.5 py-0.5 rounded-full border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[8px] font-mono text-emerald-300 font-bold uppercase tracking-wider">
                          ONLINE // LVL 48
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 inset-x-6 flex justify-center">
                    <div className="px-4 py-1 rounded-full bg-black/80 hover:bg-black border border-white/20 text-[10px] font-mono font-bold text-slate-200 tracking-wider shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 group-hover:border-[#f97316]">
                      <span>TAP TO FLIP</span>
                      <span className="text-[10px] text-amber-300">↻</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-300 pt-1">
                  <span className="font-bold text-white tracking-wide">MANISH NOOLI</span>
                  <span className="text-amber-300 text-[9px] font-bold">PRODUCT ARCHITECT</span>
                </div>
              </div>

              {/* BACK SIDE OF THE CARD */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 rounded-[30px] bg-[#0c0d14] border-2 border-[#f97316]/50 p-4 sm:p-5 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="w-10 h-2 mx-auto rounded-full bg-[#050608] border border-white/10 shadow-inner -mt-1" />

                <div className="flex flex-col items-center space-y-1.5 pt-1 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-[#0c0d14] border-2 border-[#f97316]/40 flex items-center justify-center font-['Anton',sans-serif] text-lg text-amber-300 shadow-md">
                    MN
                  </div>

                  <div className="text-center space-y-0.5">
                    <h4 className="font-['Anton',sans-serif] text-base sm:text-lg text-white uppercase tracking-wider leading-none">
                      Manish Nooli
                    </h4>
                    <p className="font-['Playfair_Display'] italic text-xs text-rose-400">
                      Product Designer &amp; UI/UX
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 font-sans text-xs py-2 px-1 border-y border-white/10 my-auto relative z-10">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400 font-light">Role</span>
                    <span className="font-medium text-white">: Lead Designer</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400 font-light">Experience</span>
                    <span className="font-medium text-emerald-300">: 4+ Years Shipping</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400 font-light">Specialty</span>
                    <span className="font-medium text-white">: Cognitive Systems</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400 font-light">Location</span>
                    <span className="font-medium text-white">: Hyderabad, IN</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1 relative z-10">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1 rounded-full bg-[#dcfce7] text-[#14532d] border border-[#86efac] text-[10px] font-mono font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    {copied ? "✓ COPIED" : "✉ EMAIL"}
                  </button>
                  {onOpenDossier && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDossier();
                      }}
                      className="px-3 py-1 rounded-full bg-[#fef9c3] text-[#713f12] border border-[#fde047] text-[10px] font-mono font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      DOSSIER ↗
                    </button>
                  )}
                </div>

                <div className="flex justify-center pt-1 relative z-10">
                  <div className="px-4 py-1 rounded-full bg-black/60 text-[10px] font-mono text-slate-300 flex items-center gap-1 border border-white/10">
                    <span>FLIP BACK</span>
                    <span className="text-amber-300">↺</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* MOBILE (screens < lg): Sleek Floating Identity Pill Button */}
      <div className="block lg:hidden fixed bottom-6 right-4 z-40">
        <button
          onClick={onOpenDossier}
          className="px-4 py-2.5 rounded-full bg-[#0c0d14]/95 backdrop-blur-xl border-2 border-[#f97316]/50 shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(249,115,22,0.3)] text-white text-xs font-mono font-bold flex items-center gap-2 active:scale-95 cursor-pointer"
          title="Open Manish Nooli Profile Dossier"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>👨‍💻 ID BADGE</span>
        </button>
      </div>
    </>
  );
}
