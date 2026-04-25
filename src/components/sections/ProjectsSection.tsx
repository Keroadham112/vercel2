import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto mt-28 max-w-6xl px-6 sm:px-8">
      <SectionHeading
        eyebrow="Selected Builds"
        title="Projects that combine product engineering and AI interaction"
        description="Each build is designed for real-world interaction, modern UX, and scalable architecture."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group glass-panel flex h-full flex-col"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-zinc-300">{project.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm">
              <a
                className="text-fuchsia-300 transition group-hover:text-fuchsia-200"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {project.demo ? (
                <a className="text-zinc-200 transition hover:text-white" href={project.demo}>
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
