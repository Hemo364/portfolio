import { motion } from "framer-motion"
import { useState } from "react"
import type { MouseEvent } from "react"
import { HiOutlineClipboardDocument, HiOutlineClipboardDocumentCheck } from "react-icons/hi2"
import type { ContactLink } from "../../data/contact"

interface ContactCardProps {
  contact: ContactLink
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactCard({ contact }: ContactCardProps) {
  const [copied, setCopied] = useState(false)
  const Icon = contact.icon

  const handleCopy = async (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    try {
      await navigator.clipboard.writeText(contact.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API unavailable — silently ignore, link is still clickable
    }
  }

  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="glass-card group relative flex flex-col items-center gap-4 rounded-2xl p-8 text-center transition-shadow duration-300 hover:shadow-glow"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${contact.color}1a` }}
      >
        <Icon size={30} color={contact.color} aria-hidden="true" />
      </div>
      <div>
        <p className="font-semibold text-slate-800">{contact.label}</p>
        <p dir="ltr" className="mt-1 text-sm text-slate-500">
          {contact.value}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`کپی ${contact.label}`}
        className="absolute end-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
      >
        {copied ? (
          <HiOutlineClipboardDocumentCheck size={18} className="text-blue-600" />
        ) : (
          <HiOutlineClipboardDocument size={18} />
        )}
      </button>
    </motion.a>
  )
}
