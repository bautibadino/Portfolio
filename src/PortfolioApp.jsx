import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import "animate.css";
import "./App.css";
import { Provider } from "./Context/Provider";
import { ParallaxProvider } from "react-scroll-parallax";
import { ContactPage } from "./Components/ContactPage/ContactPage";
import { ProjectsPage } from "./Components/ProjectsPage/ProjectsPage";
import { AboutPage } from "./Components/AboutPage/AboutPage";
import { HomePage } from "./Components/HomePage/HomePage";



export const PortfolioApp = () => {
    return (
      <BrowserRouter>
        <Provider>
          <ParallaxProvider>
            <Layout />
            <main>
              <HomePage />
              <AboutPage />
              <ProjectsPage />
              <ContactPage />
            </main>
          </ParallaxProvider>
        </Provider>
      </BrowserRouter>
    );
  }