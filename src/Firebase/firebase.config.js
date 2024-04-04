// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ4oDVNubys5EqHA7ZAw4pXv5wniVcRQI",
  authDomain: "react-dragon-news-auth-c917f.firebaseapp.com",
  projectId: "react-dragon-news-auth-c917f",
  storageBucket: "react-dragon-news-auth-c917f.appspot.com",
  messagingSenderId: "683394727074",
  appId: "1:683394727074:web:eeab1e849ca8829128abfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;