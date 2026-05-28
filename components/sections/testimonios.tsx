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
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-sans text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-[color:var(--brand-crimson)]" />
              Resultados Reales
            </p>
            <h2 className="font-display text-4xl leading-[0.95] sm:text-6xl">
              <span className="text-[color:var(--brand-crimson)]">TESTIMONIOS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Testimonio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-[color:var(--brand-crimson)] hover:text-white hover:border-[color:var(--brand-crimson)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Siguiente testimonio"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-[color:var(--brand-crimson)] hover:text-white hover:border-[color:var(--brand-crimson)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10"
        >
          {ITEMS.map((t) => (
            <article
              key={t.name}
              className="group relative flex w-[88vw] max-w-[460px] shrink-0 snap-start flex-col rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-md sm:w-[420px] sm:p-7"
            >
              {/* Video at top */}
              <VideoPlayer src={t.videoSrc} poster={t.poster} />

              {/* Quote */}
              <div className="relative mt-6">
                <Quote className="absolute -top-1 right-0 h-9 w-9 text-[color:var(--brand-crimson)]/20" />
                <p className="font-serif text-base italic leading-relaxed text-foreground/90 sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-crimson)] font-display text-base text-white">
                  {t.initials}
                </div>
                <div className="flex-1">
                  <p className="font-display text-lg leading-none text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-1 font-sans text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                    Nivel {t.level}
                  </p>
                </div>
                <span className="rounded-full border border-[color:var(--brand-crimson)]/40 px-2.5 py-1 font-sans text-[9px] font-semibold tracking-[0.2em] text-[color:var(--brand-crimson)] uppercase">
                  {t.level}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {ITEMS.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-[color:var(--brand-crimson)]" : "w-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
