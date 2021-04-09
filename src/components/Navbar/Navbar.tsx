import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <Logo />
          <span>Rick and Morty</span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
