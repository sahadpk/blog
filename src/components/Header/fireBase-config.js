
import { initializeApp } from "firebase/app";
import {getFirestore}from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4GOTWUhiRzd5EnoLukPF7mLIXczUa5oo",
  authDomain: "blog-c5193.firebaseapp.com",
  projectId: "blog-c5193",
  storageBucket: "blog-c5193.appspot.com",
  messagingSenderId: "588682747483",
  appId: "1:588682747483:web:dcc37f2488120b197f297e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
