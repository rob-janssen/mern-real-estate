import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-49b58.firebaseapp.com",
  projectId: "mern-estate-49b58",
  storageBucket: "mern-estate-49b58.appspot.com",
  messagingSenderId: "836620224498",
  appId: "1:836620224498:web:f1cda719fbc9ea67798d6b",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
