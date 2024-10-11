import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import TextArea from "../text-area/text-area.component";

import "./contact-form.styles.scss";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("This field es required"),
  lastname: Yup.string().trim().required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  textarea: Yup.string()
    .min(50)
    .required("This field must have at least 50 characters"),
});

const ContactForm = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      textarea: "",
    },

    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      resetForm();
    },
  });

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Contact us!</h2>
      <form className="contact-form">
        <FormInput
          label="Name"
          className="form-input"
          name="name"
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps("name")}
        />
        <FormInput
          label="Last Name"
          className="form-input"
          name="lastname"
          type="text"
          isError={touched.lastname && errors.lastname}
          {...getFieldProps("lastname")}
        />
        <FormInput
          label="Email"
          className="form-input"
          name="email"
          type="email"
          isError={touched.email && errors.email}
          {...getFieldProps("email")}
        />
        <TextArea
          label="Tell us what you need"
          name="textarea"
          type="text"
          id="message"
          isError={touched.textarea && errors.textarea}
          {...getFieldProps("textarea")}
        />
        <Button onSubmit={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
