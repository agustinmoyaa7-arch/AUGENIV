"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={[
        "fixed top-4 right-4 z-[80]",
        "flex items-center gap-2 rounded-full px-3 py-2",
        "border border-[color:var(--brand-crimson)]/60",
        "bg-background/40 backdrop-blur-md",
        "text-foreground hover:text-white",
        "hover:bg-[color:var(--brand-crimson)] hover:border-[color:var(--brand-crimson)]",
        "transition-all duration-300 shadow-sm",
        "text-xs font-medium tracking-widest uppercase",
      ].join(" ")}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Claro</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Oscuro</span>
        </>
      )}
    </button>
  )
}
