// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC565l3JzFcMDwlJwmUOjwSCVZW2ZM8PTk",
  authDomain: "swiftsafe-70636.firebaseapp.com",
  projectId: "swiftsafe-70636",
  storageBucket: "swiftsafe-70636.appspot.com",
  messagingSenderId: "451165740833",
  appId: "1:451165740833:web:6f6323730b7a5d630b6860",
  measurementId: "G-KVNN3Q9RK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleSignIn = GoogleAuthProvider()