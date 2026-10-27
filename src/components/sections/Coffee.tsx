import { motion } from "framer-motion"
import { FaMugHot } from "react-icons/fa"
import { HiOutlineArrowUpLeft, HiOutlineHeart } from "react-icons/hi2"
import { COFFEE_LINK } from "../../data/support"

const PERKS = ["انرژی برای پروژه‌های بعدی"]

// coffee beans scattered around the banner — positions are percentages of the card
const BEANS = [
  { top: "12%", left: "6%", size: 22, rotate: -30, delay: 0 },
  { top: "70%", left: "12%", size: 16, rotate: 40, delay: 1.2 },
  { top: "20%", left: "42%", size: 14, rotate: 15, delay: 2.1 },
  { top: "80%", left: "48%", size: 20, rotate: -55, delay: 0.6 },
  { top: "8%", left: "88%", size: 18, rotate: 60, delay: 1.7 },
  { top: "86%", left: "92%", size: 14, rotate: -10, delay: 2.6 },
]

function Bean({ size, rotate }: { size: number; rotate: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 20 26" style={{ rotate: `${rotate}deg` }}>
      <ellipse cx="10" cy="13" rx="9" ry="12" fill="currentColor" />
      <path d="M10 2c-3 5 3 9 0 22" stroke="rgb(255 255 255 / 35%)" strokeWidth="1.6" fill="none" />
    </svg>
  )
}

function CoffeeCup() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full drop-shadow-2xl" aria-hidden="true">
      {/* steam */}
      <g fill="none" stroke="white" strokeWidth="5" strokeLinecap="round">
        <path className="animate-steam" d="M82 78c-10-12 10-20 0-34s8-22 0-30" />
        <path className="animate-steam [animation-delay:0.8s]" d="M108 74c-10-12 10-20 0-34s8-22 0-30" />
        <path className="animate-steam [animation-delay:1.6s]" d="M134 78c-10-12 10-20 0-34s8-22 0-30" />
      </g>

      {/* saucer */}
      <ellipse cx="110" cy="190" rx="86" ry="16" fill="rgb(15 23 42 / 18%)" />
      <ellipse cx="110" cy="184" rx="86" ry="16" fill="#e0f2fe" />
      <ellipse cx="110" cy="182" rx="56" ry="9" fill="#bae6fd" />

      {/* handle */}
      <path d="M164 112c30-4 34 44 2 50" fill="none" stroke="white" strokeWidth="13" strokeLinecap="round" />

      {/* mug body */}
      <path d="M44 96h132l-12 74c-2 10-10 16-20 16H76c-10 0-18-6-20-16z" fill="white" />
      <path d="M52 140h116l-4 30c-2 10-10 16-20 16H76c-10 0-18-6-20-16z" fill="#dbeafe" />

      {/* coffee surface with latte-art heart */}
      <ellipse cx="110" cy="96" rx="66" ry="14" fill="#7c4a2d" />
      <ellipse cx="110" cy="94" rx="58" ry="10" fill="#a16207" />
      <path d="M110 102c-14-8-18-12-14-16 3-3 8-2 14 3 6-5 11-6 14-3 4 4 0 8-14 16z" fill="#fef3c7" />
    </svg>
  )
}

export default function Coffee() {
  return (
    <section id="coffee" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-blue-700 via-blue-600 to-sky-500 px-6 py-12 shadow-glow sm:px-12 sm:py-16"
        >
          <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-amber-300/25 blur-3xl" aria-hidden="true" />

          {BEANS.map((bean, i) => (
            <span
              key={i}
              className="absolute animate-float text-amber-900/30"
              style={{ top: bean.top, left: bean.left, animationDelay: `${bean.delay}s` }}
              aria-hidden="true"
            >
              <Bean size={bean.size} rotate={bean.rotate} />
            </span>
          ))}

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="text-center lg:text-start">
              

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                منو یه قهوه مهمون می‌کنی؟
                <span className="mr-2 inline-block">☕</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-blue-50/90 lg:mx-0">
                اگه از کارهام خوشت اومده یا جایی به دردت خورده، با یه قهوه‌ی کوچیک می‌تونی
                بهم انرژی بدی تا پروژه‌های بیشتری بسازم و به اشتراک بذارم.
              </p>

              <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {PERKS.map((perk) => (
                  <li
                    key={perk}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20"
                  >
                    <HiOutlineHeart size={14} className="text-amber-200" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <motion.a
                  href={COFFEE_LINK.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-7 py-3.5 text-base font-bold text-blue-700 shadow-xl shadow-blue-900/30 transition-colors hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition-transform duration-300 group-hover:-rotate-12">
                    <FaMugHot size={16} aria-hidden="true" />
                  </span>
                  یه قهوه مهمونم کن
                  <HiOutlineArrowUpLeft
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </motion.a>
                <span dir="ltr" className="text-sm text-blue-100/80">
                  {COFFEE_LINK.handle}
                </span>
              </div>
            </div>

            <div className="mx-auto h-52 w-52 animate-float sm:h-64 sm:w-64">
              <CoffeeCup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
