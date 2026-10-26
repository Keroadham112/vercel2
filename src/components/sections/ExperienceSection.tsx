import { motion } from "framer-motion";
import { certifications, education, experience } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto mt-28 max-w-6xl px-6 sm:px-8">
      <SectionHeading eyebrow="Experience" title="Training, internships, and education" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <ol className="relative space-y-6 border-l border-fuchsia-300/20 pl-6">
          {experience.map((item, index) => (
            <motion.li
              key={item.title}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
              <div className="glass-panel">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <span className="text-xs tracking-wider text-fuchsia-300">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-400">{item.org}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="grid content-start gap-6">
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-3 text-xs tracking-[0.25em] text-zinc-400">EDUCATION</div>
            <h3 className="text-lg font-medium text-white">{education.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">
              {education.org} · {education.period}
            </p>
            <p className="mt-3 text-sm text-zinc-300">{education.points[0]}</p>
          </motion.div>

          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="mb-3 text-xs tracking-[0.25em] text-zinc-400">CERTIFICATIONS</div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="chip !px-3.5 !py-1.5 !text-sm">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
