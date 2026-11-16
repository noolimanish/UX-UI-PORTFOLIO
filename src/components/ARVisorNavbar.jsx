import React, { useState, useEffect } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function ARVisorNavbar({ activeSection, onNavigate, onRebootSystem, onOpenShowreel, onOpenDossier }) {
  const [localTime, setLocalTime] = useState("");
  const [isAudioMuted, setIsAudioMuted] = useState(false);

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

  const handleToggleAudio = () => {
    const nextMute = !isAudioMuted;
    setIsAudioMuted(nextMute);
    cinematicAudio.isMuted = nextMute;
    if (!nextMute) {
      cinematicAudio.playProjectorClick(1200);
    }
  };

  const NAV_ITEMS = [
    { id: "hero", label: "INTRO", act: "ACT 01" },
    { id: "projects-hud", label: "CREATIONS", act: "ACT 02" },
    { id: "copassengers", label: "CREW & PERSONAS", act: "ACT 03" },
    { id: "runway-vlogs", label: "ROADMAP LOGS", act: "ACT 04" },
    { id: "craft-lab", label: "CRAFT LAB", act: "ACT 05" },
    { id: "credits", label: "CREDITS & HIRE", act: "ACT 06" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-3 sm:px-6 py-2 sm:py-3">
      {/* Top Holographic AR Telemetry Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] sm:text-xs font-shareTech text-slate-400 border-b border-white/10 pb-1.5 px-2 select-none tracking-widest pointer-events-auto backdrop-blur-md bg-black/40 rounded-t-xl">
        {/* Left Telemetry: Level & Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white">LVL 48</span>
            <span className="text-slate-400">// SENIOR PRODUCT DESIGNER &amp; UX ENGINEER</span>
          </div>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline text-[#F84A4A] font-bold">
            AVAILABILITY: [ OPEN FOR HIRE ]
          </span>
        </div>

        {/* Right Telemetry: Server, Clock, Audio & Reboot */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <span>LOCAL:</span>
            <span className="text-[#38BDF8] font-mono font-bold">{localTime || "12:00:00"}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleAudio}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-slate-300 cursor-pointer transition-colors"
            title="Toggle Web Audio Synthesizer"
          >
            <span>{isAudioMuted ? "🔇 SOUND: OFF" : "🔊 SOUND: ON"}</span>
          </button>

          {/* Intro Loading Screen Reboot Button */}
          <button
            onClick={() => {
              cinematicAudio.playProjectorClick(1100);
              onRebootSystem?.();
            }}
            className="px-2 py-0.5 rounded bg-[#F84A4A]/20 hover:bg-[#F84A4A]/30 border border-[#F84A4A]/40 text-[#F84A4A] text-[10px] font-bold cursor-pointer transition-all active:scale-95"
            title="Reboot into Sci-Fi Loading Screen"
          >
            ⟲ REBOOT INTRO
          </button>
        </div>
      </div>

      {/* Main Augmented Reality Floating Visor Navigation Bar (From Attachment 2) */}
      <nav className="max-w-7xl mx-auto mt-1 p-2 rounded-2xl bg-[#090b14]/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(56,189,248,0.15)] pointer-events-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none select-none relative">
        {/* Visor Corner AR Tech Brackets */}
        <div className="absolute top-1 left-2 text-[9px] font-mono text-[#38BDF8]/60 pointer-events-none">
          ⌜ AR.HUD // V-2.6
        </div>
        <div className="absolute top-1 right-2 text-[9px] font-mono text-[#F84A4A]/60 pointer-events-none">
          SYS.ONLINE ⌝
        </div>

        {/* Left Brand Badge */}
        <div
          onClick={() => onNavigate?.("hero")}
          className="flex items-center gap-2 pl-2 pr-4 cursor-pointer group shrink-0"
        >
          <div className="w-7 h-7 rounded-lg bg-[#F84A4A] flex items-center justify-center text-black font-anton text-sm font-black shadow-[0_0_12px_rgba(248,74,74,0.6)] group-hover:scale-105 transition-transform">
            MN
          </div>
          <div className="hidden lg:block font-shareTech text-left">
            <div className="font-bold text-white text-xs tracking-wider">MANISH NOOLI</div>
            <div className="text-[9px] text-[#38BDF8] tracking-widest">PRODUCT ARCHITECT</div>
          </div>
        </div>

        {/* Center Nav Tabs Array (Exact Pill Style from Attachment 2) */}
        <div className="flex items-center gap-1 sm:gap-2 mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  cinematicAudio.playProjectorClick(950);
                  onNavigate?.(item.id);
                }}
                className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-orbitron text-[10px] sm:text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? "bg-[#F84A4A] text-black shadow-[0_0_20px_rgba(248,74,74,0.7)] scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Action Buttons: Showreel & Resume */}
        <div className="flex items-center gap-2 shrink-0 pr-1">
          <button
            onClick={() => {
              cinematicAudio.playBraam();
              onOpenShowreel?.();
            }}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-orbitron text-[10px] font-bold tracking-wider flex items-center gap-1 cursor-pointer transition-all active:scale-95 border border-white/15"
          >
            <span>🎬</span>
            <span className="hidden sm:inline">SHOWREEL</span>
          </button>

          <button
            onClick={() => {
              cinematicAudio.playAnamorphicChime(850);
              onOpenDossier?.();
            }}
            className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#38BDF8]/20 hover:bg-[#38BDF8]/35 border border-[#38BDF8]/60 text-[#38BDF8] font-orbitron text-[10px] font-bold tracking-wider flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
          >
            <span>📄</span>
            <span>RESUME</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
