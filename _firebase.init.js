import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbMu51KnlBPRvXs7sK65rBflUVFyGLrak",
  authDomain: "explorewithamir-c33b7.firebaseapp.com",
  projectId: "explorewithamir-c33b7",
  storageBucket: "explorewithamir-c33b7.appspot.com",
  messagingSenderId: "866298013301",
  appId: "1:866298013301:web:bab4372d9422b49ead3a3c",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
