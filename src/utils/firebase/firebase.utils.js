import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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

const db = getFirestore();

// Helper function to generate document in user resource in firebase

export const createUserDocumentFromAut = async (userAuth) => {
    // doc takes three arguments, the db instance, name of collection and the id
    const userDocRef = doc(db, 'crwn-users', userAuth.uid);

    // getDoc returns true if the user is present
    const userSnapshot = await getDoc(userDocRef);

    // If user does not exists then create a new user
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        }
        catch (error) {
            console.error(error.message);
        }

    }

    return userDocRef;
};