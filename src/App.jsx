import { useMemo } from "react";
import { Header } from "./components/layout/Header.jsx";
import { SectionRail } from "./components/layout/SectionRail.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { tickerItems } from "./data/portfolio.js";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { useHashScroll } from "./hooks/useHashScroll.js";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { ExperiencePage } from "./pages/ExperiencePage.jsx";
import { HeroPage } from "./pages/HeroPage.jsx";
import { LearningPage } from "./pages/LearningPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { SkillsPage } from "./pages/SkillsPage.jsx";

function AppContent() {
  const { active, current } = useActiveSection();
  const repeatedTicker = useMemo(() => [...tickerItems, ...tickerItems], []);

  useHashScroll();
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-site-grid">
      <Header active={active} />
      <SectionRail current={current} />
      <main>
        <HeroPage repeatedTicker={repeatedTicker} />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ExperiencePage />
        <LearningPage />
        <ContactPage />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

