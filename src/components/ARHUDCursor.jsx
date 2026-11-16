import React, { useEffect, useState, useRef } from "react";

export default function ARHUDCursor({ currentTheme }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [lagPos, setLagPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverLabel, setHoverLabel] = useState("");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripple, setRipple] = useState(null);

  const requestRef = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentLag = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop/fine-pointer devices
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsVisible(true);
    document.body.classList.add("hud-cursor-active");

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      // Detect hover on interactive elements
      const target = e.target;
      const interactive = target.closest("button, a, input, select, textarea, [role='button'], .cursor-pointer, [data-cursor-target]");
      if (interactive) {
        setIsHovering(true);
        const label = interactive.getAttribute("data-cursor-label") || interactive.getAttribute("title") || interactive.textContent?.trim().slice(0, 16);
        setHoverLabel(label || "TARGET LOCKED");
      } else {
        setIsHovering(false);
        setHoverLabel("");
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      setRipple({ x: e.clientX, y: e.clientY, id: Date.now() });
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lag interpolation loop for reticle
    const animateLag = () => {
      const ease = 0.22;
      currentLag.current.x += (targetPos.current.x - currentLag.current.x) * ease;
      currentLag.current.y += (targetPos.current.y - currentLag.current.y) * ease;
      setLagPos({ x: currentLag.current.x, y: currentLag.current.y });
      requestRef.current = requestAnimationFrame(animateLag);
    };
    requestRef.current = requestAnimationFrame(animateLag);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("hud-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isVisible) return null;

  const primaryColor = currentTheme?.primary || "#10B981";
  const secondaryColor = currentTheme?.secondary || "#FFFFFF";

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] overflow-hidden select-none">
      {/* 1. Real-Time Laser Crosshair Dot (0 latency) */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovering ? "6px" : "4px",
          height: isHovering ? "6px" : "4px",
          backgroundColor: isHovering ? "#FFFFFF" : primaryColor,
          boxShadow: `0 0 10px ${primaryColor}`,
        }}
      />

      {/* 2. Trailing Outer Tactical Aiming Reticle (Smooth Spring Follower) */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-150 ease-out"
        style={{
          left: `${lagPos.x}px`,
          top: `${lagPos.y}px`,
          width: isHovering ? "46px" : "28px",
          height: isHovering ? "46px" : "28px",
          transform: `translate(-50%, -50%) rotate(${isHovering ? "45deg" : "0deg"}) scale(${isClicking ? "0.85" : "1"})`,
        }}
      >
        {/* Reticle Outer Ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed transition-all duration-200"
          style={{
            borderColor: isHovering ? "rgba(255,255,255,0.8)" : "rgba(16,185,129,0.4)",
            animation: isHovering ? "spin 6s linear infinite" : "none",
          }}
        />

        {/* 4 Tactical Corner Brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-400" />
      </div>

      {/* 3. Floating Miniature Telemetry Readout Beside Cursor */}
      <div
        className="fixed flex flex-col font-mono text-[9px] tracking-widest pointer-events-none transition-opacity duration-150"
        style={{
          left: `${lagPos.x + 24}px`,
          top: `${lagPos.y - 18}px`,
          opacity: isHovering ? 1 : 0.65,
        }}
      >
        <div className="flex items-center gap-1.5 font-semibold text-slate-400">
          <span>X:{String(Math.round(pos.x)).padStart(4, "0")}</span>
          <span>Y:{String(Math.round(pos.y)).padStart(4, "0")}</span>
        </div>
        {isHovering && (
          <div className="font-semibold uppercase tracking-wider text-[8px] bg-black/90 px-1.5 py-0.5 rounded border border-emerald-500/30 text-emerald-400">
            [{hoverLabel}]
          </div>
        )}
      </div>

      {/* 4. Click Sonar Ripple Shockwave */}
      {ripple && (
        <div
          key={ripple.id}
          className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/80 pointer-events-none animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "36px",
            height: "36px",
            animationDuration: "350ms",
          }}
        />
      )}
    </div>
  );
}
