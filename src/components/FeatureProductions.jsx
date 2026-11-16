import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";
import FilmStripGallery from "./FilmStripGallery";

export const GENERIC_PRODUCTIONS = [
  {
    id: "project-alpha",
    reel: "REEL 01 // [PROJECT ALPHA]",
    title: "NovaUI // Kinetic System [Template]",
    client: "[ENTERPRISE SAAS / DESIGN SYSTEM]",
    genre: "SYSTEMIC MOTION & DESIGN TOKENS",
    year: "2024 — 2026",
    role: "[Lead UI/UX Designer & Systems Architect]",
    tagline: "[Damped Euler spring mechanics and zero-recalculation design tokens.]",
    synopsis:
      "[Case Study Template: Modern enterprise applications suffer from sterile, lifeless interfaces and sluggish animations that thrash browser layouts. This project was architected from first principles using CSS custom variables on :root for instantaneous theme shifts, paired with custom damped Euler springs operating strictly on GPU composite layers.]",
    metrics: [
      { label: "[FRAME RATE]", val: "60 FPS Locked" },
      { label: "[STYLE RECALC]", val: "0.0ms Latency" },
      { label: "[ACCESSIBILITY]", val: "100% WAI-ARIA" },
    ],
    tags: ["[Design Systems]", "[Spring Physics]", "[Zero Layout Thrash]", "[WAI-ARIA]"],
    interactiveType: "spring-sandbox",
    demoNote: "Interactive Euler Spring Sandbox (Drag slider to test stiffness)",
  },
  {
    id: "project-beta",
    reel: "REEL 02 // [PROJECT BETA]",
    title: "Pulse // Telemetry Engine [Template]",
    client: "[CLOUD INFRASTRUCTURE / OBSERVABILITY]",
    genre: "OBSERVABILITY & DEVELOPER TOOLS",
    year: "2024",
    role: "[Principal Product Designer & Frontend Engineer]",
    tagline: "[Processing 10,000+ metrics/sec without dropping a single UI frame.]",
    synopsis:
      "[Case Study Template: Mission-critical telemetry software frequently freezes client browsers during sudden log spikes. This platform decouples data ingestion into dedicated Web Workers, virtualizing millions of streaming rows down to exactly 28 active DOM nodes with sub-millisecond scrolling latency.]",
    metrics: [
      { label: "[THROUGHPUT]", val: "10,000+ Logs/s" },
      { label: "[ACTIVE NODES]", val: "28 DOM Fixed" },
      { label: "[MAIN THREAD]", val: "<0.5ms Jitter" },
    ],
    tags: ["[Web Workers]", "[DOM Virtualization]", "[Data Density]", "[Telemetry]"],
    interactiveType: "telemetry-stream",
    demoNote: "Live Telemetry Ingestion Feed (Click pause/resume to test thread)",
  },
  {
    id: "project-gamma",
    reel: "REEL 03 // [PROJECT GAMMA]",
    title: "Aether // Spatial Interface [Template]",
    client: "[CREATIVE COMPUTING / EXPERIMENTAL UX]",
    genre: "GAME-FEEL & HAPTIC COMPUTING",
    year: "2023 — 2024",
    role: "[Creative Technologist & Interaction Designer]",
    tagline: "[Infusing digital tools with physical weight, micro-acoustics, and magnetic snapping.]",
    synopsis:
      "[Case Study Template: Digital interfaces should not feel like dead, unresponsive glass. This framework integrates native Web Audio oscillators with Euclidean magnetic attraction vectors, providing tangible micro-feel and auditory confirmation akin to turning a precision analog potentiometer.]",
    metrics: [
      { label: "[AUDIO LATENCY]", val: "<12ms Web Audio" },
      { label: "[EXTERNAL ASSETS]", val: "0 KB (Pure Math)" },
      { label: "[MAGNETIC FIELD]", val: "Euclidean Snapping" },
    ],
    tags: ["[Web Audio API]", "[Micro-Interactions]", "[Spatial Physics]", "[Haptics]"],
    interactiveType: "audio-synth",
    demoNote: "Mathematical Harmonic Resonance Pads (Click to test audio synthesis)",
  },
  {
    id: "project-delta",
    reel: "REEL 04 // [PROJECT DELTA]",
    title: "Lumina // Enterprise Flow [Template]",
    client: "[B2B FINTECH & GLOBAL WORKFLOW]",
    genre: "B2B FINTECH & DATA ARCHITECTURE",
    year: "2023",
    role: "[Senior UX Architect]",
    tagline: "[Hick's Law progressive disclosure cutting enterprise decision fatigue by 42%.]",
    synopsis:
      "[Case Study Template: Legacy enterprise platforms overwhelm operators with 70+ unbounded inputs on screen. This project decomposes multi-tier transactions into contextual progressive disclosure trays and spatial priority anchors, slashing task completion times by 3.8x.]",
    metrics: [
      { label: "[DECISION TIME]", val: "-42% Friction" },
      { label: "[TASK SPEED]", val: "3.8x Acceleration" },
      { label: "[COMPLETION RATE]", val: "99.4% First-Pass" },
    ],
    tags: ["[Hick's Law]", "[Progressive Disclosure]", "[Fintech UX]", "[Cognitive Flow]"],
    interactiveType: "progressive-flow",
    demoNote: "Hick's Law Progressive Disclosure Stepper (Click to advance phases)",
  },
  {
    id: "project-epsilon",
    reel: "REEL 05 // [PROJECT EPSILON]",
    title: "Chroma // GPU Creative Canvas [Template]",
    client: "[GENERATIVE TOOLS / WEBGL PLATFORM]",
    genre: "CREATIVE TOOLS & WEBGL SHADERS",
    year: "2024",
    role: "[UI/UX & Shader Engineer]",
    tagline: "[Non-destructive visual node graph canvas running in real-time on GPU shaders.]",
    synopsis:
      "[Case Study Template: Empowering visual artists to construct generative shaders and procedural vectors directly in the browser with zero latency. Features interactive visual node wiring, non-destructive undo/redo history trees, and 120 FPS canvas compositing.]",
    metrics: [
      { label: "[RENDER PIPELINE]", val: "WebGL 2.0 GPU" },
      { label: "[CANVAS FPS]", val: "120 FPS Capable" },
      { label: "[STATE RECALL]", val: "Instantaneous" },
    ],
    tags: ["[Node Graph]", "[WebGL 2.0]", "[Canvas UI]", "[Creative Tools]"],
    interactiveType: "node-canvas",
    demoNote: "Real-time Shader Color Blend Modes (Click to switch shaders)",
  },
];

