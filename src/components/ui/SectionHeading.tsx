import { motion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
    >
      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-7 text-slate-500">{subtitle}</p>
      ) : null}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-l from-blue-600 to-sky-400" />
    </motion.div>
  )
}
