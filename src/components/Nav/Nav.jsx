import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Nav.css'

const navItems = ['home', 'about', 'skills', 'projects', 'education', 'contact']

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const renderLinks = () => navItems.map((item) => (
    <li key={item}>
      <Link
        to={item}
        activeClass="active"
        spy
        smooth
        duration={500}
        offset={-78}
        onClick={() => setIsOpen(false)}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Link>
    </li>
  ))

  return (
    <nav aria-label="Main navigation">
      <Link className="brand" to="home" smooth duration={500} onClick={() => setIsOpen(false)}>
        Abhishek Gupta
      </Link>

      <ul className="desktopmenu">{renderLinks()}</ul>

      <button
        className={`hamburger ${isOpen ? 'activeham' : ''}`}
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="ham"></span>
        <span className="ham"></span>
        <span className="ham"></span>
      </button>

      <ul
        id="mobile-navigation"
        className={`mobilemenu ${isOpen ? 'activemobile' : ''}`}
        aria-hidden={!isOpen}
      >
        {renderLinks()}
      </ul>
    </nav>
  )
}

export default Nav
