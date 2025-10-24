// Do Not send firebase config to repo

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvXTZGVajd3A7ctPFngGr9qFPhunDpxvQ",
  authDomain: "simple-firebase-auth-2c44a.firebaseapp.com",
  projectId: "simple-firebase-auth-2c44a",
  storageBucket: "simple-firebase-auth-2c44a.firebasestorage.app",
  messagingSenderId: "884563779291",
  appId: "1:884563779291:web:4fce2999dcccc5986f76fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
