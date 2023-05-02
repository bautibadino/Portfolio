import { Button, Container } from 'react-bootstrap';
import Carousel from "nuka-carousel"
import {BsArrowBarRight} from 'react-icons/bs'
export default function Carrousel  (){
    const slides = [
        {
            img: 'src/images/Vite + React_files/pexels-pok-rie-130879.jpg',
            title: 'NOMBRE PROY1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, autem!'
        },
        {
            img: 'src/images/Vite + React_files/pexels-pok-rie-130879.jpg',
            title: 'NOMBRE PROY2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, autem!'
        },
        {
            img: 'src/images/Vite + React_files/pexels-pok-rie-130879.jpg',
            title: 'NOMBRE PROY3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, autem!'
        },
    ]

    const props = {
        autoplay: true,
    }
  return (
    <Carousel props={props} className="carrousel">
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
                <Button variant="outline-light">ver mas  <BsArrowBarRight/></Button>
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

