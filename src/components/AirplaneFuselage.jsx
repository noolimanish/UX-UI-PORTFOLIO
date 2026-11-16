import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const COPASSENGERS = [
  {
    id: "manish",
    name: "Manish Nooli",
    character: "LEAD PRODUCT ARCHITECT",
    role: "UX Strategy, Figma Systems & Micro-Interactions",
    seat: "SEAT 01A // LEAD ARCHITECT",
    icon: "👨‍🎨",
    avatarBg: "bg-[#f5bc44]",
    accentColor: "#f5bc44",
    tagline: "Directing the convergence of cognitive human psychology and mathematical design tokens.",
    bio: "Passionate Senior Product Designer with a B.Tech in CS (CGPA 8.0+). Specializing in reducing cognitive friction through Hick's Law, architecting 120+ component Figma systems with Auto-Layout 5.0, and crafting tactile spring physics.",
    stats: {
      metric1: "94 / 100",
      label1: "SUS Usability Score",
      metric2: "120+",
      label2: "Figma Components",
      metric3: "100%",
      label3: "WCAG AAA Accessible",
    },
    empathy: {
      says: "An interface should feel like an extension of human thought—effortless, fast, and delightful.",
      thinks: "How can we cut 6 unnecessary form fields so the user achieves their goal in under 3 seconds?",
      does: "Builds atomic Figma token hierarchies, conducts 25+ moderated user interviews, and tests spring damping.",
      feels: "Passionate about high-craft design, typography rhythm, and micro-delight moments.",
    },
    deliverables: "Design Systems • Wireframing • User Journey Maps • Tactile Prototypes",
  },
  {
    id: "maya",
    name: "Maya Lin",
    character: "END-USER PERSONA",
    role: "Mobile-First E-Commerce Shopper",
    seat: "SEAT 02A // USER PERSONA",
    icon: "👩‍💼",
    avatarBg: "bg-[#6385d6]",
    accentColor: "#6385d6",
    tagline: "Wants fast 1-tap checkout, high readability, and zero unexpected checkout surprises.",
    bio: "Represents 68% of busy mobile consumers who abandon carts when confronted with multi-step cognitive overload, unclear error messages, or laggy touch responses.",
    stats: {
      metric1: "2.4s",
      label1: "Target Checkout Time",
      metric2: "1-Tap",
      label2: "Biometric Auth",
      metric3: "0",
      label3: "Form Friction Points",
    },
    empathy: {
      says: "I only have 30 seconds during my subway commute to complete this transaction.",
      thinks: "Why is this app asking me for my billing address three times?",
      does: "Swipes rapidly, relies on autofill, abandons immediately if payment lags.",
      feels: "Delighted by progressive disclosure trays and clear visual confirmation checks.",
    },
    deliverables: "Validated User Journey • Persona Empathy Map • Mobile User Flows",
  },
  {
    id: "arjun",
    name: "Arjun Mehta",
    character: "PRODUCT STRATEGY LEAD",
    role: "Growth, Business Metrics & A/B Testing",
    seat: "SEAT 03A // PRODUCT LEAD",
    icon: "📊",
    avatarBg: "bg-[#fb923c]",
    accentColor: "#fb923c",
    tagline: "Connecting UX architecture to measurable conversion lift and customer lifetime value.",
    bio: "Product Manager partnering closely with Manish to translate high-level business goals into intuitive, friction-free interface designs that deliver verifiable revenue increases.",
    stats: {
      metric1: "+38%",
      label1: "Conversion Lift",
      metric2: "-42%",
      label2: "Bounce Reduction",
      metric3: "3.8x",
      label3: "Task Velocity",
    },
    empathy: {
      says: "Great UX isn't just pretty screens—it drives direct business metrics and user retention.",
      thinks: "Can we prove this new 3-step checkout out-converts the legacy flow in an A/B cohort?",
      does: "Reviews Google Analytics funnels, reviews Mixpanel drop-offs, aligns squad roadmap.",
      feels: "Thrilled when redesign cuts support tickets and boosts customer satisfaction ratings.",
    },
    deliverables: "KPI Funnel Mapping • A/B Test Hypotheses • Usability ROI Reports",
  },
  {
    id: "priya",
    name: "Priya Sharma",
    character: "DESIGN SYSTEMS LEAD",
    role: "Atomic Component Hierarchy & Token Studio",
    seat: "SEAT 04A // SYSTEMS LEAD",
    icon: "🎨",
    avatarBg: "bg-[#4ade80]",
    accentColor: "#4ade80",
    tagline: "Unifying 12 enterprise product squads with synchronized design tokens and zero design debt.",
    bio: "Architecting scalable Figma component libraries, auto-layout variants, and semantic color scales that guarantee brand consistency and zero-friction developer handoffs.",
    stats: {
      metric1: "120+",
      label1: "Master Variants",
      metric2: "42",
      label2: "Semantic Tokens",
      metric3: "0ms",
      label3: "Theme Recalculation",
    },
    empathy: {
      says: "Every spacing increment must adhere to the 8pt spatial grid—no random pixel values.",
      thinks: "If marketing updates the primary brand hue, all 12 products should update in one token publish.",
      does: "Builds auto-layout 5.0 components, documents states (Hover, Focus, Pressed, Disabled), runs WCAG audits.",
      feels: "Proud when engineering builds components that match design 1:1 on the first pass.",
    },
    deliverables: "Figma Component Library • Design Tokens JSON • Dark/Light Modes",
  },
  {
    id: "liam",
    name: "Liam Davies",
    character: "SENIOR UX RESEARCHER",
    role: "Qualitative Interviews & Usability Labs",
    seat: "SEAT 05A // UX RESEARCH",
    icon: "🔬",
    avatarBg: "bg-[#f472b6]",
    accentColor: "#f472b6",
    tagline: "Extracting deep human insights through 25 moderated user interviews and eye-tracking.",
    bio: "Qualitative and quantitative UX researcher dedicated to testing design assumptions in the wild, identifying cognitive blind spots, and validating every interaction before production.",
    stats: {
      metric1: "25",
      label1: "Moderated Tests",
      metric2: "94/100",
      label2: "SUS Benchmark",
      metric3: "100%",
      label3: "Key Task Success",
    },
    empathy: {
      says: "Watch what users DO, not just what they SAY.",
      thinks: "Where in the visual hierarchy did the participant's eyes linger before finding the CTA?",
      does: "Synthesizes affinity diagrams, records user friction quotes, calculates System Usability Scale.",
      feels: "Empathetic towards accessibility needs and non-technical user frustrations.",
    },
    deliverables: "Affinity Mapping • SUS Scorecard • Usability Findings Deck",
  },
  {
    id: "chloe",
    name: "Chloe Vance",
    character: "MOTION & DELIGHT ARCHITECT",
    role: "Tactile Spring Dynamics & Micro-Interactions",
    seat: "SEAT 06A // INTERACTION",
    icon: "✨",
    avatarBg: "bg-[#a855f7]",
    accentColor: "#a855f7",
    tagline: "Turning routine digital inputs into tangible, sensory moments of delight.",
    bio: "Interaction designer specializing in physical damped Euler spring physics, Euclidean magnetic cursor snapping, and celebratory audio feedback that makes interfaces feel organic and alive.",
    stats: {
      metric1: "60 FPS",
      label1: "GPU Composited",
      metric2: "Euler",
      label2: "Physical Damping",
      metric3: "432Hz",
      label3: "Harmonic Feedback",
    },
    empathy: {
      says: "Physical objects in the real world have mass and momentum—digital buttons should too.",
      thinks: "How does the button respond when released off-target vs on-target?",
      does: "Animates Framer Motion state choreographies, tunes stiffness/damping curves, designs micro-delight.",
      feels: "Obsessed with buttery-smooth 60 FPS transitions and tactile game-feel.",
    },
    deliverables: "Micro-Interaction Choreographies • Spring Tuning Specs • Sound Design",
  },
];