export default function FeatureProductions() {
  const [selectedProductionId, setSelectedProductionId] = useState("project-alpha");
  const [expandedNotes, setExpandedNotes] = useState({});

  // Interactive demo states
  const [springTension, setSpringTension] = useState(180);
  const [springBounces, setSpringBounces] = useState(0);
  const [telemetryPlaying, setTelemetryPlaying] = useState(true);
  const [telemetryCount, setTelemetryCount] = useState(14820);
  const [activeHarmonicPad, setActiveHarmonicPad] = useState(null);
  const [disclosureStep, setDisclosureStep] = useState(1);
  const [chromaFilter, setChromaFilter] = useState("amber-anamorphic");

  const activeProd =
    GENERIC_PRODUCTIONS.find((p) => p.id === selectedProductionId) || GENERIC_PRODUCTIONS[0];

  const handleSelectProd = (id) => {
    setSelectedProductionId(id);
    cinematicAudio.playProjectorClick(800);
  };

  const toggleNotes = (id) => {
    setExpandedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
    cinematicAudio.playProjectorClick(1100);
  };

  const handleHarmonicPad = (freq, noteName) => {
    setActiveHarmonicPad(noteName);
    cinematicAudio.playAnamorphicChime(freq);
    setTimeout(() => setActiveHarmonicPad(null), 300);
  };

  const handleSpringClick = () => {
    setSpringBounces((prev) => prev + 1);
    cinematicAudio.playProjectorClick(1200 + springBounces * 50);
  };

  return (
    <section id="act-2" className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Act Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/50 border border-amber-400/30 text-xs font-mono text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">
              ACT II // FEATURE PRODUCTIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-anton uppercase tracking-wide text-white leading-tight">
            SELECTED MASTERWORKS [PLACEHOLDER DATA]
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl font-light font-sans">
            Modular case study templates ready to populate with your real client projects. Each entry features an interactive live director viewport, technical metrics, and design teardown.
          </p>
        </div>

        {/* Film Reel Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {GENERIC_PRODUCTIONS.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => handleSelectProd(prod.id)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedProductionId === prod.id
                  ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]"
                  : "bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              <span>0{idx + 1}</span>
              <span className="hidden sm:inline">{prod.title.split("//")[0].trim()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Feature Cinematic Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Production Overview & Generic Blueprint (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl cinematic-glass space-y-6 relative overflow-hidden film-gate">
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-amber-400 font-bold uppercase tracking-wider">
                {activeProd.reel}
              </span>
              <span className="text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                {activeProd.client} • {activeProd.year}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-anton uppercase text-white tracking-tight">
                {activeProd.title}
              </h3>
              <p className="text-amber-300 font-mono text-xs sm:text-sm">
                "{activeProd.tagline}"
              </p>
            </div>

            {/* Role & Synopsis */}
            <div className="space-y-3 font-sans text-xs sm:text-sm">
              <div className="text-[11px] font-mono text-slate-400 uppercase">
                ROLE: <strong className="text-white font-normal">{activeProd.role}</strong>
              </div>
              <p className="text-slate-300 leading-relaxed font-light">
                {activeProd.synopsis}
              </p>
            </div>

            {/* Director Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {activeProd.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-amber-400">
                    {m.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {activeProd.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => toggleNotes(activeProd.id)}
                className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{expandedNotes[activeProd.id] ? "▾ HIDE" : "▸ EXPAND"} CASE STUDY STORYBOARD</span>
              </button>

              <div className="text-slate-500 font-mono text-[11px]">
                [CUSTOMIZABLE DATA READY]
              </div>
            </div>

            {/* Expandable Architectural Storyboard */}
            <AnimatePresence>
              {expandedNotes[activeProd.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-white/10 space-y-3 text-xs text-slate-300 font-mono"
                >
                  <div className="p-4 rounded-xl bg-black/80 border border-amber-400/20 space-y-2">
                    <span className="text-amber-400 font-bold block uppercase text-xs">
                      [DIRECTOR'S NOTE & DESIGN REASONING TEMPLATE]:
                    </span>
                    <p className="leading-relaxed text-slate-300 font-sans text-xs">
                      "When constructing {activeProd.title}, the central design objective was resolving the tension between high computational density and effortless human comprehension. Every layout transition was profiled against Chrome DevTools Performance flamecharts to guarantee locked 60 FPS across all consumer screens."
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Live Interactive Director Viewport (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl cinematic-glass space-y-5 border border-amber-400/20 relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  LIVE INTERACTIVE VIEWPORT
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                60 FPS
              </span>
            </div>

            {/* Interactive Widget Container */}
            <div className="min-h-[290px] rounded-xl bg-black/80 border border-white/10 p-5 flex flex-col justify-center items-center text-center relative overflow-hidden">
              {/* Widget 1: Spring Physics Sandbox */}
              {activeProd.interactiveType === "spring-sandbox" && (
                <div className="w-full space-y-5">
                  <span className="text-xs font-mono text-slate-400">
                    TEST DAMPED EULER SPRING (REBOUNDS: {springBounces})
                  </span>

                  <div className="flex justify-center py-4">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.88 }}
                      transition={{ type: "spring", stiffness: springTension, damping: 12 }}
                      onClick={handleSpringClick}
                      className="px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-anton uppercase text-lg tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.5)] cursor-pointer"
                    >
                      CLICK TO TRIGGER SPRING
                    </motion.button>
                  </div>

                  <div className="space-y-2 text-left bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="flex justify-between text-[11px] font-mono text-slate-300">
                      <span>SPRING STIFFNESS</span>
                      <span className="text-amber-400 font-bold">{springTension}</span>
                    </div>
                    <input
                      type="range"
                      min="60"
                      max="320"
                      value={springTension}
                      onChange={(e) => setSpringTension(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Widget 2: Telemetry Stream */}
              {activeProd.interactiveType === "telemetry-stream" && (
                <div className="w-full space-y-4 text-left font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>TELEMETRY INGESTION:</span>
                    <button
                      onClick={() => {
                        setTelemetryPlaying(!telemetryPlaying);
                        cinematicAudio.playProjectorClick(900);
                      }}
                      className="text-amber-400 underline font-bold cursor-pointer"
                    >
                      {telemetryPlaying ? "PAUSE STREAM" : "RESUME STREAM"}
                    </button>
                  </div>

                  <div className="space-y-1.5 p-3 rounded-lg bg-black border border-white/10 text-[11px]">
                    <div className="text-emerald-400">
                      [WORKER 01] INGEST: 10,482 events/sec (0.12ms)
                    </div>
                    <div className="text-amber-300">
                      [VIRTUAL DOM] ROWS: 28 active / 142,000 in memory
                    </div>
                    <div className="text-slate-400">
                      [THREAD MONITOR] UI latency: 0.28ms (0 dropped frames)
                    </div>
                    <div className="text-slate-500">
                      [RECALL HASH] 0x8F92A • SHA-256 VERIFIED
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-slate-400 pt-1">
                    TOTAL TELEMETRY EVENTS:{" "}
                    <strong className="text-amber-400">{telemetryCount}</strong>
                  </div>
                </div>
              )}

              {/* Widget 3: Audio Synthesizer Pads */}
              {activeProd.interactiveType === "audio-synth" && (
                <div className="w-full space-y-4 text-center">
                  <span className="text-xs font-mono text-slate-400">
                    INTERACTIVE WEB AUDIO PADS (CLICK TO TRIGGER)
                  </span>

                  <div className="grid grid-cols-3 gap-2.5 py-2">
                    {[
                      { note: "C4", freq: 523.25 },
                      { note: "E4", freq: 659.25 },
                      { note: "G4", freq: 783.99 },
                      { note: "B4", freq: 987.77 },
                      { note: "D5", freq: 1174.66 },
                      { note: "F#5", freq: 1479.98 },
                    ].map((pad) => (
                      <button
                        key={pad.note}
                        onClick={() => handleHarmonicPad(pad.freq, pad.note)}
                        className={`p-3 rounded-xl border font-mono text-xs font-bold transition-all cursor-pointer ${
                          activeHarmonicPad === pad.note
                            ? "bg-amber-400 text-black border-amber-400 scale-95 shadow-[0_0_20px_rgba(245,158,11,0.6)]"
                            : "bg-white/[0.03] hover:bg-white/[0.08] text-white border-white/10 hover:border-amber-400/40"
                        }`}
                      >
                        <span className="block text-sm">{pad.note}</span>
                        <span className="text-[9px] text-slate-400">{Math.round(pad.freq)}Hz</span>
                      </button>
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-slate-400">
                    Harmonic frequency synthesized mathematically on client Web Audio API
                  </span>
                </div>
              )}

              {/* Widget 4: Progressive Disclosure */}
              {activeProd.interactiveType === "progressive-flow" && (
                <div className="w-full space-y-4 text-left font-mono text-xs">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>HICK'S LAW FLOW STAGE:</span>
                    <span className="text-amber-400 font-bold">STEP 0{disclosureStep} / 03</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black border border-white/10 space-y-3">
                    {disclosureStep === 1 && (
                      <div className="space-y-2">
                        <span className="text-amber-300 font-bold block text-xs">
                          PHASE 1: CAPITAL DEPOSIT INTENT
                        </span>
                        <p className="text-[11px] text-slate-400 font-sans">
                          User specifies only prime intent. Zero secondary parameters to eliminate choice paralysis.
                        </p>
                      </div>
                    )}
                    {disclosureStep === 2 && (
                      <div className="space-y-2">
                        <span className="text-amber-300 font-bold block text-xs">
                          PHASE 2: CONTEXTUAL ROUTING ENGINE
                        </span>
                        <p className="text-[11px] text-slate-400 font-sans">
                          Smart ledger selects the optimal liquidity gateway automatically with single-tap confirmation.
                        </p>
                      </div>
                    )}
                    {disclosureStep === 3 && (
                      <div className="space-y-2">
                        <span className="text-emerald-400 font-bold block text-xs">
                          PHASE 3: AUDITED SETTLEMENT
                        </span>
                        <p className="text-[11px] text-slate-400 font-sans">
                          Immutable audit cryptographic hash verified. Transaction sealed with 0 cognitive overhead.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setDisclosureStep((prev) => (prev > 1 ? prev - 1 : 3));
                        cinematicAudio.playProjectorClick(750);
                      }}
                      className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-center cursor-pointer"
                    >
                      ← PREV PHASE
                    </button>
                    <button
                      onClick={() => {
                        setDisclosureStep((prev) => (prev < 3 ? prev + 1 : 1));
                        cinematicAudio.playProjectorClick(1050);
                      }}
                      className="flex-1 py-2 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-amber-300 text-center font-bold cursor-pointer"
                    >
                      ADVANCE PHASE →
                    </button>
                  </div>
                </div>
              )}

              {/* Widget 5: Chroma Node Canvas */}
              {activeProd.interactiveType === "node-canvas" && (
                <div className="w-full space-y-4 text-center font-mono text-xs">
                  <span className="text-slate-400">
                    GPU SHADER BLEND MODES (WEBGL 2.0)
                  </span>

                  <div className="h-28 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-500 bg-gradient-to-tr from-black via-zinc-900 to-amber-950">
                    <div
                      className={`w-20 h-20 rounded-full blur-xl transition-all duration-500 ${
                        chromaFilter === "amber-anamorphic"
                          ? "bg-amber-500/60 scale-125"
                          : chromaFilter === "cyber-teal"
                          ? "bg-cyan-400/60 scale-110"
                          : "bg-rose-500/60 scale-90"
                      }`}
                    />
                    <span className="relative z-10 text-[11px] text-white font-bold uppercase drop-shadow">
                      {chromaFilter} SHADER ACTIVE
                    </span>
                  </div>

                  <div className="flex justify-center gap-2">
                    {["amber-anamorphic", "cyber-teal", "rose-film"].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setChromaFilter(filter);
                          cinematicAudio.playProjectorClick(1100);
                        }}
                        className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold border cursor-pointer ${
                          chromaFilter === filter
                            ? "bg-amber-400 text-black border-amber-400"
                            : "bg-white/5 text-slate-300 border-white/10"
                        }`}
                      >
                        {filter.split("-")[0]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>{activeProd.demoNote}</span>
              <span className="text-amber-400 font-bold">100% OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* 35mm Physical Film Strip Contact Sheet */}
      <FilmStripGallery />
    </section>
  );
}
