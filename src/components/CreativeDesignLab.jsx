import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const CREATIVE_TABS = [
  { id: "motion", label: "01 // MOTION & MICRO-INTERACTIONS" },
  { id: "loaders", label: "02 // CREATIVE LOADING ANIMATIONS" },
  { id: "posters", label: "03 // POSTERS & VISUAL DESIGN" },
  { id: "side-projects", label: "04 // SIDE CONCEPTS & LAB" },
];

export const POSTER_ITEMS = [
  {
    id: "poster-1",
    title: "Typographic Kinetic Motion",
    category: "Swiss Grid • Editorial Poster",
    color: "from-zinc-900 to-black",
    tag: "AWARDS SELECTION",
    icon: "🔤",
    desc: "Rigorous 12-column Swiss typographic grid combined with fluid kinetic motion typography and optical kerning.",
  },
  {
    id: "poster-2",
    title: "Spatial Glassmorphism 3D",
    category: "VisionOS Spatial Design",
    color: "from-emerald-950/40 via-zinc-900 to-black",
    tag: "SPATIAL UI",
    icon: "🥽",
    desc: "Exploring depth planes, specular highlights, and eye-tracked elevation tokens for next-generation spatial computing.",
  },
  {
    id: "poster-3",
    title: "Bio-Telemetry Health Hub",
    category: "Data Visualization & Dark UI",
    color: "from-slate-900 to-black",
    tag: "HEALTH-TECH",
    icon: "💓",
    desc: "High-density physiological telemetry simplified through contextual color zoning and peripheral glanceability.",
  },
  {
    id: "poster-4",
    title: "Neo-Brutalist Commerce",
    category: "Experimental E-Commerce",
    color: "from-zinc-800 to-black",
    tag: "EXPERIMENTAL",
    icon: "⚡",
    desc: "High-contrast borders, raw geometry, and tactile micro-interactions built to disrupt conventional SaaS checkout patterns.",
  },
];

export const SIDE_CONCEPTS = [
  {
    id: "concept-1",
    title: "AirDrop Gesture Wave",
    category: "Mobile Interaction Concept",
    desc: "Directional device pointing using UWB (Ultra-Wideband) radar for 1-tap peer-to-peer file sharing with spring physics.",
    stat: "0.2s Transfer Trigger",
    icon: "📡",
  },
  {
    id: "concept-2",
    title: "Adaptive Dark Mode Contrast",
    category: "Accessibility Research",
    desc: "Dynamic ambient lux sensor calibration that shifts interface contrast ratios automatically to prevent circadian eye strain.",
    stat: "100% WCAG AAA",
    icon: "👁️",
  },
  {
    id: "concept-3",
    title: "Voice-First Vernacular Drawer",
    category: "HelpFarm Research Spin-Off",
    desc: "An audio-driven navigation drawer designed for non-literate agricultural workers in rural Telangana and Andhra Pradesh.",
    stat: "94% Task Completion",
    icon: "🎙️",
  },
];

