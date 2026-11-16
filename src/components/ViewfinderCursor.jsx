import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ViewfinderCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop mouse devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    } else {
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("cursor-pointer") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Focal Ring - strictly pointer-events-none */}
      <motion.div
        animate={{
          x: pos.x - (isHovered ? 26 : 18),
          y: pos.y - (isHovered ? 26 : 18),
          scale: isHovered ? 1.35 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className={`pointer-events-none w-9 h-9 rounded-full border transition-colors ${
          isHovered
            ? "border-amber-400 bg-amber-400/10 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            : "border-white/30"
        } flex items-center justify-center`}
      >
        {/* Center Crosshair Dot */}
        <div
          className={`pointer-events-none w-1 h-1 rounded-full ${
            isHovered ? "bg-amber-400" : "bg-white/60"
          }`}
        />
      </motion.div>

      {/* Viewfinder Telemetry Tag */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ left: pos.x + 20, top: pos.y - 12 }}
          className="pointer-events-none absolute font-mono text-[9px] uppercase tracking-wider text-amber-400 bg-black/80 px-2 py-0.5 rounded border border-amber-400/30 backdrop-blur-md"
        >
          TARGET // 50mm f/1.4
        </motion.div>
      )}
    </div>
  );
}
