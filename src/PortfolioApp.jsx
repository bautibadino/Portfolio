import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import "animate.css";
import { ImageUrlsContext, Provider } from "./Context/Provider";
import { ParallaxProvider } from "react-scroll-parallax";
import { ContactPage } from "./Components/ContactPage/ContactPage";
import { ProjectsPage } from "./Components/ProjectsPage/ProjectsPage";
import { AboutPage } from "./Components/AboutPage/AboutPage";
import { HomePage } from "./Components/HomePage/HomePage";
import { Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
export const PortfolioApp = () => {
  const { imageUrls, loading } = useContext(ImageUrlsContext);
  if (loading) {
    return (
      <div>
        Cargando...
        <Layout />
      </div>
    );
  }
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
};

