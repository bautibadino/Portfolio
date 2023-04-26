
import { NavLink } from 'react-router-dom'
import './LayoutStyles.css'
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
            <h3>
            <NavLink to={"/Home"}>Bautista Badino</NavLink>
            </h3>
        </div>
        <div className="container-fluid">
            <ul>
                <li>
                    <NavLink to={"#Home"} className={({isActive}) => {
                        return isActive ? "active" : ""
                    }}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={"#SobreMi"} className={({isActive}) => {
                        return isActive ? "active" : ""
                    }}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to={"#Proyectos"} className={({isActive}) => {
                        return isActive ? "active" : ""
                    }}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to={"#Contacto"} className={({isActive}) => {
                        return isActive ? "active" : ""
                    }}>Contacto</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}
