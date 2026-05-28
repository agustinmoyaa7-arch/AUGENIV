import { Check, ArrowRight } from "lucide-react"
import { buildWhatsAppLink } from "../whatsapp-button"

type Plan = {
  id: string
  name: string
  price: string
  desc: string
  features: string[]
  badge?: string
  variant: "default" | "highlight" | "premium"
}

const PLANS: Plan[] = [
  {
    id: "principiante",
    name: "Principiante",
    price: "$19.900",
    desc: "Ideal para empezar desde cero",
    features: [
      "Plan de entrenamiento personalizado",
      "App personalizada",
      "2 reuniones por Zoom por semana",
      
    ],
    variant: "default",
  },
  {
    id: "intermedio",
    name: "Intermedio",
    price: "$24.900",
    desc: "Para seguir progresando con estructura",
    features: [
      "Plan de entrenamiento personalizado",
      "App personalizada",
      "2 reuniones por Zoom por semana",
      "Acceso a canal de WhatsApp",
    ],
    badge: "MÁS ELEGIDO",
    variant: "highlight",
  },
  {
    id: "avanzado",
    name: "Avanzado",
    price: "$39.900",
    desc: "Para quienes buscan su máximo potencial",
    features: [
      "Plan de entrenamiento personalizado",
      "App personalizada",
      "3 reuniones por Zoom por semana",
      "2 reuniones 1 a 1 por mes",
      "Acceso a canal de WhatsApp",
      "Prioridad en seguimiento",
    ],
    variant: "premium",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const isPremium = plan.variant === "premium"
  const isHighlight = plan.variant === "highlight"

  const cardClasses = isPremium
    ? "bg-[color:var(--brand-crimson)] text-white border-[color:var(--brand-crimson)]"
    : isHighlight
      ? "bg-card text-card-foreground border-[color:var(--brand-crimson)]/60 ring-1 ring-[color:var(--brand-crimson)]/40"
      : "bg-card text-card-foreground border-border"

  const checkColor = isPremium ? "text-white" : "text-[color:var(--brand-crimson)]"
  const subTextColor = isPremium ? "text-white/80" : "text-muted-foreground"
  const dividerColor = isPremium ? "border-white/15" : "border-border"

  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${cardClasses}`}
    >
      {plan.badge && (
        <div className="absolute right-6 top-6 rounded-full bg-[color:var(--brand-crimson)] px-3 py-1 text-[9px] font-bold tracking-[0.25em] text-white uppercase">
          {plan.badge}
        </div>
      )}

      <p className={`text-[10px] tracking-[0.4em] uppercase ${subTextColor}`}>Plan</p>
      <h3 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
        {plan.name.toUpperCase()}
      </h3>
      <p className={`mt-2 font-serif text-sm leading-relaxed ${subTextColor}`}>{plan.desc}</p>

      <div className={`mt-7 border-y py-6 ${dividerColor}`}>
        <p className="font-display text-5xl font-black leading-none tracking-tight">
          {plan.price}
        </p>
        <p className={`mt-2 text-xs tracking-[0.2em] uppercase ${subTextColor}`}>por mes</p>
      </div>

      <ul className="mt-7 space-y-3.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                isPremium ? "bg-white/15" : "bg-[color:var(--brand-crimson)]/12"
              } ${checkColor}`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={isPremium ? "text-white" : "text-foreground"}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(`Hola Angel, quiero el plan ${plan.name}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-bold tracking-[0.25em] uppercase transition",
          isPremium
            ? "bg-white text-[color:var(--brand-crimson)] hover:bg-white/90"
            : "bg-[color:var(--brand-crimson)] text-white hover:brightness-110",
        ].join(" ")}
      >
        Elegir plan
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  )
}

export function Planes() {
  return (
    <section id="planes" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[color:var(--brand-crimson)]" />
            Suscripciones mensuales
          </p>
          <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            ELEGÍ <span className="text-[color:var(--brand-crimson)]">TU PLAN</span>
          </h2>
          <p className="mt-5 max-w-xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tres niveles, un mismo compromiso: entrenarte como atleta serio con un coach real
            detrás de cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Sin permanencia · Cancelás cuando quieras
        </p>
      </div>
    </section>
  )
}
