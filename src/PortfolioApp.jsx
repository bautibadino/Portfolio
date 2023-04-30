import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import "animate.css";
import { Provider } from "./Context/Provider";
import { HomePage } from "./Components/HomePage/HomePage";
import { AboutPage } from "./Components/AboutPage/AboutPage";
import { ProjectsPage } from "./Components/ProjectsPage/ProjectsPage";
import { ContactPage } from "./Components/ContactPage/ContactPage";
import { ParallaxProvider } from 'react-scroll-parallax';
export const PortfolioApp = () => {
  return (
    <BrowserRouter>
      <Provider>
      <ParallaxProvider>
        <Layout />
        <main>
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
        </main>
      </ParallaxProvider>
      </Provider>
    </BrowserRouter>
  );
};
