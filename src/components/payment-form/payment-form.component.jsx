import { useFormik } from "formik";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./payment-form.styles.scss";

import { validationSchema } from "../../schemas/validationSchema";

const PaymentForm = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      expiry: "",
      cvc: "",
      cardNumber: "",
      postalCode: "",
    },
    validationSchema,
  });
  return (
    <div className="form-container">
      <h2 className="payment-form-h2">PAYMENT</h2>
      <form className="payment-form">
        <FormInput
          label="Name on Card"
          className="form-input"
          name="name"
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps("name")}
        />
        <FormInput
          label="Card Number"
          className="form-input"
          name="cardNumber"
          type="text"
          isError={touched.cardNumber && errors.cardNumber}
          {...getFieldProps("cardNumber")}
        />
        <div className="expiry-cvc-container">
          <FormInput
            id="form4"
            label=""
            className="form-input"
            name="expiry"
            type="date"
            isError={touched.expiry && errors.expiry}
            {...getFieldProps("expiry")}
          />
          <FormInput
            id="form5"
            label="CVC"
            className="form-input"
            name="cvc"
            type="text"
            isError={touched.cvc && errors.cvc}
            {...getFieldProps("cvc")}
          />
        </div>
      </form>
      <Button onSubmit={handleSubmit}>Complete Payment</Button>
    </div>
  );
};

export default PaymentForm;
