import { motion } from "framer-motion"
import type { MouseEvent, ReactNode } from "react"

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: "primary" | "ghost"
  icon?: ReactNode
  target?: string
  rel?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700"
      : "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50"

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {children}
      {icon}
    </motion.a>
  )
}
