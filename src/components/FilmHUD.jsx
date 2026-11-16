import React, { useState, useEffect } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function FilmHUD({
  activeAct = "act-1",
  onNavigateAct,
  aspectRatio = "cinemascope",
  onToggleAspectRatio,
  colorGrade = "kodak-gold",
  onChangeColorGrade,
  onOpenDossier,
  onReplayPrologue,
  onOpenShowreel,
}) {
  const [isMuted, setIsMuted] = useState(false);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Realistic 24 FPS running timecode
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const totalSeconds = Math.floor(frame / 24);
      const ff = String(frame % 24).padStart(2, "0");
      const ss = String(totalSeconds % 60).padStart(2, "0");
      const mm = String(Math.floor(totalSeconds / 60) % 60).padStart(2, "0");
      const hh = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      setTimecode(`${hh}:${mm}:${ss}:${ff}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const handleToggleAudio = () => {
    const muted = cinematicAudio.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      cinematicAudio.playProjectorClick(900);
      cinematicAudio.playBraam();
    }
  };

  const navActs = [
    { id: "act-1", label: "ACT I", name: "THE VISION" },
    { id: "act-2", label: "ACT II", name: "FEATURE PRODUCTIONS" },
    { id: "act-3", label: "ACT III", name: "CRAFT LAB" },
    { id: "act-4", label: "ACT IV", name: "SCREENING ROOM" },
    { id: "act-5", label: "ACT V", name: "CREDITS" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#050608]/90 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-6 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Film Slate Identity & REC Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-bold tracking-wider text-[11px]">REC</span>
            <span className="text-white/20">|</span>
            <span className="text-amber-400 font-semibold tracking-wider text-[11px]">
              {timecode}
            </span>
          </div>

          <div className="hidden lg:flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-white">
                MANISH NOOLI
              </span>
              <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-1.5 rounded">
                DIR. CUT
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              4K 60FPS // PRODUCT ARCHITECT
            </span>
          </div>
        </div>

        {/* Center: Act Chapter Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navActs.map((act) => {
            const isActive = activeAct === act.id;
            return (
              <button
                key={act.id}
                onClick={() => {
                  cinematicAudio.playProjectorClick(700);
                  onNavigateAct?.(act.id);
                }}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-amber-400/15 text-amber-400 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className="font-bold">{act.label}</span>
                <span className="hidden xl:inline text-[11px] opacity-75">
                  {act.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right: Cinematic Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Showreel Button */}
          <button
            onClick={() => {
              cinematicAudio.playBraam();
              onOpenShowreel?.();
            }}
            title="Watch 4K Motion Showreel"
            className="px-2.5 py-1 rounded bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-xs font-mono text-amber-400 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>▶</span>
            <span className="text-[11px] uppercase font-bold hidden md:inline">SHOWREEL</span>
          </button>

          {/* Replay Prologue Button */}
          <button
            onClick={() => {
              cinematicAudio.playProjectorClick(900);
              onReplayPrologue?.();
            }}
            title="Replay Cinematic Prologue"
            className="px-2.5 py-1 rounded bg-black/50 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-amber-400 transition-all hidden lg:flex items-center gap-1.5"
          >
            <span>🎬</span>
            <span className="text-[11px] uppercase">PROLOGUE</span>
          </button>

          {/* Aspect Ratio Switcher */}
          <button
            onClick={() => {
              cinematicAudio.playProjectorClick(1100);
              onToggleAspectRatio?.();
            }}
            title="Toggle Cinematic Aspect Ratio"
            className="px-2.5 py-1 rounded bg-black/50 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-amber-400 transition-all flex items-center gap-1.5"
          >
            <span className="text-amber-400">⛶</span>
            <span className="text-[11px] uppercase hidden sm:inline">
              {aspectRatio === "cinemascope"
                ? "2.39:1"
                : aspectRatio === "widescreen"
                ? "16:9"
                : "FULL"}
            </span>
          </button>

          {/* Sound Design SFX Button */}
          <button
            onClick={handleToggleAudio}
            title="Toggle Cinematic Foley & Sound Design"
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all flex items-center gap-1.5 border ${
              isMuted
                ? "bg-black/50 border-white/10 text-slate-500"
                : "bg-amber-400/15 border-amber-400/40 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
            }`}
          >
            <span>{isMuted ? "🔇" : "🔊"}</span>
            <span className="text-[10px] uppercase font-bold hidden sm:inline">
              {isMuted ? "MUTED" : "AUDIO ON"}
            </span>
          </button>

          {/* Screenplay Dossier Modal Button */}
          <button
            onClick={() => {
              cinematicAudio.playAnamorphicChime(780);
              onOpenDossier?.();
            }}
            className="px-3.5 py-1 rounded bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <span>DOSSIER</span>
            <span className="text-sm font-bold">↗</span>
          </button>

          {/* Mobile Acts Menu Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              cinematicAudio.playProjectorClick(900);
            }}
            className="md:hidden px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-amber-400 flex items-center gap-1 cursor-pointer"
          >
            <span>{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Acts Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 pt-2 border-t border-white/10 flex flex-col gap-1.5 pb-2">
          {navActs.map((act) => {
            const isActive = activeAct === act.id;
            return (
              <button
                key={act.id}
                onClick={() => {
                  cinematicAudio.playProjectorClick(700);
                  onNavigateAct?.(act.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-3 py-2 rounded text-left text-xs font-mono transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-amber-400/20 text-amber-400 border border-amber-400/40"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span className="font-bold">{act.label}</span>
                <span className="text-[11px] text-slate-400">{act.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
