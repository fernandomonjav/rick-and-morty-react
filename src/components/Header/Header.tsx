import Logo from '../Logo'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Logo />
          <span>Rick and Morty</span>
        </div>
      </div>
    </header>
  )
}

export default Header
