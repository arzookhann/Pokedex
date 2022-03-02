import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVfpFSD6LA1c65eqxPrwP9Zps2MSB34Dw",
  authDomain: "pokedex-202202.firebaseapp.com",
  projectId: "pokedex-202202",
  storageBucket: "pokedex-202202.appspot.com",
  messagingSenderId: "471352222554",
  appId: "1:471352222554:web:04fcbd43585487aca6c963"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const googleSignIn = () => {
  return signInWithPopup(auth, googleAuthProvider);
};

const googleSignOut = () => {
  return signOut(auth);
};

export { app, auth, googleSignIn, googleSignOut };
