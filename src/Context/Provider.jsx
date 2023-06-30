import { createContext, useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Components/Firebase/FirebaseConfig";
import "./ContextStyles.css";

import { LoadingSpinner } from "./LoadingSpinner";

// Crear el contexto
export const ImageUrlsContext = createContext();

export const Provider = ({ children }) => {
  const [imageUrls, setImageUrls] = useState({});
  const [loading, setLoading] = useState(true);
  //funcion asincronica para traer la info de la db
  async function getImageUrls() {
    const references = {
      perfil: ref(
        storage,
        "Imagenes/60AC3452-9745-4202-93CA-744E75AB598F_1_105_c.jpg"
      ),
      cohete: ref(storage, "Imagenes/Cohete.svg"),
      proactivo: ref(storage, "Imagenes/Online report_Flatline.svg"),
      talk: ref(storage, "Imagenes/talk.svg"),
      fondo: ref(storage, "Imagenes/pexels-pok-rie-130879.jpg"),
      idea: ref(storage, "Imagenes/idea.svg"),
    };

    const urls = {}
    //iteracion sobre las keys y esperamos las urls de descargas de cada una
    for (let key in references) {
      const url = await getDownloadURL(references[key]);
      // Asignando url a cada llave que coincide con las referencias de arriba
      urls[key] = url;
    }
    //ESTADO CON URLS
    setImageUrls(urls);
  }

  //useEffect para llamar la funcion de obtener urls
  useEffect(() => {
    getImageUrls();
  }, []);
  // Definir el valor del contexto como el objeto de URLs de imágenes
  const valuesProvider = {
    imageUrls,
    loading,
  };

  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  return (
    // Pasa el objeto de URLs de imágenes como valor del contexto
    <ImageUrlsContext.Provider value={valuesProvider}>
      {children}
    </ImageUrlsContext.Provider>
  );
};
