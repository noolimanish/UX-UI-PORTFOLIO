import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const RUNWAY_EPISODES = [
  {
    ep: "EP 01",
    title: "User Research & Empathy Mapping",
    date: "DISCOVERY // ACT I",
    desc: "Conducting 25 moderated user interviews, synthesizing affinity clusters, and mapping cognitive user friction using Hick's Law.",
    metric: "25 User Interviews • -42% Friction",
    icon: "🧠",
    badge: "QUALITATIVE RESEARCH",
    details: {
      question: "Why were users abandoning mobile banking onboarding during Step 2?",
      discovery: "Users felt cognitive overload when confronted with 14 mandatory fields on a single screen without progress indicators.",
      artifactTitle: "Interactive Sticky Note Affinity Board",
    },
  },
  {
    ep: "EP 02",
    title: "Information Architecture & Wireframes",
    date: "STRUCTURAL UX // ACT II",
    desc: "Deconstructing sprawling multi-screen flows into progressive 3-step disclosure paths with low-fidelity wireframing and card sorting.",
    metric: "3-Step Progressive Flow • 99.4% Flow Completion",
    icon: "📐",
    badge: "INFORMATION ARCHITECTURE",
    details: {
      question: "How do we simplify complex enterprise data density?",
      discovery: "Card sorting revealed 80% of users only need 4 core telemetry metrics upfront; remaining data was moved to contextual drill-down trays.",
      artifactTitle: "Lo-Fi Wireframe vs Hi-Fi Comparison",
    },
  },
  {
    ep: "EP 03",
    title: "Interactive Prototyping & Micro-Interactions",
    date: "TACTILITY // ACT III",
    desc: "Engineering damped Euler spring dynamics, smart animate choreographies, and acoustic Web Audio feedback for tactile micro-delight.",
    metric: "60 FPS Composited • Damped Euler Physics",
    icon: "⚡",
    badge: "PROTOTYPING & MOTION",
    details: {
      question: "How do we make digital actions feel tangible and trustworthy?",
      discovery: "Adding spring-damped micro-feedback and a 432Hz harmonic confirmation chime reduced accidental double-taps by 89%.",
      artifactTitle: "Tactile Button Physics Simulator",
    },
  },
  {
    ep: "EP 04",
    title: "Figma Design System & Token Hierarchy",
    date: "ATOMIC SCALE // ACT IV",
    desc: "Architecting 120+ modular Figma component variants with Auto-Layout 5.0, 42 semantic design tokens, and dark/light modes.",
    metric: "120+ Master Variants • 42 Tokens Studio",
    icon: "🎨",
    badge: "DESIGN SYSTEMS",
    details: {
      question: "How do we eliminate design debt across 12 product squads?",
      discovery: "Synchronizing semantic tokens on :root allowed instantaneous global theme rebrands with 0ms style recalculation.",
      artifactTitle: "Figma Design Token Studio JSON",
    },
  },
  {
    ep: "EP 05",
    title: "Usability Testing & SUS Score Benchmarking",
    date: "VALIDATION // ACT V",
    desc: "Validating redesigned interactive prototypes across 25 user sessions, calculating System Usability Scale (SUS) scores, and eye-tracking.",
    metric: "94 / 100 SUS Score (Top 1% Usability)",
    icon: "📊",
    badge: "USABILITY TESTING",
    details: {
      question: "Did the redesign tangibly improve user satisfaction and task speed?",
      discovery: "Task completion time dropped from 14.8 seconds to 2.4 seconds (-83%), and SUS usability score jumped from 58 to 94.",
      artifactTitle: "Interactive SUS Usability Score Calculator",
    },
  },
  {
    ep: "EP 06",
    title: "Developer Handoff & Edge-Case Redlines",
    date: "SHIP // ACT VI",
    desc: "Delivering zero-ambiguity redline specifications, responsive breakpoint guidelines, 100% WAI-ARIA focus traps, and WCAG AAA compliance.",
    metric: "100% WCAG AAA • Zero Handoff Ambiguity",
    icon: "🚀",
    badge: "DEVELOPER EMPATHY",
    details: {
      question: "How do we ensure designs are built pixel-perfect in production?",
      discovery: "Clear token variables, interactive Figma state matrices, and explicit error state specs eliminated 95% of back-and-forth QA tickets.",
      artifactTitle: "Developer Redline Specs & ARIA Checklist",
    },
  },
];

