import type { IconType } from "react-icons"
import { FaPhoneAlt } from "react-icons/fa"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { SiTelegram } from "react-icons/si"

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
    id: "phone",
    label: "شماره تماس",
    value: "09159799345",
    href: "tel:+989159799345",
    icon: FaPhoneAlt,
    color: "#2563EB",
  },
  {
    id: "telegram",
    label: "تلگرام",
    value: "@hesam_364",
    href: "https://t.me/hesam_364",
    icon: SiTelegram,
    color: "#26A5E4",
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
