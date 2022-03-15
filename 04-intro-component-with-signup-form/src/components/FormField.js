import React, { Fragment } from "react";
import FormFooter from "./FormFooter";

import { useFormik } from "formik";
import validations from "../validations";

const FormField = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },

      onSubmit: values => {
        console.log(values);
      },
      validationSchema: validations,
    });

  const fields = ["firstName", "lastName", "email", "password"];

  const placeHolder = item => {
    switch (item) {
      case "firstName":
        return "First Name";
      case "lastName":
        return "Last Name";
      case "email":
        return "Email Address";
      case "password":
        return "Password";

      default:
        return "";
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {fields.map((field, i) => (
          <Fragment key={i}>
            <input
              name={field}
              placeholder={placeHolder(field)}
              value={values[field]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="errors">
              {errors[field] && touched[field] && <p>{errors[field]}</p>}
            </div>
          </Fragment>
        ))}

        <button type="submit">Claim Your Free Trial</button>
      </form>

      <FormFooter />
    </div>
  );
};

export default FormField;
