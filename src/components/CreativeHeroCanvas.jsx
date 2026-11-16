import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";
import EyeTrackingHireButton from "./EyeTrackingHireButton";
import StickyLanyardBadge from "./StickyLanyardBadge";

export const PERIMETER_OBJECTS = [
  // LEFT MARGIN OBJECTS (Positioned along the left border to frame the center cleanly)
  {
    id: "starry-night",
    name: "Starry Night Art",
    side: "left",
    icon: "🖼️",
    scattered: { x: -440, y: -220, rot: -8 },
    tidy: { x: -500, y: -220, rot: 0 },
  },
  {
    id: "lamp",
    name: "Green Banker Lamp",
    side: "left",
    icon: "💡",
    scattered: { x: -410, y: -90, rot: 6 },
    tidy: { x: -500, y: -130, rot: 0 },
  },
  {
    id: "headphones",
    name: "AirPods Max",
    side: "left",
    icon: "🎧",
    scattered: { x: -460, y: 30, rot: -12 },
    tidy: { x: -500, y: -40, rot: 0 },
  },
  {
    id: "vinyl",
    name: "Vinyl Record",
    side: "left",
    icon: "💿",
    scattered: { x: -390, y: 150, rot: 15 },
    tidy: { x: -500, y: 50, rot: 0 },
  },
  {
    id: "plant",
    name: "Pothos Plant",
    side: "left",
    icon: "🪴",
    scattered: { x: -450, y: 260, rot: -4 },
    tidy: { x: -500, y: 140, rot: 0 },
  },

  // RIGHT MARGIN OBJECTS (Positioned along the right border)
  {
    id: "sprint-book",
    name: "Sprint Book",
    side: "right",
    icon: "📙",
    scattered: { x: 440, y: -220, rot: 10 },
    tidy: { x: 500, y: -220, rot: 0 },
  },
  {
    id: "coffee",
    name: "Coffee & Croissant",
    side: "right",
    icon: "☕",
    scattered: { x: 400, y: -100, rot: -8 },
    tidy: { x: 500, y: -130, rot: 0 },
  },
  {
    id: "retro-pc",
    name: "Retro CRT PC",
    side: "right",
    icon: "🖥️",
    scattered: { x: 460, y: 20, rot: 6 },
    tidy: { x: 500, y: -40, rot: 0 },
  },
  {
    id: "camera",
    name: "Instax Camera",
    side: "right",
    icon: "📷",
    scattered: { x: 410, y: 140, rot: -10 },
    tidy: { x: 500, y: 50, rot: 0 },
  },
  {
    id: "journal",
    name: "Leather Journal",
    side: "right",
    icon: "📔",
    scattered: { x: 450, y: 260, rot: 12 },
    tidy: { x: 500, y: 140, rot: 0 },
  },
];

