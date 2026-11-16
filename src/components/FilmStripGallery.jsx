import React from "react";
import { cinematicAudio } from "../utils/CinematicAudio";

const FILM_FRAMES = [
  {
    frameNo: "FRAME 014",
    title: "NovaUI Spring Physics Curve",
    subtitle: "Damped Euler Harmonic Oscillator",
    meta: "60 FPS // GPU COMPOSITE",
    spec: "F = -kx - cv",
  },
  {
    frameNo: "FRAME 028",
    title: "Pulse Virtual Viewport",
    subtitle: "28 Active DOM Nodes Fixed",
    meta: "10,000 LOGS/SEC // WORKER",
    spec: "O(1) Spatial Virtualization",
  },
  {
    frameNo: "FRAME 042",
    title: "Aether Euclidean Snapping",
    subtitle: "Radial Magnetic Force Fields",
    meta: "SUB-15MS AUDIO LATENCY",
    spec: "d = √((x₂-x₁)² + (y₂-y₁)²)",
  },
  {
    frameNo: "FRAME 056",
    title: "Lumina Progressive Tree",
    subtitle: "Hick's Law Decision Graph",
    meta: "-42% DECISION TIME",
    spec: "T = b · log₂(n + 1)",
  },
  {
    frameNo: "FRAME 070",
    title: "Chroma GPU Node Graph",
    subtitle: "WebGL 2.0 Fragment Shaders",
    meta: "120 FPS CAPABLE",
    spec: "vec4 color = mix(a, b, t)",
  },
  {
    frameNo: "FRAME 084",
    title: "Runtime Design Tokens",
    subtitle: "Zero CSS Recalculation Engine",
    meta: "0.0ms RENDER TIME",
    spec: "var(--token-semantic)",
  },
];

export default function FilmStripGallery() {
  return (
    <div className="w-full space-y-4 pt-10">
      {/* Film Strip Header */}
      <div className="flex items-center justify-between text-xs font-mono px-2">
        <div className="flex items-center gap-2">
          <span className="text-amber-400">🎞️</span>
          <span className="text-white font-bold tracking-wider uppercase">
            35MM FILM REEL CONTACT SHEET // ARCHITECTURAL BLUEPRINTS
          </span>
        </div>
        <span className="text-slate-500 hidden sm:inline">
          DRAG OR SCROLL HORIZONTALLY
        </span>
      </div>

      {/* The Physical 35mm Film Strip Container */}
      <div className="relative w-full rounded-2xl bg-black border border-white/10 p-4 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        {/* Top Sprocket Perforations */}
        <div className="flex justify-between gap-3 pb-3 border-b border-white/[0.08] overflow-hidden opacity-50 select-none">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className="w-3.5 h-2 rounded-[2px] bg-white/20 border border-white/40 shrink-0"
            />
          ))}
        </div>

        {/* Horizontal Scrolling Frames */}
        <div className="flex gap-4 overflow-x-auto py-4 scrollbar-none snap-x snap-mandatory">
          {FILM_FRAMES.map((f, idx) => (
            <div
              key={idx}
              onClick={() => cinematicAudio.playProjectorClick(1000 + idx * 80)}
              className="group min-w-[260px] sm:min-w-[300px] rounded-xl bg-zinc-950/80 border border-white/10 hover:border-amber-400/50 p-5 space-y-3 snap-center cursor-pointer transition-all hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              {/* Frame Number Tag */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-white/5 pb-2">
                <span className="text-amber-400 font-bold">{f.frameNo}</span>
                <span className="group-hover:text-white transition-colors">
                  KODAK 35MM
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  {f.title}
                </h4>
                <p className="text-xs text-slate-400 font-sans">{f.subtitle}</p>
              </div>

              {/* Technical Spec Box */}
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 font-mono text-[10px] text-amber-400/90 space-y-1">
                <div className="text-slate-400 text-[9px] uppercase">
                  EQUATION / ARCHITECTURE:
                </div>
                <div className="font-bold">{f.spec}</div>
              </div>

              <div className="text-[10px] font-mono text-slate-500 pt-1">
                {f.meta}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Sprocket Perforations */}
        <div className="flex justify-between gap-3 pt-3 border-t border-white/[0.08] overflow-hidden opacity-50 select-none">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className="w-3.5 h-2 rounded-[2px] bg-white/20 border border-white/40 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
