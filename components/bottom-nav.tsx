"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Home, User, Dumbbell, ShoppingBag, Mail } from "lucide-react"

type Item = {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  /** When set, scrolls to this id within the home page */
  scrollTo?: string
  /** When true, render only the icon (no label) */
  iconOnly?: boolean
}

const ITEMS: Item[] = [
  { id: "inicio", label: "Inicio", icon: Home, href: "/", scrollTo: "inicio", iconOnly: true },
  { id: "sobre-mi", label: "Sobre Mí", icon: User, href: "/", scrollTo: "sobre-mi", iconOnly: true },
  { id: "planes", label: "Planes", icon: Dumbbell, href: "/", scrollTo: "planes", iconOnly: true },
  { id: "tienda", label: "Tienda", icon: ShoppingBag, href: "/tienda" },
  { id: "contacto", label: "Contacto", icon: Mail, href: "/", scrollTo: "contacto" },
]

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeScroll, setActiveScroll] = React.useState<string>("inicio")

  // Track scroll for active home section
  React.useEffect(() => {
    if (pathname !== "/") return
    const ids = ITEMS.filter((i) => i.scrollTo).map((i) => i.scrollTo!) as string[]
    const handler = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActiveScroll(current)
    }
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [pathname])

  const handleScrollClick = (e: React.MouseEvent, item: Item) => {
    if (pathname !== "/") {
      // Navigate to home with hash, then let next paint scroll
      e.preventDefault()
      router.push(`/#${item.scrollTo}`)
      return
    }
    e.preventDefault()
    const el = document.getElementById(item.scrollTo!)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", `#${item.scrollTo}`)
      setActiveScroll(item.scrollTo!)
    }
  }

  const isActive = (item: Item) => {
    if (item.id === "tienda") return pathname.startsWith("/tienda")
    if (pathname !== "/") return false
    return activeScroll === item.scrollTo
  }

  return (
    <>
      {/* Floating CTA above the nav */}
      <Link
        href={`/#planes`}
        onClick={(e) => {
          if (pathname === "/") {
            e.preventDefault()
            document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className={[
          "fixed left-1/2 -translate-x-1/2 z-[60]",
          "bottom-[calc(env(safe-area-inset-bottom)+86px)]",
          "rounded-full px-6 py-3",
          "bg-[color:var(--brand-crimson)] text-white",
          "border border-white/10 backdrop-blur",
          "font-sans text-xs font-semibold tracking-[0.22em] uppercase",
          "shadow-[0_10px_30px_-10px_rgba(134,11,31,0.7)]",
          "hover:brightness-110 active:scale-95 transition",
        ].join(" ")}
      >
        Empezá Ahora
      </Link>

      <nav
        aria-label="Navegación principal"
        className={[
          "fixed bottom-0 left-0 right-0 z-[55]",
          "glass-nav safe-bottom",
        ].join(" ")}
      >
        <ul className="mx-auto flex max-w-xl items-center justify-between gap-1 px-3 py-2">
          {ITEMS.map((item) => {
            const Icon = item.icon
            const active = isActive(item)
            const common =
              "group relative flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2.5 transition-all duration-300"
            const activeCls = active
              ? "bg-[color:var(--brand-crimson)] text-white"
              : "text-foreground/70 hover:text-foreground"
            const iconSize = item.iconOnly ? "h-6 w-6" : "h-5 w-5"
            const content = (
              <>
                <Icon className={iconSize} aria-hidden />
                {!item.iconOnly && (
                  <span className="font-sans text-[10px] font-medium tracking-wider uppercase">
                    {item.label}
                  </span>
                )}
                {item.iconOnly && <span className="sr-only">{item.label}</span>}
              </>
            )
            if (item.scrollTo) {
              return (
                <li key={item.id} className="flex-1">
                  <a
                    href={`#${item.scrollTo}`}
                    onClick={(e) => handleScrollClick(e, item)}
                    aria-label={item.iconOnly ? item.label : undefined}
                    className={`${common} ${activeCls}`}
                  >
                    {content}
                  </a>
                </li>
              )
            }
            return (
              <li key={item.id} className="flex-1">
                <Link
                  href={item.href}
                  aria-label={item.iconOnly ? item.label : undefined}
                  className={`${common} ${activeCls}`}
                >
                  {content}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
