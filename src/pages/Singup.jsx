import { Form, Link, useActionData } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useSingup } from "../hooks/useSingup";
import Forminput from "../components/Forminput";
import { useEffect } from "react";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");

  return { name, email, image, password };
};

function Singup() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSingup();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      registerWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  return (
    <div className="min-h-screen grid place-content-center w-full">
      <div className="mb-3">
        <h1 className=" text-4xl font-bold text-center">SignUp</h1>
        <Form method="post" className="mb-3 w-96">
          <Forminput label="Display Name" type="text" name="displayName" />
          <Forminput label="Email" type="email" name="email" />
          <Forminput label="Image" type="url" name="image" />
          <Forminput label="Password" type="text" name="password" />
          <div className="mt-5">
            <SubmitBtn onClick={registerWithEmailAndPassword} text="Submit" />
          </div>
        </Form>
      </div>
      <div>
        <button
          onClick={signUpWithGoogle}
          type="button"
          className="btn btn-secondary  w-full"
        >
          <FcGoogle className="h-5 w-5" /> Singup
        </button>
        <p className="mt-4 text-center">
          Already registerd ?
          <Link to="/login" className=" link link-primary font-extrabold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Singup;
