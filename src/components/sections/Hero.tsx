import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { lazy, Suspense } from "react"
import { HiOutlineArrowUpLeft, HiOutlineChatBubbleLeftRight } from "react-icons/hi2"
import profileImage from "../../assets/profile.jpg"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { scrollToId } from "../../lib/scroll"
import Button from "../ui/Button"
import HeroBackdropFallback from "../three/HeroBackdropFallback"

const Hero3D = lazy(() => import("../three/Hero3D"))

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Hero() {
  const canRender3D = useMediaQuery("(min-width: 768px)")
  const prefersReducedMotion = useReducedMotion()
  const show3D = canRender3D && !prefersReducedMotion

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:flex-row-reverse lg:gap-16 lg:pb-28 lg:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-right"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            در دسترس برای همکاری
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            سلام، من <span className="gradient-text">حسام محمدیان</span> هستم
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg font-medium text-blue-700"
          >
           دانشجو مهندسی کامپیوتر دانشگاه صنعتی شیراز و توسعه دهنده فرانت اند
          </motion.p>

          <motion.p variants={item} className="mt-3 max-w-xl leading-8 text-slate-500">
            با استفاده از React، Next.js و TypeScript، رابط‌های کاربری سریع، تمیز و
            واکنش‌گرا می‌سازم؛ با تمرکز بر تجربه کاربری و جزئیات بصری.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              href="#projects"
              icon={<HiOutlineArrowUpLeft size={18} />}
              onClick={(e) => {
                e.preventDefault()
                scrollToId("projects")
              }}
            >
              مشاهده نمونه کارها
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              icon={<HiOutlineChatBubbleLeftRight size={18} />}
              onClick={(e) => {
                e.preventDefault()
                scrollToId("contact")
              }}
            >
              ارتباط با من
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96">
            {show3D ? (
              <Suspense fallback={<HeroBackdropFallback />}>
                <Hero3D />
              </Suspense>
            ) : (
              <HeroBackdropFallback />
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-44 w-44 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 opacity-20 blur-2xl" />
                <img
                  src={profileImage}
                  alt="حسام محمدیان"
                  width={288}
                  height={288}
                  className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-2xl shadow-blue-900/20 ring-2 ring-blue-200"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
