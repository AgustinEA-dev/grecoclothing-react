import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { toast } from "sonner";

import "./sign-up-form.styles.scss";

export const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!displayName && !email && !password && !confirmPassword) {
      toast.warning("Please complete all fields.");
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      if (user) {
        toast.success("Your user has been created.");
        resetFormFields();
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("User or email already in use.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span className="sign-up-span">
          Sign up with your email and password
        </span>
        <form className="sign-up-form">
          <FormInput
            label="Full Name"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
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
          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button type="button" onClick={handleSubmit}>
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
