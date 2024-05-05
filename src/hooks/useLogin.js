import { signInWithEmailAndPassword } from "firebase/auth";
import { useActionData } from "react-router-dom";
import toast from "react-hot-toast";
import { GlobalContext } from "../context/useGlobal";
import { useContext } from "react";

import { auth } from "../firebase/firebaseConfin";

function useLogin() {
  const { dispatch } = useContext(GlobalContext);

  const loginWithEmailAndPassword = (actionData) => {
    signInWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.success(errorMessage);
      });
  };
  return { loginWithEmailAndPassword };
}

export { useLogin };
