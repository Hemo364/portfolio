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
    title: "نمونه‌کار شماره یک",
    description:
      "یک رابط کاربری مدرن و واکنش‌گرا ساخته‌شده با React و TypeScript، با تمرکز بر تجربه کاربری روان.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
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
