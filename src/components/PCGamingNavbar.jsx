import React, { useState, useEffect } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";
import { THEMES } from "../utils/ThemeEngine";

export default function PCGamingNavbar({
  activeSection,
  onNavigate,
  onRebootSystem,
  onOpenShowreel,
  onOpenDossier,
  currentTheme,
  onCycleTheme,
}) {
  const [localTime, setLocalTime] = useState("");
  const [isMuted, setIsMuted] = useState(cinematicAudio.isMuted);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const nextState = cinematicAudio.toggleMute();
    setIsMuted(nextState);
    if (!nextState) {
      try {
        cinematicAudio.playTactileClick(1200);
      } catch {}
    }
  };

  const NAV_ITEMS = [
    { id: "hero", label: "01 // INTRO" },
    { id: "flagship-studies", label: "02 // CASE STUDIES" },
    { id: "creative-lab", label: "03 // CREATIVE LAB" },
    { id: "skills-toolkit", label: "04 // SKILLS & TOOLS" },
    { id: "music-experience", label: "05 // MUSIC" },
    { id: "contact", label: "06 // CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-3 sm:px-6 py-2.5 sm:py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-[#050608]/90 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto select-none transition-all">
        
        {/* LEFT: Clean Call-sign & Real-Time Status Telemetry */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              try {
                cinematicAudio.playTactileClick(1000);
              } catch {}
              onNavigate?.("hero");
            }}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-2.5 h-2.5 rounded-sm rotate-45 transition-transform group-hover:rotate-90 group-hover:scale-110 bg-emerald-400" />
            <span className="font-display font-bold text-xs sm:text-sm text-white tracking-wide">
              MANISH<span className="text-emerald-400">.NOOLI</span>
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-white/10 text-[10px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">SYSTEM: ONLINE</span>
            <span className="text-white/20">|</span>
            <span className="text-emerald-400">UTC {localTime || "12:00:00"}</span>
          </div>
        </div>

        {/* CENTER: Flagship PC Gaming HUD Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-mono text-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  try {
                    cinematicAudio.playTactileClick(900);
                  } catch {}
                  onNavigate?.(item.id);
                }}
                className={`relative px-2.5 py-1.5 rounded-lg tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "text-white font-semibold bg-white/5"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: PC Gaming Rig Controls (Theme Cycler, SFX, Reboot, Resume) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Quick-Cycle Flagship Theme Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCycleTheme?.();
            }}
            title="Cycle Active UI/UX Theme (Instant CSS Recalibration)"
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-black/60 hover:bg-white/5 border border-white/15 text-[10px] font-mono text-white tracking-wider cursor-pointer transition-all active:scale-95 group shadow-inner"
          >
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full border border-black/50 shadow-sm bg-emerald-400" />
              <span className="w-2.5 h-2.5 rounded-full border border-black/50 shadow-sm bg-white" />
            </div>
            <span className="hidden sm:inline font-semibold">
              THEME: <span className="text-emerald-400">{currentTheme?.shortName || "EMERALD"}</span>
            </span>
            <span className="text-slate-400 group-hover:rotate-180 transition-transform">⟳</span>
          </button>

          {/* Minimalist Sound Toggle */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-[10px] font-mono flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{isMuted ? "🔇" : "🔊"}</span>
            <span className="hidden md:inline">{isMuted ? "OFF" : "SFX"}</span>
          </button>

          {/* Reboot Intro Screen */}
          <button
            onClick={() => {
              try {
                cinematicAudio.playTactileClick(1100);
              } catch {}
              onRebootSystem?.();
            }}
            title="Return to 'HI! ENTER THE SYSTEM' intro loading screen"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-[10px] font-mono cursor-pointer transition-all active:scale-95"
          >
            <span>⟲</span>
            <span>INTRO</span>
          </button>

          {/* Flagship Dossier / Resume CTA */}
          <button
            onClick={() => {
              try {
                cinematicAudio.playThemeChime(850);
              } catch {}
              onOpenDossier?.();
            }}
            className="px-3 sm:px-4 py-1.5 rounded-lg font-sans font-semibold text-xs tracking-wide uppercase bg-emerald-400 hover:bg-emerald-300 text-black cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>RESUME</span>
            <span className="text-[10px]">↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}
