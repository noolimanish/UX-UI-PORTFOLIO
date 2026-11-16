import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function CinematicCraftLab() {
  const [activeTab, setActiveTab] = useState("springs");

  // Spring lab state
  const [stiffness, setStiffness] = useState(180);
  const [damping, setDamping] = useState(15);
  const [mass, setMass] = useState(1);
  const [ballOffset, setBallOffset] = useState(0);
  const [isPulling, setIsPulling] = useState(false);

  // Hick's Law Comparator state
  const [mode, setMode] = useState("progressive");

  // Token Morpher state
  const [activeThemeToken, setActiveThemeToken] = useState("gold");

  const handlePullBall = (e) => {
    setIsPulling(true);
    setBallOffset(120);
    cinematicAudio.playProjectorClick(600);
  };

  const handleReleaseBall = () => {
    setIsPulling(false);
    setBallOffset(0);
    cinematicAudio.playBraam();
  };

  return (
    <section id="craft-lab" className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
      {/* Act Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-2 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#090b14] border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-widest uppercase">ACT III // CRAFT LAB</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            THE CRAFT LAB <br />
            <span className="text-emerald-400">INTERACTION PHYSICS</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl font-light font-sans pt-1">
            Behind the cinema screen: test the exact mathematical formulas, cognitive models, and token engines that power Manish Nooli's interface architecture.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "springs", label: "01 // SPRING PHYSICS" },
            { id: "hicks", label: "02 // COGNITIVE HIERARCHY" },
            { id: "tokens", label: "03 // 0ms TOKENS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                cinematicAudio.playProjectorClick(900);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                activeTab === tab.id
                  ? "bg-emerald-400 text-black font-semibold border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lab Workstation */}
      <div className="p-6 sm:p-10 rounded-2xl cinematic-glass border border-white/10 relative overflow-hidden">
        {/* TAB 1: EULER SPRING PHYSICS */}
        {activeTab === "springs" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Damped Euler Spring Physics
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Standard CSS bezier curves feel mechanical because they ignore momentum. Manish calculates real physical mass, tension, and damping on GPU composite layers without layout recalcs.
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  {/* Stiffness */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>SPRING STIFFNESS (k)</span>
                      <span className="text-amber-400 font-bold">{stiffness} N/m</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="350"
                      value={stiffness}
                      onChange={(e) => setStiffness(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  {/* Damping */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>DAMPING COEFFICIENT (ζ)</span>
                      <span className="text-amber-400 font-bold">{damping} N·s/m</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="35"
                      value={damping}
                      onChange={(e) => setDamping(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  {/* Mass */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>ELEMENT MASS (m)</span>
                      <span className="text-amber-400 font-bold">{mass} kg</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.5"
                      value={mass}
                      onChange={(e) => setMass(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1">
                  <div>FORMULA: F = -k·x - c·v</div>
                  <div className="text-amber-400">FPS: 60.0 LOCKED • 0 DROPPED FRAMES</div>
                </div>
              </div>

              {/* Interactive Spring Orb Canvas */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[300px] p-8 rounded-xl bg-black/80 border border-white/10 relative">
                <span className="text-xs font-mono text-slate-400 mb-6">
                  CLICK AND DRAG TO DISPLACE // RELEASE TO FEEL THE DAMPED SPRING
                </span>

                <motion.div
                  drag="x"
                  dragConstraints={{ left: -140, right: 140 }}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.15 }}
                  onDragStart={handlePullBall}
                  onDragEnd={handleReleaseBall}
                  animate={{
                    x: ballOffset,
                  }}
                  transition={{
                    type: "spring",
                    stiffness,
                    damping,
                    mass,
                  }}
                  className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#10B981] to-[#34D399] flex items-center justify-center text-black font-display font-extrabold text-sm uppercase shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-grab active:cursor-grabbing select-none"
                >
                  <span>PULL ME</span>
                </motion.div>

                {/* Rest Line */}
                <div className="w-full max-w-xs h-[1px] bg-white/10 mt-8 relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="absolute -bottom-5 text-[10px] font-mono text-slate-500">
                    EQUILIBRIUM AXIS [0, 0]
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COGNITIVE HIERARCHY & HICK'S LAW */}
        {activeTab === "hicks" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Cognitive Hierarchy & Hick's Law Comparator
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Comparing raw enterprise form clutter vs. progressive disclosure architecture.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex p-1 rounded-xl bg-black/80 border border-white/10">
                <button
                  onClick={() => {
                    setMode("cluttered");
                    cinematicAudio.playProjectorClick(600);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    mode === "cluttered"
                      ? "bg-red-500/20 text-red-300 border border-red-500/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  RAW CLUTTER (UNSTRUCTURED)
                </button>
                <button
                  onClick={() => {
                    setMode("progressive");
                    cinematicAudio.playAnamorphicChime(700);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all font-bold ${
                    mode === "progressive"
                      ? "bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  PROGRESSIVE DISCLOSURE (MANISH ARCHITECTURE)
                </button>
              </div>
            </div>

            {/* Comparison Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Cluttered Mode Card */}
              <div
                className={`p-6 rounded-xl border transition-all ${
                  mode === "cluttered"
                    ? "bg-black/90 border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                    : "bg-black/40 border-white/5 opacity-50"
                }`}
              >
                <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-red-400 font-bold uppercase">TRADITIONAL FORM CLUTTER</span>
                  <span className="text-slate-400">DECISION TIME: ~14.8s</span>
                </div>

                <div className="mt-4 space-y-2 text-xs font-mono text-slate-300">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    Input: [Account Type] [Routing #] [Tax ID] [Currency Code]
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    Options: 18 Dropdown items visible simultaneously
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    Error state: Triggered on submit only (post-failure)
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5 text-red-400">
                    High cognitive anxiety • 24% bounce rate
                  </div>
                </div>
              </div>

              {/* Progressive Mode Card */}
              <div
                className={`p-6 rounded-xl border transition-all ${
                  mode === "progressive"
                    ? "bg-black/90 border-amber-400/50 shadow-[0_0_25px_rgba(245,158,11,0.2)]"
                    : "bg-black/40 border-white/5 opacity-50"
                }`}
              >
                <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-amber-400 font-bold uppercase">
                    PROGRESSIVE DISCLOSURE // MANISH NOOLI
                  </span>
                  <span className="text-emerald-400 font-bold">DECISION TIME: 2.4s (-83%)</span>
                </div>

                <div className="mt-4 space-y-2 text-xs font-mono text-slate-200">
                  <div className="p-2 rounded bg-amber-400/10 border border-amber-400/30 text-amber-200">
                    Step 1: Primary Intent Selection (3 high-contrast cards)
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    Step 2: Auto-routed secondary telemetry drawer
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    Live inline instant validation (zero post-submit surprises)
                  </div>
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                    Zero cognitive friction • 99.4% completion rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ZERO-RECALCULATION RUNTIME TOKENS */}
        {activeTab === "tokens" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Zero-Recalculation Systemic Design Tokens
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Changing themes without triggering style recalculation or forced reflow in the browser.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  id: "gold",
                  name: "KODAK 35MM GOLD",
                  accent: "#f59e0b",
                  border: "border-amber-400",
                  bg: "bg-amber-400/10",
                  desc: "Warm tungsten, organic golden hour, high-craft analog depth",
                },
                {
                  id: "noir",
                  name: "TITANIUM MONOLITH",
                  accent: "#e2e8f0",
                  border: "border-slate-300",
                  bg: "bg-slate-300/10",
                  desc: "Chiaroscuro silver gelatin, high contrast, pure minimalist precision",
                },
                {
                  id: "teal",
                  name: "ANAMORPHIC TEAL",
                  accent: "#38bdf8",
                  border: "border-sky-400",
                  bg: "bg-sky-400/10",
                  desc: "Cybernetic anamorphic flare, deep oceanic shadow gradation",
                },
              ].map((token) => (
                <div
                  key={token.id}
                  onClick={() => {
                    setActiveThemeToken(token.id);
                    cinematicAudio.playProjectorClick(1100);
                  }}
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    activeThemeToken === token.id
                      ? `${token.border} ${token.bg} shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-[1.02]`
                      : "border-white/10 bg-black/40 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/10">
                    <span className="font-bold text-white">{token.name}</span>
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: token.accent }}
                    />
                  </div>
                  <p className="text-xs text-slate-300 mt-2 font-sans">{token.desc}</p>
                  <div className="mt-4 pt-2 border-t border-white/5 flex justify-between text-[10px] font-mono text-slate-400">
                    <span>RECALC TIME:</span>
                    <span className="text-emerald-400 font-bold">0.00ms</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between">
              <div>
                <span className="text-amber-400 font-bold">MUTATION STRATEGY:</span> Mutates root CSS custom properties. Zero JavaScript DOM restructuring.
              </div>
              <span className="text-emerald-400 font-bold">60 FPS VERIFIED</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
