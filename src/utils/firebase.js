// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ7us_Tlfls3E5WBL6IZ_3CvjT_hGqIF8",
  authDomain: "phoo-die.firebaseapp.com",
  projectId: "phoo-die",
  storageBucket: "phoo-die.firebasestorage.app",
  messagingSenderId: "415338577237",
  appId: "1:415338577237:web:747e5a791a1f96519ec3dc",
  measurementId: "G-JFM1P70MQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);