// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm1xWROXgYm5Kk2nIcIiDgdu_n6K7uBWk",
  authDomain: "nextjs-auth-958b4.firebaseapp.com",
  projectId: "nextjs-auth-958b4",
  storageBucket: "nextjs-auth-958b4.appspot.com",
  messagingSenderId: "783557461432",
  appId: "1:783557461432:web:37e576d0888045a2ecfb4d",
  measurementId: "G-F0PDKW24XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);