// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB56Q3dkM6NfxbgDNrpIfpvkPKP4m4bKHA",
  authDomain: "tanxfi-e6a69.firebaseapp.com",
  projectId: "tanxfi-e6a69",
  storageBucket: "tanxfi-e6a69.appspot.com",
  messagingSenderId: "284134898922",
  appId: "1:284134898922:web:d94f9189917e13503b2b93",
  measurementId: "G-F9GDVGZPNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);