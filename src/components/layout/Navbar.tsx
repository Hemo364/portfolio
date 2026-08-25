import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HiBars3 } from "react-icons/hi2"
import { NAV_ITEMS } from "../../data/nav"
import { useActiveSection } from "../../hooks/useActiveSection"
import { scrollToId } from "../../lib/scroll"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-blue-100 bg-white/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("hero")
            }}
            className="text-lg font-extrabold tracking-tight text-slate-900"
          >
            حسام<span className="gradient-text">.</span>محمدیان
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
                >
                  {activeId === item.id ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-0 rounded-full bg-blue-50"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : null}
                  <span className={`relative ${activeId === item.id ? "text-blue-700" : ""}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="cursor-pointer rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              ارتباط با من
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="باز کردن منو"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-slate-700 hover:bg-blue-50 md:hidden"
          >
            <HiBars3 size={24} />
          </button>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavClick}
      />
    </>
  )
}
