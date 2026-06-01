"use client"
import * as React from "react"
import { X, ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { WHATSAPP_URL, buildWhatsAppLink } from "@/lib/whatsapp-utils"

export { WHATSAPP_NUMBER, WHATSAPP_URL, buildWhatsAppLink } from "@/lib/whatsapp-utils"

// ─── Bot Avatar Component ────────────────────────────────────────────────────────

function BotAvatar() {
  return (
    <Image
      src="/images/bot.png"
      alt="Bot AUGENIV"
      width={32}
      height={32}
      className="w-8 h-8 shrink-0"
    />
  )
}

// ─── Bot Data ────────────────────────────────────────────────────────────────

type BotTopic = {
  id: string
  label: string
  emoji: string
  questions: { q: string; a: string; waMessage?: string }[]
}

const BOT_TOPICS: BotTopic[] = [
  {
    id: "precios",
    label: "Precios y planes",
    emoji: "💰",
    questions: [
      {
        q: "¿Cuánto cuesta el coaching?",
        a: "Tenemos 3 planes mensuales:\n• Principiante: $19.900\n• Intermedio: $24.900\n• Avanzado: $39.900\n\nSin permanencia, cancelás cuando querés.",
        waMessage: "Hola Angel, quiero saber más sobre los planes de coaching.",
      },
      {
        q: "¿Qué incluye cada plan?",
        a: "Todos incluyen plan personalizado, planilla con rutina y videos, y reuniones por Zoom.\n\nEl Intermedio suma canal de WhatsApp. El Avanzado suma sesiones 1 a 1 y prioridad en seguimiento.",
        waMessage: "Hola Angel, quiero saber qué incluye cada plan.",
      },
      {
        q: "¿Puedo cancelar cuando quiero?",
        a: "Sí, sin permanencia ni contratos. Cancelás cuando vos quieras, sin costo adicional.",
      },
    ],
  },
  {
    id: "coaching",
    label: "Cómo funciona",
    emoji: "🏋️",
    questions: [
      {
        q: "¿Cómo arrancamos?",
        a: "Contactás a Angel por WhatsApp, coordinan una primera consulta y recibís tu plan personalizado según tu nivel y objetivos.",
        waMessage: "Hola Angel, quiero empezar mi cambio con AUGENIV.",
      },
      {
        q: "¿Qué es la planilla personalizada?",
        a: "Es una planilla completa con tu rutina semanal, links a videos de cada ejercicio y celdas para cargar tu progreso semana a semana.",
      },
      {
        q: "¿Cuántas reuniones por Zoom hay?",
        a: "Depende del plan:\n• Principiante e Intermedio: 2 reuniones por semana\n• Avanzado: 3 reuniones por semana + 2 sesiones 1 a 1 por mes.",
      },
    ],
  },
  {
    id: "nutricion",
    label: "Nutrición",
    emoji: "🥗",
    questions: [
      {
        q: "¿Tienen planes nutricionales?",
        a: "Los planes nutricionales están próximamente disponibles. ¡Muy pronto podés acceder a asesoramiento nutricional personalizado con Angel!",
        waMessage: "Hola Angel, quiero saber más sobre los planes nutricionales.",
      },
      {
        q: "¿El coaching incluye nutrición?",
        a: "El coaching incluye educación sobre alimentación y hábitos. Los planes nutricionales detallados estarán disponibles próximamente.",
      },
    ],
  },
  {
    id: "contacto",
    label: "Contacto",
    emoji: "📲",
    questions: [
      {
        q: "¿Cómo me contacto con Angel?",
        a: "Podés escribirle directamente por WhatsApp. ¡Suele responder el mismo día!",
        waMessage: "Hola Angel, quiero empezar con AUGENIV.",
      },
      {
        q: "¿En qué horario atiende?",
        a: "Angel atiende consultas durante el día. Lo mejor es escribirle por WhatsApp y coordinar desde ahí.",
        waMessage: "Hola Angel, quiero consultar sobre AUGENIV.",
      },
    ],
  },
]

// ─── Bot Component ────────────────────────────────────────────────────────────

export function AugenivBot() {
  const [open, setOpen] = React.useState(false)
  const [activeTopic, setActiveTopic] = React.useState<BotTopic | null>(null)
  const [activeQuestion, setActiveQuestion] = React.useState<{ q: string; a: string; waMessage?: string } | null>(null)
  const [loading, setLoading] = React.useState(false)

  function reset() {
    setActiveTopic(null)
    setActiveQuestion(null)
    setLoading(false)
  }

  function close() {
    setOpen(false)
    setTimeout(reset, 300)
  }

  function handleQuestionClick(question: { q: string; a: string; waMessage?: string }) {
    setLoading(true)
    setTimeout(() => {
      setActiveQuestion(question)
      setLoading(false)
    }, 700)
  }

  return (
    <div className="fixed right-4 z-50 bottom-[calc(env(safe-area-inset-bottom)+180px)] flex flex-col items-end gap-3">

      {/* Chat window */}
      {open && (
        <div className="w-[300px] sm:w-[320px] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col animate-fade-in">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[color:var(--brand-crimson)]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-display text-sm font-bold text-white tracking-wide">AUGENIV</span>
            </div>
            <button
              type="button"
              onClick={close}
              className="text-white/80 hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-3 p-4 max-h-[380px] overflow-y-auto">

            {/* Saludo inicial con avatar */}
            {!activeTopic && !activeQuestion && !loading && (
              <>
                <div className="flex items-end gap-2 animate-fade-in">
                  <BotAvatar />
                  <div className="rounded-xl rounded-tl-none bg-muted px-3 py-2 text-sm text-foreground leading-relaxed flex-1">
                    👋 ¡Hola! Soy el asistente de <strong>Angel Ortiz</strong>.<br />
                    ¿En qué puedo ayudarte?
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  {BOT_TOPICS.map((topic, idx) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setActiveTopic(topic)}
                      className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-left text-sm font-medium text-foreground hover:border-[color:var(--brand-crimson)]/60 hover:bg-[color:var(--brand-crimson)]/5 transition animate-fade-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <span>{topic.emoji} {topic.label}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Preguntas del tema */}
            {activeTopic && !activeQuestion && !loading && (
              <>
                <button
                  type="button"
                  onClick={reset}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition animate-fade-in"
                >
                  <ChevronLeft className="h-3 w-3" /> Volver
                </button>
                <div className="flex items-end gap-2 animate-fade-in">
                  <BotAvatar />
                  <div className="rounded-xl rounded-tl-none bg-muted px-3 py-2 text-sm text-foreground flex-1">
                    {activeTopic.emoji} <strong>{activeTopic.label}</strong> — ¿Qué querés saber?
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {activeTopic.questions.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleQuestionClick(item)}
                      className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-left text-sm font-medium text-foreground hover:border-[color:var(--brand-crimson)]/60 hover:bg-[color:var(--brand-crimson)]/5 transition animate-fade-in"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <span>{item.q}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Estado de carga - Bot escribiendo */}
            {loading && (
              <div className="flex items-end gap-2 animate-fade-in">
                <BotAvatar />
                <div className="rounded-xl rounded-tl-none bg-muted px-3 py-2 text-sm text-foreground">
                  <div className="flex gap-1">
                    <span className="inline-block w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="inline-block w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="inline-block w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Respuesta */}
            {activeQuestion && !loading && (
              <>
                <button
                  type="button"
                  onClick={() => setActiveQuestion(null)}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition animate-fade-in"
                >
                  <ChevronLeft className="h-3 w-3" /> Volver
                </button>
                <div className="flex items-end gap-2 animate-fade-in">
                  <BotAvatar />
                  <div className="rounded-xl rounded-tl-none bg-muted px-3 py-2 text-sm text-foreground leading-relaxed whitespace-pre-line flex-1">
                    {activeQuestion.a}
                  </div>
                </div>
                {activeQuestion.waMessage && (
                  <a
                    href={buildWhatsAppLink(activeQuestion.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white hover:brightness-110 transition animate-fade-in"
                  >
                    Hablar con Angel
                  </a>
                )}
                <button
                  type="button"
                  onClick={reset}
                  className="text-center text-xs text-muted-foreground hover:text-foreground transition animate-fade-in"
                >
                  Ver otras preguntas
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Bot toggle button - Custom Bot Icon */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir asistente"
        className="fixed right-4 z-50 bottom-[calc(env(safe-area-inset-bottom)+180px)] flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand-crimson)] shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Image
            src="/images/bot.png"
            alt="Bot AUGENIV"
            width={56}
            height={56}
            className="rounded-full"
            priority
          />
        )}
      </button>
    </div>
  )
}

// ─── WhatsApp Button ──────────────────────────────────────────────────────────

export function WhatsAppButton() {
  return (
      <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className={[
        "fixed right-4 z-[70]",
        "bottom-[calc(env(safe-area-inset-bottom)+96px)]",
        "flex h-12 w-12 items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg",
        "hover:scale-105 active:scale-95 transition-transform",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}