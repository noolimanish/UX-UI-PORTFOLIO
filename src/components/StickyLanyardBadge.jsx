import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function StickyLanyardBadge({ onOpenDossier }) {
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Motion value for horizontal drag
  const dragX = useMotionValue(0);

  // Convert horizontal drag displacement into realistic pendulum angular rotation (degrees)
  // Pulling right tilts right, pulling left tilts left with smooth spring response
  const pendulumRotate = useTransform(dragX, [-140, 0, 140], [-22, 0, 22]);

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
          DESKTOP & TABLET: INTERACTIVE HANGING PENDULUM GLASS BADGE
          Suspended from the ceiling string with real swinging physics!
          ======================================================== */}
      <div className="hidden md:block fixed top-0 right-6 lg:right-10 z-40 select-none pointer-events-auto">
        
        {/* Top Ceiling Anchor Mount */}
        <div className="mx-auto w-8 h-3.5 bg-gradient-to-b from-neutral-800 to-neutral-900 border-x border-b border-white/20 rounded-b-md shadow-md flex items-center justify-center">
          <div className="w-3 h-1 bg-neutral-950 rounded-full" />
        </div>

        {/* PENDULUM SYSTEM (Rotates from top ceiling pivot) */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.42}
          style={{
            x: dragX,
            rotate: pendulumRotate,
            transformOrigin: "top center",
          }}
          onDragStart={() => {
            setIsDragging(true);
            try {
              cinematicAudio.playTactileClick(1100);
            } catch {}
          }}
          onDragEnd={() => {
            setIsDragging(false);
            try {
              cinematicAudio.playTactileClick(850);
            } catch {}
          }}
          animate={
            !isDragging
              ? {
                  rotate: [-2.2, 2.2, -2.2],
                }
              : undefined
          }
          transition={
            !isDragging
              ? {
                  rotate: {
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : { type: "spring", stiffness: 220, damping: 14 }
          }
          className="flex flex-col items-center cursor-grab active:cursor-grabbing origin-top"
          title="Drag and release to swing pendulum!"
        >
          {/* Braided Nylon Lanyard String / Cord */}
          <div className="relative w-1.5 h-16 sm:h-20 bg-gradient-to-b from-[#22242a] via-[#15161b] to-[#2c2f3a] shadow-sm flex items-center justify-center">
            {/* Cord Woven Texture Lines */}
            <div className="absolute inset-y-0 w-[1px] bg-white/15" />
          </div>

          {/* Chrome Metallic Suspension Clip */}
          <div className="relative w-6 h-4 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-sm shadow-md flex items-center justify-center z-20 -mb-1">
            <div className="w-2.5 h-1.5 bg-neutral-800 rounded-full" />
          </div>

          {/* ========================================================
              FROSTED GLASS ID BADGE
              Clean, minimal, frosted glass with unique arched image shape!
              ======================================================== */}
          <div className="relative w-64 sm:w-72 rounded-[32px] sm:rounded-[36px] bg-white/[0.08] backdrop-blur-2xl border-2 border-white/20 hover:border-[#f97316]/60 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_3px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.3)] p-4 sm:p-5 flex flex-col items-center text-center text-white overflow-hidden transition-colors">
            
            {/* Top Specular Glare Reflection Arc */}
            <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            {/* Oval Lanyard Slot (Punched out hole in the glass) */}
            <div className="w-10 h-2 rounded-full bg-black/60 border border-white/20 shadow-inner -mt-1 mb-3" />

            {/* UNIQUE IMAGE SHAPE: Architectural Arched Portal / Dome */}
            <div className="relative w-full h-40 sm:h-44 rounded-t-full rounded-b-2xl overflow-hidden bg-black/60 border-2 border-white/20 shadow-md group">
              <img
                src="/images/avatar_portrait.png"
                alt="Manish Nooli"
                className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              />

              {/* Ambient Specular Glass Glaze */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Subtle Status Pill in Arched Top */}
              <div className="absolute top-3 inset-x-0 flex justify-center pointer-events-none">
                <div className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[8px] font-mono font-bold text-emerald-300 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

            {/* NAME WITH VERIFIED CHECKMARK */}
            <div className="pt-3.5 space-y-0.5 w-full">
              <div className="flex items-center justify-center gap-1.5">
                <h4 className="font-['Anton',sans-serif] text-xl sm:text-2xl text-white uppercase tracking-wider leading-none">
                  Manish Nooli
                </h4>
                <span
                  className="w-4 h-4 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-[9px] font-bold shadow-sm shrink-0"
                  title="Verified Product Designer"
                >
                  ✓
                </span>
              </div>

              {/* ROLE */}
              <p className="font-['Playfair_Display'] italic font-normal text-xs sm:text-sm text-rose-400">
                Senior Product Designer &amp; UI/UX
              </p>

              {/* ONE LINE STATEMENT */}
              <p className="font-sans text-[11px] text-slate-300 font-light leading-snug px-1 pt-1">
                Crafting digital experiences where cognitive clarity meets high-craft usability.
              </p>
            </div>

            {/* INTERACTION OPTIONS: LINKEDIN & EMAIL LOGOS */}
            <div className="pt-4 flex items-center justify-center gap-2.5 w-full">
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
                className="flex-1 py-2 rounded-xl bg-black/60 hover:bg-[#0a66c2] text-white border border-white/20 hover:border-[#0a66c2] text-xs font-mono font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 group/link"
                title="Connect on LinkedIn"
              >
                {/* LinkedIn Official SVG Icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Email / Mailto Button */}
              <a
                href="mailto:nmanish10@gmail.com"
                onClick={(e) => {
                  e.stopPropagation();
                  try {
                    cinematicAudio.playThemeChime(950);
                  } catch {}
                }}
                className="flex-1 py-2 rounded-xl bg-black/60 hover:bg-neutral-900 text-white border border-white/20 hover:border-emerald-400 text-xs font-mono font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                title="Send Email to Manish"
              >
                {/* Email SVG Icon */}
                <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Email</span>
              </a>

              {/* Quick Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-8 h-8 rounded-xl bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/20 hover:border-amber-400 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? "✓" : "📋"}
              </button>
            </div>

            {/* Pendulum Interactive Cue Indicator */}
            <div className="pt-2.5 text-[8px] font-mono text-white/40 tracking-widest flex items-center gap-1 uppercase pointer-events-none">
              <span>⇄</span>
              <span>SWING PENDULUM</span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ========================================================
          MOBILE (screens < md): Clean Floating Glass Card
          ======================================================== */}
      <div className="block md:hidden fixed bottom-5 right-4 z-40">
        <div className="p-3 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/25 shadow-2xl flex items-center gap-3">
          <div className="w-10 h-12 rounded-t-full rounded-b-md overflow-hidden bg-black shrink-0 border border-white/20">
            <img
              src="/images/avatar_portrait.png"
              alt="Manish Nooli"
              className="w-full h-full object-cover object-top filter grayscale contrast-125"
            />
          </div>

          <div className="space-y-0.5 text-left pr-1">
            <div className="flex items-center gap-1">
              <span className="font-['Anton',sans-serif] text-sm text-white uppercase">Manish Nooli</span>
              <span className="text-blue-400 text-[10px]">✓</span>
            </div>
            <p className="text-[10px] text-rose-400 font-['Playfair_Display'] italic">Product Designer</p>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="https://www.linkedin.com/in/manish-nooli/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-xl bg-[#0a66c2] text-white flex items-center justify-center text-xs font-bold shadow-md"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="mailto:nmanish10@gmail.com"
              className="w-8 h-8 rounded-xl bg-neutral-800 border border-white/20 text-white flex items-center justify-center text-xs shadow-md"
              title="Email"
            >
              ✉
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
