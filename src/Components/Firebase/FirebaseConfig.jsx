import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


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
