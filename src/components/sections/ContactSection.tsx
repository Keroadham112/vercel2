import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto mt-28 max-w-6xl px-6 pb-20 sm:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Open to full-stack and AI-focused development opportunities"
      />

      <motion.div
        className="glass-panel mx-auto mt-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-center text-zinc-300">
          Let&apos;s build products that are fast, scalable, and visually exceptional.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a className="glow-btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="glass-btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="glass-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