export default function CreativeDesignLab() {
  const [activeTab, setActiveTab] = useState("motion");

  // State for interactive micro-interaction playground
  const [isDynamicIslandExpanded, setIsDynamicIslandExpanded] = useState(false);
  const [isLiquidToggled, setIsLiquidToggled] = useState(false);
  const [sliderValue, setSliderValue] = useState(65);
  const [activeLoaderIndex, setActiveLoaderIndex] = useState(0);

  const handleDynamicIslandToggle = () => {
    setIsDynamicIslandExpanded((prev) => !prev);
    try {
      cinematicAudio.playTactileClick(1200);
    } catch {}
  };

  const handleLiquidToggle = () => {
    setIsLiquidToggled((prev) => !prev);
    try {
      cinematicAudio.playTactileClick(900);
    } catch {}
  };

  return (
    <section id="creative-lab" className="relative py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 select-none border-t border-white/10">
      
      {/* SECTION HEADER: Creative UI/UX Statement */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>// 03 EXPERIMENTAL CREATIVE LAB</span>
          </div>

          <div className="relative inline-block">
            <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-white">
              Creative Lab &amp; <span className="text-emerald-400">Craft</span>
            </h2>
            <div className="w-full h-1.5 sm:h-2 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] mt-3 rounded-full" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Where creative concepts come to life: playable micro-interactions, custom loading animations, side experiments, and visual posters.
          </p>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          {CREATIVE_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  try {
                    cinematicAudio.playTactileClick(950);
                  } catch {}
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-emerald-400 text-black font-semibold border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-105"
                    : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          PANEL 1: INTERACTIVE MOTION & MICRO-INTERACTIONS PLAYGROUND
          ======================================================== */}
      {activeTab === "motion" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Micro-Interaction 1: Interactive Dynamic Island */}
          <div className="p-6 rounded-3xl bg-[#090b14] border border-white/10 hover:border-emerald-400/40 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                01 // FLUID GESTURAL EXPANSION
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                Dynamic Island Pill
              </h4>
              <p className="font-sans text-xs text-slate-400 font-light">
                Tap the capsule to test fluid damped Euler spring morphology.
              </p>
            </div>

            <div className="flex items-center justify-center py-6">
              <motion.div
                onClick={handleDynamicIslandToggle}
                animate={{
                  width: isDynamicIslandExpanded ? 240 : 120,
                  height: isDynamicIslandExpanded ? 64 : 36,
                  borderRadius: isDynamicIslandExpanded ? 24 : 18,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-black border border-white/20 p-2 flex items-center justify-between text-white cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.8)] relative overflow-hidden"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
                  <span className="text-[11px] font-mono font-bold">
                    {isDynamicIslandExpanded ? "Call Active: User Interview" : "04:12"}
                  </span>
                </div>
                {isDynamicIslandExpanded && (
                  <span className="text-xs text-slate-400 font-mono pr-2">LIVE 🎧</span>
                )}
              </motion.div>
            </div>

            <div className="text-center font-mono text-[10px] text-slate-500">
              TAP CAPSULE TO TOGGLE
            </div>
          </div>

          {/* Micro-Interaction 2: Liquid Morphing Toggle */}
          <div className="p-6 rounded-3xl bg-[#090b14] border border-white/10 hover:border-emerald-400/40 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                02 // ORGANIC LIQUID PHYSICS
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                Liquid Spring Switch
              </h4>
              <p className="font-sans text-xs text-slate-400 font-light">
                Toggle to test organic spring stretch &amp; tactile recoil.
              </p>
            </div>

            <div className="flex items-center justify-center py-6">
              <div
                onClick={handleLiquidToggle}
                className={`w-20 h-10 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center ${
                  isLiquidToggled ? "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]" : "bg-[#181a24] border border-white/15"
                }`}
              >
                <motion.div
                  animate={{
                    x: isLiquidToggled ? 40 : 0,
                    scaleX: isLiquidToggled ? [1, 1.35, 1] : [1, 1.35, 1],
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  className="w-8 h-8 rounded-full bg-black shadow-md flex items-center justify-center text-xs"
                >
                  <span className="text-white text-[10px] font-bold">
                    {isLiquidToggled ? "ON" : "OFF"}
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="text-center font-mono text-[10px] text-slate-500">
              CLICK TO TRIGGER LIQUID RECOIL
            </div>
          </div>

          {/* Micro-Interaction 3: Tactile Haptic Slider */}
          <div className="p-6 rounded-3xl bg-[#090b14] border border-white/10 hover:border-emerald-400/40 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                03 // HAPTIC SCRUBBING
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                Continuous Precision Slider
              </h4>
              <p className="font-sans text-xs text-slate-400 font-light">
                Drag slider to feel sub-pixel continuous feedback with live readout.
              </p>
            </div>

            <div className="space-y-3 py-6 px-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">VALUE</span>
                <span className="text-emerald-400 font-bold text-sm">{sliderValue}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => {
                  setSliderValue(Number(e.target.value));
                  if (Number(e.target.value) % 5 === 0) {
                    try {
                      cinematicAudio.playTactileClick(700 + Number(e.target.value) * 6);
                    } catch {}
                  }
                }}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            <div className="text-center font-mono text-[10px] text-slate-500">
              DRAG SLIDER FOR AUDIO HAPTICS
            </div>
          </div>

        </div>
      )}

      {/* ========================================================
          PANEL 2: CREATIVE LOADING SCREEN ANIMATIONS
          ======================================================== */}
      {activeTab === "loaders" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Loader 1: Geometric Morphing Orbit */}
          <div className="p-8 rounded-3xl bg-[#090b14] border border-white/10 hover:border-emerald-400/40 shadow-xl flex flex-col items-center justify-between space-y-6 text-center">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">LOADER // 01</span>
              <h4 className="font-display font-bold text-lg text-white">Geometric Orbit</h4>
              <p className="font-sans text-xs text-slate-400 font-light">
                Harmonic orbit designed for cold system boot sequences.
              </p>
            </div>

            <div className="relative w-24 h-24 flex items-center justify-center py-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-400"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute w-12 h-12 rounded-full border-2 border-white/40"
              />
              <div className="absolute w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            </div>

            <span className="font-mono text-[10px] text-slate-500 uppercase">360° ORBIT HARMONIC</span>
          </div>

          {/* Loader 2: Liquid Bubble Wave */}
          <div className="p-8 rounded-3xl bg-[#090b14] border border-white/10 hover:border-emerald-400/40 shadow-xl flex flex-col items-center justify-between space-y-6 text-center">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">LOADER // 02</span>
              <h4 className="font-display font-bold text-lg text-white">Liquid Bubble Pulse</h4>
              <p className="font-sans text-xs text-slate-400 font-light">
                Frosted glass bubble rhythm for data fetching states.
              </p>
            </div>

            <div className="flex items-center gap-2 py-6">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-8, 8, -8],
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "easeInOut",
                  }}
                  className="w-4 h-4 rounded-full bg-gradient-to-t from-emerald-500 to-white shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                />
              ))}
            </div>

            <span className="font-mono text-[10px] text-slate-500 uppercase">LIQUID SPRING PULSE</span>
          </div>

          {/* Loader 3: Cyber Radar Scan */}
          <div className="p-8 rounded-3xl bg-[#090b14] border border-white/10 hover:border-emerald-400/40 shadow-xl flex flex-col items-center justify-between space-y-6 text-center">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">LOADER // 03</span>
              <h4 className="font-display font-bold text-lg text-white">Cyber Reticle Scan</h4>
              <p className="font-sans text-xs text-slate-400 font-light">
                Target acquisition telemetry for AI inference tasks.
              </p>
            </div>

            <div className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center py-6 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-transparent"
              />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <span className="font-mono text-[10px] text-slate-500 uppercase">360° AI RADAR SWEEP</span>
          </div>

        </div>
      )}

      {/* ========================================================
          PANEL 3: POSTERS & VISUAL DESIGN SHOWCASE
          ======================================================== */}
      {activeTab === "posters" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTER_ITEMS.map((poster) => (
            <motion.div
              key={poster.id}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-3xl bg-gradient-to-b ${poster.color} border border-white/15 hover:border-emerald-400/50 shadow-xl flex flex-col justify-between h-[360px] group transition-all`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-semibold">
                    {poster.tag}
                  </span>
                  <span className="text-2xl">{poster.icon}</span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                    {poster.title}
                  </h4>
                  <p className="font-mono text-xs text-emerald-400 font-medium">
                    {poster.category}
                  </p>
                </div>

                <p className="font-sans text-xs text-slate-300 font-light leading-relaxed pt-2 line-clamp-4">
                  {poster.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>MANISH NOOLI STUDIO</span>
                <span className="text-white group-hover:text-emerald-400 transition-colors font-bold">
                  EXPLORE ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ========================================================
          PANEL 4: SIDE PROJECTS & CONCEPTUAL LAB
          ======================================================== */}
      {activeTab === "side-projects" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SIDE_CONCEPTS.map((concept) => (
            <motion.div
              key={concept.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-[#090b14] border border-white/10 hover:border-emerald-400/40 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{concept.icon}</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-mono text-[10px] font-bold">
                    {concept.stat}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-white">
                    {concept.title}
                  </h4>
                  <span className="font-mono text-xs text-slate-400">
                    {concept.category}
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                  {concept.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                <span>EXPERIMENTAL SPEC</span>
                <span className="text-emerald-400 font-bold">PROTOTYPE READY ↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </section>
  );
}
