import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>I am the Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
