// Clean Luxury Emerald, Black & White Design System
// High-readability, editorial aesthetics: Pitch Black (#050608), Pure White (#FFFFFF), and Luminous Emerald (#10B981).

export const THEMES = [
  {
    id: "emerald-core",
    name: "EMERALD, BLACK & WHITE",
    shortName: "EMERALD",
    primary: "#10B981",
    secondary: "#FFFFFF",
    accent: "#34D399",
    glow: "rgba(16, 185, 129, 0.25)",
    secondaryGlow: "rgba(255, 255, 255, 0.15)",
    cardBorder: "rgba(16, 185, 129, 0.35)",
    hudTag: "CLEAN EMERALD",
  },
  {
    id: "mint-minimal",
    name: "NEO MINT & CRISP WHITE",
    shortName: "MINT",
    primary: "#059669",
    secondary: "#FFFFFF",
    accent: "#10B981",
    glow: "rgba(5, 150, 105, 0.25)",
    secondaryGlow: "rgba(255, 255, 255, 0.15)",
    cardBorder: "rgba(5, 150, 105, 0.35)",
    hudTag: "MINT MINIMAL",
  },
  {
    id: "monochrome-emerald",
    name: "PURE MONOCHROME & EMERALD",
    shortName: "MONO",
    primary: "#FFFFFF",
    secondary: "#10B981",
    accent: "#94A3B8",
    glow: "rgba(255, 255, 255, 0.18)",
    secondaryGlow: "rgba(16, 185, 129, 0.2)",
    cardBorder: "rgba(255, 255, 255, 0.2)",
    hudTag: "MONOCHROME",
  },
];

export function applyTheme(theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  // Set CSS custom properties on :root
  root.style.setProperty("--theme-primary", theme.primary);
  root.style.setProperty("--theme-secondary", theme.secondary);
  root.style.setProperty("--theme-accent", theme.accent);
  root.style.setProperty("--theme-glow", theme.glow);
  root.style.setProperty("--theme-secondary-glow", theme.secondaryGlow);
  root.style.setProperty("--theme-card-border", theme.cardBorder);
  root.setAttribute("data-theme", theme.id);

  document.body.classList.add("theme-recalibrating");
  setTimeout(() => {
    document.body.classList.remove("theme-recalibrating");
  }, 200);
}
