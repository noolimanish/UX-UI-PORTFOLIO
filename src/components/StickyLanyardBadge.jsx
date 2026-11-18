import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function StickyLanyardBadge({ onOpenDossier }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragDistanceRef = useRef(0);

  // Motion value for horizontal drag pendulum motion
  const dragX = useMotionValue(0);

  // Angular pendulum tilt derived from horizontal drag
  const pendulumRotate = useTransform(dragX, [-120, 0, 120], [-18, 0, 18]);

  const handleCardClick = (e) => {
    // If the user was dragging the pendulum, don't flip
    if (dragDistanceRef.current > 5) return;

    e.stopPropagation();
    setIsFlipped((prev) => !prev);
    try {
      cinematicAudio.playTactileClick(1150);
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
      {/* ========================================================
          HANGING PENDULUM GLASS BADGE (Sticky Fixed on Screen)
          Suspended from top of viewport, stays fixed while scrolling!
          ======================================================== */}
      <div className="hidden sm:block fixed top-0 right-4 sm:right-6 lg:right-10 z-40 select-none pointer-events-auto">
        
        {/* Top Ceiling Anchor Mount */}
        <div className="mx-auto w-6 h-2.5 bg-gradient-to-b from-neutral-800 to-neutral-900 border-x border-b border-white/20 rounded-b shadow-sm flex items-center justify-center">
          <div className="w-2.5 h-0.5 bg-neutral-950 rounded-full" />
        </div>

        {/* PENDULUM SYSTEM: Swings from ceiling pivot */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.35}
          style={{
            x: dragX,
            rotate: pendulumRotate,
            transformOrigin: "top center",
          }}
          onDragStart={() => {
            setIsDragging(true);
            dragDistanceRef.current = 0;
            try {
              cinematicAudio.playTactileClick(1000);
            } catch {}
          }}
          onDrag={(e, info) => {
            dragDistanceRef.current = Math.abs(info.offset.x);
          }}
          onDragEnd={() => {
            setIsDragging(false);
            try {
              cinematicAudio.playTactileClick(850);
            } catch {}
            setTimeout(() => {
              dragDistanceRef.current = 0;
            }, 100);
          }}
          animate={
            !isDragging
              ? {
                  rotate: [-2, 2, -2],
                }
              : undefined
          }
          transition={
            !isDragging
              ? {
                  rotate: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : { type: "spring", stiffness: 240, damping: 15 }
          }
          className="flex flex-col items-center cursor-grab active:cursor-grabbing origin-top"
          title="Drag to swing pendulum • Click to flip details!"
        >
          {/* Compact Braided Lanyard String */}
          <div className="relative w-1 h-10 sm:h-12 bg-gradient-to-b from-[#22242a] via-[#16171d] to-[#2c2f3a] shadow-sm flex items-center justify-center">
            <div className="absolute inset-y-0 w-[0.5px] bg-white/20" />
          </div>

          {/* Chrome Metallic Suspension Clip */}
          <div className="relative w-5 h-3 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-sm shadow-sm flex items-center justify-center z-20 -mb-1">
            <div className="w-2 h-1 bg-neutral-900 rounded-full" />
          </div>

          {/* ========================================================
              COMPACT 3D FLIPPING GLASS ID CARD
              Width: w-44 sm:w-48 (Compact & sleek, no clutter!)
              ======================================================== */}
          <div
            className="relative w-44 sm:w-48 h-[230px] sm:h-[240px] cursor-pointer"
            style={{ perspective: 1000 }}
            onClick={handleCardClick}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full"
            >
              {/* ========================================================
                  FRONT SIDE: Just Unique Arched Photo, Name & Role on Glass
                  ======================================================== */}
              <div
                style={{ backfaceVisibility: "hidden" }}
                className="absolute inset-0 rounded-3xl bg-white/[0.08] backdrop-blur-xl border-2 border-white/20 hover:border-[#f97316]/60 shadow-[0_15px_35px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.4)] p-3 flex flex-col justify-between items-center text-center text-white overflow-hidden transition-colors"
              >
                {/* Top Specular Reflection Glare */}
                <div className="absolute top-0 inset-x-4 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

                {/* Oval Lanyard Slot */}
                <div className="w-7 h-1.5 rounded-full bg-black/60 border border-white/20 shadow-inner -mt-0.5 mb-1.5" />

                {/* UNIQUE IMAGE SHAPE: Arched Cathedral Dome Silhouette */}
                <div className="relative w-full h-28 sm:h-32 rounded-t-full rounded-b-xl overflow-hidden bg-black/70 border border-white/20 shadow-inner group">
                  <img
                    src="/images/avatar_portrait.png"
                    alt="Manish Nooli"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Online Dot */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
                </div>

                {/* NAME & ROLE (Clean & Focused) */}
                <div className="w-full space-y-0.5 pt-1">
                  <div className="flex items-center justify-center gap-1">
                    <h5 className="font-['Anton',sans-serif] text-sm sm:text-base text-white uppercase tracking-wider leading-none">
                      Manish Nooli
                    </h5>
                    <span
                      className="w-3.5 h-3.5 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-[8px] font-bold shadow-sm"
                      title="Verified"
                    >
                      ✓
                    </span>
                  </div>

                  <p className="font-['Playfair_Display'] italic text-[10px] text-rose-400 leading-none">
                    Senior Product Designer
                  </p>
                </div>

                {/* Tap to Flip Hint */}
                <div className="pt-0.5 text-[8px] font-mono text-white/50 tracking-wider flex items-center gap-1">
                  <span>↻</span>
                  <span>TOUCH TO CONNECT</span>
                </div>
              </div>

              {/* ========================================================
                  BACK SIDE: Connect Details (LinkedIn, Email, One-line)
                  ======================================================== */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 rounded-3xl bg-[#0c0d14]/95 backdrop-blur-xl border-2 border-[#f97316]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.3)] p-3 flex flex-col justify-between items-center text-center text-white overflow-hidden"
              >
                {/* Oval Lanyard Slot */}
                <div className="w-7 h-1.5 rounded-full bg-black/60 border border-white/20 shadow-inner -mt-0.5 mb-1" />

                {/* Back Header */}
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-amber-300 uppercase block">
                    GET IN TOUCH
                  </span>
                  <p className="font-sans text-[10px] text-slate-300 font-light leading-snug px-1">
                    "I design software that gets out of your way."
                  </p>
                  <span className="text-[9px] font-mono text-slate-400 block pt-0.5">
                    📍 Hyderabad, IN
                  </span>
                </div>

                {/* CONNECT ACTION BUTTONS: LINKEDIN & EMAIL */}
                <div className="w-full space-y-1.5 pt-1">
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/manish-nooli/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      try {
                        cinematicAudio.playTactileClick(950);
                      } catch {}
                    }}
                    className="w-full py-1.5 rounded-xl bg-[#0a66c2] hover:bg-[#084e96] text-white text-[11px] font-mono font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    title="Connect on LinkedIn"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                    </svg>
                    <span>LinkedIn ↗</span>
                  </a>

                  {/* Email Button */}
                  <a
                    href="mailto:nmanish10@gmail.com"
                    onClick={(e) => {
                      e.stopPropagation();
                      try {
                        cinematicAudio.playThemeChime(950);
                      } catch {}
                    }}
                    className="w-full py-1.5 rounded-xl bg-black/60 hover:bg-neutral-900 border border-white/20 hover:border-emerald-400 text-white text-[11px] font-mono font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    title="Send Email"
                  >
                    <svg className="w-3 h-3 fill-current text-emerald-400" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>Email Direct</span>
                  </a>

                  {/* Quick Copy Email Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="w-full py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-[9px] font-mono transition-all cursor-pointer text-center"
                  >
                    {copied ? "✓ EMAIL COPIED!" : "nmanish10@gmail.com"}
                  </button>
                </div>

                {/* Flip Back Hint */}
                <div className="pt-0.5 text-[8px] font-mono text-amber-300 tracking-wider flex items-center gap-1">
                  <span>↺</span>
                  <span>TOUCH TO FLIP BACK</span>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          MOBILE (screens < sm): Sticky Fixed bottom-right pill
          ======================================================== */}
      <div className="block sm:hidden fixed bottom-6 right-4 z-40">
        <button
          onClick={() => {
            setIsFlipped((p) => !p);
            try {
              cinematicAudio.playTactileClick(1100);
            } catch {}
          }}
          className="px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold shadow-lg flex items-center gap-1.5 active:scale-95 cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>👨‍💻 ID BADGE</span>
        </button>
      </div>
    </>
  );
}
