import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAD0iTo7rhnhj9YTzM4ygtdWmyCqvkwRA",
  authDomain: "box-clothing-db-4bdcf.firebaseapp.com",
  projectId: "box-clothing-db-4bdcf",
  storageBucket: "box-clothing-db-4bdcf.appspot.com",
  messagingSenderId: "431483537321",
  appId: "1:431483537321:web:0ce123525d08d9988a26b8"
};

// Initialize Firebase
const firebaseInstanceApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// secara langsung menunjuk ke alamat database yang ada di firebase
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDoc = doc(db, "users", userAuth.uid)

  const userSnapShot = await getDoc(userDoc)

  if (userSnapShot.exists() === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        createdAt
      })
    }
    catch (error) {
      console.log(error.message)
    }
  }
  return userSnapShot;
}