"use client"

import * as React from "react"
import { Apple, Dumbbell, Video, ArrowRight, ShoppingBag, Gift, X, ChevronLeft, ChevronRight} from "lucide-react"
import { buildWhatsAppLink } from "../whatsapp-button"

type Category = "Todos" | "Nutrición" | "Entrenamiento" | "Sesiones 1 a 1" | "Gratis"

type Product = {
  id: string
  category: Exclude<Category, "Todos">
  name: string
  price: string
  desc: string
  message: string
  pdfPath?: string
  mpLink?: string
}

const PRODUCTS: Product[] = [
  {
    id: "free-hipertrofia",
    category: "Gratis",
    name: "Guía de Hipertrofia para Principiantes",
    price: "GRATIS",
    desc: "PDF básico para empezar a ganar músculo desde cero. Todo lo que necesitás saber.",
    message: "Hola Angel, quiero descargar la Guía de Hipertrofia gratuita",
    pdfPath: "/recursos/guia1.pdf",
  },
  {
    id: "nut-basico",
    category: "Nutrición",
    name: "Plan Nutricional Básico",
    price: "$12.000",
    desc: "Guía alimentaria personalizada según tu objetivo.",
    message: "Hola Angel, me interesa el Plan Nutricional Básico",
  },
  {
    id: "nut-pro",
    category: "Nutrición",
    name: "Plan Nutricional Pro",
    price: "$18.000",
    desc: "Con seguimiento mensual y ajustes semanales.",
    message: "Hola Angel, me interesa el Plan Nutricional Pro",
  },
  {
    id: "ent-4",
    category: "Entrenamiento",
    name: "Plan de Entrenamiento 4 Semanas",
    price: "$9.900",
    desc: "Programa completo descargable, listo para ejecutar.",
    message: "Hola Angel, me interesa el Plan de Entrenamiento 4 semanas",
  },
  {
    id: "ent-12",
    category: "Entrenamiento",
    name: "Plan de Entrenamiento 12 Semanas",
    price: "$24.900",
    desc: "Periodización completa con progresión inteligente.",
    message: "Hola Angel, me interesa el Plan de Entrenamiento 12 semanas",
  },
  {
    id: "ses-1",
    category: "Sesiones 1 a 1",
    name: "Sesión 1 a 1 por Zoom (1h)",
    price: "$8.000",
    desc: "Consulta personalizada uno-a-uno con Angel.",
    message: "Hola Angel, me interesa una Sesión 1 a 1 por Zoom",
  },
  {
    id: "ses-pack",
    category: "Sesiones 1 a 1",
    name: "Pack 4 Sesiones 1 a 1",
    price: "$28.000",
    desc: "Acompañamiento mensual intensivo y sostenido.",
    message: "Hola Angel, me interesa el Pack 4 Sesiones 1 a 1",
  },
]

const CATEGORIES: Category[] = ["Todos", "Nutrición", "Entrenamiento", "Sesiones 1 a 1", "Gratis"]

const CATEGORY_ICON: Record<Exclude<Category, "Todos">, React.ComponentType<{ className?: string; strokeWidth?: number }>> =
  {
    Nutrición: Apple,
    Entrenamiento: Dumbbell,
    "Sesiones 1 a 1": Video,
    Gratis: Gift,
  }

export function TiendaClient() {
  const [active, setActive] = React.useState<Category>("Todos")
  const [previewProduct, setPreviewProduct] = React.useState<Product | null>(null)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const scroll = (dir: "left" | "right") => {
  scrollRef.current?.scrollBy({ left: dir === "right" ? 150 : -150, behavior: "smooth" })
  }
  

  const filtered = React.useMemo(
    () => (active === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  )

  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 sm:px-10 sm:pt-32">

      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-border pb-10">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
          <ShoppingBag className="h-3.5 w-3.5 text-[color:var(--brand-crimson)]" />
          <span>AUGENIV · Tienda</span>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              TIENDA
            </h1>
            <p className="mt-3 max-w-xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
              Llevá tu entrenamiento al siguiente nivel.
            </p>
          </div>

          <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
            {filtered.length.toString().padStart(2, "0")} productos
          </p>
        </div>
      </div>

{/* Filters */}
<div className="relative flex items-center gap-2 mt-8">
  <button
    onClick={() => scroll("left")}
    className="shrink-0 rounded-full border border-border bg-card p-2 text-muted-foreground hover:text-foreground transition"
  >
    <ChevronLeft className="h-4 w-4" />
  </button>

  <div ref={scrollRef} className="scrollbar-hide flex gap-2 overflow-x-auto">
    {CATEGORIES.map((c) => {
      const isActive = c === active
      return (
        <button
          key={c}
          type="button"
          onClick={() => setActive(c)}
          className={[
            "shrink-0 rounded-full border px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition",
            isActive
              ? "border-[color:var(--brand-crimson)] bg-[color:var(--brand-crimson)] text-white"
              : "border-border bg-card text-foreground/80 hover:border-[color:var(--brand-crimson)]/50 hover:text-foreground",
          ].join(" ")}
        >
          {c}
        </button>
      )
    })}
  </div>

  <button
    onClick={() => scroll("right")}
    className="shrink-0 rounded-full border border-border bg-card p-2 text-muted-foreground hover:text-foreground transition"
  >
    <ChevronRight className="h-4 w-4" />
  </button>
</div>
    
  {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const Icon = CATEGORY_ICON[p.category]
          return (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-crimson)]/60"
            >
              {/* Image area */}
              <div className="relative h-56 overflow-hidden bg-[linear-gradient(140deg,#39000A_0%,#1a1212_55%,#221717_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(134,11,31,0.35),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-20 w-20 text-white/85" strokeWidth={1.4} />
                </div>
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[9px] font-semibold tracking-[0.3em] text-white uppercase backdrop-blur">
                  {p.category}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      Precio
                    </p>
                    <p className={[
                      "font-display text-2xl font-black",
                      p.category === "Gratis"
                        ? "text-emerald-500"
                        : "text-[color:var(--brand-crimson)]",
                    ].join(" ")}>
                      {p.price}
                    </p>
                  </div>

                  {p.category === "Gratis" ? (
                    <button
                      type="button"
                      onClick={() => setPreviewProduct(p)}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-white transition hover:brightness-110"
                    >
                      Ver PDF
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  ) : (
                    <a
                      href={p.mpLink ?? buildWhatsAppLink(p.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Comprar ${p.name} por WhatsApp`}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-crimson)] px-4 py-2.5 font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-white transition hover:brightness-110"
                    >
                      Comprar
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 rounded-3xl border border-border bg-card/60 p-12 text-center">
          <p className="font-display text-2xl font-bold text-foreground">Sin productos</p>
          <p className="mt-2 text-sm text-muted-foreground">
            No encontramos productos en esta categoría todavía.
          </p>
        </div>
      )}

      {/* Modal vista previa PDF */}
      {previewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setPreviewProduct(null)}
        >
          <div
            className="relative flex flex-col w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden bg-card border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
              <p className="font-display text-sm font-bold tracking-wide truncate pr-4">
                {previewProduct.name}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={previewProduct.pdfPath}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-white hover:brightness-110 transition"
                >
                  Descargar
                  <ArrowRight className="h-3 w-3" />
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewProduct(null)}
                  className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Vista previa iframe */}
            <iframe
              src={previewProduct.pdfPath}
              className="flex-1 w-full"
              title={`Vista previa: ${previewProduct.name}`}
            />
          </div>
        </div>
      )}

    </div>
  )
}