import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import { ImageLightbox } from "../ui/ImageLightbox";
import { SectionHeading } from "../ui/SectionHeading";

type OpenGallery = { project: number; image: number };

export function ProjectsSection() {
  const [gallery, setGallery] = useState<OpenGallery | null>(null);
  const closeGallery = useCallback(() => setGallery(null), []);
  const setGalleryImage = useCallback(
    (image: number) => setGallery((current) => (current ? { ...current, image } : current)),
    [],
  );
  const openProject = gallery ? projects[gallery.project] : null;

  return (
    <section id="projects" className="mx-auto mt-28 max-w-6xl px-6 sm:px-8">
      <SectionHeading
        eyebrow="Selected Builds"
        title="Projects built for real-world interaction"
        description="Each build combines thoughtful user experiences with practical, scalable engineering."
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
            {project.images.length > 0 ? (
              <button
                type="button"
                className="relative -mx-2 -mt-2 mb-5 block overflow-hidden rounded-xl border border-white/10 text-left"
                aria-label={`View ${project.title} screenshots`}
                onClick={() => setGallery({ project: index, image: 0 })}
              >
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {project.images.length > 1 ? (
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 text-xs text-zinc-200">
                    1 / {project.images.length}
                  </span>
                ) : null}
              </button>
            ) : null}

            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-zinc-300">{project.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
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

            <div className="mt-auto flex items-center gap-4 pt-6 text-sm">
              <a
                className="text-fuchsia-300 transition group-hover:text-fuchsia-200"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {project.demo ? (
                <a className="text-zinc-200 transition hover:text-white" href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {gallery && openProject ? (
          <ImageLightbox
            title={openProject.title}
            images={openProject.images}
            index={gallery.image}
            onIndexChange={setGalleryImage}
            onClose={closeGallery}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
