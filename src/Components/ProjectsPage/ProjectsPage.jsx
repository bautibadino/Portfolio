import { Container } from "react-bootstrap";
import "./ProjectsStyles.css";
import { Parallax } from "react-scroll-parallax";
import Carrousel from "./Carrousel";

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
          <Parallax speed={5}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={-25}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={22}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={130}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={35}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={100}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={-30}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={94}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
        </Container>
        <Container fluid className="container-projects">
          <Carrousel slides={projects}/>
        </Container>
      </Container>
    </section>
  );
};
