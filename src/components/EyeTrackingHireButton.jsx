import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function EyeTrackingHireButton({ onClick, className = "" }) {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const eyesContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyesContainerRef.current) return;
      const rect = eyesContainerRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Max eye pupil displacement within the white sclera
      const maxDistance = 4.5;
      const angle = Math.atan2(dy, dx);
      const moveDist = Math.min(distance / 25, maxDistance);

      setPupilOffset({
        x: Math.cos(angle) * moveDist,
        y: Math.sin(angle) * moveDist,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => {
        setIsHovered(true);
        cinematicAudio.playTactileClick(1200);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        cinematicAudio.playThemeChime(900);
        onClick?.(e);
      }}
      className={`group relative inline-flex items-center gap-3.5 px-6 py-2.5 sm:py-3 rounded-full bg-black text-white border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.06)] hover:border-white/40 cursor-pointer select-none transition-colors duration-200 ${className}`}
    >
      {/* "Hire me" Text with Animated Waving Hand */}
      <span className="font-sans font-bold text-sm sm:text-base tracking-tight flex items-center gap-2">
        <span>Hire me</span>
        <motion.span
          animate={
            isHovered
              ? { rotate: [0, 22, -14, 22, -8, 14, 0] }
              : { rotate: 0 }
          }
          transition={{ duration: 0.9, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
          className="inline-block origin-bottom-right text-base sm:text-lg"
        >
          👋
        </motion.span>
      </span>

      {/* Two Cartoon Eyes Tracking the Cursor */}
      <div ref={eyesContainerRef} className="flex items-center gap-1">
        {/* Left Eye */}
        <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden">
          <div
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black transition-transform duration-75"
            style={{
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
            }}
          />
        </div>

        {/* Right Eye */}
        <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden">
          <div
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black transition-transform duration-75"
            style={{
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
            }}
          />
        </div>
      </div>
    </motion.button>
  );
}
