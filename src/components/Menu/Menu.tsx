import { FaHome, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <nav className="menu__nav">
        <NavLink to="/" exact className="menu__link">
          <FaHome />
          <span>Home</span>
        </NavLink>
        <NavLink to="/characters" className="menu__link">
          <FaUsers />
          <span>Characters</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Menu
