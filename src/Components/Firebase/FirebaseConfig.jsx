import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React, { useState, useEffect } from "react";

// Initialize Firebase with environment variables
const firebaseConfig = {
  apiKey: "AIzaSyAcMQD0scR71mNauXRjw7KHHWlMHYYIbqw",
  authDomain: "my-portfolio-7b4ec.firebaseapp.com",
  projectId: "my-portfolio-7b4ec",
  storageBucket: "my-portfolio-7b4ec.appspot.com",
  messagingSenderId: "1057881140688",
  appId: "1:1057881140688:web:33fa11ad74b0eeeec5ddd5",
  measurementId: "G-0SSDCJMYFG"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
export const storage = getStorage(app);

// Create a parent component that fetches the image URLs
export default function ImagesContainer() {
  // Use state to store the object of image URLs
  const [imageUrls, setImageUrls] = useState({});

  // Define an async function to get the download URLs of 5 images
  async function getImageUrls() {
    // Create an object of references to the image files
    const references = {
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
// Create a child component that displays the rocket image
function RocketImage(props) {
  // Destructure the props to get the image URLs
  const { imageUrls } = props;

  // Return an img element with the rocket image URL as src
  return <img src={imageUrls.cohete} alt="Cohete" />;
}

// Create a child component that displays the star image
function TalkImage(props) {
  // Destructure the props to get the image URLs
  const { imageUrls } = props;

  // Return an img element with the star image URL as src
  return <img src={imageUrls.talk} alt="talk" />;
}

// Create a child component that displays the planet image
function FondoImage(props) {
  // Destructure the props to get the image URLs
  const { imageUrls } = props;
  return <img src={imageUrls.fondo} alt="Fondo" />;

}

function IdeaImage(props) {
  // Destructure the props to get the image URLs
  const { imageUrls } = props;
  return <img src={imageUrls.idea} alt="idea" />;

}

function ProactivoImage(props) {
  // Destructure the props to get the image URLs
  const { imageUrls } = props;
  return <img src={imageUrls.proactivo} alt="proactivo" />;

}
  // Return a div element with five child components that receive the image URLs as props
  return (
    <div>
      <RocketImage imageUrls={imageUrls} />
      <ProactivoImage imageUrls={imageUrls} />
      <TalkImage imageUrls={imageUrls} />
      <FondoImage imageUrls={imageUrls} />
      <IdeaImage imageUrls={imageUrls} />
    </div>
  );
}

