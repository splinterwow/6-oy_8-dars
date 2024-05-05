import React, { useEffect } from "react";

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfin";

import { useContext } from "react";

import { GlobalContext } from "../context/useGlobal";
import { useActionData } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

function useSingup() {
  const { dispatch } = useContext(GlobalContext);

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        toast.success(errorMessage);
      });
  };

  const registerWithEmailAndPassword = (actionData) => {
    createUserWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        await updateProfile(auth.currentUser, {
          displayName: actionData.name,
          photoURL: actionData.image,
        });
        dispatch({ type: "LOG_IN", payload: user });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return { signUpWithGoogle, registerWithEmailAndPassword };
}

export { useSingup };