export default function CreativeHeroCanvas({
  onNavigateToWork,
  onOpenDossier,
}) {
  const [isTidy, setIsTidy] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Parallax Scroll Animation: objects move away more when scrolled down
  const { scrollY } = useScroll();
  const leftParallaxX = useTransform(scrollY, [0, 500], [0, -160]);
  const rightParallaxX = useTransform(scrollY, [0, 500], [0, 160]);
  const contentOpacity = useTransform(scrollY, [0, 420], [1, 0.1]);
  const contentScale = useTransform(scrollY, [0, 420], [1, 0.95]);

  const toggleTidy = (targetState) => {
    setIsTidy(targetState);
    try {
      cinematicAudio.playTactileClick(targetState ? 1200 : 850);
    } catch {}
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] w-full bg-[#08090d] text-white flex flex-col justify-between items-center px-4 sm:px-8 pt-28 pb-10 select-none overflow-hidden"
    >
      {/* ========================================================
          ARCHITECTURAL DRAFTING MAT GRID (Matching Image 2)
          ======================================================== */}
      <div className="absolute inset-0 opacity-[0.055] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Hanging 3D Flip ID Card at Top Right (Lowered down to prevent any header overlap) */}
      <StickyLanyardBadge onOpenDossier={onOpenDossier} />

      {/* ========================================================
          PERIMETER DESK OBJECTS (Framing Left and Right Margins)
          Leaves center 100% open, clear, and breathable!
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {PERIMETER_OBJECTS.map((obj) => {
          const basePos = isTidy ? obj.tidy : obj.scattered;
          const isLeft = obj.side === "left";
          const parallaxX = isLeft ? leftParallaxX : rightParallaxX;

          return (
            <motion.div
              key={obj.id}
              style={{ x: parallaxX }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{
                  x: basePos.x,
                  y: basePos.y,
                  rotate: basePos.rot,
                  scale: activeItem === obj.id ? 1.3 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="text-4xl sm:text-5xl pointer-events-auto cursor-pointer filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] hover:scale-125 transition-transform"
                onClick={() => {
                  setActiveItem(obj.id);
                  try {
                    cinematicAudio.playTactileClick(1100);
                  } catch {}
                  setTimeout(() => setActiveItem(null), 1200);
                }}
                title={obj.name}
              >
                <span>{obj.icon}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================
          MAIN CENTER STAGE: FONT MIXING & ROBIN TEMPLATE INSPIRATION
          (Exact match to Reference Images 2 & 3)
          ======================================================== */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center justify-center text-center py-4"
      >
        
        {/* TOP STICKER ROW (Image 2) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 flex-wrap">
          {/* Made Things Sticker */}
          <div className="px-3.5 py-1 rounded-full bg-[#dcfce7] text-[#14532d] border border-[#86efac] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[-4deg] shadow-emerald-950/20">
            MADE THINGS
          </div>

          {/* "my name is" Handwritten Cursive Script */}
          <span className="font-['Playfair_Display'] italic text-slate-300 text-sm sm:text-base font-normal tracking-wide">
            my name is
          </span>

          {/* Sweat The Details Sticker */}
          <div className="px-3.5 py-1 rounded-full bg-[#fef9c3] text-[#713f12] border border-[#fde047] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[3deg] shadow-amber-950/20">
            SWEAT THE DETAILS
          </div>
        </div>

        {/* ========================================================
            THE HERO OUTLINE BOX (Image 2 ROBIN Box + Image 3 Font Mixing)
            ======================================================== */}
        <div className="relative inline-block my-2 w-full max-w-2xl">
          
          {/* STICKY NOTE ARROWS POINTING TO BOX (Image 2) */}
          <div className="hidden sm:flex items-center justify-between absolute -top-4 inset-x-2 pointer-events-none z-30">
            {/* Left Tag Arrow */}
            <div className="px-3 py-1 rounded-md bg-[#fef08a] text-[#854d0e] border border-[#facc15] font-mono text-[10px] font-bold shadow-md rotate-[-3deg] flex items-center gap-1">
              <span>Product Designer</span>
              <span className="text-xs">↗</span>
            </div>

            {/* Right Tag Arrow */}
            <div className="px-3 py-1 rounded-md bg-[#bbf7d0] text-[#166534] border border-[#86efac] font-mono text-[10px] font-bold shadow-md rotate-[3deg] flex items-center gap-1">
              <span className="text-xs">↖</span>
              <span>Hyderabad, IN</span>
            </div>
          </div>

          {/* Outlined Sketch Box */}
          <div className="relative rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-[#f97316] bg-black/60 backdrop-blur-md p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.15)] overflow-hidden">
            
            {/* Mascot Cat with Sunglasses Peeking in Background */}
            <div className="absolute top-2 right-4 opacity-15 pointer-events-none text-6xl">
              🐈‍⬛
            </div>

            {/* MAIN BLOCK HEADLINE (Anton / Bold Block Type) */}
            <h1 className="font-['Anton',sans-serif] text-6xl sm:text-8xl md:text-9xl text-white tracking-wider uppercase leading-none select-none filter drop-shadow">
              MANISH
            </h1>

            {/* ELEGANT SCRIPT OVERLAY (Image 3: "Designer PORTFOLIO" font mixing) */}
            <div className="relative z-10 -mt-5 sm:-mt-8 md:-mt-10">
              <span className="font-['Playfair_Display'] italic font-normal text-rose-400 text-3xl sm:text-5xl md:text-6xl tracking-tight filter drop-shadow-md">
                Product Designer
              </span>
            </div>

            {/* Status Bullet below name */}
            <div className="pt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[10px] sm:text-xs text-emerald-300 font-semibold tracking-wider uppercase">
                OPEN TO NEW WORK AND GOOD PROBLEMS
              </span>
            </div>

          </div>

        </div>

        {/* ========================================================
            SUBTITLE & PHILOSOPHY (Image 2)
            "I design software that gets out of your way."
            ======================================================== */}
        <div className="mt-6 space-y-2 max-w-xl mx-auto">
          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-white font-medium tracking-tight flex items-center justify-center gap-2 flex-wrap">
            <span>I design software that</span>
            <span className="text-emerald-400 inline-flex items-center gap-1 font-semibold">
              <span>🎯</span>
              <span>gets out of your way</span>
              <span>🌸</span>
            </span>
          </p>

          <p className="font-sans text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto leading-relaxed">
            Turning dense engineering complexity into intuitive, cognitive, and delightful interfaces.
          </p>
        </div>

        {/* ========================================================
            ACTION BUTTONS STRIP
            ======================================================== */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 z-20">
          
          {/* Eye-Tracking Hire Button */}
          <EyeTrackingHireButton
            onHireClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Contact Me / Explore Selected Work */}
          <button
            onClick={onNavigateToWork}
            className="px-6 py-3 rounded-xl bg-black hover:bg-neutral-900 text-white font-mono text-xs sm:text-sm font-bold tracking-wider border-2 border-white/20 hover:border-emerald-400 shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>↗</span>
            <span>CONTACT ME</span>
          </button>

          <button
            onClick={onNavigateToWork}
            className="px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-sans text-xs sm:text-sm font-medium border border-white/10 transition-all cursor-pointer"
          >
            Explore Work ↓
          </button>

        </div>

      </motion.div>

      {/* ========================================================
          BOTTOM SCATTERED / TIDY TOGGLE (Image 2 & 3)
          ======================================================== */}
      <div className="relative z-30 pb-1 flex items-center justify-between w-full max-w-4xl px-4">
        {/* Email note */}
        <div className="font-mono text-[11px] text-slate-400">
          nmanish10@gmail.com
        </div>

        {/* 🧩 / 🧹 Toggle Buttons */}
        <div className="flex items-center gap-2 bg-[#161822]/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <button
            onClick={() => toggleTidy(false)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all cursor-pointer ${
              !isTidy
                ? "bg-[#8b5a3e] text-white shadow-md scale-105"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
            title="Scattered Mode (Perimeter Mat)"
          >
            🧩
          </button>

          <button
            onClick={() => toggleTidy(true)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all cursor-pointer ${
              isTidy
                ? "bg-[#8b5a3e] text-white shadow-md scale-105"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
            title="Tidy Mode (Aligned Columns)"
          >
            🧹
          </button>
        </div>
      </div>

    </section>
  );
}
