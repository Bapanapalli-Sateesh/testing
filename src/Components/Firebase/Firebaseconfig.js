import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDV08WZhlvYhS-Rf6Cm994cwQy2br7GUE8",
  authDomain: "example-bff9f.firebaseapp.com",
  projectId: "example-bff9f",
  storageBucket: "example-bff9f.firebasestorage.app",
  messagingSenderId: "286175772068",
  appId: "1:286175772068:web:7e2c02ffd6b489a23a5531"
};

const app = initializeApp(firebaseConfig);
const GoogleProvider = new GoogleAuthProvider();
const Auth = getAuth();

export {GoogleProvider, Auth, app}