export default function AirportRunwayVlogs() {
  const [activeEp, setActiveEp] = useState(RUNWAY_EPISODES[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mini-tool states inside the modal:
  const [activeStickyFilter, setActiveStickyFilter] = useState("all");
  const [wireframeMode, setWireframeMode] = useState("hifi"); // 'lofi' | 'hifi'
  const [susScores, setSusScores] = useState([5, 5, 4, 5, 5]); // 5 items

  const handleSelectEp = (ep) => {
    setActiveEp(ep);
    cinematicAudio.playProjectorClick(1000);
  };

  const handleOpenModal = (ep) => {
    setActiveEp(ep);
    setIsModalOpen(true);
    cinematicAudio.playBraam();
  };

  // Calculate average SUS score
  const calculatedSus = Math.round(
    (susScores.reduce((a, b) => a + b, 0) / 25) * 100
  );

  return (
    <section id="runway-vlogs" className="relative py-24 px-4 sm:px-8 w-full bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title: Clean Sculptural Display + Emerald Laser Bar */}
        <div className="text-center space-y-3 select-none">
          <div className="relative inline-block text-center">
            <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-white">
              Mission Logs // <span className="text-emerald-400">Roadmap</span>
            </h2>
            <div className="w-full h-1.5 sm:h-2 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] mt-3 mx-auto rounded-full" />
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light tracking-wide pt-1">
            6-Act product design methodology &amp; behind-the-scenes artifacts
          </p>
        </div>

        {/* Airport Runway Stage (On Pure Black Canvas with Illuminated Tarmac) */}
        <div className="relative w-full rounded-3xl bg-[#090b14] border-4 border-[#0f1322] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.15)] overflow-x-auto">
          {/* Top Cards Row (EP 01, EP 03, EP 05) */}
          <div className="flex gap-4 sm:gap-6 pb-8 min-w-[900px]">
            {RUNWAY_EPISODES.filter((_, i) => i % 2 === 0).map((ep) => (
              <div
                key={ep.ep}
                onClick={() => handleSelectEp(ep)}
                className={`min-w-[270px] p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg ${
                  activeEp.ep === ep.ep
                    ? "bg-emerald-500 text-black border-emerald-400 -translate-y-2 shadow-[0_10px_25px_rgba(16,185,129,0.3)]"
                    : "bg-[#141829] text-white border-white/10 hover:border-emerald-400/50 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono font-bold pb-2 border-b border-black/10">
                  <span className={`px-2 py-0.5 rounded text-[10px] ${activeEp.ep === ep.ep ? "bg-black text-white" : "bg-[#6385d6] text-white"}`}>
                    {ep.ep}
                  </span>
                  <span className={activeEp.ep === ep.ep ? "text-black" : "text-slate-400"}>{ep.date}</span>
                </div>
                <h4 className="font-titan text-base pt-2 uppercase">{ep.title}</h4>
                <p className="font-sans text-xs pt-1 line-clamp-2 opacity-90">{ep.desc}</p>
                <div className={`mt-3 font-mono text-[11px] font-bold ${activeEp.ep === ep.ep ? "text-purple-950" : "text-[#f5bc44]"}`}>
                  ✓ {ep.metric.split("•")[0]}
                </div>
              </div>
            ))}
          </div>

          {/* Center Asphalt Tarmac with Runway Markings & Center Airplane */}
          <div className="relative h-20 w-full min-w-[900px] bg-[#1e2336] rounded-2xl border-y-4 border-[#0f1322] flex items-center justify-between px-8 my-4">
            {/* Runway Threshold Lines */}
            <div className="flex gap-1.5 h-10 items-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-2.5 h-full bg-white rounded-sm shadow-sm" />
              ))}
            </div>

            {/* Runway Number */}
            <span className="font-titan text-3xl text-white tracking-widest px-4 border-2 border-white/20 rounded-xl bg-black/40">
              09L // DESIGN TAKEOFF
            </span>

            {/* Dashed Center Runway Line */}
            <div className="flex-1 flex justify-evenly items-center px-4">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-10 h-2 bg-yellow-400 rounded-sm" />
              ))}
            </div>

            {/* Animated Taxiing Airplane */}
            <motion.div
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            >
              🛫
            </motion.div>
          </div>

          {/* Bottom Cards Row (EP 02, EP 04, EP 06) */}
          <div className="flex gap-4 sm:gap-6 pt-8 min-w-[900px]">
            {RUNWAY_EPISODES.filter((_, i) => i % 2 !== 0).map((ep) => (
              <div
                key={ep.ep}
                onClick={() => handleSelectEp(ep)}
                className={`min-w-[270px] p-5 rounded-2xl border-4 transition-all duration-300 cursor-pointer shadow-lg ${
                  activeEp.ep === ep.ep
                    ? "bg-[#6385d6] text-white border-[#0f1322] translate-y-2 shadow-[0_10px_0_#1e1538]"
                    : "bg-[#141829] text-white border-white/10 hover:border-[#f5bc44] hover:translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono font-bold pb-2 border-b border-white/10">
                  <span className={`px-2 py-0.5 rounded text-[10px] ${activeEp.ep === ep.ep ? "bg-black text-[#f5bc44]" : "bg-[#f5bc44] text-black"}`}>
                    {ep.ep}
                  </span>
                  <span className="text-slate-300">{ep.date}</span>
                </div>
                <h4 className="font-titan text-base pt-2 uppercase">{ep.title}</h4>
                <p className="font-sans text-xs pt-1 line-clamp-2 opacity-90">{ep.desc}</p>
                <div className="mt-3 font-mono text-[11px] font-bold text-yellow-300">
                  ✓ {ep.metric.split("•")[0]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Episode Inspection Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border-2 border-emerald-500/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-white space-y-4 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">
                RUNWAY VLOG LOG // {activeEp.ep} • {activeEp.date}
              </span>
            </div>
            <button
              onClick={() => handleOpenModal(activeEp)}
              className="px-4 py-1.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-sans font-semibold text-xs tracking-wide cursor-pointer shadow transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>INSPECT INTERACTIVE DELIVERABLE</span>
              <span>↗</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{activeEp.icon}</span>
              <h3 className="font-titan text-2xl sm:text-3xl text-white uppercase">
                {activeEp.title}
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {activeEp.desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-emerald-400 font-bold">
                {activeEp.metric}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-[#6385d6]">
                {activeEp.badge}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Runway UX Reel Modal */}
      <AnimatePresence>
        {isModalOpen && activeEp && (
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#0d0f18] border-4 border-[#f5bc44] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(245,188,68,0.3)] text-white overflow-hidden max-h-[92vh] flex flex-col font-sans cursor-default"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 bg-[#141828] border-b-2 border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#f5bc44] text-black font-titan text-xs uppercase">
                    {activeEp.ep}
                  </span>
                  <div>
                    <h3 className="font-titan text-lg sm:text-xl text-white uppercase">
                      {activeEp.title}
                    </h3>
                    <span className="font-mono text-xs text-slate-400">{activeEp.badge}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    cinematicAudio.playProjectorClick(600);
                    setIsModalOpen(false);
                  }}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm cursor-pointer transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                {/* Discovery & Problem Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                      CORE RESEARCH QUESTION:
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-light">
                      {activeEp.details.question}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
                      DESIGN DISCOVERY & SOLUTION:
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-light">
                      {activeEp.details.discovery}
                    </p>
                  </div>
                </div>

                {/* INTERACTIVE DELIVERABLE PLAYGROUND */}
                <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#f5bc44] uppercase">
                      LIVE ARTIFACT: {activeEp.details.artifactTitle}
                    </span>
                  </div>

                  {/* EP 01 Artifact: Interactive Affinity Board */}
                  {activeEp.ep === "EP 01" && (
                    <div className="space-y-3">
                      <div className="flex gap-2 text-xs font-mono">
                        {["all", "pain-point", "desire", "behavior"].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setActiveStickyFilter(cat)}
                            className={`px-3 py-1 rounded-lg uppercase cursor-pointer transition-all ${
                              activeStickyFilter === cat
                                ? "bg-[#f5bc44] text-black font-bold"
                                : "bg-white/5 text-slate-400 hover:text-white"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {[
                          { text: "14 form fields is way too overwhelming on mobile.", cat: "pain-point", color: "bg-red-200 text-red-950" },
                          { text: "I just want 1-tap biometric confirmation with FaceID.", cat: "desire", color: "bg-emerald-200 text-emerald-950" },
                          { text: "I abandon carts immediately if order summary is hidden.", cat: "behavior", color: "bg-amber-200 text-amber-950" },
                          { text: "Error messages appear only after I hit submit.", cat: "pain-point", color: "bg-red-200 text-red-950" },
                          { text: "Clear 3-step progress bar gives me confidence.", cat: "desire", color: "bg-emerald-200 text-emerald-950" },
                          { text: "I use thumb navigation 95% of the time on transit.", cat: "behavior", color: "bg-amber-200 text-amber-950" },
                        ]
                          .filter((s) => activeStickyFilter === "all" || s.cat === activeStickyFilter)
                          .map((sticky, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className={`p-3.5 rounded-xl ${sticky.color} font-sans text-xs font-medium shadow-md leading-relaxed rotate-${(idx % 3) - 1}`}
                            >
                              <span className="block font-mono text-[9px] uppercase opacity-75 font-bold mb-1">
                                [USER NOTE #{idx + 1}]
                              </span>
                              "{sticky.text}"
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* EP 02 Artifact: Lo-Fi vs Hi-Fi Wireframe Switcher */}
                  {activeEp.ep === "EP 02" && (
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setWireframeMode("lofi")}
                          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                            wireframeMode === "lofi" ? "bg-slate-300 text-black" : "bg-white/5 text-slate-400"
                          }`}
                        >
                          LO-FI WIREFRAME (STRUCTURAL SKELETON)
                        </button>
                        <button
                          onClick={() => setWireframeMode("hifi")}
                          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                            wireframeMode === "hifi" ? "bg-[#6385d6] text-white" : "bg-white/5 text-slate-400"
                          }`}
                        >
                          HI-FI DESIGN SYSTEM (FINAL)
                        </button>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#090b14] border border-white/10 font-mono text-xs">
                        {wireframeMode === "lofi" ? (
                          <div className="space-y-3 opacity-75">
                            <div className="border border-dashed border-white/40 p-2 text-center text-slate-400">
                              [HEADER: App Bar + Back Nav]
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="border border-dashed border-white/40 p-3 text-center">Step 1 (Active)</div>
                              <div className="border border-dashed border-white/20 p-3 text-center text-slate-600">Step 2</div>
                              <div className="border border-dashed border-white/20 p-3 text-center text-slate-600">Step 3</div>
                            </div>
                            <div className="border border-dashed border-white/40 p-6 text-center text-slate-400">
                              [PRIMARY INTENT SELECTION TRAY: 3 CARDS]
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="p-3 rounded-xl bg-[#6385d6]/20 border border-[#6385d6]/50 flex justify-between items-center text-white">
                              <span className="font-titan">FINFLOW CHECKOUT</span>
                              <span className="text-emerald-400 font-bold">100% WCAG AAA</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div className="p-2 rounded-lg bg-[#f5bc44] text-black font-bold">1. Amount</div>
                              <div className="p-2 rounded-lg bg-white/5 text-slate-400">2. Recipient</div>
                              <div className="p-2 rounded-lg bg-white/5 text-slate-400">3. Biometric</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                              <div className="text-2xl font-titan text-white">$250.00 USD</div>
                              <div className="text-slate-400 text-[11px]">Instant Transfer • 0 fees</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* EP 05 Artifact: Interactive SUS Usability Score Calculator */}
                  {activeEp.ep === "EP 05" && (
                    <div className="space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40">
                        <span className="text-white font-bold">CALCULATED SUS SCORE:</span>
                        <span className="font-titan text-2xl text-emerald-400">{calculatedSus} / 100 [GRADE A+]</span>
                      </div>

                      <div className="space-y-2">
                        {[
                          "I found the interface easy to navigate",
                          "I would like to use this system frequently",
                          "The checkout steps were intuitive and clear",
                          "I felt confident completing the transaction",
                          "The visual hierarchy directed my attention naturally",
                        ].map((q, idx) => (
                          <div key={idx} className="flex items-center justify-between gap-4 p-2 rounded bg-white/5">
                            <span className="text-slate-300 text-[11px] truncate">{q}</span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <input
                                type="range"
                                min="1"
                                max="5"
                                value={susScores[idx]}
                                onChange={(e) => {
                                  const updated = [...susScores];
                                  updated[idx] = Number(e.target.value);
                                  setSusScores(updated);
                                }}
                                className="accent-[#f5bc44] cursor-pointer w-20"
                              />
                              <span className="font-bold text-[#f5bc44] w-4">{susScores[idx]}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Default/Other Episodes: Token Studio JSON */}
                  {(activeEp.ep === "EP 03" || activeEp.ep === "EP 04" || activeEp.ep === "EP 06") && (
                    <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-emerald-400 font-bold">tokens.design-system.json</span>
                        <span className="text-slate-500 text-[10px]">TOKENS STUDIO COMPATIBLE</span>
                      </div>
                      <pre className="text-[11px] text-amber-300 overflow-x-auto p-2 bg-black/60 rounded">
{`{
  "color": {
    "primary": { "value": "#6385d6", "type": "color" },
    "accent": { "value": "#f5bc44", "type": "color" },
    "background": { "value": "#000000", "type": "color" }
  },
  "spacing": {
    "grid-base": { "value": "8px", "type": "spacing" },
    "container-padding": { "value": "24px", "type": "spacing" }
  },
  "physics": {
    "spring-stiffness": { "value": 180, "type": "number" },
    "spring-damping": { "value": 15, "type": "number" }
  }
}`}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Bottom Modal Actions */}
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <button
                    onClick={() => {
                      cinematicAudio.playAnamorphicChime(950);
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#6385d6] hover:bg-blue-600 text-white font-titan text-xs uppercase tracking-wider cursor-pointer shadow-md transition-all active:scale-95"
                  >
                    ✓ CONFIRM ROADMAP MILESTONE
                  </button>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-mono cursor-pointer"
                  >
                    CLOSE [ESC]
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
