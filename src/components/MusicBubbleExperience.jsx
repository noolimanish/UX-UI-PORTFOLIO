import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicAudio } from "../utils/CinematicAudio";

export const CASSETTE_TRACKS = [
  {
    id: "killin-em",
    title: "Killin'em",
    artist: "Sushin Shyam ft. Yung Raja",
    album: "Scene Soundtrack",
    labelNo: "01",
    catArtwork: "🐱",
    duration: "02:40",
    audioSrc: "/audio/killin_em.mp3",
    pillTheme: "mint",
  },
  {
    id: "goa-gone-rong",
    title: "Goa Gone Rong",
    artist: "Original Sound Track",
    album: "Scene Master Tape",
    labelNo: "02",
    catArtwork: "🌴",
    duration: "02:15",
    audioSrc: "/audio/goa_gone_rong.mp3",
    pillTheme: "yellow",
  },
  {
    id: "delirium-trailer",
    title: "Delirium Score",
    artist: "Manish Nooli Directorial OST",
    album: "Psychological Thriller",
    labelNo: "03",
    catArtwork: "🎬",
    duration: "01:14",
    audioSrc: "/audio/trailer_music_1.mp3",
    pillTheme: "coral",
  },
  {
    id: "swagger-intro",
    title: "Swagger Intro",
    artist: "Bass Heavy Production",
    album: "Studio Master Cut",
    labelNo: "04",
    catArtwork: "⚡",
    duration: "03:10",
    audioSrc: "/audio/swagger_intro.mp3",
    pillTheme: "lavender",
  },
];

