import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Abhishek Gupta. All rights reserved.</div>
        <div className="footer-links">
          <a href="https://github.com/Abhishek10440" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abhishek-gupta-932bb53a1/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
