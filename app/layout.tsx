import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stellar Uzima - Healthcare for Africa",
  description:
    "Bridging traditional African healing with modern medicine through blockchain technology. Accessible healthcare, education, and community support.",
  keywords: [
    "healthcare",
    "africa",
    "telemedicine",
    "traditional medicine",
    "stellar",
    "blockchain",
    "offline-first",
    "community health",
  ],
  authors: [{ name: "Stellar Uzima Team" }],
  creator: "Stellar Uzima",
  publisher: "Stellar Uzima",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  themeColor: "#10b981",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Stellar Uzima" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
