"use client"

import * as React from "react"
import { DragonflyLogo } from "./dragonfly-logo"

export function LoadingScreen() {
  const [phase, setPhase] = React.useState<"visible" | "hiding" | "gone">("visible")

  React.useEffect(() => {
    let fade: ReturnType<typeof setTimeout>
    let remove: ReturnType<typeof setTimeout>

    fade = setTimeout(() => setPhase("hiding"), 2200)
    remove = setTimeout(() => setPhase("gone"), 2800)

    return () => {
      clearTimeout(fade)
      clearTimeout(remove)
    }
  }, [])

  if (phase === "gone") return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#39000A",
        opacity: phase === "hiding" ? 0 : 1,
        transition: "opacity 600ms ease",
        pointerEvents: phase === "hiding" ? "none" : "all",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "24px" }}>
        
        <DragonflyLogo size={72} className="text-white" />

        <h1 style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: "48px",
          letterSpacing: "0.18em",
          color: "white",
          margin: 0,
        }}>
          AUGENIV
        </h1>

        <p style={{
          fontSize: "11px",
          letterSpacing: "0.45em",
          color: "rgba(255,255,255,0.7)",
          margin: 0,
        }}>
          ASESORAMIENTO GYM
        </p>

        {/* Barra de progreso */}
        <div style={{
          marginTop: "24px",
          width: "280px",
          height: "3px",
          backgroundColor: "rgba(255,255,255,0.15)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            backgroundColor: "#860B1F",
            animation: "progress-bar 2s ease forwards",
          }} />
        </div>

        <p style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: "13px",
          fontStyle: "italic",
          color: "rgba(255,255,255,0.8)",
          margin: 0,
          marginTop: "8px",
        }}>
          Calma mental. Fuerza real.
        </p>
      </div>

      <style>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}