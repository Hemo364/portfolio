import { motion } from "framer-motion"
import { PROJECTS } from "../../data/projects"
import ProjectCard from "../ui/ProjectCard"
import SectionHeading from "../ui/SectionHeading"

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="نمونه کار ها"
          title="چند نمونه از پروژه‌های من"
          subtitle="مجموعه‌ای در حال رشد از پروژه‌ها؛ لینک هر پروژه به‌تدریج تکمیل می‌شود."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
