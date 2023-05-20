// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9DR5e4QpKXLmqfgGau1XvE5eMrX1dOBc",
  authDomain: "videoclone-c1ce2.firebaseapp.com",
  projectId: "videoclone-c1ce2",
  storageBucket: "videoclone-c1ce2.appspot.com",
  messagingSenderId: "496629526049",
  appId: "1:496629526049:web:aca3f511d1719e5e1abd60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;