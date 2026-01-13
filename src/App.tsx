import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import ContractBox from './components/ContractBox'
import CTAButtons from './components/CTAButtons'
import SocialButtons from './components/SocialButtons'
import Navigation from './components/Navigation'
import Lore from './components/Lore'
import Toast from './components/Toast'
import './App.css'

function App() {
  const [showNav, setShowNav] = useState(false)
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showToast = (message: string) => {
    setToast({ message, visible: true })
    setTimeout(() => setToast({ message: '', visible: false }), 3000)
  }

  return (
    <div className="app">
      <Navigation visible={showNav} />
      <Hero />
      <div className="content-section">
        <ContractBox onCopy={showToast} />
        <CTAButtons />
        <SocialButtons />
      </div>
      <Lore />
      <section id="about" className="page-section"></section>
      <section id="chart" className="page-section"></section>
      <section id="community" className="page-section"></section>
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}

export default App
