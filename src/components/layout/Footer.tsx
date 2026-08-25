import { CONTACT_LINKS } from "../../data/contact"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-slate-500">
          © {year} حسام محمدیان — کلیه حقوق محفوظ است.
        </p>

        <div className="flex items-center gap-3">
          {CONTACT_LINKS.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.id}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
