import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function CaseStudyModal({ caseStudy, isOpen, onClose, currentTheme }) {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'prototype' | 'system'
  const [viewMode, setViewMode] = useState("after"); // 'before' | 'after'
  
  // Interactive prototype states for HelpFarm
  const [selectedCrop, setSelectedCrop] = useState("Tomato");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [audioLang, setAudioLang] = useState("Telugu");

  // Interactive prototype states for EatSure
  const [eatsureCart, setEatsureCart] = useState([
    { brand: "Behrouz Biryani", item: "Dum Gosht Biryani", price: "₹389" },
    { brand: "Oven Story Pizza", item: "Middle Eastern Supreme", price: "₹425" },
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setScanResult(null);
      setIsScanning(false);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !caseStudy) return null;

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanResult(null);
    cinematicAudio.playTactileClick(1100);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        disease: selectedCrop === "Tomato" ? "Early Blight (Alternaria solani)" : "Bacterial Leaf Blight",
        confidence: "96.4%",
        severity: "Moderate (Stage 2)",
        treatment: "Spray Mancozeb 75% WP @ 2g/litre or Neem Oil extract 5ml/litre.",
        audioNarration: `యాప్‌లో ధృవీకరించబడింది: ${selectedCrop} పంటలో ప్రారంభ ఆకు తెగులు గుర్తించబడింది. సలహా: లీటరు నీటికి 2 గ్రాముల మ్యాంకోజెబ్ కలపండి.`,
      });
      cinematicAudio.playThemeChime(880);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-2xl overflow-y-auto cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative w-full max-w-4xl rounded-[32px] sm:rounded-[38px] bg-[#0c0d14] border-2 border-[#f97316]/50 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_35px_rgba(249,115,22,0.15)] text-white overflow-hidden max-h-[92vh] flex flex-col cursor-default"
        >
          {/* Subtle Drafting Grid Background */}
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* Top Modal Header */}
          <div className="px-5 sm:px-7 py-3.5 sm:py-4 bg-[#12141e] border-b border-white/10 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#dcfce7] text-[#14532d] border border-[#86efac] font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm">
                {caseStudy.badge || "CASE STUDY"}
              </span>
              <span className="font-['Playfair_Display'] italic text-slate-300 text-xs sm:text-sm">
                Manish Nooli Design Archive
              </span>
            </div>

            <div className="flex items-center gap-2">
              {caseStudy.mediumUrl && (
                <a
                  href={caseStudy.mediumUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden xs:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold border border-white/20 transition-all cursor-pointer"
                >
                  <span>MEDIUM ARTICLE</span>
                  <span>↗</span>
                </a>
              )}
              <button
                onClick={() => {
                  cinematicAudio.playTactileClick(600);
                  onClose();
                }}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm cursor-pointer transition-all"
                title="Close modal [ESC]"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1 font-sans relative z-10">
            
            {/* Title, Tagline & Direct Medium Link Callout */}
            <div className="space-y-3">
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-5xl font-['Anton',sans-serif] uppercase tracking-wider text-white leading-tight">
                  {caseStudy.title}
                </h2>
                <div className="-mt-1 sm:-mt-2">
                  <span className="font-['Playfair_Display'] italic font-normal text-rose-400 text-lg sm:text-2xl">
                    Impact Architecture &amp; User Research
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                {caseStudy.tagline || caseStudy.desc}
              </p>

              {caseStudy.mediumUrl && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0c0d14] to-black border-2 border-emerald-500/30 flex flex-wrap items-center justify-between gap-3 font-mono text-xs shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200">
                      Original Full Publication featured on <strong className="text-white">Medium Bootcamp</strong> by <strong className="text-emerald-400">Nooli Manish</strong>
                    </span>
                  </div>
                  <a
                    href={caseStudy.mediumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-black hover:bg-neutral-900 text-white font-mono text-xs font-bold border-2 border-white/20 hover:border-emerald-400 flex items-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>READ FULL STORY</span>
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>

            {/* Navigation Tabs (Warm Pastel Sticker Styling) */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 font-mono text-xs">
              {[
                { id: "overview", label: "01 // UX RESEARCH & ARCHITECTURE", theme: "yellow" },
                { id: "prototype", label: "02 // INTERACTIVE PROTOTYPE SANDBOX", theme: "mint" },
                { id: "system", label: "03 // FIGMA DESIGN SYSTEM & TOKENS", theme: "coral" },
              ].map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      cinematicAudio.playTactileClick(900);
                    }}
                    className={`px-4 py-2 rounded-xl font-bold tracking-wider transition-all cursor-pointer border-2 ${
                      isSelected
                        ? "bg-[#fef9c3] text-[#713f12] border-[#fde047] shadow-md scale-105"
                        : "bg-white/5 text-slate-400 hover:text-white border-white/10 hover:border-white/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* TAB 1: UX RESEARCH & ARCHITECTURE */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* 3 Real Impact Metrics (Warm Stamps) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-[#dcfce7]/10 border border-[#86efac]/40 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase">FIELD SUCCESS RATE</span>
                    <div className="text-xl sm:text-2xl font-['Anton',sans-serif] tracking-wider text-emerald-300">{caseStudy.metric1 || "92% Completion"}</div>
                    <div className="text-xs text-slate-300 font-sans font-light">Usability tested with end users</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fef9c3]/10 border border-[#fde047]/40 space-y-1">
                    <span className="text-[10px] font-mono text-amber-300 font-bold uppercase">SPEED / LATENCY</span>
                    <div className="text-xl sm:text-2xl font-['Anton',sans-serif] tracking-wider text-amber-300">
                      {caseStudy.metric2 || "-98% Diagnosis Time"}
                    </div>
                    <div className="text-xs text-slate-300 font-sans font-light">Measured benchmark improvement</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fed7aa]/10 border border-[#fdba74]/40 space-y-1">
                    <span className="text-[10px] font-mono text-orange-300 font-bold uppercase">USER RATING</span>
                    <div className="text-xl sm:text-2xl font-['Anton',sans-serif] tracking-wider text-orange-300">{caseStudy.metric3 || "4.9★ Satisfaction"}</div>
                    <div className="text-xs text-slate-300 font-sans font-light">Post-design validation score</div>
                  </div>
                </div>

                {/* Problem vs Solution Side-by-Side (Warm Editorial Sticky Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                  <div className="p-5 rounded-2xl bg-[#fef9c3]/[0.08] border border-[#fde047]/30 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                      <span>⚠️</span>
                      <span>CRITICAL USER PAIN POINT</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                      {caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#dcfce7]/[0.08] border border-[#86efac]/30 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                      <span>✨</span>
                      <span>DESIGN BREAKTHROUGH</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Visual Architecture Comparison */}
                <div className="p-5 rounded-2xl bg-black/70 border-2 border-white/10 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      VISUAL ARCHITECTURE COMPARISON:
                    </span>
                    <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                      <button
                        onClick={() => setViewMode("before")}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          viewMode === "before" ? "bg-red-500/30 text-red-300 font-bold" : "text-slate-400"
                        }`}
                      >
                        LEGACY (BEFORE)
                      </button>
                      <button
                        onClick={() => setViewMode("after")}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          viewMode === "after" ? "bg-emerald-500/30 text-emerald-300 font-bold" : "text-slate-400"
                        }`}
                      >
                        MANISH REDESIGN (AFTER)
                      </button>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-white/10 bg-[#060810] space-y-3">
                    {viewMode === "before" ? (
                      <div className="space-y-2 text-red-300 font-mono text-xs sm:text-sm">
                        <div className="font-bold text-sm sm:text-base">[LEGACY ARCHITECTURE]: High cognitive friction &amp; drop-off</div>
                        <p className="text-slate-300 font-sans text-xs leading-relaxed font-light">
                          {caseStudy.id === "helpfarm"
                            ? "Farmers had to travel to agricultural centers or navigate complex chemical naming tables in English without offline caching or audio guidance."
                            : caseStudy.id === "eatsure-redesign"
                            ? "Confusing multi-restaurant navigation caused 58% cart abandonment; users couldn't see restaurant ratings, origin clouds, or combined prep timers."
                            : "Dense forms, unaligned labels, 14 mandatory fields on a single page with zero progressive feedback."}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-emerald-300 font-mono text-xs sm:text-sm">
                        <div className="font-bold text-sm sm:text-base">[MANISH REDESIGN]: Human-centered, accessible, conversion-driven</div>
                        <p className="text-slate-200 font-sans text-xs leading-relaxed font-light">
                          {caseStudy.id === "helpfarm"
                            ? "1-tap camera viewfinder with auto-crop, local vernacular voice guides (Telugu/Hindi), offline-first diagnosis, and 92% field task success."
                            : caseStudy.id === "eatsure-redesign"
                            ? "Digital food court browsing, craving-first omni-search, live culinary hygiene telemetry, and unified multi-brand cart with 0 duplicate fees."
                            : "3 intuitive steps, progressive disclosure, tactile micro-interactions, 100% WCAG AAA accessible, 4.9★ satisfaction."}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: INTERACTIVE PROTOTYPE SANDBOX */}
            {activeTab === "prototype" && (
              <div className="space-y-6">
                {caseStudy.id === "helpfarm" ? (
                  /* HELPFARM SPECIFIC INTERACTIVE SCANNER */
                  <div className="p-6 rounded-2xl bg-black/80 border-2 border-emerald-500/40 space-y-6">
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-white/10 pb-3">
                      <div>
                        <h3 className="font-['Anton',sans-serif] tracking-wider text-xl sm:text-2xl text-emerald-300 uppercase">
                          HelpFarm Crop Leaf Scanner Simulator
                        </h3>
                        <p className="font-sans text-xs text-slate-300 font-light">
                          Test the computer vision AI diagnosis + vernacular audio assistance
                        </p>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-slate-400">VOICE:</span>
                        <select
                          value={audioLang}
                          onChange={(e) => setAudioLang(e.target.value)}
                          className="bg-black border border-white/20 rounded-lg px-2.5 py-1 text-white text-xs cursor-pointer outline-none"
                        >
                          <option value="Telugu">Telugu (తెలుగు)</option>
                          <option value="Hindi">Hindi (हिंदी)</option>
                          <option value="English">English</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 1: Select Crop */}
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-slate-400 uppercase">1. SELECT CROP TO DIAGNOSE:</span>
                      <div className="flex flex-wrap gap-2">
                        {["Tomato", "Paddy / Rice", "Cotton", "Chili"].map((crop) => (
                          <button
                            key={crop}
                            onClick={() => {
                              setSelectedCrop(crop);
                              setScanResult(null);
                            }}
                            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs cursor-pointer transition-all border ${
                              selectedCrop === crop
                                ? "bg-emerald-400 text-black font-bold border-emerald-400"
                                : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                            }`}
                          >
                            {crop}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Camera Viewfinder Mockup */}
                    <div className="relative w-full max-w-md mx-auto aspect-video rounded-2xl bg-gradient-to-b from-slate-900 to-black border-2 border-dashed border-emerald-400/60 flex flex-col items-center justify-center p-4 overflow-hidden">
                      {isScanning ? (
                        <div className="space-y-3 text-center">
                          <div className="w-12 h-12 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin mx-auto" />
                          <div className="font-mono text-xs text-emerald-400 tracking-wider">
                            PROCESSING LEAF COMPUTER VISION MODEL...
                          </div>
                        </div>
                      ) : scanResult ? (
                        <div className="space-y-2 text-center w-full">
                          <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-400 text-black font-mono font-bold text-[10px]">
                            {scanResult.confidence} CONFIDENCE
                          </div>
                          <div className="font-sans font-bold text-base sm:text-lg text-emerald-300">
                            {scanResult.disease}
                          </div>
                          <div className="font-sans text-xs text-slate-300 bg-black/60 p-2.5 rounded-xl border border-white/10 text-left">
                            <strong>Rx Treatment:</strong> {scanResult.treatment}
                          </div>
                          <div className="font-sans text-xs text-amber-300 bg-amber-950/30 p-2.5 rounded-xl border border-amber-500/30 text-left flex items-start gap-2">
                            <span>🔊</span>
                            <span>{scanResult.audioNarration}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-3">
                          <div className="text-4xl">🍃</div>
                          <p className="font-sans text-xs text-slate-300 font-light">
                            Ready to photograph {selectedCrop} foliage
                          </p>
                          <button
                            onClick={handleSimulateScan}
                            className="px-6 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer transition-all active:scale-95 flex items-center gap-2 mx-auto"
                          >
                            <span>📸 TAKE PICTURE (SCAN)</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : caseStudy.id === "eatsure-redesign" ? (
                  /* EATSURE SPECIFIC MULTI-RESTAURANT SINGLE-CART SIMULATOR */
                  <div className="p-6 rounded-2xl bg-black/80 border-2 border-amber-500/40 space-y-6">
                    <div>
                      <h3 className="font-['Anton',sans-serif] tracking-wider text-xl sm:text-2xl text-amber-300 uppercase">
                        EatSure Multi-Restaurant Single Cart Simulator
                      </h3>
                      <p className="font-sans text-xs text-slate-300 font-light">
                        Experience ordering from 2 distinct restaurants in 1 order with zero duplicate delivery fee
                      </p>
                    </div>

                    {/* Food Court Multi-Brand Storefront */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-sans font-bold text-sm text-amber-300">BEHROUZ BIRYANI</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/40">4.6★ (12k+)</span>
                        </div>
                        <p className="text-xs text-slate-400">Royal Dum Gosht Biryani • 35 mins prep</p>
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-bold text-white text-sm">₹389</span>
                          <span className="text-emerald-400 text-xs font-mono font-bold">✓ ADDED TO CART</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-sans font-bold text-sm text-cyan-300">OVEN STORY PIZZA</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/40">4.5★ (8k+)</span>
                        </div>
                        <p className="text-xs text-slate-400">Middle Eastern Supreme Cheese Pizza</p>
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-bold text-white text-sm">₹425</span>
                          <span className="text-emerald-400 text-xs font-mono font-bold">✓ ADDED TO CART</span>
                        </div>
                      </div>
                    </div>

                    {/* Unified Multi-Brand Cart Drawer */}
                    <div className="p-5 rounded-2xl bg-[#090b14] border border-amber-400/30 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-white font-bold text-sm">
                        <span>UNIFIED SINGLE-CART DRAWER (2 RESTAURANTS)</span>
                        <span className="text-emerald-400 font-bold">DELIVERY: FREE</span>
                      </div>
                      <div className="space-y-1 text-slate-300">
                        <div className="flex justify-between">
                          <span>1x Behrouz Dum Gosht Biryani</span>
                          <span>₹389</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1x Oven Story Supreme Pizza</span>
                          <span>₹425</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm text-white">
                        <span>TOTAL CHECKOUT:</span>
                        <span className="text-amber-400">₹814</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Micro-Interaction Prototype Sandbox */
                  <div className="p-8 rounded-2xl bg-black/70 border border-white/10 flex flex-col items-center justify-center space-y-6 min-h-[240px]">
                    <div className="text-center space-y-1">
                      <h3 className="font-['Anton',sans-serif] tracking-wider text-xl text-white uppercase">Tactile Spring Physics Test Bench</h3>
                      <p className="text-xs text-slate-300 font-sans font-light">
                        Test interactive micro-delight &amp; haptic states
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => cinematicAudio.playTactileClick(1100)}
                      className="px-8 py-3.5 rounded-xl font-mono font-bold text-sm uppercase tracking-wider text-white bg-black border-2 border-white/30 cursor-pointer shadow-lg transition-all"
                    >
                      TEST INTERACTIVE COMPONENT
                    </motion.button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: FIGMA DESIGN SYSTEM & TOKENS */}
            {activeTab === "system" && (
              <div className="space-y-6 font-mono">
                <div>
                  <h3 className="font-['Anton',sans-serif] tracking-wider text-2xl text-white uppercase">Figma Token Architecture &amp; Design Specs</h3>
                  <p className="text-xs text-slate-300 font-sans font-light mt-1">Modular components built with Figma auto-layout &amp; semantic design tokens</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400">VARIANTS</span>
                    <div className="font-['Anton',sans-serif] text-base text-amber-300">120+ Components</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400">TOKENS</span>
                    <div className="font-['Anton',sans-serif] text-base text-cyan-300">48 Semantic Tokens</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400">AUTO-LAYOUT</span>
                    <div className="font-['Anton',sans-serif] text-base text-emerald-300">100% Fluid Grid</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400">ACCESSIBILITY</span>
                    <div className="font-['Anton',sans-serif] text-base text-rose-300">WCAG 2.1 AAA</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                  <div className="text-rose-400 font-mono font-bold text-sm uppercase">
                    PRODUCTION SYSTEM HIGHLIGHTS:
                  </div>
                  <div>• <strong>Color Elevation:</strong> Dynamic surface tiers using 8% opacity staircases over `#050608`.</div>
                  <div>• <strong>Vernacular Typography:</strong> Noto Sans multilingual font sets supporting Telugu, Hindi, Devanagari &amp; Latin.</div>
                  <div>• <strong>Component Resilience:</strong> Zero layout shift (0 CLS) across all mobile device screen ratios.</div>
                </div>
              </div>
            )}

            {/* Bottom Modal Action Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                {caseStudy.mediumUrl && (
                  <a
                    href={caseStudy.mediumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold flex items-center gap-2 cursor-pointer shadow-md border-2 border-white/20 hover:border-emerald-400 transition-all active:scale-95"
                  >
                    <span>READ FULL ARTICLE ON MEDIUM</span>
                    <span>↗</span>
                  </a>
                )}
                <a
                  href="https://www.behance.net/nmanish"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-2 cursor-pointer"
                >
                  <span>BEHANCE PORTFOLIO ↗</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
