// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwJr4x4xDuFXU2sPQ839fylqdxg18chLI",
  authDomain: "task-management-1b5d2.firebaseapp.com",
  projectId: "task-management-1b5d2",
  storageBucket: "task-management-1b5d2.appspot.com",
  messagingSenderId: "240264291283",
  appId: "1:240264291283:web:c110c1db24aa1b70c3c526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;