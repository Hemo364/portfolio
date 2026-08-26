export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href: string
}

// لینک هر پروژه فعلاً موقتی است — با تکمیل هر نمونه‌کار، مقدار href را با آدرس واقعی جایگزین کنید.
export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "سایت فروشگاهی موتورسیکلت",
    description:
      "اجرا پروژه فروشگاه موتورسیکلت ARCH در مهرشهر کرج",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://arch-shop-ten.vercel.app/",
  },
  {
    id: "p2",
    title: "نمونه‌کار شماره دو",
    description:
      "یک اپلیکیشن وب با Next.js که روی کارایی، سئو و طراحی تمیز تمرکز دارد.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    href: "#",
  },
  {
    id: "p3",
    title: "نمونه‌کار شماره سه",
    description:
      "پیاده‌سازی یک صفحه فرود تعاملی با انیمیشن‌های ظریف و طراحی UI/UX استاندارد.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    href: "#",
  },
]
