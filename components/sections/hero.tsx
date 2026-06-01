"use client"

import Image from "next/image"
import { ArrowRight, Zap, Quote } from "lucide-react"
import { DragonflyLogo } from "../dragonfly-logo"
import { buildWhatsAppLink } from "@/lib/whatsapp-utils"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#1a1212] text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <video
          src="/images/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover object-[60%_30%]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1212]/95 via-[#1a1212]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1212] via-[#1a1212]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(134,11,31,0.18),transparent_55%)]" />
      </div>

      {/* Top brand bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <div className="flex items-center gap-3 text-white">
          <DragonflyLogo size={28} className="text-[color:var(--brand-crimson)]" />
          <div className="leading-tight">
            <p className="font-display text-lg font-extrabold tracking-[0.18em]">AUGENIV</p>
            <p className="text-[9px] tracking-[0.4em] text-white/60">ASESORAMIENTO GYM</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.3em] text-white/60 uppercase">
          <span className="h-px w-8 bg-white/30" />
          Coach Angel Ortiz
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-end px-6 pb-24 pt-20 sm:px-10 sm:pb-32 lg:flex-row lg:items-end lg:justify-between lg:pb-40">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] tracking-[0.3em] text-white/80 uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-crimson)]" />
            Calma mental. Fuerza real.
          </div>

          <h1 className="font-display text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-[7.5rem]">
            <span className="block">DISCIPLINA</span>
            <span className="block text-white/85">HOY.</span>
            <span className="block text-[color:var(--brand-crimson)]">RESULTADOS</span>
            <span className="block">SIEMPRE.</span>
          </h1>

          <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-white/80 sm:text-lg">
            Transforma tu cuerpo. Transforma tu mente. Coaching de hipertrofia con seguimiento real,
            ciencia y disciplina.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={buildWhatsAppLink("Hola Angel, quiero empezar mi cambio con AUGENIV.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--brand-crimson)] px-7 py-4 font-sans text-sm font-semibold tracking-[0.2em] uppercase text-white shadow-[0_15px_40px_-10px_rgba(134,11,31,0.7)] transition hover:brightness-110"
            >
              Empezá tu cambio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-sans text-xs text-white/85 backdrop-blur">
              <Zap className="h-3.5 w-3.5 text-[color:var(--brand-crimson)]" />
              <span className="tracking-wide">Coaching 100% personalizado</span>
            </div>
          </div>
        </div>

        {/* Floating glass quote card */}
        <aside
          className="mt-12 lg:mt-0 lg:ml-10 lg:mb-2 lg:max-w-sm animate-fade-up"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl">
            <Quote className="absolute -top-2 -left-2 h-16 w-16 text-[color:var(--brand-crimson)]/30" />
            <p className="relative font-serif text-lg italic leading-relaxed text-white">
              La constancia es lo que te lleva donde la motivación no puede.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70">
                Angel Ortiz
              </span>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom marquee-ish strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-white/10 bg-black/40 backdrop-blur-md sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-10 py-3 text-[10px] uppercase tracking-[0.4em] text-white/60">
          <span>+6 años de experiencia</span>
          <span>Especialista en hipertrofia</span>
          <span>App · Zoom · WhatsApp</span>
          <span className="text-[color:var(--brand-crimson)]">SCROLL ↓</span>
        </div>
      </div>
    </section>
  )
}
