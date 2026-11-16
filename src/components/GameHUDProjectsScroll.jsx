import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const REAL_PORTFOLIO_PROJECTS = [
  {
    id: "helpfarm",
    tag: "HELPFARM // AI AGRI-TECH UX",
    badge: "MEDIUM PUBLISHED // FLAGSHIP #01",
    title: "HelpFarm — AI Crop Disease Scanner & Multilingual Voice Guide",
    role: "Lead Product Designer • B.Tech CSE Machine Learning to UX",
    tagline: "Empowering rural Indian farmers and gardeners to diagnose leaf pathogens in 12s with local language audio assistance",
    desc: "A transformative mobile application designed for farmers and home gardeners across India. Integrates computer vision leaf diagnosis with vernacular voice navigation (Telugu, Hindi, Kannada) and offline-first caching for remote agricultural fields with 0 connectivity.",
    problem: "Farmers in rural regions lose 30-40% of seasonal harvest yields due to delayed disease identification (agricultural extension officers take 4-7 days to visit remote villages). Existing agricultural tools feature dense chemical jargon that alienates low-literacy growers.",
    solution: "Engineered a high-contrast 1-tap camera viewfinder, instant offline AI pathogen diagnosis, local vernacular voice guides, local chemical dosage calculators, and peer-to-peer agronomist consultation channels.",
    metric1: "92% Field Usability Success",
    metric2: "12s vs 4 Days Diagnosis (-98%)",
    metric3: "4.9★ Farmer Satisfaction",
    category: "mobile",
    quest: "RURAL AGRI-TECH ACCESSIBILITY",
    goal: "ELIMINATE DIGITAL ILLITERACY FRICTION IN PLANT DISEASE DIAGNOSIS VIA COMPUTER VISION & VERNACULAR AUDIO.",
    rewards: ["🏆 MEDIUM BOOTCAMP FEATURED", "⚡ -98% DIAGNOSIS TIME", "🌾 92% FIELD SUCCESS"],
    specs: "Figma • Computer Vision ML • Offline-First PWA • Vernacular Audio",
    accentColor: "#10B981",
    cardGradient: "from-[#082014] via-[#04120a] to-[#020a06]",
    previewIcon: "🌾",
    published: "PUBLISHED ON MEDIUM BOOTCAMP",
    mediumUrl: "https://medium.com/design-bootcamp/ux-case-study-designing-helpfarm-an-app-empowering-farmers-gardeners-to-combat-crop-diseases-c5bc98f767c0",
  },
  {
    id: "eatsure-redesign",
    tag: "EATSURE // MULTI-RESTAURANT COMMERCE",
    badge: "MEDIUM PUBLISHED // FLAGSHIP #02",
    title: "EatSure Redesign — Multi-Brand Single-Cart Food App",
    role: "Author & Lead UX Designer • FigJam, Figma Design System",
    tagline: "Revolutionizing cloud kitchen dining by bundling Behrouz Biryani, Faasos & Oven Story in one delivery checkout",
    desc: "An architectural UX redesign of Rebel Foods' EatSure multi-restaurant delivery platform. Solves multi-brand cart friction with a digital food-court paradigm, brand-first omni-search, live culinary hygiene telemetry, and unified checkout.",
    problem: "Original app suffered from 58% cart abandonment and visual clutter. 68% of food app users prefer searching by restaurant brand rather than dish name, but brand background, ratings, and combined prep times were fragmented.",
    solution: "Architected an intuitive digital food-court browsing flow, craving-first omni-search, live culinary hygiene telemetry (temperature logs & kitchen cams), and a unified single-cart drawer with zero duplicate fees.",
    metric1: "+34% Cross-Brand Basket Size",
    metric2: "-48% Cart Abandonment",
    metric3: "82% Faster Re-Orders",
    category: "mobile",
    quest: "MULTI-RESTAURANT SINGLE-CART UX",
    goal: "REDUCE COGNITIVE OVERLOAD & CHECKOUT ABANDONMENT WHEN ORDERING FROM MULTIPLE RESTAURANT BRANDS.",
    rewards: ["🏆 MEDIUM BOOTCAMP FEATURED", "⚡ +34% BASKET SIZE", "🍔 -48% ABANDONMENT"],
    specs: "Figma • FigJam • User Interviews • Micro-Interactions",
    accentColor: "#F59E0B",
    cardGradient: "from-[#221206] via-[#140a03] to-[#0a0501]",
    previewIcon: "🍕",
    published: "PUBLISHED ON MEDIUM BOOTCAMP",
    mediumUrl: "https://medium.com/design-bootcamp/eatsure-redesign-ux-case-study-of-an-online-food-delivery-app-deliver-from-multiple-restaurants-35e842c8c51e",
  },
  {
    id: "aura-music",
    tag: "AURA // SENSORY MUSIC STREAMING",
    badge: "MOBILE UX & AUDIO ENGINE",
    title: "Aura Spatial Music Streaming App",
    role: "Lead Product Designer & UX Engineer",
    tagline: "Gesture-driven vinyl disc scrubbing with 432Hz harmonic Web Audio synthesis",
    desc: "Re-architecting mobile music streaming for digital natives. Features tactile vinyl scrubbing, fluid glassmorphism, dynamic mood generation, and real-time audio waveform feedback with zero layout thrash.",
    problem: "Streaming users reported cognitive friction during playlist discovery and zero tactile feedback when scrubbing tracks.",
    solution: "Engineered a glassmorphic dark UI with 60 FPS gesture-driven vinyl scrubbing, live waveform feedback, and personalized mood generation.",
    metric1: "+46% Session Duration",
    metric2: "4.9★ App Store Rating",
    metric3: "0 Dropped Frames",
    category: "mobile",
    quest: "AUDIO STREAMING REDESIGN",
    goal: "BUILD FLUID GESTURAL SCRUBBING & REAL-TIME AUDIO WAVEFORM FEEDBACK WITHOUT CPU LATENCY.",
    rewards: ["🏆 +46% RETENTION", "⚡ 4.9★ RATING", "🎵 432Hz SYNTH"],
    specs: "Figma 5.0 • Web Audio API • 60 FPS Spring Scrubber",
    accentColor: "#10B981",
    cardGradient: "from-[#081812] via-[#05100c] to-[#020806]",
    previewIcon: "🎧",
    published: "PUBLISHED 2 WEEKS AGO",
  },
  {
    id: "nexus-profile",
    tag: "NEXUS // DEVELOPER IDENTITY",
    badge: "SOCIAL TELEMETRY",
    title: "Nexus Developer Profile & Social Telemetry",
    role: "UI/UX Architect & Design Systems Lead",
    tagline: "Transforming dense engineering stats into progressive modular cards with dark elevation tokens",
    desc: "A developer identity and community discovery platform. Deconstructs complex GitHub statistics, contribution graphs, and repository badges into modular, progressive disclosure achievement trays.",
    problem: "Developer portfolios suffered from 72% bounce rate when GitHub metrics and project repos were displayed as unstructured flat tables.",
    solution: "Deconstructed telemetry into modular interactive achievement cards with live activity heatmaps, dark elevation tokens, and customizable social widgets.",
    metric1: "3.4x Faster Onboarding",
    metric2: "88% Daily Active Users",
    metric3: "12,000+ Active Profiles",
    category: "mobile",
    quest: "TELEMETRY HIERARCHY",
    goal: "ARCHITECT MODULAR CARD TOKENS THAT SCALE TO 12,000+ DEVELOPER PROFILES WITH ZERO LAYOUT SHIFT.",
    rewards: ["🏆 3.4X ONBOARDING", "⚡ 88% DAU", "💎 42 TOKENS"],
    specs: "Auto-Layout 5.0 • Semantic CSS Tokens • 0ms Style Recalc",
    accentColor: "#34D399",
    cardGradient: "from-[#081812] via-[#05100c] to-[#020806]",
    previewIcon: "👤",
    published: "PUBLISHED 1 MONTH AGO",
  },
  {
    id: "pulse-notifications",
    tag: "PULSE // ALERT ARCHITECTURE",
    badge: "DESIGN SYSTEMS",
    title: "Pulse Enterprise Notification & Flash System",
    role: "Design System Engineer • Figma, Tokens Studio",
    tagline: "Non-intrusive bottom-sheet toasts with 100% WAI-ARIA live region semantics and spring physics",
    desc: "An enterprise design system component library dedicated to toast messages, banner alerts, and flash states. Eliminates banner blindness and guarantees 100% accessible screen-reader compliance.",
    problem: "Intrusive modal dialogs interrupted active checkout flows and failed accessibility audits across enterprise banking squads.",
    solution: "Designed a lightweight notification matrix with priority queuing, non-blocking toast stacks, tactile spring dismissals, and 100% screen-reader compliance.",
    metric1: "-73% Dismissal Friction",
    metric2: "100% WCAG AAA Compliant",
    metric3: "0 Layout Jitter",
    category: "system",
    quest: "ACCESSIBLE ALERT PIPELINE",
    goal: "ELIMINATE NOTIFICATION BLINDNESS WITH TACTILE DAMPED EULER SPRING PHYSICS & WCAG AUDIT.",
    rewards: ["🏆 100% WCAG AAA", "⚡ -73% FRICTION", "🚀 0ms RECALC"],
    specs: "Tokens Studio • WAI-ARIA Live Regions • Priority Queue",
    accentColor: "#10B981",
    cardGradient: "from-[#081812] via-[#05100c] to-[#020806]",
    previewIcon: "⚡",
    published: "PUBLISHED 1 MONTH AGO",
  },
  {
    id: "rideoff-signup",
    tag: "RIDEOFF // MOBILITY UX",
    badge: "FINTECH ONBOARDING",
    title: "RideOff Off-Road Mobility Vehicle Signup",
    role: "Senior Product Designer • Figma, Maze",
    tagline: "Cutting 14 mandatory registration fields into a 3-step progressive tray with biometric auth",
    desc: "Onboarding and authentication redesign for an off-road vehicle rental platform. Replaces tedious 14-field multi-page registration with a progressive 3-step tray, biometric FaceID, and live OCR verification.",
    problem: "62% user drop-off during off-road vehicle rental identity verification due to overwhelming single-page form clutter.",
    solution: "Re-architected signup into a 3-step progressive disclosure tray with real-time biometric FaceID validation and contextual inline error prevention.",
    metric1: "+38% Conversion Lift",
    metric2: "54s Completion Time (-78%)",
    metric3: "99.4% First-Pass Pass",
    category: "mobile",
    quest: "PROGRESSIVE DISCLOSURE FLOW",
    goal: "CUT CHECKOUT FRICTION BY 78% WHILE MAINTAINING STRICT KYC LEGAL COMPLIANCE.",
    rewards: ["🏆 +38% CONVERSION", "⚡ 54s SPEED", "🔒 100% KYC"],
    specs: "Hick's Law • Biometric Auth • Live OCR Scanner",
    accentColor: "#34D399",
    cardGradient: "from-[#081812] via-[#05100c] to-[#020806]",
    previewIcon: "🚙",
    published: "PUBLISHED 2 MONTHS AGO",
  },
  {
    id: "stackburger-web",
    tag: "STACKBURGER // E-COMMERCE",
    badge: "SPATIAL COMMERCE",
    title: "StackBurger Gourmet Customizer & Web App",
    role: "Product Designer & Front-End Engineer",
    tagline: "Interactive 3D ingredient layer stacking with real-time macro calorie forecasting and 1-tap checkout",
    desc: "Desktop and mobile web app for artisan gourmet burger delivery. Features an interactive spatial customizer where users drag and stack ingredients while nutritional macros and pricing update in real time.",
    problem: "Static food delivery menus caused 44% cart abandonment and frequent order errors due to confusing modifier checkboxes.",
    solution: "Built an interactive visual ingredient customizer that updates order totals and nutritional macros in real-time, backed by a persistent 1-tap checkout drawer.",
    metric1: "+28% Average Order Value",
    metric2: "3.2x Faster Re-Orders",
    metric3: "96% User Delight Rating",
    category: "web",
    quest: "SPATIAL ORDER CUSTOMIZER",
    goal: "INCREASE AVERAGE BASKET SIZE VIA INTERACTIVE LAYER STACKING & REAL-TIME PRICING ENGINE.",
    rewards: ["🏆 +28% AOV", "⚡ 3.2X RE-ORDERS", "🍔 96% DELIGHT"],
    specs: "React 19 • Spatial Drag & Drop • Real-Time Macro Engine",
    accentColor: "#fb923c",
    cardGradient: "from-[#221008] via-[#160a05] to-[#0b0502]",
    previewIcon: "🍔",
    published: "PUBLISHED 3 MONTHS AGO",
  },
  {
    id: "celestial-toggle",
    tag: "CELESTIAL // MICRO-INTERACTIONS",
    badge: "PHYSICS ENGINE",
    title: "Celestial Day-Night Micro-Interaction Toggle",
    role: "Interaction Designer & Physics Engineer",
    tagline: "Fluid damped Euler spring dynamics with SVG morphing sun/moon celestial bodies",
    desc: "A tactile micro-interaction component designed to replace sterile binary checkboxes. Uses physical mass, damping, and tension equations on GPU composite layers for organic tactile switches.",
    problem: "Generic binary toggles feel lifeless and lack sensory confirmation feedback during theme switching.",
    solution: "Crafted an organic spring-driven switch featuring morphing celestial SVG paths, stars parallax, and tactile 432Hz acoustic feedback.",
    metric1: "60.0 FPS Locked",
    metric2: "0ms Style Recalculation",
    metric3: "10,000+ Cycles Tested",
    category: "micro",
    quest: "TACTILE GAME-FEEL",
    goal: "ELIMINATE DULL SWITCH STATES BY IMPLEMENTING DAMPED EULER SPRING PHYSICS ON GPU LAYERS.",
    rewards: ["🏆 60.0 FPS LOCKED", "⚡ 0ms RECALC", "✨ FEATURED MOBBIN"],
    specs: "Damped Euler Springs • SVG Path Morphing • 432Hz Feedback",
    accentColor: "#a855f7",
    cardGradient: "from-[#180a26] via-[#100619] to-[#07030c]",
    previewIcon: "🌗",
    published: "PUBLISHED 3 MONTHS AGO",
  },
];

