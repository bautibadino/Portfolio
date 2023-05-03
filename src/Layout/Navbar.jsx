
import { useEffect, useState } from 'react'
import './LayoutStyles.css'
import { Container, Nav, NavDropdown, NavLink } from 'react-bootstrap'
export const Navbar = () => {
    const [size, setSize] = useState(0)

    useEffect(() => {
        setSize(window.innerWidth)
        console.log(size);
    }, [])

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
