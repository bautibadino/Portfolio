import { Container } from "react-bootstrap";
import './ContactStyles.css'
import { ImLocation } from "react-icons/im";
import { BsMailbox, BsPhone} from "react-icons/bs";
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
          <Container className="contact-card">
            <Container className="contact-card-icon">
              <BsPhone/>
            </Container>
            <Container className="contact-card-text">
                <h5>Teléfono</h5>
                <a href="tel:+549 3468566527">+549 3468-566527</a>  
            </Container>
          </Container>
          
          <Container className="contact-card">
            <Container className="contact-card-icon">
                <BsMailbox/>
            </Container>
            <Container className="contact-card-text">
                <h5>Correo</h5>
                <a href="mailto: bautistabadino@gmail.com">bautistabadino@gmail.com</a>  
            </Container>
          </Container>
          </Container>
          <Container className="container-inferior">
          <Container className="contact-card">
            <Container className="contact-card-icon">
              <ImLocation size={'1rem'}/>
            </Container>
            <Container className="contact-card-text">
                <h5>
                  Dirección
                </h5>
                <a href=""></a>  
            </Container>
          </Container>
        </Container>
        </Container>
      </Container>
    </section>
  );
};
