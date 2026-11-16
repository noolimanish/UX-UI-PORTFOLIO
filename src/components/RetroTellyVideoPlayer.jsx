import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const TELLY_DISCS = [
  {
    id: "delirium-teaser",
    ch: "CH 01",
    title: "Delirium — Teaser",
    tag: "ORIGINAL SHORT FILM",
    sub: "Directed & Written by Manish Nooli",
    duration: "01:14",
    youtubeId: "7UodCbCwQnk",
    youtubeUrl: "https://www.youtube.com/watch?v=7UodCbCwQnk",
    icon: "🎬",
    accentColor: "#ef4444",
  },
  {
    id: "delirium-promo",
    ch: "CH 02",
    title: "Delirium — Promo",
    tag: "CINEMATIC PROMO",
    sub: "Sound Design & Visual Direction Cut",
    duration: "01:05",
    youtubeId: "LNUqljxvVyE",
    youtubeUrl: "https://www.youtube.com/watch?v=LNUqljxvVyE",
    icon: "🔥",
    accentColor: "#f59e0b",
  },
];

export default function RetroTellyVideoPlayer() {
  // Initial TV screen is EMPTY on load, waiting for user selection
  const [activeDisc, setActiveDisc] = useState(null);
  const [isInserting, setIsInserting] = useState(false);
  const [insertingDisc, setInsertingDisc] = useState(null);
  const [crtStatic, setCrtStatic] = useState(false);
  const [scanlinesActive, setScanlinesActive] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Trigger disc insertion animation into TV DVD slot
  const handleSelectDisc = (disc) => {
    if (activeDisc?.id === disc.id && !isInserting) return;

    try {
      cinematicAudio.playTactileClick(1200);
    } catch {}

    setInsertingDisc(disc);
    setIsInserting(true);

    setTimeout(() => {
      setCrtStatic(true);
      setActiveDisc(disc);
      try {
        cinematicAudio.playBraam();
      } catch {}

      setTimeout(() => {
        setCrtStatic(false);
        setIsInserting(false);
        setInsertingDisc(null);
      }, 450);
    }, 550);
  };

  const handleEject = () => {
    try {
      cinematicAudio.playTactileClick(900);
    } catch {}
    setActiveDisc(null);
  };

  return (
    <section id="telly" className="relative py-20 sm:py-28 px-4 sm:px-8 max-w-5xl mx-auto space-y-10 select-none border-t border-white/10">
      
      {/* SECTION HEADER */}
      <div className="space-y-2 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-400">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>// CREATIVE DIRECTION &amp; SHORT FILMS</span>
        </div>

        <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Directorial Work &amp; <span className="font-serifTitle italic font-normal text-red-400">Teasers</span>
        </h3>

        <p className="font-serifTitle italic text-sm sm:text-base text-slate-300 font-light max-w-lg">
          Select a compact disc below to slide it into the vintage player and broadcast directly on the CRT telly.
        </p>
      </div>

      {/* ========================================================
          THE RETRO CRT VINTAGE TV SCREEN & DVD TRAY (VV-60)
          ======================================================== */}
      <div className="flex flex-col items-center relative">
        
        {/* FLYING DISC ANIMATION OVERLAY */}
        <AnimatePresence>
          {isInserting && insertingDisc && (
            <motion.div
              initial={{ y: 180, scale: 0.9, opacity: 1, rotate: 0 }}
              animate={{
                y: [180, 40, -30],
                scale: [0.9, 0.65, 0.4],
                opacity: [1, 1, 0],
                rotate: [0, 360, 720],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute z-50 pointer-events-none w-28 h-28 rounded-full bg-gradient-to-tr from-neutral-800 via-neutral-600 to-neutral-400 border-4 border-white shadow-[0_0_35px_rgba(255,255,255,0.7)] flex items-center justify-center"
              style={{ bottom: "60px" }}
            >
              <div className="w-10 h-10 rounded-full bg-black/80 border-2 border-emerald-400 flex items-center justify-center text-white text-[10px] font-mono font-bold">
                {insertingDisc.ch}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CRT TV Case (Warm Cream / Retro Plastic Heavy Bezel) */}
        <div className="relative w-full max-w-2xl rounded-[38px] bg-[#d9d5c9] border-4 border-[#b5af9f] shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,255,255,0.06)] p-5 sm:p-7 flex flex-col justify-between text-black">
          
          {/* Top Telly Brand Tag & Antenna / Status LEDs */}
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold text-slate-800 pb-3 border-b border-[#b5af9f]/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span>VV-60 TRINITRON CRT // DIRECTORIAL BROADCAST</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <button
                onClick={() => setScanlinesActive(!scanlinesActive)}
                className="px-2 py-0.5 rounded bg-[#c5c0b1] hover:bg-[#b0aba0] text-[9px] font-mono transition-colors cursor-pointer"
                title="Toggle retro CRT scanlines overlay"
              >
                SCANLINES: {scanlinesActive ? "ON" : "OFF"}
              </button>
              <span className="hidden sm:inline bg-neutral-900 text-emerald-400 px-2 py-0.5 rounded text-[9px]">
                NTSC 60Hz
              </span>
            </div>
          </div>

          {/* CRT Screen Frame */}
          <div className="relative w-full h-[280px] sm:h-[370px] rounded-[28px] bg-black border-4 border-[#222428] shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-between p-3 sm:p-4 text-white font-mono my-2.5">
            
            {/* CRT Curved Scanline Filter */}
            {scanlinesActive && (
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.45)_50%)] bg-[length:100%_4px] pointer-events-none z-30 opacity-75" />
            )}

            {/* CRT Glass Reflection Arc */}
            <div className="absolute -top-16 -left-16 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none z-30" />

            {/* TV Screen Top Channel Overlay */}
            <div className="relative z-40 flex justify-between items-center text-[11px] font-bold text-emerald-400 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${activeDisc ? "bg-emerald-400 animate-ping" : "bg-neutral-600"}`} />
                <span>
                  {activeDisc ? `${activeDisc.ch} // ${activeDisc.title.toUpperCase()}` : "STANDBY // NO DISC"}
                </span>
              </div>
              <span className="text-slate-300 font-mono text-[10px]">
                {activeDisc ? activeDisc.tag : "READY"}
              </span>
            </div>

            {/* TV Screen Center: Welcome Standby Screen OR YouTube Player */}
            <div className="relative z-20 w-full h-full flex items-center justify-center overflow-hidden my-1 rounded-2xl bg-[#080808]">
              {crtStatic ? (
                /* CRT Static Burst upon disc insertion */
                <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 border-3 border-red-500 border-t-transparent rounded-full animate-spin" />
                  <span className="font-mono text-xs text-red-400 tracking-widest uppercase animate-pulse">
                    LOADING DISC TRACK...
                  </span>
                </div>
              ) : activeDisc ? (
                /* Live Embedded YouTube Player */
                <iframe
                  key={activeDisc.youtubeId}
                  src={`https://www.youtube.com/embed/${activeDisc.youtubeId}?autoplay=1&enablejsapi=1&rel=0&playsinline=1${isMuted ? "&mute=1" : ""}`}
                  title={activeDisc.title}
                  className="w-full h-full rounded-xl border border-white/10 shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                /* Initial Screen: Welcome to My Space */
                <div className="flex flex-col items-center justify-center space-y-3 text-center p-6 select-none">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-xl text-emerald-400 animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    📺
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-mono font-bold text-sm sm:text-base text-emerald-400 tracking-widest uppercase">
                      WELCOME TO MY SPACE
                    </h4>
                    <p className="font-sans text-xs text-slate-300 max-w-xs mx-auto font-light leading-relaxed">
                      Standby feed active. Click a disc below to insert and stream on the CRT telly.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>BROADCAST READY</span>
                  </div>
                </div>
              )}
            </div>

            {/* TV Screen Bottom Info Bar */}
            <div className="relative z-40 flex justify-between items-center text-[10px] text-slate-300 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <span className="truncate max-w-[260px] sm:max-w-md text-slate-300">
                {activeDisc ? activeDisc.sub : "Awaiting disc input"}
              </span>
              {activeDisc && (
                <button
                  onClick={handleEject}
                  className="text-red-400 hover:text-red-300 underline font-bold shrink-0 ml-2 cursor-pointer"
                >
                  EJECT ⏏
                </button>
              )}
            </div>
          </div>

          {/* CRT TV Bottom Speaker Grille & Tactile Knobs */}
          <div className="flex justify-between items-center pt-2 px-2">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-1.5 h-6 rounded-full bg-[#8f8876]" />
              ))}
            </div>

            <div className="text-[11px] font-mono font-black tracking-widest text-[#595449]">
              TELLY MASTER • HI-FI
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c0b9a8] to-[#8d8573] border-2 border-[#6d6657] shadow-md flex flex-col items-center justify-center text-[8px] font-bold text-neutral-900 active:scale-95 transition-transform cursor-pointer"
                title="Toggle Mute / Unmute"
              >
                <span>VOL</span>
                <span className="text-[6px] text-red-800 font-mono">{isMuted ? "MUTED" : "HI"}</span>
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================
            DVD / CD PLAYER COMPACT TRAY (Slot Loading Console)
            ======================================================== */}
        <div className="w-full max-w-md h-13 rounded-2xl bg-[#14161f] border-2 border-[#282b3a] shadow-2xl mt-4 flex items-center justify-between px-5 text-white font-mono text-xs relative overflow-hidden">
          <div className="flex items-center gap-2.5">
            <span className={`w-2 h-2 rounded-full ${activeDisc ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
            <div>
              <div className="text-[11px] text-emerald-400 font-bold truncate max-w-[200px] sm:max-w-xs">
                {activeDisc ? `LOADED: ${activeDisc.title}` : "TRAY EMPTY // SELECT DISC"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-300 text-[10px]">
            <span className="bg-neutral-800 px-2 py-0.5 rounded text-[9px] font-bold text-slate-300">
              DVD-ROM
            </span>
          </div>
        </div>

      </div>

      {/* ========================================================
          SMALL HORIZONTAL CARDS: Only Delirium Teaser & Promo
          (Exactly as requested - compact, no big square cards)
          ======================================================== */}
      <div className="space-y-3 pt-2 max-w-xl mx-auto">
        <div className="text-center font-mono text-[10px] text-slate-400 uppercase tracking-widest">
          SELECT A DISC BELOW TO POP INTO CRT TELLY ↴
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TELLY_DISCS.map((disc) => {
            const isSelected = activeDisc?.id === disc.id;
            return (
              <motion.div
                key={disc.id}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectDisc(disc)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 shadow-md select-none relative overflow-hidden group ${
                  isSelected
                    ? "border-emerald-400 bg-neutral-900/90 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                    : "border-white/15 bg-neutral-900/60 hover:border-white/30 hover:bg-neutral-800/70"
                }`}
              >
                {/* Left Disc Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/20 flex items-center justify-center text-lg shrink-0 group-hover:rotate-45 transition-transform">
                    {disc.icon}
                  </div>
                  <div>
                    <h5 className="font-display font-extrabold text-xs sm:text-sm text-white leading-tight">
                      {disc.title}
                    </h5>
                    <p className="font-mono text-[9px] text-slate-400">
                      {disc.ch} • {disc.duration}
                    </p>
                  </div>
                </div>

                {/* Right Action Badge */}
                <span
                  className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                    isSelected
                      ? "bg-emerald-400 text-black border-emerald-400"
                      : "bg-white/5 text-slate-300 border-white/10 group-hover:border-white/20"
                  }`}
                >
                  {isSelected ? "PLAYING ●" : "POP IN ↗"}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
