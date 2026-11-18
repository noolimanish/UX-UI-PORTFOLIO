import React from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";
import InteractiveFolder from "./InteractiveFolder";

export const FLAGSHIP_PROJECTS = [
  {
    num: "#01",
    scriptTag: "Empowering 100K+ Farmers with AI Diagnostics",
    title: "HelpFarm AI Crop Leaf Scanner",
    categoryTag: "Agri-Tech UX • Computer Vision",
    tagline: "Bridging computer vision with vernacular Telugu & Hindi voice assistance for low-literacy Indian farmers",
    problem: "Delayed plant disease identification took 4-7 agonizing days, wiping out 30-40% of seasonal harvests in rural villages.",
    solution: "1-Tap high-contrast camera viewfinder, instant offline AI diagnosis, local audio narration, and precise chemical dosage guidance.",
    metrics: [
      { label: "DIAGNOSIS TIME", val: "12s vs 4 Days", badgeBg: "bg-[#fef9c3]/15 text-amber-200 border-[#fde047]/40" },
      { label: "FIELD ACCURACY", val: "92% Verified", badgeBg: "bg-[#dcfce7]/15 text-emerald-300 border-[#86efac]/40" },
      { label: "FARMER RATING", val: "4.9 ★ Verified", badgeBg: "bg-[#fed7aa]/15 text-orange-200 border-[#fdba74]/40" },
    ],
    mockupUI: {
      screenTitle: "Tomato Leaf Scan",
      badge: "AI VISION 96.4%",
      disease: "Early Blight (Alternaria solani)",
      remedy: "Spray Mancozeb 75% WP @ 2g/litre",
      audioTelugu: "యాప్‌లో ధృవీకరించబడింది: టమోటా పంటలో ప్రారంభ ఆకు తెగులు గుర్తించబడింది.",
      accent: "bg-emerald-500",
      pillColor: "bg-emerald-400 text-black",
    },
    mediumUrl: "https://medium.com/design-bootcamp/ux-case-study-designing-helpfarm-an-app-empowering-farmers-gardeners-to-combat-crop-diseases-c5bc98f767c0",
  },
  {
    num: "#02",
    scriptTag: "Multi-Brand Food Court Single Checkout",
    title: "EatSure Multi-Restaurant App Redesign",
    categoryTag: "E-Commerce • Split-Kitchen Cart",
    tagline: "Combining Faasos, Behrouz Biryani & Oven Story into a unified single-cart delivery experience",
    problem: "58% cart abandonment when customers were forced to place separate individual orders across multi-brand kitchens.",
    solution: "Digital food court paradigm, craving-first omni-search, kitchen hygiene telemetry, and a single consolidated checkout drawer.",
    metrics: [
      { label: "BASKET SIZE", val: "+34% Cross-Brand", badgeBg: "bg-[#fed7aa]/15 text-orange-200 border-[#fdba74]/40" },
      { label: "ABANDONMENT", val: "-48% Drop-off", badgeBg: "bg-[#dcfce7]/15 text-emerald-300 border-[#86efac]/40" },
      { label: "RE-ORDER SPEED", val: "82% Faster", badgeBg: "bg-[#fef9c3]/15 text-amber-200 border-[#fde047]/40" },
    ],
    mockupUI: {
      screenTitle: "Food Court Unified Cart",
      badge: "SINGLE CART 🛒",
      disease: "3 Kitchens in 1 Order",
      remedy: "Faasos Rolls + Behrouz Biryani + Sweet Truth",
      audioTelugu: "Zero delivery fees applied for combined restaurant order.",
      accent: "bg-amber-500",
      pillColor: "bg-amber-400 text-black",
    },
    mediumUrl: "https://medium.com/design-bootcamp/eatsure-redesign-ux-case-study-of-an-online-food-delivery-app-deliver-from-multiple-restaurants-35e842c8c51e",
  },
];

