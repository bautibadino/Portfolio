import { Button, Container } from 'react-bootstrap';
import Carousel from "nuka-carousel"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from 'react';
import { ImageUrlsContext } from '../../Context/Provider';

export default function Carrousel  (){

    const {imageUrls} = useContext(ImageUrlsContext);

    
    const routeChange = (url) =>{
        window.open(url, '_blank');
      }
  
    const slides = [
        {
            img: imageUrls.shopApple,
            title: 'Proyecto tienda Apple',
            text: 'Proyecto web utilizando React y Firebase, brindando una experiencia intuitiva y funcional para los usuarios con carrito y checkout.',
            linkDeploy: 'https://monumental-starburst-d241b0.netlify.app/',
            linkGit: 'https://github.com/bautibadino/ProyTienda',

        },
        {
            img: imageUrls.cotizador,
            title: 'Cotizador de seguros',
            text: 'Aplicacion web para cotizar seguros hecha con JavaScript plano, sin frameworks, para mejora de logica',
            linkDeploy: 'https://dapper-liger-c0d79d.netlify.app/',
            linkGit: 'https://github.com/bautibadino/CursoJs',
        },        {
            img: imageUrls.backendShop,
            title: 'Backend de web shop',
            text: 'Backend completo de shop online con node y express, api creada para consumir desde un front',
            linkDeploy: 'https://github.com/bautibadino/TiendaBack',
            linkGit: 'https://github.com/bautibadino/TiendaBack',
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
            const {title, img, text, linkDeploy, linkGit} = slide;
        return(
        <Container className='card-carrousel' key={index} >
            <Container className='card-carrousel-text'>
                <h4>{title}</h4>
                <p>
                    {text}
                </p>
                <Button onClick={() => routeChange(linkDeploy)} variant="outline-light">Ver deploy<AiOutlineArrowRight className='flecha-ver-mas'/></Button>
                <Button onClick={() => routeChange(linkGit)} variant="outline-light">Ver codigo<AiOutlineArrowRight className='flecha-ver-mas'/></Button>
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

