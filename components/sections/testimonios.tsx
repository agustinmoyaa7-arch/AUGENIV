"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Quote, Play } from "lucide-react"

type Testimonial = {
  name: string
  level: "Principiante" | "Intermedio" | "Avanzado"
  quote: string
  initials: string
  /** Video URL - to be filled by client */
  videoSrc?: string
  /** Optional thumbnail image for the video */
  poster?: string
}

const ITEMS: Testimonial[] = [
  {
    name: "Lucas M.",
    level: "Intermedio",
    quote: "Desde que entreno con Angel, subí 7kg de masa muscular y aprendí más en 3 meses que en años entrenando solo.",
    initials: "LM",
    videoSrc: "/videos/lucas.mp4",
    poster: "/videos/lucas-miniatura.png",
  },
  {
    name: "Matías R.",
    level: "Avanzado",
    quote: "La atención, el seguimiento y la motivación son increíbles. 100% recomendado para quien busca resultados serios.",
    initials: "MR",
    videoSrc: "/videos/matias.mp4",
    poster: "/videos/matias-miniatura.png",
  },
  {
    name: "Tomás V.",
    level: "Principiante",
    quote: "Me cambió la mentalidad y el físico. No es solo entrenamiento, es un estilo de vida.",
    initials: "TV",
    videoSrc: "/videos/tomas.mp4",
    poster: "/videos/tomas-miniatura.png",
  },
]


function VideoPlayer({ src, poster }: { src?: string; poster?: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = React.useState(false)

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    setPlaying(true)
    // Reveal native controls and start playback
    v.controls = true
    v.play().catch(() => {
      // If playback fails (e.g. no src), keep overlay visible
      setPlaying(false)
      v.controls = false
    })
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[linear-gradient(140deg,#39000A_0%,#1a1212_55%,#221717_100%)]">
      {/* Decorative crimson glow on the placeholder */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(134,11,31,0.35),transparent_60%)]" />

      <video
        ref={videoRef}
        src={src || undefined}
        poster={poster || undefined}
        preload="metadata"
        playsInline
        className="relative h-full w-full object-cover"
      />

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Reproducir testimonio en video"
          className="absolute inset-0 flex items-center justify-center transition-colors hover:bg-black/15"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--brand-crimson)] text-white shadow-[0_15px_40px_-10px_rgba(134,11,31,0.7)] transition-transform hover:scale-110">
            <Play className="h-7 w-7 translate-x-[2px] fill-white" strokeWidth={0} />
          </span>
        </button>
      )}
    </div>
  )
}

export function Testimonios() {
  const [index, setIndex] = React.useState(0)
  const trackRef = React.useRef<HTMLDivElement>(null)

  const goTo = (i: number) => {
    const next = (i + ITEMS.length) % ITEMS.length
    setIndex(next)
    const el = trackRef.current
    if (el) {
      const child = el.children[next] as HTMLElement | undefined
      if (child) {
        el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* Coming Soon Banner */}
        <div className="mb-12 rounded-3xl border-2 border-[color:var(--brand-crimson)]/40 bg-gradient-to-br from-[color:var(--brand-crimson)]/10 to-[color:var(--brand-crimson)]/5 p-16 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[color:var(--brand-crimson)] uppercase font-semibold">
            Nuevos contenidos
          </p>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl font-black tracking-tight text-foreground">
            PRÓXIMAMENTE
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-serif text-base sm:text-lg leading-relaxed text-muted-foreground">
            Estamos preparando testimonios en video de nuestros clientes compartiendo sus historias de transformación. ¡Muy pronto podrás conocer sus logros en primera persona!
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-crimson)]/40 bg-[color:var(--brand-crimson)]/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[color:var(--brand-crimson)] animate-pulse" />
            <span className="text-xs tracking-[0.2em] text-[color:var(--brand-crimson)] uppercase font-semibold">En desarrollo</span>
          </div>
        </div>

        {/* Original Testimonios Header (optional - can be hidden or shown) */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-sans text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-[color:var(--brand-crimson)]" />
              Resultados Reales
            </p>
            <h3 className="font-display text-4xl leading-[0.95] sm:text-5xl">
              <span className="text-[color:var(--brand-crimson)]">TESTIMONIOS</span>
            </h3>
          </div>
        </div>

      </div>
    </section>
  )
}
