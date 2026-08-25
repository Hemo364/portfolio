import { motion } from "framer-motion"
import type { Skill } from "../../data/skills"

interface SkillCardProps {
  skill: Skill
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="glass-card group flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition-shadow duration-300 hover:shadow-glow"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${skill.color}1a` }}
      >
        <Icon size={32} color={skill.color} aria-hidden="true" />
      </div>
      <span className="font-semibold text-slate-800">{skill.label}</span>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="h-full rounded-full bg-gradient-to-l from-blue-600 to-sky-400"
        />
      </div>
    </motion.div>
  )
}
