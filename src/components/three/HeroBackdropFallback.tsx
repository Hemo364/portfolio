export default function HeroBackdropFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-10 right-1/4 h-64 w-64 animate-float rounded-full bg-gradient-to-br from-blue-300/40 to-sky-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 animate-float rounded-full bg-gradient-to-tr from-blue-200/40 to-blue-100/30 blur-3xl [animation-delay:1.5s]" />
    </div>
  )
}
