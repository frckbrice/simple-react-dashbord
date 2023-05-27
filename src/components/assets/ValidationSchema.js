import * as yup from "yup";

export default yup.object().shape({
  firstName: yup.string().required("the name is required"),
  lastName: yup.string().required("the last name is required"),
  email: yup
    .string()
    .required("the email is required")
    .email("email need to be correct"),
  password: yup
    .string()
    .required("the password is required")
    .min(8, "the password must contain at least 8 characters"),
  passwordConfirmation: yup
    .string()
    .required("this password confirmation is required")
    .oneOf([yup.ref("password")], "the passwords are not the same"),
});