export default function MusicBubbleExperience() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85);

  const audioRef = useRef(null);
  const activeTrack = CASSETTE_TRACKS[currentIdx];
  const totalTracks = CASSETTE_TRACKS.length;

  // Initialize native HTML5 Audio for physical MP3 playback
  useEffect(() => {
    const audio = new Audio(activeTrack.audioSrc);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.pause();
      audioRef.current.src = activeTrack.audioSrc;
      audioRef.current.volume = volume;
      if (wasPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentIdx]);

  const handleTogglePlay = () => {
    try {
      cinematicAudio.playTactileClick(1200);
    } catch {}

    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
          setIsPlaying(true);
        });
      }
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = (targetIndex) => {
    if (targetIndex === currentIdx) {
      handleTogglePlay();
      return;
    }

    try {
      cinematicAudio.playTactileClick(1000);
    } catch {}

    setCurrentIdx(targetIndex);
    if (!isPlaying) {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleNext = () => {
    try {
      cinematicAudio.playTactileClick(1100);
    } catch {}
    setCurrentIdx((prev) => (prev + 1) % totalTracks);
  };

  const handlePrev = () => {
    try {
      cinematicAudio.playTactileClick(1100);
    } catch {}
    setCurrentIdx((prev) => (prev - 1 + totalTracks) % totalTracks);
  };

  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  // Flanking indices calculation
  const prevIdx = (currentIdx - 1 + totalTracks) % totalTracks;
  const nextIdx = (currentIdx + 1) % totalTracks;
  const prevTrack = CASSETTE_TRACKS[prevIdx];
  const nextTrack = CASSETTE_TRACKS[nextIdx];

  return (
    <section
      id="music-experience"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto select-none border-t border-white/10 overflow-hidden"
    >
      {/* SECTION HEADER: Editorial Font Mixing & Pastel Stickers (Hero Matching) */}
      <div className="relative text-center space-y-4 max-w-3xl mx-auto pb-10 sm:pb-14">
        
        {/* Top Pastel Sticker Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 flex-wrap">
          <div className="px-3.5 py-1 rounded-full bg-[#dcfce7] text-[#14532d] border border-[#86efac] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[-2deg]">
            AUDIBLE GROOVE
          </div>
          <span className="font-['Playfair_Display'] italic text-slate-300 text-sm sm:text-base font-normal tracking-wide">
            music that fuels focus
          </span>
          <div className="px-3.5 py-1 rounded-full bg-[#fef9c3] text-[#713f12] border border-[#fde047] shadow-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider rotate-[2deg]">
            33⅓ RPM
          </div>
        </div>

        {/* Masterful Headline with Font Mixing */}
        <div className="space-y-1">
          <h2 className="font-['Anton',sans-serif] text-5xl sm:text-7xl md:text-8xl tracking-wider text-white uppercase leading-none filter drop-shadow">
            VINTAGE CONSOLE
          </h2>
          <div className="-mt-3 sm:-mt-6">
            <span className="font-['Playfair_Display'] italic font-normal text-rose-400 text-2xl sm:text-4xl md:text-5xl tracking-tight filter drop-shadow-md">
              Killin'em &amp; Studio Beats
            </span>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed pt-2">
          Equipped with your custom studio MP3 tracks. Discs slide neatly into the player window when chosen.
        </p>
      </div>

      {/* ========================================================================
          HORIZONTAL VINTAGE PLAYER STAGE
          (Center Console with neatly nested spinning disc + Flanking Discs on sides)
          ======================================================================== */}
      <div className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[400px]">
        
        {/* Soft Ambient Warm Underglow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[340px] rounded-full bg-[#5c131a]/25 blur-[120px] pointer-events-none" />

        {/* ================= LEFT FLANKING DISC ================= */}
        <div className="hidden sm:flex items-center justify-end pr-6 sm:pr-10 z-10">
          <motion.div
            key={prevTrack.id + "-left"}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelectTrack(prevIdx)}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-neutral-200 border-2 border-neutral-300 shadow-[0_15px_35px_rgba(0,0,0,0.85)] cursor-pointer flex items-center justify-center relative overflow-hidden group opacity-85 hover:opacity-100 transition-opacity"
            title={`Previous Disc: ${prevTrack.title}`}
          >
            <VinylGrooves />
            <HolographicFoil />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-neutral-400 flex flex-col items-center justify-center z-10 shadow-sm text-center">
              <span className="text-xl filter drop-shadow">{prevTrack.catArtwork}</span>
              <span className="text-[7px] font-sans font-black text-rose-600 uppercase tracking-tighter truncate max-w-[42px]">
                {prevTrack.title}
              </span>
              <span className="text-[5px] font-mono text-neutral-600">NO.{prevTrack.labelNo}</span>
            </div>
            <div className="absolute w-4 h-4 rounded-full bg-[#120306] border border-white/60 z-20" />
          </motion.div>
        </div>

        {/* ========================================================================
            CENTER VINTAGE RADIO CONSOLE (Deep Maroon / Burgundy Luxury Unit)
            ======================================================================== */}
        <div className="relative z-20 shrink-0">
          
          <div className="w-[300px] h-[340px] sm:w-[350px] sm:h-[380px] rounded-[48px] bg-gradient-to-b from-[#5c131a] via-[#480d14] to-[#260508] border-4 border-[#7a1f28] shadow-[0_30px_70px_rgba(0,0,0,0.95),0_10px_25px_rgba(92,19,26,0.5)] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top Edge Speaker Perforations (3 Micro Dots) */}
            <div className="flex justify-center items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#180305]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#180305]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#180305]" />
            </div>

            {/* ========================================================
                ELONGATED OVAL STADIUM WINDOW (LCD Display + Properly Nested Spinning CD)
                ======================================================== */}
            <div className="relative w-full h-[142px] sm:h-[156px] rounded-[38px] bg-[#120306] border-4 border-[#2d070c] shadow-[inset_0_4px_15px_rgba(0,0,0,0.95)] p-3 sm:p-4 flex items-center justify-between overflow-hidden my-auto">
              
              {/* Glass Glare Highlights */}
              <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none z-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-30" />

              {/* LEFT HALF: Digital Track Information & Equalizer Bars */}
              <div className="relative z-30 flex-1 flex flex-col justify-between h-full pr-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-rose-400 animate-ping" : "bg-neutral-600"}`} />
                    <span className="text-[8px] font-mono font-bold tracking-widest text-rose-300/80 uppercase">
                      NO.{activeTrack.labelNo} STEREO
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-white truncate max-w-[125px]">
                    {activeTrack.title}
                  </h4>
                  <p className="font-sans text-[10px] text-amber-200/80 font-light truncate max-w-[125px]">
                    {activeTrack.artist}
                  </p>
                </div>

                {/* Animated Equalizer Waveform Bars (Warm crimson to gold gradient) */}
                <div className="flex items-end gap-1 h-6 pt-1">
                  {[40, 75, 55, 95, 65, 85, 45, 90, 70, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={
                        isPlaying
                          ? { height: [`${h * 0.2}%`, `${h}%`, `${h * 0.35}%`] }
                          : { height: "15%" }
                      }
                      transition={{
                        duration: 0.4 + (i % 4) * 0.09,
                        repeat: isPlaying ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="w-1 rounded-full bg-gradient-to-t from-rose-500 via-rose-400 to-amber-200 shadow-sm"
                    />
                  ))}
                </div>

                {/* Digital Counter & Status */}
                <div className="flex items-center justify-between text-[8px] font-mono text-amber-100/70 pt-0.5">
                  <span>MP3</span>
                  <span className="text-rose-400 font-bold">{isPlaying ? "PLAYING" : "PAUSED"}</span>
                  <span>{activeTrack.duration}</span>
                </div>
              </div>

              {/* RIGHT HALF: Active CD Disc Slotted Cleanly INSIDE the Window */}
              <div className="relative z-20 w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] shrink-0 -mr-3 sm:-mr-4 flex items-center justify-center overflow-hidden">
                <motion.div
                  key={activeTrack.id}
                  initial={{ x: 60, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    rotate: isPlaying ? 360 : 0,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 220, damping: 24 },
                    opacity: { duration: 0.25 },
                    rotate: isPlaying
                      ? { duration: 3.5, repeat: Infinity, ease: "linear" }
                      : { duration: 0.3 },
                  }}
                  className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-200 via-white to-neutral-300 border-2 border-neutral-300 shadow-[0_5px_20px_rgba(0,0,0,0.85)] flex items-center justify-center relative overflow-hidden"
                >
                  <VinylGrooves />
                  <HolographicFoil />

                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-neutral-400 flex flex-col items-center justify-center z-10 shadow-sm text-center">
                    <span className="text-lg sm:text-xl filter drop-shadow">{activeTrack.catArtwork}</span>
                    <span className="text-[7px] font-sans font-black text-rose-600 uppercase tracking-tighter truncate max-w-[38px]">
                      {activeTrack.title}
                    </span>
                  </div>

                  <div className="absolute w-4 h-4 rounded-full bg-[#120306] border-2 border-white/70 z-20" />
                </motion.div>
              </div>

            </div>

            {/* Subtle Embossed Brand Stamp */}
            <div className="text-center py-0.5">
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#8d2a34] uppercase">
                VINTAGE HI-FI // MP3 DECK
              </span>
            </div>

            {/* ========================================================
                THREE SCULPTED CIRCULAR TACTILE BUTTONS
                (Previous, Center Play/Pause, Next)
                ======================================================== */}
            <div className="flex items-center justify-center gap-5 sm:gap-6 pb-2">
              
              {/* PREVIOUS BUTTON */}
              <button
                onClick={handlePrev}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#3d0a0f] to-[#1e0407] border-2 border-[#781822] shadow-[0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center text-amber-100 hover:text-white active:scale-90 transition-all cursor-pointer group"
                title="Previous Track"
              >
                <svg className="w-5 h-5 fill-current text-amber-200/90 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M6 6h2.5v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* CENTER PLAY / PAUSE BUTTON */}
              <button
                onClick={handleTogglePlay}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-b from-[#6b1620] via-[#480d14] to-[#250508] border-3 border-[#a02634] shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_20px_rgba(225,29,72,0.35)] flex items-center justify-center text-white hover:text-amber-200 active:scale-95 transition-all cursor-pointer relative group"
                title={isPlaying ? "Pause Track" : "Play Track"}
              >
                <div className="absolute inset-1 rounded-full border border-white/20 pointer-events-none" />
                {isPlaying ? (
                  <svg className="w-6 h-6 fill-current text-amber-100 drop-shadow group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7 fill-current text-amber-100 drop-shadow ml-1 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* NEXT BUTTON */}
              <button
                onClick={handleNext}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#3d0a0f] to-[#1e0407] border-2 border-[#781822] shadow-[0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center text-amber-100 hover:text-white active:scale-90 transition-all cursor-pointer group"
                title="Next Track"
              >
                <svg className="w-5 h-5 fill-current text-amber-200/90 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM15.5 6v12H18V6h-2.5z" />
                </svg>
              </button>

            </div>

          </div>

        </div>

        {/* ================= RIGHT FLANKING DISC ================= */}
        <div className="hidden sm:flex items-center justify-start pl-6 sm:pl-10 z-10">
          <motion.div
            key={nextTrack.id + "-right"}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelectTrack(nextIdx)}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-neutral-200 border-2 border-neutral-300 shadow-[0_15px_35px_rgba(0,0,0,0.85)] cursor-pointer flex items-center justify-center relative overflow-hidden group opacity-85 hover:opacity-100 transition-opacity"
            title={`Next Disc: ${nextTrack.title}`}
          >
            <VinylGrooves />
            <HolographicFoil />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-neutral-400 flex flex-col items-center justify-center z-10 shadow-sm text-center">
              <span className="text-xl filter drop-shadow">{nextTrack.catArtwork}</span>
              <span className="text-[7px] font-sans font-black text-rose-600 uppercase tracking-tighter truncate max-w-[42px]">
                {nextTrack.title}
              </span>
              <span className="text-[5px] font-mono text-neutral-600">NO.{nextTrack.labelNo}</span>
            </div>
            <div className="absolute w-4 h-4 rounded-full bg-[#120306] border border-white/60 z-20" />
          </motion.div>
        </div>

      </div>

      {/* TRACK SELECTION MINI PILLS: Warm Pastel Sticker Style */}
      <div className="flex items-center justify-center gap-2.5 pt-6 flex-wrap">
        {CASSETTE_TRACKS.map((t, i) => {
          const isSelected = currentIdx === i;
          return (
            <button
              key={t.id}
              onClick={() => handleSelectTrack(i)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border-2 ${
                isSelected
                  ? "bg-[#fef9c3] text-[#713f12] border-[#fde047] font-bold shadow-md scale-105"
                  : "bg-[#0c0d14]/80 text-slate-300 border-white/15 hover:border-[#f97316]/40 hover:text-white"
              }`}
            >
              <span>{t.catArtwork}</span> {t.title}
            </button>
          );
        })}
      </div>

      {/* BOTTOM VOLUME SLIDER: ONLY VOLUME */}
      <div className="flex items-center justify-center gap-3 pt-6 max-w-xs mx-auto text-xs font-mono">
        <span className="text-amber-200/80 font-bold">VOL:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          className="w-32 h-1.5 bg-[#3d0a0f] rounded-lg appearance-none cursor-pointer accent-[#f97316]"
        />
        <span className="text-amber-100 font-bold w-9">{Math.round(volume * 100)}%</span>
      </div>

    </section>
  );
}

// Concentric Vinyl Grooves
function VinylGrooves() {
  return (
    <>
      <div className="absolute inset-1.5 rounded-full border border-neutral-400/40 pointer-events-none" />
      <div className="absolute inset-3.5 rounded-full border border-neutral-400/30 pointer-events-none" />
      <div className="absolute inset-5 rounded-full border border-neutral-400/20 pointer-events-none" />
      <div className="absolute inset-7 rounded-full border border-neutral-400/25 pointer-events-none" />
      <div className="absolute inset-9 rounded-full border border-neutral-400/15 pointer-events-none" />
    </>
  );
}

// Holographic foil sheen overlay
function HolographicFoil() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45)_0%,transparent_40%,rgba(255,255,255,0.25)_60%,transparent_100%)] pointer-events-none z-10" />
  );
}
