import { Container } from "react-bootstrap";
import "./ContactStyles.css";
import { ImLocation } from "react-icons/im";
import { BsMailbox, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
import MapComponent from "./Map";
import { Form } from "./Form";

export const ContactPage = () => {


  return (
    <section className="contact-page">
      <Container fluid>
        <Container className="contact-text">
          <h3>Contacto</h3>
        </Container>
        <Container className="contact-cards">
          <Container className="container-superior">
            <Link
              to="wa.link/4m01ol"
              className="contact-card"
              target="_blank"
            >
              <Container className="contact-card">
                <Container className="contact-card-icon">
                  <BsPhone />
                </Container>
                <Container className="contact-card-text">
                  <h5>Teléfono</h5>
                  <a href="tel:+393463619919">+393463619919</a>
                </Container>
              </Container>
            </Link>
            <Link to="mailto:bautistabadino@gmail.com" target="_blank">
              <Container className="contact-card">
                <Container className="contact-card-icon">
                  <BsMailbox />
                </Container>
                <Container className="contact-card-text">
                  <h5>Correo</h5>
                  <a href="mailto: bautistabadino@gmail.com">
                    bautistabadino@gmail.com
                  </a>
                </Container>
              </Container>
            </Link>
          </Container>

          <Container className="container-inferior">
            <Container className="contenedor-form">
              <Form/>
            </Container>

            <Container fluid className="contenedor-mapa">
              <Container>
                <ImLocation className="map-icon" />
                <h5>¿Donde me encuentro?</h5>
              </Container>
              <Container className="map">
                <MapComponent className="hola" />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
};
