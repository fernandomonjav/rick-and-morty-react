import Header from '../Header'
import Menu from '../Menu'
import './Layout.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Menu />
      <div className="main">{children}</div>
    </div>
  )
}

export default Layout
