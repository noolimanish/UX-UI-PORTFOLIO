import React, { useState } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function ChromaticSendButton({
  label = "Send",
  sentLabel = "Sent ✓",
  onClick,
  className = "",
  disabled = false,
}) {
  const [isSent, setIsSent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (disabled || isSent) return;
    cinematicAudio.playTactileClick(1100);
    setIsSent(true);
    onClick?.(e);
    setTimeout(() => {
      setIsSent(false);
    }, 2800);
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => {
        setIsHovered(true);
        cinematicAudio.playTactileClick(900);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={disabled}
      className={`group relative inline-flex items-center gap-3.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#16181f]/95 hover:bg-[#1f222b] border border-white/10 hover:border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.6)] cursor-pointer select-none transition-all duration-300 ${className}`}
    >
      {/* Left Circular Button with Chromatic Dispersion Ring */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[2.5px] flex items-center justify-center overflow-hidden shadow-inner">
        {/* Chromatic Aberration Rainbow Gradient Ring */}
        <div
          className="absolute inset-0 rounded-full transition-transform duration-700 group-hover:rotate-180"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #ff0055 0deg, #ff7700 60deg, #ffee00 120deg, #00ffaa 180deg, #00ccff 240deg, #aa00ff 300deg, #ff0055 360deg)",
            filter: isHovered ? "brightness(1.2) drop-shadow(0 0 6px rgba(0,200,255,0.6))" : "brightness(0.95)",
          }}
        />

        {/* Inner Dark Disc with Paper Plane Icon */}
        <div className="relative w-full h-full rounded-full bg-[#12141a] flex items-center justify-center">
          <motion.svg
            animate={
              isSent
                ? { x: [0, 8, -12, 0], opacity: [1, 0, 0, 1] }
                : isHovered
                ? { x: [0, 2, -1, 0] }
                : { x: 0 }
            }
            transition={{ duration: 0.4 }}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transform -rotate-12 translate-x-[1px]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </motion.svg>
        </div>
      </div>

      {/* Right "Send" Label */}
      <span className="font-sans font-medium text-sm sm:text-base text-slate-100 group-hover:text-white pr-2 tracking-wide transition-colors">
        {isSent ? sentLabel : label}
      </span>
    </motion.button>
  );
}
