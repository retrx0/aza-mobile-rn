import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  Firstname: yup.string().required("Firstname is required"),
  Lastname: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
});
