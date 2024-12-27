import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '✋😝✋ Ô NEYMAR ✋😝✋',
  description: 'Tô perdido com os crias no cruzeiro do Neymar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

