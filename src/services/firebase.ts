// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkhcwt2hmELmWf_Dbc2hdn9HUcyRpk69c",
  authDomain: "valentes-de-sirinhaem-a9cdf.firebaseapp.com",
  projectId: "valentes-de-sirinhaem-a9cdf",
  storageBucket: "valentes-de-sirinhaem-a9cdf.appspot.com",
  messagingSenderId: "742631037483",
  appId: "1:742631037483:web:6bae8333671f2b4be8e86e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
