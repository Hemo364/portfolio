import { motion } from "framer-motion"
import { HiOutlineArrowUpLeft } from "react-icons/hi2"
import type { Project } from "../../data/projects"

interface ProjectCardProps {
  project: Project
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white p-7 shadow-card transition-colors duration-300 hover:border-blue-300"
    >
      <div
        className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-sky-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white">
          <HiOutlineArrowUpLeft size={18} aria-hidden="true" />
        </span>
      </div>
      <p className="relative mt-3 text-sm leading-6 text-slate-500">
        {project.description}
      </p>
      <div className="relative mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
