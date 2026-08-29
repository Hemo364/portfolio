export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href: string
}


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
    title: "پروژه پنل ادمین",
    description:
      "اجرا پروژه  پنل ادمین برای فروشگاه کیف و کفش",
    tags: ["Javascript", "React", "Tailwind CSS"],
    href: "https://admin-panel-xi-khaki.vercel.app/tasks",
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
