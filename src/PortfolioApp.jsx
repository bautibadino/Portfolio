import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "animate.css";
import "./App.css";
import { Provider } from "./Context/Provider";
import { Layout } from "./Layout/Layout";
import { ContactPage } from "./Components/ContactPage/ContactPage";
import { ProjectsPage } from "./Components/ProjectsPage/ProjectsPage";
import { AboutPage } from "./Components/AboutPage/AboutPage";
import { HomePage } from "./Components/HomePage/HomePage";






export const PortfolioApp = () => {

    return (
      <BrowserRouter>
        <Provider>
          <ParallaxProvider>
            {

            }
            <Layout />
              <HomePage />
              <AboutPage />
              <ProjectsPage />
              <ContactPage />
          </ParallaxProvider>
        </Provider>
      </BrowserRouter>
    );
  }