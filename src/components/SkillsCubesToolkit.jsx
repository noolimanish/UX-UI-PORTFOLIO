import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const SKILL_BLOCKS = [
  {
    id: "strategy",
    num: "01",
    title: "Product Strategy & Discovery",
    tagline: "Connecting Business Objectives with Authentic User Needs",
    desc: "Transforming ambiguous user problems into structured product roadmaps, opportunity solution trees, and metric-driven MVP scopes.",
    deliverables: ["Product Vision Canvas", "North Star Metrics", "Opportunity Solution Trees", "Feature Prioritization (MoSCoW)"],
    color: "from-emerald-500/20 to-emerald-950/40",
    border: "border-emerald-500/40",
    glow: "rgba(16, 185, 129, 0.4)",
    icon: "🧭",
  },
  {
    id: "research",
    num: "02",
    title: "User Research & Cognitive Psychology",
    tagline: "Rooted in Hick's Law, Fitts's Law & Human Ergonomics",
    desc: "Uncovering latent behavioral insights through generative user interviews, contextual field studies, mental model mapping, and task analysis.",
    deliverables: ["User Empathy Personas", "Contextual Field Inquiries", "Cognitive Friction Audits", "Card Sorting & Treejack Testing"],
    color: "from-white/10 to-slate-900/40",
    border: "border-white/20",
    glow: "rgba(255, 255, 255, 0.2)",
    icon: "🧠",
  },
  {
    id: "architecture",
    num: "03",
    title: "Information Architecture & Flow",
    tagline: "Zero Cognitive Friction Navigation Hierarchies",
    desc: "Designing scalable sitemaps, progressive disclosure trays, and frictionless single-checkout funnel pathways that eliminate decision fatigue.",
    deliverables: ["Modular User Journeys", "Progressive Disclosure Flows", "Edge-Case Error Matrices", "Low-Fidelity Interactive Wireframes"],
    color: "from-emerald-500/15 to-emerald-950/30",
    border: "border-emerald-400/30",
    glow: "rgba(16, 185, 129, 0.3)",
    icon: "🗺️",
  },
  {
    id: "systems",
    num: "04",
    title: "Design Systems & Token Architecture",
    tagline: "Atomic Components with 100% Engineering Sync",
    desc: "Building multi-brand Figma token systems (color, elevation, typography, spacing) with auto-layout 5.0 and component property sets that scale effortlessly.",
    deliverables: ["120+ Component Variants", "Semantic CSS Token Variables", "Dark & Light Mode Engine", "Design System Documentation (Zero Debt)"],
    color: "from-white/10 to-slate-950/40",
    border: "border-white/20",
    glow: "rgba(255, 255, 255, 0.2)",
    icon: "💎",
  },
  {
    id: "motion",
    num: "05",
    title: "Micro-Interactions & Spring Motion",
    tagline: "Damped Euler Springs & 60 FPS Tactile Feedback",
    desc: "Crafting fluid choreographies that provide immediate physical reassurance, subtle micro-delights, and intuitive gesture-driven navigation.",
    deliverables: ["Interactive Framer Prototypes", "Haptic Sound Integration", "Fluid Dynamic Island Gestures", "Custom Lottie SVG Animations"],
    color: "from-emerald-500/20 to-emerald-950/40",
    border: "border-emerald-500/40",
    glow: "rgba(16, 185, 129, 0.4)",
    icon: "✨",
  },
  {
    id: "testing",
    num: "06",
    title: "Usability Testing & Accessibility (WCAG)",
    tagline: "Guaranteed AAA Color Contrast & High SUS Scores",
    desc: "Validating every workflow against quantitative usability benchmarks (System Usability Scale > 85), keyboard focus rings, and screen-reader semantics.",
    deliverables: ["Quantitative SUS Benchmarks", "A/B Prototype Experiments", "WCAG 2.1 AAA Accessibility", "Task Time & Error-Rate Reports"],
    color: "from-white/10 to-slate-900/40",
    border: "border-white/20",
    glow: "rgba(255, 255, 255, 0.2)",
    icon: "📊",
  },
];

export const TOOLKIT_DOCK = [
  {
    id: "figma",
    name: "Figma",
    role: "Design System & UI Master",
    desc: "Auto-Layout 5.0, Component Variants, Variables, Tokens",
    icon: "🎨",
    badge: "PRIMARY TOOL",
    level: "100%",
  },
  {
    id: "figjam",
    name: "FigJam",
    role: "Research & Journey Mapping",
    desc: "User flows, affinity mapping, brainstorming workshops",
    icon: "📝",
    badge: "RESEARCH",
    level: "95%",
  },
  {
    id: "framer",
    name: "Framer",
    role: "Interactive Production Motion",
    desc: "React-ready spring physics, interactive web prototypes",
    icon: "⚡",
    badge: "PROTOTYPING",
    level: "92%",
  },
  {
    id: "principle",
    name: "Principle",
    role: "Timeline Micro-Interactions",
    desc: "Gesture-driven scrolling, paging, and card transitions",
    icon: "📱",
    badge: "MOBILE MOTION",
    level: "90%",
  },
  {
    id: "aftereffects",
    name: "After Effects",
    role: "Motion Graphics & Lottie",
    desc: "Vector animations, loader loops, visual kinetic typography",
    icon: "🎬",
    badge: "MOTION",
    level: "88%",
  },
  {
    id: "spline",
    name: "Spline 3D",
    role: "Spatial & 3D Interactive UI",
    desc: "Interactive 3D web assets, materials, physics shaders",
    icon: "🧊",
    badge: "3D SPATIAL",
    level: "85%",
  },
  {
    id: "tokens",
    name: "Tokens Studio",
    role: "Multi-Brand Design Tokens",
    desc: "W3C token format, GitHub sync, design-to-code pipelines",
    icon: "⚙️",
    badge: "SYSTEMS",
    level: "95%",
  },
  {
    id: "maze",
    name: "Maze & Testing",
    role: "Quantitative UX Validation",
    desc: "Unmoderated testing, heatmaps, task success rates",
    icon: "🧪",
    badge: "USER TESTING",
    level: "90%",
  },
];

