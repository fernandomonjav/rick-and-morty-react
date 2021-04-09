import Menu from '../Menu'
import Navbar from '../Navbar'
import './Layout.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Menu />
      <div className="main">{children}</div>
    </div>
  )
}

export default Layout
