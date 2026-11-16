import React, { useState, useEffect } from "react";

export default function FlightTimelineTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-3 sm:right-6 top-24 bottom-24 z-40 hidden sm:flex flex-col items-center justify-between pointer-events-none select-none font-mono text-[10px] text-white/80">
      {/* Top Year Marker */}
      <div className="flex flex-col items-center gap-1">
        <span className="font-semibold text-emerald-400">2020</span>
        <span className="text-xs text-white">✈</span>
      </div>

      {/* Vertical Dashed Flight Track */}
      <div className="relative w-[2px] flex-1 my-3 bg-white/15">
        {/* Animated Moving Airplane */}
        <div
          className="absolute -left-[9px] -translate-y-1/2 transition-all duration-150 flex items-center justify-center text-sm text-emerald-400 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          style={{
            top: `${scrollProgress}%`,
          }}
        >
          ✈
        </div>

        {/* Active Track Highlight */}
        <div
          className="w-full transition-all duration-150 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          style={{
            height: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* Bottom Release Date Marker */}
      <div className="flex flex-col items-center gap-1">
        <span className="font-semibold text-white">2026</span>
        <span className="font-bold text-emerald-400">NOW</span>
      </div>
    </div>
  );
}
