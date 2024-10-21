import { Toaster, toast } from "sonner";

import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        toast.success("Welcome back!");
      }
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error) {
        toast.error("Invalid credentials.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span className="sign-in-span">
          Sign in with your email and password
        </span>
        <form className="sign-in-form">
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="buttons-container">
            <Button onClick={handleSubmit}>Sign In</Button>
            <Button
              type="button"
              buttonType="google"
              onClick={signInWithGoogle}
            >
              Google sign in
            </Button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-center" richColors />
    </>
  );
};

export default SignInForm;
