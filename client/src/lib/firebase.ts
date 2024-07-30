// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC20-QB9IhWdp5TpyCSHeyLM_ru5yQBA1U",
  authDomain: "ecommerce-17698.firebaseapp.com",
  projectId: "ecommerce-17698",
  storageBucket: "ecommerce-17698.appspot.com",
  messagingSenderId: "471188357461",
  appId: "1:471188357461:web:30f7f7021bbc2344b32fdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
