import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().trim().required("This field es required"),
  lastName: Yup.string().trim().required("This field is required"),
  streetAddress: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  province: Yup.string().required("This field is required"),
  postalCode: Yup.string().required("This field is required"),
  textArea: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required")
});
