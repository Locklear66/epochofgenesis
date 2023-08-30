// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBKInHt1dCamRwQGg6Ao4gfNvOByRcWMI",
  authDomain: "betrbeta-4849a.firebaseapp.com",
  projectId: "betrbeta-4849a",
  storageBucket: "betrbeta-4849a.appspot.com",
  messagingSenderId: "14690794846",
  appId: "1:14690794846:web:8867c48f401601a6b8a3cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)