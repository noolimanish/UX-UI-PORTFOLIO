import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const RADIAL_ALBUMS = [
  {
    id: "spotify-logo",
    angle: -90, // top
    distance: 125,
    type: "badge",
    bg: "bg-[#1DB954]",
    content: (
      <div className="flex items-center justify-center w-full h-full text-black">
        <svg className="w-8 h-8 fill-black" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.495 17.303c-.215.353-.674.464-1.026.249-2.81-1.716-6.347-2.103-10.513-1.152-.403.092-.806-.157-.898-.56-.092-.403.157-.806.56-.898 4.562-1.042 8.468-.6 11.628 1.335.352.215.464.674.249 1.026zm1.468-3.264c-.27.441-.849.58-1.29.31-3.217-1.977-8.121-2.55-11.926-1.395-.497.151-1.023-.135-1.174-.632-.151-.498.135-1.023.632-1.174 4.354-1.321 9.774-.679 13.448 1.579.441.27.58.849.31 1.29zm.126-3.41c-3.857-2.29-10.222-2.502-13.887-1.389-.59.18-1.218-.153-1.398-.743-.18-.59.153-1.218.743-1.398 4.215-1.28 11.253-1.032 15.688 1.602.531.315.706 1.002.391 1.533-.315.531-1.002.706-1.537.395z" />
        </svg>
      </div>
    ),
  },
  {
    id: "mini-player",
    angle: -40, // top-right
    distance: 140,
    type: "player",
    bg: "bg-[#181a24]",
    content: (
      <div className="p-3 w-full h-full flex flex-col justify-between text-left text-white select-none">
        <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono">
          <span>✕ ○ △</span>
          <span>LIVE</span>
        </div>
        <div className="space-y-0.5">
          <div className="font-bold text-xs text-white leading-tight">Ezhel</div>
          <div className="text-[9px] text-slate-400 truncate">Bana ne bu sevdalardan</div>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-[#1DB954]" />
        </div>
      </div>
    ),
  },
  {
    id: "artist-portrait",
    angle: 20, // right
    distance: 135,
    type: "art",
    bg: "bg-slate-900",
    content: (
      <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 flex items-center justify-center text-4xl bg-gradient-to-tr from-emerald-950 via-slate-900 to-cyan-950">
        <span className="filter grayscale contrast-125">🎧</span>
        <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none" />
      </div>
    ),
  },
  {
    id: "mono-card",
    angle: 120, // bottom-left
    distance: 135,
    type: "art",
    bg: "bg-black",
    content: (
      <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 flex items-center justify-center text-4xl bg-gradient-to-br from-zinc-800 to-black">
        <span className="filter grayscale">⚡</span>
      </div>
    ),
  },
  {
    id: "green-lyrics",
    angle: 170, // left
    distance: 140,
    type: "lyrics",
    bg: "bg-[#181a20]",
    content: (
      <div className="p-3 w-full h-full flex items-center justify-center text-center font-black text-[10px] leading-tight text-[#1DB954] uppercase tracking-tighter">
        ŞENDEN ÖTÜRÜ DEĞİL DE FAYDA LANMAK
      </div>
    ),
  },
  {
    id: "green-lyrics-top",
    angle: -140, // top-left
    distance: 130,
    type: "lyrics",
    bg: "bg-[#181a20]",
    content: (
      <div className="p-3 w-full h-full flex items-center justify-center text-center font-black text-[10px] leading-tight text-[#1DB954] uppercase tracking-tighter">
        A DA BU SANA DA B...
      </div>
    ),
  },
];

export default function MusicalPersonalityWidget({ className = "" }) {
  const [isBurst, setIsBurst] = useState(false);

  const toggleBurst = () => {
    setIsBurst((prev) => !prev);
    cinematicAudio.playTactileClick(1100);
    if (!isBurst) {
      cinematicAudio.playThemeChime(850);
    }
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Central Interactive Sound Card Container */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
        
        {/* RADIAL BURST TILES (Expand outwards in a circle when clicked!) */}
        {RADIAL_ALBUMS.map((item) => {
          const rad = (item.angle * Math.PI) / 180;
          const targetX = Math.cos(rad) * item.distance;
          const targetY = Math.sin(rad) * item.distance;

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={
                isBurst
                  ? {
                      x: targetX,
                      y: targetY,
                      scale: 1,
                      opacity: 1,
                      rotate: item.angle / 12,
                    }
                  : {
                      x: 0,
                      y: 0,
                      scale: 0.2,
                      opacity: 0,
                      rotate: 0,
                    }
              }
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className={`absolute z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${item.bg} border border-white/10 shadow-2xl flex items-center justify-center pointer-events-none overflow-hidden`}
            >
              {item.content}
            </motion.div>
          );
        })}

        {/* CENTER WAVEFORM SQUARE (From Attachment 4 & 5) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleBurst}
          className="relative z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#161822] border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(29,185,84,0.2)] flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
        >
          {/* Subtle Artist Silhouette in Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Animated Audio Equalizer Waveform Bars */}
          <div className="relative z-10 flex items-center gap-1.5 h-10 px-2">
            {[18, 32, 22, 38, 26, 40, 20, 34, 16].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isBurst ? [12, h, 8, h + 4, 12] : [8, 16, 10, 20, 8],
                }}
                transition={{
                  duration: 0.8 + (i % 3) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
                className="w-1.5 rounded-full bg-white shadow-sm"
              />
            ))}
          </div>

          {/* Interactive Radar Ripple Indicator (Bottom Right) */}
          <div className="absolute bottom-2 right-2 flex items-center justify-center pointer-events-none">
            <span className="w-5 h-5 rounded-full border border-white/30 animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>

          {/* Hover Glare */}
          <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
