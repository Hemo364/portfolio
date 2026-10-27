import { motion } from "framer-motion"
import { CONTACT_LINKS } from "../../data/contact"
import ContactCard from "../ui/ContactCard"
import SectionHeading from "../ui/SectionHeading"

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="تماس با ما"
          title="بیا باهم حرف بزنیم"
          subtitle="برای همکاری، پیشنهاد پروژه یا فقط یک سلام دوستانه، از یکی از راه‌های زیر با من در ارتباط باشید."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {CONTACT_LINKS.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
