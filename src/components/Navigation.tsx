import './Navigation.css'

interface NavigationProps {
  visible: boolean
}

const Navigation = ({ visible }: NavigationProps) => {
  return (
    <nav className={`navigation ${visible ? 'navigation-visible' : ''}`}>
      <div className="nav-content">
        <a href="#about" className="nav-link">about</a>
        <a href="#chart" className="nav-link">chart</a>
        <a href="https://x.com/Tromp_dev" target="_blank" rel="noopener noreferrer" className="nav-link">community</a>
      </div>
    </nav>
  )
}

export default Navigation