export default function ShowcaseCaseStudies({ onOpenCaseStudy }) {
  const handleSelectCaseStudy = (proj) => {
    try {
      cinematicAudio.playTactileClick(1100);
    } catch {}
    onOpenCaseStudy?.({
      id: proj.num === "#01" ? "helpfarm" : "eatsure-redesign",
      title: proj.title,
      tagline: proj.tagline,
      problem: proj.problem,
      solution: proj.solution,
      metric1: proj.metrics[0].val,
      metric2: proj.metrics[1].val,
      metric3: proj.metrics[2].val,
      mediumUrl: proj.mediumUrl,
      badge: "MEDIUM PUBLISHED",
      specs: "Figma • Research • Prototype",
    });
  };

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto space-y-24 select-none">
      
      {/* SECTION HEADER: Font Mixing & Stickers (Exact match to Landing Page style!) */}
      <div className="relative text-center space-y-4 max-w-3xl mx-auto">
        
        {/* Top Pastel Sticker Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 flex-wrap">
          <div className="px-3.5 py-1 rounded-full bg-[#dcfce7] text-[#14532d] border border-[#86efac] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[-3deg]">
            IMPACT ARCHIVE
          </div>
          <span className="font-['Playfair_Display'] italic text-slate-300 text-sm sm:text-base font-normal tracking-wide">
            selected case studies
          </span>
          <div className="px-3.5 py-1 rounded-full bg-[#fef9c3] text-[#713f12] border border-[#fde047] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[3deg]">
            2024 — 2026
          </div>
        </div>

        {/* Masterful Headline with Font Mixing */}
        <div className="space-y-1">
          <h2 className="font-['Anton',sans-serif] text-5xl sm:text-7xl md:text-8xl tracking-wider text-white uppercase leading-none filter drop-shadow">
            FEATURED WORK
          </h2>
          <div className="-mt-3 sm:-mt-6">
            <span className="font-['Playfair_Display'] italic font-normal text-rose-400 text-2xl sm:text-4xl md:text-5xl tracking-tight filter drop-shadow-md">
              Crafted for Real Humans
            </span>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed pt-2">
          Turning dense systemic friction into clean, accessible, and high-converting product journeys with verified metrics.
        </p>

        {/* Fanning-out Interactive Design Folder with Generous Breathing Room */}
        <div className="pt-16 sm:pt-20 pb-4 flex justify-center">
          <InteractiveFolder
            onSelectProject={(id) => {
              const match = id === "helpfarm" ? FLAGSHIP_PROJECTS[0] : FLAGSHIP_PROJECTS[1];
              handleSelectCaseStudy(match);
            }}
          />
        </div>
      </div>

      {/* ========================================================
          FLAGSHIP PROJECTS DISPLAY: EDITORIAL SKETCH CARDS
          (Warm, tactile, human-crafted layout matching Hero)
          ======================================================== */}
      <div className="space-y-20">
        {FLAGSHIP_PROJECTS.map((proj, idx) => (
          <div
            key={proj.num}
            className={`flex flex-col ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-between gap-10 sm:gap-16 p-6 sm:p-12 rounded-[36px] bg-[#0c0d14]/90 backdrop-blur-2xl border-2 border-[#f97316]/40 hover:border-[#f97316]/70 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(249,115,22,0.1)] relative overflow-hidden group transition-all`}
          >
            {/* Subtle Drafting Grid Pattern on Card */}
            <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />

            {/* Ambient Warm Underglow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/[0.05] rounded-full blur-3xl pointer-events-none" />

            {/* LEFT / TEXT & CASE STUDY DETAILS */}
            <div className="flex-1 space-y-6 text-left relative z-10 w-full">
              
              {/* STICKY NOTE TAGS ATOP CARD (Matching Hero style) */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-md bg-[#fef08a] text-[#854d0e] border border-[#facc15] font-mono text-[10px] font-bold shadow-sm rotate-[-2deg]">
                  {proj.categoryTag}
                </span>
                <span className="px-3 py-1 rounded-md bg-[#bbf7d0] text-[#166534] border border-[#86efac] font-mono text-[10px] font-bold shadow-sm rotate-[2deg]">
                  Medium Case Study ★
                </span>
              </div>

              {/* Number & Headline with Font Mixing */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-['Anton',sans-serif] text-5xl sm:text-7xl text-white/90 leading-none">
                    {proj.num}
                  </span>
                  <span className="font-['Playfair_Display'] italic font-normal text-rose-400 text-xl sm:text-2xl">
                    {proj.scriptTag}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                  {proj.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                  {proj.tagline}
                </p>
              </div>

              {/* Problem vs Solution Split: Warm Editorial Sticky Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs pt-1">
                {/* Challenge Card (Warm Butter Paper) */}
                <div className="p-4 rounded-2xl bg-[#fef9c3]/[0.08] border border-[#fde047]/30 space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>⚠️</span>
                    <span>THE HUMAN FRICTION</span>
                  </span>
                  <p className="text-slate-200 font-light text-xs leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                {/* Solution Card (Soft Mint Paper) */}
                <div className="p-4 rounded-2xl bg-[#dcfce7]/[0.08] border border-[#86efac]/30 space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>✨</span>
                    <span>DESIGN BREAKTHROUGH</span>
                  </span>
                  <p className="text-slate-200 font-light text-xs leading-relaxed">
                    {proj.solution}
                  </p>
                </div>
              </div>

              {/* 3 Real Verified Metrics as Warm Stamps */}
              <div className="grid grid-cols-3 gap-2.5 pt-1 font-mono text-center">
                {proj.metrics.map((m, i) => (
                  <div key={i} className={`p-3 rounded-2xl border ${m.badgeBg} shadow-sm space-y-0.5`}>
                    <span className="text-[8px] sm:text-[9px] uppercase block font-semibold tracking-wider opacity-80">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold block">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Sleek Black Contact Style + Medium Pill */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleSelectCaseStudy(proj)}
                  className="px-6 py-3 rounded-xl bg-black hover:bg-neutral-900 text-white font-mono text-xs sm:text-sm font-bold tracking-wider border-2 border-white/20 hover:border-emerald-400 shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>↗</span>
                  <span>VIEW CASE STUDY</span>
                </button>

                <a
                  href={proj.mediumUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-sans text-xs sm:text-sm font-medium border border-white/10 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Read on Medium</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT / FLOATING REALISTIC PHONE MOCKUP */}
            <motion.div
              whileHover={{ y: -6, rotate: idx % 2 === 0 ? 1.5 : -1.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative w-64 sm:w-72 h-[480px] rounded-[48px] bg-black border-4 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.15)] p-3 flex flex-col justify-between overflow-hidden cursor-pointer select-none shrink-0"
              onClick={() => handleSelectCaseStudy(proj)}
              title="Click to Inspect Prototype"
            >
              {/* Dynamic Island Notch */}
              <div className="w-24 h-5 mx-auto rounded-full bg-black border border-white/20 shadow-md flex items-center justify-between px-2.5 z-20">
                <div className="w-2 h-2 rounded-full bg-slate-900 border border-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Realistic Screen Content */}
              <div className="relative flex-1 mt-3 rounded-[36px] bg-[#12141e] border border-white/10 p-4 flex flex-col justify-between overflow-hidden text-white">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      {proj.mockupUI.badge}
                    </span>
                    <span className="text-emerald-400 font-bold">9:41</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                    <div className="font-display font-bold text-xs text-white">
                      {proj.mockupUI.screenTitle}
                    </div>
                    <div className="text-[10px] text-emerald-300 font-medium">
                      ✓ {proj.mockupUI.disease}
                    </div>
                  </div>
                </div>

                {/* Animated Scanner Preview Graphic */}
                <div className="my-auto py-3 text-center space-y-2">
                  <div className="relative w-28 h-28 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-950 via-slate-900 to-black border border-emerald-500/40 flex items-center justify-center text-4xl shadow-inner overflow-hidden">
                    <span>{idx === 0 ? "🍃" : "🍱"}</span>
                    <motion.div
                      animate={{ y: [-45, 45, -45] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399]"
                    />
                  </div>
                  <span className="text-[9px] font-mono text-emerald-300 font-bold block tracking-wider uppercase">
                    {idx === 0 ? "SCAN VERIFIED // OFFLINE" : "FOOD COURT ORDER // 3 IN 1"}
                  </span>
                </div>

                {/* Bottom App Screen Audio Bar */}
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono">
                  <span className="text-slate-300 truncate max-w-[140px]">
                    {proj.mockupUI.remedy}
                  </span>
                  <span className="text-emerald-400 font-bold">12s ⚡</span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 mx-auto bg-white/30 rounded-full my-1" />
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
}
