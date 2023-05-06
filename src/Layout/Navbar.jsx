

import { Container } from 'react-bootstrap'
import './LayoutStyles.css'
import { BiMenuAltRight } from 'react-icons/bi'
export const Navbar = () => {

    return(
    <Container>
        <nav className='navbar'>
        <h2>Bautista Badino</h2>
        <ul className='nav-menu'>
            <li className='nav-item'>
                <a href='#home' className='nav-link'>
                    Home
                </a>
            </li>

            <li className='nav-item'>
                <a href='#SobreMi' className='nav-link'>
                    Sobre Mi
                </a>
            </li>
            <li className='nav-item'>
                <a href='#projects' className='nav-link'>
                    Proyectos
                </a>
            </li>
            <li className='nav-item'>
                <a href='#contact' className='nav-link'>
                    Contacto
                </a>
            </li>
        </ul>
        <button className='mobile-button'>
        <BiMenuAltRight className=''/> 
        </button>
        </nav>

    </Container>


    )
    }

