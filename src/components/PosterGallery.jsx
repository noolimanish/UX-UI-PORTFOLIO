import React, { useState } from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const UIUX_POSTERS = [
  {
    id: "helpfarm-poster",
    tag: "HELPFARM // AGRI-TECH UX",
    badge: "MEDIUM BOOTCAMP",
    title: "HelpFarm AI Crop Disease Scanner",
    role: "Lead Product Designer • ML to UX Research",
    tagline: "Empowering rural Indian farmers to diagnose crop diseases in 12s with local language audio assistance",
    desc: "Mobile application integrating computer vision leaf diagnosis, vernacular audio narration (Telugu/Hindi), offline-first caching, and peer-to-peer farmer forums.",
    problem: "Delayed disease diagnosis (4-7 days wait) destroyed 30-40% of seasonal harvest yields across rural villages; technical chemical terms confused low-literacy farmers.",
    solution: "High-contrast 1-tap camera viewfinder, instant offline AI leaf diagnosis, vernacular voice navigation, and personalized chemical dosage guides.",
    metric1: "92% Field Success",
    metric2: "12s vs 4 Days Diagnosis",
    metric3: "4.9★ Farmer Rating",
    accentBadge: "92% SUCCESS",
    specs: "Figma • Vernacular Audio • Computer Vision",
    date: "MEDIUM BOOTCAMP",
    mediumUrl: "https://medium.com/design-bootcamp/ux-case-study-designing-helpfarm-an-app-empowering-farmers-gardeners-to-combat-crop-diseases-c5bc98f767c0",
  },
  {
    id: "eatsure-poster",
    tag: "EATSURE // FOOD COURT UX",
    badge: "MEDIUM BOOTCAMP",
    title: "EatSure Multi-Restaurant Food App",
    role: "Lead UX Designer • FigJam, Figma Design System",
    tagline: "Combining Faasos, Behrouz Biryani & Oven Story into a seamless single checkout",
    desc: "A UX architectural redesign of Rebel Foods' multi-brand delivery platform, introducing a digital food court paradigm, craving-first search, and culinary hygiene telemetry.",
    problem: "58% cart abandonment due to fragmented multi-brand navigation; 68% of users searched for brand names rather than isolated dishes without clear prep times.",
    solution: "Food court multi-brand browsing, brand-first omni-search, transparent hygiene telemetry (temperature logs & kitchen cams), and a unified single cart drawer.",
    metric1: "+34% Cross-Brand Size",
    metric2: "-48% Cart Abandonment",
    metric3: "82% Faster Re-Orders",
    accentBadge: "+34% BASKET",
    specs: "Figma • FigJam • User Interviews • Single Cart",
    date: "MEDIUM BOOTCAMP",
    mediumUrl: "https://medium.com/design-bootcamp/eatsure-redesign-ux-case-study-of-an-online-food-delivery-app-deliver-from-multiple-restaurants-35e842c8c51e",
  },
  {
    id: "finflow",
    tag: "FINFLOW // MOBILE UX",
    badge: "FINTECH REDESIGN",
    title: "FinFlow Mobile Banking App",
    role: "Lead Product Designer • Figma, Principle",
    tagline: "Simplifying multi-tier banking onboarding and progressive 1-click checkout",
    desc: "Re-architecting mobile banking for digital natives with progressive disclosure, biometric authentication, and tactile micro-interactions that slashed drop-off rates.",
    problem: "Users experienced a 62% drop-off during checkout due to cognitive overload, 14 mandatory form inputs on a single page, and zero visual progress feedback.",
    solution: "Re-architected the entire flow into a 3-step progressive disclosure tray with biometric confirmation, inline error validation, and micro-delight animations.",
    metric1: "+38% Conversion Rate",
    metric2: "94 / 100 SUS Score",
    metric3: "100% WCAG AAA Compliant",
    accentBadge: "+38% CONVERSION",
    specs: "3-Step Flow • 94 SUS Score • WCAG AAA",
    date: "CASE STUDY",
  },
  {
    id: "nexus",
    tag: "NEXUS // FIGMA SYSTEM",
    badge: "DESIGN SYSTEMS",
    title: "Nexus Universal Design System",
    role: "Design Systems Architect • Figma, Tokens Studio",
    tagline: "120+ component variants, auto-layout 5.0, and 42 semantic design tokens",
    desc: "Creating an atomic, scalable Figma component library and token hierarchy to unify 12 enterprise product squads with zero design debt.",
    problem: "Inconsistent cross-platform design debt, duplicate engineering requests, and inaccessible color contrast ratios across 12 product squads.",
    solution: "Created 120+ modular Figma component variants with auto-layout, 42 semantic design tokens, and synchronized dark/light mode.",
    metric1: "120+ Component Variants",
    metric2: "42 Design Tokens",
    metric3: "0ms Recalculation Overhead",
    accentBadge: "120+ COMPONENTS",
    specs: "42 Semantic Tokens • Auto-Layout 5.0",
    date: "FIGMA SYSTEM",
  },
  {
    id: "aura",
    tag: "AURA // SENSORY UX",
    badge: "GAMIFIED PRODUCT",
    title: "Aura Habit & Mindfulness Tracker",
    role: "Lead Interaction Designer • Figma, Framer",
    tagline: "Habit formation platform with sensory sound and micro-delight rewards",
    desc: "Infusing habit tracking with physical spring dynamics, Web Audio harmonic celebratory sounds, and streak-protection psychology to drive 30-day retention.",
    problem: "High 7-day user drop-off in habit tracking apps due to guilt-driven notifications and lack of immediate intrinsic reward feedback.",
    solution: "Engineered tactile spring physics, auditory harmonic celebrations, and streak-preservation psychology to foster positive habits.",
    metric1: "+54% 30-Day Retention",
    metric2: "4.9★ App Store Rating",
    metric3: "120k Monthly Active Users",
    accentBadge: "+54% RETENTION",
    specs: "Spring Physics • 432Hz Sound Chimes",
    date: "APP STORE 4.9★",
  },
  {
    id: "orbit",
    tag: "ORBIT // B2B SAAS",
    badge: "ENTERPRISE UX",
    title: "Orbit Cloud Security Platform",
    role: "Senior UX Architect • Figma, Maze",
    tagline: "Taming complex data density with Hick's Law progressive disclosure",
    desc: "Redesigning high-density telemetry dashboards for security analysts, transforming 80+ column data dumps into contextual drill-down trays.",
    problem: "Enterprise security analysts suffered severe cognitive fatigue navigating 80+ unstructured data columns during active cloud incident triage.",
    solution: "Deconstructed dense telemetry grids into contextual drill-down trays, priority filters, and spatial hierarchy anchors.",
    metric1: "-42% Triage Time",
    metric2: "3.8x Task Completion",
    metric3: "99.4% First-Pass Success",
    accentBadge: "-42% TIME",
    specs: "Progressive Trays • Zero Friction",
    date: "ENTERPRISE",
  },
];

