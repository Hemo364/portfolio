import type { IconType } from "react-icons"
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si"

export interface Skill {
  id: string
  label: string
  icon: IconType
  color: string
  /** میزان تسلط از ۰ تا ۱۰۰ — همین عدد باعث پر شدن خط زیر هر اسکیل می‌شود. برای تغییر، فقط این عدد را ویرایش کنید. */
  level: number
}

export const SKILLS: Skill[] = [
  { id: "js", label: "جاوااسکریپت", icon: SiJavascript, color: "#F7DF1E", level: 92 },
  { id: "react", label: "ری‌اکت", icon: SiReact, color: "#61DAFB", level: 95 },
  { id: "ts", label: "تایپ‌اسکریپت", icon: SiTypescript, color: "#3178C6", level: 88 },
  { id: "next", label: "Next.js", icon: SiNextdotjs, color: "#111827", level: 43 },
  { id: "tailwind", label: "تیلویند سی‌اس‌اس", icon: SiTailwindcss, color: "#06B6D4", level: 93 },
  { id: "html", label: "اچ‌تی‌ام‌ال", icon: SiHtml5, color: "#E34F26", level: 97 },
  { id: "css", label: "سی‌اس‌اس", icon: SiCss, color: "#1572B6", level: 94 },
  {id:"wordpress",label:"ورد پرس",icon:SiWordpress,color:"#3858E9", level:100},
]
