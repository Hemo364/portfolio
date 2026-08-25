import { AnimatePresence, motion } from "framer-motion"
import { HiXMark } from "react-icons/hi2"
import { NAV_ITEMS } from "../../data/nav"

interface MobileMenuProps {
  open: boolean
  activeId: string
  onClose: () => void
  onNavigate: (id: string) => void
}

export default function MobileMenu({ open, activeId, onClose, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80vw] flex-col bg-white p-6 shadow-2xl md:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">منو</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="بستن منو"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-slate-500 hover:bg-blue-50 hover:text-blue-700"
              >
                <HiXMark size={22} />
              </button>
            </div>

            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`w-full cursor-pointer rounded-xl px-4 py-3 text-right text-base font-medium transition-colors ${
                      activeId === item.id
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="mt-auto cursor-pointer rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700"
            >
              ارتباط با من
            </button>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
