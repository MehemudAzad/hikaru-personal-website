// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SYbN6Ayms_DgTDROyTpyGvFBUhx5edM",
  authDomain: "trainer-hikaru.firebaseapp.com",
  projectId: "trainer-hikaru",
  storageBucket: "trainer-hikaru.appspot.com",
  messagingSenderId: "550238489546",
  appId: "1:550238489546:web:25f703e5d0ae9dcf345d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;