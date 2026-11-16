import React, { useState } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";
import ChromaticSendButton from "./ChromaticSendButton";

export default function DesignerConnectFooter({ onOpenDossier }) {
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
    <footer id="contact" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#050608] text-white border-t border-white/10 select-none">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Main Connect Hero Box */}
        <div className="relative rounded-3xl bg-[#0a0c16]/90 backdrop-blur-2xl border border-white/15 p-8 sm:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(16,185,129,0.12)] text-center space-y-8 overflow-hidden">
          
          {/* Subtle Ambient Emerald Aura */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Header */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// 06 COLLABORATION &amp; TRANSMISSION</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Ready to Design Something <span className="text-emerald-400">Remarkable?</span>
            </h3>

            <p className="font-sans text-xs sm:text-base text-slate-300 font-light leading-relaxed">
              Seeking a Senior UI/UX &amp; Product Designer who bridges user research, design systems, and tactile frontend micro-interactions? Let's connect.
            </p>
          </div>

          {/* Quick Inquiry Input with ChromaticSendButton (Attachment 6) */}
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3 bg-black/70 p-2 rounded-2xl sm:rounded-full border border-white/20 shadow-inner">
            <input
              type="text"
              value={inquiryText}
              onChange={(e) => setInquiryText(e.target.value)}
              placeholder="Leave a quick note or project brief..."
              className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none font-sans"
            />
            <div className="shrink-0 w-full sm:w-auto flex justify-end">
              <ChromaticSendButton
                label="Send Message"
                onClick={handleSendInquiry}
              />
            </div>
          </div>

          {/* Quick Direct Channels Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-black border border-white/15 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{copied ? "✓ EMAIL COPIED" : "✉ NMANISH10@GMAIL.COM"}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/manish-nooli/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              LINKEDIN ↗
            </a>

            <a
              href="https://www.behance.net/nmanish"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              BEHANCE ↗
            </a>

            <a
              href="https://medium.com/@nmanish"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              MEDIUM CASE STUDIES ↗
            </a>

            <button
              onClick={onOpenDossier}
              className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-sans font-semibold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer active:scale-95"
            >
              VIEW FULL RESUME DOSSIER ↗
            </button>
          </div>

        </div>

        {/* Minimalist Designer Footnote */}
        <div className="text-center space-y-2 border-t border-white/10 pt-8 text-[11px] font-mono text-slate-500">
          <div>
            MANISH NOOLI // LEAD UI/UX &amp; PRODUCT ARCHITECT • HYDERABAD, INDIA ✈ OPEN TO GLOBAL REMOTE
          </div>
          <div>
            BUILT WITH COGNITIVE ERGONOMICS, REACT, TAILWIND CSS &amp; 60 FPS SPRING MOTION.
          </div>
        </div>

      </div>
    </footer>
  );
}
