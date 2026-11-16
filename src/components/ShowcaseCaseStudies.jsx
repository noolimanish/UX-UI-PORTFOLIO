import React from "react";
import { motion } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";
import InteractiveFolder from "./InteractiveFolder";

export const FLAGSHIP_PROJECTS = [
  {
    num: "#01",
    scriptTag: "Empowering 100K+ Farmers with AI Diagnostics",
    title: "HelpFarm AI Crop Leaf Scanner",
    tagline: "Bridging computer vision with vernacular Telugu & Hindi voice assistance for low-literacy Indian farmers",
    problem: "Delayed plant disease identification took 4-7 days, wiping out 30-40% of seasonal harvests in rural villages.",
    solution: "1-Tap high-contrast camera viewfinder, instant offline AI diagnosis, local audio narration, and precise chemical dosage guidance.",
    metrics: [
      { label: "DIAGNOSIS SPEED", val: "12s vs 4 Days" },
      { label: "FIELD ACCURACY", val: "92% Verified" },
      { label: "FARMER RATING", val: "4.9 ★ Rating" },
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
    tagline: "Combining Faasos, Behrouz Biryani & Oven Story into a unified single-cart delivery experience",
    problem: "58% cart abandonment when customers were forced to place separate individual orders across multi-brand kitchens.",
    solution: "Digital food court paradigm, craving-first omni-search, kitchen hygiene telemetry, and a single consolidated checkout drawer.",
    metrics: [
      { label: "BASKET SIZE", val: "+34% Cross-Brand" },
      { label: "ABANDONMENT", val: "-48% Drop-off" },
      { label: "RE-ORDER SPEED", val: "82% Faster" },
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
      
      {/* SECTION HEADER WITH WATERMARK TYPOGRAPHY (Reference Images 5 & 6) */}
      <div className="relative text-center space-y-4">
        {/* Large Faint Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-6xl sm:text-9xl text-white/[0.03] tracking-tighter whitespace-nowrap pointer-events-none select-none">
          CASE STUDIES
        </div>

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>// 02 FLAGSHIP PRODUCT IMPACT</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Featured <span className="text-emerald-400 font-serifTitle italic font-normal">Case Studies</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-md mx-auto">
            Real published production products designed with human ergonomics and verified user metrics.
          </p>
        </div>

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
          FLAGSHIP PROJECTS DISPLAY: FLOATING PHONE FRAMES
          (Direct match to Reference Images 5 & 6!)
          ======================================================== */}
      <div className="space-y-20">
        {FLAGSHIP_PROJECTS.map((proj, idx) => (
          <div
            key={proj.num}
            className={`flex flex-col ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-between gap-12 sm:gap-16 p-8 sm:p-14 rounded-[36px] bg-[#090b14]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden group`}
          >
            {/* Subtle Ambient Aura */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/[0.06] rounded-full blur-3xl pointer-events-none" />

            {/* LEFT / TEXT DETAILS */}
            <div className="flex-1 space-y-6 text-left">
              {/* Bold Number & Script Subtitle (Reference Image 5!) */}
              <div className="space-y-1">
                <div className="font-display font-black text-5xl sm:text-7xl text-emerald-400 leading-none">
                  {proj.num}
                </div>
                <div className="font-serifTitle italic text-base sm:text-lg text-slate-300 font-normal">
                  {proj.scriptTag}
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                  {proj.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {proj.tagline}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs pt-1">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    ⚠️ Critical Friction
                  </span>
                  <p className="text-slate-300 font-light text-xs leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    ✓ UX Architecture
                  </span>
                  <p className="text-slate-200 font-light text-xs leading-relaxed">
                    {proj.solution}
                  </p>
                </div>
              </div>

              {/* 3 Real Verified Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 font-mono text-center">
                {proj.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-0.5">
                    <span className="text-[9px] text-slate-500 uppercase block font-semibold">{m.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400">{m.val}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: View Project & Read on Medium */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleSelectCaseStudy(proj)}
                  className="px-6 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-sans font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>View Interactive Case Study</span>
                  <span className="text-xs font-bold">↗</span>
                </button>

                <a
                  href={proj.mediumUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-medium text-xs tracking-wide transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Read on Medium</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT / FLOATING REALISTIC PHONE MOCKUP (Reference Image 5!) */}
            <motion.div
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? 2 : -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative w-64 sm:w-72 h-[480px] rounded-[48px] bg-black border-4 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.15)] p-3 flex flex-col justify-between overflow-hidden cursor-pointer select-none"
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
                      className="absolute inset-x-0 h-1 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                    />
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 line-clamp-2 px-1">
                    {proj.mockupUI.remedy}
                  </p>
                </div>

                {/* Bottom App Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span className="text-white font-bold">TAP TO INSPECT</span>
                  <span className="text-emerald-400">PROTOTYPE ↗</span>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-28 h-1 mx-auto rounded-full bg-white/40 my-1.5" />
            </motion.div>

          </div>
        ))}
      </div>

    </section>
  );
}
