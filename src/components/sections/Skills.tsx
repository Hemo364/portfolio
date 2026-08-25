import { motion } from "framer-motion"
import { SKILLS } from "../../data/skills"
import SectionHeading from "../ui/SectionHeading"
import SkillCard from "../ui/SkillCard"

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="مهارت‌ها"
          title="تکنولوژی‌هایی که با آن‌ها کار می‌کنم"
          subtitle="ابزارها و زبان‌هایی که هر روز برای ساخت رابط‌های کاربری مدرن و سریع از آن‌ها استفاده می‌کنم."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {SKILLS.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