export default function AirplaneFuselage() {
  const [selectedPassenger, setSelectedPassenger] = useState(COPASSENGERS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeEmpathyTab, setActiveEmpathyTab] = useState("says");

  const handleSelect = (passenger) => {
    setSelectedPassenger(passenger);
    cinematicAudio.playProjectorClick(1100);
    cinematicAudio.playAnamorphicChime(750);
  };

  const handleOpenModal = (passenger) => {
    setSelectedPassenger(passenger);
    setIsModalOpen(true);
    cinematicAudio.playBraam();
  };

  return (
    <section id="copassengers" className="relative py-24 px-4 sm:px-8 w-full bg-black text-white">
      {/* Background Subtle Atmosphere Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Design Items (From User Reference Image) */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [-12, -4, -12],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-8 sm:left-24 text-5xl sm:text-7xl filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] pointer-events-none hidden sm:block"
      >
        🧳
      </motion.div>

      <motion.div
        animate={{
          y: [12, -14, 12],
          rotate: [15, 25, 15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-20 right-12 sm:right-32 text-4xl sm:text-6xl filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] pointer-events-none hidden md:block"
      >
        🎧
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Title: Clean Sculptural Display + Emerald Laser Bar */}
        <div className="text-center space-y-3 select-none">
          <div className="relative inline-block text-center">
            <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-white">
              Mission Crew // <span className="text-emerald-400">Personas</span>
            </h2>
            <div className="w-full h-1.5 sm:h-2 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] mt-3 mx-auto rounded-full" />
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light tracking-wide pt-1">
            The product design squad &amp; user personas • Click any window to board
          </p>
        </div>

        {/* GIANT AIRPLANE FUSELAGE CONTAINER (On Pure Black Background) */}
        <div className="relative w-full rounded-[44px] bg-[#f8fafc] border-4 border-[#0f1322] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.15)] p-6 sm:p-10 overflow-x-auto text-black">
          {/* Airplane Lower Trim Stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-emerald-500 rounded-b-[40px] border-t-4 border-[#0f1322] flex items-center justify-between px-8 text-black font-mono text-[10px] font-bold">
            <span>BOEING 777 // PRODUCT ARCHITECTURE FLEET</span>
            <span>HYDERABAD ✈ GLOBAL REMOTE • FLIGHT UX-2026</span>
          </div>

          {/* Passenger Cabin Windows Grid */}
          <div className="flex gap-4 sm:gap-6 pb-12 sm:pb-16 pt-4 min-w-[750px] justify-between">
            {COPASSENGERS.map((p) => {
              const isSelected = selectedPassenger.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => handleSelect(p)}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  {/* Rounded Oval Airplane Window Frame */}
                  <div
                    className={`w-24 sm:w-28 h-36 sm:h-44 rounded-[28px] border-4 transition-all duration-300 p-2 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden ${
                      isSelected
                        ? "border-[#6385d6] bg-[#dbeafe] scale-105 shadow-[0_0_25px_rgba(99,133,214,0.6)]"
                        : "border-slate-800 bg-[#e2e8f0] hover:bg-[#cbd5e1] hover:scale-102"
                    }`}
                  >
                    {/* Seat number */}
                    <span className="text-[9px] font-mono font-bold text-slate-700 bg-white/80 px-1.5 rounded-full">
                      {p.seat.split("//")[0].trim()}
                    </span>

                    {/* Passenger Icon */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${p.avatarBg} border-2 border-slate-900 flex items-center justify-center text-2xl sm:text-3xl shadow-sm group-hover:rotate-6 transition-transform`}
                    >
                      {p.icon}
                    </div>

                    {/* Window Reflection Gloss */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/30 rotate-45 pointer-events-none" />

                    <span className="text-[10px] font-mono font-bold uppercase text-[#1e293b]">
                      {isSelected ? "● SELECTED" : "CLICK"}
                    </span>
                  </div>

                  {/* Passenger Label below window */}
                  <div className="text-center font-sans space-y-0.5">
                    <div className="font-titan text-xs sm:text-sm text-slate-900 group-hover:text-[#6385d6] transition-colors">
                      {p.name}
                    </div>
                    <div className="font-mono text-[9px] text-slate-600 font-bold uppercase tracking-wider">
                      {p.character}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Passenger Boarding Pass Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPassenger.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#090b12] border-2 border-emerald-500/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-white space-y-4 max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-semibold">BOARDING PASS // {selectedPassenger.seat}</span>
              </div>
              <button
                onClick={() => handleOpenModal(selectedPassenger)}
                className="px-4 py-1.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-sans font-semibold text-xs tracking-wide transition-all cursor-pointer shadow active:scale-95 flex items-center gap-1.5"
              >
                <span>OPEN EMPATHY DOSSIER</span>
                <span>↗</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <h3 className="font-titan text-2xl sm:text-3xl text-amber-300">
                    {selectedPassenger.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-[#6385d6]/20 border border-[#6385d6]/40 text-[#6385d6] text-xs font-mono font-bold">
                    {selectedPassenger.character}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#f5bc44]">"{selectedPassenger.tagline}"</p>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {selectedPassenger.bio}
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-1 gap-2 font-mono text-xs sm:text-right shrink-0">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">{selectedPassenger.stats.label1}</div>
                  <div className="font-titan text-emerald-400 text-sm">{selectedPassenger.stats.metric1}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">{selectedPassenger.stats.label2}</div>
                  <div className="font-titan text-[#f5bc44] text-sm">{selectedPassenger.stats.metric2}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Full Interactive Persona Empathy Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPassenger && (
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
              className="relative w-full max-w-3xl rounded-3xl bg-[#0d0f18] border-4 border-[#6385d6] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(99,133,214,0.3)] text-white overflow-hidden max-h-[92vh] flex flex-col font-sans cursor-default"
            >
              {/* Top Modal Bar */}
              <div className="px-6 py-4 bg-[#141828] border-b-2 border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedPassenger.icon}</span>
                  <div>
                    <h3 className="font-titan text-lg sm:text-xl text-white uppercase">
                      {selectedPassenger.name} // EMPATHY MAP
                    </h3>
                    <span className="font-mono text-xs text-[#f5bc44]">{selectedPassenger.seat}</span>
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
                {/* 4 Quadrants Empathy Grid (Says, Thinks, Does, Feels) */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    UX RESEARCH ARTIFACT: 4-QUADRANT EMPATHY MAP
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#131627] border border-[#6385d6]/30 space-y-1">
                      <div className="font-titan text-xs text-[#6385d6] uppercase flex items-center gap-1.5">
                        <span>💬</span> <span>WHAT THEY SAY</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light leading-relaxed italic">
                        "{selectedPassenger.empathy.says}"
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#131627] border border-[#f5bc44]/30 space-y-1">
                      <div className="font-titan text-xs text-[#f5bc44] uppercase flex items-center gap-1.5">
                        <span>🧠</span> <span>WHAT THEY THINK</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light leading-relaxed italic">
                        "{selectedPassenger.empathy.thinks}"
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#131627] border border-emerald-500/30 space-y-1">
                      <div className="font-titan text-xs text-emerald-400 uppercase flex items-center gap-1.5">
                        <span>⚡</span> <span>WHAT THEY DO</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {selectedPassenger.empathy.does}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#131627] border border-purple-500/30 space-y-1">
                      <div className="font-titan text-xs text-purple-400 uppercase flex items-center gap-1.5">
                        <span>❤️</span> <span>WHAT THEY FEEL</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {selectedPassenger.empathy.feels}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    PRIMARY DELIVERABLES & DESIGN IMPACT:
                  </span>
                  <div className="font-mono text-xs text-[#f5bc44]">
                    {selectedPassenger.deliverables}
                  </div>
                </div>

                {/* Action button */}
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <button
                    onClick={() => {
                      cinematicAudio.playAnamorphicChime(950);
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#f5bc44] hover:bg-amber-300 text-black font-titan text-xs uppercase tracking-wider cursor-pointer shadow-md transition-all active:scale-95"
                  >
                    ✓ CONFIRM COPASSENGER SEAT
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
