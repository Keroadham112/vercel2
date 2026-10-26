import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { GlowBackground } from "./components/ui/GlowBackground";
import { profile } from "./data/portfolio";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-zinc-100">
        <GlowBackground />
        <header className="sticky top-4 z-30 mx-auto mt-4 w-[min(94vw,1020px)]">
          <div className="glass-panel !px-4 !py-3 sm:!px-6">
            <nav className="flex items-center justify-between">
              <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-fuchsia-200">
                KEROLOS ADHAM
              </a>
              <ul className="hidden gap-5 text-sm text-zinc-200 md:flex">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a className="transition hover:text-fuchsia-300" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <a className="glass-btn !px-3 !py-1.5 text-sm" href={`mailto:${profile.email}`}>
                  Hire Me
                </a>
                <button
                  type="button"
                  className="glass-btn !px-2.5 !py-1.5 md:hidden"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                  </svg>
                </button>
              </div>
            </nav>
            <AnimatePresence>
              {menuOpen ? (
                <motion.ul
                  className="mt-3 grid gap-1 border-t border-white/10 pt-3 text-sm text-zinc-200 md:hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        className="block rounded-lg px-2 py-2 transition hover:bg-white/5 hover:text-fuchsia-300"
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </div>
        </header>

        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
