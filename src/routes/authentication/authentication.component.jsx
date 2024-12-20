import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Footer from "../../components/footer/footer.component";

import { Toaster } from "sonner";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
      <div className="footer-container">
        <Toaster richColors />
        <Footer />
      </div>
    </>
  );
};

export default Authentication;
