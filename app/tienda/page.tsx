import { TiendaClient } from "@/components/sections/tienda-client"

export const metadata = {
  title: "Tienda — AUGENIV | Asesoramiento Gym",
  description:
    "Llevá tu entrenamiento al siguiente nivel. Planes nutricionales, planes de entrenamiento y sesiones 1 a 1 con Angel Ortiz.",
}

export default function TiendaPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <TiendaClient />
    </main>
  )
}
