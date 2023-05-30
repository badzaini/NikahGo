// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVlCneMnxTpjmnRTEMXpbasMFpBxF1enc",
  authDomain: "nikahgo-639de.firebaseapp.com",
  projectId: "nikahgo-639de",
  storageBucket: "nikahgo-639de.appspot.com",
  messagingSenderId: "443955866175",
  appId: "1:443955866175:web:6c037870fc863bd50b268a",
  measurementId: "G-KCRTDZV2WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
