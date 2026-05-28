import {
  ClipboardList,
  TrendingUp,
  Smartphone,
  Video,
  MessageCircle,
  BookOpen,
} from "lucide-react"

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Planes 100% personalizados",
    desc: "Rutinas diseñadas según tu nivel, objetivos y disponibilidad.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento real",
    desc: "Análisis semanal de progreso, ajustes y feedback continuo.",
  },
  {
    icon: Smartphone,
    title: "App personalizada",
    desc: "Toda tu rutina, videos y métricas en una sola app.",
  },
  {
    icon: Video,
    title: "Reuniones por Zoom",
    desc: "Sesiones técnicas y consultas en vivo cara a cara.",
  },
  {
    icon: MessageCircle,
    title: "Canal de WhatsApp",
    desc: "Acceso directo para resolver dudas el mismo día.",
  },
  {
    icon: BookOpen,
    title: "Educación constante",
    desc: "Aprendé el por qué detrás de cada ejercicio y comida.",
  },
]

export function QueHace() {
  return (
    <section className="relative bg-[color:var(--accent)] py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(134,11,31,0.4),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-white/60 uppercase">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[color:var(--brand-crimson)]" />
            Metodología
          </p>
          <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            ¿QUÉ HACE{" "}
            <span className="text-[color:var(--brand-crimson)]">AUGENIV</span>?
          </h2>
          <p className="mt-5 max-w-xl font-serif text-base leading-relaxed text-white/75 sm:text-lg">
            Un sistema completo para transformar tu físico con el respaldo de un coach real,
            no de plantillas genéricas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:border-[color:var(--brand-crimson)]/60 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--brand-crimson)]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-crimson)]/15 text-[color:var(--brand-crimson)]">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <p className="mb-2 font-mono text-[10px] tracking-[0.3em] text-white/40">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-lg font-bold leading-tight text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-white/75">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
