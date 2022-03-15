import React from "react";
import FormFooter from "./FormFooter";

import { useFormik } from "formik";

const FormField = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={values.firstName}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={values.lastName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Adress"
          onChange={handleChange}
          value={values.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />

        <button type="submit">Claim Your Free Trial</button>
      </form>

      <FormFooter />
    </div>
  );
};

export default FormField;
