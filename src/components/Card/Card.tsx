import './Card.css'

interface Props {
  title: string
  subtitle?: string
  description?: string
  image?: string
}

const Card: React.FC<Props> = ({ title, subtitle, description, image }) => {
  return (
    <div className="card">
      <div className="card__container">
        {image ? (
          <div className="card__image">
            <img src={image} alt="" />
          </div>
        ) : null}
        <div className="card__content">
          <span className="card__title">{title}</span>
          {subtitle ? <span className="card__subtitle">{subtitle}</span> : null}
          {description ? (
            <span className="card__description">{description}</span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
