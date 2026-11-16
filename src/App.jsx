import React, { useState, useEffect } from "react";
import SystemLoadingScreen from "./components/SystemLoadingScreen";
import CreativeMascotNavbar from "./components/CreativeMascotNavbar";
import ARHUDCursor from "./components/ARHUDCursor";
import CreativeHeroCanvas from "./components/CreativeHeroCanvas";
import ShowcaseCaseStudies from "./components/ShowcaseCaseStudies";
import PhysicsSkillsBowl from "./components/PhysicsSkillsBowl";
import RetroTellyVideoPlayer from "./components/RetroTellyVideoPlayer";
import CreativeDesignLab from "./components/CreativeDesignLab";
import MusicBubbleExperience from "./components/MusicBubbleExperience";
import RedSayHiFooter from "./components/RedSayHiFooter";
import CinematicShowreelModal from "./components/CinematicShowreelModal";
import DirectorDossierModal from "./components/DirectorDossierModal";
import CaseStudyModal from "./components/CaseStudyModal";
import { cinematicAudio } from "./utils/CinematicAudio";
import { THEMES, applyTheme } from "./utils/ThemeEngine";

export default function App() {
  const [isLoadingScreenOpen, setIsLoadingScreenOpen] = useState(true);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Global Theme Engine State
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = THEMES[themeIndex];

  // Apply default theme to :root on initial mount
  useEffect(() => {
    applyTheme(THEMES[0]);
  }, []);

  // Track active section on scroll for mascot navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", offset: 0 },
        { id: "case-studies", offset: (document.getElementById("case-studies")?.offsetTop || 700) - 120 },
        { id: "skills-bowl", offset: (document.getElementById("skills-bowl")?.offsetTop || 1600) - 120 },
        { id: "telly", offset: (document.getElementById("telly")?.offsetTop || 2400) - 120 },
        { id: "creative-lab", offset: (document.getElementById("creative-lab")?.offsetTop || 3200) - 120 },
        { id: "music-experience", offset: (document.getElementById("music-experience")?.offsetTop || 4000) - 120 },
        { id: "contact", offset: (document.getElementById("contact")?.offsetTop || 4800) - 120 },
      ];

      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setActiveSection(id);
    try {
      cinematicAudio.playTactileClick(900);
    } catch {}
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCaseStudy = (study) => {
    setActiveCaseStudy(study);
    setIsCaseStudyOpen(true);
    try {
      cinematicAudio.playTactileClick(1100);
    } catch {}
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-[#f1f5f9] font-sans film-grain pointer-events-auto overflow-x-hidden">
      {/* Precision Desktop AR HUD Reticle Cursor */}
      <ARHUDCursor currentTheme={currentTheme} />

      {/* Sci-Fi / Game System Loading Screen (Press Enter to Launch) */}
      <SystemLoadingScreen
        isOpen={isLoadingScreenOpen}
        onEnter={() => setIsLoadingScreenOpen(false)}
        currentTheme={currentTheme}
      />

      {/* Creative Mascot Navbar with Sliding Peeking Character (Reference Image 13) */}
      {!isLoadingScreenOpen && (
        <CreativeMascotNavbar
          activeSection={activeSection}
          onNavigate={handleScrollTo}
          onOpenDossier={() => setIsDossierOpen(true)}
        />
      )}

      {/* Main Feature Sections */}
      <main className="relative z-10 space-y-0 bg-[#050608]">
        {/* 1. CREATIVE HERO CANVAS: Scattered desk, cool cat on laptop, eye-tracking hire, 3D flip card (Images 1, 4, 7, 8) */}
        <CreativeHeroCanvas
          onNavigateToWork={() => handleScrollTo("case-studies")}
          onOpenDossier={() => setIsDossierOpen(true)}
        />

        {/* 2. SHOWCASE CASE STUDIES: Floating iPhone mockups, #01/#02 big typography, fanning folder (Images 5 & 6) */}
        <ShowcaseCaseStudies
          onOpenCaseStudy={handleOpenCaseStudy}
        />

        {/* 3. 3D GLASS BLOCK: Glass chamber with dispersed floating skill capsules */}
        <PhysicsSkillsBowl />

        {/* 4. RETRO TELLY VIDEO PLAYER: Vintage CRT TV, insertable DVD discs, scanline glow (Image 10) */}
        <RetroTellyVideoPlayer />

        {/* 5. EXPERIMENTAL CREATIVE LAB: Playable Dynamic Island, liquid toggle, haptic slider, loaders & posters */}
        <CreativeDesignLab />

        {/* 6. AUDIBLE MUSIC BUBBLE EXPERIENCE: Glassmorphic bubble card playing "Killin'em" scene beat */}
        <MusicBubbleExperience />

        {/* 7. PANORAMIC RED "SAY HI" BANNER: Massive SAY HI, email, SEE RESUME, peeking cat, chromatic send (Image 3) */}
        <RedSayHiFooter
          onOpenDossier={() => setIsDossierOpen(true)}
        />
      </main>

      {/* Interactive Case Study Modal with Medium links & real prototypes */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        currentTheme={currentTheme}
      />

      {/* Motion Cinema Showreel Modal */}
      <CinematicShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      {/* Director Dossier Modal */}
      <DirectorDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
