import type { IconType } from "react-icons"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { SiInstagram, SiTelegram } from "react-icons/si"

export interface ContactLink {
  id: string
  label: string
  value: string
  href: string
  icon: IconType
  color: string
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "telegram",
    label: "تلگرام",
    value: "@hesam_364",
    href: "https://t.me/hesam_364",
    icon: SiTelegram,
    color: "#26A5E4",
  },
  {
    id: "instagram",
    label: "اینستاگرام",
    value: "hsm_364m",
    href: "https://instagram.com/hsm_364m",
    icon: SiInstagram,
    color: "#E1306C",
  },
  {
    id: "email",
    label: "ایمیل",
    value: "mohamadianhesam364@gmail.com",
    href: "mailto:mohamadianhesam364@gmail.com",
    icon: HiOutlineEnvelope,
    color: "#2563EB",
  },
]
