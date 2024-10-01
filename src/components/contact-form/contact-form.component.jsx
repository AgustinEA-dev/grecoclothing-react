import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../button/button.component";

import "./contact-form.styles.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2 className="form-title">Contact us!</h2>
      <form className="contact-form">
        <label htmlFor="">Name</label>
        <input className="form-input" type="text" />
        <label htmlFor="">Last Name</label>
        <input className="form-input" type="text" />
        <label htmlFor="">Email</label>
        <input className="form-input" type="email" />
        <label htmlFor="">Tell us what you need!</label>
        <textarea name="message" id="message"></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
