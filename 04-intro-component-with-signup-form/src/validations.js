import * as yup from "yup";

const validations = yup.object().shape({
  firstName: yup.string().required("First Name cannot be empty"),
  lastName: yup.string().required("Last Name cannot be empty"),
  email: yup
    .string()
    .email("Looks like this is not an email")
    .required("Email cannot be empty"),
  password: yup
    .string()
    .min(6, "En az 6 karakter olmalidir")
    .required("Password cannot be empty"),
});

export default validations;
