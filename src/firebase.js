// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI3oQgG3cV8UywTNSN98Y0f8zhb8_uWaM",
  authDomain: "handzone-3dc1d.firebaseapp.com",
  projectId: "handzone-3dc1d",
  storageBucket: "handzone-3dc1d.firebasestorage.app",
  messagingSenderId: "895911858535",
  appId: "1:895911858535:web:299f3793e00598d1395fc2",
  measurementId: "G-ZQKYL8MHJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);
export { db };
