import { Container } from "react-bootstrap";
import "./LayoutStyles.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []);

  return (
    <Container>
      <nav className="navbar">
        <Container>
          <Container className="logo-menu">
            <h2>Bautista Badino</h2>
          </Container>
          {windowWidth < 780 && (
            <Container className="menu-icon" onClick={handleMenu}>
              <button className="mobile-button">
                <BiMenuAltRight/>
              </button>
            </Container>
          )}
        </Container>
        {(windowWidth >= 780 || showMenu) && (
          <ul className="nav-menu  animate__animated animate__slideInDown">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                HOME
              </a>
            </li>

            <li className="nav-item">
              <a href="#SobreMi" className="nav-link">
                SOBRE MI
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                PROYECTOS
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                CONTACTO
              </a>
            </li>
          </ul>
        )}
      </nav>
    </Container>
  );
};
