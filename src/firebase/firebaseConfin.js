// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDtlAHi5AfmymETpjvleLSsLLOpFgmz0aE",
  authDomain: "mymarket-41b14.firebaseapp.com",
  projectId: "mymarket-41b14",
  storageBucket: "mymarket-41b14.appspot.com",
  messagingSenderId: "470319733986",
  appId: "1:470319733986:web:57b17f7513af564db252bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
