import './Grid.css'

interface Props {
  title?: string
}

const Grid: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="grid">
      {title ? (
        <div className="grid__top">
          <span className="grid__title">{title}</span>
        </div>
      ) : null}

      <div className="grid__items">{children}</div>
    </div>
  )
}

export default Grid
