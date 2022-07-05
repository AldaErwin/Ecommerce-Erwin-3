// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASFsUTRA0JpvC-mXVc2Jak0lWb3CEfraQ",
  authDomain: "ecommerce-reactjs-fdeba.firebaseapp.com",
  projectId: "ecommerce-reactjs-fdeba",
  storageBucket: "ecommerce-reactjs-fdeba.appspot.com",
  messagingSenderId: "12502533691",
  appId: "1:12502533691:web:c7c6188a28ebd2de0cfe1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}

