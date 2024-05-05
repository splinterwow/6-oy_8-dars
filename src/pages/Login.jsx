import { Form, Link, useActionData } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useSingup } from "../hooks/useSingup";
import Forminput from "../components/Forminput";
import { useEffect } from "react";
import "../hooks/useLogin";
import { useLogin } from "../hooks/useLogin";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const { signUpWithGoogle } = useSingup();
  const { loginWithEmailAndPassword } = useLogin();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      loginWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  return (
    <div className="min-h-screen grid place-content-center w-full">
      <div className="mb-3">
        <h1 className=" text-4xl font-bold text-center">Login</h1>
        <Form method="post" className="mb-3 w-96">
          <Forminput label="Email" type="email" name="email" />

          <Forminput label="Password" type="text" name="password" />

          <button className="btn btn-primary w-full  mt-5">Submit</button>
        </Form>
      </div>
      <div>
        <button
          onClick={signUpWithGoogle}
          className="btn btn-secondary  w-full"
        >
          <FcGoogle className="h-5 w-5" /> Login
        </button>
        <p className="mt-4  text-center">
          Do not have Account yet ?
          <Link to="/singup" className=" link link-primary font-extrabold">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
