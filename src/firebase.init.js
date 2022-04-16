// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-QrW-t85y4fSZMHcZw8rLn5c1chcRcAY",
  authDomain: "ema-john-simple-abb7d.firebaseapp.com",
  projectId: "ema-john-simple-abb7d",
  storageBucket: "ema-john-simple-abb7d.appspot.com",
  messagingSenderId: "360794208032",
  appId: "1:360794208032:web:0fb44edaefa4c5afe28945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;