export default function PosterGallery({ onOpenCaseStudy }) {
  const [selectedPoster, setSelectedPoster] = useState(UIUX_POSTERS[0]);

  const handleSelectPoster = (p) => {
    setSelectedPoster(p);
    try {
      cinematicAudio.playTactileClick(950);
    } catch {}
  };

  const handleOpenModal = (p) => {
    try {
      cinematicAudio.playTactileClick(1100);
    } catch {}
    onOpenCaseStudy?.(p);
  };

  return (
    <section id="the-gang" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 bg-[#050608] select-none border-t border-white/10">
      {/* Clean Sculptural Section Header */}
      <div className="text-center space-y-3 select-none">
        <div className="relative inline-block text-center">
          <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-white">
            Design Achievements // <span className="text-emerald-400">Vault</span>
          </h2>
          <div className="w-full h-1.5 sm:h-2 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] mt-3 mx-auto rounded-full" />
        </div>
        <p className="font-sans text-xs sm:text-sm text-slate-300 font-light tracking-wide pt-2">
          Click any mission card below to open the complete interactive case study and design specifications.
        </p>
      </div>

      {/* Horizontal Poster Carousel / Cards Wall */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto py-6 px-2 scrollbar-none snap-x snap-mandatory">
        {UIUX_POSTERS.map((poster) => {
          return (
            <motion.div
              key={poster.id}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOpenModal(poster)}
              className="min-w-[280px] sm:min-w-[330px] rounded-3xl bg-[#090c14] border border-white/10 hover:border-emerald-400/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)] snap-center cursor-pointer transition-all flex flex-col justify-between h-[450px] p-6 select-none relative overflow-hidden group"
            >
              {/* Top Tag & Badge */}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="bg-emerald-400 text-black font-semibold px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase">
                  {poster.badge}
                </span>
                <span className="text-slate-400 tracking-wider text-[11px]">{poster.date}</span>
              </div>

              {/* Big Center Display Title */}
              <div className="my-auto space-y-3">
                <div className="font-mono text-xs tracking-wider text-emerald-400 font-semibold uppercase">
                  {poster.tag}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {poster.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                  {poster.desc}
                </p>
              </div>

              {/* Bottom Specs Strip & Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-[10px]">
                  {poster.accentBadge}
                </span>
                <span className="bg-white/10 group-hover:bg-emerald-400 group-hover:text-black text-white px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-colors">
                  Open Case ↗
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Inspection Viewport Teardown */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080a10] border border-white/10 hover:border-emerald-400/40 shadow-xl text-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold uppercase tracking-wider text-emerald-400">
              QUICK OVERVIEW // {selectedPoster.title}
            </span>
          </div>
          <button
            onClick={() => handleOpenModal(selectedPoster)}
            className="px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide bg-emerald-400 hover:bg-emerald-300 text-black cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all active:scale-95"
          >
            View Full Case Study Modal ↗
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase">ROLE &amp; TOOLS</div>
            <div className="font-sans font-medium text-sm text-white">{selectedPoster.role}</div>
          </div>
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase">DESIGN PROBLEM SOLVED</div>
            <div className="font-sans text-slate-300 text-xs leading-relaxed font-light">{selectedPoster.desc}</div>
          </div>
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase">MEASURED IMPACT</div>
            <div className="font-mono text-emerald-400 text-xs font-bold">{selectedPoster.specs}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
