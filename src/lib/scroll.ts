const NAVBAR_OFFSET = 76

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches

  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  })
}
