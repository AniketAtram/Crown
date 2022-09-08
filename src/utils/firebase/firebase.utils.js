import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCC4vUruM6adtW8TxUTP3eXY1CI6HSVmdk",
  authDomain: "crwn-clothing-react-acb32.firebaseapp.com",
  projectId: "crwn-clothing-react-acb32",
  storageBucket: "crwn-clothing-react-acb32.appspot.com",
  messagingSenderId: "625512554382",
  appId: "1:625512554382:web:62a58f3e52beb4af804edf"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);