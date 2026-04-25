import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

const featureCards = [
  {
    title: "Web Development",
    description: "Crafting polished frontend systems with React, motion, and strong product detail.",
  },
  {
    title: "Backend Architecture",
    description: "Building reliable APIs and business workflows with C# and ASP.NET Core.",
  },
  {
    title: "AI Integration",
    description: "Embedding AI into user-facing experiences with real-time, interactive feedback loops.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto mt-28 max-w-6xl px-6 sm:px-8">
      <SectionHeading eyebrow="About" title="Engineering with product thinking and clean execution" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-zinc-200">{profile.summary}</p>
          <p className="mt-4 text-zinc-400">
            I focus on experiences where strong architecture meets visual clarity, so the product feels fast, intentional, and memorable.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="glass-panel"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <h3 className="text-lg font-medium text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
