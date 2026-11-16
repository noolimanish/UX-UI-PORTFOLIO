import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function CreativeMascotNavbar({
  activeSection,
  onNavigate,
  onOpenDossier,
}) {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mascotX, setMascotX] = useState(30);
  const navRef = useRef(null);
  const tabRefs = useRef({});

  const NAV_ITEMS = [
    { id: "hero", label: "Home" },
    { id: "case-studies", label: "Work" },
    { id: "skills-bowl", label: "Skills" },
    { id: "telly", label: "Telly" },
    { id: "creative-lab", label: "Playground" },
  ];

  // Update mascot position when active section or hover changes
  useEffect(() => {
    const targetId = hoveredTab || activeSection || "hero";
    const el = tabRefs.current[targetId];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const center = elRect.left - navRect.left + elRect.width / 2;
      setMascotX(center);
    }
  }, [hoveredTab, activeSection]);

  return (
    <header className="fixed top-8 sm:top-9 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none select-none">
      <div
        ref={navRef}
        className="relative flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-full bg-black/95 backdrop-blur-2xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)] pointer-events-auto transition-all"
      >
        {/* ========================================================
            THE PEEKING MASCOT SLIDING ON TOP OF THE NAVBAR
            (Reference Image 13: cute character with cartoon eyes)
            ======================================================== */}
        <motion.div
          animate={{ x: mascotX - 22 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="absolute -top-[23px] left-0 pointer-events-none flex flex-col items-center"
        >
          {/* Mascot Head with curved organic tab bottom */}
          <div className="relative w-11 h-7 rounded-t-full bg-white border-t border-x border-white/40 shadow-md flex items-center justify-center pt-1 overflow-hidden">
            {/* Cute Cartoon Eyes */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scaleY: [1, 0.1, 1, 1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.05, 0.1, 0.8, 1] }}
                className="w-2.5 h-1 rounded-full bg-black"
              />
              <motion.div
                animate={{ scaleY: [1, 0.1, 1, 1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.05, 0.1, 0.8, 1] }}
                className="w-2.5 h-1 rounded-full bg-black"
              />
            </div>
          </div>
          {/* Smooth black blending base */}
          <div className="w-12 h-1 bg-black -mt-[1px]" />
        </motion.div>

        {/* Navigation Tab Links */}
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                ref={(el) => (tabRefs.current[item.id] = el)}
                onMouseEnter={() => {
                  setHoveredTab(item.id);
                  try {
                    cinematicAudio.playTactileClick(1100);
                  } catch {}
                }}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => {
                  try {
                    cinematicAudio.playTactileClick(950);
                  } catch {}
                  onNavigate?.(item.id);
                }}
                className={`relative px-3 sm:px-4 py-1.5 rounded-full font-sans text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "text-white font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activePillDot"
                    className="w-1.5 h-1.5 mx-auto mt-0.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-white/20 mx-1 hidden sm:block" />

        {/* Fast Social Icons */}
        <div className="hidden sm:flex items-center gap-1">
          <a
            href="https://www.linkedin.com/in/manish-nooli/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            in
          </a>
          <a
            href="mailto:nmanish10@gmail.com"
            title="Email Direct"
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            ✉
          </a>
        </div>

        {/* Clean "Resume ↓" Pill Button (Reference Image 13) */}
        <button
          onClick={() => {
            try {
              cinematicAudio.playThemeChime(850);
            } catch {}
            onOpenDossier?.();
          }}
          className="ml-1 px-3.5 sm:px-4 py-1.5 rounded-full bg-white hover:bg-slate-200 text-black font-sans font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-1 cursor-pointer"
        >
          <span>Resume</span>
          <span className="text-xs font-bold">↓</span>
        </button>
      </div>
    </header>
  );
}
