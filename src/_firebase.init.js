import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSxA5HDnyZEcEGOreMDATPTf2w9BpzVSk",
  authDomain: "explorewithamir-9b4eb.firebaseapp.com",
  projectId: "explorewithamir-9b4eb",
  storageBucket: "explorewithamir-9b4eb.appspot.com",
  messagingSenderId: "762148858581",
  appId: "1:762148858581:web:ca7819d722df5915a6505c",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
