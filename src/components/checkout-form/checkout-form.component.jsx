import { useFormik } from "formik";
import * as Yup from "yup";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./checkout-form.styles.scss";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("This field es required"),
  lastName: Yup.string().trim().required("This field is required"),
  streetAddress: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  province: Yup.string().required("This field is required"),
  postalCode: Yup.string().required("This field is required"),
});

const CheckoutForm = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      streetAddress: "",
      city: "",
      province: "",
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
      <h2 className="form-h2">SHIPPING</h2>
      <form className="shipping-form">
        <div className="name-lastName-form">
          <FormInput
            id="form1"
            label="Name"
            className="form-input"
            name="name"
            type="text"
            isError={touched.name && errors.name}
            {...getFieldProps("name")}
          />
          <FormInput
            id="form2"
            label="Last Name"
            className="form-input"
            name="lastName"
            type="text"
            isError={touched.name && errors.name}
            {...getFieldProps("lastName")}
          />
        </div>
        <FormInput
          id="form3"
          label="Street Address"
          className="form-input"
          name="streetAddress"
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps("streetAddress")}
        />
        <FormInput
          id="form4"
          label="City"
          className="form-input"
          name="city"
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps("city")}
        />
        <FormInput
          id="form5"
          label="Province"
          className="form-input"
          name="province"
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps("province")}
        />
        <FormInput
          id="form6"
          label="Postal Code"
          className="form-input"
          name="postalCode"
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps("postalCode")}
        />
      </form>
      <div className="h3-shippingCompany-container">
        <h3 className="form-h3">SHIPPING COMPANY</h3>
        <select name="select" id="select">
          <option value="value1">UPS</option>
          <option value="value1">BEUEMER group</option>
        </select>
        <button className="checkout-button">Continue to Payment</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
