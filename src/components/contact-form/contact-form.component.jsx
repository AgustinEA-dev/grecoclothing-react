import { useFormik } from "formik";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import TextArea from "../text-area/text-area.component";
import Footer from "../footer/footer.component";
import "./contact-form.styles.scss";

import { validationSchema } from "../../schemas/validationSchema";

const ContactForm = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      textArea: "",
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
          name="lastName"
          type="text"
          isError={touched.lastName && errors.lastName}
          {...getFieldProps("lastName")}
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
          name="textArea"
          type="text"
          id="message"
          isError={touched.textArea && errors.textArea}
          {...getFieldProps("textArea")}
        />
        <Button onSubmit={handleSubmit}>Submit</Button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactForm;
