import { Container } from "react-bootstrap";
import "./AboutStyles.css";
import {
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { Parallax } from "react-scroll-parallax";
import {TalkImage} from "../Firebase/FirebaseConfig/TalkImage"

export const AboutPage = () => {

  return (
    <Container fluid id="SobreMi" className='container-about'>
      <div>
        <Parallax 
        translateX={[-35, 10]}
        >
          <div className="texto-about ">
            <h3>
              Hola, soy <strong>Bautista</strong>
            </h3>
            <p>
              soy un desarrollador Front-End en busca de salir de mi zona de confort y enfrentar desafios que me permitan crecer como profesional.
            </p>
          </div>
          <div>
            <h4>Skills</h4>
            <ul>
              <li>
                <p>
                  HTML <FaHtml5 />
                </p>
              </li>
              <li>
                <p>
                  CSS <FaCss3Alt />
                </p>
              </li>
              <li>
                <p>
                  JavaScript <IoLogoJavascript />
                </p>
              </li>
              <li>
                <p>
                  React <FaReact />
                </p>
              </li>
              <li>
                <p>
                  Bootstrap <FaBootstrap />
                </p>
              </li>
              <li>
                <p>
                  Git <FaGithub />{" "}
                </p>
              </li>
              <li>
                <p>
                  node <FaNode />
                </p>
              </li>
              <li>
                <p>
                  Firebase <IoLogoFirebase />{" "}
                </p>
              </li>
            </ul>
          </div>
        </Parallax>
        <Parallax
        translateX={[10, -35]} 
        className="caracteristicas-about" >
          <Parallax
          translateX={['60px', '0px']}

          easing="easeInQuad"
          className="card-caracteristica"
          >
            <div className="imagen-caracteristica">
              <img src={"src/images/idea.svg"} />
            </div>
            <div>
              <h5>Habilidad para resolver problemas</h5>
              <p>
              Me destaco por mi habilidad para identificar y resolver problemas de manera efectiva, mediante el análisis crítico y la toma de decisiones consciente.
              </p>
            </div>
          </Parallax>
          <Parallax 
          className="card-caracteristica"
          translateX={['50px', '0px']}
          easing="easeInQuad"
          >
            <div className="imagen-caracteristica">
              <img src={<TalkImage/>} />
            </div>
            <div>
              <h5>Buena comunicacion</h5>
              <p>
              Mi habilidad para comunicarme con claridad y eficacia me permite establecer relaciones interpersonales efectivas y lograr objetivos de manera colaborativa.
              </p>
            </div>
          </Parallax>
          <Parallax
          className="card-caracteristica"
          translateX={['60px', '0px']}
          easing="easeInQuad"
          speed={0.6}
          >
            <div className="imagen-caracteristica">
              <img src={"src/images/Online report_Flatline.svg"} alt="" />
            </div>
            <div>
              <h5>Proactivo y comprometido</h5>
              <p>
                Me caracterizo por mi compromiso hacia el aprendizaje constante
                y mi disposición a enfrentar nuevos desafíos.
              </p>
            </div>
          </Parallax>
        </Parallax>
      </div>
    </Container>
  );
};
