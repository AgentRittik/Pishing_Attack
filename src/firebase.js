
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB3kfQ06LbVDsiOVOZs6P8bL-k-HarBo-k",
  authDomain: "instagram-login-cf2bb.firebaseapp.com",
  projectId: "instagram-login-cf2bb",
  storageBucket: "instagram-login-cf2bb.appspot.com",
  messagingSenderId: "538686886951",
  appId: "1:538686886951:web:adb1b2b3ae0964b2cb6a02",
  measurementId: "G-Y9GB91T8LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;