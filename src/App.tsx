import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { GlowBackground } from "./components/ui/GlowBackground";
import { profile } from "./data/portfolio";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
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
            <a className="glass-btn !px-3 !py-1.5 text-sm" href={`mailto:${profile.email}`}>
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;