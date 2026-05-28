import * as React from "react"

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
}

/**
 * Geometric AUGENIV dragonfly mark.
 * - Diamond above
 * - Round head
 * - Two pairs of symmetric wings
 * - Tapered elongated body
 */
export function DragonflyLogo({ size = 64, className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 200 220"
      width={size}
      height={(size * 220) / 200}
      role="img"
      aria-label="AUGENIV"
      className={className}
      {...props}
    >
      {/* Diamond */}
      <path d="M100 8 L114 24 L100 40 L86 24 Z" fill="currentColor" />
      {/* Head */}
      <circle cx="100" cy="56" r="11" fill="currentColor" />
      {/* Body */}
      <path
        d="M100 70
           C 96 92, 94 130, 100 210
           C 106 130, 104 92, 100 70 Z"
        fill="currentColor"
      />
      {/* Upper wings */}
      <path
        d="M100 86
           C 60 70, 22 78, 6 96
           C 30 102, 70 102, 100 96 Z"
        fill="currentColor"
      />
      <path
        d="M100 86
           C 140 70, 178 78, 194 96
           C 170 102, 130 102, 100 96 Z"
        fill="currentColor"
      />
      {/* Lower wings */}
      <path
        d="M100 110
           C 70 104, 36 110, 22 126
           C 50 132, 80 130, 100 122 Z"
        fill="currentColor"
      />
      <path
        d="M100 110
           C 130 104, 164 110, 178 126
           C 150 132, 120 130, 100 122 Z"
        fill="currentColor"
      />
    </svg>
  )
}
