import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCdWlbvfHbLrCzIatVe1Nxg0FfH4qXCu_I",
  authDomain: "instant-hire-3baf1.firebaseapp.com",
  projectId: "instant-hire-3baf1",
  storageBucket: "instant-hire-3baf1.appspot.com",
  messagingSenderId: "907477675844",
  appId: "1:907477675844:web:ebb35302edc7c19a0a7111",
  measurementId: "G-GRH14L0PHS"
};



const app=initializeApp(firebaseConfig)
export const auth=getAuth(app)