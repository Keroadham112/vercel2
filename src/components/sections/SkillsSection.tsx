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
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="chip !px-3.5 !py-1.5 !text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
