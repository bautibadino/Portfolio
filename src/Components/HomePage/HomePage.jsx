import { Link } from "react-router-dom"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import "./HomeStyles.css"
import { Col, Container, Row } from "react-bootstrap"




export const HomePage = () => {

  return (  
    <Container fluid className={'animate__animated animate__zoomInDown'}>
      <Col className="container-home">
        <Row className="image-home">
          <img src="src/assets/60AC3452-9745-4202-93CA-744E75AB598F_1_105_c.jpg" alt="" />
        </Row>
        <Row className="text-home">
          <h1>Bautista Badino</h1>
          <h2>Front end Developer</h2>
          <p>¡Hola! Soy Bautista, un desarrollador front-end apasionado y en busca de oportunidades para crecer en el mundo digital. Siempre estoy en constante aprendizaje y estoy listo para enfrentar nuevos desafíos en mi carrera como desarrollador. ¡Bienvenidos a mi portfolio!</p>
        </Row>
        <Row className="redes-home">
          <Link to={"https://www.linkedin.com/"}>
            <AiFillLinkedin className="redes-icons"/>
          </Link>
          <Link to={"https://wwww.github.com/"}>
            <AiFillGithub className="redes-icons"/>
          </Link>
        </Row>
    </Col>
    </Container>

  )
}
