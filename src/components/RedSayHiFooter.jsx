import React, { useState } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";
import ChromaticSendButton from "./ChromaticSendButton";

export default function RedSayHiFooter({ onOpenDossier }) {
  const [copied, setCopied] = useState(false);
  const [inquiryText, setInquiryText] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nmanish10@gmail.com");
    setCopied(true);
    try {
      cinematicAudio.playThemeChime(950);
    } catch {}
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendInquiry = () => {
    const subject = encodeURIComponent("UI/UX Collaboration Inquiry — Manish Nooli");
    const body = encodeURIComponent(
      inquiryText || "Hello Manish, I saw your UI/UX portfolio and would love to discuss a product design opportunity."
    );
    window.location.href = `mailto:nmanish10@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="relative w-full pt-16 bg-[#050608] select-none">
      
      {/* ========================================================
          PANORAMIC RED "SAY HI" BANNER (Matches User Reference Image 3!)
          ======================================================== */}
      <div className="relative w-full bg-[#e52020] text-white py-12 sm:py-16 px-6 sm:px-12 overflow-hidden shadow-[0_-15px_50px_rgba(229,32,32,0.35)]">
        
        {/* Sunburst Radial Lines Background Pattern (Reference Image 3) */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Subtle Sunburst Cone Rays */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[conic-gradient(from_0deg_at_50%_50%,#ffffff_0deg,#e52020_20deg,#ffffff_40deg,#e52020_60deg,#ffffff_80deg,#e52020_100deg,#ffffff_120deg,#e52020_140deg,#ffffff_160deg,#e52020_180deg,#ffffff_200deg,#e52020_220deg,#ffffff_240deg,#e52020_260deg,#ffffff_280deg,#e52020_300deg,#ffffff_320deg,#e52020_340deg,#ffffff_360deg)]" />

        {/* Floating Paw Print (Reference Image 3) */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-2xl filter drop-shadow opacity-90 animate-bounce pointer-events-none">
          🐾
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* LEFT: Massive "SAY HI" Typography & Email (Reference Image 3) */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl text-white tracking-tighter leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              SAY HI
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="font-sans font-bold text-lg sm:text-2xl text-white tracking-tight">
                nmanish10@gmail.com
              </span>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 rounded-full bg-black/30 hover:bg-black/50 text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/20"
              >
                {copied ? "✓ COPIED" : "COPY EMAIL"}
              </button>
            </div>

            {/* "SEE RESUME" Action Button (Reference Image 3) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  try {
                    cinematicAudio.playThemeChime(900);
                  } catch {}
                  onOpenDossier?.();
                }}
                className="px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-black font-display font-black text-sm tracking-wider uppercase shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all active:scale-95 cursor-pointer"
              >
                SEE RESUME
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/manish-nooli/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-sm font-bold text-white transition-all"
                  title="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://medium.com/@nmanish"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-sm font-bold text-white transition-all"
                  title="Medium"
                >
                  M
                </a>
                <a
                  href="https://www.behance.net/nmanish"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-sm font-bold text-white transition-all"
                  title="Behance"
                >
                  Bē
                </a>
              </div>
            </div>
          </div>

          {/* CENTER: Fast Direct Inquiry with Chromatic Send Button (Attachment 6) */}
          <div className="max-w-md w-full bg-black/40 backdrop-blur-md p-4 rounded-3xl border border-white/20 space-y-3">
            <div className="text-[11px] font-mono text-white/90 uppercase tracking-wider font-bold">
              SEND DIRECT TRANSMISSION:
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="text"
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                placeholder="Leave a project brief or say hello..."
                className="w-full bg-black/60 px-4 py-2.5 rounded-full text-xs sm:text-sm text-white placeholder-white/50 border border-white/20 outline-none font-sans"
              />
              <div className="shrink-0 w-full sm:w-auto flex justify-end">
                <ChromaticSendButton
                  label="Send"
                  onClick={handleSendInquiry}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Cool Black Cat Peeking Over Box (Exact Match to Reference Image 3!) */}
          <div className="relative shrink-0 flex flex-col items-center">
            {/* Peeking Black Cat with Red Sunglasses */}
            <div className="relative z-10 -mb-2">
              <div className="text-7xl sm:text-8xl filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                🐈‍⬛
              </div>
              <div className="absolute top-7 left-1/2 -translate-x-1/2 text-3xl filter drop-shadow">
                🕶️
              </div>
            </div>

            {/* Red Box the Cat Peeks Out Of */}
            <div className="w-28 sm:w-32 h-14 rounded-t-2xl bg-[#991010] border-t-2 border-x-2 border-white/30 shadow-2xl flex items-center justify-center text-[10px] font-mono font-bold text-white tracking-widest">
              MANISH.BOX
            </div>
          </div>

        </div>
      </div>

      {/* Clean Minimal Dark Footer Bar */}
      <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 border-t border-white/10">
        <div>
          © {new Date().getFullYear()} MANISH NOOLI // LEAD PRODUCT &amp; UI/UX DESIGNER
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>HYDERABAD, INDIA</span>
          <span>•</span>
          <span className="text-emerald-400">OPEN TO GLOBAL REMOTE</span>
        </div>
      </div>

    </footer>
  );
}
