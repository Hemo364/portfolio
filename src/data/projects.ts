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
    id:"p3",
    title:"پنل ادمین فروشگاه RCH",
    description:"مدیریت فروشگاه\nیوزرنیم: Admin | پسورد: Admin@12345",
    tags:["React","TypeScript","Tailwind CSS"],
    href:"https://arch-shop-ten.vercel.app/admin"

  },
  {
    id: "p2",
    title: "فروشگاه لوازم آرایشی بهداشتی کالا بیوتی",
    description:
      "طراحی سایت فروشگاه کالا بیوتی در شهرستان نیشابور",
    tags: ["wordpress"],
    href: "https://kala-beauty.ir",
  },
  {
    id: "p3",
    title: "پروژه پنل ادمین",
    description:
      "اجرا پروژه  پنل ادمین برای فروشگاه کیف و کفش",
    tags: ["Javascript", "React", "Tailwind CSS"],
    href: "https://admin-panel-xi-khaki.vercel.app/tasks",
  },
]
