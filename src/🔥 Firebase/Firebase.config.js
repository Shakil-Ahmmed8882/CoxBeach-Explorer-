// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4TCB9VzSnxt2xj6fuoZgOlHia0AhwIsY",
  authDomain: "coxbeach-explorer.firebaseapp.com",
  projectId: "coxbeach-explorer",
  storageBucket: "coxbeach-explorer.appspot.com",
  messagingSenderId: "859872300305",
  appId: "1:859872300305:web:53803df4d82182b29cd0b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app