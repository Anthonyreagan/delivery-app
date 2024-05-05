// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIvao0mSe8TBsSjntTg8YIUnCoqSL6a9c",
  authDomain: "swift-proj.firebaseapp.com",
  projectId: "swift-proj",
  storageBucket: "swift-proj.appspot.com",
  messagingSenderId: "62535754987",
  appId: "1:62535754987:web:9a13501f846020c8cdcaae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export  const auth = getAuth(app)