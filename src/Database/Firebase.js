// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCU3NCjuo6R_wLON59Vi03KBBsSNGu2ek",
  authDomain: "mindmendor-bd76f.firebaseapp.com",
  projectId: "mindmendor-bd76f",
  storageBucket: "mindmendor-bd76f.firebasestorage.app",
  messagingSenderId: "453574959913",
  appId: "1:453574959913:web:d0c38bf0ab1bf9df844d38",
  measurementId: "G-4K98WJKN7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);