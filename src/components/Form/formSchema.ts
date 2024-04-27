import * as yup from "yup";
import { AuthData } from "../../interfaces/AuthData";

// Schema validation form with Yup
export const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstname: yup.string().required("First name is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
// Initial values form defined
export const initialValues: AuthData = {
  email: "",
  firstname: "",
  password: "",
  confirmPass: "",
};
