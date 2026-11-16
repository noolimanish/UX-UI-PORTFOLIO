import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const FOLDER_DOCUMENTS = [
  {
    id: "helpfarm",
    tab: "01. HELPFARM",
    title: "HelpFarm AI Crop Leaf Scanner",
    category: "Agri-Tech UX • Medium",
    color: "from-emerald-600 to-emerald-950",
    border: "border-emerald-400/40",
    badge: "MEDIUM PUBLISHED",
    stat: "92% SUCCESS",
    rot: -10,
    yOffset: -48,
    xOffset: -38,
  },
  {
    id: "eatsure-redesign",
    tab: "02. EATSURE",
    title: "EatSure Multi-Brand Food App",
    category: "Single Cart UX • Medium",
    color: "from-amber-600 to-amber-950",
    border: "border-amber-400/40",
    badge: "MEDIUM PUBLISHED",
    stat: "+34% BASKET",
    rot: -3,
    yOffset: -62,
    xOffset: -10,
  },
  {
    id: "nexus-profile",
    tab: "03. NEXUS",
    title: "Nexus Developer Identity System",
    category: "Design Tokens • Figma",
    color: "from-cyan-600 to-cyan-950",
    border: "border-cyan-400/40",
    badge: "42 TOKENS",
    stat: "3.4X ONBOARDING",
    rot: 6,
    yOffset: -54,
    xOffset: 18,
  },
  {
    id: "aura-music",
    tab: "04. SENSORY",
    title: "Aura Spatial Music Streaming",
    category: "Tactile Audio Scrubber",
    color: "from-rose-600 to-rose-950",
    border: "border-rose-400/40",
    badge: "432Hz HARMONIC",
    stat: "+46% RETENTION",
    rot: 14,
    yOffset: -44,
    xOffset: 42,
  },
];

export default function InteractiveFolder({ onSelectProject, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDoc, setHoveredDoc] = useState(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
    cinematicAudio.playTactileClick(900);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setHoveredDoc(null);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    cinematicAudio.playTactileClick(1000);
  };

  return (
    <div
      className={`relative inline-block select-none cursor-pointer group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Container Dimension matching attachment */}
      <div className="relative w-64 sm:w-72 h-44 sm:h-48 flex items-end justify-center">
        
        {/* BACK FOLDER FLAP (Warm Golden Yellow / Manila Cardstock) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#facc15] to-[#eab308] shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Top Folder Tab Silhouette */}
          <div className="absolute top-0 right-8 w-28 h-6 bg-[#facc15] rounded-t-xl" />
        </div>

        {/* INNER DOCUMENT SHEETS (Fan out and rise on hover!) */}
        <div className="relative z-10 w-[88%] h-[80%] mb-3">
          {FOLDER_DOCUMENTS.map((doc, idx) => {
            const isHovered = hoveredDoc === doc.id;
            return (
              <motion.div
                key={doc.id}
                animate={
                  isOpen
                    ? {
                        y: isHovered ? doc.yOffset - 18 : doc.yOffset,
                        x: doc.xOffset,
                        rotate: isHovered ? 0 : doc.rot,
                        scale: isHovered ? 1.08 : 1,
                        zIndex: isHovered ? 30 : idx + 1,
                      }
                    : {
                        y: 0,
                        x: 0,
                        rotate: (idx - 1.5) * 2,
                        scale: 1,
                        zIndex: idx + 1,
                      }
                }
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setHoveredDoc(doc.id);
                  cinematicAudio.playTactileClick(1150);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  cinematicAudio.playThemeChime(950);
                  onSelectProject?.(doc.id);
                }}
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${doc.color} border ${doc.border} p-3 text-white shadow-lg cursor-pointer flex flex-col justify-between overflow-hidden select-none`}
              >
                {/* Document Tab Header */}
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="font-bold uppercase tracking-wider bg-black/60 px-1.5 py-0.5 rounded">
                    {doc.tab}
                  </span>
                  <span className="text-white/80 font-bold">{doc.stat}</span>
                </div>

                {/* Title & Category */}
                <div className="space-y-0.5 my-auto">
                  <h5 className="font-sans font-bold text-xs leading-tight line-clamp-1">
                    {doc.title}
                  </h5>
                  <p className="font-mono text-[8px] text-white/70">
                    {doc.category}
                  </p>
                </div>

                {/* Inspect Link */}
                <div className="flex items-center justify-between text-[8px] font-mono text-white/90 pt-1 border-t border-white/10">
                  <span>{doc.badge}</span>
                  <span className="underline font-bold">OPEN ↗</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FRONT FROSTED GLASS TAB (From Attachment 1 with Mushroom & 90s Baby Stickers) */}
        <div className="absolute bottom-0 left-0 right-0 h-[68%] rounded-2xl bg-white/[0.22] backdrop-blur-xl border border-white/40 shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-20 p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
          {/* Subtle Glass Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />

          {/* Top Right Playful Stickers (Mario Mushroom & 90s Baby Star from Attachment 1) */}
          <div className="absolute top-2 right-2 flex items-center -space-x-2 pointer-events-none">
            {/* Mario Mushroom Sticker */}
            <motion.div
              animate={{ rotate: isOpen ? [0, -10, 5, 0] : 0 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-sm filter drop-shadow"
            >
              🍄
            </motion.div>

            {/* 90s Baby Star Sticker */}
            <motion.div
              animate={{ rotate: isOpen ? [0, 15, -5, 0] : 0 }}
              transition={{ duration: 0.7 }}
              className="px-2 py-0.5 rounded-md bg-amber-400 border border-white text-black font-extrabold text-[9px] shadow-md uppercase tracking-tighter"
            >
              ★ 90s BABY
            </motion.div>
          </div>

          {/* Folder Label (Handwriting style matching Attachment 1) */}
          <div className="mt-auto space-y-0.5">
            <div className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
              Case Files
            </div>
            <div className="font-mono text-[10px] text-slate-800 font-semibold tracking-wider">
              1998 - 2026 // HOVER TO UNPACK
            </div>
          </div>
        </div>

      </div>

      {/* Floating Micro-Instruction Pill */}
      <div className="text-center mt-2">
        <span className="inline-block text-[9px] font-mono text-slate-400 group-hover:text-amber-300 transition-colors uppercase tracking-widest">
          {isOpen ? "CLICK ANY DOCUMENT TO READ CASE STUDY" : "HOVER FOLDER TO FAN OUT FILES ↗"}
        </span>
      </div>
    </div>
  );
}
