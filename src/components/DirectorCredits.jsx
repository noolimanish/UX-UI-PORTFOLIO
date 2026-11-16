import React, { useState } from "react";
import { cinematicAudio } from "../utils/CinematicAudio";

export default function DirectorCredits({ onOpenDossier }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nmanish10@gmail.com");
    setCopied(true);
    cinematicAudio.playAnamorphicChime(920);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="act-5" className="relative py-24 px-4 sm:px-8 border-t border-white/[0.08] bg-black/60">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Act V Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/50 border border-amber-400/30 text-xs font-mono text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">ACT V // PRODUCTION CREDITS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-cinematic uppercase tracking-widest text-white">
            ROLLING CREDITS & TRANSMISSION
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-md mx-auto">
            ALL INTERFACES DIRECTED, ENGINEERED & DESIGNED BY MANISH NOOLI
          </p>
        </div>

        {/* Hollywood Style Credits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/[0.08] text-center font-mono text-xs">
          {/* Column 1: Direction & System */}
          <div className="space-y-4">
            <div className="text-amber-400/80 font-bold uppercase tracking-widest text-[11px]">
              DIRECTION & ARCHITECTURE
            </div>
            <div className="space-y-1 text-slate-300">
              <div className="text-base font-display font-bold text-white">Manish Nooli</div>
              <div className="text-[11px] text-slate-400">Lead UI/UX & Product Architect</div>
              <div className="text-[11px] text-slate-500">Physics, Tokens, & Game-Feel</div>
            </div>
          </div>

          {/* Column 2: Education & Credentials */}
          <div className="space-y-4">
            <div className="text-amber-400/80 font-bold uppercase tracking-widest text-[11px]">
              FOUNDATION & CREDENTIALS
            </div>
            <div className="space-y-1 text-slate-300">
              <div className="text-base font-display font-bold text-white">B.Tech in Computer Science</div>
              <div className="text-[11px] text-amber-400">SNIST Hyderabad (2020–2024)</div>
              <div className="text-[11px] text-slate-400">CGPA 8.0+ // Strong Technical Core</div>
            </div>
          </div>

          {/* Column 3: Availability */}
          <div className="space-y-4">
            <div className="text-amber-400/80 font-bold uppercase tracking-widest text-[11px]">
              DEPLOYMENT AVAILABILITY
            </div>
            <div className="space-y-1 text-slate-300">
              <div className="text-base font-display font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open to Senior Roles</span>
              </div>
              <div className="text-[11px] text-slate-400">Remote / Hybrid / Relocation Ready</div>
              <div className="text-[11px] text-slate-500">Base: Hyderabad, India</div>
            </div>
          </div>
        </div>

        {/* Transmission Channels & Direct Contact Box */}
        <div className="p-8 sm:p-12 rounded-3xl cinematic-glass border border-amber-400/30 text-center space-y-6 relative overflow-hidden film-gate">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">
              OPEN DIRECT TRANSMISSION CHANNEL
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
              Let's Direct Something Legendary Together.
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
              Looking for a product designer who codes, understands spring mechanics, and builds production design systems from day one? Get in touch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-display font-extrabold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center gap-2"
            >
              <span>{copied ? "✓ EMAIL COPIED" : "✉ COPY NMANISH10@GMAIL.COM"}</span>
            </button>

            <a
              href="mailto:nmanish10@gmail.com"
              onClick={() => cinematicAudio.playProjectorClick(900)}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold transition-all"
            >
              OPEN EMAIL CLIENT ↗
            </a>

            <a
              href="https://www.behance.net/nmanish"
              target="_blank"
              rel="noreferrer"
              onClick={() => cinematicAudio.playProjectorClick(950)}
              className="px-5 py-3.5 rounded-xl bg-black/60 hover:bg-black/90 border border-white/15 hover:border-amber-400/50 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all"
            >
              BEHANCE ARCHIVE ↗
            </a>

            <a
              href="https://github.com/noolimanish"
              target="_blank"
              rel="noreferrer"
              onClick={() => cinematicAudio.playProjectorClick(1000)}
              className="px-5 py-3.5 rounded-xl bg-black/60 hover:bg-black/90 border border-white/15 hover:border-amber-400/50 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all"
            >
              GITHUB CODE ↗
            </a>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-slate-500">
            <span>DIRECTOR CUT v2.4</span>
            <span>•</span>
            <span>LOCKED 60 FPS INTERPOLATION</span>
            <span>•</span>
            <span>WEB AUDIO REEL ENGAGED</span>
          </div>
        </div>

        {/* Bottom Filmic Bar */}
        <div className="text-center text-[11px] font-mono text-slate-600">
          © {new Date().getFullYear()} MANISH NOOLI. ALL RIGHTS RESERVED. CRAFTED WITH REACT, FRAMER MOTION & CINEMATIC PHYSICS.
        </div>
      </div>
    </footer>
  );
}
