import type { Metadata, Viewport } from "next"
import { Bebas_Neue, DM_Sans, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"
import { ThemeToggle } from "@/components/theme-toggle"
import { BottomNav } from "@/components/bottom-nav"
import { WhatsAppButton ,AugenivBot } from "@/components/whatsapp-button"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AUGENIV — Asesoramiento Gym | Calma mental. Fuerza real.",
  description:
    "Coaching de hipertrofia 100% personalizado con Angel Ortiz. Planes, seguimiento real y app personalizada. Disciplina hoy. Resultados siempre.",
  generator: "New Wave Desarrollo Digital",
  keywords: [
    "AUGENIV",
    "Asesoramiento Gym",
    "Angel Ortiz",
    "hipertrofia",
    "coaching fitness",
    "entrenador personal",
    "Argentina",
  ],
  openGraph: {
    title: "AUGENIV — Asesoramiento Gym",
    description: "Disciplina hoy. Resultados siempre.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1212" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeInitScript = `(() => {
    try {
      const stored = localStorage.getItem('augeniv-theme');
      const theme = stored === 'light' ? 'light' : 'dark';
      if (theme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (_) {
      document.documentElement.classList.add('dark');
    }
  })();`

  return (
    <html
      lang="es-AR"
      suppressHydrationWarning
      className={`${bebas.variable} ${dmSans.variable} ${lora.variable} dark`}
    >
      <head>
      </head>

      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>

            <LoadingScreen />

          <ThemeToggle />
          {children}
          <AugenivBot />
          <WhatsAppButton />
          <BottomNav />
          <div className="h-28" aria-hidden />
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
