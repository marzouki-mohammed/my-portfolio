// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM4Fm4nsN3RBjiAcMoG_ITas7tnTNPsjU",
  authDomain: "my-portfolio-1848b.firebaseapp.com",
  projectId: "my-portfolio-1848b",
  storageBucket: "my-portfolio-1848b.firebasestorage.app",
  messagingSenderId: "831771015619",
  appId: "1:831771015619:web:391e52787be6a9c8606576",
  measurementId: "G-KEYZQ28QT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);