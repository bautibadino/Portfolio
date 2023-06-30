import { Link } from "react-router-dom"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import "./HomeStyles.css"
import { Col, Container, Row } from "react-bootstrap"
import { useContext, useState } from "react"
import { ImageUrlsContext } from "../../Context/Provider"
import { LoadingSpinner } from "../../Context/LoadingSpinner"





export const HomePage = () => {

  const {imageUrls} = useContext(ImageUrlsContext);
  
  return (    
    <Container fluid className={'animate__animated animate__zoomInDown'}>
      <Col className="container-home">
        <Row className="image-home">
          <img src={imageUrls.perfil} alt="" />
        </Row>
        <Row className="text-home">
          <h1>Bautista Badino</h1>
          <h2>Front end Developer</h2>
          <p>¡Hola! Soy Bautista, un desarrollador front-end apasionado y en busca de oportunidades para crecer en el mundo digital. Siempre estoy en constante aprendizaje y estoy listo para enfrentar nuevos desafíos en mi carrera como desarrollador. ¡Bienvenidos a mi portfolio!</p>
        </Row>
        <Row className="redes-home">
          <Link 
          to="https://www.linkedin.com/in/bautista-badino"
          target="_blank">
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

