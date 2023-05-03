import { Container } from "react-bootstrap";
import "./ProjectsStyles.css";
import { Parallax } from "react-scroll-parallax";
import Carrousel from "./Carrousel";
import RocketImage from "../Firebase/FirebaseConfig";

export const ProjectsPage = () => {
  const projects = [
    {
      name: "Proyecto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repudiandae!",
      url: "src/images/Vite + React_files/pexels-pok-rie-130879.jpg",
    },
    {
      name: "Proyecto 2",
      description: "Lorem ipsum dolor sit amet consectetur adipi",
      url: "src/images/Vite + React_files/pexels-pok-rie-130879.jpg",
    },
    {
      name: "Proyecto 3",
      description: "Lorem ipsum ASDASDASDASDASD sit amet consectetur adipi",
      url: "src/images/Vite + React_files/pexels-pok-rie-130879.jpg",
    }

  ]
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <Container fluid>
        <Container className="cohetes">
          <Parallax speed={28}>
          <RocketImage/>
          </Parallax>
          <Parallax speed={15}>
          <RocketImage/>
          </Parallax>
          <Parallax speed={22}>
          <RocketImage/>
          </Parallax>
          <Parallax speed={130}>
          <RocketImage/>
          </Parallax>
          <Parallax speed={35}>
          <RocketImage/>
          </Parallax>
          <Parallax speed={100}>
          <RocketImage/>
          </Parallax>
          <Parallax speed={20}>
          <RocketImage/>
          </Parallax>
          <Parallax speed={94}>
          <RocketImage/>
          </Parallax>
        </Container>
        <Container fluid className="container-projects">
          <Carrousel slides={projects}/>
        </Container>
      </Container>
    </section>
  );
};