export default function SkillsCubesToolkit() {
  const [activeBlock, setActiveBlock] = useState(SKILL_BLOCKS[0]);
  const [hoveredTool, setHoveredTool] = useState(null);

  const handleSelectBlock = (block) => {
    setActiveBlock(block);
    try {
      cinematicAudio.playTactileClick(1050);
    } catch {}
  };

  return (
    <section id="skills-toolkit" className="relative py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 select-none border-t border-white/10">
      
      {/* SECTION HEADER: Creative, Sculptural & Clean */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>// 04 COGNITIVE SKILLS &amp; DESIGN TOOLKIT</span>
        </div>

        <div className="relative inline-block text-center">
          <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-white">
            Superpowers &amp; <span className="text-emerald-400">Toolkit</span>
          </h2>
          <div className="w-full h-1.5 sm:h-2 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] mt-3 mx-auto rounded-full" />
        </div>

        <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          How I think, conceptualize, and ship high-impact digital products. Click any skill block in the stack or inspect the interactive toolkit dock.
        </p>
      </div>

      {/* ========================================================
          PART 1: INTERACTIVE 3D STACK OF SKILL BLOCKS / CUBES
          ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT: 3D Stack of Skill Cubes / Cards */}
        <div className="lg:col-span-6 space-y-2.5">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between pb-1">
            <span>CORE UI/UX DISCIPLINES</span>
            <span className="text-emerald-400">CLICK TO UNPACK ↴</span>
          </div>

          <div className="space-y-2">
            {SKILL_BLOCKS.map((block) => {
              const isSelected = activeBlock.id === block.id;
              return (
                <motion.div
                  key={block.id}
                  whileHover={{ x: 6, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleSelectBlock(block)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-[#10141e] border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] text-white"
                      : "bg-[#08090f] border-white/10 hover:border-white/25 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl">{block.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold">{block.num}</span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
                          {block.title}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-slate-400 font-light line-clamp-1">
                        {block.tagline}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-mono font-bold transition-transform ${isSelected ? "text-emerald-400 translate-x-1" : "text-slate-600"}`}>
                    {isSelected ? "ACTIVE ●" : "INSPECT ↗"}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Active Skill Block Expanded Deep-Dive Display */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBlock.id}
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-6 relative overflow-hidden"
            >
              {/* Subtle Ambient Emerald Aura */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Block Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 font-mono text-[10px] text-emerald-400 font-semibold">
                    <span>DISCIPLINE {activeBlock.num} OF 06</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    {activeBlock.title}
                  </h3>
                  <p className="font-sans text-xs text-emerald-300 font-normal">
                    {activeBlock.tagline}
                  </p>
                </div>
                <span className="text-4xl sm:text-5xl">{activeBlock.icon}</span>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {activeBlock.desc}
              </p>

              {/* Tangible UI/UX Deliverables */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  VERIFIED DESIGN ARTIFACTS &amp; DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeBlock.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 font-sans text-xs text-slate-200"
                    >
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ========================================================
          PART 2: MAC/VISION-OS STYLE FLOATING TOOLKIT DOCK
          ======================================================== */}
      <div className="pt-8 space-y-4">
        <div className="text-center space-y-1">
          <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-widest">
            // INTERACTIVE TOOLKIT DOCK
          </span>
          <h3 className="font-display font-bold text-2xl text-white">
            Daily Production Arsenal
          </h3>
          <p className="font-sans text-xs text-slate-400 font-light">
            Hover over the floating dock icons to inspect proficiency and workflows
          </p>
        </div>

        {/* Floating Glassmorphic Dock Container */}
        <div className="flex justify-center pt-2">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-3xl bg-[#0d101a]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] max-w-4xl">
            {TOOLKIT_DOCK.map((tool) => {
              const isHovered = hoveredTool?.id === tool.id;
              return (
                <motion.div
                  key={tool.id}
                  whileHover={{ y: -8, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => {
                    setHoveredTool(tool);
                    try {
                      cinematicAudio.playTactileClick(1200);
                    } catch {}
                  }}
                  onMouseLeave={() => setHoveredTool(null)}
                  className="relative flex flex-col items-center cursor-pointer group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.04] group-hover:bg-emerald-400/20 border border-white/10 group-hover:border-emerald-400/50 flex items-center justify-center text-2xl sm:text-3xl shadow-md transition-colors">
                    <span>{tool.icon}</span>
                  </div>
                  <span className="font-sans font-medium text-[10px] sm:text-xs text-slate-300 group-hover:text-white pt-1">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tooltip Inspector */}
        <AnimatePresence>
          {hoveredTool && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="max-w-md mx-auto p-4 rounded-2xl bg-[#090b14] border border-emerald-500/40 shadow-xl text-center space-y-1"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">{hoveredTool.icon}</span>
                <span className="font-display font-bold text-white text-base">{hoveredTool.name}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-black font-mono text-[9px] font-bold">
                  {hoveredTool.level}
                </span>
              </div>
              <div className="font-sans text-xs text-emerald-300 font-medium">{hoveredTool.role}</div>
              <p className="font-sans text-xs text-slate-300 font-light">{hoveredTool.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
