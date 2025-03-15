// do not store on the config site

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdQDv4St8DXIAknfOytPUbJ3BH9t1q8Jk",
  authDomain: "simple-firebase-721c9.firebaseapp.com",
  projectId: "simple-firebase-721c9",
  storageBucket: "simple-firebase-721c9.firebasestorage.app",
  messagingSenderId: "198213188852",
  appId: "1:198213188852:web:386648412bcf16809bf2a1",
  measurementId: "G-B75FGC9LTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;