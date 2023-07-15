// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMX5hxQHshfD281SimBni801BOLjeyn4I",
  authDomain: "chat-872ee.firebaseapp.com",
  projectId: "chat-872ee",
  storageBucket: "chat-872ee.appspot.com",
  messagingSenderId: "1074815540929",
  appId: "1:1074815540929:web:5fe5496529a6643b04fe40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()