"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { buildWhatsAppLink } from "@/lib/whatsapp-utils"

export function SobreMi() {
  return (
    <section id="sobre-mi" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Left: photo with crimson ring + script overlay */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-[color:var(--brand-crimson)]" />
            <div className="absolute inset-3 rounded-full border border-foreground/10" />

            {/* Photo */}
            <div className="absolute inset-5 overflow-hidden rounded-full grayscale">
              <Image
                src="/images/athlete-hero.png"
                alt="Angel Ortiz, entrenador especializado en hipertrofia"
                fill
                className="object-cover object-[60%_30%]"
              />
            </div>

            {/* Script overlay */}
            <p className="absolute -bottom-8 left-0 right-0 text-center whitespace-nowrap font-serif text-2xl italic text-[color:var(--brand-crimson)] sm:text-3xl">
              ~ Angel Ortiz ~
            </p>

            {/* Floating stat chip */}
            <div className="absolute -right-2 top-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
              <p className="font-display text-3xl font-black text-[color:var(--brand-crimson)]">
                +6
              </p>
              <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                años de exp.
              </p>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="lg:col-span-7">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[color:var(--brand-crimson)]" />
            Sobre Mí
          </p>

          <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
            ANGEL{" "}
            <span className="text-[color:var(--brand-crimson)]">ORTIZ</span>
          </h2>

          <p className="mt-2 font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Especialista en Hipertrofia
          </p>

          <p
            className="mt-6 max-w-2xl font-serif text-foreground/85"
            style={{ fontSize: "17px", lineHeight: 1.8 }}
          >
            Soy entrenador personal especializado en hipertrofia. Trabajo con personas que quieren
            transformar su cuerpo y su mentalidad — no con soluciones rápidas, sino con método,
            constancia y acompañamiento real. Si estás listo para empezar, yo estoy listo para guiarte.
          </p>

          {/* Mini stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 sm:max-w-md">
            {[
              { v: "200+", l: "Alumnos" },
              { v: "6+", l: "Años" },
              { v: "100%", l: "Personalizado" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-border bg-card/60 p-4 text-center"
              >
                <p className="font-display text-2xl font-black text-foreground sm:text-3xl">
                  {s.v}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <a
            href={buildWhatsAppLink("Hola Angel, quiero conocer más sobre AUGENIV.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--brand-crimson)] px-7 py-3.5 text-xs font-bold tracking-[0.25em] uppercase text-[color:var(--brand-crimson)] transition hover:bg-[color:var(--brand-crimson)] hover:text-white"
          >
            Conocé más sobre mí
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
