import React, { useState } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function ScreeningRoom({
  colorGrade = "kodak-gold",
  onChangeColorGrade,
  aspectRatio = "cinemascope",
  onChangeAspectRatio,
}) {
  const [ambientActive, setAmbientActive] = useState(false);

  const GRADES = [
    {
      id: "kodak-gold",
      name: "KODAK 35MM GOLD",
      palette: "Tungsten #F59E0B // Warm Amber",
      desc: "Inspired by Roger Deakins' warm golden hour cinematography. Rich organic shadows with glowing tungsten highlights.",
      bgPreview: "from-amber-900/40 via-black to-zinc-950",
      accent: "#f59e0b",
    },
    {
      id: "blade-runner",
      name: "BLADE RUNNER 2049",
      palette: "Anamorphic Teal #38BDF8 & Amber #F97316",
      desc: "Atmospheric neon chiaroscuro. High-contrast oceanic shadows accented by sharp neon vehicle flares.",
      bgPreview: "from-sky-950/40 via-black to-orange-950/30",
      accent: "#38bdf8",
    },
    {
      id: "dune-monolith",
      name: "DUNE MONOLITH",
      palette: "Desert Bronze #E5A95D & Mineral Sand",
      desc: "Brutalist architectural minimalism. Sun-bleached titanium and coarse spice-dusted atmospheric haze.",
      bgPreview: "from-amber-950/30 via-zinc-950 to-stone-900/40",
      accent: "#e5a95d",
    },
    {
      id: "imax-noir",
      name: "IMAX 70MM MONOCHROME",
      palette: "Silver Gelatin #E2E8F0 & Obsidian",
      desc: "Ultra-fine film grain on silver emulsion. Extreme tonal range with deep, infinite black voids.",
      bgPreview: "from-slate-800/30 via-black to-zinc-950",
      accent: "#e2e8f0",
    },
  ];

  const handleToggleAmbient = () => {
    const isPlaying = cinematicAudio.toggleAmbientDrone();
    setAmbientActive(isPlaying);
    cinematicAudio.playProjectorClick(900);
  };

  return (
    <section id="act-4" className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Act Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/50 border border-amber-400/30 text-xs font-mono text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">ACT IV // SCREENING ROOM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-cinematic uppercase tracking-wide text-white leading-tight">
            COLOR GRADING & PROJECTION SUITE
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Calibrate the portfolio's visual color grade, anamorphic letterbox mattes, and auditory soundscape in real-time.
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/50 px-3.5 py-1.5 rounded-lg border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>PROJECTION CONSOLE // ONLINE</span>
        </div>
      </div>

      {/* Color Grading Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-amber-400 font-bold uppercase tracking-wider">
            FILM STOCK COLOR GRADES (SELECT TO APPLY GLOBALLY)
          </span>
          <span className="text-slate-500">REAL-TIME SHADER RE-INTERPOLATION</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GRADES.map((grade) => {
            const isSelected = colorGrade === grade.id;
            return (
              <div
                key={grade.id}
                onClick={() => {
                  onChangeColorGrade?.(grade.id);
                  cinematicAudio.playProjectorClick(1200);
                  cinematicAudio.playAnamorphicChime(680);
                }}
                className={`p-5 rounded-2xl border cursor-pointer transition-all space-y-4 relative overflow-hidden ${
                  isSelected
                    ? "bg-black/90 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.25)] scale-[1.02]"
                    : "bg-black/50 border-white/10 hover:border-white/30 hover:bg-black/70"
                }`}
              >
                {/* Visual Swatch Mini-Viewport */}
                <div
                  className={`h-24 rounded-xl bg-gradient-to-tr ${grade.bgPreview} border border-white/10 flex items-center justify-center relative overflow-hidden`}
                >
                  <div
                    className="w-10 h-10 rounded-full blur-md opacity-60"
                    style={{ backgroundColor: grade.accent }}
                  />
                  <span className="relative z-10 text-[10px] font-mono text-white font-bold tracking-widest uppercase">
                    {isSelected ? "● CURRENT GRADE" : "PREVIEW"}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-white">{grade.name}</h4>
                  <div className="text-[11px] font-mono text-amber-400 mt-0.5">
                    {grade.palette}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-sans font-light leading-relaxed">
                    {grade.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Aspect Ratio & Foley Soundstage Controllers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aspect Ratio Selector */}
        <div className="p-6 rounded-2xl cinematic-glass space-y-4 border border-white/10">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-amber-400 font-bold uppercase">
              CINEMATOGRAPHIC ASPECT RATIOS
            </span>
            <span className="text-slate-400">LETTERBOX MATTES</span>
          </div>

          <p className="text-xs text-slate-300 font-sans font-light">
            Switch between classic anamorphic Panavision (2.39:1) letterboxing, widescreen 16:9, and full-bleed presentation.
          </p>

          <div className="grid grid-cols-3 gap-2.5 pt-2">
            {[
              { id: "cinemascope", name: "2.39:1", sub: "CINEMASCOPE" },
              { id: "widescreen", name: "16:9", sub: "DIRECTOR CUT" },
              { id: "full", name: "1.43:1", sub: "IMAX FULL" },
            ].map((ratio) => (
              <button
                key={ratio.id}
                onClick={() => {
                  onChangeAspectRatio?.(ratio.id);
                  cinematicAudio.playProjectorClick(950);
                }}
                className={`p-3 rounded-xl border text-center font-mono transition-all ${
                  aspectRatio === ratio.id
                    ? "bg-amber-400 text-black border-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/30"
                }`}
              >
                <div className="text-sm font-bold">{ratio.name}</div>
                <div className="text-[9px] opacity-75">{ratio.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Foley & Synthesizer Soundstage */}
        <div className="p-6 rounded-2xl cinematic-glass space-y-4 border border-white/10">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-amber-400 font-bold uppercase">
              CINEMATIC FOLEY SOUNDSTAGE
            </span>
            <span className="text-slate-400">WEB AUDIO SYNTH</span>
          </div>

          <p className="text-xs text-slate-300 font-sans font-light">
            Trigger live mathematical sound synthesis — zero downloaded audio assets, synthesized straight on your CPU.
          </p>

          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <button
              onClick={() => cinematicAudio.playBraam()}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/40 text-left transition-all active:scale-95"
            >
              <div className="text-xs font-mono font-bold text-amber-400">
                ▶ SUB-BASS BRAAM
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Hans Zimmer brass rumble
              </div>
            </button>

            <button
              onClick={() => cinematicAudio.playProjectorClick(1400)}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/40 text-left transition-all active:scale-95"
            >
              <div className="text-xs font-mono font-bold text-amber-400">
                ▶ 35MM PROJECTOR CLICK
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Film gate mechanical snap
              </div>
            </button>

            <button
              onClick={() => cinematicAudio.playAnamorphicChime(880)}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/40 text-left transition-all active:scale-95"
            >
              <div className="text-xs font-mono font-bold text-amber-400">
                ▶ ANAMORPHIC SHIMMER
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Harmonic bell resonance
              </div>
            </button>

            <button
              onClick={handleToggleAmbient}
              className={`p-3 rounded-xl border text-left transition-all active:scale-95 ${
                ambientActive
                  ? "bg-amber-400/20 border-amber-400 text-amber-300"
                  : "bg-white/[0.04] border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              <div className="text-xs font-mono font-bold">
                {ambientActive ? "◼ STOP AMBIENCE" : "▶ ANALOG DRONE"}
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                65Hz warm tape hum
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
