// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9LLujGAgCstAmGhvJmS40aLiHFgnCWyY",
  authDomain: "my-love-d9b08.firebaseapp.com",
  projectId: "my-love-d9b08",
  storageBucket: "my-love-d9b08.appspot.com",
  messagingSenderId: "295421262137",
  appId: "1:295421262137:web:ba0b430723369675e510e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
