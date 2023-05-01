
import { Button, Container } from 'react-bootstrap';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
export default function Carrousel () {

  return (
    <Container className="carrousel">
        <Container className='contenedor-flecha-izq'>
            <Button onClick={() => console.log('izq')} className='flecha-izquierda'>
                <BsFillArrowLeftSquareFill/>
        </Button >
        </Container>

        <Container className='card-carrousel'>
            
            <Container className='card-carrousel-text'>
                <h4>PROJECT NAME</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button variant="outline-light">View Project</Button>
            </Container>
            <Container className='card-carrousel-img'>
            <img src='src/images/Vite + React_files/pexels-pok-rie-130879.jpg'/>
            </Container>
        </Container>   
        <Container className='contenedor-flecha-der'>
            <Button onClick={() => console.log('derecha')} className='flecha-derecha'>
                <BsFillArrowRightSquareFill/>
            </Button>
        </Container>    
        </Container>
  );
}

