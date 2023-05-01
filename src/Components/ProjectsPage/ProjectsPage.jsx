import { Container } from "react-bootstrap";
import "./ProjectsStyles.css";
import { Parallax } from "react-scroll-parallax";
import Carrousel from "./Carrousel";

export const ProjectsPage = () => {
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
          <Parallax speed={-5}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={100}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={-30}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
          <Parallax speed={0}>
            <img src="src/images/Cohete.svg" alt="" />
          </Parallax>
        </Container>
        <Container fluid className="container-projects">
          <Carrousel />
        </Container>
      </Container>
    </section>
  );
};
