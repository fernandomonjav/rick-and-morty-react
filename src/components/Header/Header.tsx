import './Header.css'

interface Props {
  title: string
  subtitle?: string
  avatar?: string
}

const Header: React.FC<Props> = ({ title, subtitle, avatar }) => {
  return (
    <div className="header">
      <div className="header__container">
        {avatar ? (
          <div className="header__avatar">
            <div className="header__image">
              <img src={avatar} alt="" />
            </div>
          </div>
        ) : null}

        <div className="header__content">
          <h1 className="header__title">{title}</h1>
          {subtitle ? (
            <span className="header__subtitle">{subtitle}</span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Header
