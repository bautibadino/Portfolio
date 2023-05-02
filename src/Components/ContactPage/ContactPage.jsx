import { Container } from "react-bootstrap";
import './ContactStyles.css'
import { ImLocation } from "react-icons/im";
import { BsMailbox, BsPhone} from "react-icons/bs";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  return (
    <section className="contact-page">
      <Container fluid>
        <Container className="contact-text">
          <h3>Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repudiandae!
          </p>
        </Container>
        <Container className="contact-cards">
          <Container className="container-superior">
          
          <Link to='https://api.whatsapp.com/send?phone=5493468566527&text=Hola%20Bautista%20Badino%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios' className="contact-card" target="_blank">
          <Container className="contact-card">
            <Container className="contact-card-icon">
              <BsPhone/>
            </Container>
            <Container className="contact-card-text">
                <h5>Teléfono</h5>
                <a href="tel:+549 3468566527">+549 3468-566527</a>  
            </Container>
          </Container>
          </Link>
          <Link to='mailto:bautistabadino@gmail.com' target="_blank">
          <Container className="contact-card">
            <Container className="contact-card-icon">
                <BsMailbox/>
            </Container>
            <Container className="contact-card-text">
                <h5>Correo</h5>
                <a href="mailto: bautistabadino@gmail.com">bautistabadino@gmail.com</a>  
            </Container>
          </Container>
          </Link>
          </Container>
          <Container className="container-inferior">
          <Container className="contact-card">
            <Container className="contact-card-icon">
              <ImLocation/>
              <h5>¿donde encontrarme?</h5>
            </Container>
            <Container className="contact-card-text">
            </Container>
          </Container>
        </Container>
        </Container>
      </Container>
    </section>
  );
};
