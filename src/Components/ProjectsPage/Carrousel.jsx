import { Button, Container } from 'react-bootstrap';
import Carousel from "nuka-carousel"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from 'react';
import { ImageUrlsContext } from '../../Context/Provider';

export default function Carrousel  (){

    const {imageUrls} = useContext(ImageUrlsContext);


    const slides = [
        {
            img: imageUrls.fondo,
            title: 'Proyecto tienda',
            text: 'Proyecto web utilizando React y Firebase, brindando una experiencia intuitiva y funcional para los usuarios con carrito y checkout.'
        },
        {
            img: imageUrls.fondo,
            title: 'NOMBRE PROY2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, autem!'
        },
        {
            img: imageUrls.fondo,
            title: 'NOMBRE PROY3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, autem!'
        },
    ]
    console.log();
    const props = {
        defaultControlsConfig: {
            nextButtonText: <AiOutlineArrowRight/>,
            prevButtonText: <AiOutlineArrowLeft/>,
            pagingDotsStyle: {
                fill: 'white',
                margin: '0 5px',
            },
            prevButtonClassName: 'boton-izq',
            nextButtonClassName: 'boton-der',
        }
    }
  return (
    <Carousel defaultControlsConfig={props.defaultControlsConfig} props={props} className="carrousel">
        {
        slides.map((slide, index) => {
            const {title, img, text} = slide;
        return(
        <Container className='card-carrousel' key={index} >
            <Container className='card-carrousel-text'>
                <h4>{title}</h4>
                <p>
                    {text}
                </p>
                <Button variant="outline-light">ver mas<AiOutlineArrowRight className='flecha-ver-mas'/></Button>
            </Container>
            <Container className='card-carrousel-img'>
            <img src={img}/>
            </Container>
        </Container>   
        )}
        )}
        </Carousel>
  );
}

