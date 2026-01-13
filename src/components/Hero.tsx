import { useState, useEffect, useRef } from 'react'
import heroImage from '../92cdc75f-3711-46f3-a33a-db88d89c0ea6 (1).png'
import './Hero.css'

const DustParticle = () => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
  })
  const [velocity] = useState({
    x: (Math.random() - 0.5) * 0.02,
    y: (Math.random() - 0.5) * 0.02,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: (prev.x + velocity.x + 100) % 100,
        y: (prev.y + velocity.y + 100) % 100,
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [velocity])

  return (
    <div
      className="dust-particle"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  )
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-overlay" />
        <div className="noise-overlay" />
        {Array.from({ length: 20 }).map((_, i) => (
          <DustParticle key={i} />
        ))}
      </div>
      <div
        className="hero-content"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Tromp"
              className="hero-image"
            />
          </div>
        </div>
        <h1 className="hero-title">$TROMP</h1>
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>live mc: n/a</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
