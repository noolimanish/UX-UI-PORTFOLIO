import React, { useState } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";
import MusicalPersonalityWidget from "./MusicalPersonalityWidget";
import ChromaticSendButton from "./ChromaticSendButton";

export default function CinemaEditorialCredits({ onOpenDossier, currentTheme }) {
  const [copied, setCopied] = useState(false);
  const [inquiryText, setInquiryText] = useState("");

  const primaryColor = currentTheme?.primary || "#10B981";

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
    const body = encodeURIComponent(inquiryText || "Hello Manish, I was impressed by your portfolio and would like to connect regarding an opportunity.");
    window.location.href = `mailto:nmanish10@gmail.com?subject=${subject}&body=${body}`;
  };

  const CREDITS_GRID = [
    {
      title: "WRITTEN & DIRECTED BY",
      name: "Manish Nooli",
      handle: "@nmanish",
      sub: "Lead UI/UX & Product Architect",
    },
    {
      title: "ACADEMIC FOUNDATION",
      name: "B.Tech in Computer Science",
      handle: "@snist_hyderabad",
      sub: "SNIST Hyderabad (CGPA 8.0+)",
    },
    {
      title: "INTERACTION ENGINES",
      name: "Figma & Framer Motion",
      handle: "@tactile_springs",
      sub: "Damped Euler Springs & Micro-Delight",
    },
    {
      title: "ACOUSTIC SOUND DESIGN",
      name: "Native Web Audio API",
      handle: "@432hz_synth",
      sub: "Mathematical Sound Oscillators",
    },
    {
      title: "SYSTEMIC TOKENS",
      name: "Zero-Recalculation :root",
      handle: "@css_variables",
      sub: "0ms Style Recalculation",
    },
    {
      title: "BASE OF OPERATIONS",
      name: "Hyderabad, India",
      handle: "@remote_worldwide",
      sub: "Open to Worldwide Senior Roles",
    },
  ];

  return (
    <footer id="credits" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#050608] text-white border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* MUSICAL PERSONALITY WIDGET (No text explain, pure radial visual delight) */}
        <div className="flex flex-col items-center justify-center space-y-3 py-6">
          <MusicalPersonalityWidget />
        </div>

        {/* Cinema Editorial Header: Clean Sculptural Display + Emerald Laser Bar */}
        <div className="text-center space-y-3 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-widest uppercase">// 07 PRODUCTION REEL &amp; OFFICIAL CREDITS</span>
          </div>

          <div className="relative inline-block text-center">
            <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-white">
              Directed By // <span className="text-emerald-400">Manish Nooli</span>
            </h2>
            <div className="w-full h-1.5 sm:h-2 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] mt-3 mx-auto rounded-full" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light tracking-wide max-w-md mx-auto pt-1">
            Where human psychology, computer vision &amp; mathematical design systems collide
          </p>
        </div>

        {/* The 4-Column Movie Credits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-8 border-y border-white/10 text-center font-mono">
          {CREDITS_GRID.map((c, i) => (
            <div key={i} className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-400/30 transition-colors">
              <div className="text-xs tracking-wider uppercase font-semibold text-emerald-400">
                {c.title}
              </div>
              <div className="font-display font-bold text-white text-base">
                {c.name}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {c.handle}
              </div>
              <div className="text-[11px] text-slate-500 font-sans font-light">
                {c.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Direct Transmission Box featuring ChromaticSendButton */}
        <div className="relative rounded-3xl bg-[#090b14]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center space-y-6 overflow-hidden">
          
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest font-semibold text-emerald-400">
              DIRECT TRANSMISSION // AVAILABLE FOR HIRE
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Ready to Design Something Remarkable?
            </h3>
            <p className="text-slate-300 font-sans text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Seeking a Senior Product Designer who bridges user research, design systems, and production frontend engineering? Drop a transmission.
            </p>
          </div>

          {/* Quick Inquiry Input with ChromaticSendButton */}
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3 bg-black/60 p-2 rounded-2xl sm:rounded-full border border-white/15 shadow-inner">
            <input
              type="text"
              value={inquiryText}
              onChange={(e) => setInquiryText(e.target.value)}
              placeholder="Leave a quick note or project brief..."
              className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none font-sans"
            />
            <div className="shrink-0 w-full sm:w-auto flex justify-end">
              <ChromaticSendButton
                label="Send Transmission"
                onClick={handleSendInquiry}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{copied ? "✓ EMAIL COPIED" : "✉ NMANISH10@GMAIL.COM"}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/manish-nooli/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              LINKEDIN ↗
            </a>

            <a
              href="https://www.behance.net/nmanish"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              BEHANCE ARCHIVE ↗
            </a>
          </div>

        </div>

        {/* Bottom Filmic Copyright */}
        <div className="text-center text-[11px] font-mono text-slate-600">
          © {new Date().getFullYear()} MANISH NOOLI. ALL RIGHTS RESERVED. HUMAN COGNITION • SPRING DYNAMICS • DESIGN SYSTEMS.
        </div>
      </div>
    </footer>
  );
}
