import React, { Fragment } from "react";
import FormFooter from "./FormFooter";

import { useFormik } from "formik";
import validations, { placeHolder } from "../validations";

const FormField = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },

      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
      validationSchema: validations,
    });

  const fields = Object.keys(values);

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
