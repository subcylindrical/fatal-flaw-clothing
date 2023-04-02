import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  snapshotEqual,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAK2540vD75TJp0BNlPND23Su5XJoOcSPQ',
  authDomain: 'fatal-flaw-clothing-db.firebaseapp.com',
  projectId: 'fatal-flaw-clothing-db',
  storageBucket: 'fatal-flaw-clothing-db.appspot.com',
  messagingSenderId: '108778724600',
  appId: '1:108778724600:web:a80e3b06406cae9206af0d',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('failed to create user', error.message);
    }
  }
  return userDocRef;
};
