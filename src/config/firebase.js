import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBe1s3mplo5vfo3oP8jco02m1XXX2xq4mA",
  authDomain: "login-app-6f396.firebaseapp.com",
  projectId: "login-app-6f396",
  storageBucket: "login-app-6f396.appspot.com",
  messagingSenderId: "1075499910689",
  appId: "1:1075499910689:web:3dcc82ef1187e6c0144560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
