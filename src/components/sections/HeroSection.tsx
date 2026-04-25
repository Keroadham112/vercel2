import { motion } from "framer-motion";
import { profile, projects } from "../../data/portfolio";

const terminalLines = [
  "$ boot --project digital-twin",
  "> Syncing frontend with AI model...",
  "> Mapping real-time state into 3D scene...",
  "> Status: system-online",
];

export function HeroSection() {
  const featured = projects.find((project) => project.featured) ?? projects[0];

  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-[88vh] max-w-6xl gap-12 px-6 pt-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-fuchsia-300/85">Portfolio</p>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
          Hi, I&apos;m <span className="text-fuchsia-400">{profile.name.split(" ")[0]}</span>
          <br />
          {profile.name.split(" ").slice(1).join(" ")}
        </h1>
        <p className="mt-5 max-w-xl text-3xl font-semibold text-zinc-100">{profile.title}</p>
        <p className="mt-5 max-w-xl text-pretty text-zinc-300">
          {profile.summary} Main highlighted build: {featured.title}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="glow-btn" href={featured.github} target="_blank" rel="noreferrer">
            View My Work
          </a>
          <a className="glass-btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="glass-btn" href={`mailto:${profile.email}`}>
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <div className="relative mx-auto aspect-square w-[290px] overflow-hidden rounded-full border-4 border-fuchsia-400/40 bg-zinc-900 shadow-[0_0_45px_rgba(168,85,247,0.55)] sm:w-[360px]">
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="glass-panel mt-6">
          <div className="mb-3 text-xs tracking-[0.25em] text-zinc-400">SYSTEM LOG</div>
          <div className="space-y-2 font-mono text-sm text-zinc-200">
            {terminalLines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.2 }}
                className={index === terminalLines.length - 1 ? "text-fuchsia-300" : ""}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
