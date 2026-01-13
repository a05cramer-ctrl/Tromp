import { useEffect, useRef, useState } from 'react'
import './Lore.css'

const Lore = () => {
  const [isVisible, setIsVisible] = useState(false)
  const loreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (loreRef.current) {
      observer.observe(loreRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="lore-section" ref={loreRef}>
      <h2 className="lore-title">the lore: make memes great again</h2>
      <div className={`lore-card ${isVisible ? 'lore-card-visible' : ''}`}>
        <div className="lore-text">
          <p>politics is a show.</p>
          <p>markets are a show.</p>
          <br />
          <p>bonk didn't vote.</p>
          <p>bonk just ran.</p>
          <br />
          <p>trump is noise.</p>
          <p>bonk is instinct.</p>
          <br />
          <p>when noise meets instinct,</p>
          <p>memes win.</p>
          <br />
          <p>this is not a movement.</p>
          <p>this is momentum.</p>
          <br />
          <p className="lore-symbol">$tromp</p>
        </div>
      </div>
    </section>
  )
}

export default Lore