const CATEGORIES = [
  { id: "all", label: "ALL CREATIONS (8)" },
  { id: "flagship", label: "⭐ FLAGSHIP MEDIUM STUDIES (2)" },
  { id: "mobile", label: "MOBILE UX APPS (4)" },
  { id: "web", label: "WEB ARCHITECTURE (1)" },
  { id: "system", label: "DESIGN SYSTEMS (1)" },
  { id: "micro", label: "MICRO-INTERACTIONS (1)" },
];

export default function GameHUDProjectsScroll({ onOpenCaseStudy, currentTheme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const primaryColor = currentTheme?.primary || "var(--theme-primary, #F84A4A)";
  const secondaryColor = currentTheme?.secondary || "var(--theme-secondary, #38BDF8)";
  const glowColor = currentTheme?.glow || "rgba(248,74,74,0.35)";

  const filteredProjects = REAL_PORTFOLIO_PROJECTS.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "flagship") return Boolean(p.mediumUrl);
    return p.category === selectedFilter;
  });

  const safeIndex = currentIndex % (filteredProjects.length || 1);
  const activeProject = filteredProjects[safeIndex] || REAL_PORTFOLIO_PROJECTS[0];

  const handleNext = () => {
    cinematicAudio.playTactileClick(1050);
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    cinematicAudio.playTactileClick(950);
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Keyboard navigation for coverflow (left/right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredProjects.length]);

  return (
    <section id="projects-hud" className="relative min-h-screen w-full bg-[#050608] py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10 select-none">
      
      {/* Target Anchor for Flagship Studies Navbar link */}
      <div id="flagship-studies" className="absolute -top-12 left-0" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F84A4A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        
        {/* TOP STATUS BAR: Level, Coin Counter & System HUD */}
        <div className="p-3 sm:p-4 rounded-2xl bg-[#090b14] border border-white/10 flex items-center justify-between font-shareTech text-xs tracking-wider">
          {/* Left Level Badge */}
          <div className="flex items-center gap-3">
            <span className="font-orbitron font-extrabold text-sm sm:text-base text-emerald-400">
              48 LEVEL
            </span>
            <span className="hidden xs:inline-block text-white/20">|</span>
            <span className="hidden xs:inline-block text-[#38BDF8] font-bold">
              + 1,425 COINS AWARDED
            </span>
          </div>

          {/* Center Title Tag */}
          <div className="font-orbitron font-bold tracking-[0.25em] uppercase hidden md:block" style={{ color: primaryColor }}>
            CREATIONS // PORTFOLIO HUD
          </div>

          {/* Right Status Indicators */}
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="hidden sm:inline">THEME: <strong style={{ color: primaryColor }}>{currentTheme?.shortName || "ACTIVE"}</strong></span>
            <span>SERVER: <strong className="text-white">ASIA-SOUTH1</strong></span>
            <span>STATUS: <strong className="text-emerald-400">ONLINE</strong></span>
          </div>
        </div>

        {/* 3-COLUMN MAIN HUD LAYOUT: [LEFT DOSSIER] - [CENTER 3D CAROUSEL] - [RIGHT ACTIVE QUEST] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: Player Profile & Identity Dossier */}
          <div className="lg:col-span-3 space-y-4 font-shareTech text-xs tracking-wider">
            {/* Cyber Profile Portrait Frame */}
            <div
              className="relative p-4 rounded-2xl bg-[#0e111a] border-2 shadow-lg flex flex-col items-center text-center space-y-3"
              style={{
                borderColor: primaryColor,
                boxShadow: `0 0 20px ${glowColor}`,
              }}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-gradient-to-br from-[#2a0e18] via-[#12071a] to-[#0a1428] border border-white/20 flex items-center justify-center text-5xl overflow-hidden shadow-inner">
                <span>👨‍🎨</span>
                <div className="absolute inset-0 bg-[radial-gradient(#F84A4A_1px,transparent_1px)] [background-size:12px_12px] opacity-30 pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-black shadow" />
              </div>

              <div className="space-y-1 w-full">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">PLAYER IDENTITY</div>
                <div className="font-orbitron font-black text-sm sm:text-base text-white tracking-wider">
                  MANISH NOOLI
                </div>
                <div className="text-[11px] font-bold" style={{ color: secondaryColor }}>
                  LEAD PRODUCT ARCHITECT &amp; UX ENGINEER
                </div>
              </div>
            </div>

            {/* Spec Attributes List */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3 text-[11px]">
              <div>
                <span className="text-slate-500 uppercase block text-[9px]">SPECIALIZATION:</span>
                <span className="text-white font-bold">Human-Centered UI/UX &amp; Micro-Interactions</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase block text-[9px]">ACADEMIC FOUNDATION:</span>
                <span className="text-white font-bold">B.Tech Computer Science (CGPA 8.0+)</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase block text-[9px]">FEATURED ON:</span>
                <span className="text-emerald-400 font-bold">Medium Bootcamp Publications</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase block text-[9px]">AVAILABILITY STATUS:</span>
                <span
                  className="inline-block px-2.5 py-0.5 rounded font-orbitron font-bold text-[10px] border shadow-sm"
                  style={{
                    backgroundColor: `${primaryColor}20`,
                    borderColor: primaryColor,
                    color: primaryColor,
                  }}
                >
                  OPEN FOR HIRE ⚡
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 text-slate-400 italic text-[10px] leading-relaxed">
                "Where human cognitive ergonomics, spring dynamics, and production engineering collide."
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: 3D Coverflow Project Cards Scroll (Exact Layout from Attachment 1) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-between space-y-6">
            
            {/* 3D Coverflow Container with Angled Neighboring Cards */}
            <div className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
              
              {/* Previous Slide Button */}
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:left-2 z-30 w-10 h-10 rounded-full bg-black/85 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center text-lg font-bold cursor-pointer transition-all active:scale-95 shadow-xl"
                title="Previous Creation"
              >
                ‹
              </button>

              {/* Angled Left Previous Card Preview */}
              {filteredProjects.length > 1 && (
                <div
                  onClick={handlePrev}
                  className="hidden md:flex absolute -left-6 sm:left-0 z-10 w-[240px] h-[340px] rounded-2xl bg-black/80 border border-white/10 p-4 flex-col justify-between opacity-35 hover:opacity-50 transition-all cursor-pointer transform -rotate-y-[28deg] scale-90 blur-[1px] select-none"
                >
                  <span className="text-[10px] font-mono text-slate-500">
                    {filteredProjects[(safeIndex - 1 + filteredProjects.length) % filteredProjects.length]?.tag}
                  </span>
                  <div className="text-4xl text-center my-auto">
                    {filteredProjects[(safeIndex - 1 + filteredProjects.length) % filteredProjects.length]?.previewIcon}
                  </div>
                  <span className="text-xs font-titan text-slate-400 truncate">
                    {filteredProjects[(safeIndex - 1 + filteredProjects.length) % filteredProjects.length]?.title}
                  </span>
                </div>
              )}

              {/* ACTIVE CENTER 3D PROJECT CARD */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative z-20 w-full max-w-[340px] sm:max-w-[420px] h-[400px] sm:h-[450px] rounded-3xl bg-gradient-to-br ${activeProject.cardGradient} border-2 shadow-2xl p-6 flex flex-col justify-between overflow-hidden select-none`}
                  style={{
                    borderColor: primaryColor,
                    boxShadow: `0 15px 45px rgba(0,0,0,0.95), 0 0 35px ${glowColor}`,
                  }}
                >
                  {/* Top Card Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-black/85 border border-white/10 font-bold uppercase tracking-wider text-white" style={{ color: secondaryColor }}>
                      {activeProject.badge}
                    </span>
                    <span className="text-slate-400 text-[10px] tracking-wider uppercase">
                      {activeProject.published}
                    </span>
                  </div>

                  {/* Center Visual Mockup & Hero Graphic */}
                  <div className="my-auto text-center space-y-3 py-3">
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-black/70 border-2 flex items-center justify-center text-5xl sm:text-6xl shadow-lg"
                      style={{
                        borderColor: primaryColor,
                        boxShadow: `0 0 25px ${glowColor}`,
                      }}
                    >
                      {activeProject.previewIcon}
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-titan text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight">
                        {activeProject.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider line-clamp-1" style={{ color: secondaryColor }}>
                        "{activeProject.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Strip: Specs & Launch Button */}
                  <div className="pt-3 border-t-2 border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-300 font-bold">
                      {activeProject.metric1}
                    </span>

                    <div className="flex items-center gap-2">
                      {activeProject.mediumUrl && (
                        <a
                          href={activeProject.mediumUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-black font-shareTech font-bold text-[10px] uppercase tracking-wider shadow transition-all active:scale-95"
                          title="Read full article on Medium"
                        >
                          MEDIUM ↗
                        </a>
                      )}
                      <button
                        onClick={() => {
                          cinematicAudio.playTactileClick(1100);
                          onOpenCaseStudy?.(activeProject);
                        }}
                        className="px-3.5 py-1.5 rounded-xl font-orbitron font-extrabold text-xs uppercase tracking-wider text-black transition-all shadow-md cursor-pointer active:scale-95 flex items-center gap-1"
                        style={{
                          backgroundColor: primaryColor,
                          boxShadow: `0 0 15px ${glowColor}`,
                        }}
                      >
                        <span>VIEW LIVE</span>
                        <span>[↗]</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Angled Right Next Card Preview */}
              {filteredProjects.length > 1 && (
                <div
                  onClick={handleNext}
                  className="hidden md:flex absolute -right-6 sm:right-0 z-10 w-[240px] h-[340px] rounded-2xl bg-black/80 border border-white/10 p-4 flex-col justify-between opacity-35 hover:opacity-50 transition-all cursor-pointer transform rotate-y-[28deg] scale-90 blur-[1px] select-none"
                >
                  <span className="text-[10px] font-mono text-slate-500">
                    {filteredProjects[(safeIndex + 1) % filteredProjects.length]?.tag}
                  </span>
                  <div className="text-4xl text-center my-auto">
                    {filteredProjects[(safeIndex + 1) % filteredProjects.length]?.previewIcon}
                  </div>
                  <span className="text-xs font-titan text-slate-400 truncate">
                    {filteredProjects[(safeIndex + 1) % filteredProjects.length]?.title}
                  </span>
                </div>
              )}

              {/* Next Slide Button */}
              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-2 z-30 w-10 h-10 rounded-full bg-black/85 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center text-lg font-bold cursor-pointer transition-all active:scale-95 shadow-xl"
                title="Next Creation"
              >
                ›
              </button>
            </div>

            {/* Bottom Meta Bar Under Center Card: Full Project Description */}
            <div className="w-full text-center space-y-2 max-w-xl px-4">
              <div className="font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase" style={{ color: primaryColor }}>
                {activeProject.tag}
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {activeProject.desc}
              </p>
              
              {/* Pagination counter */}
              <div className="font-orbitron text-xs text-slate-500 tracking-widest pt-1">
                {safeIndex + 1} / {filteredProjects.length}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Active Quest HUD & Gamified Rewards */}
          <div className="lg:col-span-3 space-y-4 font-shareTech text-xs tracking-wider">
            {/* Active Quest Panel */}
            <div
              className="p-5 rounded-2xl bg-[#0e111a] border-2 shadow-lg space-y-4"
              style={{
                borderColor: secondaryColor,
                boxShadow: `0 0 20px ${currentTheme?.secondaryGlow || "rgba(56,189,248,0.2)"}`,
              }}
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-orbitron font-bold tracking-wider" style={{ color: primaryColor }}>
                  ACTIVE QUEST
                </span>
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: secondaryColor }} />
              </div>

              <div className="space-y-1">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">QUEST NAME</div>
                <div className="font-orbitron font-bold text-sm text-white uppercase">
                  {activeProject.quest}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">MISSION OBJECTIVE</div>
                <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                  {activeProject.goal}
                </p>
              </div>

              {/* Rewards Badges */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">EARNED REWARDS &amp; IMPACT</div>
                <div className="flex flex-col gap-1.5 pt-1">
                  {activeProject.rewards.map((r, i) => (
                    <div
                      key={i}
                      className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-white font-mono text-[10px] font-bold flex items-center justify-between"
                    >
                      <span>{r}</span>
                      <span className="text-emerald-400">✓ VERIFIED</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inspect Button */}
              <button
                onClick={() => {
                  cinematicAudio.playTactileClick(1100);
                  onOpenCaseStudy?.(activeProject);
                }}
                className="w-full py-2.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider text-black transition-all shadow-md cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: secondaryColor,
                  boxShadow: `0 0 15px ${currentTheme?.secondaryGlow || "rgba(56,189,248,0.4)"}`,
                }}
              >
                <span>OPEN FULL CASE STUDY</span>
                <span>↗</span>
              </button>
            </div>

            {/* Quick Audio / Visual Settings readout */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-[10px] text-slate-400 space-y-1.5">
              <div className="flex justify-between">
                <span>SOUND ENGINE:</span>
                <span className="text-emerald-400 font-bold">TACTILE HAPTIC [✓]</span>
              </div>
              <div className="flex justify-between">
                <span>FRAME RATE:</span>
                <span className="text-[#38BDF8] font-bold">60 FPS COMPOSITED</span>
              </div>
              <div className="flex justify-between">
                <span>DELIVERABLES:</span>
                <span className="font-bold" style={{ color: primaryColor }}>8 REAL PROJECTS</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SUB-NAV TABS: Filter creations by category */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-orbitron text-[10px] sm:text-xs">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedFilter(cat.id);
                  setCurrentIndex(0);
                  cinematicAudio.playTactileClick(900);
                }}
                className={`px-3 sm:px-4 py-1.5 rounded-xl uppercase transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "text-black font-extrabold shadow-md scale-105"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border-white/10"
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: primaryColor,
                        borderColor: primaryColor,
                        boxShadow: `0 0 15px ${glowColor}`,
                      }
                    : {}
                }
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
