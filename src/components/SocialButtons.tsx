import './SocialButtons.css'

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <a
        href="https://dexscreener.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        Dexscreener
      </a>
      <a
        href="https://x.com/Tromp_dev"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        X
      </a>
    </div>
  )
}

export default SocialButtons
