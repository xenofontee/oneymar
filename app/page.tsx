'use client'
import { useEffect, useRef } from 'react'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Start playing as soon as possible
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Audio autoplay failed:", error)
      })
    }
  }, [])

  const handleClick = () => {
    // Play audio on user interaction
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <main 
      className="relative h-screen w-screen overflow-hidden cursor-pointer" 
      onClick={handleClick}
    >
      <video
        src="/background.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center h-full" style={{ marginTop: '-50%' }}>
        <h1 className="text-8xl font-bold text-white text-center tracking-wider">✋😝✋ Ô NEYMAR ✋😝✋</h1>
      </div>
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neymar%20Jr%20%E2%97%8F%20TO%CC%82%20PERDIDO%20COM%20OS%20CRIA%20NO%20CRUZEIRO%20DO%20NEYMAR%20,%20OH%20NEYMAR%20(FUNK%20TIK%20TOK)%20%5B%20ezmp3.cc%20%5D-bUBsmoyxK41PeiDaWOqP4HQwS9GL1v.mp3"
        loop
        className="hidden"
      />
    </main>
  )
}