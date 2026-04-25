import { motion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto mt-28 max-w-6xl px-6 sm:px-8">
      <SectionHeading
        eyebrow="Technical Stack"
        title="Skills shaped by full-stack delivery and AI-driven products"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            className="glass-panel"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-5 space-y-4">
              {group.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-zinc-200">{skill.name}</span>
                    <span className="text-fuchsia-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800/80">
                    <motion.div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#a855f7,#d946ef)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
