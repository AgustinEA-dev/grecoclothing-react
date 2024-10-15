import { useFormik } from "formik";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./shipping-form.styles.scss";

import { validationSchema } from "../../schemas/validationSchema";

const ShippingForm = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      streetAddress: "",
      province: "",
      email: "",
      postalCode: "",
    },

    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      resetForm();
    },
  });
  return (
    <div className="form-container">
      <h2 className="shipping-form-h2">PAYMENT</h2>
      <form className="shipping-form">
        <div className="name-lastName-container">
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
        </div>
        <FormInput
          label="Street Address"
          className="form-input"
          name="streetAddress"
          type="text"
          isError={touched.streetAddress && errors.streetAddress}
          {...getFieldProps("streetAddress")}
        />
        <FormInput
          label="Province"
          className="form-input"
          name="province"
          type="text"
          isError={touched.province && errors.province}
          {...getFieldProps("province")}
        />
        <FormInput
          label="Email"
          className="form-input"
          name="email"
          type="text"
          isError={touched.email && errors.email}
          {...getFieldProps("email")}
        />
        <FormInput
          id="form6"
          label="Postal Code"
          className="form-input"
          name="postalCode"
          type="text"
          isError={touched.postalCode && errors.postalCode}
          {...getFieldProps("postalCode")}
        />
      </form>
      <div></div>
      <h2 className="shipping-company-h2">Select Shipping Company</h2>
      <select name="select" id="select">
        <option value="value1">UPS</option>
        <option value="value2" selected>
          Mailchimp
        </option>
      </select>
      <Button onSubmit={handleSubmit}>Submit Shipping Information</Button>
    </div>
  );
};

export default ShippingForm;
