'use client'
import Image from 'next/image'
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
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wp7930086-neymar-santos-wallpapers.jpg-u8Vs7SKNG5APjd5HXHXs4T41zE8Oa6.jpeg"
        alt="Soccer player celebration"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
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