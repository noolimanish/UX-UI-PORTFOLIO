import React, { useState, useEffect } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function FilmTimelineScrubber({
  activeAct = "act-1",
  onNavigateAct,
}) {
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

  const chapters = [
    { id: "act-1", label: "ACT I", name: "VISION", time: "00:00" },
    { id: "act-2", label: "ACT II", name: "MASTERWORKS", time: "00:35" },
    { id: "act-3", label: "ACT III", name: "CRAFT LAB", time: "01:20" },
    { id: "act-4", label: "ACT IV", name: "SCREENING", time: "02:05" },
    { id: "act-5", label: "ACT V", name: "CREDITS", time: "02:50" },
  ];

  const handleSeek = (actId) => {
    cinematicAudio.playProjectorClick(1100);
    onNavigateAct?.(actId);
  };

  return (
    <aside aria-label="Playback Controller" className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-3xl bg-[#090b10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2.5 sm:px-5 sm:py-3 shadow-[0_15px_45px_rgba(0,0,0,0.85)] flex items-center justify-between gap-3 text-xs font-mono">
      {/* Film Reel Scrubber Track */}
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-[10px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-white font-bold tracking-wider">TIMELINE SCRUBBER</span>
          </div>
          <span className="text-amber-400 font-bold">
            {Math.round(scrollProgress)}% PROCESSED
          </span>
        </div>

        {/* Progress Track with Act Markers */}
        <div className="relative w-full h-2 rounded-full bg-white/10 overflow-hidden cursor-pointer">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Chapter Pins */}
        <div className="flex justify-between text-[9px] sm:text-[10px] text-slate-500 pt-0.5">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleSeek(ch.id)}
              className={`hover:text-amber-400 transition-colors uppercase font-bold flex items-center gap-1 ${
                activeAct === ch.id ? "text-amber-400" : ""
              }`}
            >
              <span>{ch.label}</span>
              <span className="hidden sm:inline">[{ch.time}]</span>
            </button>
          ))}
        </div>
      </div>

      {/* Next Act Step Button */}
      <button
        onClick={() => {
          const currentIndex = chapters.findIndex((c) => c.id === activeAct);
          const nextIndex = (currentIndex + 1) % chapters.length;
          handleSeek(chapters[nextIndex].id);
        }}
        className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0"
      >
        <span>NEXT ACT</span>
        <span>→</span>
      </button>
    </aside>
  );
}
