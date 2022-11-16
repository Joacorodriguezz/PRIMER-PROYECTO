
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css'




export default function Navbar() {
  return (
    <nav className="nav" >

      <Link to="/" className="site-title">
        
        <h2 className="nav-name">Celulares JR</h2>
        
      </Link>
      <ul>
        <CustomLink to="/celulares">Celulares</CustomLink>
        <CustomLink to="/accesorios">Accesorios</CustomLink>
        <CustomLink to="/contacto">Contacto</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}