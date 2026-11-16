import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";
import InteractiveFolder from "./InteractiveFolder";
import { REAL_PORTFOLIO_PROJECTS } from "./GameHUDProjectsScroll";

const CATEGORIES = [
  { id: "all", label: "All Case Studies (8)" },
  { id: "flagship", label: "⭐ Medium Flagships (2)" },
  { id: "mobile", label: "Mobile Apps (4)" },
  { id: "system", label: "Design Systems (1)" },
  { id: "micro", label: "Micro-Interactions (1)" },
];

export default function RefinedProjectsShowcase({ onOpenCaseStudy, currentTheme }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const primaryColor = currentTheme?.primary || "#10B981";

  const filteredProjects = REAL_PORTFOLIO_PROJECTS.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "flagship") return Boolean(p.mediumUrl);
    return p.category === selectedFilter;
  });

  const handleSelectFromFolder = (projectId) => {
    const found = REAL_PORTFOLIO_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      onOpenCaseStudy?.(found);
    }
  };

  return (
    <section id="projects-hud" className="relative min-h-screen w-full bg-[#050608] py-20 sm:py-28 px-4 sm:px-8 border-t border-white/10 select-none">
      
      {/* Anchor for Navbar Navigation */}
      <div id="flagship-studies" className="absolute -top-16 left-0" />

      {/* Subtle ambient light pool in background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55vw] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================
            SECTION HEADER: CLEAN SCULPTURAL DISPLAY + EMERALD ACCENT
            ======================================================== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// 02 MISSION QUESTS &amp; PRODUCTION DELIVERABLES</span>
            </div>
            
            <div className="relative inline-block text-left">
              <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-white">
                Flagship Works &amp; <span className="text-emerald-400">Case Studies</span>
              </h2>

              {/* Refined Emerald Underline Bar */}
              <div className="w-full h-1.5 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.5)] mt-3" />
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Real published product architectures demonstrating measured user impact, cognitive ergonomics, and systematic design tokens.
            </p>
          </div>

          {/* THE INTERACTIVE CASE FILES FOLDER (From Attachment 1 & 2) */}
          <div className="flex flex-col items-center">
            <InteractiveFolder onSelectProject={handleSelectFromFolder} />
          </div>
        </div>

        {/* CLEAN CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-sans text-xs sm:text-sm">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedFilter(cat.id);
                  try {
                    cinematicAudio.playTactileClick(900);
                  } catch {}
                }}
                className={`px-4 py-2 rounded-full transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-emerald-400 text-black font-semibold border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FLAGSHIP FEATURED STUDIES SHOWCASE (HelpFarm & EatSure) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.slice(0, 2).map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-3xl bg-[#080a10]/95 backdrop-blur-2xl border border-white/10 hover:border-emerald-400/50 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] group overflow-hidden transition-colors"
            >
              {/* Card Header: Tag & Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-black text-[10px] bg-emerald-400">
                    {project.badge}
                  </span>
                  <span className="text-slate-400 font-mono text-xs">
                    FLAGSHIP // 0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    "{project.tagline}"
                  </p>
                </div>

                {/* Problem & Solution Mini Split in Clean Sentence Case */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-sans text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                    <span className="text-[10px] text-slate-400 font-mono font-semibold block uppercase tracking-wider">
                      ⚠️ Critical User Friction
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed font-light">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <span className="text-[10px] text-emerald-400 font-mono font-semibold block uppercase tracking-wider">
                      ✓ Product Architecture
                    </span>
                    <p className="text-slate-200 text-xs leading-relaxed font-light">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* 3 Real Verified Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10">
                    <span className="text-[9px] text-slate-500 uppercase block font-mono">OUTCOME</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400">{project.metric1}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10">
                    <span className="text-[9px] text-slate-500 uppercase block font-mono">SPEED</span>
                    <span className="text-xs sm:text-sm font-bold text-white">{project.metric2}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10">
                    <span className="text-[9px] text-slate-500 uppercase block font-mono">RATING</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-300">{project.metric3}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-sans text-xs">
                {project.mediumUrl && (
                  <a
                    href={project.mediumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all active:scale-95 cursor-pointer tracking-wide"
                  >
                    <span>Read on Medium</span>
                    <span>↗</span>
                  </a>
                )}

                <button
                  onClick={() => {
                    try {
                      cinematicAudio.playTactileClick(1100);
                    } catch {}
                    onOpenCaseStudy?.(project);
                  }}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 tracking-wide"
                >
                  <span>Interactive Spec &amp; Prototype</span>
                  <span>↗</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECONDARY ROW: Remaining Specialized UI/UX Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4 font-sans">
          {filteredProjects.slice(2).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                try {
                  cinematicAudio.playTactileClick(1000);
                } catch {}
                onOpenCaseStudy?.(project);
              }}
              className="p-5 sm:p-6 rounded-2xl bg-[#080a10] border border-white/10 hover:border-emerald-400/40 shadow-lg flex flex-col justify-between space-y-4 cursor-pointer group transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 uppercase">
                    {project.badge}
                  </span>
                  <span className="text-emerald-400 font-bold">{project.metric1}</span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                <span>{project.specs}</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform font-semibold">
                  EXPLORE ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
