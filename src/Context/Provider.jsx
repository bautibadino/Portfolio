import { createContext, useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../Components/Firebase/FirebaseConfig';


// Crear el contexto
export const ImageUrlsContext = createContext();

export const Provider = ({ children }) => {
  // Use state to store the object of image URLs
  const [imageUrls, setImageUrls] = useState({});

  // Define an async function to get the download URLs of 5 images
  async function getImageUrls() {
    // Create an object of references to the image files
    const references = {
      perfil: ref(storage,  'Imagenes/60AC3452-9745-4202-93CA-744E75AB598F_1_105_c.jpg'),
      cohete: ref(storage, "Imagenes/Cohete.svg"),
      proactivo: ref(storage, "Imagenes/Online report_Flatline.svg"),
      talk: ref(storage, "Imagenes/talk.svg"),
      fondo: ref(storage, "Imagenes/pexels-pok-rie-130879.jpg"),
      idea: ref(storage, "Imagenes/idea.svg")
    };

    // Create an empty object to store the URLs
    const urls = {};

    // Loop over the keys of the references object and get the download URL for each one
    for (let key in references) {
      const url = await getDownloadURL(references[key]);
      // Assign the URL to the same key in the urls object
      urls[key] = url;
    }

    // Set the state with the object of URLs
    setImageUrls(urls);
  }

  // Use useEffect to call the function when the component mounts
  useEffect(() => {
    getImageUrls();
  }, []);

  // Definir el valor del contexto como el objeto de URLs de imágenes
  const contextValue = {
    imageUrls
  };

  return (
    // Pasa el objeto de URLs de imágenes como valor del contexto
    <ImageUrlsContext.Provider value={contextValue}>
      {children}
    </ImageUrlsContext.Provider>
  )
}
