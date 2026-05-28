import { Dumbbell } from "lucide-react"
import { buildWhatsAppLink } from "../whatsapp-button"
import Link from "next/link"

export function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#1a1212] py-28 text-white sm:py-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(134,11,31,0.35),transparent_55%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-crimson)]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-crimson)]/60 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-10">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] tracking-[0.4em] text-white/70 uppercase backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-crimson)]" />
          El último paso es tuyo
        </p>

        <h2 className="font-display text-5xl font-black leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-[8rem]">
          <span className="block">TU ÚNICO</span>
          <span className="block">
            LÍMITE <span className="text-[color:var(--brand-crimson)]">SOS</span>
          </span>
          <span className="block text-[color:var(--brand-crimson)]">VOS.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl font-serif text-base italic leading-relaxed text-white/75 sm:text-lg">
          Tomá acción hoy. Tu futuro te lo va a agradecer.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={buildWhatsAppLink("Hola Angel, quiero empezar con AUGENIV.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-xs font-bold tracking-[0.25em] uppercase text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.55)] transition hover:brightness-110"
          >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          <Link
            href="#planes"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--brand-crimson)] px-7 py-4 text-xs font-bold tracking-[0.25em] uppercase text-white shadow-[0_15px_40px_-10px_rgba(134,11,31,0.7)] transition hover:brightness-110"
          >
            <Dumbbell className="h-4 w-4" />
            Ver planes
          </Link>
        </div>

        <p className="mt-16 font-sans text-xs font-medium tracking-[0.45em] text-white/40 uppercase">
          AUGENIV · Asesoramiento Gym · 2026
        </p>
      </div>
    </section>
  )
}
