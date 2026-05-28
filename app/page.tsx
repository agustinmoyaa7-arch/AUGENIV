import { Hero } from "@/components/sections/hero"
import { SobreMi } from "@/components/sections/sobre-mi"
import { QueHace } from "@/components/sections/que-hace"
import { Testimonios } from "@/components/sections/testimonios"
import { Planes } from "@/components/sections/planes"
import { CtaFinal } from "@/components/sections/cta-final"

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <SobreMi />
      <QueHace />
      <Testimonios />
      <Planes />
      <CtaFinal />
    </main>
  )
}
